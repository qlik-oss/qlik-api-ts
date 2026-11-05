import { afterEach, beforeEach, describe, expect, it, test, vi } from "vitest";
import type { MockInstance } from "vitest";
import type { HostConfig } from "#internal/auth/auth-types";
import { setPlatform } from "#test-utils";
import * as utils from "#internal/utils/utils";
import { canSendApiVersionHeader, encodeQueryParams, means401OnWindows } from "../internal/invoke-fetch-helpers";
import { clearRelatedCacheEntries, cloneResultPromise, toCacheKey } from "../internal/response-cache";
import type { CacheEntry, InvokeFetchResponse } from "../invoke-fetch-types";

describe("canSendApiVersionHeader", () => {
  const sameOrigin: HostConfig = { authType: "cookie" };
  const crossOrigin: HostConfig = { host: "https://cross-origin.example.com", authType: "cookie" };

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it.each([
    ["QCS", { isCloud: true, isQCS: true }],
    ["QCG", { isCloud: true, isQCG: true }],
    ["Cloud Console", { isCloud: true, isCloudConsole: true }],
  ])("should send the header same-origin on %s", async (_, platform) => {
    setPlatform(sameOrigin, platform);

    expect(await canSendApiVersionHeader(sameOrigin)).toBe(true);
  });

  it.each([
    ["QCS", { isCloud: true, isQCS: true }],
    ["Cloud Console", { isCloud: true, isCloudConsole: true }],
  ])("should send the header cross-origin on %s", async (_, platform) => {
    setPlatform(crossOrigin, platform);

    expect(await canSendApiVersionHeader(crossOrigin)).toBe(true);
  });

  it("should not send the header cross-origin on QCG in a browser", async () => {
    setPlatform(crossOrigin, { isCloud: true, isQCG: true });

    expect(await canSendApiVersionHeader(crossOrigin)).toBe(false);
  });

  it("should send the header cross-origin on QCG outside a browser", async () => {
    vi.spyOn(utils, "isBrowser").mockReturnValue(false);
    setPlatform(crossOrigin, { isCloud: true, isQCG: true });

    expect(await canSendApiVersionHeader(crossOrigin)).toBe(true);
  });

  it.each([
    ["Windows", { isQSE: true, isWindows: true }],
    ["an unknown platform", { isUnknown: true }],
  ])("should not send the header on %s", async (_, platform) => {
    setPlatform(sameOrigin, platform);
    setPlatform(crossOrigin, platform);

    expect(await canSendApiVersionHeader(sameOrigin)).toBe(false);
    expect(await canSendApiVersionHeader(crossOrigin)).toBe(false);
  });
});

const cacheEntry = {
  lastPulled: 1,
  lastHit: null,
  hitCount: 0,
  accessedPaths: new Set<string>(),
  value: new Promise<InvokeFetchResponse>(() => {}),
};

describe("test helpers", () => {
  it("should encode common types just fine", () => {
    const result = encodeQueryParams({
      a: "b",
      c: ["d", "e"],
      f: true,
      g: 123,
    });
    expect(result).toBe("a=b&c=d%2Ce&f=true&g=123");
  });

  it("should not include undefined or null when encoding query params", () => {
    const result = encodeQueryParams({
      a: 0,
      b: "",
      d: undefined,
      e: null,
      f: true,
      g: false,
    });
    expect(result).toBe("a=0&b=&e=null&f=true&g=false");
  });

  describe("pre-encoded query params", () => {
    let warnSpy: MockInstance<typeof console.warn>;

    beforeEach(() => {
      warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    });

    afterEach(() => {
      warnSpy.mockRestore();
      globalThis.localStorage.removeItem("devtools");
    });

    it("should warn when a query param value is pre-encoded", () => {
      globalThis.localStorage.setItem("devtools", "true");
      const result = encodeQueryParams({ filter: "a%20b%2Fc" });

      expect(result).toBe("filter=a%20b%2Fc");
      expect(warnSpy).toHaveBeenCalledTimes(1);
      expect(warnSpy).toHaveBeenCalledWith("[Qlik] Usage of pre-encoded query parameters is strongly discouraged.");
    });

    it("should warn once per pre-encoded value", () => {
      globalThis.localStorage.setItem("devtools", "true");
      encodeQueryParams({ a: "%41", b: "plain", c: "%42" });

      expect(warnSpy).toHaveBeenCalledTimes(2);
    });

    it("should not warn for pre-encoded value if not dev-mode", () => {
      encodeQueryParams({ a: "%41", b: "plain", c: "%42" });
      expect(warnSpy).toHaveBeenCalledTimes(0);
    });

    it("should not warn for values that are not pre-encoded", () => {
      globalThis.localStorage.setItem("devtools", "true");
      const result = encodeQueryParams({ a: "a b", b: "plain", c: 1, d: ["x", "y"], e: "100%" });

      expect(result).toBe("a=a%20b&b=plain&c=1&d=x%2Cy&e=100%25");
      expect(warnSpy).not.toHaveBeenCalled();
    });
  });

  describe("updating a specific item", () => {
    it("should clear the item and the parent list but not the sibling item", () => {
      const cache: Record<string, CacheEntry> = {};
      cache["/api/v1/items"] = cacheEntry;
      cache["/api/v1/items?page=2"] = cacheEntry;
      cache["/api/v1/items/1"] = cacheEntry;
      cache["/api/v1/items/2"] = cacheEntry;
      cache['/api/v1/items/2?page=2+headers={"Match-If":"bar"}'] = cacheEntry;
      cache['/api/v1/items/3+headers={"Match-If":"bar"}'] = cacheEntry;
      cache["/api/v1/unrelated"] = cacheEntry;

      clearRelatedCacheEntries(cache, "/api/v1/items/2");
      expect(cache["/api/v1/items"]).toBeUndefined();
      expect(cache["/api/v1/items?page=2"]).toBeUndefined();
      expect(cache["/api/v1/items/1"]).toBeDefined();
      expect(cache["/api/v1/items/2"]).toBeUndefined();
      expect(cache['/api/v1/items/3+headers={"Match-If":"bar"}']).toBeDefined();
      expect(cache["/api/v1/unrelated"]).toBeDefined();
    });
  });
  describe("updating a list", () => {
    it("should clear the list and all children", () => {
      const cache: Record<string, CacheEntry> = {};
      cache["/api/v1/items"] = cacheEntry;
      cache["/api/v1/items?page=2"] = cacheEntry;
      cache["/api/v1/items/1"] = cacheEntry;
      cache["/api/v1/items/2"] = cacheEntry;
      cache["/api/v1/unrelated"] = cacheEntry;

      clearRelatedCacheEntries(cache, "/api/v1/items");
      expect(cache["/api/v1/items"]).toBeUndefined();
      expect(cache["/api/v1/items?page=2"]).toBeUndefined();
      expect(cache["/api/v1/items/1"]).toBeUndefined();
      expect(cache["/api/v1/items/2"]).toBeUndefined();
      expect(cache["/api/v1/unrelated"]).toBeDefined();
    });
  });
  describe("toCacheKey", () => {
    test("should build a cache key from parameters", () => {
      expect(toCacheKey({ url: "/api/call", headers: { foo: "bar" }, serializedHostConfig: "{}" })).toBe(
        '/api/call+headers={"foo":"bar"}',
      );
      expect(
        toCacheKey({
          url: "/api/call?search=foo",
          serializedHostConfig: '{"apiKey":"banana"}',
          headers: { "Match-If": "foo", Accept: "text/plain" },
        }),
        // Headers are normalized by lower-casing the header fields (not values) and sorting them.
      ).toBe('/api/call?search=foo+headers={"accept":"text/plain","match-if":"foo"}+host-config={"apiKey":"banana"}');
      expect(toCacheKey({ url: "/api/call", serializedHostConfig: "{}" })).toBe("/api/call");
      expect(
        toCacheKey({
          url: "/api/call?search=foo",
          serializedHostConfig: "{}",
        }),
      ).toBe("/api/call?search=foo");
      expect(
        toCacheKey({
          url: "/api/call?find=bar&search=foo",
          serializedHostConfig: "{}",
        }),
      ).toBe("/api/call?find=bar&search=foo");
    });
  });

  describe("cloneResultPromise", () => {
    it("should handle undefined data", async () => {
      const mockResponse: InvokeFetchResponse = {
        data: undefined,
        headers: new Headers(),
        status: 200,
      };

      const cloned = await cloneResultPromise(Promise.resolve(mockResponse));

      expect(cloned.data).toBeUndefined();
      expect(cloned.status).toBe(200);
    });

    it("should handle null data", async () => {
      const mockResponse: InvokeFetchResponse = {
        data: null,
        headers: new Headers(),
        status: 200,
      };

      const cloned = await cloneResultPromise(Promise.resolve(mockResponse));

      expect(cloned.data).toBeNull();
      expect(cloned.status).toBe(200);
    });

    it("should handle empty string data", async () => {
      const mockResponse: InvokeFetchResponse = {
        data: "",
        headers: new Headers(),
        status: 204,
      };

      const cloned = await cloneResultPromise(Promise.resolve(mockResponse));

      expect(cloned.data).toBe("");
      expect(cloned.status).toBe(204);
    });

    it("should clone object data", async () => {
      const originalData = { name: "test", value: 123 };
      const mockResponse: InvokeFetchResponse = {
        data: originalData,
        headers: new Headers(),
        status: 200,
      };

      const cloned = await cloneResultPromise(Promise.resolve(mockResponse));

      expect(cloned.data).toEqual(originalData);
      expect(cloned.data).not.toBe(originalData); // Should be a different object reference
      expect(cloned.status).toBe(200);
    });

    it("should preserve next and prev properties", async () => {
      const nextFn = () => Promise.resolve({ data: "next", headers: new Headers(), status: 200 });
      const prevFn = () => Promise.resolve({ data: "prev", headers: new Headers(), status: 200 });

      const mockResponse: InvokeFetchResponse = {
        data: { test: "data" },
        headers: new Headers(),
        status: 200,
        next: nextFn,
        prev: prevFn,
      };

      const cloned = await cloneResultPromise(Promise.resolve(mockResponse));

      expect(cloned.next).toBe(nextFn);
      expect(cloned.prev).toBe(prevFn);
    });
  });

  describe("means401OnWindows", () => {
    it("should return true for 301 and 302 status codes", () => {
      expect(means401OnWindows("/some/url", 301)).toBe(true);
      expect(means401OnWindows("/some/url", 302)).toBe(true);
    });

    it("should return true for 403 status code on /qps/csrftoken endpoint", () => {
      expect(means401OnWindows("/some/url/qps/csrftoken?xrfkey=12345", 403)).toBe(true);
    });

    it("should return false for other status codes", () => {
      expect(means401OnWindows("/some/url", 200)).toBe(false);
      expect(means401OnWindows("/some/url/qps/csrftoken?xrfkey=12345", 200)).toBe(false);
    });
  });
});
