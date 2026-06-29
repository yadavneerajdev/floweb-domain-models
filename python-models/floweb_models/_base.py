"""Hand-written base for action config models.

This module is NOT code-generated. It carries cross-cutting validation that all
action configs inherit, so the behaviour survives any regeneration of
`action_configs.py`. Keep coercion / shared config here, not in the generated file.
"""

from __future__ import annotations

import json
from typing import Any, get_args

from pydantic import BaseModel, ConfigDict, model_validator


def _is_str_annotation(annotation: Any) -> bool:
    """True for `str` and `Optional[str]`/`str | None` annotations only."""
    if annotation is str:
        return True
    args = get_args(annotation)
    if args:
        non_none = [arg for arg in args if arg is not type(None)]
        return len(non_none) == 1 and non_none[0] is str
    return False


def _annotation_allows_none(annotation: Any) -> bool:
    """True when the annotation is optional (e.g. `str | None`)."""
    return type(None) in get_args(annotation)


def _stringify_value(value: Any) -> str:
    """Render any resolved value as text for a string field."""
    if isinstance(value, bool):
        return "true" if value else "false"
    if isinstance(value, (dict, list)):
        try:
            return json.dumps(value, ensure_ascii=False)
        except Exception:
            return str(value)
    return str(value)


class FlowebActionBaseModel(BaseModel):
    """
    Base for all action config models.

    Resolved variable references can be any type (dict/list/bool/number). String
    fields accept any input and render it as text (objects/arrays as JSON) instead
    of failing validation, so a resolved value never crashes an action.
    """

    model_config = ConfigDict(
        populate_by_name=True,
        coerce_numbers_to_str=True,
    )

    @model_validator(mode="before")
    @classmethod
    def _coerce_string_fields(cls, data: Any) -> Any:
        if not isinstance(data, dict):
            return data
        coerced = None
        for name, field in cls.model_fields.items():
            if not _is_str_annotation(field.annotation):
                continue
            allows_none = _annotation_allows_none(field.annotation)
            for key in (name, getattr(field, "alias", None)):
                if not key or key not in data:
                    continue
                value = data[key]
                if isinstance(value, str):
                    continue
                if value is None:
                    if allows_none:
                        continue
                    new_value = ""
                else:
                    new_value = _stringify_value(value)
                if coerced is None:
                    coerced = dict(data)
                coerced[key] = new_value
        return coerced if coerced is not None else data
