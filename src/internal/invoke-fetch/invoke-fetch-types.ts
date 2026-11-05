import type { HostConfig } from "#internal/auth/auth-types";

/* -------------------------------------------------------------------------- */
/*                          invoke-fetch module types                         */
/* -------------------------------------------------------------------------- */

/** The typical base return type of a fetch call */
export type InvokeFetchResponse = {
  status: number;
  headers: Headers;
  data: unknown;
  /**
   * Fetches the page at `links.prev.href` of the response. In a browser, relative links are resolved
   * against the document base url, as fetch does. The call rejects with a `PagingError` without
   * sending a request if the link doesn't resolve to the origin of the original call's host config,
   * or in a browser to the origin of the base url when no host is configured.
   */
  prev?: (options?: PageCallOptions) => Promise<InvokeFetchResponse>;
  /**
   * Fetches the page at `links.next.href` of the response. In a browser, relative links are resolved
   * against the document base url, as fetch does. The call rejects with a `PagingError` without
   * sending a request if the link doesn't resolve to the origin of the original call's host config,
   * or in a browser to the origin of the base url when no host is configured.
   */
  next?: (options?: PageCallOptions) => Promise<InvokeFetchResponse>;
};

/** An entry in the cache for one specific cacheKey */
export type CacheEntry = {
  lastPulled: number;
  /** last time the cache was accessed and prevented an api call */
  lastHit: Date | null;
  /** number of times the cache has been hit by a client */
  hitCount: number;
  /** the url path of the cache hit. Useful to determine how many different qmfes are accessing the cache key */
  accessedPaths: Set<string>;
  value: Promise<unknown>;
};

/** Part of the ApiOptions type that includes caching-related properties */
export type CacheOptions = {
  noCache?: boolean;
  maxCacheAge?: number;
  useCacheIfAfter?: Date;
};

/** Additional options for an api call done with invoke-fetch */
export type ApiCallOptions = {
  /** Additional headers to pass on to the request. */
  headers?: Record<string, string>;
  /** if set to true the call will not use a cached result */
  noCache?: boolean;
  /**
   * Only used cached results whose age in milliseconds are less than that or equal to `maxCacheAge`.
   */
  maxCacheAge?: number | undefined;
  /**
   * Only results cached on or after the `ifCachedSince` timestamp are used.
   */
  useCacheIfAfter?: Date;
  /**
   * Specify the host config if the api call is a cross-domain request. Typically used in embedding and mashups
   */
  hostConfig?: HostConfig;
  /**
   * Set the amount of time to wait for a response.
   * If the timeout is exceeded the request is aborted.
   * If both timeoutMs and signal is present, timeoutMs will have no effect, as
   * there is already an abort-signal specified.
   */
  timeoutMs?: number;
  /**
   * An abort-signal lets you abort an ongoing fetch request. The abort-signal is created
   * by taking the .signal property of an AbortController.
   */
  signal?: AbortSignal;
  /**
   * Ensure that the request is kept alive even if the page that initiated it is unloaded
   * before the request is completed.
   */
  keepalive?: boolean;

  /**
   * Options for progress-reporting. Specify any combination of the callbacks `onUpload`
   * and `onDownload`. Progress will be reported continuously.
   */
  progress?: ProgressOptions;
};

/**
 * Options for a `prev` or `next` page call. A page call repeats the original call against
 * the page link of the response, so only the options that control how the call is performed
 * can be set. Options not set here are taken from the original call, except `signal`, which only
 * applies to the call it is passed to.
 */
export type PageCallOptions = Pick<
  ApiCallOptions,
  "noCache" | "maxCacheAge" | "useCacheIfAfter" | "timeoutMs" | "signal" | "keepalive" | "progress"
>;

export type InvokeFetchProperties = {
  /** http method */
  method: string;
  /** data passed to api call */
  body?: unknown;
  /** additional api call options */
  options?: ApiCallOptions;
  /** override default RequestInit options */
  requestInitOverrides?: RequestInit;
  /** path to api endpoint, can be in a template format e.g. /api/v1/space/{spaceId} */
  pathTemplate: string;
  /** path variables to be used in the path template */
  pathVariables?: Record<string, string>;
  /** additional query to url */
  query?: Record<string, unknown>;
  /** specify what content-type to send, if omitted "application/json" is assumed */
  contentType?: string;
  /** override the default user-agent with this value. This will also override any browser's UA. */
  userAgent?: string;

  /**
   * @internal
   * override the 'qlik-api-version', by default this is the latest version available
   * when the library was built and is what corresponds with the generated types.
   */
  apiVersion?: string;

  /** @internal */
  isPublic?: boolean;
};

export type DownloadableBlob = Blob & {
  /** download the blob in a using the specified filename */
  download: (filename: string) => Promise<void>;
};

/** The callback options for reporting progress. */
export type ProgressOptions = {
  /** upload callback, called repeatedly when upload-progress is available */
  onUpload?: (event: PartialProgressEvent) => void;
  /** download callback, called repeatedly when upload-progress is available */
  onDownload?: (event: PartialProgressEvent) => void;
};

/** Represents the current upload or download progress a API-call.
 *
 * It contains the number of loaded bytes and, if computable, the total payload size.
 * If the total size cannot be determined, `total` will be undefined.
 *
 *
 * See MDN: {@link https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent}
 */
export type PartialProgressEvent = {
  /** Number of bytes currently loaded. */
  loaded: ProgressEvent["loaded"];
  /** The total size of the payload, if computable. */
  total?: ProgressEvent["total"];
};

export default {};
