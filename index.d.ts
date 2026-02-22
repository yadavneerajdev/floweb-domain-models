export type Primitive = string | number | boolean | null;
export type JsonValue = Primitive | JsonValue[] | { [key: string]: JsonValue };
export type AnyObject = Record<string, unknown>;

export interface Position {
  x: number;
  y: number;
}

export interface Zoom {
  x: number;
  y: number;
  zoom: number;
}

export interface ActionData {
  label: string;
  type: string;
  config: AnyObject;
}

export interface Action {
  id: string;
  type: string;
  position: Position;
  data: ActionData;
}

export interface Edge {
  id: string;
  source: string;
  sourceHandle?: string | null;
  target: string;
  targetHandle?: string | null;
  type?: string;
  data?: AnyObject;
}

export type VariableType =
  | "string"
  | "number"
  | "boolean"
  | "object"
  | "array"
  | "web-identifier"
  | string;

export interface Variable {
  id: string;
  name: string;
  type: VariableType;
  value: unknown;
  description?: string;
  isOutput?: boolean;
}

export interface FlowVariables {
  input: Variable[];
  output: Variable[];
}

export interface FlowParameters {
  input: Variable[];
  output: Variable[];
}

export interface EnvironmentVariable extends Variable {}

export interface Environment {
  id: string;
  name: string;
  variables: EnvironmentVariable[];
  description?: string;
  isActive?: boolean;
  isDefault?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface GlobalVariable extends Variable {
  createdAt?: string;
  updatedAt?: string;
}

export type FlowKind = "flow" | "test" | "performance";
export type FlowLastResult = "passed" | "failed" | "pending" | "running";

export interface Flow {
  id: string;
  name: string;
  actions: Action[];
  edges: Edge[];
  type?: FlowKind;
  description?: string;
  tags?: string[];
  zoom?: Zoom;
  variables?: FlowVariables;
  parameters?: FlowParameters;
  environment?: Environment;
  globalVariables?: GlobalVariable[];
  parentID?: string | null;
  createdAt?: string;
  updatedAt?: string;
  lastRun?: string;
  lastResult?: FlowLastResult;
  synced?: boolean;
}

export interface EnvironmentAndGlobalVariablesConfiguration {
  environments: Environment[];
  globalVariables: GlobalVariable[];
}

export interface ResponseTiming {
  dns?: number;
  tcp?: number;
  tls?: number;
  ttfb?: number;
  download?: number;
}

export interface RecordedRequest {
  id: string;
  method: string;
  url: string;
  headers?: Record<string, string>;
  body?: unknown;
}

export interface RecordedResponse {
  status: number;
  headers?: Record<string, string>;
  body?: unknown;
  timing?: ResponseTiming;
}

export interface LoadTestThresholds {
  maxResponseTime?: number;
  maxErrorRate?: number;
  minThroughput?: number;
}

export interface LoadTestConfiguration {
  targetUrl: string;
  duration: number;
  virtualUsers: number;
  rampUpTime?: number;
  includeRequests?: string[];
  thresholds?: LoadTestThresholds;
}

export interface PerformanceTestMetadata {
  id: string;
  name: string;
  description?: string;
  tags?: string[];
  createdAt: string;
  updatedAt: string;
  createdBy?: string;
  version?: number;
  status?: string;
  parentID?: string | null;
}

export interface PerformanceTest {
  metadata: PerformanceTestMetadata;
  recordedRequests: RecordedRequest[];
  loadTestConfig: LoadTestConfiguration;
  results?: AnyObject;
}

export interface BaseActionConfig {
  image?: string;
  [key: string]: unknown;
}

export interface ClickConfig extends BaseActionConfig {}
export interface InputConfig extends BaseActionConfig {}
export interface SendKeysConfig extends BaseActionConfig {}
export interface NavigateConfig extends BaseActionConfig {}
export interface WaitConfig extends BaseActionConfig {}
export interface ScrollConfig extends BaseActionConfig {}
export interface ScreenshotConfig extends BaseActionConfig {}
export interface AssertionConfig extends BaseActionConfig {}
export interface AssertVisibleConfig extends BaseActionConfig {}
export interface FormFieldOption {
  value: string;
  label: string;
}
export interface FormField {
  selector: string;
  type?: string;
  value?: unknown;
  options?: FormFieldOption[];
}
export interface FormFillConfig extends BaseActionConfig {
  fields?: FormField[];
}
export interface ClearInputConfig extends BaseActionConfig {}
export interface OpenNewTabConfig extends BaseActionConfig {}
export interface SwitchTabConfig extends BaseActionConfig {}
export interface GoBackConfig extends BaseActionConfig {}
export interface GoForwardConfig extends BaseActionConfig {}
export interface RefreshConfig extends BaseActionConfig {}
export interface GetPageInfoConfig extends BaseActionConfig {}
export interface JunctionConfig extends BaseActionConfig {}
export interface ApiCallConfig extends BaseActionConfig {}
export interface ConditionalConfig extends BaseActionConfig {}
export interface LoopConfig extends BaseActionConfig {}
export interface DatabaseQueryConfig extends BaseActionConfig {}
export interface DatabaseInsertConfig extends BaseActionConfig {}
export interface CustomCodeConfig extends BaseActionConfig {}
export interface DragAndDropConfig extends BaseActionConfig {}
export interface CallToFlowConfig extends BaseActionConfig {}
export interface SwitchToFrameConfig extends BaseActionConfig {}
export interface ExitFrameConfig extends BaseActionConfig {}
export interface SetViewportConfig extends BaseActionConfig {}
export interface GetElementPropertiesConfig extends BaseActionConfig {}
export interface HandlePopupConfig extends BaseActionConfig {}
export interface FileUploadConfig extends BaseActionConfig {}
export interface FileDownloadConfig extends BaseActionConfig {}
export interface SubflowConfig extends BaseActionConfig {}

export interface ActionResult {
  node_id: string;
  action_type: string;
  config: AnyObject;
  start_time: number;
  end_time: number;
  duration_seconds: number;
  success: boolean;
  message: string;
  error?: string;
  screenshot?: string;
  data?: AnyObject;
}

export interface FlowReport {
  actions: ActionResult[];
  variables: Record<string, AnyObject[]>;
  parameters: {
    input: AnyObject[];
    output: AnyObject[];
  };
  output: AnyObject;
  recording?: string;
  recording_file?: string;
  recording_duration?: number;
  flow_id?: string;
  flow_name?: string;
  start_time?: number;
  end_time?: number;
  total_duration?: number;
  success?: boolean;
  error?: string;
  environment?: AnyObject;
  browser_info?: AnyObject;
  performance_metrics?: AnyObject;
}

export type WarningSeverity = "minor" | "medium" | "critical";

export interface FlowWarning {
  type: string;
  severity: WarningSeverity;
  message: string;
  nodeId?: string;
  details?: AnyObject;
}

export interface LoopDetectionResult {
  hasLoop: boolean;
  loops: string[][];
}

export interface FlowValidationResult {
  isValid: boolean;
  warnings: FlowWarning[];
  loopDetection: LoopDetectionResult;
}

export interface ValidationSummary {
  totalWarnings: number;
  criticalWarnings: number;
  hasLoops: boolean;
}

export interface FlowExecutionRequest {
  flow: Flow;
  mode?: "full" | "partial";
  recording?: AnyObject | null;
  metadata?: AnyObject;
}

export type FlowExecutionStatus =
  | "completed"
  | "failed"
  | "error"
  | "stopped"
  | "running"
  | "pending"
  | "skipped";

export interface FlowExecutionResult {
  flow_id: string;
  flow_name: string;
  success: boolean;
  status: FlowExecutionStatus;
  total_actions: number;
  executed_actions: number;
  successful_actions: number;
  duration_seconds: number;
  report: FlowReport | AnyObject;
  error?: string;
  metadata?: AnyObject;
}

export type BrowserMode = "headed" | "headless" | "headful";
export type BrowserName = "chrome" | "firefox" | "edge" | "safari" | string;

export interface ParallelTestsRequest {
  command?: "run_tests";
  tests: FlowExecutionRequest[];
  data?: {
    environment?: Environment;
    globalVariables?: GlobalVariable[];
    [key: string]: unknown;
  };
  max_parallel?: number;
  stop_on_failure?: boolean;
  cleanup_after?: boolean;
  browser_mode?: BrowserMode;
  browser?: BrowserName;
  incognito?: boolean;
  max_retries?: number;
}

export interface ParallelTestsResult {
  total_tests: number;
  passed_tests: number;
  failed_tests: number;
  skipped_tests?: number;
  total_duration_seconds: number;
  results: FlowExecutionResult[];
  success: boolean;
}

export interface WebSocketMessage {
  command: string;
  flow_id?: string;
}

export interface SessionInfo {
  flowId: string;
  flowName?: string;
  status: string;
  browser: string;
  startedAt: number;
}

export interface RunCommand extends WebSocketMessage {
  command: "run";
  flow: Flow;
  mode?: "full" | "partial";
  recording?: AnyObject;
  browser?: BrowserName;
  headless?: boolean;
  incognito?: boolean;
}

export interface RecordCommand extends WebSocketMessage {
  command: "record";
  session_id?: string;
  url?: string;
  browser?: BrowserName;
  headless?: boolean;
  incognito?: boolean;
  config?: AnyObject;
}

export interface PauseRecordingCommand extends WebSocketMessage {
  command: "pause_recording";
  session_id: string;
}

export interface ResumeRecordingCommand extends WebSocketMessage {
  command: "resume_recording";
  session_id: string;
}

export interface StopRecordingCommand extends WebSocketMessage {
  command: "stop_recording";
  session_id: string;
}

export interface FinishRecordingCommand extends WebSocketMessage {
  command: "finish_recording";
  session_id: string;
  flow_name?: string;
}

export interface GetRecordingStatusCommand extends WebSocketMessage {
  command: "get_recording_status";
  session_id?: string;
}

export interface ListRecordingsCommand extends WebSocketMessage {
  command: "list_recordings";
}

export interface ConvertRecordingToFlowCommand extends WebSocketMessage {
  command: "convert_recording_to_flow";
  session_id: string;
  flow_name?: string;
}

export interface GetRealtimeActionsCommand extends WebSocketMessage {
  command: "get_realtime_actions";
  session_id: string;
}

export interface GetLatestRealtimeActionCommand extends WebSocketMessage {
  command: "get_latest_realtime_action";
  session_id: string;
}

export interface StopCommand extends WebSocketMessage {
  command: "stop";
  flow_id?: string;
}

export interface CloseCommand extends WebSocketMessage {
  command: "close";
}

export interface ListSessionsCommand extends WebSocketMessage {
  command: "list_sessions";
}

export interface CloseSessionCommand extends WebSocketMessage {
  command: "close_session";
  flow_id?: string;
}

export interface RestartEngineCommand extends WebSocketMessage {
  command: "restart_engine";
}

export interface CloseEngineCommand extends WebSocketMessage {
  command: "close_engine";
}

export interface GetEngineStatusCommand extends WebSocketMessage {
  command: "get_engine_status";
}

export interface StartPerformanceScanCommand extends WebSocketMessage {
  command: "start_performance_scan";
  test_id: string;
  url: string;
}

export interface StopPerformanceScanCommand extends WebSocketMessage {
  command: "stop_performance_scan";
  test_id: string;
  session_id: string;
}

export interface RunLoadTestCommand extends WebSocketMessage {
  command: "run_load_test";
  test_id: string;
  config: AnyObject;
  auth_config?: AnyObject;
}

export interface StopLoadTestCommand extends WebSocketMessage {
  command: "stop_load_test";
  test_id: string;
}

export interface WebSocketResponse {
  command: string;
  success: boolean;
  message?: string;
}

export interface RunResponse extends WebSocketResponse {
  command: "run";
  mode: "full" | "partial";
  reports: FlowReport;
}

export interface ListSessionsResponse extends WebSocketResponse {
  command: "list_sessions";
  sessions: SessionInfo[];
}

export interface EngineStatusResponse extends WebSocketResponse {
  command: "get_engine_status";
  status: string;
  uptime: number;
  active_sessions: number;
}

export interface RecordingResponse extends WebSocketResponse {
  command: "record" | "pause_recording" | "resume_recording" | "stop_recording" | "finish_recording";
  session_id?: string;
  data?: AnyObject;
}

export interface RecordingStatusResponse extends WebSocketResponse {
  command: "get_recording_status";
  session_info?: AnyObject;
}

export interface ListRecordingsResponse extends WebSocketResponse {
  command: "list_recordings";
  recordings: AnyObject[];
}

export type DebugState = "ready" | "running" | "paused" | "stepping" | "completed" | "failed" | "stopped";
export type PauseReason = "breakpoint" | "manual" | "step" | "error";

export interface Breakpoint {
  node_id: string;
  enabled?: boolean;
}

export interface DebugExecutionInfo {
  session_id: string;
  flow_id: string;
  state: DebugState;
  current_action_id?: string;
  current_action_index?: number;
  executed_actions?: string[];
}

export interface DebugSession {
  session_id: string;
  flow_id: string;
  state: DebugState;
  breakpoints?: string[];
  current_action_id?: string;
  current_action_index?: number;
  created_at?: number;
  last_updated?: number;
}

export interface DebugActionUpdate {
  session_id: string;
  node_id: string;
  action_index: number;
  action_type?: string;
  status: "started" | "completed" | "failed" | "skipped";
  result?: AnyObject;
}

export interface DebugRunCommand {
  command: "debug_run";
  session_id: string;
  flow: Flow;
  breakpoints?: string[];
  browser?: BrowserName;
  headless?: boolean;
  incognito?: boolean;
}

export interface DebugStepCommand {
  command: "debug_step";
  session_id: string;
}

export interface DebugContinueCommand {
  command: "debug_continue";
  session_id: string;
}

export interface DebugPauseCommand {
  command: "debug_pause";
  session_id: string;
}

export interface DebugStopCommand {
  command: "debug_stop";
  session_id: string;
}

export interface DebugResponse {
  command: string;
  success: boolean;
  session_id?: string;
  message?: string;
  data?: AnyObject;
}
