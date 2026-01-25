from setuptools import setup, find_packages

setup(
    name="floweb-domain-models",
    version="1.0.0",
    description="Floweb Domain Models - Python Pydantic Models",
    packages=find_packages(),
    install_requires=[
        "pydantic>=2.0.0",
    ],
    python_requires=">=3.9",
)