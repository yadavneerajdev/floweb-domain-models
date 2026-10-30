/* eslint-disable */
// GENERATED from schemas/ by scripts/generate-ts.cjs — do not edit by hand.

/**
 * What a key is permitted to do. 'runs:execute' triggers test runs; 'runs:read' reads runs and reports.
 */
export type ApiKeyScope = "runs:execute" | "runs:read";
/**
 * Derived state of a key. Keys are never extended: an expired or revoked key is replaced by a new one.
 */
export type ApiKeyStatus = "active" | "expired" | "revoked";

export interface APIKeyModelsSchema {
  apiKeys?: ApiKey[];
  ApiKeyScope?: ApiKeyScope;
  ApiKeyStatus?: ApiKeyStatus;
  ApiKey?: ApiKey;
  CreateApiKeyRequest?: CreateApiKeyRequest;
  CreateApiKeyResponse?: CreateApiKeyResponse;
}
/**
 * An API key as returned by the API. Never carries the secret.
 */
export interface ApiKey {
  id: string;
  accountId: string;
  /**
   * Human label shown in the UI and recorded on runs this key starts.
   */
  name: string;
  /**
   * Leading, non-secret portion of the key, so a key can be identified in a list without revealing it.
   */
  keyPrefix: string;
  /**
   * @minItems 1
   */
  scopes: [ApiKeyScope, ...ApiKeyScope[]];
  status: ApiKeyStatus;
  /**
   * User who created the key. Retained for audit; the key itself is the initiator of its runs.
   */
  createdBy: string;
  createdAt: string;
  /**
   * Fixed at creation and immutable. Null means the key does not expire.
   */
  expiresAt?: string | null;
  revokedAt?: string | null;
  lastUsedAt?: string | null;
}
export interface CreateApiKeyRequest {
  name: string;
  /**
   * @minItems 1
   */
  scopes?: [ApiKeyScope, ...ApiKeyScope[]];
  /**
   * Lifetime in days, fixed at creation. Omit or null for a key that does not expire.
   */
  expiresInDays?: number | null;
}
/**
 * Returned once at creation. This is the only time the secret is available.
 */
export interface CreateApiKeyResponse {
  apiKey: ApiKey;
  /**
   * The full key. Never stored in plaintext and never retrievable again.
   */
  secret: string;
}
