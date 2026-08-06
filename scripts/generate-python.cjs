// Regenerate the Python pydantic models from schemas/ — mandatory & non-destructive.
// The generated files carry no hand edits; the only hand-written Python is
// `_base.py` (the coercion base), which is preserved and wired into the action
// configs. Run via `npm run generate-python`. CI regenerates and diffs to ensure
// nobody hand-edits generated output.
const { execFileSync } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");
const os = require("node:os");

const root = path.join(__dirname, "..");
const schemasDir = path.join(root, "schemas");
const outDir = path.join(root, "python-models", "floweb_models");

// Modules are re-exported from __init__ in this priority order; when a class name
// is defined in more than one module (shared enums, Variable/Environment), the
// first module listed wins and later duplicates are skipped.
const MODULE_ORDER = [
  "flow",
  "environment",
  "action_configs",
  "action_types",
  "execution_results",
  "flow_validation",
  "parallel_execution",
  "performance_test",
  "websocket_communication",
  "debug",
  "suite",
  "collab_protocol",
  "server_entities",
  "ai_contracts",
  "data_lab",
];

// Generated models are committed and CI fails on any diff, but datamodel-codegen
// changes its output between releases (StrEnum vs Enum, list vs List,
// default_factory vs bare defaults, constr patterns). CI installs this exact
// version, so a local run on anything else regenerates unrelated models and the
// diff looks like someone hand-edited generated output.
const CODEGEN_VERSION = "0.72.2";

function assertCodegenVersion() {
  const install = `  pip install 'datamodel-code-generator==${CODEGEN_VERSION}'`;
  let reported;
  try {
    reported = execFileSync("datamodel-codegen", ["--version"], { encoding: "utf-8" }).trim();
  } catch {
    throw new Error(`datamodel-codegen is not installed. Install it with:\n${install}`);
  }

  // --version prints "datamodel-codegen <semver>".
  const actual = reported.split(/\s+/).pop();
  if (actual !== CODEGEN_VERSION) {
    throw new Error(
      `datamodel-codegen ${actual} produces different output than CI (pinned ${CODEGEN_VERSION}).\n` +
        `${install}\n` +
        "If a bump is intentional, update this constant and .github/workflows/ci.yml " +
        "together, then review the whole regenerated diff.",
    );
  }
}

function generateInto(tmp) {
  assertCodegenVersion();
  execFileSync(
    "datamodel-codegen",
    [
      "--input", schemasDir,
      "--input-file-type", "jsonschema",
      "--output", tmp,
      "--output-model-type", "pydantic_v2.BaseModel",
      "--target-python-version", "3.12",
      "--use-schema-description",
      "--use-field-description",
      "--use-title-as-name",
      "--allow-population-by-field-name",
      "--use-annotated",
      "--field-constraints",
      "--disable-timestamp",
    ],
    { stdio: ["ignore", "ignore", "inherit"] },
  );
}

// Reproduce the one legitimate hand-edit: BaseActionConfig extends the coercion
// base so every action config inherits string-coercion. Helper models stay on
// plain BaseModel, exactly as before.
function wireActionBase(file) {
  let src = fs.readFileSync(file, "utf8");
  if (!src.includes("class BaseActionConfig(BaseModel):")) {
    throw new Error("BaseActionConfig(BaseModel) not found — codegen output changed");
  }
  src = src.replace(
    /^(from pydantic import .*)$/m,
    "$1\n\nfrom ._base import FlowebActionBaseModel",
  );
  src = src.replace(
    "class BaseActionConfig(BaseModel):",
    "class BaseActionConfig(FlowebActionBaseModel):",
  );
  fs.writeFileSync(file, src);
}

function classNames(file) {
  return [...fs.readFileSync(file, "utf8").matchAll(/^class (\w+)\b/gm)].map((m) => m[1]);
}

function buildInit(modules) {
  const seen = new Set();
  const blocks = [
    '"""Floweb shared Python domain models package (`floweb_models`).',
    "",
    "Generated from schemas/ by scripts/generate-python.cjs — do not hand-edit;",
    "regenerate instead. The only hand-written module is `_base`.",
    '"""',
    "",
    "from ._base import FlowebActionBaseModel",
  ];
  const exported = ["FlowebActionBaseModel"];
  for (const mod of modules) {
    const names = classNames(path.join(outDir, `${mod}.py`)).filter((n) => {
      if (seen.has(n)) return false;
      seen.add(n);
      return true;
    });
    if (!names.length) continue;
    blocks.push("", `from .${mod} import (`);
    for (const n of names.sort()) {
      blocks.push(`    ${n},`);
      exported.push(n);
    }
    blocks.push(")");
  }
  blocks.push("", "__all__ = [");
  for (const n of exported.sort()) blocks.push(`    "${n}",`);
  blocks.push("]", "");
  fs.writeFileSync(path.join(outDir, "__init__.py"), blocks.join("\n"));
}

function main() {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "floweb-py-"));
  generateInto(tmp);
  wireActionBase(path.join(tmp, "action_configs.py"));

  const generated = fs
    .readdirSync(tmp)
    .filter((f) => f.endsWith(".py") && f !== "__init__.py");

  // Remove previously-generated .py files (keep hand-written _base.py).
  for (const f of fs.readdirSync(outDir)) {
    if (f.endsWith(".py") && f !== "_base.py" && f !== "__init__.py") {
      fs.rmSync(path.join(outDir, f));
    }
  }
  for (const f of generated) fs.copyFileSync(path.join(tmp, f), path.join(outDir, f));

  const modules = MODULE_ORDER.filter((m) => generated.includes(`${m}.py`));
  const extra = generated
    .map((f) => f.replace(/\.py$/, ""))
    .filter((m) => !modules.includes(m));
  buildInit([...modules, ...extra]);

  fs.rmSync(tmp, { recursive: true, force: true });
  console.log(`Regenerated ${generated.length} model modules into ${outDir}`);
}

main();
