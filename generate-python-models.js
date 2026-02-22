#!/usr/bin/env node

/**
 * Generate Python Pydantic models from JSON schemas
 * This script generates Python models that can be used in the backend
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const schemasDir = path.join(__dirname, 'schemas');
const outputDir = path.join(__dirname, 'python-models', 'floweb_models');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Schema files to process
const schemaFiles = [
  'flow.json',
  'performance-test.json',
  'action-configs.json',
  'environment.json',
  'parallel-execution.json',
  'websocket-communication.json',
  'execution-results.json',
  'flow-validation.json',
  'debug.json'
];

// Generate Python models for each schema
schemaFiles.forEach(schemaFile => {
  const schemaPath = path.join(schemasDir, schemaFile);
  const outputFile = schemaFile.replace('.json', '.py').replace(/-/g, '_');
  const outputPath = path.join(outputDir, outputFile);

  console.log(`Generating Python model for ${schemaFile}...`);

  try {
    // Use datamodel-codegen to generate Pydantic models
    const command = `datamodel-codegen --input ${schemaPath} --output ${outputPath} --input-file-type jsonschema --output-model-type pydantic_v2.BaseModel --target-python-version 3.12 --use-schema-description --use-field-description --use-title-as-name --allow-population-by-field-name --use-annotated --field-constraints`;

    execSync(command, { stdio: 'inherit' });
    console.log(`✅ Generated ${outputFile}`);
  } catch (error) {
    console.error(`❌ Failed to generate ${outputFile}:`, error.message);
  }
});

// Create __init__.py file to make it a Python package
const initContent = `"""
Floweb Domain Models - Python Pydantic Models
Auto-generated from JSON Schema definitions
"""

from .flow import *
from .performance_test import *
from .action_configs import *
from .environment import *
from .parallel_execution import *
from .websocket_communication import *
from .execution_results import *
from .flow_validation import *
from .debug import *

__all__ = [
    # Flow models
    "Flow", "Action", "ActionData", "Edge", "Position", "Zoom",
    "Variable", "FlowVariables", "FlowParameters",
    "Environment", "EnvironmentVariable", "GlobalVariable",

    # Performance test models
    "PerformanceTest", "PerformanceTestMetadata", "RecordedRequest", "RecordedResponse",
    "ResponseTiming", "LoadTestConfiguration", "LoadTestThresholds",
    "AuthConfig", "TokenRefreshConfig", "CredentialRotationConfig",
    "PerformanceTestResults", "AggregateMetrics", "ResponseTimeMetrics",
    "BandwidthMetrics", "RequestResults", "RequestExecution", "TimelineDataPoint",

    # Action configuration models (all 33 types)
    "BaseActionConfig", "ClickConfig", "InputConfig", "SendKeysConfig", "NavigateConfig",
    "WaitConfig", "ScrollConfig", "ScreenshotConfig", "AssertionConfig", "AssertVisibleConfig",
    "FormFillConfig", "ClearInputConfig", "OpenNewTabConfig", "SwitchTabConfig",
    "GoForwardConfig", "GoBackConfig", "RefreshConfig", "GetPageInfoConfig", "JunctionConfig",
    "ApiCallConfig", "ConditionalConfig", "LoopConfig", "DatabaseQueryConfig", "DatabaseInsertConfig",
    "CustomCodeConfig", "DragAndDropConfig", "CallToFlowConfig", "SwitchToFrameConfig",
    "ExitFrameConfig", "SetViewportConfig", "GetElementPropertiesConfig", "HandlePopupConfig",
    "FileUploadConfig", "FileDownloadConfig", "SubflowConfig",

    # Environment models
    "EnvironmentAndGlobalVariablesConfiguration", "Environment", "Variable", "GlobalVariable",

    # Execution results models
    "ActionResult", "FlowReport",

    # Flow validation models
    "FlowWarning", "WarningSeverity", "LoopDetectionResult",
    "FlowValidationResult", "ValidationSummary",

    # Parallel execution models
    "FlowExecutionRequest", "FlowExecutionResult",
    "ParallelTestsRequest", "ParallelTestsResult",

    # WebSocket communication models
    "WebSocketMessage", "SessionInfo",
    "RunCommand", "RecordCommand", "PauseRecordingCommand", "ResumeRecordingCommand",
    "StopRecordingCommand", "FinishRecordingCommand", "GetRecordingStatusCommand",
    "ListRecordingsCommand", "ConvertRecordingToFlowCommand", "GetRealtimeActionsCommand",
    "GetLatestRealtimeActionCommand", "StopCommand", "CloseCommand", "ListSessionsCommand",
    "CloseSessionCommand", "RestartEngineCommand", "CloseEngineCommand", "GetEngineStatusCommand",
    "StartPerformanceScanCommand", "StopPerformanceScanCommand", "RunLoadTestCommand", "StopLoadTestCommand",
    "DebugRunCommand", "DebugStepCommand", "DebugContinueCommand", "DebugPauseCommand", "DebugStopCommand",
    "WebSocketResponse", "RunResponse", "ListSessionsResponse", "EngineStatusResponse",
    "RecordingResponse", "RecordingStatusResponse", "ListRecordingsResponse", "DebugResponse",
    
    # Debug models
    "DebugState", "PauseReason", "Breakpoint", "DebugExecutionInfo",
    "DebugSession", "DebugActionUpdate"
]
`;

fs.writeFileSync(path.join(outputDir, '__init__.py'), initContent);

console.log('🎉 Python models generation complete!');
console.log(`📁 Models saved to: ${outputDir}`);
console.log('💡 Use these models in your backend by importing from the python-models package');
