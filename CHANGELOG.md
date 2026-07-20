# Changelog

All notable changes to the domain-models schemas are recorded here. Versions
refer to the `$version` field carried by every schema (independent of the npm/PyPI
package version until the consumption switch in the package plan Phase 4).

## Phase 2 — 2026-07-20 — mandatory, non-destructive codegen

Codegen is now the only way to change generated models/types, and it is
deterministic (a CI diff-gate fails on any hand edit of generated output).

### Added
- `scripts/generate-python.cjs` — regenerates all `python-models/floweb_models/*.py`
  from `schemas/` via `datamodel-codegen` (dir mode, `--disable-timestamp` for a
  stable diff). Surgically wires `BaseActionConfig` to the hand-written coercion
  base `_base.FlowebActionBaseModel` (helper models stay on `BaseModel`, matching
  the prior contract) and builds a collision-safe `__init__.py`.
- `scripts/generate-ts.cjs` — generates `generated/ts/*.d.ts` (one per schema, all
  `$defs` emitted, cross-file refs inlined).
- `scripts/check-breaking-changes.cjs` — fails a PR that drops a required field or
  a `$def` without a MAJOR `$version` bump (base ref via `$BASE_REF`).
- `.github/workflows/ci.yml` — validate → regen-and-diff → tsc strict → jest →
  pytest → mypy(`_base`) → breaking-change gate.
- `tests/python/test_package_imports.py` — guards the package import.
- Build pipeline: `npm run build` = validate → generate:all → typecheck → test;
  `prepublishOnly` runs it.

### Fixed / Removed
- Regenerating drops the stray `from engine.server.ws.handlers import flow` that
  broke `import floweb_models`.
- Deleted orphan `python-models/floweb_models/debug_models.py` (duplicate of
  `debug.py`, never imported).
- Deleted stale generators `generate-types.js` (wrote to a non-existent `types/`)
  and `generate-python-models.js` (per-file, destructive).
- Removed the duplicate empty `CallToFlowConfig` in `index.d.ts`.

### Deferred to Phase 3 (documented, not skipped)
- Full replacement of hand-written `index.d.ts` with a single generated file.
  Blocked because ~25 exported types have no schema (Suite family, User/Account/
  Folder/MediaItem, StoredTest*, PaginatedResponse, ...) and 7 `$defs`
  (`Variable`/`Environment`/`GlobalVariable`/`Semantic*`) are defined in two
  schemas with diverging shapes. Both are resolved when Phase 3 adds the missing
  entity schemas and canonicalizes the shared defs. `generated/ts/` is the
  diff-gated bridge until then; `index.d.ts` remains the stable entry point.

## [schema 1.1.0] — 2026-07-20 — Phase 1: source-of-truth alignment

Phase 1 of the platform refactor. The schemas are now the source of truth and
regenerate the committed `floweb_models/*.py` contract faithfully (verified with
`datamodel-codegen` over `schemas/`). No runtime wire change — the schemas were
brought into line with what already ships, not the other way around.

### Casing: the contract is deliberately MIXED, not uniformly camelCase

The original plan assumed the whole platform wire contract was camelCase and the
schemas were uniformly stale snake_case. That is **not** what the code does. The
verified wire contract is mixed, and the schemas now match it per surface:

| Schema | Wire casing | Evidence |
|---|---|---|
| `action-configs` | camelCase (`waitTime`, `forceClick`, `generatedBy`) | executors read both but emit camel; AI catalog + `index.d.ts` are camel |
| `flow`, `environment`, `flow-validation`, `debug` | camelCase | committed models + `index.d.ts` |
| `websocket-communication` | **snake_case** commands (`flow_id`, `session_id`, `test_id`, `auth_config`); `SessionInfo` is camelCase | frontend `useEngine.ts` sends `session_id` over the socket; backend command models are snake |
| `execution-results` | **mixed** — `actionResults`/`flowReports` camel, but `FlowReport`/`ActionResult` bodies snake (`node_id`, `action_type`, `start_time`, `flow_id`) | engine emits `"executedActions"` and `"action_type"` side by side in `backend/engine/core/core.py` |
| `parallel-execution` | **snake_case** (`max_parallel`, `browser_mode`, `executed_actions`) | committed model + engine |

12 field names appear with BOTH spellings across the platform (`flow_id`/`flowId`,
`session_id`/`sessionId`, `executedActions`/`executed_actions`, `authConfig`/`auth_config`,
`total_actions`/`totalActions`, `start_time`/`startTime`, `end_time`/`endTime`,
`user_agent`/`userAgent`, `node_id`/`nodeId`, `test_id`/`testId`,
`flow_name`/`flowName`, `semantic_target`/`semanticTarget`). Each schema encodes
the casing used on ITS surface. **Canonical target = camelCase everywhere**, but
unifying the wire is a breaking change owned by the per-repo phases (backend
Phase 2 typed WS boundary, frontend Phase 3 domain adoption), not Phase 1.

### Changed
- All 9 schemas carry `$version: "1.1.0"` (added after `$id`).
- `action-configs.json`: converted the remaining snake_case field names to camelCase
  to match the committed model, and folded in 18 fields present in the model but
  missing from the schema — `generatedBy`, `reason`, `triggerActionId`,
  `effectiveWaitMs` (WaitConfig); `expectedImageRef`, `imageSimilarityThreshold`
  (AssertionConfig); `keyCombinations` (SendKeysConfig); `maintainFocus`
  (ClearInputConfig); `operator` (ConditionalConfig, required); `outputKey`
  (GetPageInfoConfig); `tabUrl`, `switchMethod` (SwitchTabConfig); `switchMethod`,
  `frameName`, `frameId`, `waitForFrame` (SwitchToFrameConfig); `exitMethod`,
  `levels`, `returnToMain` (ExitFrameConfig).
- `flow.json`: `Variable`/`EnvironmentVariable`/`GlobalVariable` `value` widened to
  any JSON value (was string-only) to match runtime + `index.d.ts`; added
  `isOutput` (Variable); `parameterBefore`/`variableBefore` (FlowParameters);
  `Environment.variables` now accepts `EnvironmentVariable | Variable`; nullable
  `Edge.sourceHandle`/`targetHandle`; `ActionData.image`/`status`/`expanded`;
  `Flow.assistantAuditHistory` (+ `AssistantAuditEntry`/`AssistantAuditOperation`
  defs); `Flow.type` defaults to `flow`. `Environment.variables` made optional to
  preserve the runtime tolerance for its omission.
- `environment.json`: `Environment.createdAt`/`updatedAt` made required to match
  the committed model.
- `execution-results.json`: added `parameterBefore`/`variableBefore` to
  `parameters` (§2.2 hand-edits).
- `parallel-execution.json`: added `randomBrowserPool` to `ParallelTestsRequest`
  (camelCase wire alias from the committed model); fixed a broken cross-file ref
  (`flow.json#/$defs/Flow` → `flow.json`; there is no `$defs/Flow`, `Flow` is the
  file root).
- `websocket-communication.json`: added `flowName` to `SessionInfo`.

### Fixed
- `parallel-execution.json` referenced a non-existent `flow.json#/$defs/Flow`.
  The Flow schema is the root of `flow.json`; the ref now points at the file root.

### Tooling
- `scripts/validate-schemas.mjs`: ajv-2020 validator that inlines the single
  cross-file ref and validates every example against its target `$def`.
- Added examples for the 6 schemas that lacked them (action-configs,
  execution-results, parallel-execution, websocket-communication, flow-validation,
  debug).
