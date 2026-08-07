/* eslint-disable */
// GENERATED from schemas/ by scripts/generate-ts.cjs — do not edit by hand.

/**
 * How generated requests authenticate, derived from the spec's security schemes
 */
export type OpenApiAuthKind = "none" | "bearer" | "basic" | "apiKeyHeader" | "apiKeyQuery";
/**
 * Where the generated placeholders are created. Test variables and parameters live on the flow; environment and global variables are account-scoped and shared across tests, so importing to them can affect other flows.
 */
export type OpenApiVariableTarget = "variable" | "parameter" | "environment" | "global";

export interface OpenAPIImportSchema {
  request?: OpenApiImportRequest;
  response?: OpenApiImportResponse;
  OpenApiVariableTarget?: OpenApiVariableTarget;
  OpenApiAuthKind?: OpenApiAuthKind;
  OpenApiImportRequest?: OpenApiImportRequest;
  OpenApiSkippedOperation?: OpenApiSkippedOperation;
  OpenApiGeneratedFlow?: OpenApiGeneratedFlow;
  OpenApiImportResponse?: OpenApiImportResponse;
}
/**
 * POST /openapi/import request. Supply the document inline via `spec`; the server does not fetch remote URLs on the caller's behalf.
 */
export interface OpenApiImportRequest {
  /**
   * The OpenAPI/Swagger document as JSON or YAML text
   */
  spec: string;
  /**
   * Overrides the server URL taken from the spec. Useful when the spec points at production and the tests should hit staging.
   */
  baseUrl?: string;
  /**
   * When non-empty, only operations carrying one of these tags are imported
   */
  includeTags?: string[];
  /**
   * When non-empty, only these HTTP methods are imported (case-insensitive)
   */
  includeMethods?: string[];
  /**
   * 'tag' produces one flow per spec tag containing its operations; 'operation' produces one flow per operation.
   */
  groupBy?: "tag" | "operation";
  /**
   * Defaults to test variables, which are scoped to the generated flow
   */
  variableTarget?: "variable" | "parameter" | "environment" | "global";
  /**
   * Derive response assertions from each operation's declared success response
   */
  generateAssertions?: boolean;
  /**
   * Folder the generated tests are created in
   */
  folderId?: string | null;
  /**
   * When true the generated flows are saved as tests; when false they are returned for preview only
   */
  persist?: boolean;
}
/**
 * POST /openapi/import response
 */
export interface OpenApiImportResponse {
  /**
   * Spec title, used to name the generated group
   */
  title: string;
  /**
   * Spec version string as declared by the document
   */
  specVersion: string;
  /**
   * Resolved base URL the generated requests target
   */
  baseUrl: string;
  authKind: OpenApiAuthKind;
  variableTarget?: OpenApiVariableTarget;
  /**
   * Operations that produced an action
   */
  operationCount: number;
  flows: OpenApiGeneratedFlow[];
  /**
   * Typed placeholders the generated steps reference (auth token, path parameters)
   */
  variables?: {
    [k: string]: unknown;
  }[];
  skipped?: OpenApiSkippedOperation[];
  warnings?: string[];
}
/**
 * One generated flow. `flow` is a Flow graph whose nodes are apiCall actions; `testId` is set only when the import persisted it.
 */
export interface OpenApiGeneratedFlow {
  name: string;
  description?: string;
  operationCount: number;
  /**
   * Flow graph: { nodes, edges, variables, parameters }
   */
  flow: {
    [k: string]: unknown;
  };
  testId?: string | null;
}
/**
 * An operation the importer chose not to generate, and why. Surfaced so a short import is explainable rather than looking like operations silently vanished.
 */
export interface OpenApiSkippedOperation {
  method: string;
  path: string;
  /**
   * Why this operation was skipped
   */
  reason: string;
}
