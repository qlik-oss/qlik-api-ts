import { afterEach, beforeEach, describe, it, vi } from "vitest";
import type { HostConfig } from "#internal/auth/auth-types";
import anonymousModule from "../anonymous";
import oauthModule from "../oauth";
import { clearAllCachedTokens } from "../oauth/storage-helpers";

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
