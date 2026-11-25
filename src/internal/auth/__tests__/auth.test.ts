import { afterAll, afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import * as utils from "#internal/utils/utils";
import {
  isHostCrossOrigin,
  logout,
  registerAuthModule,
  toValidLocationUrl,
  toValidWebsocketLocationUrl,
} from "../auth-functions";
import type { HostConfig } from "../auth-types";
import {
  clearAllCachedTokens,
  loadCachedOauthTokens,
  loadOrAcquireAccessTokenOauth,
} from "../internal/default-auth-modules/oauth/storage-helpers";

describe("auth-functions.ts", () => {
  describe("isHostCrossOrigin", () => {
    const originalLocation = window.location;
    beforeEach(() => {
      Object.defineProperty(window, "location", {
        writable: true,
        value: { ...window.location, origin: "https://frontend-core.com" },
      });
    });
    // Reset to original window.location after your tests, if necessary
    afterEach(() => {
      // @ts-expect-error force a delete to emulate non-browser env
      delete window.location;
      window.location = originalLocation as string & Location;
    });
    describe("isHostCrossOrigin", () => {
      it("should return false if no host config is provided", () => {
        expect(isHostCrossOrigin()).toBe(false);
      });
      it("should return true if environment is not a browser environment", () => {
        // @ts-expect-error force a delete to emulate non-browser env
        delete window.location;
        expect(isHostCrossOrigin()).toBe(true);
      });
      it("should return true if host config and window.location are different", () => {
        expect(isHostCrossOrigin({ authType: "cookie", host: "domain.com" })).toBe(true);
      });
      it("should return false if host config and window.location are the same", () => {
        expect(isHostCrossOrigin({ authType: "cookie", host: "frontend-core.com" })).toBe(false);
      });
    });
    describe("toValidLocationUrl", () => {
      it("should return a valid location url on a simple host config", () => {
        const url = toValidLocationUrl({ host: "host.com" });
        expect(url).toBe("https://host.com");
      });
      it("should return an empty string when no host is given", () => {
        const url = toValidLocationUrl({});
        expect(url).toBe("");
      });
      it("should return the url if host starts with http", () => {
        const url = toValidLocationUrl({ host: "http://host.com" });
        expect(url).toBe("http://host.com");
      });
      it("should return the url without leading slashes if host starts with http", () => {
        const url = toValidLocationUrl({ host: "https://host.com///" });
        expect(url).toBe("https://host.com");
      });
    });
    describe("toValidEnigmaUrl", () => {
      it("should return a valid enigma location url on a simple host config", () => {
        const url = toValidWebsocketLocationUrl({ host: "host.com" });
        expect(url).toBe("wss://host.com");
      });
      it("should return the default location url when no host is given", () => {
        const url = toValidWebsocketLocationUrl({});
        expect(url).toBe("wss://frontend-core.com");
      });
      it("should return the url if host starts with http", () => {
        const url = toValidWebsocketLocationUrl({ host: "http://host.com" });
        expect(url).toBe("ws://host.com");
      });
      it("should return the url without leading slashes if host starts with http", () => {
        const url = toValidWebsocketLocationUrl({ host: "https://host.com///" });
        expect(url).toBe("wss://host.com");
      });
    });
  });
});

describe("logout", () => {
  const originalLocation = window.location;
  const isBrowser = vi.spyOn(utils, "isBrowser");
  const hostConfig: HostConfig<"oauth2"> = {
    host: "tenant.example",
    clientId: "logout-client",
    accessTokenStorage: "local",
  };

  beforeEach(() => {
    globalThis.loggingOut = false;
    isBrowser.mockReturnValue(true);
    fetchMock.resetMocks();
    Object.defineProperty(window, "location", {
      writable: true,
      value: { ...originalLocation, href: "https://app.example/page" },
    });
  });

  afterEach(() => {
    clearAllCachedTokens();
    localStorage.clear();
    Object.defineProperty(window, "location", { writable: true, value: originalLocation });
    globalThis.loggingOut = false;
  });

  afterAll(() => {
    isBrowser.mockRestore();
  });

  async function storeTokens() {
    await loadOrAcquireAccessTokenOauth(hostConfig, async () => ({
      accessToken: "access-token",
      refreshToken: "refresh-token",
    }));
  }

  it("clears and revokes OAuth tokens without leaving the current page by default", async () => {
    await storeTokens();
    fetchMock.mockResponse("");

    await logout({ hostConfig });

    const bodies = fetchMock.mock.calls.map(([url, init]) => {
      expect(url).toBe("https://tenant.example/oauth/revoke");
      return Object.fromEntries(new URLSearchParams(init?.body as URLSearchParams));
    });
    expect(bodies).toEqual([
      { token: "refresh-token", token_type_hint: "refresh_token", client_id: "logout-client" },
      { token: "access-token", token_type_hint: "access_token", client_id: "logout-client" },
    ]);
    expect(localStorage.length).toBe(0);
    expect(await loadCachedOauthTokens(hostConfig)).toBeUndefined();
    expect(globalThis.location.href).toBe("https://app.example/page");
    expect(globalThis.loggingOut).toBe(false);
  });

  it("navigates to the tenant logout only when requested", async () => {
    await storeTokens();
    fetchMock.mockResponse("");

    await logout({ hostConfig, endTenantSession: true });

    expect(globalThis.location.href).toBe("https://tenant.example/logout");
  });

  it("still clears tokens when revocation fails without navigating by default", async () => {
    await storeTokens();
    fetchMock.mockReject(new Error("network down"));

    await expect(logout({ hostConfig })).resolves.toBeUndefined();

    expect(localStorage.length).toBe(0);
    expect(globalThis.location.href).toBe("https://app.example/page");
    expect(globalThis.loggingOut).toBe(false);
  });

  it("does not persist an acquisition started before logout and allows a later acquisition", async () => {
    let resolveAcquire!: (tokens: { accessToken: string; refreshToken: string }) => void;
    const pending = loadOrAcquireAccessTokenOauth(
      hostConfig,
      () =>
        new Promise((resolve) => {
          resolveAcquire = resolve;
        }),
    );
    await vi.waitFor(() => expect(resolveAcquire).toBeTypeOf("function"));

    await logout({ hostConfig });
    resolveAcquire({ accessToken: "stale-token", refreshToken: "stale-refresh-token" });
    await pending;

    expect(localStorage.length).toBe(0);
    expect(globalThis.loggingOut).toBe(false);

    await storeTokens();

    expect(localStorage.getItem("qlik-qmfe-api-logout-2Dclient-access-token")).toBe("access-token");
  });

  it("navigates to the application logout for OAuth tokens supplied by getAccessToken", async () => {
    await logout({ hostConfig: { ...hostConfig, getAccessToken: async () => "token" } });

    expect(globalThis.location.href).toBe("/logout");
  });

  it("calls the logout hook of other auth modules and navigates even when it fails", async () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    const hook = vi.fn().mockRejectedValue(new Error("hook failed"));
    registerAuthModule("custom4", {
      getRestCallAuthParams: async () => ({ headers: {}, queryParams: {}, credentials: "omit" }),
      getWebSocketAuthParams: async () => ({ queryParams: {} }),
      handleAuthenticationError: async () => ({}),
      logout: hook,
    });

    await logout({ hostConfig: { authType: "custom4", host: "tenant.example", customProp: "x" } });

    expect(hook).toHaveBeenCalledWith({ hostConfig: { authType: "custom4", host: "tenant.example", customProp: "x" } });
    expect(warn).toHaveBeenCalledWith("Logout cleanup failed", expect.any(Error));
    expect(globalThis.location.href).toBe("/logout");
    warn.mockRestore();
  });

  it("clears tokens without navigating outside a browser", async () => {
    await storeTokens();
    isBrowser.mockReturnValue(false);
    fetchMock.mockResponse("");

    await logout({ hostConfig });

    expect(await loadCachedOauthTokens(hostConfig)).toBeUndefined();
    expect(globalThis.location.href).toBe("https://app.example/page");
  });
});
