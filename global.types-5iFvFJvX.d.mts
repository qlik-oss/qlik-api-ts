import { H as HostConfig } from './auth-types-nnUcWhuU.mjs';

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
     * Specify if another host than `globalThis.location` is to be used. Typically used in embedding and mashups
     */
    hostConfig?: HostConfig;
    /**
     * Set the amount of time to wait for a response.
     * If the timeout is exceeded the request is aborted.
     */
    timeoutMs?: number;
};
type DownloadableBlob = Blob & {
    /** download the blob in a using the specified filename */
    download: (filename: string) => Promise<void>;
};

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
};
/** WindowsCookie Auth Configuration for a HostConfig */
type WindowsCookieAuthConfig = {
    /** location of the login page, auth module will redirect to this page when an unauthenticated api call is made */
    loginUri?: string;
    /** If set to false the `credentials` property will be set to same-origin  */
    crossSiteCookies?: boolean;
};
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
        windowscookie: {
            config: WindowsCookieAuthConfig;
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
    var __API_CACHE__DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Record<string, Record<string, CacheEntry>>;
    /**
     * QlikMain object defined in https://github.com/qlik-trial/main-web-container/blob/main/src/main.ts
     */
    var QlikMain: {
        resourceNeedsCredentials: (resourcesUrl: string) => boolean;
    } | undefined;
}

export type { ApiCallOptions as A, DownloadableBlob as D };
