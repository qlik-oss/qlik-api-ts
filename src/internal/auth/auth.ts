/**
 * This module provides authentication utilities, types, and error handlers.
 * @module auth
 */

import type {} from "../global-types";
import {
  determineAuthType,
  getAccessToken,
  getDefaultHostConfig,
  getRestCallAuthParams,
  getWebResourceAuthParams,
  getWebSocketAuthParams,
  handleAuthenticationError,
  isHostCrossOrigin,
  isWindows,
  logout,
  normalizeHostConfig,
  onFatalAuthError,
  onPageRedirectRequested,
  onPageRedirectStarted,
  registerAuthModule,
  registerHostConfig,
  serializeHostConfig,
  setDefaultHostConfig,
  toValidLocationUrl,
  toValidWebsocketLocationUrl,
  unregisterHostConfig,
} from "./auth-functions";

/* -------------------------------------------------------------------------- */
/*                                 auth module                                */
/* -------------------------------------------------------------------------- */

// Export all types/classes/functions from auth-errors.ts
export * from "./auth-errors";

// Export all types inside auth-types.ts
export type * from "./auth-types";

// Export these methods on AuthAPI as named exports from auth-functions.ts
export {
  determineAuthType,
  getAccessToken,
  getDefaultHostConfig,
  getRestCallAuthParams,
  getWebResourceAuthParams,
  getWebSocketAuthParams,
  handleAuthenticationError,
  isHostCrossOrigin,
  isWindows,
  logout,
  normalizeHostConfig,
  onFatalAuthError,
  onPageRedirectRequested,
  onPageRedirectStarted,
  registerAuthModule,
  registerHostConfig,
  serializeHostConfig,
  setDefaultHostConfig,
  toValidLocationUrl,
  toValidWebsocketLocationUrl,
  unregisterHostConfig,
};

/**
 * The AuthAPI interface provides the public interface for the auth module.
 */
export interface AuthAPI {
  /**
   * Determines the authType associated with a HostConfig even if it's
   * not explicitly set.
   * @param hostConfig the HostConfig containing authentication details
   * @returns the determined authentication type
   */
  determineAuthType: typeof determineAuthType;

  /**
   * Calls and return handleAuthenticationError on the authModule a host config is associated with.
   */
  handleAuthenticationError: typeof handleAuthenticationError;

  /**
   * Determines if a host is cross origin or not
   * @param hostConfig the HostConfig containing authentication details
   * @private
   */
  isHostCrossOrigin: typeof isHostCrossOrigin;

  /**
   * Determines if the host we're connecting to is running on windows or not
   * @param hostConfig the HostConfig containing authentication details
   */
  isWindows: typeof isWindows;

  /**
   * Logs out the user and sets `global.loggingOut` to true.
   * **NOTE**: Does not abort pending requests.
   */
  logout: typeof logout;

  /**
   * Registers an auth module that can handle authentication. An auth module is used by specifying its name as authType in the HostConfig passed in to api calls.
   * @param name the name of the module
   * @param authModule the implementation of the AuthModule interface
   */
  registerAuthModule: typeof registerAuthModule;

  /**
   * Registers a host config with the given name.
   * @param name The name of the host config to be used to reference the host config later.
   * @param hostConfig The host config to register.
   */
  registerHostConfig: typeof registerHostConfig;

  /**
   * Returns the default host config that is used for all qmfe api calls that do not include a host config
   */
  getDefaultHostConfig: typeof getDefaultHostConfig;

  /**
   * Returns a record of headers and a record of query params that needs to be added to outgoing rest calls
   * @param props.hostConfig the HostConfig containing authentication details
   * @param props.method the http method, which may affect what authentication are needed.
   */
  getRestCallAuthParams: typeof getRestCallAuthParams;

  /**
   * Returns a record of query parameters that needs to be added to resources requests, e.g.
   * image tags, etc.
   * @param hostConfig the HostConfig containing authentication details
   */
  getWebResourceAuthParams: typeof getWebResourceAuthParams;

  /**
   * Returns a record of query parameters that needs to be added to websockets
   * @param hostConfig the HostConfig containing authentication details
   */
  getWebSocketAuthParams: typeof getWebSocketAuthParams;

  /**
   * Serializes the provided hostConfig (or the default one if none is passed).
   * @param hostConfig the HostConfig to serialize.
   * @private
   */
  serializeHostConfig: typeof serializeHostConfig;

  /**
   * Sets the default host config that will be used for all api calls that do not include a host config
   * @param hostConfig the default HostConfig to use
   */
  setDefaultHostConfig: typeof setDefaultHostConfig;

  /**
   * Returns a valid location url based on the supplied location string. If location is undefined the default is returned
   */
  toValidLocationUrl: typeof toValidLocationUrl;

  /**
   * Returns a valid websocket location url based on the supplied location string. If location is undefined the default is returned
   * @param hostConfig the HostConfig containing authentication details
   */
  toValidWebsocketLocationUrl: typeof toValidWebsocketLocationUrl;

  /**
   * Unregisters a host config with the given name.
   * @param name The name of the host config to unregister.
   */
  unregisterHostConfig: typeof unregisterHostConfig;

  /**
   * Replaces the supplied host config with a unified host config where properties set to default valeus are removed, host strings meaning the same thing have been normalized etc.
   * Calling this method multiple times with host configs that actually mean the same thing will return identical instances.
   * An noteworthy edge case is that two host configs that only differ by a function property will be treated as identical even if the two functions differ.
   */
  normalizeHostConfig: typeof normalizeHostConfig;

  /**
   * Registers a callback to be invoked when a fatal authentication error occurs.
   * @param callback The callback function to register
   * @returns A function to unregister the callback
   */
  onFatalAuthError: typeof onFatalAuthError;

  /**
   * Registers a listener for page redirect requested by the auth module that is handling authentication for the provided host configuration.
   * This is typically used when embedded to let the end user explicitly approve a redirect by for instance clicking an "authorize" button. The user can then decide to leave that UI unauthorized
   * and stay on the page.
   * The listener is provided a `proceed` function that if called continues the redirect process. Before actually redirecting the page, the onPageRedirectStarted listeners are called.
   * Note that if more than one listener is registered, it still takes just one proceed call to continue the redirect process so it can not be used to block the redirect.
   */
  onPageRedirectRequested: typeof onPageRedirectRequested;

  /**
   * Registers a listener that will be called when a page redirect is started by the auth module that is handling authentication for the provided host configuration.
   */
  onPageRedirectStarted: typeof onPageRedirectStarted;
}

/**
 * Provides functionalities for authentication with Qlik backends.
 */
const auth: AuthAPI = {
  determineAuthType,
  getDefaultHostConfig,
  getRestCallAuthParams,
  getWebResourceAuthParams,
  getWebSocketAuthParams,
  handleAuthenticationError,
  isHostCrossOrigin,
  isWindows,
  logout,
  registerAuthModule,
  registerHostConfig,
  serializeHostConfig,
  setDefaultHostConfig,
  toValidLocationUrl,
  toValidWebsocketLocationUrl,
  unregisterHostConfig,
  normalizeHostConfig,
  onFatalAuthError,
  onPageRedirectRequested,
  onPageRedirectStarted,
};

export default auth;
