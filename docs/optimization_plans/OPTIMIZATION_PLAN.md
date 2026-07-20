# domain-models — Optimization & Refactoring Plan

> **Status**: Approved plan — ready for agent execution.
> **Repo**: `floweb-domain-models` (npm: `@autoweb/domain-models`, PyPI: `floweb-domain-models`, Python import: `floweb_models`)
> **Role in platform**: THE single source of truth for every shared domain entity. This plan is **Phase 0 of the platform-wide refactor** — every other repo's optimization plan depends on this one landing first. See the master roadmap in `floweb-desktop/docs/optimization_plans/OPTIMIZATION_PLAN.md`.

---

## Engineering Rules (apply to every change in this plan)

1. **No code duplication** — reusable logic lives in named utilities/modules and is imported everywhere it is needed. Never re-implement existing logic.
2. **No monolithic files** — files are split into small, single-responsibility, configurable, reusable modules. No file should grow past ~400 lines without a documented reason.
3. **Strict typing everywhere** — no `any`, no untyped `dict` payloads. TypeScript runs with `strict: true`; Python code is fully type-hinted and checked with mypy in strict mode.
4. **Shared domain entities come ONLY from this package** — local redefinitions in consuming repos are forbidden. Consumers must fail to build/install without this package.
5. **Every new or modified file must pass linters and strict type checks before commit.** No exceptions — we are moving to strict type checking, so run the linter + type checker on everything you touch.
6. **Unit tests are required for all new/refactored code**; integration tests where logic crosses process/service boundaries.
7. **End-to-end logic review** — when touching a code path, review its full flow; if the logic can be improved without changing behavior, improve it.
8. **Industry-grade, professional code** — SOLID principles, small composable modules, clear naming, no dead code left behind.

---

## 1. Current-State Inventory

| Artifact | State | Problem |
|---|---|---|
| `schemas/*.json` (9 schemas) | snake_case field names | **STALE** — runtime contract is camelCase (see §2.1) |
| `index.d.ts` (1,069 lines) | hand-written | Claims to be generated; drifted from schemas; contains ~20 entities with no schema |
| `index.js` | `module.exports = {};` stub | Package ships no runtime code (types only) — acceptable, but undocumented |
| `python-models/floweb_models/*.py` | generated then hand-edited | Regen would destroy hand edits (see §2.1) |
| `generate-types.js` | writes to `types/` | `types/` does not exist — generator output is orphaned |
| `generate-python-models.js` | manual invocation only | Never runs on build/publish |
| `Makefile` | references `src/`, `types/` | Both paths non-existent — stale |
| `IMPLEMENTATION_SUMMARY.md` | documents `src/floweb_domain_models/`, `@floweb/domain-models` | Wrong layout, wrong npm scope — stale |
| `.github/workflows/publish.yml` | publishes on `v*` tags | No codegen, no schema validation, no tests, no breaking-change gate |
| `__tests__/types.test.ts` | 1 file, 3 compile assertions | No schema-conformance or round-trip tests |
| `pyproject.toml` | `testpaths=["tests"]`, coverage `source=["src"]` | Neither directory exists |
| `examples/` | 3 example files | 6 of 9 schemas have no validated example |
| `python-models/floweb_models/debug_models.py` | 141 lines | **Orphan** — never imported by `__init__.py` (duplicate of `debug.py`) |

### Identity inconsistencies

- npm scope `@autoweb/*` vs PyPI `floweb-*` vs Python import `floweb_models` — three brands for one package.
- `pyproject.toml` / `setup.py` URLs point at `github.com/floweb/...`; actual repo is `github.com/yadavneerajdev/floweb-domain-models`.
- Author emails differ between `package.json` and `pyproject.toml`.
- `CallToFlowConfig` declared **twice** in `index.d.ts` (~:360 as empty `extends BaseActionConfig {}` and ~:1010 with fields) — TypeScript silently declaration-merges them.

---

## 2. Inconsistencies & Drift Catalog

### 2.1 CRITICAL — Source-of-truth inversion (fix before anything else)

`schemas/action-configs.json` uses **snake_case** (`wait_time`, `force_click`, `scroll_into_view`, `wait_type`, `fallback_to_duration`) but the **real runtime contract across the whole platform is camelCase** (`waitTime`, `forceClick`, `scrollIntoView`, …):

- Committed `floweb_models/action_configs.py` `WaitConfig` (:209) has camelCase `waitType`/`waitForInteractable`/`fallbackToDuration`/`fallbackDuration` **plus** `generatedBy`/`reason` fields — none of which match the committed schema. It was generated from a newer camelCase schema that was **never committed**.
- **Re-running `npm run generate-python` today would revert the models to snake_case and drop `generatedBy`/`reason`, breaking the backend engine and AI service.** Codegen is currently destructive.
- Evidence of the unsettled contract: backend executors read **both** cases — `_config_value("waitTime", "wait_time", …)` in `backend/engine/actions/click.py:41-46`.
- The AI service's `ACTION_CATALOG` (floweb-ai-service/app/services/action_catalog.py) and the hand-written `index.d.ts` both encode camelCase.
- `ajv` validation in the `validate` script checks examples against the stale snake_case schemas — validating the wrong contract.

**Resolution (Phase 1)**: camelCase is the winner (it is what ships over the wire and what 3 of 4 consumers encode). Rewrite all 9 schemas to camelCase, add the missing `generatedBy`/`reason` (and every other field present in committed models but absent from schemas), then make codegen non-destructive and mandatory.

### 2.2 Hand-edits inside "generated" Python models

These edits exist in committed models but not in schemas — they must be folded INTO the schemas during Phase 1 so regen preserves them:

- `flow.py` `FlowParameters`: `parameterBefore`, `variableBefore` (~:180) — not in `flow.json`.
- `flow.py` `Environment.variables: list[EnvironmentVariable | Variable]` (~:210) — schema says `EnvironmentVariable` only.
- `execution_results.py` `Parameters`: adds `parameterBefore`/`variableBefore` (~:150) — not in `execution-results.json`.
- `_base.py` is legitimately hand-written (documented coercion base that must survive regen) — keep, and configure codegen to extend it.

### 2.3 index.d.ts vs schemas — internal drift

| Type | schema | index.d.ts | Drift |
|---|---|---|---|
| `Variable.value` | `string` | `JsonValue \| undefined` | TS broader |
| `Edge.sourceHandle/targetHandle` | `string` | `string \| null` | TS nullable |
| `ActionData` | closed `{label,type,config}` | adds `image?`, `status?`, `expanded?` + index signature | TS broader |
| `Flow.assistantAuditHistory` | absent | present | TS-only |
| `WaitConfig` | snake_case, no `generatedBy`/`reason` | camelCase + both fields | see §2.1 |

The TS side is closer to runtime truth — treat `index.d.ts` (and the committed Python models) as the field-level source when rewriting schemas.

### 2.4 Entities that exist in code but have NO schema

| Entity | Where it currently lives | Consumers that duplicate it |
|---|---|---|
| `User`, `Account`, `Folder`, `MediaItem`, `ExecutionReport`, `EngineSession` | hand-written `index.d.ts` only | floweb-server mongoose models |
| `Suite`, `SuiteExecution`, `SuiteSchedule` + status enums | `index.d.ts` (:936-1010) — **DEAD CODE**, server imports none of it | floweb-server `suite.model.ts` redefines all of it locally (with drift: `ISuiteRunConfig` adds `environmentId/parallel/maxParallel/stopOnFailure`); frontend `suiteService.ts` defines 14 Suite types locally |
| `StoredTest*`, `TestCatalogItem`, `TestRecentRun`, `PaginatedResponse<T>` | `index.d.ts` only | — |
| Collab WS protocol (`auth`, `cursor`, `change`, `cursor_hide`, `snapshot`, `typing`, `ping`, `presence`, `user_joined`, `user_left`, `pong`) | **nowhere** — raw string switches | floweb-server `collab.handler.ts` (`msg: any`), frontend `useCollaboration.ts` (10× `any`) |
| DataLab request/response types | floweb-server `data-lab.types.ts` | — |
| ALL AI service contracts (`GenerateFlow*`, `OptimizeRecording*`, assistant/vibe/locator/failure models, `AIProviderConfig`) | floweb-ai-service `app/models/*` + floweb-server `ai.types.ts` | duplicated between the two |
| WS commands `run_suite`, `cancel_suite`, `add_recording_wait`, `authenticate`; responses `connected`, `run_suite_progress`, `recording_smart_wait_decision`, `error` | frontend `useEngine.ts` + backend `websocket_models.py` (both add them ad hoc, agreeing with each other but not with the schema) | — |
| `ActionType` string registry | nowhere canonical — `fillForm` vs `FormFillConfig` vs `form_fill` across repos | frontend `nodeTypes.ts`/`actionColors.ts`, backend factory registry + recorder dispatch, AI `ACTION_CATALOG` |
| Backend-only `Desktop*` configs beyond the schema's 10 (e.g. `DesktopVerifyImageConfig`, `DesktopRunScriptConfig`, `DesktopFocusWindowConfig`, …) | `backend/engine/types/action_configs.py` | AI catalog has 16 `desktop*` actions — superset of schema |

### 2.5 Field-level drift found in consumers (must be reconciled when schemas are authored)

- floweb-server `test.model.ts:42-44`: `recentRuns.status` mongoose enum has 4 values; domain `TestRecentRun.status: ReportStatus` has 6 (`error`, `cancelled` will be rejected by the DB).
- frontend `ExecutedActionResult` (useEngine.ts) drops `config`/`data` required by `execution-results.json` `ActionResult` and makes `screenshot` optional.
- frontend sends `flow_id` in record payloads where the domain `RecordCommand` says `session_id`.
- Browser enums: frontend `parallelExecution.ts` allows `brave`/`random`, `browser_mode: headless|headful`; domain has `chrome|firefox|edge|safari|string` and `headed|headless|headful`. Pick one canonical set.
- frontend re-defines `PerformanceTest` entirely (`performanceTestSlice.ts:38,103,164`); the domain `PerformanceTest` is imported nowhere in frontend.
- schema `RunResponse.reports: FlowReport` (single object) vs frontend `EngineResponse.reports` (a `{actions, variables, …}` object) plus separate `report?: ExecutedActionResult[]` — reconcile the response envelope.
- AI catalog `scroll` uses `pixels`/`smooth`/`waitAfterScroll`; schema uses `distance`/`selector` — true field-name mismatch, not just casing.

---

## 3. Target Package Structure

```
domain-models/
├── schemas/                        # SOURCE OF TRUTH — camelCase, versioned
│   ├── flow.json
│   ├── action-configs.json         # incl. full Desktop* set + ActionType enum
│   ├── action-types.json           # NEW — canonical action-type string registry
│   ├── execution-results.json
│   ├── flow-validation.json
│   ├── parallel-execution.json
│   ├── websocket-communication.json# incl. run_suite/cancel_suite/add_recording_wait/authenticate
│   ├── collab-protocol.json        # NEW — collab WS message contract
│   ├── ai-contracts.json           # NEW — all AI request/response contracts
│   ├── server-entities.json        # NEW — User/Account/Folder/MediaItem/Report
│   ├── suite.json                  # NEW — Suite/SuiteExecution/SuiteSchedule
│   ├── data-lab.json               # NEW — DataLab contracts
│   ├── environment.json
│   ├── debug.json
│   └── performance-test.json
├── generated/
│   ├── ts/index.d.ts               # GENERATED — replaces hand-written index.d.ts
│   └── python/floweb_models/       # GENERATED (extends hand-written _base.py)
├── src-manual/
│   └── _base.py                    # the only hand-written Python (coercion base)
├── scripts/
│   ├── generate-ts.mjs
│   ├── generate-python.mjs
│   ├── validate-schemas.mjs        # ajv: every schema + every example
│   └── check-breaking-changes.mjs  # schema diff gate
├── examples/                       # one example per schema (currently 3/9)
├── tests/
│   ├── ts/                         # conformance + round-trip tests
│   └── python/                     # pydantic round-trip tests
├── docs/optimization_plans/OPTIMIZATION_PLAN.md
└── .github/workflows/ci.yml        # codegen + diff-check + validate + test on every PR
```

---

## 4. Phased Execution Roadmap

Every phase gate: **lint clean + type-check clean (tsc strict / mypy strict) + all tests pass** before commit. Any new/modified file must pass these gates individually.

### Phase 1 — Fix the source of truth (BLOCKS EVERYTHING PLATFORM-WIDE)

1. Rewrite all 9 schemas to **camelCase**, folding in every field present in the committed `floweb_models/*.py` and `index.d.ts` but missing from schemas (`generatedBy`, `reason`, `parameterBefore`, `variableBefore`, `Environment.variables` union, `ActionData.image/status/expanded`, `Flow.assistantAuditHistory`, nullable edge handles, `Variable.value: JsonValue`).
2. Add `$id` + `$version` to every schema; start a `CHANGELOG.md`.
3. Reconcile the field-level drift list in §2.5 — each item gets an explicit decision recorded in the schema description.
4. Verify: `datamodel-codegen` output over the new schemas is byte-identical (modulo headers) to intent; run round-trip tests against real payload fixtures captured from the app (a real flow JSON, a real execution report, a real WS `run` command).
5. **Unit tests**: schema-conformance tests for every schema against its example; failing-case tests (wrong casing must fail validation).

### Phase 2 — Make codegen mandatory and non-destructive

1. Replace hand-written `index.d.ts` with generated output (`generated/ts/index.d.ts`); keep the package entry point stable (`types` field in package.json points at generated file). Delete the duplicate `CallToFlowConfig`.
2. Wire Python generation to extend `_base.py`; regenerate all `floweb_models/*.py`; delete orphan `debug_models.py`.
3. `npm run build` = validate schemas → generate TS + Python → type-check both → test. `prepublishOnly` runs the same.
4. CI (`ci.yml`): on every PR — regenerate and `git diff --exit-code` (any hand edit of generated files fails CI), ajv-validate all schemas + examples, run TS + Python tests, run `check-breaking-changes.mjs` against the base branch (removing/renaming a required field fails unless the version is major-bumped).
5. Add examples for the 6 schemas that lack them.

### Phase 3 — Add the missing entity schemas

1. `suite.json` — authored from the union of floweb-server `suite.model.ts` (the real persisted shape, incl. `environmentId/parallel/maxParallel/stopOnFailure`) and the dead `index.d.ts` Suite block. Server and frontend then import; local definitions deleted (tracked in their repos' plans).
2. `collab-protocol.json` — full message union for the collab WS (client→server: `auth|cursor|change|cursor_hide|snapshot|typing|ping`; server→client: `presence|user_joined|user_left|pong|change|snapshot`).
3. `ai-contracts.json` — every AI route's request/response, authored from `floweb-ai-service/app/models/*` (the richer side) reconciled with `floweb-server/ai.types.ts`.
4. `server-entities.json` — `User`, `Account`, `Folder`, `MediaItem`, `ExecutionReport`, `EngineSession`, `StoredTest*`, `TestCatalogItem`, `TestRecentRun` (status = full `ReportStatus` 6-value set), `PaginatedResponse<T>` (as a generic envelope convention).
5. `action-types.json` — the canonical `ActionType` string enum (one casing, one spelling: decide `fillForm`-style camelCase keys) + generated TS union type + Python `StrEnum`. Add ALL desktop actions currently in backend/AI catalogs.
6. Extend `websocket-communication.json` with `run_suite`, `cancel_suite`, `add_recording_wait`, `authenticate` commands and `connected`, `run_suite_progress`, `recording_smart_wait_decision`, `error` responses — authored from frontend `useEngine.ts` + backend `websocket_models.py` (they already agree with each other).
7. `data-lab.json` — from floweb-server `data-lab.types.ts`.

### Phase 4 — Package identity & consumption hardening

1. Reconcile naming: keep `@autoweb/domain-models` (npm) + `floweb-domain-models` (PyPI) but document the mapping in README; fix repo/author URLs in `pyproject.toml`/`setup.py`.
2. Delete stale `Makefile` targets, rewrite `IMPLEMENTATION_SUMMARY.md` → fold into README; fix `pyproject.toml` testpaths/coverage to real paths.
3. **Consumption switch (user decision)**: consumers move to `file:../domain-models` (npm) and `pip install -e ../domain-models` (Python), with codegen running on install (`prepare` script / build hook) — the app cannot build without this package. Keep the tag-triggered publish workflow for released versions; CI in consumer repos uses the local path.
4. Runtime validation exports: ship the JSON schemas in both packages (`exports` map / `package_data`) so consumers can ajv/pydantic-validate at boundaries without copying schemas.

### Phase 5 — Test depth

- TS: round-trip (parse example → type → re-serialize → deep-equal), negative tests, exhaustive `ActionType` coverage test (every catalog entry has a config schema and vice versa).
- Python: `model_validate` round-trips for every model; coercion tests for `_base.py`; snake/camel alias rejection tests.
- Target: every schema has ≥1 example, ≥1 conformance test, ≥1 negative test.

---

## 5. Verification Checklist (per phase)

- [ ] `npm run build` passes: validate → generate → tsc `--strict` → tests
- [ ] `mypy --strict` clean over generated + manual Python
- [ ] CI regeneration diff-check green (no hand-edited generated files)
- [ ] Every schema has an example validated by ajv
- [ ] Breaking-change gate exercised (intentionally break a field in a scratch branch → CI fails)
- [ ] Real-payload fixtures (flow export JSON, execution report, WS run command) round-trip through both TS types and Python models
- [ ] No references remain to `src/`, `types/`, `debug_models.py`, duplicate `CallToFlowConfig`
- [ ] Consumer smoke: frontend `tsc`, backend `pytest`, server `tsc`, ai-service import all succeed against the rebuilt package
