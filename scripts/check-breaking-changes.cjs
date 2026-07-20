// Schema breaking-change gate. Compares each schema against its version on a base
// git ref and fails when a required field is removed or renamed (or a whole $def
// dropped) without a MAJOR bump of that schema's $version. Run in CI on PRs.
//
// Base ref: $BASE_REF (default "origin/main"). Skips cleanly when the base ref or
// a base-side schema file is unavailable (e.g. a brand-new schema).
const { execFileSync } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..");
const schemasDir = path.join(root, "schemas");
const baseRef = process.env.BASE_REF || "origin/main";

// Path of schemas relative to the git repo root (schemas may sit in a subdir).
function repoRelSchemaPath(file) {
  const top = execFileSync("git", ["rev-parse", "--show-toplevel"], {
    cwd: root,
    encoding: "utf8",
  }).trim();
  return path.relative(top, path.join(schemasDir, file));
}

function baseVersion(file) {
  try {
    const rel = repoRelSchemaPath(file);
    const txt = execFileSync("git", ["show", `${baseRef}:${rel}`], {
      cwd: root,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    });
    return JSON.parse(txt);
  } catch {
    return null; // new file or base ref unavailable
  }
}

// Collect "<Def>.<requiredField>" and "<Def>" tokens that constitute the contract.
function contractTokens(schema) {
  const tokens = new Set();
  const collect = (name, node) => {
    if (!node || typeof node !== "object") return;
    tokens.add(name);
    for (const req of node.required || []) tokens.add(`${name}.${req}`);
  };
  collect("<root>", schema);
  for (const [name, def] of Object.entries(schema.$defs || {})) collect(name, def);
  return tokens;
}

function majorOf(version) {
  return parseInt(String(version || "0").split(".")[0], 10) || 0;
}

function main() {
  const failures = [];
  let comparisons = 0;
  for (const file of fs.readdirSync(schemasDir).filter((f) => f.endsWith(".json"))) {
    const base = baseVersion(file);
    if (!base) continue;
    comparisons++;
    const head = JSON.parse(fs.readFileSync(path.join(schemasDir, file), "utf8"));
    const majorBumped = majorOf(head.$version) > majorOf(base.$version);
    if (majorBumped) continue;
    const removed = [...contractTokens(base)].filter(
      (t) => !contractTokens(head).has(t),
    );
    if (removed.length) failures.push({ file, removed });
  }
  if (failures.length) {
    console.error(
      `Breaking schema changes vs ${baseRef} without a MAJOR $version bump:`,
    );
    for (const f of failures) {
      console.error(`  ${f.file}: removed ${f.removed.join(", ")}`);
    }
    process.exit(1);
  }
  console.log(
    `No breaking changes vs ${baseRef} (${comparisons} schema(s) compared).`,
  );
}

main();
