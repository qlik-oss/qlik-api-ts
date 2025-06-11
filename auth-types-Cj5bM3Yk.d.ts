/** Credentials setting for http requests */
type Credentials = "include" | "same-origin" | "omit";
/** Props for function getRestCallAuthParams */
type GetRestCallAuthParamsProps<A extends AuthType = AuthType> = {
    hostConfig: HostConfig<A>;
    /** The HTTP method in the outgoing REST call */
    method: string;
};
/** Http reqeust parameters for auth to use when making a rest call based on a host config */
type RestCallAuthParams = {
    headers: Record<string, string>;
    queryParams: Record<string, string>;
    credentials: Credentials;
};
/** Props for function getWebsocketAuthParams */
type GetWebSocketAuthParamsProps<A extends AuthType = AuthType> = {
    hostConfig: HostConfig<A>;
};
/** Websocket auth parameters to use when setting up a websocket based on a host config */
type WebSocketAuthParams = {
    queryParams: Record<string, string>;
};
/** Props for function getWebResourceAuthParams */
type GetWebResourceAuthParamsProps<A extends AuthType = AuthType> = {
    hostConfig: HostConfig<A>;
};
/** Webresource auth parameters to use when fetching a web resource with a host config */
type WebResourceAuthParams = {
    queryParams: Record<string, string>;
};
type GetRemoteAuthDataProps<A extends AuthType = AuthType> = {
    hostConfig: HostConfig<A>;
    queryParams?: Record<string, string>;
};
/** Props for function handleAuthenticationError */
type HandleAuthenticationErrorProps<A extends AuthType = AuthType> = {
    /** host conifg for connecting to a host */
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
type AuthenticationErrorAction = {
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
    [K in keyof T]-?: {} extends Pick<T, K> ? never : K;
}[keyof T];
/** A typed string array with extracted optional properties from a type */
type OptionalKeys<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? K : never;
}[keyof T];
/** An authentication module for a specific authentication format, like oauth, cookies etc */
type AuthModule<A extends AuthType = AuthType> = {
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
type AuthType = keyof QlikAuthModules;
/** Configuration object for connecting and authenticating with Qlik platform(s) */
type HostConfig<A extends AuthType = AuthType> = {
    [K in keyof QlikAuthModules]: QlikAuthModuleConfigUnion<K> & HostConfigCommon;
}[A];
type QlikAuthModuleConfigUnion<K extends keyof QlikAuthModules> = (K extends keyof ImplicitQlikAuthModules ? {
    authType?: K;
} : {
    authType: K;
}) & QlikAuthModules[K]["config"];
type HostConfigCommon = {
    /** The URL to the cloud tenant or windows server. If scheme is excluded https is used. May include a virtual proxy prefix on windows. Any trailing slashes are stripped. */
    host?: string;
    autoRedirect?: boolean;
    authRedirectUserConfirmation?: () => Promise<void>;
    /**
     * Optional parameter that can be used to point to a Qlik Cloud tenant domain from which the embed runtime should be loaded. If omitted the host parameter will be used.
     */
    embedRuntimeUrl?: string;
    onAuthFailed?: (props: {
        message: string;
    }) => unknown;
};
/**
 * These properties are always allowed in the host config, even if they are not defined in the HostConfig interface
 * for the specific auth module.
 */
declare const hostConfigCommonProperties: (keyof HostConfig)[];
/** The keys in this interface are used to determine what auth types that are allowed to be set to undefined */
interface ImplicitQlikAuthModules {
    apikey: object;
    oauth2: object;
    cookie: object;
    windowscookie: object;
    reference: object;
    anonymous: object;
}
type AuthTypeThatCanBeOmitted = keyof ImplicitQlikAuthModules;
declare const authTypesThatCanBeOmitted: AuthTypeThatCanBeOmitted[];

export { type AuthType as A, type Credentials as C, type GetRestCallAuthParamsProps as G, type HostConfig as H, type RestCallAuthParams as R, type WebResourceAuthParams as W, type AuthModule as a, type GetWebSocketAuthParamsProps as b, type WebSocketAuthParams as c, type GetWebResourceAuthParamsProps as d, type GetRemoteAuthDataProps as e, type HandleAuthenticationErrorProps as f, type AuthenticationErrorAction as g, type HostConfigCommon as h, hostConfigCommonProperties as i, type AuthTypeThatCanBeOmitted as j, authTypesThatCanBeOmitted as k };
