# Floweb Domain Models - Build and Development Makefile

.PHONY: help install clean build test validate generate docs publish

# Default target
help:
	@echo "Floweb Domain Models - Build and Development Commands"
	@echo ""
	@echo "Development:"
	@echo "  install      Install development dependencies"
	@echo "  generate     Generate code from schemas"
	@echo "  validate     Validate schemas and examples"
	@echo "  test         Run tests"
	@echo "  docs         Generate documentation"
	@echo ""
	@echo "Building:"
	@echo "  build-ts     Build TypeScript package"
	@echo "  build-py     Build Python package"
	@echo "  build        Build both packages"
	@echo ""
	@echo "Publishing:"
	@echo "  publish-ts   Publish TypeScript package to NPM"
	@echo "  publish-py   Publish Python package to PyPI"
	@echo "  publish      Publish both packages"
	@echo ""
	@echo "Maintenance:"
	@echo "  clean        Clean build artifacts"
	@echo "  lint         Run linters"
	@echo "  format       Format code"

# Installation
install:
	@echo "Installing development dependencies..."
	npm install
	pip install -e ".[dev]"

install-ts:
	@echo "Installing TypeScript dependencies..."
	npm install

install-py:
	@echo "Installing Python dependencies..."
	pip install -e ".[dev]"

# Code Generation
generate: generate-ts generate-py

generate-ts:
	@echo "Generating TypeScript types from schemas..."
	npx json-schema-to-typescript \
		--style.prettier \
		--style.singleQuote \
		--style.semi \
		schemas/*.json \
		--out-dir types/

generate-py:
	@echo "Generating Python models from schemas..."
	@for schema in schemas/*.json; do \
		filename=$$(basename "$$schema" .json); \
		echo "Generating $$filename.py..."; \
		datamodel-codegen \
			--input $$schema \
			--output src/floweb_domain_models/$$filename.py \
			--input-file-type jsonschema \
			--output-model-type pydantic_v2.BaseModel \
			--target-python-version 3.8 \
			--use-schema-description \
			--use-field-description \
			--treat-dot-as-module \
			--use-double-quotes; \
	done

# Validation
validate: validate-schemas validate-examples

validate-schemas:
	@echo "Validating JSON schemas..."
	npx ajv validate -s schemas/*.json --valid

validate-examples:
	@echo "Validating examples against schemas..."
	@npx ajv validate -s schemas/flow.json -d examples/flow-example.json
	@npx ajv validate -s schemas/performance-test.json -d examples/performance-test-example.json
	@npx ajv validate -s schemas/environment.json -d examples/environment-example.json

# Testing
test: test-ts test-py

test-ts:
	@echo "Running TypeScript tests..."
	npm test

test-py:
	@echo "Running Python tests..."
	pytest tests/

# Building
build: build-ts build-py

build-ts:
	@echo "Building TypeScript package..."
	npm run build

build-py:
	@echo "Building Python package..."
	python -m build

# Documentation
docs: docs-ts docs-py

docs-ts:
	@echo "Generating TypeScript documentation..."
	npx typedoc

docs-py:
	@echo "Generating Python documentation..."
	sphinx-build -b html docs/ docs/_build/html

# Publishing
publish: publish-ts publish-py

publish-ts:
	@echo "Publishing TypeScript package to NPM..."
	npm publish

publish-py:
	@echo "Publishing Python package to PyPI..."
	twine upload dist/*

# Maintenance
clean:
	@echo "Cleaning build artifacts..."
	rm -rf dist/ build/ *.egg-info/
	rm -rf types/*.d.ts types/*.js
	rm -rf docs/_build/
	find . -type d -name __pycache__ -exec rm -rf {} +
	find . -type f -name "*.pyc" -delete

lint: lint-ts lint-py

lint-ts:
	@echo "Linting TypeScript code..."
	npx eslint types/**/*.ts

lint-py:
	@echo "Linting Python code..."
	black --check src/
	isort --check-only src/
	mypy src/

format: format-ts format-py

format-ts:
	@echo "Formatting TypeScript code..."
	npx prettier --write types/**/*.ts

format-py:
	@echo "Formatting Python code..."
	black src/
	isort src/

# Development workflow
dev-setup: install generate validate

dev-test: validate test lint

# CI/CD targets
ci: clean install generate validate test lint build

# Utility targets
schemas:
	@echo "Available schemas:"
	@ls -1 schemas/*.json

examples:
	@echo "Available examples:"
	@ls -1 examples/*.json

stats:
	@echo "Domain Models Statistics:"
	@echo "Schemas: $$(ls schemas/*.json | wc -l)"
	@echo "Examples: $$(ls examples/*.json | wc -l)"
	@echo "TypeScript files: $$(find types/ -name "*.ts" | wc -l)"
	@echo "Python files: $$(find src/ -name "*.py" | wc -l)"