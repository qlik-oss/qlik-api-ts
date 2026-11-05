import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { HostConfig } from "#internal/auth/auth-types";
import { QLIK_API_VERSION_HEADER, QLIK_CSRF_TOKEN_HEADER } from "../http-constants";
import { clearCsrfToken, getCsrfToken } from "../http-functions";
import { API_VERSION } from "#internal/api-version";
import { setPlatform } from "#test-utils";

describe("getCsrfToken", () => {
  const hostConfig: HostConfig = { host: "localhost", authType: "cookie" };

  const fetchRequestBody = {
    body: null,
    cache: "no-store",
    credentials: "include",
    headers: {
      "User-Agent": expect.stringContaining("qmfe-api/latest"),
      [QLIK_API_VERSION_HEADER]: API_VERSION,
    },
    keepalive: undefined,
    method: "GET",
    mode: "cors",
    redirect: "follow",
  };

  beforeEach(() => {
    fetchMock.resetMocks();
    clearCsrfToken();
  });
  afterEach(() => {
    fetchMock.resetMocks();
  });

  it("should call /api/v1/csrf-token on non windows", async () => {
    setPlatform(hostConfig, { isCloud: true, isQCS: true });
    await getCsrfToken(hostConfig, true);
    expect(fetchMock).toBeCalledWith("https://localhost/api/v1/csrf-token", fetchRequestBody);
  });

  it("should not call /api/v1/csrf-token on windows", async () => {
    const winHostConfig: HostConfig = { host: "localhost", authType: "windowscookie" };
    await getCsrfToken(winHostConfig, true);
    expect(fetchMock).not.toBeCalledWith("https://localhost/api/v1/csrf-token", fetchRequestBody);
  });

  it("should return a csrf token", async () => {
    const csrfTokenValue = "csrf-token";
    fetchMock.doMock("ok", { status: 200, headers: { [QLIK_CSRF_TOKEN_HEADER]: csrfTokenValue } });
    const csrfToken = await getCsrfToken(hostConfig, true);
    expect(csrfToken).toEqual(csrfTokenValue);
  });

  it("should respect cache options", async () => {
    const csrfTokenValue1 = "csrf-token";
    const csrfTokenValue2 = "csrf-tolkien";
    fetchMock.doMock("ok", { status: 200, headers: { [QLIK_CSRF_TOKEN_HEADER]: csrfTokenValue1 } });
    let csrfToken = await getCsrfToken(hostConfig);
    expect(csrfToken).toEqual(csrfTokenValue1);
    fetchMock.doMock("ok", { status: 200, headers: { [QLIK_CSRF_TOKEN_HEADER]: csrfTokenValue2 } });
    csrfToken = await getCsrfToken(hostConfig);
    expect(csrfToken).toEqual(csrfTokenValue1);
    csrfToken = await getCsrfToken(hostConfig, true);
    expect(csrfToken).toEqual(csrfTokenValue2);
  });

  it("should return an empty string even if no csrf token is returned", async () => {
    fetchMock.doMock("ok", { status: 200 });
    const csrfToken = await getCsrfToken(hostConfig, true);
    expect(csrfToken).toEqual("");
  });

  it("should return an empty string if 404 error is thrown", async () => {
    fetchMock.doMock("request to 'https://fe-core-test.us.qlik-stage.com/api/v1/csrf-token' failed with status 404 .", {
      status: 404,
    });
    const csrfToken = await getCsrfToken(hostConfig, true);
    expect(csrfToken).toEqual("");
  });

  it("should throw error if it is a non 404 error on QSE", async () => {
    setPlatform(undefined, { isWindows: true, isQSE: true });
    vi.spyOn(console, "error").mockImplementation(() => {});
    // not 401: on a cookie host that triggers a login redirect and a never-resolving promise
    fetchMock.doMock("request to 'https://fe-core-test.us.qlik-stage.com/api/v1/csrf-token' failed with status 401 .", {
      status: 401,
      headers: {},
    });
    await expect(getCsrfToken()).rejects.toThrow(expect.any(Error));
  });

  it("should throw error if it is a non 4xx error on QCS", async () => {
    setPlatform(undefined, { isCloud: true, isQCS: true });
    vi.spyOn(console, "error").mockImplementation(() => {});
    // not 401: on a cookie host that triggers a login redirect and a never-resolving promise
    fetchMock.doMock("request to 'https://fe-core-test.us.qlik-stage.com/api/v1/csrf-token' failed with status 500 .", {
      status: 500,
      headers: {},
    });
    await expect(getCsrfToken()).rejects.toThrow(expect.any(Error));
  });
});
