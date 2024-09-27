import { A as AuthType, a as AuthModule, H as HostConfig } from './auth-types-PkN9CAF_.js';
export { g as AuthenticationErrorAction, C as Credentials, e as GetRemoteAuthDataProps, G as GetRestCallAuthParamsProps, c as GetWebResourceAuthParamsProps, b as GetWebSocketAuthParamsProps, f as HandleAuthenticationErrorProps, R as RestCallAuthParams, d as WebResourceAuthParams, W as WebSocketAuthParams } from './auth-types-PkN9CAF_.js';

/**
 * Registers an auth module that can handle authentication. An auth module is used by specifying its name as authType in the HostConfig passed in to api calls.
 * @param name the name of the module
 * @param authModule the implementation of the AuthModule interface
 */
declare function registerAuthModule<A extends AuthType>(name: A, authModule: AuthModule<A>): void;
/**
 * Logs out the user and sets `global.loggingOut` to true.
 *
 * **NOTE**: Does not abort pending requests.
 */
declare function logout(): void;
/**
 * Sets the default host config that will be used for all qmfe api calls that do not inclue a HostConfig
 * @param hostConfig the default HostConfig to use
 */
declare function setDefaultHostConfig(hostConfig: HostConfig | undefined): void;
/**
 * Returns an access token using the supplied host config. Typically used on the backend to supply the access token to the frontend
 */
declare function getAccessToken({ hostConfig }: {
    hostConfig?: HostConfig;
}): Promise<string>;
/**
 * The AuthApi interface provides the public interface for the auth module.
 */
interface AuthAPI {
    /**
     * Registers an auth module that can handle authentication. An auth module is used by specifying its name as authType in the HostConfig passed in to api calls.
     * @param name the name of the module
     * @param authModule the implementation of the AuthModule interface
     */
    registerAuthModule: typeof registerAuthModule;
    /**
     * Sets the default host config that will be used for all qmfe api calls that do not include a host config
     * @param hostConfig the default HostConfig to use
     */
    setDefaultHostConfig: typeof setDefaultHostConfig;
    /**
     * Returns an access token using the supplied host config. Typically used on the backend to supply the access token to the frontend
     */
    getAccessToken: typeof getAccessToken;
}
declare const _default: {
    registerAuthModule: typeof registerAuthModule;
    setDefaultHostConfig: typeof setDefaultHostConfig;
    getAccessToken: typeof getAccessToken;
};

export { type AuthAPI, AuthModule, AuthType, HostConfig, _default as default, getAccessToken, logout, registerAuthModule, setDefaultHostConfig };
