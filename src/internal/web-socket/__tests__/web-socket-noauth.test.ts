import { describe, expect, it, vi } from "vitest";
import type { HostConfig } from "#internal/auth/auth-types";
import { createWebSocket } from "../web-socket-functions";

describe("web-socket functions", () => {
  it("should block WebSocket connection when noauth auth type is configured", async () => {
    const hostConfig: HostConfig<"noauth"> = {
      authType: "noauth",
      host: "test-host.com",
    };

    const webSocketProps = {
      relativePath: "/test-path",
      hostConfig,
      listeners: {
        onMessage: vi.fn(),
        onClose: vi.fn(),
      },
    };

    // Should throw an error when trying to create WebSocket with noauth auth
    await expect(createWebSocket(webSocketProps)).rejects.toThrow(
      "WebSocket connections are not allowed with noauth auth module",
    );
  });
});
