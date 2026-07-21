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
  Variable?: Variable;
  FlowVariables?: FlowVariables1;
  FlowParameters?: FlowParameters1;
  EnvironmentVariable?: EnvironmentVariable;
  Environment?: Environment1;
  GlobalVariable?: GlobalVariable;
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
export interface Variable {
  /**
   * Variable identifier
   */
  id: string;
  /**
   * Variable name
   */
  name: string;
  /**
   * Variable data type
   */
  type: string;
  /**
   * Variable value; any JSON value is allowed (decision 2026-07: runtime stores structured values, aligned with TS JsonValue rather than the old string-only contract)
   */
  value: {
    [k: string]: unknown;
  };
  /**
   * Optional description
   */
  description?: string;
  /**
   * Whether this is an output variable
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
   * Environment identifier
   */
  id: string;
  /**
   * Environment name
   */
  name: string;
  /**
   * Environment variables; historical payloads may carry full Variable objects, so both shapes are accepted
   */
  variables?: (EnvironmentVariable | Variable)[];
  /**
   * Environment description
   */
  description?: string;
  /**
   * Whether this is the default environment
   */
  isDefault?: boolean;
  /**
   * Whether this environment is active
   */
  isActive?: boolean;
  /**
   * Creation timestamp
   */
  createdAt?: string;
  /**
   * Last update timestamp
   */
  updatedAt?: string;
}
export interface EnvironmentVariable {
  /**
   * Variable identifier
   */
  id: string;
  /**
   * Variable name
   */
  name: string;
  /**
   * Variable data type
   */
  type: string;
  /**
   * Variable value; any JSON value is allowed (aligned with TS JsonValue)
   */
  value: {
    [k: string]: unknown;
  };
  /**
   * Optional description
   */
  description?: string;
}
export interface GlobalVariable {
  /**
   * Variable identifier
   */
  id: string;
  /**
   * Variable name
   */
  name: string;
  /**
   * Variable data type
   */
  type: string;
  /**
   * Variable value; any JSON value is allowed (aligned with TS JsonValue)
   */
  value: {
    [k: string]: unknown;
  };
  /**
   * Optional description
   */
  description?: string;
  /**
   * Creation timestamp
   */
  createdAt?: string;
  /**
   * Last update timestamp
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
export interface Environment1 {
  /**
   * Environment identifier
   */
  id: string;
  /**
   * Environment name
   */
  name: string;
  /**
   * Environment variables; historical payloads may carry full Variable objects, so both shapes are accepted
   */
  variables?: (EnvironmentVariable | Variable)[];
  /**
   * Environment description
   */
  description?: string;
  /**
   * Whether this is the default environment
   */
  isDefault?: boolean;
  /**
   * Whether this environment is active
   */
  isActive?: boolean;
  /**
   * Creation timestamp
   */
  createdAt?: string;
  /**
   * Last update timestamp
   */
  updatedAt?: string;
}
