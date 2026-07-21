/* eslint-disable */
// GENERATED from schemas/ by scripts/generate-ts.cjs — do not edit by hand.

/**
 * Severity level of the warning
 */
export type WarningSeverity = "minor" | "medium" | "critical" | "info";

export interface FlowValidationModelsSchema {
  flowValidation?: {
    warnings?: FlowWarning[];
    loopDetections?: LoopDetectionResult[];
    validationResults?: FlowValidationResult[];
  };
  FlowWarning?: FlowWarning;
  WarningSeverity?: WarningSeverity;
  LoopDetectionResult?: LoopDetectionResult;
  LoopInfo?: LoopInfo;
  FlowValidationResult?: FlowValidationResult;
  ValidationSummary?: ValidationSummary;
  NodeValidationResult?: NodeValidationResult;
}
/**
 * Flow validation warning or error
 */
export interface FlowWarning {
  /**
   * Unique warning identifier
   */
  id: string;
  /**
   * Type of warning
   */
  type:
    | "missing-selector"
    | "infinite-loop"
    | "unreachable-node"
    | "missing-condition"
    | "invalid-reference"
    | "missing-action-reference"
    | "circular-dependency"
    | "duplicate-id"
    | "invalid-variable"
    | "missing-variable"
    | "type-mismatch"
    | "performance-issue"
    | "security-risk";
  severity: WarningSeverity;
  /**
   * ID of the node that triggered the warning
   */
  nodeId: string;
  /**
   * Name of the node that triggered the warning
   */
  nodeName: string;
  /**
   * Warning message
   */
  message: string;
  /**
   * Detailed description of the warning
   */
  description: string;
  /**
   * List of other affected node IDs
   */
  affectedNodes?: string[];
  /**
   * Suggested fix for the warning
   */
  suggestion?: string;
  /**
   * Category of the warning
   */
  category?: "logic" | "performance" | "security" | "usability" | "compatibility";
  /**
   * When the warning was detected
   */
  createdAt?: string;
  /**
   * Optional structured detail payload for the warning
   */
  details?: {};
}
/**
 * Result of loop detection analysis
 */
export interface LoopDetectionResult {
  /**
   * Whether loops were detected in the flow
   */
  hasLoops: boolean;
  /**
   * Information about detected loops
   */
  loops: LoopInfo[];
  /**
   * Total number of loops detected
   */
  totalLoops?: number;
  /**
   * Number of potentially infinite loops
   */
  infiniteLoops?: number;
}
/**
 * Information about a detected loop
 */
export interface LoopInfo {
  /**
   * Node IDs that form the loop
   */
  nodes: string[];
  /**
   * Whether the loop has a proper exit condition
   */
  hasExitCondition: boolean;
  severity: WarningSeverity;
  /**
   * Description of the loop issue
   */
  description: string;
  /**
   * Maximum iterations if detectable
   */
  maxIterations?: number;
  /**
   * Whether this appears to be an infinite loop
   */
  isInfinite?: boolean;
}
/**
 * Complete result of flow validation
 */
export interface FlowValidationResult {
  /**
   * ID of the validated flow
   */
  flowId: string;
  /**
   * Name of the validated flow
   */
  flowName?: string;
  /**
   * Whether the flow is valid
   */
  isValid: boolean;
  /**
   * List of warnings found
   */
  warnings: FlowWarning[];
  /**
   * List of errors found (critical warnings)
   */
  errors: FlowWarning[];
  summary: ValidationSummary;
  /**
   * When validation was performed
   */
  validatedAt?: string;
  /**
   * Time taken for validation in seconds
   */
  validationTime?: number;
}
/**
 * Summary statistics of validation results
 */
export interface ValidationSummary {
  /**
   * Total number of nodes in the flow
   */
  totalNodes: number;
  /**
   * Total number of edges in the flow
   */
  totalEdges: number;
  /**
   * Total number of warnings
   */
  warningCount: number;
  /**
   * Total number of errors
   */
  errorCount: number;
  /**
   * Number of critical severity issues
   */
  criticalCount?: number;
  /**
   * Count of warnings by type
   */
  warningsByType?: {
    [k: string]: number;
  };
  /**
   * Count of warnings by severity
   */
  warningsBySeverity?: {
    minor?: number;
    medium?: number;
    critical?: number;
    info?: number;
  };
}
/**
 * Validation result for a specific node
 */
export interface NodeValidationResult {
  /**
   * ID of the validated node
   */
  nodeId: string;
  /**
   * Type of the node
   */
  nodeType: string;
  /**
   * Whether the node is valid
   */
  isValid: boolean;
  /**
   * Warnings specific to this node
   */
  warnings?: FlowWarning[];
  /**
   * Validation of node configuration
   */
  configValidation?: {
    isValid?: boolean;
    missingFields?: string[];
    invalidFields?: string[];
    typeErrors?: string[];
  };
}
