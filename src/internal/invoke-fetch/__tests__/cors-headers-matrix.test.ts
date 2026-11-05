import { beforeEach, describe, expect, it, vi } from "vitest";
import type { HostConfig } from "#internal/auth/auth-types";
import { QLIK_API_VERSION_HEADER } from "#internal/http/http-constants";
import { invokeFetch } from "#internal/invoke-fetch/invoke-fetch-functions";
import { setPlatform } from "#test-utils";
import { clearPlatform } from "#internal/platform/platform-functions";
import type { Platform } from "#internal/platform/platform-types";

vi.mock("#internal/http/http-functions", async (importOriginal) => ({
  ...(await importOriginal<Record<string, unknown>>()),
  getCsrfToken: () => Promise.resolve("csrf-token"),
}));
vi.mock("#internal/auth/internal/default-auth-modules/oauth/oauth-utils", async (importOriginal) => ({
  ...(await importOriginal<Record<string, unknown>>()),
  getOAuthAccessToken: () => Promise.resolve("oauth-token"),
  getAnonymousOauthAccessToken: () => Promise.resolve({ accessToken: "anonymous-token" }),
}));

const host = "https://qlik.example.com";

const authModules: Record<string, HostConfig> = {
  cookie: { host, authType: "cookie", webIntegrationId: "wi" },
  windowscookie: { host, authType: "windowscookie" },
  oauth2: { host, authType: "oauth2", clientId: "client" },
  anonymous: { host, authType: "anonymous", clientId: "client", accessCode: "code" },
  apikey: { host, authType: "apikey", apiKey: "key" },
};

// Mirrors Access-Control-Allow-Headers of each platform, minus headers the browser controls (dnt, keep-alive)
const COMMON_HEADERS = [
  "authorization",
  "cache-control",
  "content-type",
  "if-modified-since",
  "qlik-csrf-token",
  "range",
  "user-agent",
  "x-requested-with",
];
const CLOUD_HEADERS = [...COMMON_HEADERS, "qlik-web-integration-id"];
const QCS_HEADERS = [...CLOUD_HEADERS, "qlik-api-version", "qlik-key-id", "qlik-request-id", "x-customheader"];
// Windows allows any header, so only list the ones it acts on
const WINDOWS_HEADERS = [...COMMON_HEADERS, "x-qlik-xrfkey"];

const cloudAuthModules = ["cookie", "oauth2", "anonymous", "apikey"];

const platforms: Record<
  string,
  { platform: Partial<Platform>; authTypes: string[]; allowedHeaders: string[]; sendsApiVersion: boolean }
> = {
  QCS: {
    platform: { isCloud: true, isQCS: true },
    authTypes: cloudAuthModules,
    allowedHeaders: QCS_HEADERS,
    sendsApiVersion: true,
  },
  QCG: {
    platform: { isCloud: true, isQCG: true },
    authTypes: cloudAuthModules,
    allowedHeaders: CLOUD_HEADERS,
    sendsApiVersion: false,
  },
  "Cloud Console": {
    platform: { isCloud: true, isCloudConsole: true },
    authTypes: cloudAuthModules,
    allowedHeaders: QCS_HEADERS,
    sendsApiVersion: true,
  },
  Windows: {
    platform: { isWindows: true, isQSE: true },
    authTypes: ["windowscookie", "apikey"],
    allowedHeaders: WINDOWS_HEADERS,
    sendsApiVersion: false,
  },
};

// Headers that qmfe-api sends by itself, without any caller headers or interceptors
const baselineHeaders: Record<string, Record<"GET" | "POST", string[]>> = {
  cookie: {
    GET: ["qlik-web-integration-id", "user-agent"],
    POST: ["content-type", "qlik-csrf-token", "qlik-web-integration-id", "user-agent"],
  },
  windowscookie: { GET: ["user-agent", "x-qlik-xrfkey"], POST: ["content-type", "user-agent", "x-qlik-xrfkey"] },
  oauth2: { GET: ["authorization", "user-agent"], POST: ["authorization", "content-type", "user-agent"] },
  anonymous: { GET: ["authorization", "user-agent"], POST: ["authorization", "content-type", "user-agent"] },
  apikey: { GET: ["authorization", "user-agent"], POST: ["authorization", "content-type", "user-agent"] },
};

const cases = Object.entries(platforms).flatMap(([platform, { authTypes }]) =>
  authTypes.flatMap((authType) => (["GET", "POST"] as const).map((method) => ({ authType, platform, method }))),
);

function sentHeaderNames(): string[] {
  const headers = (fetchMock.mock.lastCall?.[1]?.headers ?? {}) as Record<string, string>;
  return Object.keys(headers)
    .map((name) => name.toLowerCase())
    .sort();
}

describe("headers sent cross-origin per auth module and platform", () => {
  it.each(cases)("$authType on $platform ($method)", async ({ authType, platform, method }) => {
    setPlatform(authModules[authType], platforms[platform].platform);
    fetchMock.resetMocks();
    fetchMock.doMock(JSON.stringify({}));
    await invokeFetch(
      "cors-headers-matrix",
      {
        method,
        pathTemplate: "/api/v1/items",
        body: method === "POST" ? { a: 1 } : undefined,
        options: { hostConfig: authModules[authType], noCache: true },
      },
      [],
    );
    expect(fetch).toHaveBeenCalledTimes(1);
    const headers = sentHeaderNames();
    const baseHeaders = baselineHeaders[authType][method];
    const allowedHeaders = new Set([...baseHeaders, ...platforms[platform].allowedHeaders]);
    for (const name of baseHeaders) {
      expect(headers, `base-header ${name} is missing`).toContain(name);
    }
    for (const name of headers) {
      expect(allowedHeaders, `header ${name} is not allowed`).toContain(name);
    }
    expect(headers.includes(QLIK_API_VERSION_HEADER)).toBe(platforms[platform].sendsApiVersion);
  });
});

describe("headers sent same-origin", () => {
  const sameOriginAuthModules: Record<string, HostConfig> = {
    cookie: { authType: "cookie" },
    windowscookie: { authType: "windowscookie" },
    apikey: { authType: "apikey", apiKey: "key" },
  };

  beforeEach(() => {
    fetchMock.resetMocks();
    fetchMock.doMock(JSON.stringify({}));
  });

  it.each(
    Object.keys(platforms).flatMap((platform) =>
      Object.keys(sameOriginAuthModules).map((authType) => ({ authType, platform })),
    ),
  )("$authType on $platform", async ({ authType, platform }) => {
    setPlatform(sameOriginAuthModules[authType], platforms[platform].platform);

    await invokeFetch(
      "cors-headers-matrix",
      {
        method: "GET",
        pathTemplate: "/api/v1/items",
        options: { hostConfig: sameOriginAuthModules[authType], noCache: true },
      },
      [],
    );

    expect(fetch).toHaveBeenCalledTimes(1);
    // same-origin requests can't fail CORS, so every cloud platform gets the header
    expect(sentHeaderNames().includes(QLIK_API_VERSION_HEADER)).toBe(!!platforms[platform].platform.isCloud);
  });

  it("does not send qlik-api-version when product-info can't be fetched", async () => {
    const hostConfig: HostConfig = { authType: "cookie" };
    clearPlatform(hostConfig);
    fetchMock.mockResponse((req) =>
      req.url.includes("product-info.json")
        ? Promise.reject(new Error("product-info is unavailable"))
        : Promise.resolve(JSON.stringify({})),
    );

    await invokeFetch(
      "cors-headers-matrix",
      { method: "GET", pathTemplate: "/api/v1/items", options: { hostConfig, noCache: true } },
      [],
    );

    expect(fetch).toHaveBeenLastCalledWith("/api/v1/items", expect.anything());
    expect(sentHeaderNames()).not.toContain(QLIK_API_VERSION_HEADER);
  });
});
