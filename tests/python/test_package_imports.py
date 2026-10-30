"""The generated floweb_models package must import cleanly.

Guards against regressions like the stray `from engine.server.ws.handlers import
flow` that previously broke the whole package import (dropped by Phase 2 regen).
"""
import importlib
import sys
from pathlib import Path

PKG_PARENT = Path(__file__).resolve().parents[2] / "python-models"


def test_package_imports_and_exports_key_models():
    sys.path.insert(0, str(PKG_PARENT))
    m = importlib.import_module("floweb_models")
    for name in [
        "Flow",
        "ClickConfig",
        "FlowReport",
        "ParallelTestsRequest",
        "RunCommand",
        "FlowValidationResult",
        "DebugSession",
        "PerformanceTest",
        "EnvironmentAndGlobalVariablesConfiguration",
        "FlowebActionBaseModel",
    ]:
        assert hasattr(m, name), f"floweb_models missing {name}"
        assert name in m.__all__, f"{name} not exported in __all__"

    # Action configs inherit the coercion base so string fields never crash.
    assert m.BaseActionConfig.__mro__[1] is m.FlowebActionBaseModel
