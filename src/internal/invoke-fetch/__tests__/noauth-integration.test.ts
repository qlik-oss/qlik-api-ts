import { describe, it, vi } from "vitest";
import { setDefaultHostConfig } from "#internal/auth/auth-functions";
import type { HostConfig } from "#internal/auth/auth-types";
import { clearDefaultHostConfig } from "#internal/auth/internal/host-config-functions";
import { invokeFetch } from "#internal/invoke-fetch/invoke-fetch-functions";

// Mock console.info to check if it's called
const consoleSpy = vi.spyOn(console, "info").mockImplementation(() => {});

describe("noauth auth module integration", () => {
  it("should block API calls and log info message when noauth auth type is used", async ({ expect }) => {
    const hostConfig: HostConfig<"noauth"> = {
      authType: "noauth",
    };

    const result = await invokeFetch("test-api", {
      pathTemplate: "/test-endpoint",
      method: "GET",
      options: { hostConfig },
    });

    // Should return a mock response with status 204
    expect(result.status).toBe(204);
    expect(result.data).toBe(null);
    expect(result.headers).toBeInstanceOf(Headers);

    // Should log the blocking message
    expect(consoleSpy).toHaveBeenCalledWith(
      "API call blocked: noauth auth module is configured, no API calls should be made",
    );
  });

  it("should block API calls when noauth is the default host config", async ({ expect }) => {
    setDefaultHostConfig({ authType: "noauth" });
    try {
      const result = await invokeFetch("test-api", { pathTemplate: "/test-endpoint", method: "GET" });

      expect(result.status).toBe(204);
      expect(result.data).toBe(null);
      expect(fetch).not.toHaveBeenCalled();
    } finally {
      clearDefaultHostConfig();
    }
  });
});
