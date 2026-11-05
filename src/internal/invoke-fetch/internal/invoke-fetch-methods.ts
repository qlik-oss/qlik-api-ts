import { API_VERSION } from "#internal/api-version";
import { InvalidHostConfigError } from "#internal/auth/auth-errors";
import {
  checkForCrossDomainRequest,
  getRestCallAuthParams,
  handleAuthenticationError,
  isWindows,
  serializeHostConfig,
  toValidLocationUrl,
} from "#internal/auth/auth-functions";
import type { Credentials, HostConfig } from "#internal/auth/auth-types";
import { QLIK_API_VERSION_HEADER } from "#internal/http/http-constants";
import { EncodingError, InvokeFetchError, PagingError } from "#internal/invoke-fetch/invoke-fetch-errors";
import { parseFetchResponse } from "#internal/invoke-fetch/invoke-fetch-functions";
import type {
  ApiCallOptions,
  DownloadableBlob,
  InvokeFetchProperties,
  InvokeFetchResponse,
  PageCallOptions,
  ProgressOptions,
} from "#internal/invoke-fetch/invoke-fetch-types";
import { isBrowser, isDevelopment } from "#internal/utils/utils";
import {
  applyPathVariables,
  canSendApiVersionHeader,
  means401OnWindows,
  appendQueryToUrl,
  addMissingQueryParams,
} from "./invoke-fetch-helpers";
import { invokeXHR } from "./invoke-xhr";
import { getFromCache, toCacheKey, updateCache, type CachingContext } from "./response-cache";

// NOTE: This constant is modified after npm-build to have the version of npm-package.
// Since it's modified through search-and-replace, any change to the string below
// has to be made in the search-string used in the 'build:npm' script.
const defaultUserAgent = "qmfe-api/latest";

/**
 * The normalized internal context of a request, built by `invokeFetch` for the original call and by
 * the paging functions for each page call, which get fresh auth params and their own call options.
 * Only the auth-module provided parts (`authHeaders`, `credentials`) change on retry.
 */
export type InvokeFetchWithUrlProperties = InvokeFetchUrlParams & {
  /** upper-case http method */
  method: string;
  body: unknown;
  contentType: string | undefined;
  options: NormalizedApiCallOptions;
  isPublic: boolean;
};

type DataWithLinks = {
  links?: {
    prev?: {
      href?: string;
    };
    next?: {
      href?: string;
    };
  };
};

export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    if (error.cause) {
      if (error.message) {
        return `${error.message} - ${getErrorMessage(error.cause)}`;
      }
      return getErrorMessage(error.cause);
    }
    return error.message;
  }
  return String(error);
}

async function fetchAndTransformExceptions(input: RequestInfo, init: RequestInit): Promise<Response> {
  try {
    return await fetch(input, init);
  } catch (e) {
    return Promise.reject(new InvokeFetchError(getErrorMessage(e), 0, new Headers(), {}));
  }
}

async function performActualHttpFetch<T extends InvokeFetchResponse>(
  method: string,
  completeUrl: string,
  unencodedBody: unknown,
  contentType: string | undefined,
  options: NormalizedApiCallOptions,
  authHeaders: Record<string, string>,
  credentials: Credentials,
  isPublic: boolean,
): Promise<T> {
  const { body, contentTypeHeader, requestOptions } = encodeBody(unencodedBody, contentType ?? "");

  // Consumers can override the content-type with the extra headers object
  const headers = {
    ...contentTypeHeader,
    ...authHeaders,
    ...options.headers,
  };

  // The duplex option isn't yet part of the RequestInit type but seems to
  // required by fetch to send streamed bodies.
  const request: RequestInit & { duplex?: "half"; progress?: ProgressOptions } = {
    method,
    credentials,
    mode: "cors",
    // Prohibit browser-caching of requests.
    cache: "no-store",
    headers,
    redirect: (await isWindows(options.hostConfig)) ? "manual" : "follow",
    keepalive: options.keepalive,
    progress: options.progress,
    body, // body data type must match "Content-Type" header
    ...requestOptions, // This adds 'duplex: "half"' if we're sending application/octet-stream, needed in node only.
  };

  // add timeout to request
  let fetchTimeoutId;
  if (options.signal) {
    request.signal = options.signal;
  } else if (options.timeoutMs && options.timeoutMs > 0) {
    const controller = new AbortController();
    fetchTimeoutId = setTimeout(() => {
      controller.abort();
    }, options.timeoutMs);
    request.signal = controller.signal;
  }

  let response: Response;
  // Progress reporting is not supported for `fetch` so we have to use a XMLHttpRequest instead.
  // The `invokeXHR` function exposes an API equivalent to `fetchAndTransfromExceptions`.
  if (options.progress) {
    response = await invokeXHR(completeUrl, request);
  } else {
    response = await fetchAndTransformExceptions(completeUrl, request);
  }

  // clear timeout on response
  if (fetchTimeoutId) {
    clearTimeout(fetchTimeoutId);
  }

  const invokeFetchResponse: InvokeFetchResponse = await parseFetchResponse(response, completeUrl);
  handleDeprecationHeaders(completeUrl, invokeFetchResponse, isPublic);
  return invokeFetchResponse as T;
}

/**
 * Emits a console warning/debug message when the server signals that the called endpoint is
 * deprecated, but only when the developer is likely to act on it:
 * - internal in the browser and devtools mode is active (`localStorage.devtools === "true"`)
 * - non-browser usage is not gated by browser devtools mode
 * - public usage logs through debug instead of warning
 */
function handleDeprecationHeaders(url: string, response: InvokeFetchResponse, isPublic: boolean): void {
  if (isBrowser()) {
    if (!isPublic && !isDevelopment()) {
      return;
    }
  }

  const deprecation = response.headers.get("deprecation");
  if (!deprecation) {
    return;
  }

  const sunset = response.headers.get("sunset");
  const link = response.headers.get("link");
  const parts = [`[Qlik] API deprecation notice for ${url} (deprecated since: ${parseSfDate(deprecation)})`];
  if (sunset) {
    parts.push(`Removal no earlier than: ${sunset}`);
  }
  if (link) {
    parts.push(`Details: ${link}`);
  }
  const message = parts.join(". ");
  if (isPublic) {
    // eslint-disable-next-line no-console
    console.debug(message);
  } else {
    // eslint-disable-next-line no-console
    console.warn(message);
  }
}

/**
 * Parses an RFC 8941 sf-date value (e.g. `"@1688169599"`) into a `YYYY-MM` string.
 * Returns the raw value unchanged if it does not match the expected format.
 */
function parseSfDate(value: string): string {
  const match = /^@(\d+)$/.exec(value);
  if (!match) {
    return value;
  }
  const date = new Date(Number(match[1]) * 1000);
  if (Number.isNaN(date.getTime())) {
    return value;
  }
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
}

export function encodeBody(
  unencodedBody: unknown,
  contentType: string,
): {
  body: RequestInit["body"];
  contentTypeHeader: Record<string, string>;
  requestOptions: { duplex?: "half" };
} {
  // Do nothing if there's no body to encode and return an empty content-type header.
  if (!unencodedBody) {
    return { body: null, contentTypeHeader: {}, requestOptions: {} };
  }
  // Determine content-type and encode body correctly.
  // 1. If there's no content there shouldn't be a Content-Type header.
  // 2. If content-type isn't specified, default to "application/json".
  // 3. If the content-type is multipart/form-data we should NOT set the header,
  //    this is done by fetch which also adds the boundary meta-data.
  const contentTypeHeader: Record<string, string> = {};
  const requestOptions: { duplex?: "half" } = {};
  let body: RequestInit["body"];
  switch (contentType) {
    case "":
    case "application/json":
      contentTypeHeader["Content-Type"] = "application/json";
      body = JSON.stringify(unencodedBody);
      break;
    case "multipart/form-data":
      body = encodeMultipartBody(unencodedBody);
      break;
    case "application/octet-stream":
      contentTypeHeader["Content-Type"] = contentType;
      requestOptions["duplex"] = "half";
      body = unencodedBody as BodyInit;
      break;
    case "text/plain":
      if (typeof unencodedBody === "string") {
        contentTypeHeader["Content-Type"] = contentType;
        body = unencodedBody;
      } else {
        throw new EncodingError(
          `Cannot send ${typeof unencodedBody} as ${contentType}, body should be a string.`,
          contentType,
          unencodedBody,
        );
      }
      break;
    default:
      throw new EncodingError(
        `Unsupported content-type "${contentType}", supported are: application/json, multipart/form-data, application/octet-stream and text/plain`,
        contentType,
        unencodedBody,
      );
  }
  return { body, contentTypeHeader, requestOptions };
}

// Encodes the body as FormData for multipart/form-data requests.
// Any form of dictionary is accepted and then each key-value pair
// will be encoded. The values must be of either string or object-type.
// If the body is already FormData (for some reason) then it is returned directly.
//
// If the encoding is unsuccesful a detailed error will be thrown.
function encodeMultipartBody(unencodedBody: unknown): FormData {
  const contentType = "multipart/form-data";
  if (typeof unencodedBody !== "object") {
    throw new EncodingError(
      `Cannot encode ${typeof unencodedBody} as ${contentType}, body should be an object.`,
      contentType,
      unencodedBody,
    );
  }
  if (Array.isArray(unencodedBody)) {
    throw new EncodingError(
      `Cannot encode ${typeof unencodedBody} as ${contentType}, body should be an object.`,
      contentType,
      unencodedBody,
    );
  }
  if (unencodedBody instanceof FormData) {
    return unencodedBody;
  }
  const form = new FormData();
  // Using "as object" because TSC doesn't understand negations.
  Object.entries(unencodedBody as object).forEach((entry) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const [key, value] = entry;
    switch (typeof value) {
      case "boolean":
      case "number":
      case "string":
        form.set(key, `${value}`);
        break;
      case "object":
        if (value instanceof Blob) {
          form.set(key, value);
        } else if (value instanceof Uint8Array) {
          const data = new Blob([value] as BlobPart[], { type: "application/octet-stream" });
          form.set(key, data);
        } else {
          const json = JSON.stringify(value);
          const data = new Blob([json], { type: "application/json" });
          // We need to use Blob to specify the content-type here but we don't want
          // a file-name, because this is not a file - override with empty string.
          form.set(key, data, "");
        }
        break;
      case "bigint":
      case "function":
      case "symbol":
      case "undefined":
      default:
        throw new EncodingError(
          `Cannot encode multipart-field "${key}" with value of type ${typeof value}, values must be objects, strings, numbers or boolean.`,
          contentType,
          unencodedBody,
        );
    }
  });
  return form;
}

type InvokeFetchUrlParams = {
  completeUrl: string;
  authHeaders: Record<string, string>;
  /** the query params the auth module added to `completeUrl`, replaced with fresh ones on retry */
  authQueryParams: Record<string, string>;
  credentials: Credentials;
  cacheKey: string;
};

export type NormalizedApiCallOptions = ApiCallOptions & {
  hostConfig: HostConfig;
  headers: Record<string, string>;
};

function getHeader(headers: Record<string, string>, name: string): string | undefined {
  const lowerCaseName = name.toLowerCase();
  const key = Object.keys(headers).find((k) => k.toLowerCase() === lowerCaseName);
  return key === undefined ? undefined : headers[key];
}

/**
 * Validates the resolved host config, then adds the default headers (`qlik-api-version`, `User-Agent`)
 * without overriding headers provided by the caller.
 * @throws InvalidHostConfigError when the host config can't be used for a cross domain request
 */
export async function normalizeOptions({
  options,
  userAgent,
  apiVersion,
}: Pick<InvokeFetchProperties, "userAgent" | "apiVersion"> & {
  options: ApiCallOptions & { hostConfig: HostConfig };
}): Promise<NormalizedApiCallOptions> {
  const { hostConfig } = options;
  // validate before the platform lookup below, which may fetch product-info from the host
  checkForCrossDomainRequest(hostConfig);
  const headers = { ...options.headers };

  if (getHeader(headers, QLIK_API_VERSION_HEADER) === undefined && (await canSendApiVersionHeader(hostConfig))) {
    headers[QLIK_API_VERSION_HEADER] = apiVersion || API_VERSION;
  }

  if (getHeader(headers, "User-Agent") === undefined) {
    if (userAgent) {
      headers["User-Agent"] = userAgent;
    } else if (isBrowser()) {
      headers["User-Agent"] = `${window.navigator.userAgent} ${defaultUserAgent}`;
    } else {
      headers["User-Agent"] = defaultUserAgent;
    }
  }

  return { ...options, hostConfig, headers };
}

/** Expects props with options normalized by `normalizeOptions` */
export async function getInvokeFetchUrlParams({
  method,
  pathTemplate,
  pathVariables,
  query,
  options,
}: InvokeFetchProperties & { options: NormalizedApiCallOptions }): Promise<InvokeFetchUrlParams> {
  const { hostConfig } = options;
  const locationUrl = toValidLocationUrl(hostConfig);
  const {
    headers: authHeaders,
    queryParams: authQueryParams,
    credentials,
  } = await getRestCallAuthParams({
    hostConfig,
    method,
  });

  const url = locationUrl + applyPathVariables(pathTemplate, pathVariables);
  const completeUrl = appendQueryToUrl(url, query);
  const serializedHostConfig = serializeHostConfig(hostConfig);
  const cacheKey = toCacheKey({ url: completeUrl, headers: options.headers, serializedHostConfig });

  return { completeUrl, authHeaders, authQueryParams, credentials, cacheKey };
}

export function invokeFetchWithUrl<T extends InvokeFetchResponse>(api: string, props: InvokeFetchWithUrlProperties) {
  const { method, completeUrl, options, cacheKey } = props;
  const cachingContext: CachingContext = {
    method,
    completeUrl,
    cacheKey,
    options,
  };
  const cachedResponse = getFromCache(api, cachingContext);
  if (cachedResponse) {
    return cachedResponse as Promise<T>;
  }

  const resultAfterAuthenticationCheck = sendWithAuthRetry<T>(props, true);

  // Run the result promise through a filter that adds paging functions if there are next/prev links
  const resultPromiseAfterPagingAddon = addPagingFunctions(api, {
    ...props,
    value: resultAfterAuthenticationCheck,
  });

  const finalResult = updateCache(api, cachingContext, resultPromiseAfterPagingAddon) as Promise<T>;
  return finalResult;
}

/**
 * Sends the request and lets the auth module handle authentication errors. A retry requested by the
 * auth module re-sends the same request once with fresh auth params, outside of caching and paging,
 * which are handled once for the whole invocation by `invokeFetchWithUrl`.
 */
function sendWithAuthRetry<T extends InvokeFetchResponse>(
  props: InvokeFetchWithUrlProperties,
  canRetry: boolean,
): Promise<T> {
  const { method, completeUrl, body, options, authHeaders, authQueryParams, credentials, contentType, isPublic } =
    props;

  const { url: completUrlWithAuth } = addMissingQueryParams(completeUrl, authQueryParams);
  // The actual result as provided by the backend service
  const resultPromiseFromBackend = performActualHttpFetch<T>(
    method,
    completUrlWithAuth,
    body,
    contentType,
    options,
    authHeaders,
    credentials,
    isPublic,
  );

  const performRetry = canRetry
    ? async (): Promise<T> => {
        // NOTE: Only the auth params are updated, the cacheKey stays the same.
        const fresh = await getRestCallAuthParams({ hostConfig: options.hostConfig, method });
        return sendWithAuthRetry<T>(
          {
            ...props,
            completeUrl,
            authHeaders: fresh.headers,
            authQueryParams: fresh.queryParams,
            credentials: fresh.credentials,
          },
          false,
        );
      }
    : undefined;

  // Run the result promise through a filter that intercepts the response and catches 401s and 30x and allows authentication modules
  // to among other things redirect the entire window WITHOUT resolving the promise
  return interceptAuthenticationErrors(options.hostConfig, completeUrl, resultPromiseFromBackend, performRetry);
}

const pageCallOptionNames: ReadonlyArray<keyof PageCallOptions> = [
  "noCache",
  "maxCacheAge",
  "useCacheIfAfter",
  "timeoutMs",
  "signal",
  "keepalive",
  "progress",
];

/** Picks the page call options that were set, ignoring any other api call options */
function pickPageCallOptions(pageCallOptions: PageCallOptions): PageCallOptions {
  return Object.fromEntries(
    pageCallOptionNames.filter((name) => name in pageCallOptions).map((name) => [name, pageCallOptions[name]]),
  );
}

/**
 * The url fetch resolves relative urls against in a browser: the document base url, which a `<base>`
 * element can point to another origin. Outside a browser there is no such url, so links are only
 * checked against the host config.
 */
function getRequestBaseUrl(): string | undefined {
  return isBrowser() ? document.baseURI : undefined;
}

/**
 * Throws a PagingError unless the link resolves to the same origin as the original call, which is
 * the host of the host config, or in a browser the request base url when no host is configured.
 */
function assertLinkToHost(url: string, hostConfig: HostConfig): void {
  // the base url is used instead of location.origin, which is "null" in sandboxed iframes and file:// pages
  const baseUrl = getRequestBaseUrl();
  let expectedOrigin = "";
  let linkOrigin: string | undefined;
  try {
    expectedOrigin = new URL(toValidLocationUrl(hostConfig) || (baseUrl ?? "")).origin;
    linkOrigin = new URL(url, baseUrl).origin;
  } catch {
    // an unparsable link or base url can't be verified
  }
  // an opaque origin can't be verified either, since every opaque origin is serialized as "null"
  if (linkOrigin === undefined || expectedOrigin === "null" || linkOrigin !== expectedOrigin) {
    throw new PagingError(
      `Page link "${url}" doesn't point to the host of the original call (${expectedOrigin || "unknown"})`,
      expectedOrigin,
      url,
    );
  }
}

/**
 * Adds paging functions to the response object if there are paging links present in the response body.
 * Page calls repeat the original call against the page link, with fresh auth params.
 */
function addPagingFunctions(
  api: string,
  {
    method,
    body,
    contentType,
    options,
    isPublic,
    value,
  }: InvokeFetchWithUrlProperties & { value: Promise<InvokeFetchResponse> },
): Promise<InvokeFetchResponse> {
  return value.then((resp) => {
    const dataWithPotentialLinks = resp.data as DataWithLinks;
    if (!dataWithPotentialLinks) {
      return resp;
    }
    const prevUrl = dataWithPotentialLinks.links?.prev?.href;
    const nextUrl = dataWithPotentialLinks.links?.next?.href;
    const serializedHostConfig = serializeHostConfig(options.hostConfig);
    // `hostConfig` isn't part of PageCallOptions, but untyped callers may still pass it
    const fetchPage = async (
      completeUrl: string,
      pageCallOptions: PageCallOptions & Pick<ApiCallOptions, "hostConfig"> = {},
    ) => {
      // page links are only valid for the host config of the original call
      if (pageCallOptions.hostConfig && serializeHostConfig(pageCallOptions.hostConfig) !== serializedHostConfig) {
        throw new InvalidHostConfigError("prev() and next() can't use a different host config than the original call");
      }
      assertLinkToHost(completeUrl, options.hostConfig);
      const {
        headers: authHeaders,
        queryParams: authQueryParams,
        credentials,
      } = await getRestCallAuthParams({ hostConfig: options.hostConfig, method });

      return invokeFetchWithUrl(api, {
        method,
        completeUrl,
        body,
        contentType,
        // the signal of the original call only applies to that call, a page call is aborted by its own signal
        options: { ...options, ...pickPageCallOptions(pageCallOptions), signal: pageCallOptions.signal },
        authHeaders,
        authQueryParams,
        credentials,
        cacheKey: toCacheKey({ url: completeUrl, headers: options.headers, serializedHostConfig }),
        isPublic,
      });
    };
    if (prevUrl) {
      // eslint-disable-next-line no-param-reassign
      resp.prev = (prevOptions?: PageCallOptions) => fetchPage(prevUrl, prevOptions);
    }
    if (nextUrl) {
      // eslint-disable-next-line no-param-reassign
      resp.next = (nextOptions?: PageCallOptions) => fetchPage(nextUrl, nextOptions);
    }
    return resp;
  });
}

function neverResolvingPromise<T>(): Promise<T> {
  return new Promise(() => {});
}

async function interceptAuthenticationErrors<T extends InvokeFetchResponse>(
  hostConfig: HostConfig | undefined,
  completeUrl: string,
  resultPromise: Promise<T>,
  performRetry: (() => Promise<T>) | undefined,
): Promise<T> {
  try {
    return await resultPromise;
  } catch (error) {
    const err = error as InvokeFetchError;
    const errorBody = err.data as Record<string, unknown> | undefined;
    if (
      err.status === 401 ||
      (err.status === 403 && errorBody?.code === "CSRF-TOKEN-2") ||
      (means401OnWindows(completeUrl, err.status) && (await isWindows(hostConfig)))
    ) {
      if (globalThis.loggingOut) {
        // We're currently logging out so just stop all promises from ever resolving
        return neverResolvingPromise<T>();
      }
      const { retry, preventDefault } = await handleAuthenticationError({
        hostConfig,
        status: err.status,
        headers: err.headers,
        errorBody,
        canRetry: !!performRetry,
      });
      if (retry && performRetry) {
        return performRetry();
      }
      if (preventDefault) {
        return neverResolvingPromise();
      }
    }
    throw error;
  }
}

/** Convert a Blob to a DownloadableBlob */
export function toDownloadableBlob(blob: Blob, name?: string): DownloadableBlob {
  const result: unknown = blob;
  if (name) {
    (result as DownloadableBlob).download = (filename?: string) => download(blob, filename ?? name);
  } else {
    (result as DownloadableBlob).download = (filename: string) => download(blob, filename);
  }
  return result as DownloadableBlob;
}

/** Convenience-function for downloading a blob. */
export async function download(blob: Blob, filename: string) {
  if (isBrowser()) {
    // Create an a-element to download the blob with the specified filename
    // and then click it.
    // At the moment of writing there doesn't seem to be any browser-API
    // for this.
    const a = document.createElement("a");
    const blobUrl = window.URL.createObjectURL(blob);
    a.href = blobUrl;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(blobUrl);
  } else {
    // Lazy import writeFileSync and write the blob-content to the specified file.
    const { writeFileSync } = await import("fs");
    const arrayBuffer = await blob.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);
    writeFileSync(filename, uint8Array);
  }
}
