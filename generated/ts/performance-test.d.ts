/* eslint-disable */
// GENERATED from schemas/ by scripts/generate-ts.cjs — do not edit by hand.

export interface PerformanceTestSchema {
  metadata?: PerformanceTestMetadata;
  /**
   * HTTP requests recorded during test creation
   */
  recordedRequests?: RecordedRequest[];
  loadTestConfig?: LoadTestConfiguration;
  /**
   * URL patterns for filtering recorded requests
   */
  filterPatterns?: string[];
  /**
   * Restrict recording to same domain only
   */
  onlySameDomain?: boolean;
  results?: PerformanceTestResults;
  RecordedRequest?: RecordedRequest;
  RecordedResponse?: RecordedResponse1;
  ResponseTiming?: ResponseTiming1;
  PerformanceTestMetadata?: PerformanceTestMetadata1;
  AuthConfig?: AuthConfig1;
  TokenRefreshConfig?: TokenRefreshConfig1;
  CredentialRotationConfig?: CredentialRotationConfig1;
  LoadTestConfiguration?: LoadTestConfiguration1;
  LoadTestThresholds?: LoadTestThresholds1;
  PerformanceTestResults?: PerformanceTestResults1;
  AggregateMetrics?: AggregateMetrics1;
  ResponseTimeMetrics?: ResponseTimeMetrics1;
  BandwidthMetrics?: BandwidthMetrics1;
  RequestResults?: RequestResults;
  RequestExecution?: RequestExecution;
  TimelineDataPoint?: TimelineDataPoint;
}
/**
 * Test metadata and configuration
 */
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
/**
 * Load test execution configuration
 */
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
  refresh_body?: {
    [k: string]: unknown;
  };
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
/**
 * Results from load test execution
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
export interface RecordedResponse1 {
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
export interface ResponseTiming1 {
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
export interface PerformanceTestMetadata1 {
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
export interface AuthConfig1 {
  token_refresh?: TokenRefreshConfig;
  credential_rotation?: CredentialRotationConfig;
  /**
   * Header override configuration
   */
  header_override?: {
    [k: string]: string;
  };
}
export interface TokenRefreshConfig1 {
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
  refresh_body?: {
    [k: string]: unknown;
  };
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
export interface CredentialRotationConfig1 {
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
export interface LoadTestConfiguration1 {
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
export interface LoadTestThresholds1 {
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
export interface PerformanceTestResults1 {
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
export interface AggregateMetrics1 {
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
export interface ResponseTimeMetrics1 {
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
export interface BandwidthMetrics1 {
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
