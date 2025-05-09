import { H as HostConfig } from './auth-types-DqfMuSRX.js';

/** ApiKey Auth Configuration for a HostConfig */
type ApiKeyAuthConfig = {
    /** api key created by a developer role on a tenant */
    apiKey: string;
};
/** Cookie Auth Configuration for a HostConfig */
type CookieAuthConfig = {
    /** Web Integration Id created by tenant admin */
    webIntegrationId?: string;
    /** If set to false the `credentials` property will be set to same-origin  */
    crossSiteCookies?: boolean;
    /** Set to true if browser is running in anonymous mode, which is detected if there's a eac token in the url */
    anonymousMode?: boolean;
};
/** WindowsCookie Auth Configuration for a HostConfig */
type WindowsCookieAuthConfig = {
    /** location of the login page, auth module will redirect to this page when an unauthenticated api call is made */
    loginUri?: string;
    /** If set to false the `credentials` property will be set to same-origin  */
    crossSiteCookies?: boolean;
};
type PerformInteractiveLoginFn = (props: {
    /**
     * Returns the url to the login page. The redirectUri parameter property is used to tell the login page where to redirect the browser after the login has succeeded.
     * Note that the redirectUri needs to be registered in the oauth configuration.
     */
    getLoginUrl: (props: {
        redirectUri: string;
    }) => Promise<string>;
}) => Promise<{
    code: string;
    state: string;
} | string>;
/** OAuth2 Auth Configuration for a HostConfig */
type Oauth2AuthConfig = {
    /** client id of oauth client created by tenant admin */
    clientId: string;
    /** client id of oauth client created by tenant admin */
    clientSecret?: string;
    /** location of where the client should be redirected after getting hold of the access token */
    redirectUri?: string;
    /** If set, store the access token in either local or session storage, otherwise not stored */
    accessTokenStorage?: "session" | "local";
    /** A string with comma separated values of oauth2 scopes https://oauth.net/2/scope defaults to "user_default" */
    scope?: string;
    /**
     * A custom function that can be used on the client side to fetch an oauth access token from a custom backend.
     * Typically used in oauth impersonation.
     */
    getAccessToken?: string | (() => Promise<string>);
    /**
     * If set to true no caching or storing of the access token is done.
     * This is typically used on the serverside with impersonation so that a client always gets a fresh token.
     * Caching is in that case handled on the client side.
     */
    noCache?: boolean;
    /**
     * Can be used on the serverside to impersonate a specific user when authenticating using a client secret.
     * Typically used together with the `noCache` since caching is done on the browser side.
     */
    subject?: string;
    /**
     * Can be used on the serverside to impersonate a specific user when authenticating using a client secret.
     * Typically used together with the `noCache` since caching is done on the browser side.
     */
    userId?: string;
    /**
     * Can be used to customize the login flow, for instance if the login page should be shown in another browser tab/window.
     * The function is asynchronous and when the loging flow is finished it should return the code and state provided in the
     * query of the oauth redirect callback. The code and state can either be provided as an object or as the entire callback url.
     */
    performInteractiveLogin?: PerformInteractiveLoginFn;
};
/** Anonymous Auth Configuration for a HostConfig - used when embedding UI's linked to an anonymous tenant/app */
type AnonymousAuthConfig = {
    /**
     * Experimental and unsupported
     */
    accessCode: string;
    /** client id of oauth client created by tenant admin */
    clientId: string;
};
/** Used to reference a registered host config as a single string */
type ReferenceConfig = {
    /** The name of the registered host config to reference */
    reference: string;
};
declare global {
    /**
     * QlikAuthModules is a global interface that can be extended to add custom auth modules.
     */
    interface QlikAuthModules {
        apikey: {
            config: ApiKeyAuthConfig;
        };
        oauth2: {
            config: Oauth2AuthConfig;
        };
        cookie: {
            config: CookieAuthConfig;
        };
        anonymous: {
            config: AnonymousAuthConfig;
        };
        windowscookie: {
            config: WindowsCookieAuthConfig;
        };
        reference: {
            config: ReferenceConfig;
        };
        none: {
            config: object;
        };
    }
    /**
     * Property set on the window when the user is logging out.
     * This prevents unnecessary redirect calls when pending requests
     * resolved.
     */
    var loggingOut: boolean;
    /**
     * Attaching cache to the window so it can be viewed from the devtool.
     * Do not use this for anything!
     */
    var __API_CACHE__DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Record<string, Record<string, CacheEntry> | undefined>;
    /**
     * QlikMain object defined in https://github.com/qlik-trial/main-web-container/blob/main/src/main.ts
     */
    var QlikMain: {
        resourceNeedsCredentials: (resourcesUrl: string) => boolean;
        applyFeatureOverrides: (featureFlags: Record<string, boolean>) => Promise<void>;
    } | undefined;
}

/** The typical base return type of a fetch call */
type InvokeFetchResponse = {
    status: number;
    headers: Headers;
    data: unknown;
    prev?: () => Promise<InvokeFetchResponse>;
    next?: () => Promise<InvokeFetchResponse>;
};
/** An entry in the cache for one specific cacheKey */
type CacheEntry = {
    lastPulled: number;
    /** last time the cache was accessed and prevented an api call */
    lastHit: Date | null;
    /** number of times the cache has been hit by a client */
    hitCount: number;
    /** the url path of the cache hit. Useful to determine how many different qmfes are accessing the cache key */
    accessedPaths: Set<string>;
    value: Promise<unknown>;
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
