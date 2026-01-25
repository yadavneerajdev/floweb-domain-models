#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');

const schemasDir = 'schemas';
const typesDir = 'types';

if (!fs.existsSync(typesDir)) {
  fs.mkdirSync(typesDir);
}

// Generate schemas in order to avoid circular dependencies
const schemaOrder = [
  'flow.json',
  'performance-test.json',
  'action-configs.json',
  'environment.json',
  'execution-results.json',
  'flow-validation.json',
  'parallel-execution.json',
  'websocket-communication.json'
];

schemaOrder.forEach(schemaFile => {
  const schemaPath = `${schemasDir}/${schemaFile}`;
  if (!fs.existsSync(schemaPath)) {
    console.log(`⚠️  Skipping ${schemaFile} (file not found)`);
    return;
  }

  const name = schemaFile.replace('.json', '');
  const outputPath = `${typesDir}/${name}.ts`;

  console.log(`Generating ${outputPath} from ${schemaPath}...`);

  try {
    // Use --additionalProperties false to avoid issues with external refs
    const output = execSync(`npx json-schema-to-typescript "${schemaPath}" --additionalProperties false`, { encoding: 'utf8' });
    fs.writeFileSync(outputPath, output);
    console.log(`✓ Generated ${outputPath}`);
  } catch (error) {
    console.error(`✗ Failed to generate ${outputPath}:`, error.message);
    // Try without external ref resolution
    try {
      console.log(`Retrying ${outputPath} without external refs...`);
      const output = execSync(`npx json-schema-to-typescript "${schemaPath}" --additionalProperties false --ignoreExternalRefs`, { encoding: 'utf8' });
      fs.writeFileSync(outputPath, output);
      console.log(`✓ Generated ${outputPath} (without external refs)`);
    } catch (retryError) {
      console.error(`✗ Still failed to generate ${outputPath}:`, retryError.message);
    }
  }
});

console.log('TypeScript generation complete!');

console.log('TypeScript generation complete!');