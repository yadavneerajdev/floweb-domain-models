// Schema-conformance and casing-contract tests.
// Positive: every example validates against its target $def.
// Negative: flipping the casing of a required field breaks validation, which
// is how we pin the (deliberately mixed) casing contract per surface.
// eslint-disable-next-line @typescript-eslint/no-var-requires
const {
  EXAMPLE_FOR,
  compileSchema,
  loadExample,
} = require("../scripts/validate-schemas.cjs");

describe("schema conformance — examples validate against their $def", () => {
  for (const [schemaFile, { example, def }] of Object.entries(EXAMPLE_FOR) as [
    string,
    { example: string; def: string | null }
  ][]) {
    test(`${schemaFile} <- ${example}`, () => {
      const validate = compileSchema(schemaFile, def);
      const ok = validate(loadExample(example));
      if (!ok) throw new Error(JSON.stringify(validate.errors, null, 2));
      expect(ok).toBe(true);
    });
  }
});

describe("casing contract — wrong-cased required field must fail", () => {
  // Each case flips ONE required field to the opposite casing; the model on that
  // surface must reject it (the correct-cased required field goes missing).
  const cases: Array<{
    schemaFile: string;
    def: string;
    build: () => Record<string, unknown>;
    note: string;
  }> = [
    {
      schemaFile: "action-configs.json",
      def: "ClickConfig",
      note: "ClickConfig is camelCase; snake_case 'selector' is fine (same word) so flip a real one",
      build: () => ({ Selector: "#x" }), // wrong-cased -> required 'selector' missing
    },
    {
      schemaFile: "execution-results.json",
      def: "ActionResult",
      note: "ActionResult body is snake_case; camelCase nodeId must fail",
      build: () => ({
        nodeId: "a1",
        action_type: "click",
        config: {},
        start_time: 1,
        end_time: 2,
        duration_seconds: 1,
        success: true,
        message: "ok",
      }),
    },
    {
      schemaFile: "websocket-communication.json",
      def: "RunCommand",
      note: "RunCommand.flow is required; wrong-cased 'Flow' must fail",
      build: () => ({ command: "run", Flow: { id: "f", name: "n", actions: [], edges: [] } }),
    },
    {
      schemaFile: "debug.json",
      def: "DebugSession",
      note: "DebugSession is camelCase; snake_case session_id must fail",
      build: () => ({
        session_id: "s1",
        flowId: "f1",
        breakpoints: [],
        state: "ready",
      }),
    },
  ];

  for (const c of cases) {
    test(`${c.schemaFile} ${c.def}: ${c.note}`, () => {
      const validate = compileSchema(c.schemaFile, c.def);
      expect(validate(c.build())).toBe(false);
    });
  }
});
