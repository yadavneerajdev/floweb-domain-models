"""
Setup script for floweb-domain-models.
"""

from setuptools import setup, find_packages

with open("README.md", "r", encoding="utf-8") as fh:
    long_description = fh.read()

setup(
    name="floweb-domain-models",
    version="1.0.7",
    author="Floweb Team",
    author_email="neeraj@floweb.com",
    description="Domain models for Floweb Desktop - centralized Python models",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/floweb/floweb-domain-models",
    packages=["floweb_models"],
    package_dir={"floweb_models": "python-models/floweb_models"},
    package_data={
        "floweb_models": ["schemas/*.json", "py.typed"],
    },
    include_package_data=True,
    classifiers=[
        "Development Status :: 4 - Beta",
        "Intended Audience :: Developers",
        "License :: Other/Proprietary License",
        "Operating System :: OS Independent",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
        "Programming Language :: Python :: 3.10",
        "Programming Language :: Python :: 3.11",
        "Programming Language :: Python :: 3.12",
        "Topic :: Software Development :: Libraries :: Python Modules",
        "Topic :: Software Development :: Testing",
        "Topic :: Software Development :: Quality Assurance",
    ],
    python_requires=">=3.8",
    install_requires=[
        "pydantic>=2.0.0",
        "typing-extensions>=4.0.0",
    ],
    extras_require={
        "dev": [
            "datamodel-code-generator>=0.21.0",
            "jsonschema>=4.0.0",
            "pytest>=7.0.0",
            "black>=23.0.0",
            "isort>=5.0.0",
            "mypy>=1.0.0",
        ],
        "docs": [
            "sphinx>=5.0.0",
            "sphinx-rtd-theme>=1.2.0",
        ],
    },
)