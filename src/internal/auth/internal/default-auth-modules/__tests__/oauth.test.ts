import { afterEach, beforeEach, describe, it, vi } from "vitest";
import type { HostConfig } from "#internal/auth/auth-types";
import type { SecretStorage } from "#internal/global-types";
import anonymousModule from "../anonymous";
import oauthModule from "../oauth";
import { handleOAuthCallback } from "../oauth/callback";
import { getOAuthAccessToken, startFullPageLoginFlow } from "../oauth/oauth-utils";
import {
  clearAllCachedTokens,
  clearStoredOauthTokens,
  createStorageNamespace,
  loadCachedOauthTokens,
  loadOrAcquireAccessTokenOauth,
} from "../oauth/storage-helpers";

vi.mock("#internal/utils/utils", async () => {
  // Import the actual module dynamically (if needed)
  const actualModule = await vi.importActual("#internal/utils/utils");

  // Return a mock with overridden properties
  return {
    ...actualModule,
    isBrowser: vi.fn().mockReturnValue(true),
    isNode: vi.fn().mockReturnValue(false),
  };
});

describe("oauth", () => {
  beforeEach(() => {
    fetchMock.resetMocks();

    fetchMock.doMock(async ({ url, method }) => {
      // eslint-disable-next-line no-debugger
      debugger;
      // eslint-disable-next-line no-console
      console.log("Unknown request", method, url);

      return Promise.resolve({
        body: "{}",
        status: 200,
      });
    });
    clearAllCachedTokens();
  });

  afterEach(() => {
    fetchMock.resetMocks();
    clearAllCachedTokens();
  });

  describe("Oauth remote", () => {
    it("should refetch token on handleAuthenticationError", async ({ expect }) => {
      let tokenCounter = 0;
      const hostConfig: HostConfig = {
        host: "somewhere.com",
        clientId: "123",
        getAccessToken: vi.fn(() => Promise.resolve(`token-${++tokenCounter}`)),
      };

      // Fetch first time
      const authParams1 = await oauthModule.getRestCallAuthParams({
        hostConfig,
        method: "GET",
      });
      expect(authParams1.headers.Authorization).toEqual("Bearer token-1");

      // Fetch second time
      const authParams2 = await oauthModule.getRestCallAuthParams({
        hostConfig,
        method: "GET",
      });
      expect(authParams2.headers.Authorization).toEqual("Bearer token-1");

      // Simulate an authentication error. A new token should be fetched from the backend
      await oauthModule.handleAuthenticationError({ hostConfig, canRetry: true });

      // Fetch third time
      const authParams3 = await oauthModule.getRestCallAuthParams({
        hostConfig,
        method: "GET",
      });
      expect(authParams3.headers.Authorization).toEqual("Bearer token-2");
    });

    it("should fetch token and then exchange it", async ({ expect }) => {
      let tokenCounter = 0;
      const hostConfig: HostConfig = {
        host: "somewhere.com",
        clientId: "123",
        getAccessToken: vi.fn(() => Promise.resolve(`token-${++tokenCounter}`)),
      };

      // response with a successful token exchange
      fetchMock.doMockOnceIf(
        ({ method, url }) => method === "POST" && url === "https://somewhere.com/oauth/token",
        async (params) => {
          const requestBody = await params.json();
          expect(requestBody.grant_type).toBe("urn:ietf:params:oauth:grant-type:token-exchange");
          expect(requestBody.purpose).toBe("websocket");
          expect(requestBody.subject_token).toBe("token-1");
          expect(requestBody.subject_token_type).toBe("urn:ietf:params:oauth:token-type:access_token");
          return {
            body: JSON.stringify({
              access_token: `temporary-from-${requestBody.subject_token}`,
              expires_at: "2024-02-28T20:23:55.000Z",
              expires_in: 90,
              issued_token_type: "urn:ietf:params:oauth:token-type:access_token",
              scope: "user_default",
              token_type: "bearer",
            }),
            status: 200,
          };
        },
      );

      // Cause an oauth token exchange
      const websocketAuthParams = await oauthModule.getWebSocketAuthParams({
        hostConfig,
      });
      expect(websocketAuthParams.queryParams?.accessToken).toEqual("temporary-from-token-1");
    });

    it("should refetch the token if an error occurs during exchange", async ({ expect }) => {
      let tokenCounter = 0;
      const hostConfig: HostConfig = {
        host: "somewhere.com",
        clientId: "123",
        getAccessToken: vi.fn(() => Promise.resolve(`token-${++tokenCounter}`)),
      };

      // response with an error for token-1
      // response with a successful token exchange for token-2
      fetchMock.doMockIf(
        ({ method, url }) => method === "POST" && url === "https://somewhere.com/oauth/token",
        async (params) => {
          const requestBody = await params.json();
          expect(requestBody.grant_type).toBe("urn:ietf:params:oauth:grant-type:token-exchange");
          expect(requestBody.purpose).toBe("websocket");

          expect(requestBody.subject_token_type).toBe("urn:ietf:params:oauth:token-type:access_token");
          if (requestBody.subject_token === "token-1") {
            return {
              body: "",
              status: 401,
            };
          }
          return {
            body: JSON.stringify({
              access_token: `temporary-from-${requestBody.subject_token}`,
              expires_at: "2024-02-28T20:23:55.000Z",
              expires_in: 90,
              issued_token_type: "urn:ietf:params:oauth:token-type:access_token",
              scope: "user_default",
              token_type: "bearer",
            }),
            status: 200,
          };
        },
      );

      // Cause an oauth token exchange
      const websocketAuthParams = await oauthModule.getWebSocketAuthParams({
        hostConfig,
      });
      expect(websocketAuthParams.queryParams?.accessToken).toEqual("temporary-from-token-2");
      expect(fetchMock).toHaveBeenCalledTimes(2);
    });
  });
  describe("OAuth storage", () => {
    beforeEach(() => {
      localStorage.clear();
      sessionStorage.clear();
    });

    afterEach(() => {
      localStorage.clear();
      sessionStorage.clear();
      vi.unstubAllGlobals();
    });

    const namespaceCases: [Partial<HostConfig<"oauth2">>, string][] = [
      [{}, "123_user_default"],
      [{ scope: "user_default" }, "123_user_default"],
      [{ scope: "custom" }, "123_custom"],
      [{ subject: "subject" }, "123_user_default_subject"],
      [{ userId: "user-id" }, "123_user_default_user-id"],
      [{ scope: "custom", subject: "subject", userId: "user-id" }, "123_custom_subject_user-id"],
    ];

    it.for(namespaceCases)("should preserve the storage namespace for %j", ([config, namespace], { expect }) => {
      expect(
        createStorageNamespace({
          clientId: "123",
          clientSecret: "not-part-of-the-namespace",
          getAccessToken: async () => "not-part-of-the-namespace",
          ...config,
        }),
      ).toBe(namespace);
    });

    it.for([undefined, "local", "session"] as const)(
      "should preserve token caching, persistence and clearing with storage %s",
      async (accessTokenStorage, { expect }) => {
        const hostConfig: HostConfig<"oauth2"> = { clientId: "123", accessTokenStorage };
        const tokens = { accessToken: "test-access-token", refreshToken: "test-refresh-token" };
        const acquireTokens = vi.fn(async () => tokens);
        const storage =
          accessTokenStorage === "local" ? localStorage : accessTokenStorage === "session" ? sessionStorage : undefined;

        expect(await loadOrAcquireAccessTokenOauth(hostConfig, acquireTokens)).toEqual(tokens);
        expect(await loadCachedOauthTokens(hostConfig)).toEqual(tokens);
        expect(await loadOrAcquireAccessTokenOauth(hostConfig, acquireTokens)).toEqual(tokens);
        expect(acquireTokens).toHaveBeenCalledTimes(1);
        expect(localStorage.length).toBe(accessTokenStorage === "local" ? 2 : 0);
        expect(sessionStorage.length).toBe(accessTokenStorage === "session" ? 2 : 0);
        if (storage) {
          expect(storage.getItem("qlik-qmfe-api-123_user_default-access-token")).toBe(tokens.accessToken);
          expect(storage.getItem("qlik-qmfe-api-123_user_default-refresh-token")).toBe(tokens.refreshToken);
        }

        clearAllCachedTokens();
        expect(await loadOrAcquireAccessTokenOauth(hostConfig, acquireTokens)).toEqual(tokens);
        expect(acquireTokens).toHaveBeenCalledTimes(storage ? 1 : 2);

        clearStoredOauthTokens(hostConfig);
        expect(await loadCachedOauthTokens(hostConfig)).toBeUndefined();
        expect(localStorage.length).toBe(0);
        expect(sessionStorage.length).toBe(0);
      },
    );

    it("should preserve custom token storage keys", async ({ expect }) => {
      const values = new Map<string, string>();
      const storage: SecretStorage = {
        store: vi.fn(async (key, value) => {
          values.set(key, value);
        }),
        get: vi.fn(async (key) => values.get(key)),
        delete: vi.fn(async (key) => {
          values.delete(key);
        }),
      };
      const hostConfig: HostConfig<"oauth2"> = { clientId: "123", accessTokenStorage: storage };
      const tokens = { accessToken: "test-access-token", refreshToken: "test-refresh-token" };
      const acquireTokens = vi.fn(async () => tokens);

      expect(await loadOrAcquireAccessTokenOauth(hostConfig, acquireTokens)).toEqual(tokens);
      expect(storage.store).toHaveBeenCalledWith("qlik-qmfe-api-123_user_default-access-token", tokens.accessToken);
      expect(storage.store).toHaveBeenCalledWith("qlik-qmfe-api-123_user_default-refresh-token", tokens.refreshToken);
      clearAllCachedTokens();
      expect(await loadOrAcquireAccessTokenOauth(hostConfig, acquireTokens)).toEqual(tokens);
      expect(acquireTokens).toHaveBeenCalledTimes(1);
      clearStoredOauthTokens(hostConfig);
      expect(values.size).toBe(0);
    });

    it.for([true, false])(
      "should preserve redirect transaction handoff with matching state %s",
      async (matchingState, { expect }) => {
        const returnUrl = "https://app.example/app";
        const redirectUri = "https://app.example/callback";
        const replace = vi.fn();
        vi.stubGlobal("location", { href: returnUrl, search: "", replace });
        const hostConfig: HostConfig<"oauth2"> = {
          host: "somewhere.com",
          clientId: "123",
          redirectUri,
        };

        await startFullPageLoginFlow(hostConfig);

        const loginUrl = new URL(replace.mock.calls[0][0]);
        const state = loginUrl.searchParams.get("state");
        const verifier = sessionStorage.getItem("qlik-qmfe-api-123_user_default-verifier");
        expect(loginUrl.origin).toBe("https://somewhere.com");
        expect(loginUrl.searchParams.get("redirect_uri")).toBe(redirectUri);
        expect(loginUrl.searchParams.get("code_challenge_method")).toBe("S256");
        expect(verifier).toHaveLength(128);
        expect(state).toHaveLength(43);
        expect(sessionStorage.getItem("qlik-qmfe-api--client-in-progress")).toBe("123_user_default");
        expect(sessionStorage.getItem("qlik-qmfe-api-123_user_default-state")).toBe(state);
        expect(localStorage.length).toBe(0);

        const callbackQuery = `?code=test-code&state=${matchingState ? state : "wrong-state"}`;
        vi.stubGlobal("location", { href: `${redirectUri}${callbackQuery}`, search: callbackQuery, replace });
        handleOAuthCallback();

        expect(sessionStorage.getItem("qlik-qmfe-api--client-in-progress")).toBeNull();
        expect(sessionStorage.getItem("qlik-qmfe-api-123_user_default-state")).toBeNull();
        if (!matchingState) {
          expect(sessionStorage.getItem("qlik-qmfe-api-123_user_default-code")).toBeNull();
          expect(replace).toHaveBeenCalledTimes(1);
          expect(fetchMock).not.toHaveBeenCalled();
          return;
        }

        expect(replace).toHaveBeenLastCalledWith(returnUrl);
        expect(sessionStorage.getItem("qlik-qmfe-api-123_user_default-code")).toBe("test-code");
        vi.stubGlobal("location", { href: returnUrl, search: "", replace });
        fetchMock.mockResponseOnce(JSON.stringify({ access_token: "test-access-token" }));

        expect(await getOAuthAccessToken(hostConfig)).toBe("test-access-token");
        const [url, options] = fetchMock.mock.calls[0];
        expect(url).toBe("https://somewhere.com/oauth/token");
        if (typeof options?.body !== "string") {
          throw new Error("Expected a JSON string request body");
        }
        expect(JSON.parse(options.body)).toMatchObject({
          grant_type: "authorization_code",
          client_id: "123",
          code: "test-code",
          code_verifier: verifier,
          redirect_uri: redirectUri,
        });
        expect(localStorage.length).toBe(0);
        expect(sessionStorage.length).toBe(0);
      },
    );
  });

  describe("Anonymous", () => {
    it("should fetch token with consistent tracking-code", async ({ expect }) => {
      let tokenCounter = 0;
      const clientId = "123";
      const accessCode = "456";
      const hostConfig: HostConfig = {
        host: "somewhere.com",
        clientId,
        accessCode,
      };
      const trackingCodes: string[] = [];

      // response with a successful token exchange
      fetchMock.doMockIf(
        ({ method, url }) => method === "POST" && url === "https://somewhere.com/oauth/token/anonymous-embed",
        async (params) => {
          const requestBody = await params.json();
          expect(requestBody.grant_type).toBe("urn:qlik:oauth:anonymous-embed");
          expect(requestBody.eac).toBe(accessCode);
          expect(requestBody.client_id).toBe(clientId);
          trackingCodes.push(requestBody.tracking_code);
          return {
            body: JSON.stringify({
              access_token: `tokiga-token-${++tokenCounter}`,
              expires_at: "2024-02-28T20:23:55.000Z",
              expires_in: 90,
              issued_token_type: "urn:ietf:params:oauth:token-type:access_token",
              token_type: "bearer",
            }),
            status: 200,
          };
        },
      );
      const authParams = await anonymousModule.getRestCallAuthParams({
        hostConfig,
        method: "GET",
      });
      const cachedAuthParams = await anonymousModule.getRestCallAuthParams({
        hostConfig,
        method: "GET",
      });
      expect(cachedAuthParams).toEqual(authParams);
      clearAllCachedTokens();
      const newAuthParams = await anonymousModule.getRestCallAuthParams({
        hostConfig,
        method: "GET",
      });
      expect(fetchMock).toHaveBeenCalledTimes(2);
      expect(newAuthParams).not.toEqual(authParams);
      expect(trackingCodes).toHaveLength(2);
      // Tracking code should stay the same.
      expect(trackingCodes[0]).toEqual(trackingCodes[1]);
    });
  });
});
