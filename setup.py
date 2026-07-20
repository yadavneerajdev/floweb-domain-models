"""Shim so legacy tooling can still `pip install` / `pip install -e` this package.

All packaging metadata is declared in pyproject.toml ([project] + [tool.setuptools]);
this file only delegates to setuptools so both PEP 517/660 and older invocations work.
"""

from setuptools import setup

setup()
