/* eslint-disable @typescript-eslint/naming-convention */
import type { CacheEntry } from "#internal/invoke-fetch/invoke-fetch-types";
import type { ProductInfo } from "./platform/platform-types";

/* -------------------------------------------------------------------------- */
/*                              Qlik Auth Modules                             */
/* -------------------------------------------------------------------------- */

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
  /** location of the login page, auth module will redirect to this page when an unauthenticated api call is made. Not applicable in Node.js environments. */
  loginUri?: string;
  /** If set to false the `credentials` property will be set to same-origin. Not applicable in Node.js environments. */
  crossSiteCookies?: boolean;

  /**
   * A custom function that can be used to fetch a windows auth jwt.
   * The jwt will be exchanged for a session cookie.
   * In the browser this should typically fetch the jwt from a custom backend service.
   * Mandatory in Node.js environments.
   */
  getAccessToken?: string | (() => Promise<string>);
};

/**
 * The contract for a storage implementation that can be used to store oauth access tokens.
 */
export type SecretStorage = {
  /**
   * Store a secret value with the specified key. Encryption or other security measures are the responsibility of the implementation.
   */
  store: (key: string, value: string) => Promise<void>;

  /**
   * Retrieve a stored secret value by its key. The implementation should return undefined if no value is found for the key.
   */
  get: (key: string) => Promise<string | undefined>;

  /**
   * Delete a stored secret value by its key.
   */
  delete: (key: string) => Promise<void>;
};

export type PerformInteractiveLoginFn = (props: {
  /**
   * Returns the url to the login page. The redirectUri parameter property is used to tell the login page where to redirect the browser after the login has succeeded.
   * Note that the redirectUri needs to be registered in the oauth configuration.
   */
  getLoginUrl: (props: { redirectUri: string }) => Promise<string>;
}) => Promise<{ code: string; state: string } | string>;

/** OAuth2 Auth Configuration for a HostConfig */
type Oauth2AuthConfig = {
  /** client id of oauth client created by tenant admin */
  clientId: string;
  /** client id of oauth client created by tenant admin */
  clientSecret?: string;
  /** location of where the client should be redirected after getting hold of the access token */
  redirectUri?: string;
  /** If set, store the access token in either local or session storage, or using a custom secret storage implementation. Otherwise it is only stored in memory. */
  accessTokenStorage?: "session" | "local" | SecretStorage;
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

type PfxConfig = {
  /** pfx file as buffer */
  pfx: Uint8Array;
  /** Passphrase for the pfx file */
  passphrase?: string;
  /** Optional X-Qlik-User header */
  userHeader?: string;
};

declare global {
  /**
   * QlikAuthModules is a global interface that can be extended to add custom auth modules.
   */
  interface QlikAuthModules {
    apikey: { config: ApiKeyAuthConfig };
    oauth2: { config: Oauth2AuthConfig };
    cookie: { config: CookieAuthConfig };
    anonymous: { config: AnonymousAuthConfig };
    windowscookie: { config: WindowsCookieAuthConfig };
    reference: { config: ReferenceConfig };
    pfx: { config: PfxConfig };
    none: { config: object };
    noauth: { config: object };
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
   * QlikMain object
   */
  var QlikMain:
    | {
        resourceNeedsCredentials: (resourcesUrl: string) => boolean;
        applyFeatureOverrides: (featureFlags: Record<string, boolean>) => Promise<void>;
        getRootUrl: () => string;
        PRODUCT_INFO?: ProductInfo;
        REGION?: string;
        ENVIRONMENT?: string;
        INTERNAL__DO_NOT_USE: Record<string, unknown>;
      }
    | undefined;
}
