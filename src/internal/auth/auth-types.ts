import "../global-types";

/* -------------------------------------------------------------------------- */
/*                              auth module types                             */
/* -------------------------------------------------------------------------- */

/** Auth options for the websocket connection. These options are only applicable for nodeJS applications connecting to Qlik Sense Enterprise on Windows */
export type PfxAuthOptions = {
  /** PFX file from an exported certificate */
  pfx: Uint8Array;
  /** Passphrase for the PFX file */
  passphrase: string;
};

/** Credentials setting for http requests */
export type Credentials = "include" | "same-origin" | "omit";

/** Props for function getRestCallAuthParams */
export type GetRestCallAuthParamsProps<A extends AuthType = AuthType> = {
  hostConfig: HostConfig<A>;

  /** The HTTP method in the outgoing REST call */
  method: string;
};

/** Http request parameters for auth to use when making a rest call based on a host config */
export type RestCallAuthParams = {
  /** Headers added to the outgoing REST request. Headers are only applied in NodeJS environments and NOT in browsers */
  headers: Record<string, string>;
  /** The query parameters to add to the REST request URL */
  queryParams: Record<string, string>;
  /** Credentials setting for http requests */
  credentials: Credentials;
};

/** Props for function getWebsocketAuthParams */
export type GetWebSocketAuthParamsProps<A extends AuthType = AuthType> = {
  hostConfig: HostConfig<A>;
};

/** Websocket auth parameters to use when setting up a websocket based on a host config */
export type WebSocketAuthParams = {
  /** The query parameters to add to the websocket URL */
  queryParams?: Record<string, string>;
  /** Headers added to the websocket connection. Headers is only applied in NodeJS environments and NOT in browsers */
  headers?: Record<string, string>;
  /** Auth options for the websocket connection. These options are only applicable for nodeJS applications connecting to Qlik Sense Enterprise on Windows */
  pfxOptions?: PfxAuthOptions;
};

/** Props for function getWebResourceAuthParams */
export type GetWebResourceAuthParamsProps<A extends AuthType = AuthType> = {
  hostConfig: HostConfig<A>;
};

/** Web resource auth parameters to use when fetching a web resource with a host config */
export type WebResourceAuthParams = { queryParams: Record<string, string> };

export type GetRemoteAuthDataProps<A extends AuthType = AuthType> = {
  hostConfig: HostConfig<A>;
  queryParams?: Record<string, string>;
};

/** Props for function handleAuthenticationError */
export type HandleAuthenticationErrorProps<A extends AuthType = AuthType> = {
  /** host config for connecting to a host */
  hostConfig: HostConfig<A>;
  /** HTTP status of the response */
  status: number;
  /** Body of the error response */
  errorBody?: Record<string, unknown>;
  /** HTTP response headers */
  headers: Headers;
  /** Set to true if it is possible to perform a retry. This will be true for the first call, and false if the call is actually a retry */
  canRetry: boolean;
};

/** Action to take when error occurs during authentication */
export type AuthenticationErrorAction = {
  /**
   * If set to true the request will be retried and its AuthParams will be fetched again
   */
  retry?: boolean;
  /**
   * Set to true to prevent the api call result promise from ever resolving.
   * Typically used when redirecting the window to a login page to prevent
   * transient errors from happening in the page while the browser is loading the login page.
   */
  preventDefault?: boolean;
};

/** A typed string array with extracted required properties from a type */
type RequiredKeys<T> = {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K;
}[keyof T];

/** A typed string array with extracted optional properties from a type */
type OptionalKeys<T> = {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  [K in keyof T]-?: {} extends Pick<T, K> ? K : never;
}[keyof T];

/** An authentication module for a specific authentication format, like oauth, cookies etc */
export type AuthModule<A extends AuthType = AuthType> = {
  /** Properties required for this auth module */
  requiredProps?: RequiredKeys<HostConfig<A>>[];

  /** Properties that are optional for this auth module */
  optionalProps?: OptionalKeys<HostConfig<A>>[];

  /** Get auth params for rest api calls */
  getRestCallAuthParams: (props: GetRestCallAuthParamsProps<A>) => Promise<RestCallAuthParams>;

  /** Get auth params for websocket api calls */
  getWebSocketAuthParams: (props: GetWebSocketAuthParamsProps<A>) => Promise<WebSocketAuthParams>;

  /** Get auth params for web resource request */
  getWebResourceAuthParams?: (props: GetWebResourceAuthParamsProps<A>) => Promise<WebResourceAuthParams>;

  /** Callback for when auth error happens */
  handleAuthenticationError: (props: HandleAuthenticationErrorProps<A>) => Promise<AuthenticationErrorAction>;

  /** Runtime check for validating host config */
  validateHostConfig?: (hostConfig: Record<string, unknown>) => boolean;
};

/** Valid strings for known authentication types */
export type AuthType = keyof QlikAuthModules;

/** Configuration object for connecting and authenticating with Qlik platform(s) */
export type HostConfig<A extends AuthType = AuthType> = {
  [K in keyof QlikAuthModules]: QlikAuthModuleConfigUnion<K> & HostConfigCommon;
}[A];

/* -------------------------------------------------------------------------- */
/*                                   private                                  */
/* -------------------------------------------------------------------------- */

type QlikAuthModuleConfigUnion<K extends keyof QlikAuthModules> = (K extends keyof ImplicitQlikAuthModules
  ? {
      authType?: K;
    }
  : { authType: K }) &
  QlikAuthModules[K]["config"];

export type HostConfigCommon = {
  /** The URL to the cloud tenant or windows server. If scheme is excluded https is used. May include a virtual proxy prefix on windows. Any trailing slashes are stripped. */
  host?: string;
  autoRedirect?: boolean;
  authRedirectUserConfirmation?: () => Promise<void>;
  /**
   * Optional parameter that can be used to point to a Qlik Cloud tenant domain from which the embed runtime should be loaded. If omitted the host parameter will be used.
   */
  embedRuntimeUrl?: string;

  onAuthFailed?: (props: { message: string }) => unknown;
};

/**
 * These properties are always allowed in the host config, even if they are not defined in the HostConfig interface
 * for the specific auth module.
 */
export const hostConfigCommonProperties: (keyof HostConfig)[] = [
  "authType",
  "autoRedirect",
  "authRedirectUserConfirmation",
  "embedRuntimeUrl",
  "host",
  "onAuthFailed",
];

/** The keys in this interface are used to determine what auth types that are allowed to be set to undefined */
interface ImplicitQlikAuthModules {
  apikey: object;
  oauth2: object;
  cookie: object;
  windowscookie: object;
  reference: object;
  anonymous: object;
  pfx: object;
}

export type AuthTypeThatCanBeOmitted = keyof ImplicitQlikAuthModules;

// The auth types that can be omitted from the host config - needs to be the same as the keys in ImplicitQlikAuthModules
export const authTypesThatCanBeOmitted: AuthTypeThatCanBeOmitted[] = [
  "apikey",
  "oauth2",
  "cookie",
  "windowscookie",
  "reference",
  "anonymous",
  "pfx",
];
