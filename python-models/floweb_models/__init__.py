"""
Floweb Domain Models - Python Package
Shared Pydantic models for backend.
"""

from .flow import *
from .environment import *

# Import parallel execution models
try:
    from .parallel_execution import (
        FlowExecutionRequest,
        FlowExecutionResult,
        ParallelTestsRequest,
        ParallelTestsResult,
    )
    _has_parallel = True
except ImportError:
    _has_parallel = False

# Import action configs
try:
    from .action_configs import (
        BaseActionConfig,
        ClickConfig,
        InputConfig,
        SendKeysConfig,
        NavigateConfig,
        WaitConfig,
        ScrollConfig,
        ScreenshotConfig,
        AssertionConfig,
        AssertVisibleConfig,
        FormField,
        FormFieldOption,
        FormFillConfig,
        ClearInputConfig,
        OpenNewTabConfig,
        SwitchTabConfig,
        GoBackConfig,
        GoForwardConfig,
        RefreshConfig,
        GetPageInfoConfig,
        JunctionConfig,
        ApiCallConfig,
        ConditionalConfig,
        LoopConfig,
        DatabaseQueryConfig,
        DatabaseInsertConfig,
        CustomCodeConfig,
        DragAndDropConfig,
        CallToFlowConfig,
        SwitchToFrameConfig,
        ExitFrameConfig,
        SetViewportConfig,
        GetElementPropertiesConfig,
        HandlePopupConfig,
        FileUploadConfig,
        FileDownloadConfig,
        SubflowConfig,
    )
    _has_action_configs = True
except ImportError:
    _has_action_configs = False

# Import websocket models
try:
    from .websocket_communication import (
        RunCommand,
        RecordCommand,
        StopCommand,
        WebSocketResponse,
    )
    _has_websocket = True
except ImportError:
    _has_websocket = False

__all__ = [
    # Flow models
    "Flow",
    "Action",
    "Edge",
    "ActionData",
    "Position",
    "Zoom",
    "FlowVariables",
    "Variable",
    "FlowParameters",
    "Parameter",
    # Environment
    "Environment",
    "GlobalVariable",
    "EnvironmentVariable",
]

# Add parallel execution exports if available
if _has_parallel:
    __all__.extend([
        "FlowExecutionRequest",
        "FlowExecutionResult",
        "ParallelTestsRequest",
        "ParallelTestsResult",
    ])

# Add action config exports if available
if _has_action_configs:
    __all__.extend([
        "BaseActionConfig",
        "ClickConfig",
        "InputConfig",
        "SendKeysConfig",
        "NavigateConfig",
        "WaitConfig",
        "ScrollConfig",
        "ScreenshotConfig",
        "AssertionConfig",
        "AssertVisibleConfig",
        "FormField",
        "FormFieldOption",
        "FormFillConfig",
        "ClearInputConfig",
        "OpenNewTabConfig",
        "SwitchTabConfig",
        "GoBackConfig",
        "GoForwardConfig",
        "RefreshConfig",
        "GetPageInfoConfig",
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
        "SetViewportConfig",
        "GetElementPropertiesConfig",
        "HandlePopupConfig",
        "FileUploadConfig",
        "FileDownloadConfig",
        "SubflowConfig",
    ])

# Add websocket exports if available
if _has_websocket:
    __all__.extend([
        "RunCommand",
        "RecordCommand",
        "StopCommand",
        "WebSocketResponse",
    ])

