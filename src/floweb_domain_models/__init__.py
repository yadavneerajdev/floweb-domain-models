"""
Floweb Domain Models - Python Package

Centralized domain models for Floweb Desktop, providing Pydantic models
that ensure type safety and validation across the Python backend.
"""

from .flow import (
    Flow,
    Action,
    ActionData,
    Edge,
    Position,
    Zoom,
    Variable,
    FlowVariables,
    FlowParameters,
    Environment,
    EnvironmentVariable,
    GlobalVariable,
)

# Import from hyphenated filenames using importlib
import importlib
_execution_results = importlib.import_module(".execution-results", package="floweb_domain_models")
ActionResult = _execution_results.ActionResult
FlowReport = _execution_results.FlowReport

_performance_test = importlib.import_module(".performance-test", package="floweb_domain_models")
PerformanceTest = _performance_test.PerformanceTest
PerformanceTestMetadata = _performance_test.PerformanceTestMetadata
RecordedRequest = _performance_test.RecordedRequest
RecordedResponse = _performance_test.RecordedResponse
ResponseTiming = _performance_test.ResponseTiming
LoadTestConfiguration = _performance_test.LoadTestConfiguration
LoadTestThresholds = _performance_test.LoadTestThresholds
AuthConfig = _performance_test.AuthConfig
TokenRefreshConfig = _performance_test.TokenRefreshConfig
CredentialRotationConfig = _performance_test.CredentialRotationConfig
PerformanceTestResults = _performance_test.PerformanceTestResults
AggregateMetrics = _performance_test.AggregateMetrics
ResponseTimeMetrics = _performance_test.ResponseTimeMetrics
BandwidthMetrics = _performance_test.BandwidthMetrics
RequestResults = _performance_test.RequestResults
RequestExecution = _performance_test.RequestExecution
TimelineDataPoint = _performance_test.TimelineDataPoint

_action_configs = importlib.import_module(".action-configs", package="floweb_domain_models")
BaseActionConfig = _action_configs.BaseActionConfig
ClickConfig = _action_configs.ClickConfig
InputConfig = _action_configs.InputConfig
SendKeysConfig = _action_configs.SendKeysConfig
NavigateConfig = _action_configs.NavigateConfig
WaitConfig = _action_configs.WaitConfig
ScrollConfig = _action_configs.ScrollConfig
AssertionConfig = _action_configs.AssertionConfig
AssertVisibleConfig = _action_configs.AssertVisibleConfig
ScreenshotConfig = _action_configs.ScreenshotConfig
FormFillConfig = _action_configs.FormFillConfig
FormField = _action_configs.FormField
FormFieldOption = _action_configs.FormFieldOption
ClearInputConfig = _action_configs.ClearInputConfig
OpenNewTabConfig = _action_configs.OpenNewTabConfig
SwitchTabConfig = _action_configs.SwitchTabConfig
GoBackConfig = _action_configs.GoBackConfig
GoForwardConfig = _action_configs.GoForwardConfig
RefreshConfig = _action_configs.RefreshConfig
GetPageInfoConfig = _action_configs.GetPageInfoConfig
SetViewportConfig = _action_configs.SetViewportConfig
JunctionConfig = _action_configs.JunctionConfig
ApiCallConfig = _action_configs.ApiCallConfig
ConditionalConfig = _action_configs.ConditionalConfig
LoopConfig = _action_configs.LoopConfig
DatabaseQueryConfig = _action_configs.DatabaseQueryConfig
DatabaseInsertConfig = _action_configs.DatabaseInsertConfig
CustomCodeConfig = _action_configs.CustomCodeConfig
DragAndDropConfig = _action_configs.DragAndDropConfig
CallToFlowConfig = _action_configs.CallToFlowConfig
SwitchToFrameConfig = _action_configs.SwitchToFrameConfig
ExitFrameConfig = _action_configs.ExitFrameConfig
GetElementPropertiesConfig = _action_configs.GetElementPropertiesConfig
HandlePopupConfig = _action_configs.HandlePopupConfig
FileUploadConfig = _action_configs.FileUploadConfig
FileDownloadConfig = _action_configs.FileDownloadConfig
SubflowConfig = _action_configs.SubflowConfig

# Import parallel execution models
_parallel_execution = importlib.import_module(".parallel-execution", package="floweb_domain_models")
FlowExecutionRequest = _parallel_execution.FlowExecutionRequest
FlowExecutionResult = _parallel_execution.FlowExecutionResult
ParallelTestsRequest = _parallel_execution.ParallelTestsRequest
ParallelTestsResult = _parallel_execution.ParallelTestsResult

# Import debug models (only what exists)
_debug = importlib.import_module(".debug", package="floweb_domain_models")
DebugState = _debug.DebugState
PauseReason = _debug.PauseReason
Breakpoint = _debug.Breakpoint
DebugExecutionInfo = _debug.DebugExecutionInfo
DebugSession = _debug.DebugSession
DebugActionUpdate = _debug.DebugActionUpdate

# Import WebSocket models
_websocket = importlib.import_module(".websocket-communication", package="floweb_domain_models")
DebugRunCommand = _websocket.DebugRunCommand
DebugStepCommand = _websocket.DebugStepCommand
DebugContinueCommand = _websocket.DebugContinueCommand
DebugPauseCommand = _websocket.DebugPauseCommand
DebugStopCommand = _websocket.DebugStopCommand
DebugResponse = _websocket.DebugResponse

from .environment import (
    Environment as EnvEnvironment,
    Variable as EnvVariable,
    GlobalVariable as EnvGlobalVariable,
)

__version__ = "1.0.0"
__author__ = "Floweb Team"
__email__ = "team@floweb.com"

__all__ = [
    # Flow Models
    "Flow",
    "Action",
    "ActionData",
    "Edge",
    "Position",
    "Zoom",
    "Variable",
    "FlowVariables",
    "FlowParameters",
    "Environment",
    "EnvironmentVariable",
    "GlobalVariable",
    "ActionResult",
    "FlowReport",

    # Performance Test Models
    "PerformanceTest",
    "PerformanceTestMetadata",
    "RecordedRequest",
    "RecordedResponse",
    "ResponseTiming",
    "LoadTestConfiguration",
    "LoadTestThresholds",
    "AuthConfig",
    "TokenRefreshConfig",
    "CredentialRotationConfig",
    "PerformanceTestResults",
    "AggregateMetrics",
    "ResponseTimeMetrics",
    "BandwidthMetrics",
    "RequestResults",
    "RequestExecution",
    "TimelineDataPoint",

    # Action Configs
    "BaseActionConfig",
    "ClickConfig",
    "InputConfig",
    "SendKeysConfig",
    "NavigateConfig",
    "WaitConfig",
    "ScrollConfig",
    "AssertionConfig",
    "AssertVisibleConfig",
    "ScreenshotConfig",
    "FormFillConfig",
    "FormField",
    "FormFieldOption",
    "ClearInputConfig",
    "OpenNewTabConfig",
    "SwitchTabConfig",
    "GoBackConfig",
    "GoForwardConfig",
    "RefreshConfig",
    "GetPageInfoConfig",
    "SetViewportConfig",
    "JunctionConfig",
    "ApiCallConfig",
    "ConditionalConfig",
    "LoopConfig",
    "DatabaseQueryConfig",
    "DatabaseInsertConfig",
    "CustomCodeConfig",
    "DragAndDropConfig",
    "CallToFlowConfig",
    "SwitchToFrameConfig",
    "ExitFrameConfig",
    "GetElementPropertiesConfig",
    "HandlePopupConfig",
    "FileUploadConfig",
    "FileDownloadConfig",
    "SubflowConfig",

    # Environment Models
    "EnvEnvironment",
    "EnvVariable",
    "EnvGlobalVariable",
    
    # Parallel Execution Models
    "FlowExecutionRequest",
    "FlowExecutionResult",
    "ParallelTestsRequest",
    "ParallelTestsResult",
    
    # Debug Models
    "DebugState",
    "PauseReason",
    "Breakpoint",
    "DebugExecutionInfo",
    "DebugSession",
    "DebugActionUpdate",
    "DebugRunCommand",
    "DebugStepCommand",
    "DebugContinueCommand",
    "DebugPauseCommand",
    "DebugStopCommand",
    "DebugResponse",
]