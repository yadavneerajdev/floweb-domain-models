// Generate TypeScript declarations from schemas/ into generated/ts/.
// One .d.ts per schema (self-contained, cross-file refs inlined). These are the
// diff-gated generated artifacts proving TS codegen stays in sync with schemas.
//
// NOTE: the published entry point stays hand-written `index.d.ts` for now.
// Consolidating everything into a single generated index.d.ts is deferred to
// Phase 3 because (a) ~25 exported types (Suite family, server entities,
// StoredTest*, PaginatedResponse, ...) have no schema yet, and (b) 7 $defs
// (Variable/Environment/GlobalVariable/Semantic*) are defined in two schemas
// with diverging shapes and must be canonicalized first. Regenerating index.d.ts
// before those land would drop published types.
const { compile } = require("json-schema-to-typescript");
const fs = require("node:fs");
const path = require("node:path");
const { inlineSchema } = require("./validate-schemas.cjs");

const root = path.join(__dirname, "..");
const schemasDir = path.join(root, "schemas");
const outDir = path.join(root, "generated", "ts");

const BANNER =
  "/* eslint-disable */\n" +
  "// GENERATED from schemas/ by scripts/generate-ts.cjs — do not edit by hand.\n";

async function main() {
  fs.mkdirSync(outDir, { recursive: true });
  const files = fs.readdirSync(schemasDir).filter((f) => f.endsWith(".json"));
  for (const file of files) {
    const schema = inlineSchema(file);
    const name = (schema.title || file.replace(/\.json$/, "")).replace(/\s+/g, "");
    // Wrap the schema so every $def is reachable from the root — otherwise
    // json-schema-to-typescript omits defs not referenced by a root property
    // (schemas here use a thin wrapper root with the real types in $defs).
    const defs = schema.$defs || {};
    const wrapper = {
      title: `${name}Schema`,
      type: "object",
      additionalProperties: false,
      properties: Object.assign(
        {},
        schema.properties || {},
        Object.fromEntries(
          Object.keys(defs).map((d) => [d, { $ref: `#/$defs/${d}` }]),
        ),
      ),
      $defs: defs,
    };
    const ts = await compile(wrapper, wrapper.title, {
      additionalProperties: false,
      bannerComment: BANNER,
      declareExternallyReferenced: true,
      $refOptions: { resolve: { http: false } },
    });
    const out = path.join(outDir, file.replace(/\.json$/, ".d.ts"));
    fs.writeFileSync(out, ts);
  }
  console.log(`Generated ${files.length} .d.ts files into ${outDir}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
