import { describe, expect, it } from "vitest";
import type { HostConfig } from "#internal/auth/auth-types";
import { createEnigmaSession } from "../enigma-session";
import { createProgressMonitor } from "../progress-monitor";

describe("enigma session", () => {
  it("should block WebSocket connection when noauth auth type is configured", async () => {
    const hostConfig: HostConfig<"noauth"> = {
      authType: "noauth",
      host: "test-host.com",
    };

    const props = {
      appId: "test-app-id",
      hostConfig,
    };

    // Should throw an error when trying to create WebSocket with noauth auth
    await expect(createEnigmaSession(props, createProgressMonitor([]))).rejects.toThrow(
      "WebSocket connections are not allowed with noauth auth module",
    );
  });
});
