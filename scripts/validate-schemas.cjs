// Validate every schema (compilable) and every example against its target $def.
// Cross-file refs of the form "<file>.json#/$defs/<Name>" and whole-file refs
// "<file>.json" are inlined, because ajv does not navigate JSON-pointer fragments
// across separately-registered documents.
const Ajv2020 = require("ajv/dist/2020");
const Ajv = Ajv2020.default || Ajv2020;
const addFormatsMod = require("ajv-formats");
const addFormats = addFormatsMod.default || addFormatsMod;
const { readFileSync } = require("node:fs");
const { join } = require("node:path");

const root = join(__dirname, "..");
const schemasDir = join(root, "schemas");
const examplesDir = join(root, "examples");

// Maps each schema file to its example and the $def the example instantiates.
// A null def validates against the schema root.
const EXAMPLE_FOR = {
  "flow.json": { example: "flow-example.json", def: null },
  "environment.json": { example: "environment-example.json", def: null },
  "performance-test.json": { example: "performance-test-example.json", def: null },
  "action-configs.json": { example: "action-configs-example.json", def: "ClickConfig" },
  "execution-results.json": { example: "execution-results-example.json", def: "FlowReport" },
  "parallel-execution.json": { example: "parallel-execution-example.json", def: "ParallelTestsRequest" },
  "websocket-communication.json": { example: "websocket-communication-example.json", def: "RunCommand" },
  "flow-validation.json": { example: "flow-validation-example.json", def: "FlowValidationResult" },
  "debug.json": { example: "debug-example.json", def: "DebugSession" },
};

const CROSS_FILE = /^([\w-]+\.json)#\/\$defs\/(.+)$/;
const ROOT_FILE = /^([\w-]+\.json)$/;

function loadSchema(file) {
  return JSON.parse(readFileSync(join(schemasDir, file), "utf8"));
}

function loadExample(file) {
  return JSON.parse(readFileSync(join(examplesDir, file), "utf8"));
}

// Derive a $defs key for a whole-file ref: "flow.json" -> "FlowRoot".
function rootDefName(file) {
  const base = file
    .replace(/\.json$/, "")
    .replace(/(^|-)(\w)/g, (_, __, c) => c.toUpperCase());
  return `${base}Root`;
}

// Return a self-contained copy of `schema`: cross-file refs are rewritten to
// local "#/$defs/..." and the referenced files' $defs (and roots) are merged in.
function inline(schema) {
  const merged = Object.assign({}, schema.$defs || {});
  const walk = (node) => {
    if (Array.isArray(node)) return node.map(walk);
    if (node && typeof node === "object") {
      const out = {};
      for (const [k, v] of Object.entries(node)) {
        if (k === "$ref" && typeof v === "string") {
          const frag = v.match(CROSS_FILE);
          if (frag) {
            const [, file, name] = frag;
            for (const [dn, dv] of Object.entries(loadSchema(file).$defs || {})) {
              if (!(dn in merged)) merged[dn] = dv;
            }
            out[k] = `#/$defs/${name}`;
            continue;
          }
          const rootRef = v.match(ROOT_FILE);
          if (rootRef) {
            const [, file] = rootRef;
            const ref = loadSchema(file);
            const name = rootDefName(file);
            for (const [dn, dv] of Object.entries(ref.$defs || {})) {
              if (!(dn in merged)) merged[dn] = dv;
            }
            if (!(name in merged)) {
              const body = Object.assign({}, ref);
              delete body.$id;
              delete body.$schema;
              delete body.$version;
              delete body.$defs;
              merged[name] = body;
            }
            out[k] = `#/$defs/${name}`;
            continue;
          }
        }
        out[k] = walk(v);
      }
      return out;
    }
    return node;
  };
  const copy = walk(schema);
  delete copy.$id; // avoid URL-base resolution surprises during local validation
  copy.$defs = Object.assign({}, merged, copy.$defs || {});
  return copy;
}

function buildAjv() {
  const ajv = new Ajv({ allErrors: true, strict: false });
  addFormats(ajv);
  return ajv;
}

// Compile a schema (by filename) into a validator. When `def` is given, the
// validator targets that $def; otherwise it targets the schema root.
function compileSchema(schemaFile, def) {
  const inlined = inline(loadSchema(schemaFile));
  if (!def) return buildAjv().compile(inlined);
  const ajv = buildAjv();
  ajv.addSchema(inlined, "root");
  return ajv.compile({ $ref: `root#/$defs/${def}` });
}

function validateAll() {
  const failures = [];
  for (const [schemaFile, { example, def }] of Object.entries(EXAMPLE_FOR)) {
    let validate;
    try {
      validate = compileSchema(schemaFile, def);
    } catch (err) {
      failures.push({ schemaFile, error: `compile failed: ${err.message}` });
      continue;
    }
    let data;
    try {
      data = loadExample(example);
    } catch (e) {
      failures.push({ schemaFile, error: `missing example ${example}` });
      continue;
    }
    if (!validate(data)) {
      failures.push({ schemaFile, example, def, errors: validate.errors });
    }
  }
  return failures;
}

module.exports = { EXAMPLE_FOR, compileSchema, validateAll, loadExample, loadSchema };

if (require.main === module) {
  const failures = validateAll();
  if (failures.length) {
    console.error("Schema validation FAILED:");
    for (const f of failures) console.error(JSON.stringify(f, null, 2));
    process.exit(1);
  }
  console.log("All schemas compiled and all examples valid.");
}
