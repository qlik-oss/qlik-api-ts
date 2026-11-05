// Hoisted by Vitest before any imports — sets the public default to a value that is
// deliberately distinct from the internal API_VERSION so that
// each test can prove which constant is actually used.
vi.mock("#public/api-version", () => ({ API_VERSION: "2025-08" }));

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { setDefaultHostConfig } from "#internal/auth/auth-functions";
import type { HostConfig } from "#internal/auth/auth-types";
import { clearDefaultHostConfig } from "#internal/auth/internal/host-config-functions";
import { QLIK_API_VERSION_HEADER } from "#internal/http/http-constants";
import { addInterceptor, removeInterceptor, type RestInterceptor } from "#internal/interceptors/interceptors";
import { setPlatform } from "#test-utils";
import { invokeFetch } from "#public/invoke-fetch";

// Mirror the mock factory value here so assertions read clearly.
const PUBLIC_VERSION = "2025-08";

const userAgentHeader = (userAgent: unknown) =>
  expect.objectContaining({ headers: expect.objectContaining({ "User-Agent": userAgent }) });

const apiHeader = (version: string) =>
  expect.objectContaining({
    headers: expect.objectContaining({ [QLIK_API_VERSION_HEADER]: version }),
  });

describe("public invokeFetch – api version handling", () => {
  beforeEach(() => {
    clearDefaultHostConfig();
    setDefaultHostConfig({ authType: "cookie" });
    // avoid extra fetch calls to product-info.json
    setPlatform(undefined, { isCloud: true, isQCS: true });
    fetchMock.resetMocks();
    fetchMock.doMock(JSON.stringify({}));
  });

  afterEach(() => {
    clearDefaultHostConfig();
    vi.restoreAllMocks();
  });

  it("sends the public default version when no apiVersion is supplied", async () => {
    await invokeFetch("test", {
      method: "get",
      pathTemplate: "/api/test",
      options: { noCache: true },
    });

    expect(fetchMock).toHaveBeenCalledWith(expect.any(String), apiHeader(PUBLIC_VERSION));
  });

  it.each(["2024-02", "latest", "not-a-valid-version"])(
    "sends the public version even when %s is supplied as apiVersion",
    async (apiVersion) => {
      await invokeFetch("test", {
        method: "get",
        pathTemplate: "/api/test",
        apiVersion,
        options: { noCache: true },
      });

      expect(fetchMock).toHaveBeenCalledWith(expect.any(String), apiHeader(PUBLIC_VERSION));
    },
  );

  it("sends the qlik-api user-agent by default", async () => {
    await invokeFetch("test", { method: "get", pathTemplate: "/api/test", options: { noCache: true } });

    expect(fetchMock).toHaveBeenLastCalledWith(
      expect.any(String),
      expect.objectContaining({
        headers: expect.objectContaining({ "User-Agent": expect.stringContaining("qlik-api/latest") }),
      }),
    );
  });

  it("honours the userAgent property", async () => {
    await invokeFetch("test", {
      method: "get",
      pathTemplate: "/api/test",
      userAgent: "my-agent",
      options: { noCache: true },
    });

    expect(fetchMock).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({ headers: expect.objectContaining({ "User-Agent": "my-agent" }) }),
    );
  });

  it("honours a userAgent set by an interceptor", async () => {
    const interceptor: RestInterceptor = (request, proceed) => proceed({ ...request, userAgent: "intercepted-agent" });
    addInterceptor(interceptor);
    try {
      await invokeFetch("test", { method: "get", pathTemplate: "/api/test", options: { noCache: true } });
    } finally {
      removeInterceptor(interceptor);
    }

    expect(fetchMock).toHaveBeenLastCalledWith(expect.any(String), userAgentHeader("intercepted-agent"));
  });

  it("forwards the userAgent to the runtime module", async () => {
    const invokeFetchSpy = vi.spyOn(await import("#internal/invoke-fetch/invoke-fetch"), "invokeFetch");

    await invokeFetch("test", {
      method: "get",
      pathTemplate: "/api/test",
      options: { noCache: true },
    });

    expect(invokeFetchSpy).toHaveBeenCalledWith(
      "test",
      expect.objectContaining({ userAgent: expect.stringContaining("qlik-api/latest") }),
    );
  });

  describe("on a non-cloud host", () => {
    const hostConfig: HostConfig = { host: "https://windows.example.com", authType: "windowscookie" };
    const sentHeaders = () => (fetchMock.mock.lastCall?.[1]?.headers ?? {}) as Record<string, string>;

    beforeEach(() => {
      setPlatform(hostConfig, { isQSE: true, isWindows: true });
    });

    it("does not send the header", async () => {
      await invokeFetch("test", { method: "get", pathTemplate: "/api/test", options: { hostConfig, noCache: true } });

      expect(sentHeaders()).not.toHaveProperty(QLIK_API_VERSION_HEADER);
    });

    it("does not send the header when an apiVersion is supplied", async () => {
      await invokeFetch("test", {
        method: "get",
        pathTemplate: "/api/test",
        apiVersion: "2024-02",
        options: { hostConfig, noCache: true },
      });

      expect(sentHeaders()).not.toHaveProperty(QLIK_API_VERSION_HEADER);
    });
  });
});
