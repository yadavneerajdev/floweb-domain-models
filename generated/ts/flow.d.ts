/* eslint-disable */
// GENERATED from schemas/ by scripts/generate-ts.cjs — do not edit by hand.

export interface FlowSchema {
  /**
   * Unique identifier for the flow
   */
  id?: string;
  /**
   * Human-readable name of the flow
   */
  name?: string;
  /**
   * Optional description of the flow
   */
  description?: string;
  /**
   * Tags for categorization and filtering
   */
  tags?: string[];
  /**
   * Parent folder ID for organization
   */
  parentID?: string | null;
  /**
   * Type of the flow
   */
  type?: "flow" | "test" | "performance";
  /**
   * List of actions in the flow
   */
  actions?: Action[];
  /**
   * Connections between actions
   */
  edges?: Edge[];
  zoom?: Zoom;
  /**
   * Creation timestamp
   */
  createdAt?: string;
  /**
   * Last update timestamp
   */
  updatedAt?: string;
  variables?: FlowVariables;
  parameters?: FlowParameters;
  environment?: Environment;
  /**
   * Global variables available to the flow
   */
  globalVariables?: GlobalVariable[];
  /**
   * Whether the flow is synced with server
   */
  synced?: boolean;
  /**
   * Last execution timestamp
   */
  lastRun?: string;
  /**
   * Result of last execution
   */
  lastResult?: "passed" | "failed" | "pending" | "running";
  /**
   * History of AI-assistant edits applied to this flow
   */
  assistantAuditHistory?: AssistantAuditEntry[];
  AssistantAuditOperation?: AssistantAuditOperation;
  AssistantAuditEntry?: AssistantAuditEntry;
  Position?: Position;
  ActionData?: ActionData;
  Action?: Action;
  Edge?: Edge;
  Zoom?: Zoom1;
  FlowVariables?: FlowVariables1;
  FlowParameters?: FlowParameters1;
  Environment?: Environment1;
  GlobalVariable?: GlobalVariable;
  Variable?: Variable;
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
   * Last known execution status of the action
   */
  status?: string;
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
 * Canvas zoom and pan state
 */
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
/**
 * Flow input and output variables
 */
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
  type: "string" | "number" | "boolean" | "object" | "array" | "url" | "file" | "json" | "web-identifier" | "image";
  /**
   * The variable's value; any JSON value is allowed (2026-07 decision: runtime stores structured values, aligned with TS JsonValue rather than the old string-only contract)
   */
  value: {
    [k: string]: unknown;
  };
  /**
   * Description of the variable's purpose
   */
  description?: string;
  /**
   * Whether this is an output variable (flow parameters)
   */
  isOutput?: boolean;
}
/**
 * Flow parameters for configuration
 */
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
 * Environment configuration
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
  type: "string" | "number" | "boolean" | "object" | "array" | "url" | "file" | "json" | "web-identifier" | "image";
  /**
   * The variable's value; any JSON value is allowed (2026-07 decision: runtime stores structured values, aligned with TS JsonValue rather than the old string-only contract)
   */
  value: {
    [k: string]: unknown;
  };
  /**
   * Description of the variable's purpose
   */
  description?: string;
  /**
   * ISO 8601 timestamp when the variable was created
   */
  createdAt?: string;
  /**
   * ISO 8601 timestamp when the variable was last updated
   */
  updatedAt?: string;
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
export interface Zoom1 {
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
export interface FlowVariables1 {
  /**
   * Input variables
   */
  input: Variable[];
  /**
   * Output variables
   */
  output: Variable[];
}
export interface FlowParameters1 {
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
export interface Environment1 {
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
