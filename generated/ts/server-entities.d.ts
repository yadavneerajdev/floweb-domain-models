/* eslint-disable */
// GENERATED from schemas/ by scripts/generate-ts.cjs — do not edit by hand.

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
 * Why a test was excluded from suite runs
 */
export type QuarantineReason = "flaky" | "manual";

export interface ServerEntitiesSchema {
  user?: User;
  account?: Account;
  folder?: Folder;
  media?: MediaItem;
  report?: ExecutionReport;
  test?: StoredTestRecord;
  UserRole?: UserRole;
  MediaStorageDriver?: MediaStorageDriver;
  ReportType?: ReportType;
  ReportStatus?: ReportStatus;
  FlowKind?: FlowKind;
  FlowLastResult?: FlowLastResult;
  QuarantineReason?: QuarantineReason;
  TestQuarantine?: TestQuarantine;
  User?: User;
  AccountSettings?: AccountSettings;
  Account?: Account;
  AccountDataStore?: AccountDataStore;
  Folder?: Folder;
  MediaItem?: MediaItem;
  ExecutionReport?: ExecutionReport;
  TestRecentRun?: TestRecentRun;
  StoredTestInput?: StoredTestInput;
  StoredTestRecord?: StoredTestRecord;
  TestCatalogItem?: TestCatalogItem;
  EngineSession?: EngineSession;
  PaginatedResponse?: PaginatedResponse;
  ImageUploadResponse?: ImageUploadResponse;
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
 * Per-account preferences
 */
export interface AccountSettings {
  timezone: string;
  dateFormat: string;
  language: string;
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
  report: {
    [k: string]: unknown;
  };
  metadata?: {
    [k: string]: unknown;
  } | null;
  executedBy: string;
  /**
   * What initiated the run. An API key is the initiator of a CI run; there is no user.
   */
  executedByType?: "user" | "api_key";
  executedByName?: string | null;
  executedByEmail?: string | null;
  createdAt: string;
}
/**
 * A persisted test record
 */
export interface StoredTestRecord {
  id: string;
  name: string;
  accountId: string;
  folderId: string | null;
  flowData: {
    [k: string]: unknown;
  };
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
 * Set on a test while it's excluded from suite runs (storage keeps quarantinedAt as a real Date; this is the wire shape with it as an ISO string)
 */
export interface TestQuarantine {
  reason: QuarantineReason;
  note?: string;
  flakinessScore?: number | null;
  quarantinedAt: string;
  quarantinedBy: string;
}
/**
 * Decrypted per-account environments and global variables (persisted encrypted; plaintext arrays are the wire/domain shape). Elements follow environment.json Environment/GlobalVariable.
 */
export interface AccountDataStore {
  accountId: string;
  environments: {
    [k: string]: unknown;
  }[];
  globalVariables: {
    [k: string]: unknown;
  }[];
  updatedAt: string;
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
  flowData: {
    [k: string]: unknown;
  };
  type?: FlowKind;
  tags?: string[];
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
  quarantine?: TestQuarantine | null;
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
 * Generic pagination envelope convention. `items` is the page of results (element type varies by endpoint). Uses items/page/limit/total/hasMore.
 */
export interface PaginatedResponse {
  items: unknown[];
  page: number;
  limit: number;
  total: number;
  hasMore: boolean;
}
/**
 * Response to an image upload
 */
export interface ImageUploadResponse {
  mediaId: string;
  url: string;
  filename: string;
}
