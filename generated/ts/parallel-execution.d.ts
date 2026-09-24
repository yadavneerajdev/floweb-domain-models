/* eslint-disable */
// GENERATED from schemas/ by scripts/generate-ts.cjs — do not edit by hand.

/**
 * Browser automation adapter for web actions; omitted uses the engine default.
 */
export type BrowserAdapter = "selenium" | "playwright";
export type RunCommand = WebSocketMessage & {
  command: "run";
  /**
   * Browser automation adapter for web actions; omitted uses the engine default.
   */
  browserAdapter?: "selenium" | "playwright";
  /**
   * Flow to execute
   */
  flow: {
    id: string;
    name: string;
    actions: {}[];
    edges: {}[];
  };
  mode?: "full" | "partial";
  recording?: {
    [k: string]: unknown;
  };
  mobile?: MobileRunConfig1;
};
export type RecordCommand = WebSocketMessage & {
  command: "record";
  flow_id?: string;
  url?: string;
  /**
   * Browser automation adapter for web actions; omitted uses the engine default.
   */
  browserAdapter?: "selenium" | "playwright";
  config?: {
    [k: string]: unknown;
  };
};
export type PauseRecordingCommand = WebSocketMessage & {
  command: "pause_recording";
  /**
   * Recording session ID
   */
  session_id: string;
};
export type ResumeRecordingCommand = WebSocketMessage & {
  command: "resume_recording";
  /**
   * Recording session ID
   */
  session_id: string;
};
export type StopRecordingCommand = WebSocketMessage & {
  command: "stop_recording";
  /**
   * Recording session ID
   */
  session_id: string;
};
export type FinishRecordingCommand = WebSocketMessage & {
  command: "finish_recording";
  /**
   * Recording session ID
   */
  session_id: string;
  flow_name?: string;
};
export type GetRecordingStatusCommand = WebSocketMessage & {
  command: "get_recording_status";
  session_id?: string;
};
export type ListRecordingsCommand = WebSocketMessage & {
  command: "list_recordings";
};
export type ConvertRecordingToFlowCommand = WebSocketMessage & {
  command: "convert_recording_to_flow";
  /**
   * Recording session ID
   */
  session_id: string;
  flow_name?: string;
};
export type GetRealtimeActionsCommand = WebSocketMessage & {
  command: "get_realtime_actions";
  /**
   * Recording session ID
   */
  session_id: string;
};
export type GetLatestRealtimeActionCommand = WebSocketMessage & {
  command: "get_latest_realtime_action";
  /**
   * Recording session ID
   */
  session_id: string;
};
export type StopCommand = WebSocketMessage & {
  command: "stop";
  flow_id?: string;
};
export type CloseCommand = WebSocketMessage & {
  command: "close";
};
export type ListSessionsCommand = WebSocketMessage & {
  command: "list_sessions";
};
export type CloseSessionCommand = WebSocketMessage & {
  command: "close_session";
  flow_id?: string;
};
export type RestartEngineCommand = WebSocketMessage & {
  command: "restart_engine";
};
export type CloseEngineCommand = WebSocketMessage & {
  command: "close_engine";
};
export type GetEngineStatusCommand = WebSocketMessage & {
  command: "get_engine_status";
};
export type StartPerformanceScanCommand = WebSocketMessage & {
  command: "start_performance_scan";
  /**
   * Performance test ID
   */
  test_id: string;
  /**
   * URL to navigate to and record
   */
  url: string;
};
export type StopPerformanceScanCommand = WebSocketMessage & {
  command: "stop_performance_scan";
  /**
   * Performance test ID
   */
  test_id: string;
  /**
   * Recording session ID
   */
  session_id: string;
};
export type RunLoadTestCommand = WebSocketMessage & {
  command: "run_load_test";
  /**
   * Performance test ID
   */
  test_id: string;
  /**
   * Load test configuration
   */
  config: {
    [k: string]: unknown;
  };
  /**
   * Authentication configuration for load test
   */
  auth_config?: {
    [k: string]: unknown;
  };
};
export type StopLoadTestCommand = WebSocketMessage & {
  command: "stop_load_test";
  /**
   * Performance test ID
   */
  test_id: string;
};
export type RunResponse = WebSocketResponse & {
  command: "run";
  mode: "full" | "partial";
  reports: {
    actions?: {}[];
    variables?: {};
    parameters?: {};
    output?: {};
  }[];
};
export type ListSessionsResponse = WebSocketResponse & {
  command: "list_sessions";
  sessions: SessionInfo[];
};
export type EngineStatusResponse = WebSocketResponse & {
  command: "get_engine_status";
  /**
   * Engine status
   */
  status: string;
  /**
   * Engine uptime in seconds
   */
  uptime: number;
  /**
   * Number of active sessions
   */
  active_sessions: number;
};
export type RecordingResponse = WebSocketResponse & {
  command: "record" | "pause_recording" | "resume_recording" | "stop_recording" | "finish_recording";
  session_id?: string;
  data?: {
    [k: string]: unknown;
  };
};
export type RecordingStatusResponse = WebSocketResponse & {
  command: "get_recording_status";
  session_info?: {
    [k: string]: unknown;
  };
};
export type ListRecordingsResponse = WebSocketResponse & {
  command: "list_recordings";
  recordings?: {
    [k: string]: unknown;
  }[];
};
export type DebugRunCommand = WebSocketMessage & {
  command: "debug_run";
  /**
   * Unique debug session identifier
   */
  session_id: string;
  /**
   * Flow to execute in debug mode
   */
  flow: {};
  /**
   * List of action IDs where execution should pause
   */
  breakpoints?: string[];
  mode?: "debug";
};
export type DebugStepCommand = WebSocketMessage & {
  command: "debug_step";
  /**
   * Debug session identifier
   */
  session_id: string;
};
export type DebugContinueCommand = WebSocketMessage & {
  command: "debug_continue";
  /**
   * Debug session identifier
   */
  session_id: string;
};
export type DebugPauseCommand = WebSocketMessage & {
  command: "debug_pause";
  /**
   * Debug session identifier
   */
  session_id: string;
};
export type DebugStopCommand = WebSocketMessage & {
  command: "debug_stop";
  /**
   * Debug session identifier
   */
  session_id: string;
};
export type DebugResponse = WebSocketResponse & {
  command: "debug_run" | "debug_step" | "debug_continue" | "debug_pause" | "debug_stop" | "debug_error";
  /**
   * Debug session identifier
   */
  session_id?: string;
  /**
   * Current debug session state
   */
  state?: "ready" | "running" | "paused" | "stepping" | "completed" | "error" | "stopped";
  /**
   * Additional debug data (action results, variables, etc.)
   */
  data?: {};
  /**
   * Error message if command failed
   */
  error?: string;
};
export type RunSuiteCommand = WebSocketMessage & {
  command: "run_suite";
  suite_id: string;
  schedule_id?: string;
  trigger_type?: "manual" | "scheduled";
  label?: string;
  run_config?: SuiteRunConfigWire;
  parallel?: boolean;
  maxParallel?: number;
  stopOnFailure?: boolean;
};
export type CancelSuiteCommand = WebSocketMessage & {
  command: "cancel_suite";
  suite_id: string;
  running_test_ids: string[];
};
export type AddRecordingWaitCommand = WebSocketMessage & {
  command: "add_recording_wait";
  session_id: string;
  wait_type: "duration" | "element" | "interactable";
  /**
   * ms; default 3000, min 100
   */
  duration?: number;
  /**
   * ms; default 10000
   */
  timeout?: number;
  /**
   * Required when wait_type is element or interactable
   */
  selector?: string;
  fallback_to_duration?: boolean;
  /**
   * ms; default 2000
   */
  fallback_duration?: number;
};
export type AuthenticateCommand = WebSocketMessage & {
  command: "authenticate";
  token: string;
  /**
   * Sent by the client but not consumed by the engine (account derived from token)
   */
  account_id?: string;
  server_url?: string;
};
export type RunSuiteResponse = WebSocketResponse & {
  command: "run_suite";
  success: boolean;
  suite_id?: string;
  suite_execution_id?: string;
  status?: "completed" | "failed" | "cancelled";
  total?: number;
  completed?: number;
  passed?: number;
  failed?: number;
  cancelled?: number;
  test_results?: SuiteTestResultWire[];
  message?: string;
  code?: string;
  error?: string;
};
export type CancelSuiteResponse = WebSocketResponse & {
  command: "cancel_suite";
  success: boolean;
  suite_id: string;
  signalled: boolean;
};
export type AddRecordingWaitResponse = WebSocketResponse & {
  command: "add_recording_wait";
  success: boolean;
  session_id: string;
  wait_action?: {
    [k: string]: unknown;
  } | null;
  message?: string;
  error?: string;
};
export type AuthenticateResponse = WebSocketResponse & {
  command: "authenticate";
  success: boolean;
  account_id?: string;
  message?: string;
  code?:
    | "ENGINE_TOKEN_MISSING"
    | "ENGINE_TOKEN_INVALID"
    | "ENGINE_CONNECTION_REFUSED"
    | "ENGINE_AUTH_FAILED"
    | "ENGINE_ACCOUNT_CONFLICT";
};
export type ConnectedResponse = WebSocketResponse & {
  command: "connected";
  success: boolean;
  host: string;
  ws_port: number;
  http_port: number;
  runtime: {
    is_docker?: boolean;
    platform?: string;
    [k: string]: unknown;
  };
};
export type RunSuiteProgressResponse = WebSocketResponse & {
  command: "run_suite_progress";
  success: boolean;
  suite_id: string;
  suite_execution_id: string;
  status: "running";
  total: number;
  completed: number;
  passed: number;
  failed: number;
  cancelled: number;
  running: string[];
  current?: SuiteTestResultWire;
};
export type ErrorResponse = WebSocketResponse & {
  command: string;
  success: boolean;
  message: string;
  error: string;
  [k: string]: unknown;
};
/**
 * The kind of engine work a process represents.
 */
export type ProcessKind = "run" | "suite" | "recording";
/**
 * Lifecycle state of a process. finished/failed/cancelled/stopped are terminal.
 */
export type ProcessStatus = "started" | "running" | "finished" | "failed" | "cancelled" | "stopped";
/**
 * The engine's full view of an account's processes, sent on every successful authenticate. This is how a reconnecting or reloaded client recovers work that started while it was away, including how far each run had progressed.
 */
export type ProcessSnapshotResponse = WebSocketResponse & {
  command: "process_snapshot";
  success?: boolean;
  /**
   * Every process the engine still retains for the account. A process absent from this list is finished and forgotten.
   */
  processes: ProcessEventResponse[];
};
/**
 * Account-wide process lifecycle event. Broadcast to every live socket of an account so any client can bind a process to the test it belongs to and learn the outcome even if it did not start the work or has since reloaded.
 */
export type ProcessEventResponse = WebSocketResponse & {
  command: "process_event";
  success?: boolean;
  /**
   * Stable id of the process for its lifetime.
   */
  process_id: string;
  kind: ProcessKind;
  status: ProcessStatus;
  /**
   * Test this process belongs to, so clients gate only that test's controls.
   */
  test_id?: string | null;
  /**
   * User id that started the work, or the API key id for a CI run.
   */
  initiated_by?: string | null;
  /**
   * True when the process has reached a final state.
   */
  terminal: boolean;
  mode?: string;
  report_id?: string | null;
  result?: string | null;
  message?: string | null;
  actions?: ProcessActionStatuses;
};
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

export interface ParallelExecutionModelsSchema {
  parallelExecution?: {
    requests?: ParallelTestsRequest[];
    results?: ParallelTestsResult[];
  };
  FlowExecutionRequest?: FlowExecutionRequest;
  FlowExecutionResult?: FlowExecutionResult;
  ParallelTestsRequest?: ParallelTestsRequest;
  ParallelTestsResult?: ParallelTestsResult;
  AssistantAuditOperation?: AssistantAuditOperation;
  AssistantAuditEntry?: AssistantAuditEntry;
  Position?: Position;
  ActionData?: ActionData;
  Action?: Action;
  Edge?: Edge;
  Zoom?: Zoom1;
  FlowVariables?: FlowVariables1;
  FlowParameters?: FlowParameters1;
  FlowRoot?: Flow1;
  WebSocketMessage?: WebSocketMessage;
  SessionInfo?: SessionInfo;
  BrowserAdapter?: BrowserAdapter;
  RunCommand?: RunCommand;
  MobileRunConfig?: MobileRunConfig2;
  RecordCommand?: RecordCommand;
  PauseRecordingCommand?: PauseRecordingCommand;
  ResumeRecordingCommand?: ResumeRecordingCommand;
  StopRecordingCommand?: StopRecordingCommand;
  FinishRecordingCommand?: FinishRecordingCommand;
  GetRecordingStatusCommand?: GetRecordingStatusCommand;
  ListRecordingsCommand?: ListRecordingsCommand;
  ConvertRecordingToFlowCommand?: ConvertRecordingToFlowCommand;
  GetRealtimeActionsCommand?: GetRealtimeActionsCommand;
  GetLatestRealtimeActionCommand?: GetLatestRealtimeActionCommand;
  StopCommand?: StopCommand;
  CloseCommand?: CloseCommand;
  ListSessionsCommand?: ListSessionsCommand;
  CloseSessionCommand?: CloseSessionCommand;
  RestartEngineCommand?: RestartEngineCommand;
  CloseEngineCommand?: CloseEngineCommand;
  GetEngineStatusCommand?: GetEngineStatusCommand;
  StartPerformanceScanCommand?: StartPerformanceScanCommand;
  StopPerformanceScanCommand?: StopPerformanceScanCommand;
  RunLoadTestCommand?: RunLoadTestCommand;
  StopLoadTestCommand?: StopLoadTestCommand;
  WebSocketResponse?: WebSocketResponse;
  RunResponse?: RunResponse;
  ListSessionsResponse?: ListSessionsResponse;
  EngineStatusResponse?: EngineStatusResponse;
  RecordingResponse?: RecordingResponse;
  RecordingStatusResponse?: RecordingStatusResponse;
  ListRecordingsResponse?: ListRecordingsResponse;
  DebugRunCommand?: DebugRunCommand;
  DebugStepCommand?: DebugStepCommand;
  DebugContinueCommand?: DebugContinueCommand;
  DebugPauseCommand?: DebugPauseCommand;
  DebugStopCommand?: DebugStopCommand;
  DebugResponse?: DebugResponse;
  SuiteRunConfigWire?: SuiteRunConfigWire;
  SuiteTestResultWire?: SuiteTestResultWire;
  RunSuiteCommand?: RunSuiteCommand;
  CancelSuiteCommand?: CancelSuiteCommand;
  AddRecordingWaitCommand?: AddRecordingWaitCommand;
  AuthenticateCommand?: AuthenticateCommand;
  RunSuiteResponse?: RunSuiteResponse;
  CancelSuiteResponse?: CancelSuiteResponse;
  AddRecordingWaitResponse?: AddRecordingWaitResponse;
  AuthenticateResponse?: AuthenticateResponse;
  ConnectedResponse?: ConnectedResponse;
  RunSuiteProgressResponse?: RunSuiteProgressResponse;
  RecordingSmartWaitDecision?: RecordingSmartWaitDecision;
  ErrorResponse?: ErrorResponse;
  ProcessKind?: ProcessKind;
  ProcessStatus?: ProcessStatus;
  ProcessActionStatuses?: ProcessActionStatuses;
  ProcessSnapshotResponse?: ProcessSnapshotResponse;
  ProcessEventResponse?: ProcessEventResponse;
  DateFormatPreset?: DateFormatPreset;
  Environment?: Environment1;
  GlobalVariable?: GlobalVariable;
  Variable?: Variable;
}
/**
 * Request to execute multiple tests in parallel
 */
export interface ParallelTestsRequest {
  /**
   * WS command discriminator
   */
  command?: "run_tests";
  /**
   * List of tests to execute
   */
  tests: FlowExecutionRequest[];
  /**
   * Shared data containing environment and globalVariables for all tests
   */
  data?: {
    [k: string]: unknown;
  };
  /**
   * Maximum number of parallel executions
   */
  max_parallel?: number;
  /**
   * Stop all tests if one fails
   */
  stop_on_failure?: boolean;
  /**
   * Cleanup resources after execution
   */
  cleanup_after?: boolean;
  /**
   * Browser mode
   */
  browser_mode?: "headful" | "headless";
  /**
   * Browser to use for execution
   */
  browser?: "chrome" | "firefox" | "safari" | "edge";
  /**
   * Run tests in incognito/private mode
   */
  incognito?: boolean;
  /**
   * Maximum retries for transient failures
   */
  max_retries?: number;
  /**
   * Eligible browsers when browser='random'. OS-aware filtering applied by the engine. (Wire name is camelCase per the committed model alias; sibling fields remain snake_case — see CHANGELOG casing note.)
   */
  randomBrowserPool?: string[];
  /**
   * Browser automation adapter for web actions; omitted uses the engine default.
   */
  browserAdapter?: "selenium" | "playwright";
}
/**
 * Request to execute a single test/flow
 */
export interface FlowExecutionRequest {
  flow: Flow;
  /**
   * Execution mode
   */
  mode?: "full" | "partial";
  /**
   * Recording configuration
   */
  recording?: {
    [k: string]: unknown;
  };
  /**
   * Additional test metadata
   */
  metadata?: {
    [k: string]: unknown;
  };
}
/**
 * Flow to execute with all required fields
 */
export interface Flow {
  /**
   * Unique identifier for the flow
   */
  id: string;
  /**
   * Human-readable name of the flow
   */
  name: string;
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
  actions: Action[];
  /**
   * Connections between actions
   */
  edges: Edge[];
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
  mobileSession?: MobileRunConfig;
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
 * Persisted mobile device/app target for this test (platform, device, app source). appiumServerUrl/extraCapabilities are intentionally left at their schema defaults here — those stay run-level/account-level overrides, not part of the saved test.
 */
export interface MobileRunConfig {
  platform: "android" | "ios";
  /**
   * Appium driver name; defaults to UiAutomator2 on Android and XCUITest on iOS
   */
  automationName?: string;
  deviceName?: string;
  /**
   * Exact device/simulator id; takes precedence over deviceName
   */
  udid?: string;
  platformVersion?: string;
  /**
   * Local path to an installed .apk/.ipa/.app, resolved by the engine from an appBinaryId: reference
   */
  app?: string;
  appPackage?: string;
  appActivity?: string;
  bundleId?: string;
  /**
   * Relative to the engine process, not the browser — matters when the engine runs remotely or in Docker
   */
  appiumServerUrl?: string;
  noReset?: boolean;
  fullReset?: boolean;
  autoGrantPermissions?: boolean;
  newCommandTimeout?: number;
  /**
   * Raw Appium capabilities merged last, for cloud device farms or anything not modeled above
   */
  extraCapabilities?: {
    [k: string]: unknown;
  };
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
/**
 * Result of parallel test execution
 */
export interface ParallelTestsResult {
  /**
   * Total number of tests
   */
  total_tests: number;
  /**
   * Number of passed tests
   */
  passed_tests: number;
  /**
   * Number of failed tests
   */
  failed_tests: number;
  /**
   * Number of skipped tests
   */
  skipped_tests?: number;
  /**
   * Total execution time
   */
  total_duration_seconds: number;
  /**
   * Individual test results
   */
  results: FlowExecutionResult[];
  /**
   * Overall success status
   */
  success: boolean;
}
/**
 * Result of a single test execution
 */
export interface FlowExecutionResult {
  /**
   * ID of the executed flow
   */
  flow_id: string;
  /**
   * Name of the executed flow
   */
  flow_name: string;
  /**
   * Whether the test passed
   */
  success: boolean;
  /**
   * Execution status
   */
  status: "completed" | "error" | "stopped" | "running" | "pending" | "failed" | "skipped";
  /**
   * Total actions in the flow
   */
  total_actions: number;
  /**
   * Number of actions executed
   */
  executed_actions: number;
  /**
   * Number of successful actions
   */
  successful_actions: number;
  /**
   * Total execution time in seconds
   */
  duration_seconds: number;
  /**
   * Full flow report
   */
  report: {
    [k: string]: unknown;
  };
  /**
   * Error message if failed
   */
  error?: string;
  /**
   * Additional test metadata
   */
  metadata?: {
    [k: string]: unknown;
  };
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
 * Complete flow definition for automation workflows
 */
export interface Flow1 {
  /**
   * Unique identifier for the flow
   */
  id: string;
  /**
   * Human-readable name of the flow
   */
  name: string;
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
  actions: Action[];
  /**
   * Connections between actions
   */
  edges: Edge[];
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
  mobileSession?: MobileRunConfig;
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
}
/**
 * Base WebSocket message structure
 */
export interface WebSocketMessage {
  /**
   * Command type
   */
  command: string;
  /**
   * Flow ID for the command
   */
  flow_id?: string;
}
/**
 * Information about an active session
 */
export interface SessionInfo {
  /**
   * Flow ID
   */
  flowId: string;
  /**
   * Session status
   */
  status: string;
  /**
   * Browser type
   */
  browser: string;
  /**
   * Flow name
   */
  flowName?: string;
  /**
   * Start timestamp
   */
  startedAt: number;
}
/**
 * Appium session target for this run; required if the flow contains mobile* actions. NOTE: this schema's RunCommand is a documentation model only — the real wire contract is the hand-maintained RunCommand in backend/engine/types/websocket_models.py, which must be edited to match.
 */
export interface MobileRunConfig1 {
  platform: "android" | "ios";
  /**
   * Appium driver name; defaults to UiAutomator2 on Android and XCUITest on iOS
   */
  automationName?: string;
  deviceName?: string;
  /**
   * Exact device/simulator id; takes precedence over deviceName
   */
  udid?: string;
  platformVersion?: string;
  /**
   * Local path to an installed .apk/.ipa/.app, resolved by the engine from an appBinaryId: reference
   */
  app?: string;
  appPackage?: string;
  appActivity?: string;
  bundleId?: string;
  /**
   * Relative to the engine process, not the browser — matters when the engine runs remotely or in Docker
   */
  appiumServerUrl?: string;
  noReset?: boolean;
  fullReset?: boolean;
  autoGrantPermissions?: boolean;
  newCommandTimeout?: number;
  /**
   * Raw Appium capabilities merged last, for cloud device farms or anything not modeled above
   */
  extraCapabilities?: {
    [k: string]: unknown;
  };
}
/**
 * Appium capabilities for a run's mobile device session. Nested (rather than flat fields on RunCommand) so a single 'mobile is None' check means 'no mobile target configured for this run'. extraCapabilities is merged last over every derived capability, which is what makes a cloud device farm (BrowserStack/Sauce/etc.) reachable without any provider-specific schema.
 */
export interface MobileRunConfig2 {
  platform: "android" | "ios";
  /**
   * Appium driver name; defaults to UiAutomator2 on Android and XCUITest on iOS
   */
  automationName?: string;
  deviceName?: string;
  /**
   * Exact device/simulator id; takes precedence over deviceName
   */
  udid?: string;
  platformVersion?: string;
  /**
   * Local path to an installed .apk/.ipa/.app, resolved by the engine from an appBinaryId: reference
   */
  app?: string;
  appPackage?: string;
  appActivity?: string;
  bundleId?: string;
  /**
   * Relative to the engine process, not the browser — matters when the engine runs remotely or in Docker
   */
  appiumServerUrl?: string;
  noReset?: boolean;
  fullReset?: boolean;
  autoGrantPermissions?: boolean;
  newCommandTimeout?: number;
  /**
   * Raw Appium capabilities merged last, for cloud device farms or anything not modeled above
   */
  extraCapabilities?: {
    [k: string]: unknown;
  };
}
/**
 * Base WebSocket response structure
 */
export interface WebSocketResponse {
  /**
   * Command that was executed
   */
  command: string;
  /**
   * Whether the command succeeded
   */
  success: boolean;
  /**
   * Response message
   */
  message?: string;
}
/**
 * run_suite nested run_config. Interior is camelCase (exception to the snake_case wire); the engine also accepts snake_case aliases for the parallel flags.
 */
export interface SuiteRunConfigWire {
  browser?: string;
  headless?: boolean;
  incognito?: boolean;
  browserAdapter?: BrowserAdapter;
  recordExecution?: boolean;
  environmentId?: string | null;
  randomBrowserPool?: string[];
  [k: string]: unknown;
}
/**
 * Per-test result entry in run_suite responses/progress (snake_case)
 */
export interface SuiteTestResultWire {
  test_id: string;
  flow_name: string;
  status: string;
  report_id?: string | null;
  message?: string;
}
/**
 * engine->frontend diagnostic emitted when a smart wait is inserted during recording. Top-level is snake_case; the data sub-object is camelCase (exception to the wire convention).
 */
export interface RecordingSmartWaitDecision {
  event: "recording_smart_wait_decision";
  command: "recording_smart_wait_decision";
  action_type: "smart_wait_decision";
  /**
   * epoch ms
   */
  timestamp: number;
  session_id: string;
  flow_id: string;
  data: {
    waitActionId: string;
    triggerActionId: string;
    dependentActionId: string;
    dependentActionType: string;
    reason: string;
    confidence: number | null;
    waitType: string;
    duration: number;
    effectiveWaitMs: number;
    selector: string;
    selectors: string[];
  };
}
/**
 * Per-action progress within a process, keyed by node id. Events carry only the actions that changed, so receivers merge rather than replace.
 */
export interface ProcessActionStatuses {
  [k: string]: "running" | "success" | "error";
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
