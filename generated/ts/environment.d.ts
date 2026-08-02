/* eslint-disable */
// GENERATED from schemas/ by scripts/generate-ts.cjs — do not edit by hand.

/**
 * Named output format for a `date` variable. `custom` defers to the variable's dateFormatPattern.
 */
export type DateFormatPreset =
  | "iso"
  | "iso-datetime"
  | "rfc3339"
  | "date-slash-dmy"
  | "date-slash-mdy"
  | "date-dash-ymd"
  | "date-medium"
  | "date-long"
  | "datetime-friendly"
  | "time-24h"
  | "unix-seconds"
  | "unix-millis"
  | "custom";

export interface EnvironmentandGlobalVariablesConfigurationSchema {
  /**
   * List of available environments
   *
   * @minItems 0
   */
  environments?: Environment[];
  /**
   * List of global variables available across all environments
   *
   * @minItems 0
   */
  globalVariables?: GlobalVariable[];
  /**
   * ID of the currently selected environment
   */
  selectedEnvironmentId?: string;
  DateFormatPreset?: DateFormatPreset;
  Environment?: Environment;
  GlobalVariable?: GlobalVariable;
  Variable?: Variable;
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
  variables?: Variable[];
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
  /**
   * Data type of the variable
   */
  type:
    | "string"
    | "number"
    | "boolean"
    | "object"
    | "array"
    | "url"
    | "file"
    | "json"
    | "web-identifier"
    | "image"
    | "secret"
    | "date"
    | "code"
    | "email";
  /**
   * The variable's value; any JSON value is allowed (2026-07 decision: runtime stores structured values, aligned with TS JsonValue rather than the old string-only contract)
   */
  value: {
    [k: string]: unknown;
  };
  /**
   * Output format applied when a `date` variable is substituted into an action. The stored value stays canonical ISO-8601; this only affects rendering. Either a DateFormatPreset id or, when set to `custom`, the pattern in `dateFormatPattern`. Ignored for other types.
   */
  dateFormat?: string;
  /**
   * Token pattern used when `dateFormat` is `custom`, e.g. `DD MMM YYYY HH:mm`.
   */
  dateFormatPattern?: string;
  /**
   * Description of the variable's purpose
   */
  description?: string;
  /**
   * Whether this is an output variable (flow parameters)
   */
  isOutput?: boolean;
  /**
   * When true, the value is a secret: write-only for UI clients (masked in API responses, never returned as plaintext), redacted from reports and logs, and sent in plaintext only to the engine runtime context. Set automatically when type is `secret`.
   */
  secret?: boolean;
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
  /**
   * Data type of the variable
   */
  type:
    | "string"
    | "number"
    | "boolean"
    | "object"
    | "array"
    | "url"
    | "file"
    | "json"
    | "web-identifier"
    | "image"
    | "secret"
    | "date"
    | "code"
    | "email";
  /**
   * The variable's value; any JSON value is allowed (2026-07 decision: runtime stores structured values, aligned with TS JsonValue rather than the old string-only contract)
   */
  value: {
    [k: string]: unknown;
  };
  /**
   * Output format applied when a `date` variable is substituted into an action. The stored value stays canonical ISO-8601; this only affects rendering. Either a DateFormatPreset id or, when set to `custom`, the pattern in `dateFormatPattern`. Ignored for other types.
   */
  dateFormat?: string;
  /**
   * Token pattern used when `dateFormat` is `custom`, e.g. `DD MMM YYYY HH:mm`.
   */
  dateFormatPattern?: string;
  /**
   * Description of the variable's purpose
   */
  description?: string;
  /**
   * When true, the value is a secret: write-only for UI clients (masked in API responses, never returned as plaintext), redacted from reports and logs, and sent in plaintext only to the engine runtime context. Set automatically when type is `secret`.
   */
  secret?: boolean;
  /**
   * ISO 8601 timestamp when the variable was created
   */
  createdAt?: string;
  /**
   * ISO 8601 timestamp when the variable was last updated
   */
  updatedAt?: string;
}
