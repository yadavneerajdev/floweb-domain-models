/* eslint-disable */
// GENERATED from schemas/ by scripts/generate-ts.cjs — do not edit by hand.

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
  Environment?: Environment;
  GlobalVariable?: GlobalVariable;
  Variable?: Variable;
}
/**
 * An environment configuration with its variables
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
  isDefault: boolean;
  /**
   * ISO 8601 timestamp when the environment was created
   */
  createdAt: string;
  /**
   * ISO 8601 timestamp when the environment was last updated
   */
  updatedAt: string;
}
/**
 * An environment-specific variable
 */
export interface Variable {
  /**
   * Unique identifier for the variable within this environment
   */
  id: string;
  /**
   * Variable name used in flows
   */
  name: string;
  /**
   * The variable's value
   */
  value: string;
  /**
   * Data type of the variable
   */
  type: "string" | "number" | "boolean" | "url" | "file" | "json" | "array";
  /**
   * Description of the variable's purpose
   */
  description?: string;
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
   * The variable's value
   */
  value: string;
  /**
   * Data type of the variable
   */
  type: "string" | "number" | "boolean" | "url" | "file" | "json" | "array";
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
