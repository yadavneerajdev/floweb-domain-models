import { Flow, PerformanceTest, EnvironmentAndGlobalVariablesConfiguration } from '../types';

// Test Flow type
const testFlow: Flow = {
  id: 'test-flow-1',
  name: 'Test Flow',
  description: 'A test flow for validation',
  type: 'flow',
  actions: [],
  edges: [],
  createdAt: '2024-01-01T00:00:00Z',
  updatedAt: '2024-01-01T00:00:00Z'
};

// Test Performance Test type
const testPerformance: PerformanceTest = {
  metadata: {
    id: 'test-perf-1',
    name: 'Test Performance',
    description: 'A test performance configuration',
    tags: [],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    createdBy: 'test-user',
    version: 1,
    status: 'draft'
  },
  recordedRequests: [],
  loadTestConfig: {
    targetUrl: 'https://example.com',
    duration: 60,
    virtualUsers: 10,
    rampUpTime: 10,
    includeRequests: [],
    thresholds: {
      maxResponseTime: 1000,
      maxErrorRate: 0.05,
      minThroughput: 10
    }
  }
};

// Test Environment type
const testEnvironment: EnvironmentAndGlobalVariablesConfiguration = {
  environments: [],
  globalVariables: []
};

describe('Domain Models Validation', () => {
  test('Flow type validation', () => {
    expect(testFlow.id).toBe('test-flow-1');
    expect(testFlow.name).toBe('Test Flow');
    expect(testFlow.type).toBe('flow');
  });

  test('PerformanceTest type validation', () => {
    expect(testPerformance.metadata.id).toBe('test-perf-1');
    expect(testPerformance.metadata.name).toBe('Test Performance');
    expect(testPerformance.loadTestConfig.virtualUsers).toBe(10);
  });

  test('Environment type validation', () => {
    expect(testEnvironment.environments).toEqual([]);
    expect(testEnvironment.globalVariables).toEqual([]);
  });
});