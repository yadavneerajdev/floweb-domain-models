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
 * Every automation action-type identifier (33 web + 17 desktop = 50).
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
 * AI provider selector
 */
export type AIProviderType = "auto" | "ollama" | "openai" | "anthropic" | "openai-compatible" | "disabled";
/**
 * The 17 desktop automation action types (subset of ActionType).
 */
export type DesktopActionType =
  | "desktopWaitForImage"
  | "desktopVerifyImage"
  | "desktopFindImage"
  | "desktopClickImage"
  | "desktopClickPoint"
  | "desktopTypeText"
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
  provider?: AIProviderConfig;
  metadata?: AIRequestMetadata;
}
/**
 * POST /ai/assistant-actions response
 */
export interface AssistantActionResponse {
  message: string;
  operations?: AssistantOperation[];
  plan?: string[] | null;
  suggestions?: string[] | null;
  metadata: AIResponseMetadata;
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
