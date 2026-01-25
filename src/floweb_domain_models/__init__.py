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
    ActionResult,
    FlowReport,
)

from .performance_test import (
    PerformanceTest,
    PerformanceTestMetadata,
    RecordedRequest,
    RecordedResponse,
    ResponseTiming,
    LoadTestConfiguration,
    LoadTestThresholds,
    AuthConfig,
    TokenRefreshConfig,
    CredentialRotationConfig,
    PerformanceTestResults,
    AggregateMetrics,
    ResponseTimeMetrics,
    BandwidthMetrics,
    RequestResults,
    RequestExecution,
    TimelineDataPoint,
)

from .action_configs import (
    BaseActionConfig,
    ClickConfig,
    InputConfig,
    NavigateConfig,
    WaitConfig,
    AssertionConfig,
    ScreenshotConfig,
    FormFillConfig,
    FormField,
    FormFieldOption,
    ApiCallConfig,
    DatabaseQueryConfig,
    DatabaseInsertConfig,
    FileUploadConfig,
    FileDownloadConfig,
    CustomCodeConfig,
    SubflowConfig,
)

from .environment import (
    Environment as EnvEnvironment,
    EnvironmentVariable as EnvEnvironmentVariable,
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
    "NavigateConfig",
    "WaitConfig",
    "AssertionConfig",
    "ScreenshotConfig",
    "FormFillConfig",
    "FormField",
    "FormFieldOption",
    "ApiCallConfig",
    "DatabaseQueryConfig",
    "DatabaseInsertConfig",
    "FileUploadConfig",
    "FileDownloadConfig",
    "CustomCodeConfig",
    "SubflowConfig",

    # Environment Models
    "EnvEnvironment",
    "EnvEnvironmentVariable",
    "EnvGlobalVariable",
]