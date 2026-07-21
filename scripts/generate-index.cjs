// Generate the single published index.d.ts by bundling ALL schema $defs (plus a
// few schema roots) into one compile pass — so each shared type is emitted once
// (no per-file numeric-suffix duplicates). A hand-written preamble supplies the
// TS-only utility/composite types that have no schema. This makes schemas the
// single source of truth for the published TypeScript surface.
const { compile } = require("json-schema-to-typescript");
const fs = require("node:fs");
const path = require("node:path");
const { inlineSchema } = require("./validate-schemas.cjs");

const root = path.join(__dirname, "..");
const schemasDir = path.join(root, "schemas");
const outFile = path.join(root, "index.d.ts");

// Schemas whose ROOT object is itself a published type (rest contribute $defs only).
const ROOTS = {
  "flow.json": "Flow",
  "performance-test.json": "PerformanceTest",
  "environment.json": "EnvironmentAndGlobalVariablesConfiguration",
};

// TS-only types with no schema (utility, composite, server-augment, engine-auth).
// Emitted verbatim ahead of the generated body; TS resolves forward references.
const PREAMBLE = `export type Primitive = string | number | boolean | null;
export type JsonValue = Primitive | JsonValue[] | { [key: string]: JsonValue };
export type AnyObject = Record<string, JsonValue>;

export type VariableType =
  | "string"
  | "number"
  | "boolean"
  | "object"
  | "array"
  | "url"
  | "file"
  | "json"
  | "web-identifier"
  | string;

export interface IdentifierCandidate {
  value: string;
  type?: string;
  confidence?: number;
  primary?: boolean;
  unique?: boolean;
  [key: string]: unknown;
}

export type EnvironmentVariable = Variable;

export type BrowserMode = "headed" | "headless" | "headful";
export type BrowserName = "chrome" | "firefox" | "edge" | "safari" | string;
export type FlowExecutionStatus =
  | "completed"
  | "failed"
  | "error"
  | "stopped"
  | "running"
  | "pending"
  | "skipped";

export type TestFlowData = Flow | PerformanceTest;

// Generic pagination envelope — JSON Schema cannot express the type parameter,
// so this stays hand-written (excluded from the generated body).
export interface PaginatedResponse<T> {
  items: T[];
  page: number;
  limit: number;
  total: number;
  hasMore: boolean;
}

export interface SuiteScheduleTest {
  testId: string;
  flowName?: string | null;
}

export interface StoredEnvironment extends Environment {
  accountId: string;
}

export interface StoredGlobalVariable extends GlobalVariable {
  accountId: string;
}

// Runtime resolution — what the engine fetches before execution.
export interface RuntimeContext {
  environments: Environment[];
  globalVariables: GlobalVariable[];
  selectedEnvironmentId?: string;
}

// Engine authentication handshake.
export interface EngineAuthPayload {
  token: string;
  accountId: string;
  userId: string;
}

export interface AuthenticatedRunCommand extends RunCommand {
  auth?: EngineAuthPayload;
  runtimeContext?: RuntimeContext;
}
`;

// Types that stay hand-written in the preamble (schema can't express them).
const EXCLUDE = new Set(["PaginatedResponse"]);

// $def enum overrides — the published surface is intentionally narrower than the
// schema's validation enum (consumers were written against these members).
const ENUM_OVERRIDE = {
  WarningSeverity: ["minor", "medium", "critical"],
};

// Per-def field type overrides — the schema types these loosely (any-object) but
// the published contract is a specific union that consumers depend on.
const FIELD_TSTYPE = {
  StoredTestInput: { flowData: "TestFlowData" },
  StoredTestRecord: { flowData: "TestFlowData" },
  // Variable/GlobalVariable: the published contract types are intentionally
  // looser than the strict validation enum (consumers use extra type labels and
  // may hold undefined mid-edit); strictness stays in the schema for ajv/Python.
  Variable: { type: "VariableType", value: "JsonValue | undefined" },
  GlobalVariable: { type: "VariableType", value: "JsonValue | undefined" },
  ActionData: { config: "AnyObject" },
  // Published contract keeps the browser fields open (engine also accepts
  // "random"/"brave"/pool) and the shared data envelope typed structurally.
  ParallelTestsRequest: {
    browser: "BrowserName",
    browser_mode: "BrowserMode",
    data: "{ environment?: Environment; globalVariables?: GlobalVariable[]; [key: string]: unknown }",
  },
};

// Force JsonValue where the schema means "any JSON value" (empty schema would
// otherwise render as `{ [k: string]: unknown }`, wrongly excluding primitives),
// and apply the per-def field overrides above.
const applyTsTypes = (name, def) => {
  if (def && def.properties && def.properties.value &&
      Object.keys(def.properties.value).every((k) => k === "description")) {
    def.properties.value = { tsType: "JsonValue", description: def.properties.value.description };
  }
  const overrides = FIELD_TSTYPE[name];
  if (overrides && def.properties) {
    for (const [field, tsType] of Object.entries(overrides)) {
      if (def.properties[field]) def.properties[field] = { tsType };
    }
  }
  return def;
};

// json-schema-to-typescript suffixes structurally-identical types reachable
// under different names/paths (e.g. Flow / Flow1 / Flow2, Environment1). Collapse
// each confirmed-identical `Base<digits>` back to `Base` and repoint references.
function collapseDuplicates(ts) {
  const lines = ts.split("\n");
  const decls = [];
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^export (interface|type) ([A-Za-z0-9_]+)\b/);
    if (!m) continue;
    let end = i;
    if (m[1] === "interface") {
      let depth = 0, started = false;
      for (let j = i; j < lines.length; j++) {
        depth += (lines[j].match(/\{/g) || []).length - (lines[j].match(/\}/g) || []).length;
        if (lines[j].includes("{")) started = true;
        if (started && depth <= 0) { end = j; break; }
      }
    } else {
      let j = i;
      while (j < lines.length && !/;\s*$/.test(lines[j])) j++;
      end = j;
    }
    decls.push({ name: m[2], start: i, end, body: lines.slice(i, end + 1).join("\n") });
  }
  const names = new Set(decls.map((d) => d.name));
  const candidates = decls.filter((d) => {
    const b = d.name.match(/^(.+?)\d+$/);
    return b && names.has(b[1]);
  });
  // normalize by stripping the suffix from every candidate token
  const candNames = new Set(candidates.map((c) => c.name));
  const norm = (s) =>
    s.replace(/\b([A-Za-z_][A-Za-z0-9_]*)\b/g, (t) =>
      candNames.has(t) ? t.match(/^(.+?)\d+$/)[1] : t,
    );
  const byName = Object.fromEntries(decls.map((d) => [d.name, d]));
  const drop = new Set();
  const rename = {};
  for (const c of candidates) {
    const base = c.name.match(/^(.+?)\d+$/)[1];
    const baseDecl = byName[base];
    if (baseDecl && norm(c.body) === norm(baseDecl.body)) {
      drop.add(c.name);
      rename[c.name] = base;
    }
  }
  // remove dropped declarations, then repoint references
  const keep = [];
  const dropStarts = new Set(decls.filter((d) => drop.has(d.name)).map((d) => d.start));
  const spanOf = {};
  for (const d of decls) if (drop.has(d.name)) for (let k = d.start; k <= d.end; k++) spanOf[k] = true;
  let out = lines.filter((_, idx) => !spanOf[idx]).join("\n");
  for (const [from, to] of Object.entries(rename)) {
    out = out.replace(new RegExp(`\\b${from}\\b`, "g"), to);
  }
  // Any surviving `Name<digits>` types are allOf-decomposition intermediates
  // (referenced only by their base). De-export them so they stay module-private
  // instead of polluting the published surface — resolution is unchanged.
  const deExported = [];
  out = out.replace(
    /^export ((?:interface|type) [A-Za-z_][A-Za-z0-9_]*\d+\b)/gm,
    (_, rest) => {
      deExported.push(rest.split(" ")[1]);
      return rest;
    },
  );
  return { out, dropped: [...drop], deExported };
}

async function main() {
  const files = fs.readdirSync(schemasDir).filter((f) => f.endsWith(".json"));
  const masterDefs = {};
  const rootDefs = {};

  for (const file of files) {
    const inlined = inlineSchema(file); // transitive: $defs all local now
    for (const [name, def] of Object.entries(inlined.$defs || {})) {
      if (EXCLUDE.has(name)) continue;
      const shaped = applyTsTypes(name, def);
      if (!(name in masterDefs)) {
        masterDefs[name] = shaped;
      } else if (JSON.stringify(masterDefs[name]) !== JSON.stringify(shaped)) {
        throw new Error(`Conflicting duplicate $def '${name}' across schemas`);
      }
    }
    if (ROOTS[file]) {
      const body = Object.assign({}, inlined);
      delete body.$id; delete body.$schema; delete body.$version; delete body.$defs;
      rootDefs[ROOTS[file]] = body;
    }
  }

  // The published contract treats Environment.variables as always present
  // (consumers index into it). The schema keeps it non-required so embedded
  // partial flow environments still validate — decouple TS optionality here.
  if (masterDefs.Environment && masterDefs.Environment.properties.variables) {
    masterDefs.Environment.required = [
      ...new Set([...(masterDefs.Environment.required || []), "variables"]),
    ];
  }
  // ActionData carries arbitrary extra keys on the node (the published contract's
  // index signature); force it so consumers can treat it as a JsonValue bag.
  if (masterDefs.ActionData) {
    masterDefs.ActionData.additionalProperties = { tsType: "JsonValue | undefined" };
  }
  for (const [name, members] of Object.entries(ENUM_OVERRIDE)) {
    if (masterDefs[name] && masterDefs[name].enum) masterDefs[name].enum = members;
  }

  const allDefs = Object.assign({}, masterDefs, rootDefs);
  const wrapper = {
    title: "FlowebDomainModels",
    type: "object",
    additionalProperties: false,
    properties: Object.fromEntries(
      Object.keys(allDefs).map((d) => [d, { $ref: `#/$defs/${d}` }]),
    ),
    $defs: allDefs,
  };

  let ts = await compile(wrapper, wrapper.title, {
    additionalProperties: false,
    bannerComment: "",
    declareExternallyReferenced: true,
    $refOptions: { resolve: { http: false } },
  });

  // Drop the synthetic wrapper interface (the union of all defs as one object).
  ts = ts.replace(
    /export interface FlowebDomainModels \{[\s\S]*?\n\}\n?/,
    "",
  );

  const collapsed = collapseDuplicates(ts);
  ts = collapsed.out;

  // json-schema-to-typescript renders any-object fields (additionalProperties or
  // empty object) as an inline `{ [k: string]: unknown }`. The published contract
  // uses AnyObject (= Record<string, JsonValue>) for these, which consumers rely
  // on. Rewrite the standalone inline form (uses `k`); the intentional index
  // signatures in the preamble use `key`, so they are left untouched.
  ts = ts.replace(/\{\s*\[k: string\]: unknown;\s*\}/g, "AnyObject");
  if (collapsed.dropped.length) {
    console.log(`Collapsed ${collapsed.dropped.length} duplicate types: ${collapsed.dropped.join(", ")}`);
  }

  const banner =
    "// GENERATED — do not edit by hand.\n" +
    "// Published TypeScript surface, bundled from schemas/ by scripts/generate-index.cjs.\n" +
    "// Run `npm run generate` after changing any schema.\n" +
    "/* eslint-disable */\n\n";

  fs.writeFileSync(outFile, banner + PREAMBLE + "\n" + ts);
  console.log(`Wrote ${outFile} (${Object.keys(allDefs).length} generated types + preamble)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
