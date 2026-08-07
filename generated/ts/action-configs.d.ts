/* eslint-disable */
// GENERATED from schemas/ by scripts/generate-ts.cjs — do not edit by hand.

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
 * Send keyboard input to an element or globally.
 */
export type SendKeysConfig = SendKeysConfig1 & {
  /**
   * Optional key combinations payload used by backend actions
   */
  keyCombinations?: unknown[];
};
export type SendKeysConfig1 = BaseActionConfig & {
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
export type WaitConfig1 = BaseActionConfig & {
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
export type AssertionConfig1 = BaseActionConfig & {
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
 * Clear text from an input field.
 */
export type ClearInputConfig = ClearInputConfig1 & {
  /**
   * Whether to keep focus on element after clearing
   */
  maintainFocus?: boolean;
};
export type ClearInputConfig1 = BaseActionConfig & {
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
export type SwitchTabConfig1 = BaseActionConfig & {
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
export type GetPageInfoConfig1 = BaseActionConfig & {
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
 * Make an HTTP API request. Set responsePath to store only a path of the response (e.g. data.token) in the output variable; leave empty to store the full {status_code, headers, data, url} object. Use validateStatus/expectedStatus and assertions to turn the call into a network/response check.
 */
export type ApiCallConfig = BaseActionConfig & {
  /**
   * HTTP method. The engine dispatches through requests.request, which supports all of these; only POST/PUT/PATCH send a body.
   */
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "HEAD" | "OPTIONS" | "TRACE";
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
 * Control the browser's network layer via Chrome DevTools: block hosts, throttle bandwidth, inject headers/User-Agent, or capture the network log. Chromium only.
 */
export type NetworkControlConfig = BaseActionConfig & {
  /**
   * apply: install block/throttle/header rules for the session; clear: remove them; captureHar: read the current session's network log into a variable.
   */
  action?: "apply" | "clear" | "captureHar";
  /**
   * URL patterns to block (Chrome Network.setBlockedURLs wildcards, e.g. *.analytics.com/*).
   */
  blockUrls?: string[];
  /**
   * Network condition emulation profile.
   */
  throttle?: "none" | "offline" | "slow-3g" | "fast-3g" | "custom";
  /**
   * Download throughput in kbps when throttle=custom.
   */
  throttleDownloadKbps?: number;
  /**
   * Upload throughput in kbps when throttle=custom.
   */
  throttleUploadKbps?: number;
  /**
   * Added latency in milliseconds when throttle=custom.
   */
  throttleLatencyMs?: number;
  /**
   * Extra HTTP headers injected into every request for the session.
   */
  extraHeaders?: {
    [k: string]: string;
  };
  /**
   * Override the User-Agent for the session.
   */
  userAgent?: string;
  /**
   * Variable to store the captured HAR-like network log when action=captureHar.
   */
  harOutputVariable?: string;
};
/**
 * Run an axe-core accessibility audit on the current page and report WCAG violations. Chromium recommended.
 */
export type AccessibilityAuditConfig = BaseActionConfig & {
  /**
   * WCAG conformance level (axe-core tag) to audit against.
   */
  standard?: "wcag2a" | "wcag2aa" | "wcag21a" | "wcag21aa" | "best-practice";
  /**
   * Optional CSS selector to restrict the audit to a region of the page.
   */
  includeSelector?: string;
  /**
   * Fail the action when a violation of this impact or higher is found; 'none' never fails.
   */
  failOnSeverity?: "none" | "minor" | "moderate" | "serious" | "critical";
  /**
   * Variable to store the list of violations.
   */
  outputVariable?: string;
};
/**
 * Capture Core Web Vitals and navigation timing (LCP, FCP, CLS, TTFB, load) from the current page via the Performance APIs.
 */
export type CaptureWebVitalsConfig = BaseActionConfig & {
  /**
   * Variable to store the captured metrics object.
   */
  outputVariable?: string;
  /**
   * Optional per-metric budgets in milliseconds/score (e.g. { "lcp": 2500, "cls": 0.1 }); the action fails if any captured metric exceeds its budget.
   */
  budgets?: {
    [k: string]: number;
  };
};
/**
 * Compare a full-page screenshot against a stored baseline using perceptual SSIM. First run (or updateBaseline) records the baseline; later runs fail on visual drift beyond the threshold.
 */
export type VisualRegressionConfig = BaseActionConfig & {
  /**
   * Identifier for the baseline image. Defaults to the step label/id when empty.
   */
  baselineName?: string;
  /**
   * Minimum SSIM similarity (0-1) required to pass; below this the step fails on visual drift.
   */
  threshold?: number;
  /**
   * Capture the full scrollable page (Chromium) instead of just the viewport.
   */
  fullPage?: boolean;
  /**
   * Approve the current page as the new baseline (overwrites the stored baseline).
   */
  updateBaseline?: boolean;
  /**
   * Variable to store the comparison result (score, threshold, diff image).
   */
  diffOutputVariable?: string;
};
/**
 * Load a CSV/JSON dataset (inline or from an uploaded file) into a variable as a list of row objects, for data-driven testing with loop forEach. Reference a row field as {{row.column}} inside the loop.
 */
export type LoadDatasetConfig = BaseActionConfig & {
  /**
   * Dataset format. 'auto' infers from the content/reference.
   */
  format?: "auto" | "csv" | "json";
  /**
   * Inline CSV/JSON text, or a mediaId:<id> reference to an uploaded dataset file.
   */
  source?: string;
  /**
   * CSV only: treat the first row as column names.
   */
  hasHeader?: boolean;
  /**
   * CSV column delimiter.
   */
  delimiter?: string;
  /**
   * Variable to store the parsed rows (a list of row objects) for a loop forEach to iterate.
   */
  outputVariable?: string;
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
export type ConditionalConfig1 = BaseActionConfig & {
  /**
   * JavaScript condition to evaluate
   */
  condition?: string;
  /**
   * Actions to execute if condition is true
   */
  thenActions?: {
    [k: string]: unknown;
  }[];
  /**
   * Actions to execute if condition is false
   */
  elseActions?: {
    [k: string]: unknown;
  }[];
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
  actions?: {
    [k: string]: unknown;
  }[];
  /**
   * Maximum iterations to prevent infinite loops
   */
  maxIterations?: number;
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
  inputParameters?: {
    [k: string]: unknown;
  }[];
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
export type SwitchToFrameConfig1 = BaseActionConfig & {
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
export type ExitFrameConfig1 = BaseActionConfig & {
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
   * Match on shape alone, ignoring the edge-consistency check. Faster, but less able to tell visually similar images apart, so it is off by default.
   */
  grayscale?: boolean;
  /**
   * Mean CIE76 deltaE a match may differ from its reference image by. Template matching runs on grayscale, so without this a recoloured copy of the image matches perfectly. 0 disables the check, matching the image in any colour.
   */
  colorTolerance?: number;
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
export type GmailConfig = BaseActionConfig & {
  /**
   * Gmail operation to perform
   */
  operation: "sendEmail" | "listMessages" | "getMessage";
  /**
   * Recipient address(es), comma separated
   */
  to?: string;
  /**
   * Cc address(es), comma separated
   */
  cc?: string;
  /**
   * Email subject
   */
  subject?: string;
  /**
   * Email body
   */
  body?: string;
  /**
   * Gmail search query, for listMessages
   */
  query?: string;
  /**
   * Message id, for getMessage
   */
  messageId?: string;
  /**
   * Token, webhook URL or API key for the target app. Use a variable reference such as {{env.SLACK_TOKEN}} so the secret lives in the account's environment, never in the test.
   */
  credential?: string;
  /**
   * Variable to store the app's response
   */
  outputVariable?: string;
  /**
   * Request timeout in seconds
   */
  timeout?: number;
  /**
   * Fail the step when the app returns an error
   */
  failOnError?: boolean;
};
export type SlackConfig = BaseActionConfig & {
  /**
   * postMessage uses a bot token and a channel; postWebhook posts to an incoming webhook URL.
   */
  operation: "postMessage" | "postWebhook";
  /**
   * Channel id or name, for postMessage
   */
  channel?: string;
  /**
   * Message text
   */
  message?: string;
  /**
   * Reply in this thread, optional
   */
  threadTs?: string;
  /**
   * Slack Block Kit JSON, optional
   */
  blocks?: string;
  /**
   * Token, webhook URL or API key for the target app. Use a variable reference such as {{env.SLACK_TOKEN}} so the secret lives in the account's environment, never in the test.
   */
  credential?: string;
  /**
   * Variable to store the app's response
   */
  outputVariable?: string;
  /**
   * Request timeout in seconds
   */
  timeout?: number;
  /**
   * Fail the step when the app returns an error
   */
  failOnError?: boolean;
};
export type DiscordConfig = BaseActionConfig & {
  /**
   * postWebhook posts to a channel webhook URL; postMessage uses a bot token and a channel id.
   */
  operation: "postWebhook" | "postMessage";
  /**
   * Channel id, for postMessage
   */
  channelId?: string;
  /**
   * Message content
   */
  message?: string;
  /**
   * Override the webhook's display name
   */
  username?: string;
  /**
   * Discord embeds JSON, optional
   */
  embeds?: string;
  /**
   * Token, webhook URL or API key for the target app. Use a variable reference such as {{env.SLACK_TOKEN}} so the secret lives in the account's environment, never in the test.
   */
  credential?: string;
  /**
   * Variable to store the app's response
   */
  outputVariable?: string;
  /**
   * Request timeout in seconds
   */
  timeout?: number;
  /**
   * Fail the step when the app returns an error
   */
  failOnError?: boolean;
};
export type JiraConfig = BaseActionConfig & {
  /**
   * Jira operation to perform
   */
  operation: "createIssue" | "updateIssue" | "addComment" | "transitionIssue" | "getIssue";
  /**
   * Jira site URL, e.g. https://your-org.atlassian.net
   */
  baseUrl?: string;
  /**
   * Atlassian account email, paired with an API token
   */
  email?: string;
  /**
   * Project key, for createIssue
   */
  projectKey?: string;
  /**
   * Issue key, for everything except createIssue
   */
  issueKey?: string;
  /**
   * Issue type, for createIssue
   */
  issueType?: string;
  /**
   * Issue summary
   */
  summary?: string;
  /**
   * Issue description
   */
  description?: string;
  /**
   * Comment body, for addComment
   */
  comment?: string;
  /**
   * Target status name, for transitionIssue
   */
  transitionTo?: string;
  /**
   * Extra Jira fields as JSON, optional
   */
  fields?: string;
  /**
   * Token, webhook URL or API key for the target app. Use a variable reference such as {{env.SLACK_TOKEN}} so the secret lives in the account's environment, never in the test.
   */
  credential?: string;
  /**
   * Variable to store the app's response
   */
  outputVariable?: string;
  /**
   * Request timeout in seconds
   */
  timeout?: number;
  /**
   * Fail the step when the app returns an error
   */
  failOnError?: boolean;
};
/**
 * Configuration for verifying desktop image presence or absence.
 */
export type DesktopVerifyImageConfig = DesktopVisualBaseConfig & {
  /**
   * Reference image to verify
   */
  image?: string;
  /**
   * Whether to assert the image is there, gone, or to wait for either
   */
  verifyMode?: "present" | "notPresent" | "waitPresent" | "waitDisappear";
  requireStability?: boolean;
  stableDurationMs?: number;
  outputVariable?: string;
  failOnMismatch?: boolean;
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
  /**
   * Match on shape alone, ignoring the edge-consistency check. Faster, but less able to tell visually similar images apart, so it is off by default.
   */
  grayscale?: boolean;
  /**
   * Mean CIE76 deltaE a match may differ from its reference image by. Template matching runs on grayscale, so without this a recoloured copy of the image matches perfectly. 0 disables the check, matching the image in any colour.
   */
  colorTolerance?: number;
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
  environment?: {
    [k: string]: unknown;
  };
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

export interface ActionConfigurationsSchema {
  actionConfigs?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".*".
     */
    [k: string]:
      | ClickConfig
      | InputConfig
      | SendKeysConfig
      | WaitConfig
      | NavigateConfig
      | ScrollConfig
      | ScreenshotConfig
      | AssertionConfig
      | AssertVisibleConfig
      | FormFillConfig
      | ClearInputConfig
      | OpenNewTabConfig
      | SwitchTabConfig
      | GoForwardConfig
      | GoBackConfig
      | RefreshConfig
      | GetPageInfoConfig
      | JunctionConfig
      | ApiCallConfig
      | NetworkControlConfig
      | AccessibilityAuditConfig
      | CaptureWebVitalsConfig
      | VisualRegressionConfig
      | LoadDatasetConfig
      | ConditionalConfig
      | LoopConfig
      | DatabaseQueryConfig
      | DatabaseInsertConfig
      | CustomCodeConfig
      | DragAndDropConfig
      | CallToFlowConfig
      | SwitchToFrameConfig
      | ExitFrameConfig
      | SetViewportConfig
      | GetElementPropertiesConfig
      | HandlePopupConfig
      | FileUploadConfig
      | FileDownloadConfig
      | SubflowConfig
      | DesktopWaitForImageConfig
      | DesktopFindImageConfig
      | DesktopClickImageConfig
      | DesktopClickPointConfig
      | DesktopTypeTextConfig
      | DesktopMoveMouseConfig
      | DesktopHotkeyConfig
      | DesktopRunCommandConfig
      | DesktopCaptureScreenConfig
      | GmailConfig
      | SlackConfig
      | DiscordConfig
      | JiraConfig
      | DesktopVerifyImageConfig;
  };
  BaseActionConfig?: BaseActionConfig;
  SemanticExpectedStates?: SemanticExpectedStates;
  SemanticRelation?: SemanticRelation;
  SemanticLibraryHints?: SemanticLibraryHints;
  SemanticTarget?: SemanticTarget;
  ClickConfig?: ClickConfig;
  InputConfig?: InputConfig;
  NavigateConfig?: NavigateConfig;
  WaitConfig?: WaitConfig1;
  AssertionConfig?: AssertionConfig1;
  ScreenshotConfig?: ScreenshotConfig;
  FormField?: FormField;
  FormFieldOption?: FormFieldOption;
  FormFillConfig?: FormFillConfig;
  ApiCallConfig?: ApiCallConfig;
  ResponseAssertion?: ResponseAssertion;
  NetworkControlConfig?: NetworkControlConfig;
  AccessibilityAuditConfig?: AccessibilityAuditConfig;
  CaptureWebVitalsConfig?: CaptureWebVitalsConfig;
  VisualRegressionConfig?: VisualRegressionConfig;
  LoadDatasetConfig?: LoadDatasetConfig;
  DatabaseQueryConfig?: DatabaseQueryConfig;
  DatabaseInsertConfig?: DatabaseInsertConfig;
  FileUploadConfig?: FileUploadConfig;
  FileDownloadConfig?: FileDownloadConfig;
  CustomCodeConfig?: CustomCodeConfig;
  SubflowConfig?: SubflowConfig;
  SendKeysConfig?: SendKeysConfig1;
  ScrollConfig?: ScrollConfig;
  AssertVisibleConfig?: AssertVisibleConfig;
  ClearInputConfig?: ClearInputConfig1;
  OpenNewTabConfig?: OpenNewTabConfig;
  SwitchTabConfig?: SwitchTabConfig1;
  GoForwardConfig?: GoForwardConfig;
  GoBackConfig?: GoBackConfig;
  RefreshConfig?: RefreshConfig;
  GetPageInfoConfig?: GetPageInfoConfig1;
  JunctionConfig?: JunctionConfig;
  ConditionalConfig?: ConditionalConfig1;
  LoopConfig?: LoopConfig;
  DragAndDropConfig?: DragAndDropConfig;
  CallToFlowConfig?: CallToFlowConfig;
  SwitchToFrameConfig?: SwitchToFrameConfig1;
  ExitFrameConfig?: ExitFrameConfig1;
  SetViewportConfig?: SetViewportConfig;
  GetElementPropertiesConfig?: GetElementPropertiesConfig;
  HandlePopupConfig?: HandlePopupConfig;
  DesktopVisualBaseConfig?: DesktopVisualBaseConfig;
  DesktopWaitForImageConfig?: DesktopWaitForImageConfig;
  DesktopFindImageConfig?: DesktopFindImageConfig;
  DesktopClickImageConfig?: DesktopClickImageConfig;
  DesktopClickPointConfig?: DesktopClickPointConfig;
  DesktopTypeTextConfig?: DesktopTypeTextConfig;
  DesktopMoveMouseConfig?: DesktopMoveMouseConfig;
  DesktopHotkeyConfig?: DesktopHotkeyConfig;
  DesktopRunCommandConfig?: DesktopRunCommandConfig;
  DesktopCaptureScreenConfig?: DesktopCaptureScreenConfig;
  DesktopDragAndDropConfig?: DesktopDragAndDropConfig;
  DesktopFocusWindowConfig?: DesktopFocusWindowConfig;
  DesktopListProcessesConfig?: DesktopListProcessesConfig;
  DesktopOpenApplicationConfig?: DesktopOpenApplicationConfig;
  DesktopOpenPathConfig?: DesktopOpenPathConfig;
  DesktopRunScriptConfig?: DesktopRunScriptConfig;
  DesktopSwitchDesktopConfig?: DesktopSwitchDesktopConfig;
  GmailConfig?: GmailConfig;
  SlackConfig?: SlackConfig;
  DiscordConfig?: DiscordConfig;
  JiraConfig?: JiraConfig;
  DesktopVerifyImageConfig?: DesktopVerifyImageConfig;
}
export interface BaseActionConfig {
  /**
   * Base64 encoded reference image
   */
  image?: string;
  /**
   * Mean CIE76 deltaE a match may differ from its reference image by. Template matching runs on grayscale, so without this a recoloured copy of the image matches perfectly. Defaults to 50 for web actions, which absorbs the font, sub-pixel and compression differences between the machine a reference was captured on and the one replaying it. Lower it to catch subtler colour changes; 0 disables the check, matching the image in any colour.
   */
  colorTolerance?: number;
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
  value: {
    [k: string]: unknown;
  };
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
  value?: {
    [k: string]: unknown;
  };
}
