import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { isHostCrossOrigin, toValidLocationUrl, toValidWebsocketLocationUrl } from "../auth-functions";

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
