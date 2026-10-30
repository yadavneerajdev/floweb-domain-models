/* eslint-disable */
// GENERATED from schemas/ by scripts/generate-ts.cjs — do not edit by hand.

/**
 * Auth scheme inferred from the spec's security requirements
 */
export type OpenApiAuthKind = "bearer" | "basic" | "apiKeyQuery" | "apiKeyHeader" | "none";
/**
 * Where generated variables (auth token, base URL, response outputs) are stored
 */
export type OpenApiVariableTarget = "variable" | "parameter" | "environment" | "global";
/**
 * Named output format for a `date` variable. `custom` defers to the variable's dateFormatPattern.
 */
export type DateFormatPreset =
  | "iso"
  | "iso-datetime"
  | "rfc3339"
  | "date-slash-dmy"
  | "date-slash-mdy"
  | "date-dash-ymd"
  | "date-medium"
  | "date-long"
  | "datetime-friendly"
  | "time-24h"
  | "unix-seconds"
  | "unix-millis"
  | "custom";

export interface OpenAPIImportSchema {
  importRequest?: OpenApiImportRequest;
  importResponse?: OpenApiImportResponse;
  OpenApiVariableTarget?: OpenApiVariableTarget;
  OpenApiAuthKind?: OpenApiAuthKind;
  OpenApiImportRequest?: OpenApiImportRequest;
  OpenApiGeneratedVariable?: OpenApiGeneratedVariable;
  OpenApiSkippedOperation?: OpenApiSkippedOperation;
  OpenApiGeneratedFlow?: OpenApiGeneratedFlow;
  OpenApiImportResponse?: OpenApiImportResponse;
  AssistantAuditOperation?: AssistantAuditOperation;
  AssistantAuditEntry?: AssistantAuditEntry;
  Position?: Position;
  ActionData?: ActionData;
  Action?: Action;
  Edge?: Edge;
  Zoom?: Zoom;
  FlowVariables?: FlowVariables;
  FlowParameters?: FlowParameters;
  DateFormatPreset?: DateFormatPreset;
  Environment?: Environment;
  GlobalVariable?: GlobalVariable;
  Variable?: Variable;
}
/**
 * POST /api/openapi/:accountId/import request
 */
export interface OpenApiImportRequest {
  /**
   * The OpenAPI/Swagger document as JSON or YAML text
   */
  spec: string;
  baseUrl?: string;
  includeTags?: string[];
  includeMethods?: string[];
  groupBy?: "tag" | "operation";
  /**
   * Where generated variables (auth token, base URL, response outputs) are stored
   */
  variableTarget?: "variable" | "parameter" | "environment" | "global";
  generateAssertions?: boolean;
  folderId?: string | null;
  persist?: boolean;
  /**
   * Create environment/global variables now even on a preview (persist=false) append. Gated separately from persist because an append still needs its referenced variables to exist.
   */
  commitAccountVariables?: boolean;
}
/**
 * POST /api/openapi/:accountId/import response
 */
export interface OpenApiImportResponse {
  title: string;
  specVersion: string;
  baseUrl: string;
  authKind: OpenApiAuthKind;
  variableTarget: OpenApiVariableTarget;
  operationCount: number;
  flows: OpenApiGeneratedFlow[];
  variables: OpenApiGeneratedVariable[];
  skipped: OpenApiSkippedOperation[];
  warnings: string[];
}
/**
 * One generated test, ready to persist or preview
 */
export interface OpenApiGeneratedFlow {
  name: string;
  description: string;
  operationCount: number;
  /**
   * A Flow payload, keyed `actions` (not `nodes`) to match the persisted Flow contract
   */
  flow: {
    actions: Action[];
    edges: Edge[];
    variables: {
      input: OpenApiGeneratedVariable[];
      output: OpenApiGeneratedVariable[];
    };
    parameters: {
      input: OpenApiGeneratedVariable[];
      output: OpenApiGeneratedVariable[];
    };
    zoom: {
      x: number;
      y: number;
      zoom: number;
    };
  };
  testId: string | null;
}
export interface Action {
  /**
   * Unique action identifier
   */
  id: string;
  /**
   * Action type
   */
  type: string;
  position: Position;
  data: ActionData;
  /**
   * React Flow canvas node option
   */
  draggable?: boolean;
  /**
   * React Flow canvas node option
   */
  selectable?: boolean;
  /**
   * React Flow canvas node option
   */
  deletable?: boolean;
  /**
   * React Flow canvas node option
   */
  selected?: boolean;
}
export interface Position {
  /**
   * X coordinate
   */
  x: number;
  /**
   * Y coordinate
   */
  y: number;
}
/**
 * Authored content of an action node. Run state (status, message, screenshot) is deliberately absent: it is ephemeral engine/UI state and must never be persisted onto the saved document.
 */
export interface ActionData {
  /**
   * Human-readable label
   */
  label: string;
  /**
   * Action type identifier
   */
  type: string;
  /**
   * Action-specific configuration
   */
  config: {};
  /**
   * Screenshot or icon associated with the action
   */
  image?: string;
  /**
   * Whether the node is expanded in the canvas UI
   */
  expanded?: boolean;
  /**
   * Human-readable description of the action (carried on generated/AI nodes)
   */
  description?: string;
}
export interface Edge {
  /**
   * Unique edge identifier
   */
  id: string;
  /**
   * Source action ID
   */
  source: string;
  /**
   * Source handle identifier (null when attached to the default handle)
   */
  sourceHandle?: string | null;
  /**
   * Target action ID
   */
  target: string;
  /**
   * Target handle identifier (null when attached to the default handle)
   */
  targetHandle?: string | null;
  /**
   * Edge type
   */
  type?: string;
  /**
   * Additional edge data
   */
  data?: {};
}
/**
 * A variable placeholder generated for an auth token, base URL, or operation output
 */
export interface OpenApiGeneratedVariable {
  id: string;
  name: string;
  type: string;
  description: string;
  defaultValue: string;
  value: string;
  [k: string]: unknown;
}
/**
 * An operation the parser could not express as a step
 */
export interface OpenApiSkippedOperation {
  method: string;
  path: string;
  reason: string;
}
/**
 * A single tool operation performed by the AI assistant
 */
export interface AssistantAuditOperation {
  /**
   * Tool name that was invoked
   */
  tool: string;
  /**
   * Human-readable summary of the operation
   */
  summary?: string;
  /**
   * Tool invocation payload
   */
  payload?: {};
}
/**
 * Audit record of an AI-assistant edit applied to the flow
 */
export interface AssistantAuditEntry {
  /**
   * Unique audit entry identifier
   */
  id: string;
  /**
   * Timestamp when the entry was recorded
   */
  createdAt: string;
  /**
   * User instruction that triggered the assistant
   */
  instruction: string;
  /**
   * Assistant response message
   */
  message?: string;
  /**
   * LLM provider used
   */
  provider?: string;
  /**
   * LLM model used
   */
  model?: string;
  /**
   * Origin of the assistant invocation
   */
  source?: string;
  /**
   * Summaries of changes applied
   */
  changes?: string[];
  /**
   * Tool operations performed
   */
  operations: AssistantAuditOperation[];
}
export interface Zoom {
  /**
   * Pan X position
   */
  x: number;
  /**
   * Pan Y position
   */
  y: number;
  /**
   * Zoom level
   */
  zoom: number;
}
export interface FlowVariables {
  /**
   * Input variables
   */
  input: Variable[];
  /**
   * Output variables
   */
  output: Variable[];
}
/**
 * A variable (environment, global, or flow parameter). Field constraints are strict; `value` accepts any JSON value.
 */
export interface Variable {
  /**
   * Unique identifier for the variable
   */
  id: string;
  /**
   * Variable name used in flows
   */
  name: string;
  /**
   * Data type of the variable
   */
  type:
    | "string"
    | "number"
    | "boolean"
    | "object"
    | "array"
    | "url"
    | "file"
    | "json"
    | "web-identifier"
    | "image"
    | "secret"
    | "date"
    | "code"
    | "email";
  /**
   * The variable's value; any JSON value is allowed (2026-07 decision: runtime stores structured values, aligned with TS JsonValue rather than the old string-only contract)
   */
  value: {
    [k: string]: unknown;
  };
  /**
   * Output format applied when a `date` variable is substituted into an action. The stored value stays canonical ISO-8601; this only affects rendering. Either a DateFormatPreset id or, when set to `custom`, the pattern in `dateFormatPattern`. Ignored for other types.
   */
  dateFormat?: string;
  /**
   * Token pattern used when `dateFormat` is `custom`, e.g. `DD MMM YYYY HH:mm`.
   */
  dateFormatPattern?: string;
  /**
   * Description of the variable's purpose
   */
  description?: string;
  /**
   * Whether this is an output variable (flow parameters)
   */
  isOutput?: boolean;
  /**
   * When true, the value is a secret: write-only for UI clients (masked in API responses, never returned as plaintext), redacted from reports and logs, and sent in plaintext only to the engine runtime context. Set automatically when type is `secret`.
   */
  secret?: boolean;
}
export interface FlowParameters {
  /**
   * Input parameters
   */
  input: Variable[];
  /**
   * Output parameters
   */
  output: Variable[];
  /**
   * Parameters to be set before execution
   */
  parameterBefore?: Variable[];
  /**
   * Variables to be set before execution
   */
  variableBefore?: Variable[];
}
/**
 * An environment configuration with its variables. Unifies the standalone-entity and embedded-in-flow forms: only id+name are required so embedded partial environments validate; the server always sets the remaining fields on stored environments.
 */
export interface Environment {
  /**
   * Unique identifier for the environment
   */
  id: string;
  /**
   * Display name for the environment
   */
  name: string;
  /**
   * Description of the environment's purpose
   */
  description?: string;
  /**
   * Environment-specific variables
   *
   * @minItems 0
   */
  variables?: Variable[];
  /**
   * Whether this is the default environment
   */
  isDefault?: boolean;
  /**
   * Whether this environment is currently active
   */
  isActive?: boolean;
  /**
   * ISO 8601 timestamp when the environment was created
   */
  createdAt?: string;
  /**
   * ISO 8601 timestamp when the environment was last updated
   */
  updatedAt?: string;
}
/**
 * A global variable available across all environments
 */
export interface GlobalVariable {
  /**
   * Unique identifier for the global variable
   */
  id: string;
  /**
   * Variable name used in flows
   */
  name: string;
  /**
   * Data type of the variable
   */
  type:
    | "string"
    | "number"
    | "boolean"
    | "object"
    | "array"
    | "url"
    | "file"
    | "json"
    | "web-identifier"
    | "image"
    | "secret"
    | "date"
    | "code"
    | "email";
  /**
   * The variable's value; any JSON value is allowed (2026-07 decision: runtime stores structured values, aligned with TS JsonValue rather than the old string-only contract)
   */
  value: {
    [k: string]: unknown;
  };
  /**
   * Output format applied when a `date` variable is substituted into an action. The stored value stays canonical ISO-8601; this only affects rendering. Either a DateFormatPreset id or, when set to `custom`, the pattern in `dateFormatPattern`. Ignored for other types.
   */
  dateFormat?: string;
  /**
   * Token pattern used when `dateFormat` is `custom`, e.g. `DD MMM YYYY HH:mm`.
   */
  dateFormatPattern?: string;
  /**
   * Description of the variable's purpose
   */
  description?: string;
  /**
   * When true, the value is a secret: write-only for UI clients (masked in API responses, never returned as plaintext), redacted from reports and logs, and sent in plaintext only to the engine runtime context. Set automatically when type is `secret`.
   */
  secret?: boolean;
  /**
   * ISO 8601 timestamp when the variable was created
   */
  createdAt?: string;
  /**
   * ISO 8601 timestamp when the variable was last updated
   */
  updatedAt?: string;
}
