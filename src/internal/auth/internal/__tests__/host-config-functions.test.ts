import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import { serializeHostConfig, setDefaultHostConfig } from "#internal/auth/auth-functions";
import type { AuthModule, HostConfig } from "#internal/auth/auth-types";
import { clearPlatform } from "#internal/platform/platform-functions";
import { registerAuthModule, unRegisterAuthModule } from "../auth-module-registry";
import {
  clearDefaultHostConfig,
  getDefaultHostConfig,
  getRegisteredHostConfig,
  normalizeHostConfig,
  registerHostConfig,
  removeDefaults,
  resetHostConfigRegistry,
  resetSerializedFunctions,
  unregisterHostConfig,
} from "../host-config-functions";

declare global {
  interface QlikAuthModules {
    mycustomauth: { config: { customProp?: { one?: string | null; two?: string } } };
  }
}

describe("host config functions", () => {
  describe("registerHostConfig", () => {
    let consoleWarnMock: unknown;

    beforeEach(() => {
      // Mock console.warn
      consoleWarnMock = vi.spyOn(console, "warn").mockImplementation(() => {});
      // Reset the host config registry before each test
      // This is important to ensure that each test starts with a clean slate
      resetHostConfigRegistry();
    });

    afterEach(() => {
      vi.restoreAllMocks();
      resetHostConfigRegistry();
    });

    it("should register a new host config", () => {
      const hostConfig: HostConfig = { host: "https://example.com" };
      registerHostConfig("example", hostConfig);

      const registeredConfig = getRegisteredHostConfig("example");
      expect(registeredConfig).toEqual(hostConfig);
    });

    it("should overwrite an existing host config and log a warning", () => {
      const initialConfig: HostConfig = { host: "https://initial.com" };
      const newConfig: HostConfig = { host: "https://new.com" };

      registerHostConfig("example", initialConfig);
      registerHostConfig("example", newConfig);

      const registeredConfig = getRegisteredHostConfig("example");
      expect(registeredConfig).toEqual(newConfig);
      expect(consoleWarnMock).toHaveBeenCalledWith(
        'registerHostConfig: Host config with name "example" is already registered. Overwriting.',
      );
    });

    it("should not log a warning when registering a new host config", () => {
      const hostConfig: HostConfig = { host: "https://example.com" };
      registerHostConfig("another", hostConfig);
      expect(consoleWarnMock).not.toHaveBeenCalled();
    });

    it("should unregister a host config", () => {
      const hostConfig: HostConfig = { host: "https://example.com" };
      registerHostConfig("example", hostConfig);

      // Unregister the host config
      unregisterHostConfig("example");

      // Check if the host config is unregistered
      expect(getRegisteredHostConfig("example")).toBeUndefined();
    });

    it("should log a warning when trying to unregister a non-registered host config", () => {
      registerHostConfig("example", {});

      // Attempt to unregister a non-registered host config
      unregisterHostConfig("nonexistent");

      expect(consoleWarnMock).toHaveBeenCalledWith(
        'unregisterHostConfig: Host config with name "nonexistent" not found.',
      );
    });

    it("should not log a warning when unregistering a registered host config", () => {
      const hostConfig: HostConfig = { host: "https://example.com" };
      registerHostConfig("example", hostConfig);

      // Unregister the host config
      unregisterHostConfig("example");

      // Check if the warning was not logged
      expect(consoleWarnMock).not.toHaveBeenCalled();
    });

    it("should return the registered host config when it exists", () => {
      const hostConfig: HostConfig = { host: "https://example.com" };
      registerHostConfig("example", hostConfig);

      const registeredConfig = getRegisteredHostConfig("example");
      expect(registeredConfig).toEqual(hostConfig);
    });

    it("should throw an error if trying to register a host config with a reference that is not registered", () => {
      const hostConfig: HostConfig<"reference"> = { reference: "nonexistent" };
      expect(() => registerHostConfig("example", hostConfig)).toThrowError(
        'Host config with reference "nonexistent" is not registered. Please register it before using it.',
      );
    });
  });

  describe("removedDefaults on host configs", () => {
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
      fetchMock.resetMocks();
    });

    describe("cookie host config", () => {
      it("empty host config on cloud is the default host config", () => {
        // mock product info to mimic qcs environment
        const productInfo = {
          composition: {
            deploymentType: "qlikcloudservices",
          },
        };
        fetchMock.mockResponse(JSON.stringify(productInfo), { status: 200 });
        const hostConfig: HostConfig = {};
        const cleanedHostConfig = removeDefaults(hostConfig);
        expect(cleanedHostConfig).toEqual({});
        clearPlatform(cleanedHostConfig);
      });

      it("with authType cookie", () => {
        const hostConfig: HostConfig = { authType: "cookie" };
        const cleanedHostConfig = removeDefaults(hostConfig);

        expect(cleanedHostConfig).toEqual({});
      });

      it("with host, auth type and empty webIntegrationId", () => {
        const hostConfig: HostConfig = { host: "https://example.com", authType: "cookie", webIntegrationId: "" };
        const cleanedHostConfig = removeDefaults(hostConfig);

        expect(cleanedHostConfig).toEqual({
          host: "https://example.com",
        });
      });

      it("with host, auth type and webIntegrationId", () => {
        const hostConfig: HostConfig = { host: "https://example.com", authType: "cookie", webIntegrationId: "2fws" };
        const cleanedHostConfig = removeDefaults(hostConfig);

        expect(cleanedHostConfig).toEqual({
          host: "https://example.com",
          webIntegrationId: "2fws",
        });
      });

      it("with autoRedirect set to true", () => {
        const hostConfig: HostConfig = { host: "https://example.com", authType: "cookie", autoRedirect: true };
        const filledHostConfig = removeDefaults(hostConfig);
        expect(filledHostConfig).toEqual({
          host: "https://example.com",
          autoRedirect: true,
        });
      });

      it("host config with only default or falsy values", () => {
        const hostConfig: HostConfig = {
          authType: "cookie",
          host: "  https://frontend-core.com/   ",
          webIntegrationId: "",
          autoRedirect: false,
          anonymousMode: false,
        };
        const cleanedHostConfig = removeDefaults(hostConfig);
        expect(cleanedHostConfig).toEqual({});
      });

      it("host config with only default or falsy values and no auth type", () => {
        const productInfo = {
          composition: {
            deploymentType: "qlikcloudservices",
          },
        };
        fetchMock.mockResponse(JSON.stringify(productInfo), { status: 200 });

        const hostConfig: HostConfig = {
          host: "  https://frontend-core.com/   ",
          webIntegrationId: "",
          autoRedirect: false,
          anonymousMode: false,
        };
        const cleanedHostConfig = removeDefaults(hostConfig);
        expect(cleanedHostConfig).toEqual({});
        clearPlatform(cleanedHostConfig);
      });
    });

    describe("windowscookie host config", () => {
      it("empty host config on windows", () => {
        const productInfo = {
          composition: {
            deploymentType: "qliksenseserver",
          },
        };
        fetchMock.mockResponse(JSON.stringify(productInfo), { status: 200 });

        const hostConfig: HostConfig = {};
        const cleanedHostConfig = removeDefaults(hostConfig);

        expect(cleanedHostConfig).toEqual({});
        clearPlatform(cleanedHostConfig);
      });

      it("with only windowscookie set", () => {
        const hostConfig: HostConfig = {
          authType: "windowscookie",
        };
        const cleanedHostConfig = removeDefaults(hostConfig);
        expect(cleanedHostConfig).toEqual({});
      });

      it("windowscookie with props", () => {
        const hostConfig: HostConfig = {
          authType: "windowscookie",
          host: "https://qliksense.com",
          loginUri: "https://qliksense.com/login",
          crossSiteCookies: true,
        };
        const cleanedHostConfig = removeDefaults(hostConfig);
        expect(cleanedHostConfig).toEqual({
          host: "https://qliksense.com",
          loginUri: "https://qliksense.com/login",
          crossSiteCookies: true,
        });
      });
    });

    describe("oauth2 config", () => {
      it("using only clientId should resolve to oauth2", () => {
        const hostConfig1: HostConfig = {
          authType: "oauth2",
          host: "https://example.com",
          clientId: "client-id",
        };

        const hostConfig2: HostConfig = {
          host: "https://example.com",
          clientId: "client-id",
        };

        const standardizedHostConfig1 = removeDefaults(hostConfig1);
        const standardizedHostConfig2 = removeDefaults(hostConfig2);
        expect(standardizedHostConfig2).toEqual({
          host: "https://example.com",
          clientId: "client-id",
        });
        expect(standardizedHostConfig1).toEqual(standardizedHostConfig2);
      });

      it("using oauth2 with functions", () => {
        const funcAuthFailed = (props: { message: string }) => {
          // eslint-disable-next-line no-console
          console.log("test", props.message);
        };

        const hostConfig1: HostConfig = {
          authType: "oauth2",
          host: "https://example.com",
          clientId: "client-id",
          onAuthFailed: funcAuthFailed,
        };

        const hostConfig2: HostConfig = {
          host: "https://example.com",
          clientId: "client-id",
          onAuthFailed: funcAuthFailed,
        };

        const standardizedHostConfig1 = removeDefaults(hostConfig1);
        const standardizedHostConfig2 = removeDefaults(hostConfig2);
        expect(standardizedHostConfig2).toEqual({
          host: "https://example.com",
          clientId: "client-id",
          onAuthFailed: funcAuthFailed,
        });
        expect(standardizedHostConfig1).toEqual(standardizedHostConfig2);
      });
    });
  });

  describe("serialize host configs", () => {
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
      fetchMock.resetMocks();
      resetSerializedFunctions();
    });

    it("should serialize host config with authType and host", () => {
      const hostConfig: HostConfig = {
        authType: "cookie",
        host: "https://example.com",
      };
      const serialized = serializeHostConfig(hostConfig);
      expect(serialized).toEqual('{"host":"https://example.com"}');
    });

    it("should serialize an empty host config on cloud", () => {
      const productInfo = {
        composition: {
          deploymentType: "qlikcloudservices",
        },
      };
      fetchMock.mockResponse(JSON.stringify(productInfo), { status: 200 });
      const hostConfig: HostConfig = {};
      const serialized = serializeHostConfig(hostConfig);
      expect(serialized).toEqual("{}");
      clearPlatform(JSON.parse(serialized));
    });

    it("should serialize an empty host config on windows", () => {
      const productInfo = {
        composition: {
          deploymentType: "qliksenseserver",
        },
      };
      fetchMock.mockResponse(JSON.stringify(productInfo), { status: 200 });
      const hostConfig: HostConfig = {};
      const serialized = serializeHostConfig(hostConfig);
      expect(serialized).toEqual("{}");
      clearPlatform(JSON.parse(serialized));
    });

    it("should serialize two host configs with different but default values to the same key", () => {
      const productInfo = {
        composition: {
          deploymentType: "qlikcloudservices",
        },
      };
      fetchMock.mockResponse(JSON.stringify(productInfo), { status: 200 });

      const hostConfig1: HostConfig = {
        authType: "cookie",
        host: "  https://frontend-core.com/   ",
        webIntegrationId: "",
        autoRedirect: false,
        anonymousMode: false,
      };

      const hostConfig2: HostConfig = {};

      const serialized1 = serializeHostConfig(hostConfig1);
      const serialized2 = serializeHostConfig(hostConfig2);
      expect(serialized1).toEqual(serialized2);
      clearPlatform(JSON.parse(serialized1));
      clearPlatform(JSON.parse(serialized2));
    });

    it("should serialize host configs with the same function as properties", () => {
      const funcAuthFailed = (props: { message: string }) => {
        // eslint-disable-next-line no-console
        console.log("test", props.message);
      };

      const hostConfig1: HostConfig = {
        authType: "oauth2",
        host: "https://example.com",
        clientId: "client-id",
        onAuthFailed: funcAuthFailed,
      };

      const hostConfig2: HostConfig = {
        host: "https://example.com",
        clientId: "client-id",
        onAuthFailed: funcAuthFailed,
      };

      const serialized1 = serializeHostConfig(hostConfig1);
      const serialized2 = serializeHostConfig(hostConfig2);
      // turn on when functions are serialized
      expect(serialized1).toEqual('{"clientId":"client-id","host":"https://example.com"}');
      // expect(serialized1).toEqual('{"clientId":"client-id","host":"https://example.com","onAuthFailed":"f1"}');
      expect(serialized1).toEqual(serialized2);
    });

    it("should serialize host configs with different functions as properties", () => {
      const hostConfig1: HostConfig = {
        authType: "oauth2",
        host: "https://example.com",
        clientId: "client-id",
        onAuthFailed: (props: { message: string }) => {
          // eslint-disable-next-line no-console
          console.log("test", props.message);
        },
      };

      const hostConfig2: HostConfig = {
        host: "https://example.com",
        clientId: "client-id",
        onAuthFailed: (props: { message: string }) => {
          // eslint-disable-next-line no-console
          console.log("test", props.message);
        },
      };

      const serialized1 = serializeHostConfig(hostConfig1);
      const serialized2 = serializeHostConfig(hostConfig2);
      // turn on when functions are serialized
      // expect(serialized1).toEqual('{"clientId":"client-id","host":"https://example.com","onAuthFailed":"f1"}');
      expect(serialized1).toEqual('{"clientId":"client-id","host":"https://example.com"}');
      // expect(serialized2).toEqual('{"clientId":"client-id","host":"https://example.com","onAuthFailed":"f2"}');
      expect(serialized2).toEqual('{"clientId":"client-id","host":"https://example.com"}');
    });

    describe("serialize a custom host config", () => {
      beforeAll(() => {
        const customAuthModule: AuthModule<"mycustomauth"> = {
          optionalProps: ["customProp"],
          getRestCallAuthParams: () => Promise.resolve({ headers: {}, queryParams: {}, credentials: "same-origin" }),
          getWebSocketAuthParams: () => Promise.resolve({ queryParams: {} }),
          handleAuthenticationError: () => Promise.resolve({}),
        };
        registerAuthModule("mycustomauth", customAuthModule);
      });

      afterAll(() => {
        // Unregister the custom auth module after tests
        unRegisterAuthModule("mycustomauth");
      });

      it("should serialize a custom host config", () => {
        const hostConfig: HostConfig = {
          authType: "mycustomauth",
          host: "https://custom.com",
          customProp: {
            one: "customValueOne",
            two: "customValueTwo",
          },
        };
        const serialized = serializeHostConfig(hostConfig);
        expect(serialized).toEqual(
          '{"authType":"mycustomauth","customProp":{"one":"customValueOne","two":"customValueTwo"},"host":"https://custom.com"}',
        );
      });

      it("should serialize a custom host config with empty objects", () => {
        const hostConfig: HostConfig = {
          authType: "mycustomauth",
          host: "https://custom.com",
          customProp: {
            one: "",
            two: "  ",
          },
        };
        const serialized = serializeHostConfig(hostConfig);
        expect(serialized).toEqual('{"authType":"mycustomauth","host":"https://custom.com"}');
      });

      it("should serialize a custom host config with nullish props", () => {
        const hostConfig: HostConfig = {
          authType: "mycustomauth",
          host: "https://custom.com",
          customProp: {
            one: null,
            two: undefined,
          },
        };
        const serialized = serializeHostConfig(hostConfig);
        expect(serialized).toEqual('{"authType":"mycustomauth","host":"https://custom.com"}');
      });

      it("should serialize a hostconfigs with different key order to the same string", () => {
        const hostConfig1: HostConfig = {
          authType: "mycustomauth",
          host: "https://custom.com",
          customProp: {
            one: "a",
            two: "b",
          },
        };
        const hostConfig2: HostConfig = {
          host: "https://custom.com",
          customProp: {
            two: "b",
            one: "a",
          },
          authType: "mycustomauth",
        };
        const serialized = serializeHostConfig(hostConfig1);
        const serialized2 = serializeHostConfig(hostConfig2);
        expect(serialized).toEqual(serialized2);
      });
    });
  });

  describe("setDefaultHostConfig", () => {
    let consoleWarnMock: unknown;
    beforeEach(() => {
      // Reset the default host config before each test
      clearDefaultHostConfig();
      resetHostConfigRegistry();
      consoleWarnMock = vi.spyOn(console, "warn").mockImplementation(() => {});
    });
    afterEach(() => {
      // Reset the default host config after each test
      clearDefaultHostConfig();
      resetHostConfigRegistry();
    });
    it("should set the default host config", () => {
      const defaultHostConfig: HostConfig = { host: "https://default.com" };
      setDefaultHostConfig(defaultHostConfig);

      expect(getDefaultHostConfig()).toEqual(defaultHostConfig);
    });
    it("should overwrite the existing default host config", () => {
      const initialConfig: HostConfig = { host: "https://initial.com" };
      const newConfig: HostConfig = { host: "https://new.com" };

      setDefaultHostConfig(initialConfig);
      setDefaultHostConfig(newConfig);

      expect(consoleWarnMock).toHaveBeenCalledWith(
        'registerHostConfig: Host config with name "default" is already registered. Overwriting.',
      );
      expect(getDefaultHostConfig()).toEqual(newConfig);
    });
    it("should get the default host config", () => {
      const defaultHostConfig: HostConfig = { host: "https://default.com" };
      setDefaultHostConfig(defaultHostConfig);

      const retrievedConfig = getDefaultHostConfig();
      expect(retrievedConfig).toEqual(defaultHostConfig);
    });

    it("should register the default host config using registerHostConfig", () => {
      const defaultHostConfig: HostConfig = { host: "https://default.com" };
      registerHostConfig("default", defaultHostConfig);

      // Check if the default host config is registered
      const registeredConfig = getRegisteredHostConfig("default");
      expect(registeredConfig).toEqual(defaultHostConfig);
    });

    it("should register default host config using setDefaultHostConfig", () => {
      const defaultHostConfig: HostConfig = { host: "https://default.com" };
      setDefaultHostConfig(defaultHostConfig);

      // Check if the default host config is registered
      const registeredConfig = getRegisteredHostConfig("default");
      expect(registeredConfig).toEqual(defaultHostConfig);
    });

    it("should throw an error if the host config references a non-registered host config", () => {
      const hostConfig: HostConfig<"reference"> = { reference: "nonexistent" };
      expect(() => setDefaultHostConfig(hostConfig)).toThrowError(
        'Host config with reference "nonexistent" is not registered. Please register it before using it.',
      );
    });

    it("should work to set a default host config with a reference to another registered host config", () => {
      const hostConfig1: HostConfig = { host: "https://example.com" };
      const hostConfig2: HostConfig<"reference"> = { reference: "example" };
      registerHostConfig("example", hostConfig1);
      expect(() => setDefaultHostConfig(hostConfig2)).not.toThrow();
      expect(getDefaultHostConfig()).toEqual(hostConfig2);
    });

    it("should return empty object if the default host config is undefined", () => {
      expect(() => setDefaultHostConfig(undefined)).not.toThrow();
      expect(getDefaultHostConfig()).toEqual({});
    });

    it("should return empty object if the host config is null", () => {
      expect(() => setDefaultHostConfig(null as unknown as HostConfig)).not.toThrow();
      expect(getDefaultHostConfig()).toEqual({});
    });
  });
});

describe("normalizeHostConfig", () => {
  const originalLocation = globalThis.location;
  beforeEach(() => {
    globalThis.location = {
      ...originalLocation,
      origin: "https://default-origin",
    };
    clearDefaultHostConfig();
  });
  afterEach(() => {
    globalThis.location = originalLocation;
    clearDefaultHostConfig();
  });

  describe("With no default host config", () => {
    it("should normalize two identical host configs to the same identity", () => {
      const normalized1 = normalizeHostConfig({ host: "somewhere", clientId: "123" });
      const normalized2 = normalizeHostConfig({ host: "somewhere", clientId: "123" });
      expect(normalized1).toBe(normalized2);
    });
    it("should render the same normalized config for values set to defaults", () => {
      const normalized1 = normalizeHostConfig({ host: "somewhere", clientId: "123", authType: "oauth2" });
      const normalized2 = normalizeHostConfig({ host: "somewhere", clientId: "123" });
      expect(normalized1).toBe(normalized2);
    });
    it("should normalize undefined, empty and authType cookie to the same identity", () => {
      const normalized1 = normalizeHostConfig({ authType: "cookie" });
      const normalized2 = normalizeHostConfig({});
      const normalized3 = normalizeHostConfig({ host: "https://default-origin" });
      const normalized4 = normalizeHostConfig({ host: "https://default-origin/" });
      const normalized5 = normalizeHostConfig({ host: "default-origin" });
      const normalized6 = normalizeHostConfig({ host: "default-origin/" });
      const normalized7 = normalizeHostConfig(undefined);
      expect(normalized1).toBe(normalized2);
      expect(normalized1).toBe(normalized3);
      expect(normalized1).toBe(normalized4);
      expect(normalized1).toBe(normalized5);
      expect(normalized1).toBe(normalized6);
      expect(normalized1).toBe(normalized7);
    });
    it("should normalize different auth type than default to a DIFFERENT identity", () => {
      const normalized1 = normalizeHostConfig({ authType: "none" });
      const normalized2 = normalizeHostConfig({});
      expect(normalized1).not.toBe(normalized2);
    });
  });

  describe("With default host config", () => {
    beforeEach(() => {
      clearDefaultHostConfig();
      setDefaultHostConfig({ host: "somewhere", clientId: "123", authType: "oauth2" });
    });
    it("should use a default host config", () => {
      const normalized1 = normalizeHostConfig({ host: "somewhere", clientId: "123", authType: "oauth2" });
      const normalized2 = normalizeHostConfig({ host: "somewhere", clientId: "123" });
      const normalized3 = normalizeHostConfig({});
      const normalized4 = normalizeHostConfig(undefined);
      const somethingElse = normalizeHostConfig({ host: "somewhere", clientId: "dufferent", authType: "oauth2" });
      expect(normalized1).toBe(normalized2);
      expect(normalized1).toBe(normalized3);
      expect(normalized1).toBe(normalized4);
      expect(normalized1).not.toBe(somethingElse);
    });
  });
});
