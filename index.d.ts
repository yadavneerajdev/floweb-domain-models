// GENERATED — do not edit by hand.
// Published TypeScript surface, bundled from schemas/ by scripts/generate-index.cjs.
// Run `npm run generate` after changing any schema.
/* eslint-disable */

export type Primitive = string | number | boolean | null;
export type JsonValue = Primitive | JsonValue[] | { [key: string]: JsonValue };
export type AnyObject = Record<string, JsonValue>;

export type VariableType =
  | "string"
  | "number"
  | "boolean"
  | "object"
  | "array"
  | "url"
  | "file"
  | "json"
  | "web-identifier"
  | string;

export interface IdentifierCandidate {
  value: string;
  type?: string;
  confidence?: number;
  primary?: boolean;
  unique?: boolean;
  [key: string]: unknown;
}

export type EnvironmentVariable = Variable;

export type BrowserMode = "headed" | "headless" | "headful";
export type BrowserName = "chrome" | "firefox" | "edge" | "safari" | string;
export type FlowExecutionStatus =
  | "completed"
  | "failed"
  | "error"
  | "stopped"
  | "running"
  | "pending"
  | "skipped";

export type TestFlowData = Flow | PerformanceTest;

// Generic pagination envelope — JSON Schema cannot express the type parameter,
// so this stays hand-written (excluded from the generated body).
export interface PaginatedResponse<T> {
  items: T[];
  page: number;
  limit: number;
  total: number;
  hasMore: boolean;
}

export interface SuiteScheduleTest {
  testId: string;
  flowName?: string | null;
}

export interface StoredEnvironment extends Environment {
  accountId: string;
}

export interface StoredGlobalVariable extends GlobalVariable {
  accountId: string;
}

// Runtime resolution — what the engine fetches before execution.
export interface RuntimeContext {
  environments: Environment[];
  globalVariables: GlobalVariable[];
  selectedEnvironmentId?: string;
}

// Engine authentication handshake.
export interface EngineAuthPayload {
  token: string;
  accountId: string;
  userId: string;
}

export interface AuthenticatedRunCommand extends RunCommand {
  auth?: EngineAuthPayload;
  runtimeContext?: RuntimeContext;
}

/**
 * Click on a web element.
 */
export type ClickConfig = BaseActionConfig & {
  /**
   * CSS selector for element to click
   */
  selector?: string;
  /**
   * Wait time in milliseconds
   */
  waitTime?: number;
  /**
   * Force click even if element not clickable
   */
  forceClick?: boolean;
  /**
   * Scroll element into view before clicking
   */
  scrollIntoView?: boolean;
  /**
   * Wait for element to be present
   */
  waitForElement?: boolean;
  /**
   * Type of click to perform
   */
  clickType?: "left" | "right";
  /**
   * Number of clicks to perform
   */
  clickCount?: number;
  /**
   * Whether to click and hold
   */
  clickAndHold?: boolean;
  /**
   * Duration to hold click in milliseconds
   */
  holdDuration?: number;
};
/**
 * Type text into an input field.
 */
export type InputConfig = BaseActionConfig & {
  /**
   * CSS selector for input element
   */
  selector?: string;
  /**
   * Text to input
   */
  text?: string;
  /**
   * Clear field before typing
   */
  clearFirst?: boolean;
  /**
   * Wait for element to be present
   */
  waitForElement?: boolean;
  /**
   * Scroll element into view
   */
  scrollIntoView?: boolean;
};
/**
 * Navigate to a URL.
 */
export type NavigateConfig = BaseActionConfig & {
  /**
   * URL to navigate to
   */
  url: string;
  /**
   * Wait for page to load
   */
  waitForLoad?: boolean;
  /**
   * Take screenshot after navigation
   */
  takeScreenshot?: boolean;
};
/**
 * Wait for a duration or element state.
 */
export type WaitConfig = WaitConfig1 & {
  /**
   * Whether wait was generated manually or automatically
   */
  generatedBy?: "manual" | "auto";
  /**
   * Reason for automatic wait insertion
   */
  reason?: "navigation" | "tab_switch" | "dom_transition" | "overlay" | "network_idle";
  /**
   * Trigger action ID for auto-generated waits
   */
  triggerActionId?: string;
  /**
   * Observed elapsed wait between trigger and dependent action during recording
   */
  effectiveWaitMs?: number;
};
type WaitConfig1 = BaseActionConfig & {
  /**
   * Type of wait to perform
   */
  waitType?: "duration" | "element" | "interactable";
  /**
   * Duration to wait in milliseconds
   */
  duration?: number;
  /**
   * CSS selector for element to wait for
   */
  selector?: string;
  /**
   * Maximum time to wait in milliseconds
   */
  timeout?: number;
  /**
   * Wait for element to be interactable
   */
  waitForInteractable?: boolean;
  /**
   * Fallback to duration wait if element wait fails
   */
  fallbackToDuration?: boolean;
  /**
   * Duration to wait if fallback triggered
   */
  fallbackDuration?: number;
};
/**
 * Assert element existence or value.
 */
export type AssertionConfig = AssertionConfig1 & {
  /**
   * Image reference for image assertion (base64, data URI, or mediaId:xxx resolved to data URI)
   */
  expectedImageRef?: string;
  /**
   * Minimum similarity score (0-1) for image assertions
   */
  imageSimilarityThreshold?: number;
};
type AssertionConfig1 = BaseActionConfig & {
  /**
   * CSS selector for element
   */
  selector?: string;
  /**
   * Type of assertion
   */
  assertType?: "exists" | "visible" | "text" | "value" | "attribute";
  /**
   * Expected value for assertion
   */
  expectedValue?: string;
  /**
   * Wait for element to be present
   */
  waitForElement?: boolean;
  /**
   * Case sensitive comparison
   */
  caseSensitive?: boolean;
  /**
   * Allow partial text matching
   */
  partialMatch?: boolean;
};
/**
 * Take a screenshot of the page or element.
 */
export type ScreenshotConfig = BaseActionConfig & {
  /**
   * Type of screenshot to capture
   */
  screenshotType?: "viewport" | "fullPage" | "element";
  /**
   * CSS selector for element screenshots
   */
  selector?: string;
  /**
   * Output filename
   */
  filename?: string;
  /**
   * Save screenshot to file system
   */
  saveToFile?: boolean;
  /**
   * Include timestamp in filename
   */
  includeTimestamp?: boolean;
  /**
   * Output format
   */
  format?: "png" | "jpg";
  /**
   * Wait for element to be present
   */
  waitForElement?: boolean;
  /**
   * Scroll element into view
   */
  scrollIntoView?: boolean;
  /**
   * Take full page screenshot
   */
  fullPage?: boolean;
};
/**
 * Fill multiple form fields at once.
 */
export type FormFillConfig = BaseActionConfig & {
  /**
   * Array of form field configurations
   */
  fields?: FormField[];
  /**
   * Wait for all form elements to be present
   */
  waitForElements?: boolean;
  /**
   * Clear existing values before filling
   */
  clearFirst?: boolean;
  /**
   * Automatically submit form after filling
   */
  submitAfterFill?: boolean;
  /**
   * Automatically detect field types
   */
  smartFieldDetection?: boolean;
};
/**
 * Make an HTTP API request. Set responsePath to store only a path of the response (e.g. data.token) in the output variable; leave empty to store the full {status_code, headers, data, url} object. Use validateStatus/expectedStatus and assertions to turn the call into a network/response check.
 */
export type ApiCallConfig = BaseActionConfig & {
  /**
   * HTTP method
   */
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  /**
   * API endpoint URL
   */
  url?: string;
  /**
   * HTTP headers
   */
  headers?: {
    [k: string]: string;
  };
  /**
   * Request body
   */
  body?: string;
  /**
   * Variable to store response
   */
  outputVariable?: string;
  /**
   * Optional path into the response to store in the output variable, e.g. data.token, headers["Content-Type"], data.items[0].id. Applied to the response object {status_code, headers, data, url} (body fields under data.). When empty, the full response object is stored.
   */
  responsePath?: string;
  /**
   * Request timeout in milliseconds
   */
  timeout?: number;
  /**
   * Number of retries
   */
  retryCount?: number;
  /**
   * Parse response as JSON
   */
  parseJson?: boolean;
  /**
   * Validate HTTP status code
   */
  validateStatus?: boolean;
  /**
   * Follow HTTP redirects
   */
  followRedirects?: boolean;
  /**
   * Verify SSL certificates
   */
  verifySSL?: boolean;
  /**
   * Basic auth username
   */
  basicAuthUsername?: string;
  /**
   * Basic auth password
   */
  basicAuthPassword?: string;
  /**
   * Explicit expected HTTP status code(s). When set, the call fails unless the response status is one of these; overrides the default 2xx check that validateStatus performs.
   */
  expectedStatus?: number[];
  /**
   * Response assertions evaluated after the request. All must pass for the action to succeed.
   */
  assertions?: ResponseAssertion[];
};
/**
 * Execute a database query.
 */
export type DatabaseQueryConfig = BaseActionConfig & {
  /**
   * Database connection string
   */
  connectionString?: string;
  /**
   * SQL query to execute
   */
  query?: string;
  /**
   * Variable to store result
   */
  outputVariable?: string;
  /**
   * Log the query being executed
   */
  logQuery?: boolean;
  /**
   * Validate database connection
   */
  validateConnection?: boolean;
  /**
   * Query timeout in milliseconds
   */
  timeout?: number;
};
/**
 * Insert data into a database.
 */
export type DatabaseInsertConfig = BaseActionConfig & {
  /**
   * Database connection string
   */
  connectionString?: string;
  /**
   * Table name to insert into
   */
  table?: string;
  /**
   * Data to insert (column-value pairs)
   */
  data?: {};
  /**
   * Log the insert operation
   */
  logOperation?: boolean;
  /**
   * Validate database connection
   */
  validateConnection?: boolean;
  /**
   * Rollback transaction on error
   */
  rollbackOnError?: boolean;
};
/**
 * Upload a file to an input field.
 */
export type FileUploadConfig = BaseActionConfig & {
  /**
   * CSS selector for file input
   */
  selector?: string;
  /**
   * Path to file to upload
   */
  filePath?: string;
  /**
   * Wait for element to be present
   */
  waitForElement?: boolean;
  /**
   * Scroll element into view
   */
  scrollIntoView?: boolean;
  /**
   * Validate file exists before upload
   */
  validateFile?: boolean;
};
/**
 * Download a file from a link.
 */
export type FileDownloadConfig = BaseActionConfig & {
  /**
   * CSS selector for download link
   */
  selector?: string;
  /**
   * Path to save downloaded file
   */
  downloadPath?: string;
  /**
   * Wait for element to be present
   */
  waitForElement?: boolean;
  /**
   * Validate download completed
   */
  validateDownload?: boolean;
  /**
   * Overwrite existing files
   */
  overwriteExisting?: boolean;
};
/**
 * Execute custom JavaScript code.
 */
export type CustomCodeConfig = BaseActionConfig & {
  /**
   * JavaScript code to execute
   */
  code?: string;
  /**
   * Main function name to invoke after loading the code
   */
  functionName?: string;
  /**
   * Input parameter mappings for the main function
   */
  inputParameters?: AnyObject[];
  /**
   * Variable to store result
   */
  outputVariable?: string;
  /**
   * Log code execution
   */
  logExecution?: boolean;
  /**
   * Catch and handle errors
   */
  catchErrors?: boolean;
  /**
   * Execution timeout in milliseconds
   */
  timeout?: number;
};
export type SubflowConfig = BaseActionConfig & {
  /**
   * ID of flow to call
   */
  flowId?: string;
  /**
   * Name of flow to call
   */
  flowName?: string;
  /**
   * Input parameters for subflow
   */
  inputParameters?: {}[];
  /**
   * Output parameters from subflow
   */
  outputParameters?: {}[];
  /**
   * Variable to store result
   */
  outputVariable?: string;
  /**
   * Wait for flow to complete
   */
  waitForCompletion?: boolean;
  /**
   * Log flow execution
   */
  logExecution?: boolean;
  /**
   * Propagate errors from subflow
   */
  propagateErrors?: boolean;
};
/**
 * Send keyboard input to an element or globally.
 */
export type SendKeysConfig = SendKeysConfig1 & {
  /**
   * Optional key combinations payload used by backend actions
   */
  keyCombinations?: unknown[];
};
type SendKeysConfig1 = BaseActionConfig & {
  /**
   * CSS selector for element to send keys to
   */
  selector?: string;
  /**
   * Keys to send
   */
  keys?: string;
  /**
   * Wait for element to be present
   */
  waitForElement?: boolean;
  /**
   * Scroll element into view before acting
   */
  scrollIntoView?: boolean;
  /**
   * Wait time in milliseconds
   */
  waitTime?: number;
};
/**
 * Scroll the page.
 */
export type ScrollConfig = BaseActionConfig & {
  /**
   * Scroll direction
   */
  direction?: "up" | "down" | "left" | "right";
  /**
   * Legacy scroll distance in pixels; the engine prefers `pixels` and falls back to this
   */
  distance?: number;
  /**
   * Element to scroll (optional, defaults to window)
   */
  selector?: string;
  /**
   * Scroll amount in pixels (canonical; the engine reads this first)
   */
  pixels?: number;
  /**
   * Use smooth scrolling behavior
   */
  smooth?: boolean;
  /**
   * Wait for content to settle after scrolling
   */
  waitAfterScroll?: boolean;
};
/**
 * Assert element visibility.
 */
export type AssertVisibleConfig = BaseActionConfig & {
  /**
   * CSS selector for element to check
   */
  selector?: string;
  /**
   * Timeout in milliseconds
   */
  timeout?: number;
  /**
   * Wait for element to be present
   */
  waitForElement?: boolean;
  /**
   * Scroll element into view before acting
   */
  scrollIntoView?: boolean;
};
/**
 * Clear text from an input field.
 */
export type ClearInputConfig = ClearInputConfig1 & {
  /**
   * Whether to keep focus on element after clearing
   */
  maintainFocus?: boolean;
};
type ClearInputConfig1 = BaseActionConfig & {
  /**
   * CSS selector for input element
   */
  selector?: string;
  /**
   * Wait for element to be present
   */
  waitForElement?: boolean;
  /**
   * Scroll element into view before acting
   */
  scrollIntoView?: boolean;
};
/**
 * Open a new browser tab.
 */
export type OpenNewTabConfig = BaseActionConfig & {
  /**
   * URL to open in new tab
   */
  url?: string;
  /**
   * Wait for page load to complete
   */
  waitForLoad?: boolean;
  /**
   * Switch focus to the newly opened tab
   */
  switchToNewTab?: boolean;
};
/**
 * Switch to another browser tab.
 */
export type SwitchTabConfig = SwitchTabConfig1 & {
  /**
   * URL of tab to switch to (alternative to index)
   */
  tabUrl?: string;
  /**
   * Explicit switch method (auto/index/url/title)
   */
  switchMethod?: string;
};
type SwitchTabConfig1 = BaseActionConfig & {
  /**
   * Tab index to switch to
   */
  tabIndex?: number;
  /**
   * Tab title to switch to (alternative to index)
   */
  tabTitle?: string;
  /**
   * Wait for page load to complete
   */
  waitForLoad?: boolean;
  /**
   * Capture a screenshot after the action
   */
  takeScreenshot?: boolean;
};
/**
 * Navigate forward in browser history.
 */
export type GoForwardConfig = BaseActionConfig & {
  /**
   * Wait for page load to complete
   */
  waitForLoad?: boolean;
  /**
   * Capture a screenshot after the action
   */
  takeScreenshot?: boolean;
};
/**
 * Navigate back in browser history.
 */
export type GoBackConfig = BaseActionConfig & {
  /**
   * Wait for page load to complete
   */
  waitForLoad?: boolean;
  /**
   * Capture a screenshot after the action
   */
  takeScreenshot?: boolean;
};
/**
 * Refresh the current page.
 */
export type RefreshConfig = BaseActionConfig & {
  /**
   * Wait for page load to complete
   */
  waitForLoad?: boolean;
  /**
   * Capture a screenshot after the action
   */
  takeScreenshot?: boolean;
  /**
   * Perform a hard refresh bypassing the cache
   */
  hardRefresh?: boolean;
  /**
   * Preserve form data across the refresh
   */
  preserveFormData?: boolean;
};
/**
 * Get page title, URL, and source.
 */
export type GetPageInfoConfig = GetPageInfoConfig1 & {
  /**
   * Dot-notation path to extract a specific key from the page info object (e.g. 'title', 'url'). If omitted, the full page info object is stored.
   */
  outputKey?: string;
};
type GetPageInfoConfig1 = BaseActionConfig & {
  /**
   * Variable to store page information
   */
  outputVariable?: string;
  /**
   * Include page title in the output
   */
  getTitle?: boolean;
  /**
   * Include page URL in the output
   */
  getUrl?: boolean;
  /**
   * Include page source in the output
   */
  getSource?: boolean;
  /**
   * Wait for page load to complete
   */
  waitForLoad?: boolean;
  /**
   * Capture a screenshot after the action
   */
  takeScreenshot?: boolean;
  /**
   * Output format for the page info
   */
  formatOutput?: string;
};
export type JunctionConfig = BaseActionConfig & {
  /**
   * Condition to evaluate
   */
  condition?: string;
  /**
   * Path to take if condition is true
   */
  truePath?: string;
  /**
   * Path to take if condition is false
   */
  falsePath?: string;
};
/**
 * Branch based on a condition.
 */
export type ConditionalConfig = ConditionalConfig1 & {
  /**
   * Comparison operator used by editor helpers
   */
  operator?: string;
};
type ConditionalConfig1 = BaseActionConfig & {
  /**
   * JavaScript condition to evaluate
   */
  condition?: string;
  /**
   * Actions to execute if condition is true
   */
  thenActions?: AnyObject[];
  /**
   * Actions to execute if condition is false
   */
  elseActions?: AnyObject[];
  /**
   * Value to compare against
   */
  value?: string;
  /**
   * Action to take when the condition is true
   */
  trueAction?: string;
  /**
   * Action to take when the condition is false
   */
  falseAction?: string;
};
/**
 * Repeat actions multiple times.
 */
export type LoopConfig = BaseActionConfig & {
  /**
   * Type of loop
   */
  loopType?: "count" | "condition" | "foreach";
  /**
   * Number of iterations (for count loops)
   */
  count?: number;
  /**
   * Condition to continue loop (for condition loops)
   */
  condition?: string;
  /**
   * Variable containing array to iterate (for foreach loops)
   */
  arrayVariable?: string;
  /**
   * Variable name for current item (for foreach loops)
   */
  itemVariable?: string;
  /**
   * Node id of the first action in the repeated range (UI provenance for the actions snapshot)
   */
  startAction?: string;
  /**
   * Node id of the last action in the repeated range (UI provenance for the actions snapshot)
   */
  endAction?: string;
  /**
   * Snapshot of the actions executed in each iteration (populated from the start/end range)
   */
  actions?: AnyObject[];
  /**
   * Maximum iterations to prevent infinite loops
   */
  maxIterations?: number;
};
/**
 * Drag one element to another element or position.
 */
export type DragAndDropConfig = BaseActionConfig & {
  /**
   * CSS selector for element to drag
   */
  sourceSelector?: string;
  /**
   * CSS selector for drop target (required in element mode)
   */
  targetSelector?: string;
  /**
   * Drag mode: resolve by target element or by source-relative pointer offset
   */
  dropMode?: "element" | "offset";
  /**
   * Horizontal drag offset in pixels for offset mode
   */
  targetOffsetX?: number;
  /**
   * Vertical drag offset in pixels for offset mode
   */
  targetOffsetY?: number;
  /**
   * Explicit target value for range/slider controls
   */
  targetValue?: string | number;
  /**
   * Ordered fallback identifiers for drag source
   */
  sourceIdentifiers?: (
    | string
    | {
        value: string;
        type?: string;
        confidence?: number;
      }
  )[];
  /**
   * Ordered fallback selectors for drag source
   */
  sourceSelectors?: string[];
  /**
   * Ordered fallback identifiers for drag target
   */
  targetIdentifiers?: (
    | string
    | {
        value: string;
        type?: string;
        confidence?: number;
      }
  )[];
  /**
   * Ordered fallback selectors for drag target
   */
  targetSelectors?: string[];
  sourceSemanticTarget?: SemanticTarget;
  targetSemanticTarget?: SemanticTarget;
  /**
   * Wait for elements to be present
   */
  waitForElement?: boolean;
  /**
   * Wait time in milliseconds
   */
  waitTime?: number;
  /**
   * Visual reference image for the drag source
   */
  sourceImage?: string;
  /**
   * Visual reference image for the drop target
   */
  targetImage?: string;
  /**
   * Scroll element into view before acting
   */
  scrollIntoView?: boolean;
  /**
   * Delay before starting the drag, in milliseconds
   */
  dragDelay?: number;
  /**
   * Delay before dropping, in milliseconds
   */
  dropDelay?: number;
  /**
   * Validate the drop succeeded
   */
  validateDrop?: boolean;
  /**
   * Force the drag even if the element is not draggable
   */
  forceDrag?: boolean;
};
/**
 * Call another flow and map inputs/outputs.
 */
export type CallToFlowConfig = BaseActionConfig & {
  /**
   * ID of flow to call
   */
  flowId?: string;
  /**
   * Input parameters to pass to subflow
   */
  inputParameters?: unknown[];
  /**
   * Variable to store result
   */
  outputVariable?: string;
  /**
   * Wait for subflow to complete
   */
  waitForCompletion?: boolean;
  /**
   * Execute subflow asynchronously
   */
  async_?: boolean;
  /**
   * Name of the subflow to call
   */
  flowName?: string;
  /**
   * Output parameters returned from the subflow
   */
  outputParameters?: unknown[];
  /**
   * Log execution details
   */
  logExecution?: boolean;
  /**
   * Propagate subflow errors to the parent flow
   */
  propagateErrors?: boolean;
};
/**
 * Switch to a frame or iframe.
 */
export type SwitchToFrameConfig = SwitchToFrameConfig1 & {
  /**
   * Switch strategy (selector/index/name/id)
   */
  switchMethod?: string;
  /**
   * Frame name (alternative to selector/index)
   */
  frameName?: string;
  /**
   * Frame id (alternative to selector/index)
   */
  frameId?: string;
  /**
   * Wait for frame to become available
   */
  waitForFrame?: boolean;
};
type SwitchToFrameConfig1 = BaseActionConfig & {
  /**
   * CSS selector or frame name/ID
   */
  frameSelector?: string;
  /**
   * Ordered fallback identifiers for the frame element
   */
  frameIdentifiers?: (
    | string
    | {
        value: string;
        type?: string;
        confidence?: number;
      }
  )[];
  /**
   * Ordered fallback selectors for the frame element
   */
  frameSelectors?: string[];
  frameSemanticTarget?: SemanticTarget;
  /**
   * Frame index (alternative to selector)
   */
  frameIndex?: number;
  /**
   * Timeout in milliseconds
   */
  timeout?: number;
  /**
   * Validate the frame switch succeeded
   */
  validateFrame?: boolean;
  /**
   * Scroll element into view before acting
   */
  scrollIntoView?: boolean;
  /**
   * Capture a screenshot after the action
   */
  takeScreenshot?: boolean;
  /**
   * Log frame-switch details
   */
  logFrameInfo?: boolean;
  /**
   * Fall back to frame index when the selector fails
   */
  fallbackToIndex?: boolean;
  /**
   * Frame index to use as a fallback
   */
  fallbackIndex?: number;
};
/**
 * Exit a frame back to parent or main document.
 */
export type ExitFrameConfig = ExitFrameConfig1 & {
  /**
   * Exit strategy (parent/main/levels)
   */
  exitMethod?: string;
  /**
   * Number of parent levels when exitMethod is levels
   */
  levels?: number;
  /**
   * Force returning to main content after exit
   */
  returnToMain?: boolean;
};
type ExitFrameConfig1 = BaseActionConfig & {
  /**
   * Number of parent levels to exit when exitMethod is levels
   */
  exitLevels?: number;
  /**
   * Wait for the frame exit to complete
   */
  waitForExit?: boolean;
  /**
   * Timeout in milliseconds
   */
  timeout?: number;
  /**
   * Validate the frame exit succeeded
   */
  validateExit?: boolean;
  /**
   * Capture a screenshot after the action
   */
  takeScreenshot?: boolean;
  /**
   * Log frame-exit details
   */
  logExitInfo?: boolean;
  /**
   * Preserve execution context after exiting the frame
   */
  preserveContext?: boolean;
};
/**
 * Set browser viewport and device emulation.
 */
export type SetViewportConfig = BaseActionConfig & {
  /**
   * Type of viewport configuration
   */
  viewportType?: "preset" | "device" | "responsive" | "custom";
  /**
   * Viewport width in pixels
   */
  width?: number;
  /**
   * Viewport height in pixels
   */
  height?: number;
  /**
   * Preset screen size name
   */
  screenSizePreset?: string;
  /**
   * Device name for emulation
   */
  deviceName?: string;
  /**
   * Device scale factor
   */
  deviceScaleFactor?: number;
  /**
   * Emulate mobile device
   */
  isMobile?: boolean;
  /**
   * Enable touch events
   */
  hasTouch?: boolean;
  /**
   * Use landscape orientation
   */
  isLandscape?: boolean;
  /**
   * Custom user agent string
   */
  userAgent?: string;
  /**
   * Wait after viewport resize
   */
  waitAfterResize?: boolean;
  /**
   * Take screenshot after resize
   */
  takeScreenshot?: boolean;
  /**
   * Preserve cookies across viewport changes
   */
  preserveCookies?: boolean;
  /**
   * Preserve local storage across viewport changes
   */
  preserveLocalStorage?: boolean;
  /**
   * Preserve session storage across viewport changes
   */
  preserveSessionStorage?: boolean;
};
/**
 * Extract element properties or attributes.
 */
export type GetElementPropertiesConfig = BaseActionConfig & {
  /**
   * CSS selector for element
   */
  selector?: string;
  /**
   * Properties to retrieve
   */
  properties?: (
    | "text"
    | "value"
    | "class"
    | "id"
    | "tagName"
    | "innerHTML"
    | "outerHTML"
    | "attributes"
    | "rect"
    | "visible"
    | "enabled"
    | "selected"
  )[];
  /**
   * Variable to store properties
   */
  outputVariable?: string;
  /**
   * Wait for element to be present
   */
  waitForElement?: boolean;
  /**
   * Kind of property to extract
   */
  propertyType?: string;
  /**
   * Attribute name to read when propertyType is attribute
   */
  attributeName?: string;
  /**
   * Timeout in milliseconds
   */
  timeout?: number;
  /**
   * Scroll element into view before acting
   */
  scrollIntoView?: boolean;
  /**
   * Trim whitespace from the extracted value
   */
  trimWhitespace?: boolean;
  /**
   * Value returned when extraction fails
   */
  fallbackValue?: string;
  /**
   * Validate the extraction succeeded
   */
  validateExtraction?: boolean;
  /**
   * Log extraction details
   */
  logExtraction?: boolean;
};
/**
 * Handle alerts, confirms, prompts, or modals.
 */
export type HandlePopupConfig = BaseActionConfig & {
  /**
   * Action to perform on popup
   */
  action?: "accept" | "dismiss" | "text";
  /**
   * Text to enter in prompt popup
   */
  text?: string;
  /**
   * Wait for popup to appear
   */
  waitForPopup?: boolean;
  /**
   * Timeout in milliseconds
   */
  timeout?: number;
  /**
   * Expected popup type
   */
  popupType?: string;
  /**
   * How to handle the popup
   */
  popupAction?: string;
  /**
   * Text to enter when the popup requires input
   */
  inputText?: string;
  /**
   * CSS selector for the target element
   */
  selector?: string;
  /**
   * Capture the popup text into the output
   */
  capturePopupText?: boolean;
  /**
   * Variable name to store the action output
   */
  outputVariable?: string;
};
export type DesktopVisualBaseConfig = BaseActionConfig & {
  /**
   * Match threshold used for image detection
   */
  confidence?: number;
  /**
   * Maximum wait time in milliseconds
   */
  timeout?: number;
  /**
   * Polling interval while waiting for image matches
   */
  pollIntervalMs?: number;
  /**
   * Use grayscale matching for better performance
   */
  grayscale?: boolean;
  /**
   * Limit search to a specific screen region
   */
  useRegion?: boolean;
  /**
   * Region origin X coordinate
   */
  regionX?: number;
  /**
   * Region origin Y coordinate
   */
  regionY?: number;
  /**
   * Region width in pixels
   */
  regionWidth?: number;
  /**
   * Region height in pixels
   */
  regionHeight?: number;
};
/**
 * Wait until a desktop image appears on screen.
 */
export type DesktopWaitForImageConfig = DesktopVisualBaseConfig & {
  /**
   * Base64 encoded reference image to locate on the desktop
   */
  image?: string;
  /**
   * Require the image to remain visible for a stable period
   */
  requireStability?: boolean;
  /**
   * How long the match should remain stable before succeeding
   */
  stableDurationMs?: number;
  /**
   * Variable to store desktop match metadata
   */
  outputVariable?: string;
  /**
   * Fail action when image does not appear in time
   */
  failOnTimeout?: boolean;
};
/**
 * Find desktop image coordinates and store match output.
 */
export type DesktopFindImageConfig = DesktopVisualBaseConfig & {
  /**
   * Base64 encoded reference image to locate on the desktop
   */
  image?: string;
  /**
   * Wait for image appearance before returning
   */
  waitForImage?: boolean;
  /**
   * Variable to store found image match metadata
   */
  outputVariable?: string;
  /**
   * Fail action when image cannot be located
   */
  failIfNotFound?: boolean;
};
/**
 * Find and click a desktop image target.
 */
export type DesktopClickImageConfig = DesktopVisualBaseConfig & {
  /**
   * Base64 encoded reference image to click
   */
  image?: string;
  /**
   * Mouse button to use for clicking
   */
  button?: "left" | "right" | "middle";
  /**
   * Number of mouse clicks
   */
  clicks?: number;
  /**
   * Delay between multiple clicks in milliseconds
   */
  intervalMs?: number;
  /**
   * Horizontal click offset from detected center
   */
  offsetX?: number;
  /**
   * Vertical click offset from detected center
   */
  offsetY?: number;
  /**
   * Wait until image appears before clicking
   */
  waitForImage?: boolean;
  /**
   * Mouse move duration before click
   */
  moveDurationMs?: number;
  /**
   * Delay after click completes
   */
  postActionWaitMs?: number;
};
/**
 * Click explicit desktop coordinates.
 */
export type DesktopClickPointConfig = BaseActionConfig & {
  /**
   * Target X coordinate
   */
  x?: number;
  /**
   * Target Y coordinate
   */
  y?: number;
  /**
   * Mouse button to use for clicking
   */
  button?: "left" | "right" | "middle";
  /**
   * Number of mouse clicks
   */
  clicks?: number;
  /**
   * Delay between multiple clicks in milliseconds
   */
  intervalMs?: number;
  /**
   * Mouse move duration before click
   */
  moveDurationMs?: number;
  /**
   * Delay after click completes
   */
  postActionWaitMs?: number;
  /**
   * Variable to store click coordinate metadata
   */
  outputVariable?: string;
};
/**
 * Type text in desktop context with optional image focus.
 */
export type DesktopTypeTextConfig = DesktopVisualBaseConfig & {
  /**
   * Text to type on the desktop
   */
  text?: string;
  /**
   * Delay between key presses in milliseconds
   */
  intervalMs?: number;
  /**
   * Click target image before typing to focus input
   */
  clickImageFirst?: boolean;
  /**
   * Optional target image used when clickImageFirst is enabled
   */
  image?: string;
  /**
   * Wait for image before attempting focus click
   */
  waitForImage?: boolean;
  /**
   * Select-all and clear before typing
   */
  clearBeforeType?: boolean;
  /**
   * Press Enter after typing
   */
  submitWithEnter?: boolean;
  /**
   * Delay after typing completes
   */
  postActionWaitMs?: number;
};
/**
 * Move desktop cursor to absolute or relative coordinates.
 */
export type DesktopMoveMouseConfig = BaseActionConfig & {
  /**
   * Target X coordinate
   */
  x?: number;
  /**
   * Target Y coordinate
   */
  y?: number;
  /**
   * Treat x and y as offsets from current pointer location
   */
  relative?: boolean;
  /**
   * Mouse move duration
   */
  moveDurationMs?: number;
  /**
   * Delay after pointer move completes
   */
  postActionWaitMs?: number;
  /**
   * Variable to store pointer position metadata
   */
  outputVariable?: string;
};
/**
 * Execute a desktop key combination.
 */
export type DesktopHotkeyConfig = BaseActionConfig & {
  /**
   * Key combination (e.g. ctrl+shift+p)
   */
  keyCombination?: string;
  /**
   * How many times to trigger the hotkey
   */
  presses?: number;
  /**
   * Delay between repeated hotkeys in milliseconds
   */
  intervalMs?: number;
  /**
   * Delay after hotkey execution
   */
  postActionWaitMs?: number;
};
/**
 * Run a local shell command.
 */
export type DesktopRunCommandConfig = BaseActionConfig & {
  /**
   * Shell command to execute
   */
  command?: string;
  /**
   * Run command through shell
   */
  shell?: boolean;
  /**
   * Optional working directory for command execution
   */
  workingDirectory?: string;
  /**
   * Command timeout in milliseconds
   */
  timeout?: number;
  /**
   * Capture stdout and stderr
   */
  captureOutput?: boolean;
  /**
   * Fail action when command exits with non-zero code
   */
  failOnNonZero?: boolean;
  /**
   * Variable to store command result details
   */
  outputVariable?: string;
};
/**
 * Capture a desktop screenshot.
 */
export type DesktopCaptureScreenConfig = BaseActionConfig & {
  /**
   * Output filename when saving screenshot
   */
  filename?: string;
  /**
   * Persist screenshot to screenshots folder
   */
  saveToFile?: boolean;
  /**
   * Append timestamp to output filename
   */
  includeTimestamp?: boolean;
  /**
   * Screenshot image format
   */
  format?: "png" | "jpg";
  /**
   * Capture a specific region of the desktop
   */
  useRegion?: boolean;
  regionX?: number;
  regionY?: number;
  regionWidth?: number;
  regionHeight?: number;
  /**
   * Variable to store screenshot metadata and base64 content
   */
  outputVariable?: string;
};
/**
 * Drag from desktop image/coordinates to image/coordinates.
 */
export type DesktopDragAndDropConfig = BaseActionConfig & {
  button?: string;
  confidence?: number;
  dragDurationMs?: number;
  dropImage?: string;
  dropX?: number;
  dropY?: number;
  failIfTargetNotFound?: boolean;
  grayscale?: boolean;
  holdAtDropMs?: number;
  holdBeforeDragMs?: number;
  moveDurationMs?: number;
  outputVariable?: string;
  pollIntervalMs?: number;
  postActionWaitMs?: number;
  regionHeight?: number;
  regionWidth?: number;
  regionX?: number;
  regionY?: number;
  startImage?: string;
  startX?: number;
  startY?: number;
  timeout?: number;
  useRegion?: boolean;
  waitForImage?: boolean;
};
/**
 * Focus a desktop window by matching title text.
 */
export type DesktopFocusWindowConfig = BaseActionConfig & {
  caseSensitive?: boolean;
  failIfNotFound?: boolean;
  matchMode?: string;
  outputVariable?: string;
  pollIntervalMs?: number;
  timeout?: number;
  title?: string;
};
/**
 * List running processes with detailed metadata.
 */
export type DesktopListProcessesConfig = BaseActionConfig & {
  includeCommandLine?: boolean;
  outputVariable?: string;
};
/**
 * Open a desktop application or executable, with optional fuzzy matching.
 */
export type DesktopOpenApplicationConfig = BaseActionConfig & {
  application?: string;
  applicationMatchMode?: string;
  arguments?: string[];
  captureOutput?: boolean;
  failOnMultipleMatches?: boolean;
  failOnNonZero?: boolean;
  outputVariable?: string;
  timeout?: number;
  useShell?: boolean;
  waitForExit?: boolean;
  workingDirectory?: string;
};
/**
 * Open a file or folder location in file manager.
 */
export type DesktopOpenPathConfig = BaseActionConfig & {
  mustExist?: boolean;
  outputVariable?: string;
  path?: string;
  revealInFileManager?: boolean;
};
/**
 * Execute an OS-level script with selected interpreter.
 */
export type DesktopRunScriptConfig = BaseActionConfig & {
  arguments?: string[];
  captureOutput?: boolean;
  environment?: AnyObject;
  failOnNonZero?: boolean;
  interpreter?: string;
  outputVariable?: string;
  script?: string;
  scriptType?: string;
  timeout?: number;
  workingDirectory?: string;
};
/**
 * Switch to next/previous virtual desktop (workspace).
 */
export type DesktopSwitchDesktopConfig = BaseActionConfig & {
  direction?: string;
  intervalMs?: number;
  outputVariable?: string;
  postActionWaitMs?: number;
  presses?: number;
};
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
/**
 * AI provider selector
 */
export type AIProviderType = "auto" | "ollama" | "openai" | "anthropic" | "openai-compatible" | "disabled";
/**
 * Kind of generated dataset item
 */
export type DatasetType = "test-scenario" | "xpath-selector";
/**
 * How items are generated (anything else falls back to hybrid)
 */
export type DataLabGenerationMode = "ai" | "synthetic" | "hybrid";
/**
 * Debug session states following the state machine specification
 */
export type DebugState = "ready" | "running" | "paused" | "stepping" | "completed" | "error" | "stopped";
/**
 * Reasons for debug execution pause
 */
export type PauseReason = "breakpoint" | "manual" | "error" | "step";
/**
 * Severity level of the warning
 */
export type WarningSeverity = "minor" | "medium" | "critical";
/**
 * Account role
 */
export type UserRole = "owner" | "admin" | "member" | "viewer";
/**
 * Backing store for a media item
 */
export type MediaStorageDriver = "local" | "s3" | "r2";
/**
 * Kind of execution report
 */
export type ReportType = "flow" | "performance" | "parallel" | "suite";
/**
 * Execution report status (full 6-value set; note test.recentRuns persists only passed/failed/pending/running)
 */
export type ReportStatus = "passed" | "failed" | "error" | "running" | "pending" | "cancelled";
/**
 * Stored test kind
 */
export type FlowKind = "flow" | "test" | "performance";
/**
 * Last execution result of a stored test
 */
export type FlowLastResult = "passed" | "failed" | "pending" | "running";
/**
 * Lifecycle status of a suite execution
 */
export type SuiteExecutionStatus = "pending" | "queued" | "running" | "completed" | "failed" | "cancelled" | "not_run";
/**
 * Status of a single test within a suite execution
 */
export type SuiteExecutionTestStatus = "pending" | "running" | "passed" | "failed" | "cancelled" | "not_run";
/**
 * Status of a scheduled suite run
 */
export type SuiteScheduleStatus = "scheduled" | "queued" | "running" | "completed" | "failed" | "cancelled" | "not_run";
/**
 * What triggered a suite execution
 */
export type SuiteTriggerType = "manual" | "scheduled";
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
  recording?: AnyObject;
};
export type RecordCommand = WebSocketMessage & {
  command: "record";
  flow_id?: string;
  url?: string;
  config?: AnyObject;
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
  config: AnyObject;
  /**
   * Authentication configuration for load test
   */
  auth_config?: AnyObject;
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
  data?: AnyObject;
};
export type RecordingStatusResponse = WebSocketResponse & {
  command: "get_recording_status";
  session_info?: AnyObject;
};
export type ListRecordingsResponse = WebSocketResponse & {
  command: "list_recordings";
  recordings?: AnyObject[];
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
  wait_action?: AnyObject | null;
  message?: string;
  error?: string;
};
export type AuthenticateResponse = WebSocketResponse & {
  command: "authenticate";
  success: boolean;
  account_id?: string;
  message?: string;
  code?: "ENGINE_TOKEN_MISSING" | "ENGINE_TOKEN_INVALID" | "ENGINE_CONNECTION_REFUSED";
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

export interface BaseActionConfig {
  /**
   * Base64 encoded reference image
   */
  image?: string;
  /**
   * Ordered fallback identifiers to locate the target element
   */
  identifiers?: (
    | string
    | {
        value: string;
        type?: string;
        confidence?: number;
        primary?: boolean;
        unique?: boolean;
      }
  )[];
  /**
   * Ordered fallback selectors to locate the target element
   */
  selectors?: string[];
  semanticTarget?: SemanticTarget;
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
export interface FormField {
  /**
   * CSS selector to target form field
   */
  selector: string;
  /**
   * Value to fill
   */
  value: JsonValue;
  /**
   * Optional screenshot path
   */
  image?: string;
  /**
   * Ordered fallback identifiers for this field
   */
  identifiers?: (
    | string
    | {
        value: string;
        type?: string;
        confidence?: number;
      }
  )[];
  /**
   * Ordered fallback selectors for this field
   */
  selectors?: string[];
  semanticTarget?: SemanticTarget;
  /**
   * Human-readable field name
   */
  name?: string;
  /**
   * Type of form field
   */
  type?:
    | "text"
    | "password"
    | "email"
    | "number"
    | "tel"
    | "textarea"
    | "date"
    | "time"
    | "datetime-local"
    | "checkbox"
    | "radio"
    | "select"
    | "file";
  /**
   * Options for select/radio fields
   */
  options?: FormFieldOption[];
  /**
   * Whether checkbox is checked
   */
  checked?: boolean;
  /**
   * Whether select allows multiple selections
   */
  multiple?: boolean;
}
export interface FormFieldOption {
  /**
   * Option value
   */
  value: string;
  /**
   * Option label
   */
  label: string;
}
/**
 * A single assertion applied to an HTTP response.
 */
export interface ResponseAssertion {
  /**
   * What to assert on: HTTP status, a response header, a JSONPath into the parsed body, the raw body text, or the total response time in ms.
   */
  target: "status" | "header" | "jsonPath" | "body" | "responseTime";
  /**
   * For target=jsonPath, the path into the response body (e.g. data.items[0].id). For target=header, the header name (case-insensitive).
   */
  path?: string;
  /**
   * Comparison operator. exists/notExists ignore value; matches treats value as a regular expression; in expects value to be a list.
   */
  operator?:
    | "equals"
    | "notEquals"
    | "contains"
    | "notContains"
    | "exists"
    | "notExists"
    | "gt"
    | "gte"
    | "lt"
    | "lte"
    | "matches"
    | "in";
  /**
   * Comparison value. Its type depends on the operator and target (string, number, or list).
   */
  value?: JsonValue;
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
  raw?: AnyObject | null;
}
/**
 * A high-level generated flow step
 */
export interface FlowStep {
  name: string;
  action: string;
  description?: string;
  parameters?: AnyObject;
  [k: string]: unknown;
}
/**
 * POST /ai/generate-flow request
 */
export interface GenerateFlowRequest {
  description: string;
  url?: string | null;
  currentTest?: AnyObject | null;
  provider?: AIProviderConfig;
  metadata?: AIRequestMetadata;
}
/**
 * POST /ai/generate-flow response
 */
export interface GenerateFlowResponse {
  nodes: AnyObject[];
  edges: AnyObject[];
  steps: FlowStep[];
  variables?: AnyObject[];
  testData?: AnyObject;
  metadata: AIResponseMetadata;
  message: string;
}
/**
 * One tool operation proposed/performed by the assistant
 */
export interface AssistantOperation {
  tool: string;
  payload?: AnyObject;
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
  currentTest?: AnyObject | null;
  assistantPermissions?: AnyObject | null;
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
  semanticTarget?: AnyObject | null;
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
  failedStep?: AnyObject | null;
  dom?: string | null;
  screenshot?: string | null;
  consoleLogs?: string[];
  networkLogs?: AnyObject[];
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
  recordedActions?: AnyObject[];
  provider?: AIProviderConfig;
  metadata?: AIRequestMetadata;
}
/**
 * POST /ai/optimize-recording response
 */
export interface OptimizeRecordingResponse {
  flow: AnyObject;
  optimizedActions?: AnyObject[];
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
  config?: AnyObject;
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
/**
 * A participant in a collab room
 */
export interface CollabUser {
  id: string;
  name: string;
  /**
   * Hex color, e.g. #3b82f6
   */
  color: string;
  /**
   * Currently focused node, or null
   */
  nodeId: string | null;
}
/**
 * A single collaborative edit operation. Discriminated by `type`; payload fields (node/edge/variable/patch) are opaque and relayed unvalidated.
 */
export interface CollabOp {
  type:
    | "add_node"
    | "update_node"
    | "delete_node"
    | "add_edge"
    | "delete_edge"
    | "add_variable"
    | "update_variable"
    | "delete_variable"
    | "add_parameter"
    | "update_parameter"
    | "delete_parameter";
  [k: string]: unknown;
}
/**
 * client->server: first message; authenticates the socket (5s timeout)
 */
export interface CollabAuth {
  type: "auth";
  /**
   * JWT access token
   */
  token: string;
}
/**
 * client->server: cursor selection and/or pointer position
 */
export interface CollabCursorClient {
  type: "cursor";
  nodeId?: string | null;
  x?: number;
  y?: number;
  selectedNodes?: string[];
}
/**
 * client->server: a batch of edit operations
 */
export interface CollabChangeClient {
  type: "change";
  ops: CollabOp[];
}
/**
 * client->server: hide this user's cursor
 */
export interface CollabCursorHide {
  type: "cursor_hide";
}
/**
 * client->server: room leader sends current state to a newly joined peer
 */
export interface CollabSnapshotClient {
  type: "snapshot";
  /**
   * Target userId
   */
  to: string;
  /**
   * Opaque snapshot of nodes/edges/variables/parameters
   */
  state: AnyObject;
}
/**
 * client->server: user is editing a node (nodeId null on blur)
 */
export interface CollabTypingClient {
  type: "typing";
  nodeId?: string | null;
}
/**
 * client->server: keepalive (every 25s)
 */
export interface CollabPing {
  type: "ping";
}
/**
 * server->client: full roster sent on join
 */
export interface CollabPresence {
  type: "presence";
  users: CollabUser[];
}
/**
 * server->client: broadcast when a peer joins
 */
export interface CollabUserJoined {
  type: "user_joined";
  /**
   * The joiner (no nodeId on this object)
   */
  user: {
    id: string;
    name: string;
    color: string;
  };
  users: CollabUser[];
}
/**
 * server->client: broadcast when a peer leaves
 */
export interface CollabUserLeft {
  type: "user_left";
  userId: string;
  userName: string;
  users: CollabUser[];
}
/**
 * server->client: relayed cursor with sender identity
 */
export interface CollabCursorServer {
  type: "cursor";
  userId: string;
  userName: string;
  userColor: string;
  nodeId: string | null;
  x: number | null;
  y: number | null;
  selectedNodes: string[];
}
/**
 * server->client: relayed change with sender and room version
 */
export interface CollabChangeServer {
  type: "change";
  ops: CollabOp[];
  userId: string;
  /**
   * Monotonic room version
   */
  version: number;
}
/**
 * server->client: snapshot delivered to the target peer
 */
export interface CollabSnapshotServer {
  type: "snapshot";
  state: AnyObject;
  version: number;
}
/**
 * server->client: relayed typing indicator with sender identity
 */
export interface CollabTypingServer {
  type: "typing";
  userId: string;
  userName: string;
  userColor: string;
  nodeId: string | null;
}
/**
 * server->client: reply to ping
 */
export interface CollabPong {
  type: "pong";
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
  prompt: AnyObject;
  output: AnyObject;
  metadata: AnyObject;
  fileName: string;
  relativePath: string;
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
 * GET /data-lab/status response
 */
export interface DataLabStatusResponse {
  outputDir: string;
  tests: DataLabKindStatus;
  xpath: DataLabKindStatus;
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
  config: AnyObject;
  rationale: string;
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
/**
 * An environment configuration with its variables. Unifies the standalone-entity and embedded-in-flow forms: only id+name are required so embedded partial environments validate; the server always sets the remaining fields on stored environments.
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
  variables: Variable[];
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
  type: VariableType;
  value: JsonValue | undefined;
  /**
   * Description of the variable's purpose
   */
  description?: string;
  /**
   * Whether this is an output variable (flow parameters)
   */
  isOutput?: boolean;
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
  type: VariableType;
  value: JsonValue | undefined;
  /**
   * Description of the variable's purpose
   */
  description?: string;
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
  config: AnyObject;
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
  data?: AnyObject;
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
export interface SemanticMatchResult {
  matched?: boolean;
  score?: number;
  threshold?: number;
  reason?: string;
  matchedHints?: string[];
  missedHints?: string[];
  observed?: SemanticMatchObserved;
}
export interface HealedSelectorSuggestion {
  selector: string;
  source?: string;
  confidence?: number;
  selector_type?: string;
  selector_category?: string;
  selector_strategy?: string;
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
    [k: string]: AnyObject[];
  };
  /**
   * Parameters used during execution (input/output)
   */
  parameters: {
    input?: AnyObject[];
    output?: AnyObject[];
    /**
     * Parameters captured before execution
     */
    parameterBefore?: AnyObject[];
    /**
     * Variables captured before execution
     */
    variableBefore?: AnyObject[];
  };
  /**
   * Final output
   */
  output: AnyObject;
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
  environment?: AnyObject;
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
export interface ActionData {
  /**
   * Human-readable label
   */
  label: string;
  /**
   * Action type identifier
   */
  type: string;
  config: AnyObject;
  /**
   * Screenshot or icon associated with the action
   */
  image?: string;
  /**
   * Last known execution status of the action
   */
  status?: string;
  /**
   * Whether the node is expanded in the canvas UI
   */
  expanded?: boolean;
  /**
   * Human-readable description of the action (carried on generated/AI nodes)
   */
  description?: string;
  [k: string]: JsonValue | undefined;
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
  recording?: AnyObject;
  /**
   * Additional test metadata
   */
  metadata?: AnyObject;
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
 * Canvas zoom and pan state
 */
/**
 * Flow input and output variables
 */
/**
 * Flow parameters for configuration
 */
/**
 * An environment configuration with its variables. Unifies the standalone-entity and embedded-in-flow forms: only id+name are required so embedded partial environments validate; the server always sets the remaining fields on stored environments.
 */
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
  report: AnyObject;
  /**
   * Error message if failed
   */
  error?: string;
  /**
   * Additional test metadata
   */
  metadata?: AnyObject;
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
  data?: {environment?: Environment; globalVariables?: GlobalVariable[]; [key: string]: unknown};
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
  browser_mode?: BrowserMode;
  browser?: BrowserName;
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
 * Complete flow definition for automation workflows
 */
export interface RecordedRequest {
  /**
   * Unique request identifier
   */
  id: string;
  /**
   * Request URL
   */
  url: string;
  /**
   * HTTP method
   */
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "HEAD" | "OPTIONS";
  /**
   * Request headers
   */
  headers: {
    [k: string]: string;
  };
  /**
   * Request body
   */
  body?: string;
  /**
   * Request timestamp in milliseconds
   */
  timestamp: number;
  response?: RecordedResponse;
  /**
   * Type of resource requested
   */
  resourceType: "document" | "stylesheet" | "script" | "image" | "fetch" | "xhr" | "other";
  /**
   * What triggered this request
   */
  initiator?: string;
}
/**
 * Response data
 */
export interface RecordedResponse {
  /**
   * HTTP status code
   */
  status: number;
  /**
   * HTTP status text
   */
  statusText: string;
  /**
   * Response headers
   */
  headers: {
    [k: string]: string;
  };
  /**
   * Response body
   */
  body?: string;
  /**
   * Response size in bytes
   */
  size: number;
  timing: ResponseTiming;
}
/**
 * Response timing breakdown
 */
export interface ResponseTiming {
  /**
   * DNS lookup time in milliseconds
   */
  dns: number;
  /**
   * TCP connection time in milliseconds
   */
  tcp: number;
  /**
   * SSL/TLS handshake time in milliseconds
   */
  ssl: number;
  /**
   * Time to first byte in milliseconds
   */
  ttfb: number;
  /**
   * Download time in milliseconds
   */
  download: number;
  /**
   * Total request time in milliseconds
   */
  total: number;
}
export interface PerformanceTestMetadata {
  /**
   * Unique test identifier
   */
  id: string;
  /**
   * Test name
   */
  name: string;
  /**
   * Test description
   */
  description: string;
  /**
   * Test tags for categorization
   */
  tags: string[];
  /**
   * Parent folder ID
   */
  parentID?: string | null;
  /**
   * Creation timestamp
   */
  createdAt: string;
  /**
   * Last update timestamp
   */
  updatedAt: string;
  /**
   * Creator identifier
   */
  createdBy: string;
  /**
   * Test version number
   */
  version: number;
  /**
   * Test status
   */
  status: "draft" | "configured" | "running" | "completed" | "archived";
  /**
   * Last execution timestamp
   */
  lastRun?: string;
}
export interface AuthConfig {
  token_refresh?: TokenRefreshConfig;
  credential_rotation?: CredentialRotationConfig;
  /**
   * Header override configuration
   */
  header_override?: {
    [k: string]: string;
  };
}
/**
 * Token refresh configuration
 */
export interface TokenRefreshConfig {
  /**
   * Token refresh endpoint URL
   */
  refresh_url: string;
  /**
   * HTTP method for refresh request
   */
  refresh_method?: "GET" | "POST" | "PUT";
  /**
   * Request body for token refresh
   */
  refresh_body?: AnyObject;
  /**
   * Headers for refresh request
   */
  refresh_headers?: {
    [k: string]: string;
  };
  /**
   * JSON path to extract token from response
   */
  token_path: string;
  /**
   * Header name for token
   */
  token_header?: string;
  /**
   * Token prefix
   */
  token_prefix?: string;
  /**
   * Refresh interval in seconds
   */
  refresh_interval?: number;
}
/**
 * Credential rotation configuration
 */
export interface CredentialRotationConfig {
  /**
   * Array of credential sets
   */
  credentials: {
    /**
     * Headers for this credential set
     */
    headers: {
      [k: string]: string;
    };
    /**
     * User identifier
     */
    user_id?: string;
  }[];
  /**
   * Credential rotation strategy
   */
  rotation_strategy?: "round_robin" | "random";
}
export interface LoadTestConfiguration {
  /**
   * Base URL for the load test
   */
  targetUrl: string;
  /**
   * Test duration in seconds
   */
  duration: number;
  /**
   * Number of concurrent virtual users
   */
  virtualUsers: number;
  /**
   * Time to ramp up to full load in seconds
   */
  rampUpTime?: number;
  /**
   * Delay between requests per user in milliseconds
   */
  thinkTime?: number;
  /**
   * IDs of requests to include in load test
   */
  includeRequests: string[];
  thresholds: LoadTestThresholds;
  authConfig?: AuthConfig;
}
/**
 * Pass/fail thresholds
 */
export interface LoadTestThresholds {
  /**
   * Maximum acceptable response time in milliseconds
   */
  maxResponseTime: number;
  /**
   * Maximum acceptable error rate (0-1)
   */
  maxErrorRate: number;
  /**
   * Minimum requests per second
   */
  minThroughput: number;
}
/**
 * Authentication configuration
 */
export interface PerformanceTestResults {
  /**
   * Test identifier
   */
  testId: string;
  /**
   * Test start timestamp
   */
  startTime: number;
  /**
   * Test end timestamp
   */
  endTime: number;
  /**
   * Test duration in seconds
   */
  duration: number;
  metrics: AggregateMetrics;
  /**
   * Per-request execution results
   */
  requestResults: RequestResults[];
  /**
   * Time-series data for charts
   */
  timeline: TimelineDataPoint[];
  /**
   * Whether the test passed
   */
  passed: boolean;
  /**
   * Reasons for test failure
   */
  failureReasons?: string[];
}
/**
 * Aggregate performance metrics
 */
export interface AggregateMetrics {
  /**
   * Total number of requests executed
   */
  totalRequests: number;
  /**
   * Number of successful requests
   */
  successfulRequests: number;
  /**
   * Number of failed requests
   */
  failedRequests: number;
  /**
   * Error rate (0-1)
   */
  errorRate: number;
  /**
   * Requests per second
   */
  throughput: number;
  responseTime: ResponseTimeMetrics;
  bandwidth: BandwidthMetrics;
}
/**
 * Response time statistics
 */
export interface ResponseTimeMetrics {
  /**
   * Minimum response time
   */
  min: number;
  /**
   * Maximum response time
   */
  max: number;
  /**
   * Mean response time
   */
  mean: number;
  /**
   * Median response time
   */
  median: number;
  /**
   * 90th percentile response time
   */
  p90: number;
  /**
   * 95th percentile response time
   */
  p95: number;
  /**
   * 99th percentile response time
   */
  p99: number;
}
/**
 * Bandwidth usage metrics
 */
export interface BandwidthMetrics {
  /**
   * Total bytes sent
   */
  sent: number;
  /**
   * Total bytes received
   */
  received: number;
  /**
   * Average bytes sent per second
   */
  avgSentPerSecond: number;
  /**
   * Average bytes received per second
   */
  avgReceivedPerSecond: number;
}
export interface RequestResults {
  /**
   * Request identifier
   */
  requestId: string;
  /**
   * Request URL
   */
  url: string;
  /**
   * HTTP method
   */
  method: string;
  /**
   * Individual execution results
   */
  executions: RequestExecution[];
}
export interface RequestExecution {
  /**
   * Execution timestamp
   */
  timestamp: number;
  /**
   * HTTP status code
   */
  statusCode: number;
  /**
   * Response time in milliseconds
   */
  responseTime: number;
  /**
   * Response size in bytes
   */
  size: number;
  /**
   * Whether the request was successful
   */
  success: boolean;
  /**
   * Error message if failed
   */
  error?: string;
}
export interface TimelineDataPoint {
  /**
   * Data point timestamp
   */
  timestamp: number;
  /**
   * Number of active users at this point
   */
  activeUsers: number;
  /**
   * Requests per second at this point
   */
  requestsPerSecond: number;
  /**
   * Average response time at this point
   */
  avgResponseTime: number;
  /**
   * Error rate at this point
   */
  errorRate: number;
}
/**
 * A user account member (wire shape; auth secrets stripped by toJSON)
 */
export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  accountId: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
/**
 * Per-account preferences
 */
export interface AccountSettings {
  timezone: string;
  dateFormat: string;
  language: string;
}
/**
 * A tenant account
 */
export interface Account {
  id: string;
  name: string;
  ownerId: string;
  editLocked?: boolean;
  settings: AccountSettings;
  createdAt: string;
  updatedAt: string;
}
/**
 * Decrypted per-account environments and global variables (persisted encrypted; plaintext arrays are the wire/domain shape). Elements follow environment.json Environment/GlobalVariable.
 */
export interface AccountDataStore {
  accountId: string;
  environments: AnyObject[];
  globalVariables: AnyObject[];
  updatedAt: string;
}
/**
 * A folder in the test tree
 */
export interface Folder {
  id: string;
  name: string;
  accountId: string;
  parentId: string | null;
  path: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}
/**
 * An uploaded media asset (storageKey stripped by toJSON; url populated at read time)
 */
export interface MediaItem {
  id: string;
  accountId: string;
  filename: string;
  originalName: string;
  mimeType: string;
  sizeBytes: number;
  storageDriver: MediaStorageDriver;
  /**
   * Server-side only; stripped before it reaches the client
   */
  storageKey: string;
  /**
   * Resolved access URL (read-time only)
   */
  url?: string;
  uploadedBy: string;
  createdAt: string;
}
/**
 * A stored execution report. `report` holds a FlowReport (execution-results.json), FlowExecutionResult (parallel-execution.json), or an opaque object depending on `type`.
 */
export interface ExecutionReport {
  id: string;
  accountId: string;
  testId?: string | null;
  flowId?: string | null;
  flowName?: string | null;
  type: ReportType;
  status: ReportStatus;
  duration: number;
  report: AnyObject;
  metadata?: AnyObject | null;
  executedBy: string;
  executedByName?: string | null;
  executedByEmail?: string | null;
  createdAt: string;
}
/**
 * A recent run summary on a stored test. status uses the full ReportStatus set on the domain side; the persistence layer enforces only passed/failed/pending/running.
 */
export interface TestRecentRun {
  id: string;
  status: ReportStatus;
  createdAt: string;
}
/**
 * Payload to create/update a stored test. flowData is a Flow (flow.json) or PerformanceTest (performance-test.json).
 */
export interface StoredTestInput {
  id: string;
  name: string;
  folderId?: string | null;
  flowData: TestFlowData;
  type?: FlowKind;
  tags?: string[];
}
/**
 * A persisted test record
 */
export interface StoredTestRecord {
  id: string;
  name: string;
  accountId: string;
  folderId: string | null;
  flowData: TestFlowData;
  type: FlowKind;
  tags: string[];
  lastResult?: FlowLastResult;
  createdBy?: string;
  updatedBy?: string;
  syncedAt?: string;
  createdAt?: string;
  updatedAt?: string;
}
/**
 * A test catalog/list projection (carries recentRuns)
 */
export interface TestCatalogItem {
  id: string;
  name: string;
  folderId: string | null;
  type: FlowKind;
  tags: string[];
  description?: string;
  status?: string;
  lastResult?: FlowLastResult;
  recentRuns?: TestRecentRun[];
  createdAt?: string;
  updatedAt?: string;
}
/**
 * Engine handshake/JWT session payload (not persisted). issuedAt/expiresAt are epoch numbers.
 */
export interface EngineSession {
  accountId: string;
  userId: string;
  role: UserRole;
  token: string;
  issuedAt: number;
  expiresAt: number;
}
/**
 * Response to an image upload
 */
export interface ImageUploadResponse {
  mediaId: string;
  url: string;
  filename: string;
}
/**
 * Run configuration for a suite. The persisted fields are browser/headless/incognito/environmentId/parallel/maxParallel/stopOnFailure (floweb-server normalizeRunConfig); recordExecution and randomBrowserPool are accepted from the client but not persisted.
 */
export interface SuiteRunConfig {
  /**
   * Browser to run with
   */
  browser: string;
  /**
   * Run headless
   */
  headless: boolean;
  /**
   * Run in incognito/private mode
   */
  incognito: boolean;
  /**
   * Environment applied to the run
   */
  environmentId: string | null;
  /**
   * Run suite tests in parallel
   */
  parallel: boolean;
  /**
   * Max parallel workers (clamped 1-15 by the server)
   */
  maxParallel: number;
  /**
   * Stop the suite on first failure
   */
  stopOnFailure: boolean;
  /**
   * Client hint to record the run (not persisted server-side)
   */
  recordExecution?: boolean;
  /**
   * Eligible browsers when browser='random' (client-only, not persisted)
   */
  randomBrowserPool?: string[];
}
/**
 * Reference to a test within a suite or schedule
 */
export interface SuiteTestRef {
  /**
   * Referenced test id
   */
  testId: string;
  /**
   * Denormalized flow name
   */
  flowName?: string | null;
}
/**
 * A test suite definition
 */
export interface Suite {
  /**
   * Suite id (Mongoose _id mapped to id on the wire)
   */
  id: string;
  /**
   * Owning account
   */
  accountId: string;
  /**
   * Suite name
   */
  name: string;
  /**
   * Suite description
   */
  description?: string | null;
  /**
   * Suite tags
   */
  tags?: string[];
  runConfig: SuiteRunConfig;
  /**
   * Tests in the suite
   */
  tests: SuiteTestRef[];
  /**
   * Ordered test ids
   */
  testIds: string[];
  /**
   * Creator user id
   */
  createdBy: string;
  /**
   * Last updater user id
   */
  updatedBy: string;
  /**
   * Creation timestamp
   */
  createdAt?: string;
  /**
   * Last update timestamp
   */
  updatedAt?: string;
}
/**
 * Per-test record within a suite execution
 */
export interface SuiteExecutionTest {
  /**
   * Referenced test id
   */
  testId: string;
  /**
   * Denormalized flow name
   */
  flowName?: string | null;
  status: SuiteExecutionTestStatus;
  /**
   * Execution report id
   */
  reportId?: string | null;
  /**
   * Status message
   */
  message?: string | null;
  /**
   * Browser used for this test
   */
  browser?: string | null;
  /**
   * Start timestamp
   */
  startedAt?: string | null;
  /**
   * Finish timestamp
   */
  finishedAt?: string | null;
}
/**
 * A suite execution record
 */
export interface SuiteExecution {
  /**
   * Execution id
   */
  id: string;
  /**
   * Owning account
   */
  accountId: string;
  /**
   * Suite this execution belongs to
   */
  suiteId: string;
  /**
   * Execution label
   */
  label: string;
  /**
   * Denormalized suite name
   */
  suiteName?: string | null;
  /**
   * Denormalized suite description
   */
  suiteDescription?: string | null;
  /**
   * Denormalized suite tags
   */
  suiteTags?: string[];
  /**
   * Schedule that triggered this execution, if any
   */
  scheduleId?: string | null;
  triggerType: SuiteTriggerType;
  status: SuiteExecutionStatus;
  runConfig: SuiteRunConfig;
  /**
   * Ordered test ids
   */
  testIds: string[];
  /**
   * Per-test records
   */
  tests: SuiteExecutionTest[];
  /**
   * Creator user id
   */
  createdBy: string;
  /**
   * Last updater user id
   */
  updatedBy: string;
  /**
   * Start timestamp
   */
  startedAt?: string | null;
  /**
   * Finish timestamp
   */
  finishedAt?: string | null;
  /**
   * Creation timestamp
   */
  createdAt: string;
  /**
   * Last update timestamp
   */
  updatedAt: string;
}
/**
 * A scheduled suite run
 */
export interface SuiteSchedule {
  /**
   * Schedule id
   */
  id: string;
  /**
   * Owning account
   */
  accountId: string;
  /**
   * Suite this schedule targets
   */
  suiteId: string;
  /**
   * Schedule label
   */
  label: string;
  /**
   * Denormalized suite name
   */
  suiteName?: string | null;
  /**
   * Denormalized suite description
   */
  suiteDescription?: string | null;
  /**
   * Denormalized suite tags
   */
  suiteTags?: string[];
  status: SuiteScheduleStatus;
  /**
   * When the run is due
   */
  runAt: string;
  /**
   * When the run window expires
   */
  runWindowExpiresAt: string;
  runConfig: SuiteRunConfig;
  /**
   * Scheduled tests
   */
  tests: SuiteTestRef[];
  /**
   * Ordered test ids
   */
  testIds: string[];
  /**
   * Executions spawned by this schedule
   */
  executionIds: string[];
  /**
   * Most recent execution id
   */
  latestExecutionId?: string | null;
  /**
   * Creator user id
   */
  createdBy: string;
  /**
   * Last updater user id
   */
  updatedBy: string;
  /**
   * Start timestamp
   */
  startedAt?: string | null;
  /**
   * Finish timestamp
   */
  finishedAt?: string | null;
  /**
   * Creation timestamp
   */
  createdAt: string;
  /**
   * Last update timestamp
   */
  updatedAt: string;
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
 * Schema for environment configurations and global variables used in Floweb automation flows
 */
export interface EnvironmentAndGlobalVariablesConfiguration {
  /**
   * List of available environments
   *
   * @minItems 0
   */
  environments: Environment[];
  /**
   * List of global variables available across all environments
   *
   * @minItems 0
   */
  globalVariables: GlobalVariable[];
  /**
   * ID of the currently selected environment
   */
  selectedEnvironmentId?: string;
}
/**
 * Complete flow definition for automation workflows
 */
/**
 * Canvas zoom and pan state
 */
/**
 * Flow input and output variables
 */
/**
 * Flow parameters for configuration
 */
/**
 * An environment configuration with its variables. Unifies the standalone-entity and embedded-in-flow forms: only id+name are required so embedded partial environments validate; the server always sets the remaining fields on stored environments.
 */
/**
 * Performance test definition for load testing and API monitoring
 */
export interface PerformanceTest {
  metadata: PerformanceTestMetadata;
  /**
   * HTTP requests recorded during test creation
   */
  recordedRequests: RecordedRequest[];
  loadTestConfig: LoadTestConfiguration;
  /**
   * URL patterns for filtering recorded requests
   */
  filterPatterns?: string[];
  /**
   * Restrict recording to same domain only
   */
  onlySameDomain?: boolean;
  results?: PerformanceTestResults;
}
/**
 * Test metadata and configuration
 */
/**
 * Load test execution configuration
 */
/**
 * Results from load test execution
 */
