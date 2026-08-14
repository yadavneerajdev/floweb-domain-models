/* eslint-disable */
// GENERATED from schemas/ by scripts/generate-ts.cjs — do not edit by hand.

/**
 * How items are generated (anything else falls back to hybrid)
 */
export type DataLabGenerationMode = "ai" | "synthetic" | "hybrid";
/**
 * Kind of generated dataset item
 */
export type DatasetType = "test-scenario" | "xpath-selector";
/**
 * Every automation action-type identifier (29 web + 18 desktop + 15 mobile + 3 api + 4 integrations + 6 core = 75).
 */
export type ActionType =
  | "click"
  | "input"
  | "sendKeys"
  | "wait"
  | "navigate"
  | "scroll"
  | "screenshot"
  | "assertion"
  | "assertVisible"
  | "fillForm"
  | "clearInput"
  | "openNewTab"
  | "switchTab"
  | "goForward"
  | "goBack"
  | "refresh"
  | "getPageInfo"
  | "setViewport"
  | "apiCall"
  | "networkControl"
  | "accessibilityAudit"
  | "captureWebVitals"
  | "visualRegression"
  | "loadDataset"
  | "conditional"
  | "loop"
  | "dbQuery"
  | "dbInsert"
  | "custom"
  | "dragAndDrop"
  | "callToFlow"
  | "switchToFrame"
  | "exitFrame"
  | "getElementProperties"
  | "handlePopup"
  | "fileUpload"
  | "fileDownload"
  | "junction"
  | "desktopWaitForImage"
  | "desktopVerifyImage"
  | "desktopFindImage"
  | "desktopClickImage"
  | "desktopClickPoint"
  | "desktopTypeText"
  | "desktopFillForm"
  | "desktopMoveMouse"
  | "desktopDragAndDrop"
  | "desktopHotkey"
  | "desktopRunCommand"
  | "desktopRunScript"
  | "desktopCaptureScreen"
  | "desktopFocusWindow"
  | "desktopOpenApplication"
  | "desktopSwitchDesktop"
  | "desktopListProcesses"
  | "desktopOpenPath"
  | "mobileLaunchApp"
  | "mobileTerminateApp"
  | "mobileInstallApp"
  | "mobileTapElement"
  | "mobileTypeText"
  | "mobileLongPress"
  | "mobileSwipe"
  | "mobileScrollToElement"
  | "mobileWaitForElement"
  | "mobileVerifyElement"
  | "mobileGetElementProperties"
  | "mobileCaptureScreen"
  | "mobilePressKey"
  | "mobileSetOrientation"
  | "mobileHideKeyboard"
  | "gmail"
  | "slack"
  | "discord"
  | "jira";
/**
 * AI provider selector
 */
export type AIProviderType = "auto" | "ollama" | "openai" | "anthropic" | "openai-compatible" | "disabled";
/**
 * What kind of work a thread step represents
 */
export type AssistantStepKind = "discovery" | "decision" | "edit" | "answer" | "error";
/**
 * Coarse stage of an assistant turn, streamed while the turn runs
 */
export type AssistantPhase =
  | "reading_context"
  | "consulting_docs"
  | "awaiting_model"
  | "executing_tools"
  | "done"
  | "failed"
  | "cancelled";
/**
 * The 18 desktop automation action types (subset of ActionType).
 */
export type DesktopActionType =
  | "desktopWaitForImage"
  | "desktopVerifyImage"
  | "desktopFindImage"
  | "desktopClickImage"
  | "desktopClickPoint"
  | "desktopTypeText"
  | "desktopFillForm"
  | "desktopMoveMouse"
  | "desktopDragAndDrop"
  | "desktopHotkey"
  | "desktopRunCommand"
  | "desktopRunScript"
  | "desktopCaptureScreen"
  | "desktopFocusWindow"
  | "desktopOpenApplication"
  | "desktopSwitchDesktop"
  | "desktopListProcesses"
  | "desktopOpenPath";
/**
 * The 15 native mobile (iOS/Android) automation action types, run via Appium (subset of ActionType). Deliberately platform-neutral — no per-platform action types — the config/handler branches on the live Appium session's platform instead.
 */
export type MobileActionType =
  | "mobileLaunchApp"
  | "mobileTerminateApp"
  | "mobileInstallApp"
  | "mobileTapElement"
  | "mobileTypeText"
  | "mobileLongPress"
  | "mobileSwipe"
  | "mobileScrollToElement"
  | "mobileWaitForElement"
  | "mobileVerifyElement"
  | "mobileGetElementProperties"
  | "mobileCaptureScreen"
  | "mobilePressKey"
  | "mobileSetOrientation"
  | "mobileHideKeyboard";
/**
 * Actions that call an external application's API.
 */
export type IntegrationActionType = "gmail" | "slack" | "discord" | "jira";
/**
 * The 29 browser/DOM action types that require a live page context (subset of ActionType).
 */
export type WebActionType =
  | "click"
  | "input"
  | "sendKeys"
  | "scroll"
  | "dragAndDrop"
  | "fillForm"
  | "clearInput"
  | "assertion"
  | "assertVisible"
  | "getElementProperties"
  | "switchToFrame"
  | "exitFrame"
  | "handlePopup"
  | "fileUpload"
  | "fileDownload"
  | "navigate"
  | "goForward"
  | "goBack"
  | "refresh"
  | "openNewTab"
  | "switchTab"
  | "getPageInfo"
  | "setViewport"
  | "screenshot"
  | "custom"
  | "networkControl"
  | "accessibilityAudit"
  | "captureWebVitals"
  | "visualRegression";
/**
 * The 3 direct service-call action types: generic HTTP calls and database queries (subset of ActionType).
 */
export type ApiActionType = "apiCall" | "dbQuery" | "dbInsert";
/**
 * The 6 platform-agnostic control-flow and generic utility action types that need neither a browser nor OS automation (subset of ActionType).
 */
export type CoreActionType = "conditional" | "loop" | "junction" | "callToFlow" | "wait" | "loadDataset";

export interface DataLabSchema {
  generateTestsRequest?: GenerateTestsRequest;
  batchResponse?: DatasetBatchResponse;
  statusResponse?: DataLabStatusResponse;
  DatasetType?: DatasetType;
  DataLabGenerationMode?: DataLabGenerationMode;
  GenerateTestsRequest?: GenerateTestsRequest;
  GenerateXPathRequest?: GenerateXPathRequest;
  GenerateXPathFromSnippetRequest?: GenerateXPathFromSnippetRequest;
  DatasetItemResponse?: DatasetItemResponse;
  DatasetBatchResponse?: DatasetBatchResponse;
  DatasetManifestItem?: DatasetManifestItem;
  DataLabKindStatus?: DataLabKindStatus;
  DataLabStatusResponse?: DataLabStatusResponse;
  SelectorCandidate?: SelectorCandidate;
  GeneratedActionObject?: GeneratedActionObject;
  AIProviderType?: AIProviderType;
  AIProviderConfig?: AIProviderConfig;
  AIRequestMetadata?: AIRequestMetadata;
  AIResponseMetadata?: AIResponseMetadata;
  FlowStep?: FlowStep;
  GenerateFlowRequest?: GenerateFlowRequest;
  GenerateFlowResponse?: GenerateFlowResponse;
  AssistantOperation?: AssistantOperation;
  AssistantToolDescriptor?: AssistantToolDescriptor;
  AssistantActionRequest?: AssistantActionRequest;
  AssistantActionResponse?: AssistantActionResponse;
  AssistantRunRequest?: AssistantRunRequest;
  AssistantRunOutcome?: AssistantRunOutcome;
  AssistantContinuation?: AssistantContinuation;
  AssistantPhase?: AssistantPhase;
  AssistantProgressEvent?: AssistantProgressEvent;
  AssistantStepKind?: AssistantStepKind;
  AssistantStep?: AssistantStep;
  FixLocatorRequest?: FixLocatorRequest;
  FixLocatorResponse?: FixLocatorResponse;
  AnalyzeFailureRequest?: AnalyzeFailureRequest;
  AnalyzeFailureResponse?: AnalyzeFailureResponse;
  OptimizeRecordingRequest?: OptimizeRecordingRequest;
  OptimizeRecordingResponse?: OptimizeRecordingResponse;
  VibeAction?: VibeAction;
  VibeStepRecord?: VibeStepRecord;
  VibeMessage?: VibeMessage;
  VibeExistingStep?: VibeExistingStep;
  VibeNextActionRequest?: VibeNextActionRequest;
  VibeNextActionResponse?: VibeNextActionResponse;
  VibeVerifyRequest?: VibeVerifyRequest;
  VibeVerifyResponse?: VibeVerifyResponse;
  ActionType?: ActionType;
  DesktopActionType?: DesktopActionType;
  MobileActionType?: MobileActionType;
  IntegrationActionType?: IntegrationActionType;
  WebActionType?: WebActionType;
  ApiActionType?: ApiActionType;
  CoreActionType?: CoreActionType;
}
/**
 * POST /data-lab/generate-tests body (all fields optional; server applies defaults)
 */
export interface GenerateTestsRequest {
  prompt?: string;
  batchSize?: number;
  minActions?: number;
  maxActions?: number;
  includeAdvancedActions?: boolean;
  allowNearDuplicates?: boolean;
  generationMode?: DataLabGenerationMode;
  provider?: AIProviderConfig;
}
/**
 * Provider/model selection for an AI request
 */
export interface AIProviderConfig {
  /**
   * AI provider selector
   */
  provider?: "auto" | "ollama" | "openai" | "anthropic" | "openai-compatible" | "disabled";
  model?: string | null;
  baseUrl?: string | null;
  apiKey?: string | null;
  temperature?: number;
  maxTokens?: number;
  /**
   * How long to wait for the model to respond, in seconds. Null uses the service default. Bounded so a client cannot hold a worker open indefinitely.
   */
  requestTimeoutSeconds?: number | null;
}
/**
 * Response for all three generate endpoints
 */
export interface DatasetBatchResponse {
  outputDir: string;
  generatedCount: number;
  duplicatesSkipped: number;
  totals: {
    generated: number;
    duplicatesSkipped: number;
  };
  items: DatasetItemResponse[];
}
/**
 * A generated dataset item (also the persisted on-disk JSON shape). prompt/output/metadata shapes are discriminated by datasetType.
 */
export interface DatasetItemResponse {
  id: string;
  datasetType: DatasetType;
  createdAt: string;
  /**
   * 20-char sha256 hex slice
   */
  signature: string;
  prompt: {
    [k: string]: unknown;
  };
  output: {
    [k: string]: unknown;
  };
  metadata: {
    [k: string]: unknown;
  };
  fileName: string;
  relativePath: string;
}
/**
 * GET /data-lab/status response
 */
export interface DataLabStatusResponse {
  outputDir: string;
  tests: DataLabKindStatus;
  xpath: DataLabKindStatus;
}
/**
 * Per-kind status counters. actionCoverage is present only for the tests kind.
 */
export interface DataLabKindStatus {
  generated: number;
  duplicatesSkipped: number;
  uniqueSignatures: number;
  actionCoverage?: {
    [k: string]: number;
  };
  recent: DatasetManifestItem[];
}
/**
 * A recent dataset entry in the status manifest
 */
export interface DatasetManifestItem {
  id: string;
  fileName: string;
  relativePath: string;
  signature: string;
  createdAt: string;
  label: string;
}
/**
 * POST /data-lab/generate-xpath body
 */
export interface GenerateXPathRequest {
  prompt?: string;
  batchSize?: number;
  allowNearDuplicates?: boolean;
  generationMode?: DataLabGenerationMode;
  provider?: AIProviderConfig;
}
/**
 * POST /data-lab/generate-xpath-from-snippet body
 */
export interface GenerateXPathFromSnippetRequest {
  /**
   * Required; DOM to derive selectors from
   */
  domSnippet: string;
  /**
   * Required; what to select
   */
  targetInstruction: string;
  contextHint?: string;
  allowNearDuplicates?: boolean;
  generationMode?: DataLabGenerationMode;
  provider?: AIProviderConfig;
}
/**
 * A candidate selector inside an xpath-selector item's output
 */
export interface SelectorCandidate {
  type: "xpath" | "css";
  value: string;
  robustness: number;
  uniquenessEstimate: "high" | "medium" | "low";
  reason: string;
}
/**
 * A synthesized action inside a test-scenario item's output
 */
export interface GeneratedActionObject {
  /**
   * action-<n>
   */
  id: string;
  type: ActionType;
  label: string;
  config: {
    [k: string]: unknown;
  };
  rationale: string;
}
/**
 * Server-injected request context. Accepts additional keys.
 */
export interface AIRequestMetadata {
  accountId?: string | null;
  userId?: string | null;
  traceId?: string | null;
  [k: string]: unknown;
}
/**
 * Provenance attached to every AI response
 */
export interface AIResponseMetadata {
  provider: string;
  model: string;
  source: "llm" | "heuristic";
  warnings?: string[];
  raw?: {
    [k: string]: unknown;
  } | null;
}
/**
 * A high-level generated flow step
 */
export interface FlowStep {
  name: string;
  action: string;
  description?: string;
  parameters?: {
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
/**
 * POST /ai/generate-flow request
 */
export interface GenerateFlowRequest {
  description: string;
  url?: string | null;
  currentTest?: {
    [k: string]: unknown;
  } | null;
  provider?: AIProviderConfig;
  metadata?: AIRequestMetadata;
}
/**
 * POST /ai/generate-flow response
 */
export interface GenerateFlowResponse {
  nodes: {
    [k: string]: unknown;
  }[];
  edges: {
    [k: string]: unknown;
  }[];
  steps: FlowStep[];
  variables?: {
    [k: string]: unknown;
  }[];
  testData?: {
    [k: string]: unknown;
  };
  metadata: AIResponseMetadata;
  message: string;
}
/**
 * One tool operation proposed/performed by the assistant
 */
export interface AssistantOperation {
  tool: string;
  payload?: {
    [k: string]: unknown;
  };
  summary?: string | null;
  [k: string]: unknown;
}
/**
 * A registered assistant tool (GET /ai/assistant-tools)
 */
export interface AssistantToolDescriptor {
  id: string;
  label: string;
  description: string;
  category: string;
  requiresExecution: boolean;
}
/**
 * POST /ai/assistant-actions request
 */
export interface AssistantActionRequest {
  instruction: string;
  currentTest?: {
    [k: string]: unknown;
  } | null;
  assistantPermissions?: {
    [k: string]: unknown;
  } | null;
  /**
   * Results of a run the assistant previously requested
   */
  runOutcome?: AssistantRunOutcome | null;
  /**
   * Whether the engine is reachable, so the assistant knows if running is possible
   */
  engineConnected?: boolean | null;
  provider?: AIProviderConfig;
  metadata?: AIRequestMetadata;
}
/**
 * Execution results handed back to the assistant so it can decide whether to fix, continue, or stop.
 */
export interface AssistantRunOutcome {
  status: "passed" | "failed" | "error" | "cancelled" | "not_run";
  mode: "partial" | "full";
  durationSeconds?: number | null;
  failedNodeId?: string | null;
  failedAction?: string | null;
  errorMessage?: string | null;
  /**
   * Per-step outcomes from the engine report
   */
  steps?: {
    [k: string]: unknown;
  }[];
  consoleLogs?: string[];
  reportId?: string | null;
  [k: string]: unknown;
}
/**
 * POST /ai/assistant-actions response
 */
export interface AssistantActionResponse {
  message: string;
  operations?: AssistantOperation[];
  plan?: string[] | null;
  suggestions?: string[] | null;
  steps?: AssistantStep[];
  continuation?: AssistantContinuation | null;
  runRequest?: AssistantRunRequest | null;
  metadata: AIResponseMetadata;
}
/**
 * One entry in the assistant's reasoning thread: what it looked at, what it decided, and what it changed
 */
export interface AssistantStep {
  id: string;
  kind: AssistantStepKind;
  title: string;
  /**
   * Longer explanation shown when expanded. Markdown.
   */
  detail?: string | null;
  /**
   * Tool this step corresponds to, when it maps to one
   */
  tool?: string | null;
  status?: "ok" | "skipped" | "failed";
  [k: string]: unknown;
}
/**
 * Set when the assistant could not finish in one turn. The client applies this turn, then sends `nextInstruction` back to continue, so progress is visible per step instead of after the whole goal.
 */
export interface AssistantContinuation {
  /**
   * The overall objective being worked towards
   */
  goal: string;
  /**
   * Instruction the client should send to continue
   */
  nextInstruction: string;
  /**
   * Best estimate of turns still needed, when known
   */
  remaining?: number | null;
  /**
   * Why the work was split
   */
  reason?: string | null;
  [k: string]: unknown;
}
/**
 * The assistant asking for the test to be executed so it can check its own work. `partial` runs only what it changed; `full` runs everything.
 */
export interface AssistantRunRequest {
  mode: "partial" | "full";
  /**
   * Why the run is needed, shown to the user when asking permission
   */
  reason: string;
  /**
   * Nodes to run for a partial run. The client prepends whatever setup steps are required, so a mid-flow action does not fail for want of a browser.
   */
  nodeIds?: string[];
  /**
   * What the assistant expects to happen, so a mismatch is meaningful
   */
  expectation?: string | null;
  [k: string]: unknown;
}
/**
 * One server-sent event emitted while an assistant turn runs. Terminal events carry the final response.
 */
export interface AssistantProgressEvent {
  phase: AssistantPhase;
  /**
   * Human-readable description of the current phase
   */
  label: string;
  /**
   * Optional extra context for the phase
   */
  detail?: string | null;
  /**
   * The completed AssistantActionResponse, present only on a terminal event
   */
  response?: {
    [k: string]: unknown;
  } | null;
  [k: string]: unknown;
}
/**
 * POST /ai/fix-locator request
 */
export interface FixLocatorRequest {
  dom: string;
  oldLocator: string;
  attemptedSelectors?: string[];
  failedSelectors?: string[];
  semanticTarget?: {
    [k: string]: unknown;
  } | null;
  actionType?: string | null;
  provider?: AIProviderConfig;
  metadata?: AIRequestMetadata;
}
/**
 * POST /ai/fix-locator response
 */
export interface FixLocatorResponse {
  locator: string;
  confidence: number;
  alternatives?: string[];
  metadata: AIResponseMetadata;
  reasoning?: string | null;
}
/**
 * POST /ai/analyze-failure request
 */
export interface AnalyzeFailureRequest {
  failedStep?: {
    [k: string]: unknown;
  } | null;
  dom?: string | null;
  screenshot?: string | null;
  consoleLogs?: string[];
  networkLogs?: {
    [k: string]: unknown;
  }[];
  errorMessage?: string | null;
  provider?: AIProviderConfig;
  metadata?: AIRequestMetadata;
}
/**
 * POST /ai/analyze-failure response
 */
export interface AnalyzeFailureResponse {
  cause: string;
  fix: string;
  confidence: number;
  metadata: AIResponseMetadata;
  recommendations?: string[];
}
/**
 * POST /ai/optimize-recording request
 */
export interface OptimizeRecordingRequest {
  flowName?: string;
  recordedActions?: {
    [k: string]: unknown;
  }[];
  provider?: AIProviderConfig;
  metadata?: AIRequestMetadata;
}
/**
 * POST /ai/optimize-recording response
 */
export interface OptimizeRecordingResponse {
  flow: {
    [k: string]: unknown;
  };
  optimizedActions?: {
    [k: string]: unknown;
  }[];
  removedActions?: number;
  metadata: AIResponseMetadata;
  message: string;
}
/**
 * A vibe-mode action decision
 */
export interface VibeAction {
  type: string;
  label?: string;
  description?: string;
  config?: {
    [k: string]: unknown;
  };
}
/**
 * A prior vibe step in history
 */
export interface VibeStepRecord {
  type?: string;
  label?: string;
  reasoning?: string;
  success?: boolean;
  message?: string;
}
/**
 * A conversational message for vibe mode
 */
export interface VibeMessage {
  role?: string;
  content?: string;
}
/**
 * An already-authored step passed as context
 */
export interface VibeExistingStep {
  type?: string;
  label?: string;
}
/**
 * POST /ai/vibe-next-action request
 */
export interface VibeNextActionRequest {
  instruction: string;
  /**
   * base64 / data URI
   */
  screenshot: string;
  screenWidth?: number;
  screenHeight?: number;
  step?: number;
  maxSteps?: number;
  history?: VibeStepRecord[];
  messages?: VibeMessage[];
  existingSteps?: VibeExistingStep[];
  provider?: AIProviderConfig;
  metadata?: AIRequestMetadata;
}
/**
 * POST /ai/vibe-next-action response
 */
export interface VibeNextActionResponse {
  done?: boolean;
  reasoning?: string;
  message?: string;
  expectation?: string;
  action?: VibeAction | null;
  metadata: AIResponseMetadata;
}
/**
 * POST /ai/vibe-verify request
 */
export interface VibeVerifyRequest {
  instruction: string;
  /**
   * post-action screenshot (base64)
   */
  screenshot: string;
  expectation: string;
  lastAction?: VibeAction | null;
  step?: number;
  provider?: AIProviderConfig;
  metadata?: AIRequestMetadata;
}
/**
 * POST /ai/vibe-verify response
 */
export interface VibeVerifyResponse {
  verified?: boolean;
  reason?: string;
  metadata: AIResponseMetadata;
}
