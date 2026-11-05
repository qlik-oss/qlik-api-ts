/// <reference types="vitest" />
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    exclude: ["**/node_modules/**"],
    environment: "happy-dom",
    setupFiles: ["./test/unit-test-setup.ts"],
    disableConsoleIntercept: true,
    coverage: {
      exclude: ["src/rest/**", "tools/**"],
    },
  },
});
