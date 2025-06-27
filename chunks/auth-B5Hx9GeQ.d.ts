import { AuthModule, AuthType, HostConfig, WebResourceAuthParams } from "./auth-types-BlCWK0FP.js";

//#region src/public/auth.d.ts

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
 * Registers a host config with the given name.
 * @param name The name of the host config to be used to reference the host config later.
 * @param hostConfig The host config to register.
 */
declare function registerHostConfig(name: string, hostConfig: HostConfig): void;
/**
 * Unregisters a host config with the given name.
 * @param name The name of the host config to unregister.
 */
declare function unregisterHostConfig(name: string): void;
/**
 * Returns an access token using the supplied host config. Typically used on the backend to supply the access token to the frontend
 */
declare function getAccessToken({
  hostConfig
}: {
  hostConfig?: HostConfig;
}): Promise<string>;
/**
 * Returns a record of query parameters that needs to be added to resources requests, e.g.
 * image tags, etc.
 */
declare function getWebResourceAuthParams({
  hostConfig
}: {
  hostConfig?: HostConfig;
}): Promise<WebResourceAuthParams>;
/**
 * The AuthAPI interface provides the public interface for the auth module.
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
   * Registers a host config with the given name.
   * @param name The name of the host config to be used to reference the host config later.
   * @param hostConfig The host config to register.
   */
  registerHostConfig: typeof registerHostConfig;
  /**
   * Unregisters a host config with the given name.
   * @param name The name of the host config to unregister.
   */
  unregisterHostConfig: typeof unregisterHostConfig;
  /**
   * Returns an access token using the supplied host config. Typically used on the backend to supply the access token to the frontend
   */
  getAccessToken: typeof getAccessToken;
  /**
   * Returns a record of query parameters that needs to be added to resources requests, e.g.
   * image tags, etc.
   */
  getWebResourceAuthParams: typeof getWebResourceAuthParams;
}
declare const _default: {
  registerAuthModule: typeof registerAuthModule;
  setDefaultHostConfig: typeof setDefaultHostConfig;
  registerHostConfig: typeof registerHostConfig;
  unregisterHostConfig: typeof unregisterHostConfig;
  getAccessToken: typeof getAccessToken;
  getWebResourceAuthParams: typeof getWebResourceAuthParams;
};
//#endregion
export { AuthAPI, _default, getAccessToken, getWebResourceAuthParams, logout, registerAuthModule, registerHostConfig, setDefaultHostConfig, unregisterHostConfig };