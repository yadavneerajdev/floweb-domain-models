/* eslint-disable */
// GENERATED from schemas/ by scripts/generate-ts.cjs — do not edit by hand.

/**
 * Debug session states following the state machine specification
 */
export type DebugState = "ready" | "running" | "paused" | "stepping" | "completed" | "error" | "stopped";
/**
 * Reasons for debug execution pause
 */
export type PauseReason = "breakpoint" | "manual" | "error" | "step";

export interface DebugModelsSchema {
  DebugState?: DebugState;
  PauseReason?: PauseReason;
  Breakpoint?: Breakpoint;
  DebugExecutionInfo?: DebugExecutionInfo;
  DebugSession?: DebugSession;
  DebugActionUpdate?: DebugActionUpdate;
}
/**
 * Represents a breakpoint in debug execution
 */
export interface Breakpoint {
  /**
   * Action/node ID where breakpoint is set
   */
  nodeId: string;
  /**
   * Whether the breakpoint is active
   */
  enabled: boolean;
  /**
   * Number of times this breakpoint has been hit
   */
  hitCount?: number;
}
/**
 * Information about current debug execution state
 */
export interface DebugExecutionInfo {
  /**
   * ID of the action currently being executed or about to execute
   */
  currentNodeId: string | null;
  /**
   * Zero-based index of current action in execution order
   */
  currentActionIndex: number;
  /**
   * Total number of actions in the flow
   */
  totalActions: number;
  /**
   * List of action IDs that have been executed
   */
  executedActions: string[];
  /**
   * ID of the next breakpoint that will be hit
   */
  nextBreakpoint: string | null;
}
/**
 * Represents a single debug execution session
 */
export interface DebugSession {
  /**
   * Unique identifier for the debug session
   */
  sessionId: string;
  /**
   * ID of the flow being debugged
   */
  flowId: string;
  /**
   * Set of action IDs where execution should pause
   */
  breakpoints: string[];
  /**
   * Debug session states following the state machine specification
   */
  state: "ready" | "running" | "paused" | "stepping" | "completed" | "error" | "stopped";
  /**
   * ID of the action currently being executed or about to execute
   */
  currentActionId?: string | null;
  /**
   * Zero-based index of current action in execution order
   */
  currentActionIndex?: number;
  /**
   * List of action IDs that have been executed
   */
  executedActions?: string[];
  /**
   * Flag indicating manual pause was requested
   */
  pauseRequested?: boolean;
  /**
   * Flag indicating stop was requested
   */
  stopRequested?: boolean;
  /**
   * Timestamp when session was created (Unix timestamp)
   */
  createdAt?: number;
  /**
   * Timestamp of last state change (Unix timestamp)
   */
  lastUpdated?: number;
}
/**
 * Real-time update sent during debug execution
 */
export interface DebugActionUpdate {
  /**
   * Type of debug update
   */
  type:
    | "debug_action_started"
    | "debug_action_completed"
    | "debug_action_failed"
    | "debug_paused"
    | "debug_resumed"
    | "debug_completed"
    | "debug_stopped"
    | "debug_error";
  /**
   * Debug session ID
   */
  sessionId: string;
  /**
   * Action ID related to this update
   */
  actionId?: string | null;
  /**
   * Index of the action in execution order
   */
  actionIndex?: number | null;
  /**
   * Debug session states following the state machine specification
   */
  state: "ready" | "running" | "paused" | "stepping" | "completed" | "error" | "stopped";
  /**
   * Reason for pause if state is paused
   */
  pauseReason?: PauseReason | null;
  /**
   * Action execution result if available
   */
  result?: {} | null;
  /**
   * Error message if action failed
   */
  error?: string | null;
  /**
   * Current flow variables state
   */
  variables?: {} | null;
}
