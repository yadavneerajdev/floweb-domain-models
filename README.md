# Floweb Domain Models

A professional domain model package for Floweb Desktop, providing centralized type definitions and schemas for both frontend and backend applications.

## Overview

This package contains JSON Schema definitions that serve as the single source of truth for all domain objects in the Floweb ecosystem. The schemas are used to generate type-safe interfaces for TypeScript and Pydantic models for Python, ensuring consistency across the entire application stack.

## Package identity (three names, one package)

| Surface | Name | Import |
|---|---|---|
| npm | `@autoweb/domain-models` | `import { Flow } from '@autoweb/domain-models'` (JSON schemas via `@autoweb/domain-models/schemas/<name>.json`) |
| PyPI | `floweb-domain-models` | (distribution name) |
| Python import | `floweb_models` | `from floweb_models import Flow` |

**Local consumption (in this monorepo)**: consumers depend on the local package, not a registry — frontend/floweb-server use `"@autoweb/domain-models": "file:../domain-models"`; backend/floweb-ai-service install it editable (`pip install -e ../domain-models`). Builds/installs fail without it — the coupling is intentional. Generated artifacts (`index.d.ts`, `python-models/floweb_models/`, `generated/ts/`) are committed and kept fresh by the CI regen-diff gate, so no codegen runs on consumer install.

## Features

- **Single Source of Truth**: All domain models defined in JSON Schema
- **Type Safety**: Auto-generated TypeScript interfaces and Python models
- **Cross-Language Consistency**: Guaranteed compatibility between frontend and backend
- **Version Control**: Semantic versioning for model changes
- **Documentation**: Auto-generated documentation from schemas

## Domain Models

### Core Models

- **Flow**: Complete automation flow definitions with actions, edges, and variables
- **Performance Test**: Load testing configurations and results
- **Action Configurations**: 40+ action types for automation workflows
- **Environment**: Environment and global variable management

### Key Components

- **Actions**: Click, Input, Navigate, Wait, API calls, Database operations, etc.
- **Variables**: Flow parameters, environment variables, global variables
- **Results**: Execution results, performance metrics, test outcomes
- **Configuration**: Authentication, thresholds, timing, and other settings

## Usage

### TypeScript

```typescript
import { Flow, PerformanceTest, Environment } from '@floweb/domain-models';

// Type-safe usage
const flow: Flow = {
  id: 'flow-123',
  name: 'My Automation Flow',
  actions: [...],
  // ... fully typed
};
```

### Python

```python
from floweb_domain_models import Flow, PerformanceTest, Environment

# Pydantic models with validation
flow = Flow(
    id="flow-123",
    name="My Automation Flow",
    actions=[...]
)
```

## Development

### Schema Validation

All schemas are validated against JSON Schema Draft 2020-12 specification.

### Push the changes and update the npm package version

npm version patch
npm publish

### Code Generation

- TypeScript: Generated using `json-schema-to-typescript`
- Python: Generated using `datamodel-code-generator`

### Testing

Cross-language validation ensures generated models match schema expectations.

## Schema Structure

```
domain-models/
├── schemas/           # JSON Schema definitions
│   ├── flow.json
│   ├── performance-test.json
│   ├── action-configs.json
│   └── environment.json
├── types/            # Generated type definitions
├── examples/         # Sample data
└── docs/            # Generated documentations
```

## Contributing

1. Modify schemas in the `schemas/` directory
2. Run code generation scripts
3. Update tests and examples
4. Ensure cross-language compatibility

## License

Copyright 2024 Floweb. All rights reserved.