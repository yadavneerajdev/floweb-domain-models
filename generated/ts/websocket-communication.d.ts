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
