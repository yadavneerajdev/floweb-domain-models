"""
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
    "WebSocketResponse", "RunResponse", "ListSessionsResponse", "EngineStatusResponse",
    "RecordingResponse", "RecordingStatusResponse", "ListRecordingsResponse"
]
