import { H as HostConfig } from './auth-types-Btwi7CsB.js';

/** The typical base return type of a fetch call */
type InvokeFetchResponse = {
    status: number;
    headers: Headers;
    data: unknown;
    prev?: () => Promise<InvokeFetchResponse>;
    next?: () => Promise<InvokeFetchResponse>;
};
/** Additional options for an api call done with invoke-fetch */
type ApiCallOptions = {
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
     * Specify the host configif the api call is a cross-domain request. Typically used in embedding and mashups
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
type InvokeFetchProperties = {
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
};
type DownloadableBlob = Blob & {
    /** download the blob in a using the specified filename */
    download: (filename: string) => Promise<void>;
};
/** The callback options for reporting progress. */
type ProgressOptions = {
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
type PartialProgressEvent = {
    /** Number of bytes currently loaded. */
    loaded: ProgressEvent["loaded"];
    /** The total size of the payload, if computable. */
    total?: ProgressEvent["total"];
};

export type { ApiCallOptions as A, DownloadableBlob as D, InvokeFetchResponse as I, InvokeFetchProperties as a };
