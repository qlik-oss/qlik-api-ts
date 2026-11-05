import { NoErrorThrownError, getError, setPlatform } from "#test-utils";
import { afterAll, afterEach, beforeEach, describe, expect, it, vi, type MockInstance } from "vitest";
import { InvalidHostConfigError } from "#internal/auth/auth-errors";
import { logout, registerAuthModule, setDefaultHostConfig } from "#internal/auth/auth-functions";
import type { HostConfig } from "#internal/auth/auth-types";
import { clearDefaultHostConfig } from "#internal/auth/internal/host-config-functions";
import { QLIK_API_VERSION_HEADER, QLIK_CSRF_TOKEN_HEADER } from "#internal/http/http-constants";
import { clearCsrfToken } from "#internal/http/http-functions";
import { EncodingError, InvokeFetchError, PagingError } from "#internal/invoke-fetch/invoke-fetch-errors";
import { clearApiCache, invokeFetch } from "#internal/invoke-fetch/invoke-fetch-functions";
import type {
  ApiCallOptions,
  DownloadableBlob,
  InvokeFetchResponse,
  PageCallOptions,
} from "#internal/invoke-fetch/invoke-fetch-types";
import * as invokeFetchHelpers from "../internal/invoke-fetch-helpers";
import * as invokeFetchMethods from "../internal/invoke-fetch-methods";
import { encodeBody } from "../internal/invoke-fetch-methods";
import { API_VERSION } from "#internal/api-version";
import { clearPlatform } from "#internal/platform/platform-functions";
import { getMyUser } from "#public/rest/users";
import * as utils from "#internal/utils/utils";

declare global {
  interface QlikAuthModules {
    "paging-token": { config: object };
  }
}

let dateNowSpy: MockInstance<(this: number) => number>;

const THE_BEGINNING_OF_TIME = 1487076708000;
const MILLISECOND = 1;
const SECOND = 1000 * MILLISECOND;

const fakeData = { propA: "everything is fake", propB: "maybe not everything" };

const { location: oldWindowLocation } = globalThis;

const apiNamespace = "test-namespace";

const sleep = () =>
  new Promise((res) => {
    setTimeout(res, 0);
  });

const mockLocation = (origin: string, href: string) => {
  // keeps document.baseURI in line with the mocked location
  (globalThis as { happyDOM?: { setURL(url: string): void } }).happyDOM?.setURL(href);
  // @ts-expect-error mocked location object in test
  delete globalThis.location;
  // @ts-expect-error mocked location object in test
  globalThis.location = Object.defineProperties(
    {},
    {
      replace: { configurable: true, value: vi.fn() },
      origin: { configurable: true, value: origin },
      href: { configurable: true, writable: true, value: href },
    },
  );
};

describe("invokeFetch function", () => {
  afterAll(() => {
    // Unlock Time
    dateNowSpy.mockRestore();
    globalThis.location = oldWindowLocation;
  });

  beforeEach(() => {
    mockLocation("https://frontend-core.com", "https://frontend-core.com/app/page");

    clearDefaultHostConfig();
    setDefaultHostConfig({ authType: "cookie" });
    // avoid extra fetch calls to product-info.json
    setPlatform(undefined, { isCloud: true, isQCS: true });
    fetchMock.resetMocks();
    fetchMock.doMock(JSON.stringify(fakeData));
    // Lock Time
    dateNowSpy = vi.spyOn(Date, "now").mockImplementation(() => THE_BEGINNING_OF_TIME);

    clearApiCache(apiNamespace);
    clearCsrfToken();
    globalThis.loggingOut = false;
  });

  afterEach(() => {
    clearDefaultHostConfig();
  });

  it("should do one http request", async () => {
    await invokeFetch(apiNamespace, { method: "get", pathTemplate: "/api/call" });
    expect(fetch).toHaveBeenCalledTimes(1);
    const data = await invokeFetch(apiNamespace, {
      method: "get",
      pathTemplate: "/api/call",
    });
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(data).toMatchObject({ data: fakeData, status: 200 });
  });

  it("should fetch product-info once to decide on the api-version header", async () => {
    clearPlatform();

    await invokeFetch(apiNamespace, { method: "get", pathTemplate: "/api/call" });
    await invokeFetch(apiNamespace, { method: "get", pathTemplate: "/api/another/call" });

    const productInfoCalls = fetchMock.mock.calls.filter(([url]) => (url as string).includes("product-info.json"));
    expect(productInfoCalls).toHaveLength(1);
    expect(fetch).toHaveBeenCalledTimes(3);
    expect(fetch).toHaveBeenLastCalledWith(
      "/api/another/call",
      expect.objectContaining({ headers: expect.objectContaining({ [QLIK_API_VERSION_HEADER]: API_VERSION }) }),
    );
  });

  it("should not cache a different url", async () => {
    await invokeFetch(apiNamespace, { method: "get", pathTemplate: "/api/call" });
    expect(fetch).toHaveBeenCalledTimes(1);
    await invokeFetch(apiNamespace, { method: "get", pathTemplate: "/api/another/call" });
    expect(fetch).toHaveBeenCalledTimes(2);
  });

  it("should hit cache if the params are the same", async () => {
    await invokeFetch(apiNamespace, {
      method: "get",
      pathTemplate: "/api/call/",
      query: { param1: "nisse" },
    });
    expect(fetch).toHaveBeenCalledTimes(1);
    await invokeFetch(apiNamespace, {
      method: "get",
      pathTemplate: "/api/call/",
      query: { param1: "nisse" },
    });
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("should not hit cache if the options are different", async () => {
    await invokeFetch(apiNamespace, {
      method: "get",
      pathTemplate: "/api/call/",
      query: { param1: "nisse" },
    });
    expect(fetch).toHaveBeenCalledTimes(1);
    await invokeFetch(apiNamespace, {
      method: "get",
      pathTemplate: "/api/call/",
      query: { param1: "olle" },
    });
    expect(fetch).toHaveBeenCalledTimes(2);
  });

  it("should not hit cache if the method is different from get", async () => {
    await invokeFetch(apiNamespace, {
      method: "get",
      pathTemplate: "/api/call/",
      query: { param1: "nisse" },
    });
    expect(fetch).toHaveBeenCalledTimes(1);
    await invokeFetch(apiNamespace, {
      method: "post",
      pathTemplate: "/api/call/",
      query: { param1: "olle" },
    });
    // Once for the post and once for the csrf token retrieval
    expect(fetch).toHaveBeenCalledTimes(3);
  });

  it("should not hit cache after 10 minutes", async () => {
    await invokeFetch(apiNamespace, { method: "get", pathTemplate: "/api/call" });
    expect(fetch).toHaveBeenCalledTimes(1);
    const tenMin = 1000 /* ms */ * 60 /* sec */ * 10;
    dateNowSpy.mockImplementation(() => THE_BEGINNING_OF_TIME + tenMin);
    await invokeFetch(apiNamespace, { method: "get", pathTemplate: "/api/call" });
    expect(fetch).toHaveBeenCalledTimes(2);
  });

  it("should not hit cache if invalidateCache param is true", async () => {
    await invokeFetch(apiNamespace, { method: "get", pathTemplate: "/api/call/" });
    expect(fetch).toHaveBeenCalledTimes(1);
    await invokeFetch(apiNamespace, {
      method: "get",
      pathTemplate: "/api/call/",
      options: { noCache: true },
    });
    expect(fetch).toHaveBeenCalledTimes(2);
  });

  it("should not hit cache if age of cache is older than the supplied max age in seconds", async () => {
    await invokeFetch(apiNamespace, { method: "get", pathTemplate: "/api/call", options: { maxCacheAge: 7 * SECOND } });
    expect(fetch).toHaveBeenCalledTimes(1);

    // Call again after 5 seconds, cache is still valid
    dateNowSpy.mockImplementation(() => THE_BEGINNING_OF_TIME + 5 * SECOND);
    await invokeFetch(apiNamespace, { method: "get", pathTemplate: "/api/call", options: { maxCacheAge: 7 * SECOND } });
    expect(fetch).toHaveBeenCalledTimes(1);

    // Call again after 5 seconds, cache is not valid so fetch should be called once again
    dateNowSpy.mockImplementation(() => THE_BEGINNING_OF_TIME + 10 * SECOND);
    await invokeFetch(apiNamespace, { method: "get", pathTemplate: "/api/call", options: { maxCacheAge: 7 * SECOND } });
    expect(fetch).toHaveBeenCalledTimes(2);
  });

  it("should not hit cache if age of cache is older than the supplied max age timestamp", async () => {
    await invokeFetch(apiNamespace, { method: "get", pathTemplate: "/api/call" });
    expect(fetch).toHaveBeenCalledTimes(1);

    // Call again with a max age timestamp set to 5 seconds before the cached call, the cache should be used
    await invokeFetch(apiNamespace, {
      method: "get",
      pathTemplate: "/api/call",
      options: { useCacheIfAfter: new Date(THE_BEGINNING_OF_TIME - 5 * SECOND) },
    });
    expect(fetch).toHaveBeenCalledTimes(1);

    // Call again with a max age timestamp set to 5 seconds AFTER the cached call, the cache should NOT be used
    await invokeFetch(apiNamespace, {
      method: "get",
      pathTemplate: "/api/call",
      options: { useCacheIfAfter: new Date(THE_BEGINNING_OF_TIME + 5 * SECOND) },
    });
    expect(fetch).toHaveBeenCalledTimes(2);
  });

  it("should handle responses with invalid JSON", async () => {
    fetchMock.mockOnce("invalid response");
    const res = await invokeFetch<InvokeFetchResponse>(apiNamespace, {
      method: "get",
      pathTemplate: "/api/call/",
    });
    expect(res.data).toBe("invalid response");
  });

  it("should throw error for >300 status code", async () => {
    fetchMock.mockOnce({ body: "error", status: 301 });
    const error = await getError<InvokeFetchError>(
      async () =>
        await invokeFetch<InvokeFetchResponse>(apiNamespace, {
          method: "get",
          pathTemplate: "/api/call",
        }),
    );
    expect(error).not.toBeInstanceOf(NoErrorThrownError);
    expect(error.message).toContain("request to '/api/call' failed with status 301");
    expect(error).toBeInstanceOf(InvokeFetchError);
    expect(error.status).toBe(301);
  });

  it("should throw InvokeFetchError on all errors", async () => {
    fetchMock.mockRejectOnce(new Error("Fetch failed miserably"));
    const error = await getError<InvokeFetchError>(
      async () =>
        await invokeFetch<InvokeFetchResponse>(apiNamespace, {
          method: "get",
          pathTemplate: "/api/call",
        }),
    );
    expect(error).not.toBeInstanceOf(NoErrorThrownError);
    expect(error).toBeInstanceOf(InvokeFetchError);
    expect(error.status).toBe(0);
    expect(error.message).toBe("Fetch failed miserably");
  });

  it("should throw InvokeFetchError when the response body cannot be read on a 2xx response", async () => {
    const erroringStream = new ReadableStream({
      start(controller) {
        controller.error(new Error("network connection lost mid-body"));
      },
    });
    fetchMock.mockImplementationOnce(() =>
      Promise.resolve(
        new Response(erroringStream, {
          status: 200,
          statusText: "OK",
          headers: { "content-type": "application/json" },
        }),
      ),
    );
    const error = await getError<InvokeFetchError>(
      async () =>
        await invokeFetch<InvokeFetchResponse>(apiNamespace, {
          method: "get",
          pathTemplate: "/api/call",
        }),
    );
    expect(error).not.toBeInstanceOf(NoErrorThrownError);
    expect(error).toBeInstanceOf(InvokeFetchError);
    expect(error.status).toBe(200);
    expect(error.message).toContain("failed while reading response body");
  });

  it("should not cache a body-read failure on a 2xx response", async () => {
    const erroringStream = new ReadableStream({
      start(controller) {
        controller.error(new Error("network connection lost mid-body"));
      },
    });
    fetchMock.mockImplementationOnce(() =>
      Promise.resolve(
        new Response(erroringStream, {
          status: 200,
          statusText: "OK",
          headers: { "content-type": "application/json" },
        }),
      ),
    );
    fetchMock.mockOnce(JSON.stringify(fakeData));
    await invokeFetch<InvokeFetchResponse>(apiNamespace, {
      method: "get",
      pathTemplate: "/api/call",
    }).catch(() => {});
    const second = await invokeFetch<InvokeFetchResponse & { data: typeof fakeData }>(apiNamespace, {
      method: "get",
      pathTemplate: "/api/call",
    });
    expect(second.data).toEqual(fakeData);
    expect(fetch).toHaveBeenCalledTimes(2);
  });

  it("should not cause a redirect on 401 if user has logged out", () =>
    new Promise<void>((resolve) => {
      logout();
      fetchMock.mockOnce("redirect me", { status: 401 });
      void invokeFetch<InvokeFetchResponse>(apiNamespace, {
        method: "get",
        pathTemplate: "/api/call",
      });

      setTimeout(() => {
        expect(globalThis.location.replace).not.toHaveBeenCalled();
        resolve();
      }, 0);
    }));

  it("should cause a redirect on 401", () =>
    new Promise<void>((resolve) => {
      fetchMock.mockOnce("redirect me", { status: 401 });
      void invokeFetch<InvokeFetchResponse>(apiNamespace, {
        method: "get",
        pathTemplate: "/api/call",
      });

      setTimeout(() => {
        expect(globalThis.location.replace).toHaveBeenCalled();
        resolve();
      }, 0);
    }));

  type Result = { status: number; headers: Headers; data: { field: string } };
  it("should only call fetch once even when two calls are made simultaneously", () =>
    new Promise<string>((resolve) => {
      let resolveFetchPromise: (value: Response | PromiseLike<Response>) => void = () => {
        resolve("this function should have been overwritten below. Only needed for TS reasons");
      };
      const fetchPromise = new Promise<Response>((_resolve) => {
        resolveFetchPromise = _resolve;
      });

      fetchMock.mockImplementation(() => fetchPromise);

      let firstResult: Result;
      void invokeFetch<Result>(apiNamespace, {
        method: "get",
        pathTemplate: "/api/call",
      }).then((result) => {
        firstResult = result;
      });

      let secondResult: Result;
      void invokeFetch<Result>(apiNamespace, {
        method: "get",
        pathTemplate: "/api/call",
      }).then((result) => {
        secondResult = result;
      });

      resolveFetchPromise(
        new Response('{"field":"here"}', {
          status: 200,
          statusText: "ok",
        }),
      );

      setTimeout(() => {
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(firstResult.data.field).toBe("here");
        expect(firstResult).toHaveProperty("headers");
        expect(secondResult.data.field).toBe("here");
        expect(secondResult).toHaveProperty("headers");
        expect(firstResult).not.toBe(secondResult);
        expect(firstResult.data).not.toBe(secondResult.data);
        expect(firstResult.data).toEqual(secondResult.data);
        resolve("ok");
      });
    }));

  it("should not override caller-provided qlik-api-version or user-agent headers", async () => {
    await invokeFetch(apiNamespace, {
      method: "get",
      pathTemplate: "/api/call",
      options: { headers: { "Qlik-Api-Version": "2024-02", "user-agent": "custom-agent" } },
    });

    const headers = fetchMock.mock.calls[0][1]?.headers as Record<string, string>;
    expect(headers).toEqual({ "Qlik-Api-Version": "2024-02", "user-agent": "custom-agent" });
  });

  it("should validate a cross domain host config before looking up the platform", async () => {
    // without a location origin every host counts as cross-origin, which requires a host
    vi.stubGlobal("location", {});
    const canSendApiVersionHeaderSpy = vi.spyOn(invokeFetchHelpers, "canSendApiVersionHeader");
    try {
      const error = await getError(() =>
        invokeFetch(apiNamespace, {
          method: "get",
          pathTemplate: "/api/call",
          options: { hostConfig: { authType: "apikey", apiKey: "key" } },
        }),
      );

      expect(error).toBeInstanceOf(InvalidHostConfigError);
      expect(canSendApiVersionHeaderSpy).not.toHaveBeenCalled();
      expect(fetch).not.toHaveBeenCalled();
    } finally {
      canSendApiVersionHeaderSpy.mockRestore();
      vi.unstubAllGlobals();
    }
  });

  it.each([
    ["mock-backend", (mock: HostConfig<"mock-backend">["mockInvokeFetch"]) => ({ mockInvokeFetch: mock })],
    [
      "mock-backend-rest-recorder",
      (mock: HostConfig<"mock-backend">["mockInvokeFetch"]) => ({ recordInvokeFetch: mock }),
    ],
  ] as const)("should use a %s default host config instead of fetching", async (authType, toConfig) => {
    const mockResponse = { status: 200, headers: new Headers(), data: "mocked" };
    const mock = vi.fn(() => Promise.resolve(mockResponse));
    clearDefaultHostConfig();
    setDefaultHostConfig({ authType, ...toConfig(mock) } as HostConfig);
    const props = { method: "get", pathTemplate: "/api/call" };

    const result = await invokeFetch(apiNamespace, props);

    expect(result).toBe(mockResponse);
    expect(mock).toHaveBeenCalledWith(props);
    expect(fetch).not.toHaveBeenCalled();
  });

  it("should send additional headers to fetch", async () => {
    const customHeaders = { "X-Custom-Header": "foo" };

    await invokeFetch<{ data: string; headers: Headers; status: number }>(apiNamespace, {
      method: "post",
      pathTemplate: "/api/call",
      options: { headers: customHeaders },
    }).catch(() => {});

    expect(fetch).toHaveBeenCalledTimes(2); // one for csrf, one for api call
    expect(fetch).toHaveBeenNthCalledWith(
      2,
      "/api/call",
      expect.objectContaining({
        headers: expect.objectContaining(customHeaders),
      }),
    );
  });

  it("should not use cache if headers have changed", async () => {
    await invokeFetch<{ data: string; headers: Headers; status: number }>(apiNamespace, {
      method: "get",
      pathTemplate: "/api/call",
      options: {
        headers: { "Match-If": "foo" },
      },
    }).catch(() => {});
    await invokeFetch<{ data: string; headers: Headers; status: number }>(apiNamespace, {
      method: "get",
      pathTemplate: "/api/call",
      options: {
        headers: { "Match-If": "bar" },
      },
    }).catch(() => {});
    await invokeFetch<{ data: string; headers: Headers; status: number }>(apiNamespace, {
      method: "get",
      pathTemplate: "/api/call",
      options: {
        headers: { "Match-If": "bar" },
      },
    }).catch(() => {});
    await invokeFetch<{ data: string; headers: Headers; status: number }>(apiNamespace, {
      method: "get",
      pathTemplate: "/api/call",
      options: {
        headers: { "Match-If": "foo" },
      },
    }).catch(() => {});

    // 2 unique calls, 4 in total
    expect(fetch).toHaveBeenCalledTimes(2);

    expect(fetch).toHaveBeenNthCalledWith(
      1,
      "/api/call",
      expect.objectContaining({
        headers: expect.objectContaining({ "Match-If": "foo" }),
      }),
    );
    // Verify second call gets made with different headers
    expect(fetch).toHaveBeenNthCalledWith(
      2,
      "/api/call",
      expect.objectContaining({
        headers: expect.objectContaining({ "Match-If": "bar" }),
      }),
    );
  });

  it("should not cache errors", async () => {
    fetchMock.mockOnce("error", { status: 301 });
    fetchMock.mockOnce("ok", { status: 200 });

    try {
      await invokeFetch<{ data: string; headers: Headers; status: number }>(apiNamespace, {
        method: "get",
        pathTemplate: "/api/call",
      });
      expect(true).toBeFalsy(); // Should never end up here
      // eslint-disable-next-line no-empty
    } catch {}
    try {
      await invokeFetch<{ data: string; headers: Headers; status: number }>(apiNamespace, {
        method: "get",
        pathTemplate: "/api/call",
      });
      expect(true).toBeFalsy(); // Should never end up here
      // eslint-disable-next-line no-empty
    } catch {}
    await invokeFetch<{ data: string; headers: Headers; status: number }>(apiNamespace, {
      method: "get",
      pathTemplate: "/api/call",
    });
    expect(fetch).toHaveBeenCalledTimes(2);
  });

  it("should be abortable", async () => {
    const controller = new AbortController();
    const invokePromise = invokeFetch("bogus", {
      method: "get",
      pathTemplate: "/api/call",
      options: {
        signal: controller.signal,
      },
    });
    controller.abort();
    try {
      await invokePromise;
      expect(true).toBeFalsy(); // Promise should be rejected through abort
      // eslint-disable-next-line no-empty
    } catch {}
  });

  it("should timeout", async () => {
    try {
      await invokeFetch("bogus", {
        method: "get",
        pathTemplate: "/api/call",
        options: {
          timeoutMs: 1,
        },
      });
      expect(true).toBeFalsy(); // Promise should be rejected through timeout
      // eslint-disable-next-line no-empty
    } catch {}
  });

  describe("csrf token", () => {
    const csrfTokenValue = "csrf-token";

    it("should only retrieve csrf token once", async () => {
      // first call
      fetchMock.mockOnce("ok", { status: 200, headers: { [QLIK_CSRF_TOKEN_HEADER]: csrfTokenValue } }); // csrf response
      fetchMock.mockOnce("ok", { status: 200 }); // data response
      // second call
      fetchMock.mockOnce("ok", { status: 200 }); // data response

      await invokeFetch<{ data: string; headers: Headers; status: number }>(apiNamespace, {
        method: "post",
        pathTemplate: "/api/call",
      });
      expect(fetchMock).toHaveBeenCalledTimes(2); // once for csrf, once for data
      expect(fetchMock).toHaveBeenNthCalledWith(1, "/api/v1/csrf-token", expect.anything());
      expect(fetchMock).toHaveBeenNthCalledWith(
        2,
        "/api/call",
        expect.objectContaining({
          headers: {
            [QLIK_CSRF_TOKEN_HEADER]: csrfTokenValue,
            [QLIK_API_VERSION_HEADER]: API_VERSION,
            "User-Agent": expect.stringContaining("qmfe-api/latest"),
          },
        }),
      );

      await invokeFetch<{ data: string; headers: Headers; status: number }>(apiNamespace, {
        method: "post",
        pathTemplate: "/api/call",
      });
      expect(fetchMock).toHaveBeenCalledTimes(3); // two earlier calls + now, only for data
      expect(fetchMock).toHaveBeenNthCalledWith(
        3,
        "/api/call",
        expect.objectContaining({
          headers: {
            [QLIK_CSRF_TOKEN_HEADER]: csrfTokenValue,
            [QLIK_API_VERSION_HEADER]: API_VERSION,
            "User-Agent": expect.stringContaining("qmfe-api/latest"),
          },
        }),
      );
    });

    it("should clear csrf token after a 401 call", async () => {
      // First call, data and set token
      fetchMock.mockOnce("ok", { status: 200, headers: { [QLIK_CSRF_TOKEN_HEADER]: csrfTokenValue } }); // csrf response
      fetchMock.mockOnce("ok", { status: 200 }); // data response

      // Second call, clears token
      fetchMock.mockOnce("redirect me", { status: 401 });

      // Third call, data and set token again
      fetchMock.mockOnce("ok", { status: 200, headers: { [QLIK_CSRF_TOKEN_HEADER]: csrfTokenValue } }); // csrf response
      fetchMock.mockOnce("ok", { status: 200 }); // data response

      // First call
      await invokeFetch<{ data: string; headers: Headers; status: number }>(apiNamespace, {
        method: "post",
        pathTemplate: "/api/call",
      }).catch(() => {});
      expect(fetchMock).toHaveBeenCalledTimes(2); // token + data
      expect(fetchMock).toHaveBeenNthCalledWith(1, "/api/v1/csrf-token", expect.anything());
      expect(fetchMock).toHaveBeenNthCalledWith(
        2,
        "/api/call",
        expect.objectContaining({
          headers: {
            [QLIK_CSRF_TOKEN_HEADER]: csrfTokenValue,
            [QLIK_API_VERSION_HEADER]: API_VERSION,
            "User-Agent": expect.stringContaining("qmfe-api/latest"),
          },
        }),
      );

      // Second call
      invokeFetch<{ data: string; headers: Headers; status: number }>(apiNamespace, {
        method: "post",
        pathTemplate: "/api/call",
      }).catch(() => {});

      // Wait to be redirected
      await sleep();

      expect(fetchMock).toHaveBeenCalledTimes(3); // two earlier calls + 401 code
      expect(fetchMock).toHaveBeenNthCalledWith(3, "/api/call", expect.anything());
      expect(globalThis.location.replace).toHaveBeenCalled();

      // Third call
      await invokeFetch<{ data: string; headers: Headers; status: number }>(apiNamespace, {
        method: "post",
        pathTemplate: "/api/call",
      }).catch(() => {});
      expect(fetchMock).toHaveBeenCalledTimes(5); // three earlier calls + token + data
      expect(fetchMock).toHaveBeenNthCalledWith(4, "/api/v1/csrf-token", expect.anything());
      expect(fetchMock).toHaveBeenNthCalledWith(
        5,
        "/api/call",
        expect.objectContaining({
          headers: {
            [QLIK_CSRF_TOKEN_HEADER]: csrfTokenValue,
            [QLIK_API_VERSION_HEADER]: API_VERSION,
            "User-Agent": expect.stringContaining("qmfe-api/latest"),
          },
        }),
      );
    });

    it("should clear csrf token and retry call once after a 403 response", async () => {
      const csrfError = JSON.stringify({
        title: "Permission denied",
        code: "CSRF-TOKEN-2",
        status: "403",
      });
      const okResponse = JSON.stringify({});

      // First call, data and set token
      fetchMock.mockOnce(okResponse, { status: 200, headers: { [QLIK_CSRF_TOKEN_HEADER]: csrfTokenValue } }); // csrf response
      fetchMock.mockOnce(okResponse, { status: 200 }); // data response

      // Second call, clears token and retries, by setting token again
      fetchMock.mockOnce(csrfError, { status: 403 });
      fetchMock.mockOnce(okResponse, { status: 200, headers: { [QLIK_CSRF_TOKEN_HEADER]: `${csrfTokenValue}-2` } }); // csrf response
      fetchMock.mockOnce(okResponse, { status: 200 }); // data response

      // First call
      await invokeFetch<{ data: string; headers: Headers; status: number }>(apiNamespace, {
        method: "post",
        pathTemplate: "/api/call",
      }).catch(() => {});
      expect(fetchMock).toHaveBeenCalledTimes(2); // token + data
      expect(fetchMock).toHaveBeenNthCalledWith(1, "/api/v1/csrf-token", expect.anything());
      expect(fetchMock).toHaveBeenNthCalledWith(
        2,
        "/api/call",
        expect.objectContaining({
          headers: expect.objectContaining({
            [QLIK_CSRF_TOKEN_HEADER]: csrfTokenValue,
          }),
        }),
      );

      // Second call
      await invokeFetch<{ data: string; headers: Headers; status: number }>(apiNamespace, {
        method: "post",
        pathTemplate: "/api/call",
      }).catch(() => {});
      expect(fetchMock).toHaveBeenCalledTimes(5); // two earlier calls + 403 code + new csrf + retry
      expect(fetchMock).toHaveBeenNthCalledWith(
        5,
        "/api/call",
        expect.objectContaining({
          headers: expect.objectContaining({
            [QLIK_CSRF_TOKEN_HEADER]: "csrf-token-2",
          }),
        }),
      );
      expect(globalThis.location.replace).not.toHaveBeenCalled();
    });

    it("should send the same header fields on the retry as on the first attempt", async () => {
      const csrfError = JSON.stringify({ title: "Permission denied", code: "CSRF-TOKEN-2", status: "403" });
      const okResponse = JSON.stringify({});
      fetchMock.mockOnce(okResponse, { status: 200, headers: { [QLIK_CSRF_TOKEN_HEADER]: csrfTokenValue } }); // csrf
      fetchMock.mockOnce(csrfError, { status: 403 }); // first attempt
      fetchMock.mockOnce(okResponse, { status: 200, headers: { [QLIK_CSRF_TOKEN_HEADER]: `${csrfTokenValue}-2` } }); // csrf
      fetchMock.mockOnce(okResponse, { status: 200 }); // retry

      await invokeFetch<InvokeFetchResponse>(apiNamespace, {
        method: "post",
        pathTemplate: "/api/call",
        body: { a: 1 },
        options: { headers: { "X-Custom-Header": "foo" } },
      });

      expect(fetchMock).toHaveBeenCalledTimes(4);
      const headerNames = (call: number) => Object.keys(fetchMock.mock.calls[call][1]?.headers ?? {}).sort();
      expect(fetchMock.mock.calls[1][0]).toBe("/api/call");
      expect(fetchMock.mock.calls[3][0]).toBe("/api/call");
      expect(headerNames(3)).toEqual(headerNames(1));
      expect(headerNames(1)).toEqual(
        expect.arrayContaining([QLIK_API_VERSION_HEADER, QLIK_CSRF_TOKEN_HEADER, "User-Agent", "X-Custom-Header"]),
      );
    });

    it("should throw an InvokeFetchError with 403 error code if it really is a 403", async () => {
      const okResponse = JSON.stringify({});
      const csrfError = JSON.stringify({
        title: "Permission denied",
        code: "TOTALLY-NOT-CSRF-TOKEN-2",
        status: "403",
      });

      // First call, data and set token, including the retry
      fetchMock.mockOnce({ body: okResponse, status: 200, headers: { "qlik-csrf-token": csrfTokenValue } }); // csrf response
      fetchMock.mockOnce({ body: csrfError, status: 403 });

      const error = await getError<InvokeFetchError>(async () =>
        invokeFetch<InvokeFetchResponse>(apiNamespace, {
          method: "post",
          pathTemplate: "/api/call",
        }),
      );
      expect(error).not.toBeInstanceOf(NoErrorThrownError);
      expect(error.message).toContain("request to '/api/call' failed with status 403");
      expect(error).toBeInstanceOf(InvokeFetchError);
      expect(error.status).toBe(403);
      expect(fetchMock).toHaveBeenCalledTimes(2); // token + error
    });
  });

  describe("paging", () => {
    type Page = Omit<InvokeFetchResponse, "data" | "next" | "prev"> & {
      data: { data: number[] };
      next?: (options?: PageCallOptions) => Promise<Page>;
      prev?: (options?: PageCallOptions) => Promise<Page>;
    };
    // simulates an untyped caller passing options that aren't page call options
    const untypedPageOptions = (options: ApiCallOptions) => options as PageCallOptions;
    const firstPage = { data: [1], links: { next: { href: "/api/items?page=2" } } };
    const secondPage = { data: [2], links: { prev: { href: "/api/items?page=1" } } };
    const headerNames = (call: number) => Object.keys(fetchMock.mock.calls[call][1]?.headers ?? {}).sort();
    const sentHeaders = (call: number) => (fetchMock.mock.calls[call][1]?.headers ?? {}) as Record<string, string>;
    // calls to the paged endpoint, leaving out platform detection calls
    const itemCalls = () => fetchMock.mock.calls.filter(([url]) => (url as string).includes("/api/items"));
    const getFirstPage = (options?: ApiCallOptions) =>
      invokeFetch<Page>(apiNamespace, { method: "get", pathTemplate: "/api/items", options });

    beforeEach(() => {
      fetchMock.mockResponse((req) =>
        Promise.resolve(JSON.stringify(req.url.includes("page=2") ? secondPage : firstPage)),
      );
    });

    it("should only add paging functions for the links that are present", async () => {
      const first = await getFirstPage();
      expect(first.next).toBeTypeOf("function");
      expect(first.prev).toBeUndefined();

      const second = await first.next!();
      expect(second.prev).toBeTypeOf("function");
      expect(second.next).toBeUndefined();
    });

    it("should fetch the linked pages", async () => {
      const first = await getFirstPage();
      const second = await first.next!();
      expect(second.data.data).toEqual([2]);
      expect(fetchMock).toHaveBeenNthCalledWith(2, "/api/items?page=2", expect.anything());

      const previous = await second.prev!();
      expect(previous.data.data).toEqual([1]);
      expect(fetchMock).toHaveBeenNthCalledWith(3, "/api/items?page=1", expect.anything());
    });

    it("should send the same headers on page calls as on the original call", async () => {
      const first = await getFirstPage({ headers: { "X-Custom": "foo" } });
      await first.next!();

      expect(headerNames(1)).toEqual(headerNames(0));
      expect(sentHeaders(1)).toEqual(
        expect.objectContaining({ [QLIK_API_VERSION_HEADER]: API_VERSION, "X-Custom": "foo" }),
      );
      expect(sentHeaders(1)["User-Agent"]).toEqual(expect.stringContaining("qmfe-api/latest"));
    });

    it("should hit the cache for repeated page calls", async () => {
      const first = await getFirstPage();
      await first.next!();
      await first.next!();

      expect(fetch).toHaveBeenCalledTimes(2);
    });

    it("should share the cache with a direct request to the same url", async () => {
      const first = await getFirstPage();
      await first.next!();
      const direct = await invokeFetch<Page>(apiNamespace, {
        method: "get",
        pathTemplate: "/api/items",
        query: { page: 2 },
      });

      expect(direct.data.data).toEqual([2]);
      expect(fetch).toHaveBeenCalledTimes(2);
    });

    it("should hit a cached direct request when paging to the same url", async () => {
      await invokeFetch(apiNamespace, { method: "get", pathTemplate: "/api/items", query: { page: 2 } });
      const first = await getFirstPage();
      const second = await first.next!();

      expect(second.data.data).toEqual([2]);
      expect(fetch).toHaveBeenCalledTimes(2);
    });

    it("should use the cache for page calls of a cached response that needed an auth retry", async () => {
      const csrfError = JSON.stringify({ title: "Permission denied", code: "CSRF-TOKEN-2", status: "403" });
      fetchMock.mockResponseOnce(csrfError, { status: 403 });
      // the first attempt fails and the retry gets the first page
      await getFirstPage();
      expect(itemCalls()).toHaveLength(2);

      const cached = await getFirstPage();
      await cached.next!();
      await cached.next!();

      expect(itemCalls()).toHaveLength(3);
    });

    it("should only make two requests for next, prev and next again", async () => {
      fetchMock.mockResponse((req) =>
        Promise.resolve(
          JSON.stringify(
            // the prev link of page 2 is equivalent to the original call
            req.url.includes("page=2") ? { ...secondPage, links: { prev: { href: "/api/items" } } } : firstPage,
          ),
        ),
      );
      const first = await getFirstPage();
      const second = await first.next!();
      const back = await second.prev!();
      const again = await back.next!();

      expect(back.data.data).toEqual([1]);
      expect(again.data.data).toEqual([2]);
      expect(itemCalls()).toHaveLength(2);
    });

    it("should bypass the cache with noCache page options", async () => {
      const first = await getFirstPage();
      await first.next!();
      await first.next!({ noCache: true });

      expect(fetch).toHaveBeenCalledTimes(3);
    });

    it("should keep the headers and user-agent of the original call when given other api call options", async () => {
      const first = await invokeFetch<Page>(apiNamespace, {
        method: "get",
        pathTemplate: "/api/items",
        userAgent: "original-agent",
        options: { headers: { "X-Custom": "foo" } },
      });
      await first.next!(untypedPageOptions({ headers: { "X-Other": "bar", "User-Agent": "other-agent" } }));

      expect(sentHeaders(1)).toEqual(
        expect.objectContaining({
          [QLIK_API_VERSION_HEADER]: API_VERSION,
          "X-Custom": "foo",
          "User-Agent": "original-agent",
        }),
      );
      expect(sentHeaders(1)).not.toHaveProperty("X-Other");
      // the page call was cached under the original headers
      await invokeFetch(apiNamespace, {
        method: "get",
        pathTemplate: "/api/items",
        query: { page: 2 },
        options: { headers: { "X-Custom": "foo" } },
      });
      expect(fetch).toHaveBeenCalledTimes(2);
    });

    it("should take call options from the original call unless set on the page call", async () => {
      const first = await getFirstPage({ keepalive: true });
      await first.next!();
      await first.next!({ keepalive: false, noCache: true });

      expect(fetchMock.mock.calls[1][1]?.keepalive).toBe(true);
      expect(fetchMock.mock.calls[2][1]?.keepalive).toBe(false);
    });

    it("should only abort page calls with their own signal", async () => {
      const originalController = new AbortController();
      const pageSignal = new AbortController().signal;
      const first = await getFirstPage({ signal: originalController.signal });
      // aborting the original call after it is done must not affect page calls
      originalController.abort();
      await first.next!();
      await first.next!({ signal: pageSignal, noCache: true });

      expect(fetchMock.mock.calls[1][1]?.signal).toBeUndefined();
      expect(fetchMock.mock.calls[2][1]?.signal).toBe(pageSignal);
    });

    it("should apply timeoutMs on page calls of an original call with a signal", async () => {
      const first = await getFirstPage({ signal: new AbortController().signal });
      await first.next!({ timeoutMs: 5000 });

      expect(fetchMock.mock.calls[1][1]?.signal).toBeInstanceOf(AbortSignal);
      expect(fetchMock.mock.calls[1][1]?.signal).not.toBe(fetchMock.mock.calls[0][1]?.signal);
    });

    describe("auth params", () => {
      let issuedTokens = 0;
      let retryOnAuthError = false;
      registerAuthModule("paging-token", {
        getRestCallAuthParams: async () => {
          issuedTokens += 1;
          const token = `token-${issuedTokens}`;
          return { headers: { token }, queryParams: { token }, credentials: "omit" };
        },
        getWebSocketAuthParams: async () => ({ queryParams: {} }),
        handleAuthenticationError: async () => ({ retry: retryOnAuthError }),
      });
      const getTokenPage = () => getFirstPage({ hostConfig: { authType: "paging-token" } });

      beforeEach(() => {
        issuedTokens = 0;
        retryOnAuthError = false;
      });

      it("should retry a failed page call once with fresh auth params and cache the result", async () => {
        retryOnAuthError = true;
        let pageCallFailed = false;
        fetchMock.mockResponse((req) => {
          if (req.url.includes("page=2") && !pageCallFailed) {
            pageCallFailed = true;
            return Promise.resolve({ body: "{}", status: 401 });
          }
          return Promise.resolve(JSON.stringify(req.url.includes("page=2") ? secondPage : firstPage));
        });
        const first = await getTokenPage();
        const second = await first.next!();

        expect(second.data.data).toEqual([2]);
        const [, failedCall, retryCall] = itemCalls();
        expect(failedCall[0]).toBe("/api/items?page=2&token=token-2");
        expect(failedCall[1]?.headers).toEqual(expect.objectContaining({ token: "token-2" }));
        expect(retryCall[0]).toBe("/api/items?page=2&token=token-3");
        expect(retryCall[1]?.headers).toEqual(expect.objectContaining({ token: "token-3" }));

        await first.next!();
        expect(itemCalls()).toHaveLength(3);
      });

      it("should replace the auth query params with fresh ones on a retry", async () => {
        retryOnAuthError = true;
        fetchMock.mockResponseOnce("{}", { status: 401 });
        await invokeFetch(apiNamespace, {
          method: "get",
          pathTemplate: "/api/items",
          query: { filter: "a,b" },
          options: { hostConfig: { authType: "paging-token" } },
        });

        const [failedCall, retryCall] = itemCalls();
        expect(failedCall[0]).toBe("/api/items?filter=a%2Cb&token=token-1");
        expect(retryCall[0]).toBe("/api/items?filter=a%2Cb&token=token-2");
        expect(retryCall[1]?.headers).toEqual(expect.objectContaining({ token: "token-2" }));
      });

      it("should keep auth query params that are part of the page link on a retry", async () => {
        retryOnAuthError = true;
        let pageCallFailed = false;
        fetchMock.mockResponse((req) => {
          if (req.url.includes("page=2") && !pageCallFailed) {
            pageCallFailed = true;
            return Promise.resolve({ body: "{}", status: 401 });
          }
          return Promise.resolve(
            JSON.stringify(
              req.url.includes("page=2")
                ? secondPage
                : { ...firstPage, links: { next: { href: "/api/items?page=2&token=from-link" } } },
            ),
          );
        });
        const first = await getTokenPage();
        await first.next!();

        const [, failedCall, retryCall] = itemCalls();
        expect(failedCall[0]).toBe("/api/items?page=2&token=from-link");
        expect(retryCall[0]).toBe("/api/items?page=2&token=from-link");
        expect(retryCall[1]?.headers).toEqual(expect.objectContaining({ token: "token-3" }));
      });

      it("should get fresh auth params for each page call", async () => {
        const first = await getTokenPage();
        await first.next!();

        const [firstCall, pageCall] = itemCalls();
        expect(firstCall[0]).toBe("/api/items?token=token-1");
        expect(firstCall[1]?.headers).toEqual(expect.objectContaining({ token: "token-1" }));
        expect(pageCall[0]).toBe("/api/items?page=2&token=token-2");
        expect(pageCall[1]?.headers).toEqual(expect.objectContaining({ token: "token-2" }));
      });

      it("should not add auth query params that are already part of the page link", async () => {
        fetchMock.mockResponse((req) =>
          Promise.resolve(
            JSON.stringify(
              req.url.includes("page=2")
                ? secondPage
                : { ...firstPage, links: { next: { href: "/api/items?page=2&token=from-link" } } },
            ),
          ),
        );
        const first = await getTokenPage();
        await first.next!();

        expect(itemCalls()[1][0]).toBe("/api/items?page=2&token=from-link");
      });
    });

    describe("on a cross-origin host", () => {
      const host = "https://qcg.example.com";
      const hostConfig: HostConfig = { host, authType: "apikey", apiKey: "key" };

      beforeEach(() => {
        // QCG doesn't allow qlik-api-version cross-origin, so the header tells which host the page was normalized for
        setPlatform(hostConfig, { isCloud: true, isQCG: true });
        fetchMock.mockResponse((req) =>
          Promise.resolve(
            JSON.stringify(
              req.url.includes("page=2")
                ? secondPage
                : { ...firstPage, links: { next: { href: `${host}/api/items?page=2` } } },
            ),
          ),
        );
      });

      it.each([
        ["no page options", undefined],
        ["page call options", { noCache: true }],
        ["the original host config", untypedPageOptions({ hostConfig })],
        ["an equal host config", untypedPageOptions({ hostConfig: { ...hostConfig } })],
        ["an undefined host config", untypedPageOptions({ hostConfig: undefined })],
      ])("should cache page calls under the original host config with %s", async (_, pageOptions) => {
        const first = await getFirstPage({ hostConfig });
        await first.next!(pageOptions);

        await invokeFetch(apiNamespace, {
          method: "get",
          pathTemplate: "/api/items",
          query: { page: 2 },
          options: { hostConfig },
        });
        expect(itemCalls()).toHaveLength(2);
        expect(sentHeaders(0)).not.toHaveProperty(QLIK_API_VERSION_HEADER);
        expect(sentHeaders(1)).not.toHaveProperty(QLIK_API_VERSION_HEADER);
      });

      it("should reject a page call with a different host config", async () => {
        const first = await getFirstPage({ hostConfig });
        const error = await getError(() =>
          first.next!(untypedPageOptions({ hostConfig: { ...hostConfig, apiKey: "other-key" } })),
        );

        expect(error).toBeInstanceOf(InvalidHostConfigError);
        expect(itemCalls()).toHaveLength(1);
      });

      it.each([
        ["a relative link", "/api/items?page=2"],
        ["a link to another host", "https://evil.example.com/api/items?page=2"],
      ])("should reject a page call with %s", async (_, href) => {
        fetchMock.mockResponse(JSON.stringify({ ...firstPage, links: { next: { href } } }));
        const first = await getFirstPage({ hostConfig });
        const error = await getError<PagingError>(() => first.next!());

        expect(error).toBeInstanceOf(PagingError);
        expect(error.message).toContain(`Page link "${href}"`);
        expect(error).toMatchObject({ url: href, origin: host });
        expect(itemCalls()).toHaveLength(1);
      });
    });

    it("should reject a same-origin page call with a link to another host", async () => {
      const href = "https://evil.example.com/api/items?page=2";
      fetchMock.mockResponse(JSON.stringify({ ...firstPage, links: { next: { href } } }));
      const first = await getFirstPage();
      const error = await getError<PagingError>(() => first.next!());

      expect(error).toBeInstanceOf(PagingError);
      expect(error).toMatchObject({ url: href, origin: "https://frontend-core.com" });
      expect(itemCalls()).toHaveLength(1);
    });

    describe("on a page with a null origin", () => {
      it("should resolve relative links against the page url in a sandboxed iframe", async () => {
        mockLocation("null", "https://frontend-core.com/app/page");
        const first = await getFirstPage();
        const second = await first.next!();

        expect(second.data.data).toEqual([2]);
      });

      it("should accept links to a cross-origin host from a file:// page", async () => {
        const host = "https://other-host.example.com";
        mockLocation("null", "file:///app/index.html");
        fetchMock.mockResponse((req) =>
          Promise.resolve(
            JSON.stringify(
              req.url.includes("page=2")
                ? secondPage
                : { ...firstPage, links: { next: { href: `${host}/api/items?page=2` } } },
            ),
          ),
        );
        const first = await getFirstPage({ hostConfig: { host, authType: "apikey", apiKey: "key" } });
        const second = await first.next!();

        expect(second.data.data).toEqual([2]);
      });

      it("should reject relative links from a file:// page without a configured host", async () => {
        mockLocation("null", "file:///app/index.html");
        const first = await getFirstPage();
        const error = await getError<PagingError>(() => first.next!());

        expect(error).toBeInstanceOf(PagingError);
        expect(error).toMatchObject({ url: "/api/items?page=2", origin: "null" });
        expect(itemCalls()).toHaveLength(1);
      });

      it("should reject relative links to a cross-origin host from a file:// page", async () => {
        const host = "https://other-host.example.com";
        mockLocation("null", "file:///app/index.html");
        const first = await getFirstPage({ hostConfig: { host, authType: "apikey", apiKey: "key" } });
        const error = await getError<PagingError>(() => first.next!());

        expect(error).toBeInstanceOf(PagingError);
        expect(error).toMatchObject({ url: "/api/items?page=2", origin: host });
      });
    });

    describe("on a page with a base element", () => {
      let base: HTMLBaseElement;

      beforeEach(() => {
        base = document.createElement("base");
        base.href = "https://cdn.example.net/assets/";
        document.head.append(base);
      });

      afterEach(() => {
        base.remove();
      });

      it("should accept relative links, which fetch resolves against the base url", async () => {
        const first = await getFirstPage();
        const second = await first.next!();

        expect(second.data.data).toEqual([2]);
      });

      it("should reject links to the page origin when the base url is on another origin", async () => {
        const href = "https://frontend-core.com/api/items?page=2";
        fetchMock.mockResponse(JSON.stringify({ ...firstPage, links: { next: { href } } }));
        const first = await getFirstPage();
        const error = await getError<PagingError>(() => first.next!());

        expect(error).toBeInstanceOf(PagingError);
        expect(error).toMatchObject({ url: href, origin: "https://cdn.example.net" });
        expect(itemCalls()).toHaveLength(1);
      });
    });

    describe("outside a browser", () => {
      const host = "https://other-host.example.com";
      const hostConfig: HostConfig = { host, authType: "apikey", apiKey: "key" };
      let isBrowserSpy: MockInstance<() => boolean>;

      beforeEach(() => {
        isBrowserSpy = vi.spyOn(utils, "isBrowser").mockReturnValue(false);
      });

      afterEach(() => {
        isBrowserSpy.mockRestore();
      });

      it("should accept absolute links to the configured host", async () => {
        fetchMock.mockResponse((req) =>
          Promise.resolve(
            JSON.stringify(
              req.url.includes("page=2")
                ? secondPage
                : { ...firstPage, links: { next: { href: `${host}/api/items?page=2` } } },
            ),
          ),
        );
        const first = await getFirstPage({ hostConfig });
        const second = await first.next!();

        expect(second.data.data).toEqual([2]);
      });

      it("should reject relative links, since there is no page to resolve them against", async () => {
        const first = await getFirstPage({ hostConfig });
        const error = await getError<PagingError>(() => first.next!());

        expect(error).toBeInstanceOf(PagingError);
        expect(error).toMatchObject({ url: "/api/items?page=2", origin: host });
        expect(itemCalls()).toHaveLength(1);
      });

      it("should reject links when no host is configured, ignoring the location", async () => {
        const href = "https://frontend-core.com/api/items?page=2";
        fetchMock.mockResponse(JSON.stringify({ ...firstPage, links: { next: { href } } }));
        const first = await getFirstPage();
        const error = await getError<PagingError>(() => first.next!());

        expect(error).toBeInstanceOf(PagingError);
        expect(error).toMatchObject({ url: href, origin: "" });
        expect(itemCalls()).toHaveLength(1);
      });
    });

    it("should accept an absolute same-origin page link", async () => {
      fetchMock.mockResponse((req) =>
        Promise.resolve(
          JSON.stringify(
            req.url.includes("page=2")
              ? secondPage
              : { ...firstPage, links: { next: { href: "https://frontend-core.com/api/items?page=2" } } },
          ),
        ),
      );
      const first = await getFirstPage();
      const second = await first.next!();

      expect(second.data.data).toEqual([2]);
    });

    it("should keep isPublic on page calls", async () => {
      const debugSpy = vi.spyOn(console, "debug").mockImplementation(() => {});
      fetchMock.mockResponse((req) =>
        req.url.includes("page=2")
          ? Promise.resolve({ body: JSON.stringify(secondPage), headers: { deprecation: "@1688169599" } })
          : Promise.resolve(JSON.stringify(firstPage)),
      );

      const first = await invokeFetch<Page>(apiNamespace, {
        method: "get",
        pathTemplate: "/api/items",
        isPublic: true,
      });
      expect(debugSpy).not.toHaveBeenCalled();
      await first.next!();

      expect(debugSpy).toHaveBeenCalledWith(expect.stringContaining("API deprecation notice for /api/items?page=2"));
      debugSpy.mockRestore();
    });
  });

  describe("body encoding", () => {
    it("should support application/json, application/octet-stream, multipart/form-data and text/plain", async () => {
      const textBody = "fantastic API";
      await invokeFetch<InvokeFetchResponse>(apiNamespace, {
        method: "post",
        pathTemplate: "/api/call",
        body: textBody,
        contentType: "text/plain",
      });
      expect(fetch).toHaveBeenNthCalledWith(
        2,
        "/api/call",
        expect.objectContaining({
          body: textBody,
          headers: expect.objectContaining({ "Content-Type": "text/plain" }),
        }),
      );
      const body = { name: "test" };
      await invokeFetch<InvokeFetchResponse>(apiNamespace, {
        method: "post",
        pathTemplate: "/api/call",
        body,
        contentType: "application/json",
      });
      expect(fetch).toHaveBeenNthCalledWith(
        3,
        "/api/call",
        expect.objectContaining({
          body: JSON.stringify(body),
          headers: expect.objectContaining({ "Content-Type": "application/json" }),
        }),
      );
      await invokeFetch<InvokeFetchResponse>(apiNamespace, {
        method: "post",
        pathTemplate: "/api/call",
        body,
        contentType: "multipart/form-data",
      });
      const form = new FormData();
      form.set("name", "test");
      expect(fetch).toHaveBeenNthCalledWith(
        4,
        "/api/call",
        expect.objectContaining({
          body: form,
        }),
      );
      await invokeFetch<InvokeFetchResponse>(apiNamespace, {
        method: "post",
        pathTemplate: "/api/call",
        body: form,
        contentType: "multipart/form-data",
      });
      expect(fetch).toHaveBeenNthCalledWith(
        5,
        "/api/call",
        expect.objectContaining({
          body: form,
        }),
      );
      const binaryBody = new Uint8Array([0xff, 0xff, 0, 0, 0, 0]);
      await invokeFetch<InvokeFetchResponse>(apiNamespace, {
        method: "post",
        pathTemplate: "/api/call",
        body: binaryBody,
        contentType: "application/octet-stream",
      });
      expect(fetch).toHaveBeenNthCalledWith(
        6,
        "/api/call",
        expect.objectContaining({
          body: binaryBody,
          headers: expect.objectContaining({ "Content-Type": "application/octet-stream" }),
        }),
      );
    });
    it("should put a content-type for each field in a multipart/form-data request", async () => {
      const info = "This is some info about something";
      const coolNumber = 1337;
      const yes = false;
      const body = {
        info,
        coolNumber,
        yes,
        props: { toDo: "¯_(ツ)_/¯" },
        meta: new Blob(['{"name":"potato"}'], { type: "application/banana" }),
        fonts: new Blob(["crazy fonts right here"], { type: "font/woff" }),
        bytes: new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]),
      };
      const result = encodeBody(body, "multipart/form-data");
      const form = result.body as FormData;

      // Check string-encoding for various types.
      const expectedStrings = {
        info,
        coolNumber: `${coolNumber}`,
        yes: `${yes}`,
      };
      Object.entries(expectedStrings).forEach((entry) => {
        const [prop, expected] = entry;
        const value = form.get(prop);
        expect(value).toBe(expected);
      });

      // Check content-typery.
      const expectedTypes = {
        props: "application/json",
        meta: "application/banana",
        fonts: "font/woff",
        bytes: "application/octet-stream",
      };
      Object.entries(expectedTypes).forEach((entry) => {
        const [prop, contentType] = entry;
        const value = form.get(prop);
        expect(value).toBeInstanceOf(Blob);
        const { type } = value as Blob;
        expect(type).toBe(contentType);
      });
    });
    it("should default to content-type application/json if there is a body", async () => {
      const body = { name: "test" };
      await invokeFetch<InvokeFetchResponse>(apiNamespace, {
        method: "post",
        pathTemplate: "/api/call",
        body,
      });
      expect(fetch).toHaveBeenNthCalledWith(
        2,
        "/api/call",
        expect.objectContaining({
          body: JSON.stringify(body),
          headers: expect.objectContaining({ "Content-Type": "application/json" }),
        }),
      );
      await invokeFetch<InvokeFetchResponse>(apiNamespace, {
        method: "post",
        pathTemplate: "/api/call",
      });
      expect(fetch).toHaveBeenNthCalledWith(
        3,
        "/api/call",
        expect.not.objectContaining({
          headers: expect.objectContaining({ "Content-Type": "application/json" }),
        }),
      );
    });
    it("should throw errors for unsupported content-type", async () => {
      const error = await getError<EncodingError>(async () =>
        invokeFetch<InvokeFetchResponse>(apiNamespace, {
          method: "post",
          pathTemplate: "/api/call",
          body: ["a", "b", "c"],
          contentType: "text/xml",
        }),
      );
      expect(error).not.toBeInstanceOf(NoErrorThrownError);
      expect(error).toBeInstanceOf(EncodingError);
    });
    it("should throw errors for strange payload + content-type combinations", async () => {
      let error = await getError<EncodingError>(async () =>
        invokeFetch<InvokeFetchResponse>(apiNamespace, {
          method: "post",
          pathTemplate: "/api/call",
          body: ["a", "b", "c"],
          contentType: "multipart/form-data",
        }),
      );
      expect(error).not.toBeInstanceOf(NoErrorThrownError);
      expect(error).toBeInstanceOf(EncodingError);
      error = await getError<EncodingError>(async () =>
        invokeFetch<InvokeFetchResponse>(apiNamespace, {
          method: "post",
          pathTemplate: "/api/call",
          body: ["a", "b", "c"],
          contentType: "text/plain",
        }),
      );
      expect(error).not.toBeInstanceOf(NoErrorThrownError);
      expect(error).toBeInstanceOf(EncodingError);
    });
  });

  describe("response decoding", () => {
    it("should decode binary-payloads to DownloadableBlobs", async () => {
      type Response<T> = {
        data: T;
        headers: Headers;
        status: number;
      };
      const data = "00000000000000";
      for (const contentType of [
        "application/octet-stream",
        "image/png",
        "image/x-icon",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      ]) {
        fetchMock.mockOnce(data, { status: 200, headers: { "Content-Type": contentType } }); // data response
        const binaryResponse = await invokeFetch<Response<DownloadableBlob>>(apiNamespace, {
          method: "get",
          pathTemplate: "/api/call",
          options: {
            noCache: true,
          },
        });
        expect(binaryResponse.data.type).toEqual(contentType);
        const text = await binaryResponse.data.text();
        expect(text).toEqual(data);
        expect(binaryResponse.data.download).toBeDefined();
      }
    });
    it("should respect content-disposition of type attachment", async () => {
      type Response<T> = {
        data: T;
        headers: Headers;
        status: number;
      };
      const data = "00000000000000";
      const contentType = "text/plain";
      const filename = `"abc.txt"`;
      const contentDisposition = `attachment; filename="${filename}"`;
      const spy = vi.spyOn(invokeFetchMethods, "toDownloadableBlob");
      fetchMock.mockOnce(data, {
        status: 200,
        headers: { "Content-Type": contentType, "Content-Disposition": contentDisposition },
      }); // data response
      const response = await invokeFetch<Response<DownloadableBlob>>(apiNamespace, {
        method: "get",
        pathTemplate: "/api/call",
        options: {
          noCache: true,
        },
      });
      expect(response.data.type).toEqual(contentType);
      const text = await response.data.text();
      expect(text).toEqual(data);
      expect(response.data.download).toBeDefined();
      expect(spy).toHaveBeenCalledWith(response.data, filename);
    });
  });

  describe("deprecation warnings", () => {
    let consoleWarnSpy: ReturnType<typeof vi.spyOn>;
    let consoleDebugSpy: ReturnType<typeof vi.spyOn>;

    beforeEach(() => {
      consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
      consoleDebugSpy = vi.spyOn(console, "debug").mockImplementation(() => {});
    });

    afterEach(() => {
      consoleWarnSpy.mockRestore();
      consoleDebugSpy.mockRestore();
      globalThis.localStorage.removeItem("devtools");
    });

    it("should not warn when there is no deprecation header", async () => {
      await invokeFetch(apiNamespace, { method: "get", pathTemplate: "/api/call", options: { noCache: true } });
      expect(consoleWarnSpy).not.toHaveBeenCalled();
    });

    it("should not warn when deprecation header is present but neither devtools nor qlik-api user-agent is set", async () => {
      fetchMock.mockOnce(JSON.stringify(fakeData), {
        status: 200,
        headers: { deprecation: "@1688169599" },
      });
      await invokeFetch(apiNamespace, { method: "get", pathTemplate: "/api/call", options: { noCache: true } });
      expect(consoleWarnSpy).not.toHaveBeenCalled();
    });

    it("should warn when devtools is enabled and response carries a deprecation header", async () => {
      globalThis.localStorage.setItem("devtools", "true");
      fetchMock.mockOnce(JSON.stringify(fakeData), {
        url: "/api/call",
        status: 200,
        headers: {
          deprecation: "@1688169599",
          sunset: "Sun, 30 Jun 2024 23:59:59 GMT",
          link: '<https://qlik.dev/apis/deprecation>; rel="deprecation"; type="text/html"',
        },
      });
      await invokeFetch(apiNamespace, { method: "get", pathTemplate: "/api/call", options: { noCache: true } });
      expect(consoleWarnSpy).toHaveBeenCalledOnce();
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        expect.stringContaining("[Qlik] API deprecation notice for /api/call (deprecated since: 2023-06)"),
      );
      expect(consoleWarnSpy).toHaveBeenCalledWith(expect.stringContaining("Sun, 30 Jun 2024 23:59:59 GMT"));
      expect(consoleWarnSpy).toHaveBeenCalledWith(expect.stringContaining("qlik.dev"));
    });

    it("should warn when using the public qlik-api user-agent and response carries a deprecation header", async () => {
      fetchMock.mockOnce(JSON.stringify(fakeData), {
        status: 200,
        headers: { deprecation: "@1688169599", sunset: "Sun, 30 Jun 2026 23:59:59 GMT" },
      });
      await getMyUser({ noCache: true });
      expect(consoleDebugSpy).toHaveBeenCalledOnce();
      expect(consoleDebugSpy).toHaveBeenCalledWith(
        expect.stringContaining("[Qlik] API deprecation notice for /api/v1/users/me (deprecated since: 2023-06)"),
      );
      expect(consoleDebugSpy).toHaveBeenCalledWith(expect.stringContaining("Sun, 30 Jun 2026 23:59:59 GMT"));
    });

    it("should always warn for internal invokeFetch when not in browser (Node)", async () => {
      const isBrowserSpy = vi.spyOn(utils, "isBrowser").mockReturnValue(false);
      fetchMock.mockOnce(JSON.stringify(fakeData), {
        status: 200,
        headers: { deprecation: "@1688169599", sunset: "Sun, 30 Jun 2024 23:59:59 GMT" },
      });
      await invokeFetch(apiNamespace, { method: "get", pathTemplate: "/api/call", options: { noCache: true } });
      expect(consoleWarnSpy).toHaveBeenCalledOnce();
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        expect.stringContaining("[Qlik] API deprecation notice for /api/call (deprecated since: 2023-06)"),
      );
      expect(consoleWarnSpy).toHaveBeenCalledWith(expect.stringContaining("Sun, 30 Jun 2024 23:59:59 GMT"));
      isBrowserSpy.mockRestore();
    });

    it("should always log debug for public qlik-api invokeFetch when not in browser (Node)", async () => {
      const isBrowserSpy = vi.spyOn(utils, "isBrowser").mockReturnValue(false);
      fetchMock.mockOnce(JSON.stringify(fakeData), {
        status: 200,
        headers: { deprecation: "@1688169599", sunset: "Sun, 30 Jun 2026 23:59:59 GMT" },
      });
      await getMyUser({ noCache: true });
      expect(consoleDebugSpy).toHaveBeenCalledOnce();
      expect(consoleDebugSpy).toHaveBeenCalledWith(
        expect.stringContaining("[Qlik] API deprecation notice for /api/v1/users/me (deprecated since: 2023-06)"),
      );
      expect(consoleDebugSpy).toHaveBeenCalledWith(expect.stringContaining("Sun, 30 Jun 2026 23:59:59 GMT"));
      isBrowserSpy.mockRestore();
    });

    it("should not warn on error responses even if they carry a deprecation header", async () => {
      fetchMock.mockOnce(JSON.stringify({ errors: [] }), {
        status: 410,
        headers: { deprecation: "@1688169599" },
      });
      globalThis.localStorage.setItem("devtools", "true");
      await invokeFetch(apiNamespace, {
        method: "get",
        pathTemplate: "/api/call",
        options: { noCache: true },
      }).catch(() => {});
      expect(consoleWarnSpy).not.toHaveBeenCalled();
    });
  });
});
