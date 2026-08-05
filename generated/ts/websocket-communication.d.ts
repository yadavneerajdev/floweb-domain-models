/* eslint-disable */
// GENERATED from schemas/ by scripts/generate-ts.cjs — do not edit by hand.

export type RunCommand = WebSocketMessage & {
  command: "run";
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
};
export type RecordCommand = WebSocketMessage & {
  command: "record";
  flow_id?: string;
  url?: string;
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

export interface WebSocketCommunicationModelsSchema {
  websocketCommunication?: {
    commands?: (
      | RunCommand
      | RecordCommand
      | PauseRecordingCommand
      | ResumeRecordingCommand
      | StopRecordingCommand
      | FinishRecordingCommand
      | GetRecordingStatusCommand
      | ListRecordingsCommand
      | ConvertRecordingToFlowCommand
      | GetRealtimeActionsCommand
      | GetLatestRealtimeActionCommand
      | StopCommand
      | CloseCommand
      | ListSessionsCommand
      | CloseSessionCommand
      | RestartEngineCommand
      | CloseEngineCommand
      | GetEngineStatusCommand
      | StartPerformanceScanCommand
      | StopPerformanceScanCommand
      | RunLoadTestCommand
      | StopLoadTestCommand
      | DebugRunCommand
      | DebugStepCommand
      | DebugContinueCommand
      | DebugPauseCommand
      | DebugStopCommand
      | RunSuiteCommand
      | CancelSuiteCommand
      | AddRecordingWaitCommand
      | AuthenticateCommand
    )[];
    responses?: (
      | RunResponse
      | ListSessionsResponse
      | EngineStatusResponse
      | RecordingResponse
      | RecordingStatusResponse
      | ListRecordingsResponse
      | DebugResponse
      | WebSocketResponse
      | RunSuiteResponse
      | CancelSuiteResponse
      | AddRecordingWaitResponse
      | AuthenticateResponse
      | ConnectedResponse
      | RunSuiteProgressResponse
      | RecordingSmartWaitDecision
      | ErrorResponse
      | ProcessEventResponse
      | ProcessSnapshotResponse
    )[];
  };
  WebSocketMessage?: WebSocketMessage;
  SessionInfo?: SessionInfo;
  RunCommand?: RunCommand;
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
 * run_suite nested run_config. Interior is camelCase (exception to the snake_case wire); the engine also accepts snake_case aliases for the parallel flags.
 */
export interface SuiteRunConfigWire {
  browser?: string;
  headless?: boolean;
  incognito?: boolean;
  recordExecution?: boolean;
  environmentId?: string | null;
  randomBrowserPool?: string[];
  [k: string]: unknown;
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
