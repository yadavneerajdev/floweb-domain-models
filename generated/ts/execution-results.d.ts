/* eslint-disable */
// GENERATED from schemas/ by scripts/generate-ts.cjs — do not edit by hand.

export interface ExecutionResultsModelsSchema {
  executionResults?: {
    actionResults?: ActionResult[];
    flowReports?: FlowReport[];
  };
  ActionResult?: ActionResult;
  SemanticExpectedStates?: SemanticExpectedStates;
  SemanticRelation?: SemanticRelation;
  SemanticLibraryHints?: SemanticLibraryHints;
  SemanticTarget?: SemanticTarget;
  SemanticMatchObserved?: SemanticMatchObserved;
  SemanticMatchResult?: SemanticMatchResult;
  HealedSelectorSuggestion?: HealedSelectorSuggestion;
  HealedSelectorRecord?: HealedSelectorRecord;
  SelectorCandidateSuggestion?: SelectorCandidateSuggestion;
  SelectorCandidateRecord?: SelectorCandidateRecord;
  FlowReport?: FlowReport;
}
/**
 * Result of executing an action
 */
export interface ActionResult {
  /**
   * Action node ID
   */
  node_id: string;
  /**
   * Type of action executed
   */
  action_type: string;
  /**
   * Action configuration used
   */
  config: {
    [k: string]: unknown;
  };
  /**
   * Start timestamp in milliseconds
   */
  start_time: number;
  /**
   * End timestamp in milliseconds
   */
  end_time: number;
  /**
   * Duration in seconds
   */
  duration_seconds: number;
  /**
   * Whether the action succeeded
   */
  success: boolean;
  /**
   * Result message
   */
  message: string;
  /**
   * Error message if failed
   */
  error?: string;
  /**
   * Screenshot reference (legacy base64 or mediaId:<id>)
   */
  screenshot?: string;
  /**
   * Server media key for uploaded screenshot
   */
  screenshot_media_id?: string;
  /**
   * Additional action-specific data
   */
  data?: {
    [k: string]: unknown;
  };
}
/**
 * Complete report of flow execution
 */
export interface FlowReport {
  /**
   * Results of all actions
   */
  actions: ActionResult[];
  /**
   * Variables used during execution (input/output)
   */
  variables: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".*".
     */
    [k: string]: {
      [k: string]: unknown;
    }[];
  };
  /**
   * Parameters used during execution (input/output)
   */
  parameters: {
    input?: {
      [k: string]: unknown;
    }[];
    output?: {
      [k: string]: unknown;
    }[];
    /**
     * Parameters captured before execution
     */
    parameterBefore?: {
      [k: string]: unknown;
    }[];
    /**
     * Variables captured before execution
     */
    variableBefore?: {
      [k: string]: unknown;
    }[];
  };
  /**
   * Final output
   */
  output: {
    [k: string]: unknown;
  };
  /**
   * Recording data (deprecated, use recording_file instead)
   */
  recording?: string;
  /**
   * Path to the recording file on the server
   */
  recording_file?: string;
  /**
   * Duration of the recording in seconds
   */
  recording_duration?: number;
  /**
   * ID of the executed flow
   */
  flow_id?: string;
  /**
   * Name of the executed flow
   */
  flow_name?: string;
  /**
   * Flow execution start timestamp
   */
  start_time?: number;
  /**
   * Flow execution end timestamp
   */
  end_time?: number;
  /**
   * Total execution time in seconds
   */
  total_duration?: number;
  /**
   * Overall flow success status
   */
  success?: boolean;
  /**
   * Error message if flow failed
   */
  error?: string;
  /**
   * Environment used during execution
   */
  environment?: {
    [k: string]: unknown;
  };
  /**
   * Browser information
   */
  browser_info?: {
    name?: string;
    version?: string;
    user_agent?: string;
  };
  /**
   * Runtime execution configuration
   */
  run_config?: {
    /**
     * Execution mode used for run (full/partial)
     */
    execution_mode?: string;
    browser_config?: {
      browser: string;
      mode: "normal" | "incognito";
      browser_mode: "headful" | "headless";
    }[];
  };
  /**
   * Performance metrics collected during execution
   */
  performance_metrics?: {
    total_actions?: number;
    successful_actions?: number;
    failed_actions?: number;
    average_action_time?: number;
    total_network_requests?: number;
    total_data_transferred?: number;
  };
  healed_selectors?: HealedSelectorRecord[];
  candidate_selectors?: SelectorCandidateRecord[];
}
export interface HealedSelectorRecord {
  node_id: string;
  action_type: string;
  selector_key?: string;
  selectors_key?: string;
  original_selector?: string;
  healed_selector: string;
  source?: string;
  confidence?: number;
  attempted_selectors?: string[];
  failed_selectors?: string[];
  semantic_target?: SemanticTarget;
  semantic_match?: SemanticMatchResult;
  semantic_score?: number;
  semantic_reason?: string;
  suggestions?: HealedSelectorSuggestion[];
}
export interface SemanticTarget {
  tag?: string;
  role?: string;
  inputType?: string;
  name?: string;
  id?: string;
  text?: string;
  placeholder?: string;
  href?: string;
  classTokens?: string[];
  attributes?: {
    [k: string]: string;
  };
  libraryHints?: SemanticLibraryHints;
  expectedStates?: SemanticExpectedStates;
  relation?: SemanticRelation;
}
export interface SemanticLibraryHints {
  framework?: string;
  uiLibrary?: string;
  component?: string;
}
export interface SemanticExpectedStates {
  checked?: boolean;
  disabled?: boolean;
  selected?: boolean;
  expanded?: boolean;
}
export interface SemanticRelation {
  withinFormSelector?: string;
}
export interface SemanticMatchResult {
  matched?: boolean;
  score?: number;
  threshold?: number;
  reason?: string;
  matchedHints?: string[];
  missedHints?: string[];
  observed?: SemanticMatchObserved;
}
export interface SemanticMatchObserved {
  tag?: string;
  role?: string;
  inputType?: string;
  name?: string;
  id?: string;
  text?: string;
  placeholder?: string;
  href?: string;
  libraryHints?: SemanticLibraryHints;
  checked?: boolean;
  disabled?: boolean;
  selected?: boolean;
  expanded?: boolean;
}
export interface HealedSelectorSuggestion {
  selector: string;
  source?: string;
  confidence?: number;
  selector_type?: string;
  selector_category?: string;
  selector_strategy?: string;
}
export interface SelectorCandidateRecord {
  node_id: string;
  action_type: string;
  selector_key?: string;
  selectors_key?: string;
  primary_selector?: string;
  used_selector?: string;
  used_source?: string;
  semantic_target?: SemanticTarget;
  semantic_match?: SemanticMatchResult;
  semantic_score?: number;
  semantic_reason?: string;
  best_selector_candidate?: SelectorCandidateSuggestion;
  candidates?: SelectorCandidateSuggestion[];
}
export interface SelectorCandidateSuggestion {
  selector: string;
  source?: string;
  confidence?: number;
  score?: number;
  discovered?: boolean;
  same_target?: boolean;
  match_count?: number;
  unique?: boolean;
  selector_type?: string;
  selector_category?: string;
  selector_strategy?: string;
}
