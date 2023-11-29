import { A as AuthType, a as AuthModule, H as HostConfig } from './auth-types-nnUcWhuU.js';
export { f as AuthenticationErrorAction, C as Credentials, G as GetRestCallAuthParamsProps, c as GetWebResourceAuthParamsProps, b as GetWebSocketAuthParamsProps, e as HandleAuthenticationErrorProps, R as RestCallAuthParams, d as WebResourceAuthParams, W as WebSocketAuthParams } from './auth-types-nnUcWhuU.js';

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
declare const _default: {
    registerAuthModule: typeof registerAuthModule;
    setDefaultHostConfig: typeof setDefaultHostConfig;
};

export { AuthModule, AuthType, HostConfig, _default as default, logout, registerAuthModule, setDefaultHostConfig };
