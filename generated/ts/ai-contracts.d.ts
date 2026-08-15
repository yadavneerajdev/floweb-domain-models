/* eslint-disable */
// GENERATED from schemas/ by scripts/generate-ts.cjs — do not edit by hand.

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

export interface AIContractsSchema {
  generateFlowRequest?: GenerateFlowRequest;
  generateFlowResponse?: GenerateFlowResponse;
  providerConfig?: AIProviderConfig;
  autonomousTestsRequest?: AutonomousTestsRequest;
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
  AutonomousTestsRequest?: AutonomousTestsRequest;
  VibeVerifyResponse?: VibeVerifyResponse;
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
 * Server-injected request context. Accepts additional keys.
 */
export interface AIRequestMetadata {
  accountId?: string | null;
  userId?: string | null;
  traceId?: string | null;
  [k: string]: unknown;
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
 * POST /ai/generate-tests request. Crawls the URL server-side, so the body carries a target rather than a description; bounds mirror the ai-service's GenerateTestsRequest.
 */
export interface AutonomousTestsRequest {
  url: string;
  goal?: string;
  maxSuites?: number;
  provider?: AIProviderConfig;
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
