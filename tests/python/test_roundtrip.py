"""Round-trip fixtures through pydantic models generated from the schemas.

Phase 1 verification: the schemas must regenerate models that accept real
payloads and survive a validate -> dump -> re-validate cycle. Models are
generated fresh from `schemas/` into a temp package so the test exercises the
schemas (the Phase 1 deliverable), independent of the committed models (which
carry a stray backend import that breaks their package import until Phase 2).
"""
from __future__ import annotations

import importlib
import shutil
import subprocess
import sys
from pathlib import Path

import pytest

REPO = Path(__file__).resolve().parents[2]
SCHEMAS = REPO / "schemas"
EXAMPLES = REPO / "examples"

# (example file, generated module, class name)
CASES = [
    ("flow-example.json", "flow", "Flow"),
    ("environment-example.json", "environment", "EnvironmentAndGlobalVariablesConfiguration"),
    ("performance-test-example.json", "performance_test", "PerformanceTest"),
    ("action-configs-example.json", "action_configs", "ClickConfig"),
    ("execution-results-example.json", "execution_results", "FlowReport"),
    ("parallel-execution-example.json", "parallel_execution", "ParallelTestsRequest"),
    ("websocket-communication-example.json", "websocket_communication", "RunCommand"),
    ("flow-validation-example.json", "flow_validation", "FlowValidationResult"),
    ("debug-example.json", "debug", "DebugSession"),
    ("suite-example.json", "suite", "Suite"),
    ("collab-protocol-example.json", "collab_protocol", "CollabPresence"),
    ("server-entities-example.json", "server_entities", "User"),
    ("ai-contracts-example.json", "ai_contracts", "GenerateFlowRequest"),
    ("data-lab-example.json", "data_lab", "GenerateTestsRequest"),
]

PKG = "gen_domain_models"


@pytest.fixture(scope="session")
def models(tmp_path_factory):
    if shutil.which("datamodel-codegen") is None:
        pytest.skip("datamodel-codegen not installed; codegen wiring lands in Phase 2")
    out = tmp_path_factory.mktemp("gen") / PKG
    result = subprocess.run(
        [
            "datamodel-codegen",
            "--input", str(SCHEMAS),
            "--input-file-type", "jsonschema",
            "--output", str(out),
            "--output-model-type", "pydantic_v2.BaseModel",
            "--target-python-version", "3.12",
            "--use-annotated",
            "--field-constraints",
        ],
        capture_output=True,
        text=True,
    )
    assert result.returncode == 0, f"codegen failed:\n{result.stderr}"
    sys.path.insert(0, str(out.parent))
    return PKG


@pytest.mark.parametrize("example_file, module, cls_name", CASES)
def test_example_roundtrips(models, example_file, module, cls_name):
    mod = importlib.import_module(f"{models}.{module}")
    cls = getattr(mod, cls_name)
    raw = (EXAMPLES / example_file).read_text()

    instance = cls.model_validate_json(raw)
    # dump -> reload must be stable (no data lost or coerced away)
    reloaded = cls.model_validate(instance.model_dump(mode="json", by_alias=True))
    assert reloaded == instance
