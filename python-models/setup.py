from setuptools import setup, find_packages

setup(
    name="floweb-models",
    version="1.0.21",
    description="Shared Floweb Python domain models",
    packages=find_packages(include=["floweb_models", "floweb_models.*"]),
    include_package_data=True,
    install_requires=[
        "pydantic>=2.0.0",
    ],
    python_requires=">=3.9",
)
