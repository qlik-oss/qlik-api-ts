import { beforeEach, describe, expect, it, vi } from "vitest";
import { clearPlatform } from "#internal/platform/platform-functions";
import { InvalidAuthTypeError, InvalidHostConfigError } from "../auth-errors";
import { registerAuthModule, registerHostConfig } from "../auth-functions";
import type { AuthModule } from "../auth-types";
import { getAuthModule, unRegisterAuthModule } from "../internal/auth-module-registry";
import apiKeyAuthModule from "../internal/default-auth-modules/apikey";
import cookieAuthModule from "../internal/default-auth-modules/cookie";
import noneAuthModule from "../internal/default-auth-modules/none";
import oauthAuthModule from "../internal/default-auth-modules/oauth";
import windowsCookieAuthModule from "../internal/default-auth-modules/windows-cookie";

declare global {
  interface QlikAuthModules {
    custom: { config: { customProp: string } };
    custom2: { config: { customProp: string } };
    custom3: { config: { customProp?: string } };
    custom4: { config: { customProp: string } };
  }

  var custom2: unknown;

  var custom3: unknown;

  var custom4: unknown;
}

describe("auth-functions.ts", () => {
  describe("getAuthModule", () => {
    beforeEach(() => {
      clearPlatform();
      fetchMock.resetMocks();
    });
    it("should give me the the default cookie authModule if hostConfig is empty and we're not on windows", async () => {
      fetchMock.mockResponseOnce("{}", { status: 200 }); // product info response
      const authModule = await getAuthModule({});
      expect(authModule).toBe(cookieAuthModule);
    });
    it("should give me the the windowscookie auth module if platform detection detects windows", async () => {
      // fake windows env
      fetchMock.mockResponseOnce(`{ "composition": { "deploymentType": "QlikSenseDesktop" } }`, { status: 200 }); // product info response
      const authModule = await getAuthModule({});
      expect(authModule).toBe(windowsCookieAuthModule);
    });
    it("should give me the the apikey auth module if only apiKey is set", async () => {
      const authModule = await getAuthModule({ apiKey: "dummy" });
      expect(authModule).toBe(apiKeyAuthModule);
    });
    it("should give me the the oauth2 auth module if only clientId is set", async () => {
      const authModule = await getAuthModule({ clientId: "dummy" });
      expect(authModule).toBe(oauthAuthModule);
    });
    it("should give me the referenced auth module when reference is used", async () => {
      registerHostConfig("dummy", { clientId: "next-dummy" });
      const authModule = await getAuthModule({ reference: "dummy" });
      expect(authModule).toBe(oauthAuthModule);
    });
    it("should return the oauth2 authModule", async () => {
      const authModule = await getAuthModule({ authType: "oauth2", clientId: "32fw" });
      expect(authModule).toBe(oauthAuthModule);
    });
    it("should return the cookie authModule", async () => {
      const authModule = await getAuthModule({ webIntegrationId: "123" });
      expect(authModule).toBe(cookieAuthModule);
    });
    it("should return the none authModule", async () => {
      const authModule = await getAuthModule({ authType: "none" });
      expect(authModule).toBe(noneAuthModule);
    });
    it("should throw an InvalidHostConfig error if auth module is not registered", async () => {
      // @ts-expect-error force for test
      await expect(getAuthModule({ authType: "Nope" })).rejects.toThrow(InvalidAuthTypeError);
    });
    it("should return a custom authModule", async () => {
      const customAuthModule: AuthModule<"custom"> = {
        requiredProps: ["customProp"],
        getRestCallAuthParams: () => Promise.resolve({ headers: {}, queryParams: {}, credentials: "same-origin" }),
        getWebSocketAuthParams: () => Promise.resolve({ queryParams: {} }),
        handleAuthenticationError: () => Promise.resolve({}),
      };
      registerAuthModule("custom", customAuthModule);
      const authModule = await getAuthModule({ authType: "custom", customProp: "custom" });
      expect(authModule).toBe(customAuthModule);
      unRegisterAuthModule("custom");
    });

    it("should return a custom authModule straight from globalThis", async () => {
      const custom2AuthModule: AuthModule<"custom2"> = {
        requiredProps: ["customProp"],
        getRestCallAuthParams: () => Promise.resolve({ headers: {}, queryParams: {}, credentials: "same-origin" }),
        getWebSocketAuthParams: () => Promise.resolve({ queryParams: {} }),
        handleAuthenticationError: () => Promise.resolve({}),
      };
      globalThis.custom2 = custom2AuthModule;
      const authModule = await getAuthModule({ authType: "custom2", customProp: "custom" });
      expect(authModule).toBe(custom2AuthModule);
      unRegisterAuthModule("custom2");
    });

    it("should return a custom authModule created by a function on globalThis", async () => {
      const custom3AuthModule: AuthModule<"custom3"> = {
        optionalProps: ["customProp"],
        getRestCallAuthParams: () => Promise.resolve({ headers: {}, queryParams: {}, credentials: "same-origin" }),
        getWebSocketAuthParams: () => Promise.resolve({ queryParams: {} }),
        handleAuthenticationError: () => Promise.resolve({}),
      };
      globalThis.custom3 = () => custom3AuthModule;
      const authModule = await getAuthModule({ authType: "custom3", customProp: "custom" });
      expect(authModule).toBe(custom3AuthModule);
      unRegisterAuthModule("custom3");
    });

    it("should return a custom authModule created by an asynchronous function on globalThis", async () => {
      const custom4AuthModule: AuthModule<"custom4"> = {
        requiredProps: ["customProp"],
        getRestCallAuthParams: () => Promise.resolve({ headers: {}, queryParams: {}, credentials: "same-origin" }),
        getWebSocketAuthParams: () => Promise.resolve({ queryParams: {} }),
        handleAuthenticationError: () => Promise.resolve({}),
      };
      globalThis.custom4 = () => Promise.resolve(custom4AuthModule);
      const authModule = await getAuthModule({ authType: "custom4", customProp: "custom" });
      expect(authModule).toBe(custom4AuthModule);
      unRegisterAuthModule("custom4");
    });

    it("should throw an InvalidHostConfig error if host config for apikey is missing an apiKey property", async () => {
      // @ts-expect-error force invalid type for test
      await expect(getAuthModule({ authType: "apikey" })).rejects.toThrowError(
        new InvalidHostConfigError("missing required properties in host config; 'apiKey'"),
      );
    });
    it("should warn if host config for apikey has unknown properties", async () => {
      // add a spy to console.warn
      const consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
      // @ts-expect-error force invalid type for test
      await getAuthModule({ authType: "apikey", apiKey: "123456", unknownProp1: "unknown", unknownProp2: "unknown" });
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        "WARNING: unknown properties in host config; 'unknownProp1', 'unknownProp2'",
      );
      consoleWarnSpy.mockRestore();
    });
  });
});
