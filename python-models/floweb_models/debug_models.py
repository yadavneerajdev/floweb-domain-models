"""Debug-related domain models shared by backend and frontend contracts."""

from __future__ import annotations

from enum import StrEnum
from typing import Any, Literal

from pydantic import BaseModel, ConfigDict


class DebugState(StrEnum):
    """Current debug execution state."""

    ready = "ready"
    running = "running"
    paused = "paused"
    stepping = "stepping"
    completed = "completed"
    failed = "failed"
    stopped = "stopped"


class PauseReason(StrEnum):
    """Reason debug execution paused."""

    breakpoint = "breakpoint"
    manual = "manual"
    step = "step"
    error = "error"


class Breakpoint(BaseModel):
    """Breakpoint configuration for a flow node."""

    model_config = ConfigDict(populate_by_name=True)

    node_id: str
    enabled: bool = True


class DebugExecutionInfo(BaseModel):
    """Runtime debug execution snapshot."""

    model_config = ConfigDict(populate_by_name=True)

    session_id: str
    flow_id: str
    state: DebugState
    current_action_id: str | None = None
    current_action_index: int = 0
    executed_actions: list[str] | None = None


class DebugSession(BaseModel):
    """Debug session metadata and state."""

    model_config = ConfigDict(populate_by_name=True)

    session_id: str
    flow_id: str
    state: DebugState = DebugState.ready
    breakpoints: list[str] | None = None
    current_action_id: str | None = None
    current_action_index: int = 0
    created_at: float | None = None
    last_updated: float | None = None


class DebugActionUpdate(BaseModel):
    """Incremental debug action status update."""

    model_config = ConfigDict(populate_by_name=True)

    session_id: str
    node_id: str
    action_index: int
    action_type: str | None = None
    status: Literal["started", "completed", "failed", "skipped"]
    result: dict[str, Any] | None = None


class DebugRunCommand(BaseModel):
    """Start debug execution for a flow."""

    model_config = ConfigDict(populate_by_name=True)

    command: Literal["debug_run"] = "debug_run"
    session_id: str
    flow: dict[str, Any]
    breakpoints: list[str] | None = None
    browser: str | None = None
    headless: bool = False
    incognito: bool = False


class DebugStepCommand(BaseModel):
    """Execute one action and pause again."""

    model_config = ConfigDict(populate_by_name=True)

    command: Literal["debug_step"] = "debug_step"
    session_id: str


class DebugContinueCommand(BaseModel):
    """Continue execution until next pause condition."""

    model_config = ConfigDict(populate_by_name=True)

    command: Literal["debug_continue"] = "debug_continue"
    session_id: str


class DebugPauseCommand(BaseModel):
    """Request pause for a running debug session."""

    model_config = ConfigDict(populate_by_name=True)

    command: Literal["debug_pause"] = "debug_pause"
    session_id: str


class DebugStopCommand(BaseModel):
    """Stop a running debug session."""

    model_config = ConfigDict(populate_by_name=True)

    command: Literal["debug_stop"] = "debug_stop"
    session_id: str


class DebugResponse(BaseModel):
    """Generic debug websocket response model."""

    model_config = ConfigDict(populate_by_name=True)

    command: str
    success: bool
    session_id: str | None = None
    message: str | None = None
    data: dict[str, Any] | None = None
