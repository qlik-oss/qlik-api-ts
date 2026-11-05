import { describe, it } from "vitest";
import type { HostConfig } from "#internal/auth/auth-types";
import noauthModule from "../noauth";

describe("noauth auth module", () => {
  it("should return empty auth params for REST calls", async ({ expect }) => {
    const hostConfig: HostConfig<"noauth"> = {
      authType: "noauth",
    };

    const result = await noauthModule.getRestCallAuthParams({
      hostConfig,
      method: "GET",
    });

    expect(result).toEqual({
      headers: {},
      queryParams: {},
      credentials: "same-origin",
    });
  });

  it("should return empty query params for WebSocket connections", async ({ expect }) => {
    const hostConfig: HostConfig<"noauth"> = {
      authType: "noauth",
    };

    const result = await noauthModule.getWebSocketAuthParams({
      hostConfig,
    });

    expect(result).toEqual({
      queryParams: {},
    });
  });

  it("should not retry on authentication error", async ({ expect }) => {
    const hostConfig: HostConfig<"noauth"> = {
      authType: "noauth",
    };

    const result = await noauthModule.handleAuthenticationError({
      hostConfig,
      status: 401,
      headers: new Headers(),
      canRetry: true,
    });

    expect(result).toEqual({});
  });
});
