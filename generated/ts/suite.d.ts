/* eslint-disable */
// GENERATED from schemas/ by scripts/generate-ts.cjs — do not edit by hand.

/**
 * Browser automation adapter for web actions; omitted uses the engine default.
 */
export type BrowserAdapter = "selenium" | "playwright";
/**
 * What triggered a suite execution
 */
export type SuiteTriggerType = "manual" | "scheduled";
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

export interface SuiteSchema {
  suite?: Suite;
  execution?: SuiteExecution;
  schedule?: SuiteSchedule;
  SuiteExecutionStatus?: SuiteExecutionStatus;
  SuiteExecutionTestStatus?: SuiteExecutionTestStatus;
  SuiteScheduleStatus?: SuiteScheduleStatus;
  SuiteTriggerType?: SuiteTriggerType;
  BrowserAdapter?: BrowserAdapter;
  SuiteRunConfig?: SuiteRunConfig;
  SuiteTestRef?: SuiteTestRef;
  Suite?: Suite;
  SuiteExecutionTest?: SuiteExecutionTest;
  SuiteExecution?: SuiteExecution;
  SuiteSchedule?: SuiteSchedule;
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
 * Run configuration for a suite. The persisted fields are browser/headless/incognito/environmentId/parallel/maxParallel/stopOnFailure/browserAdapter (floweb-server normalizeRunConfig); recordExecution and randomBrowserPool are accepted from the client but not persisted.
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
  browserAdapter?: BrowserAdapter;
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
   * Tests excluded from this run because they were quarantined. Recorded so a short run is explainable rather than looking like tests silently vanished.
   */
  skippedTestIds?: string[];
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
