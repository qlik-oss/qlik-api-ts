import type { AuthModule, AuthType, HostConfig, WebResourceAuthParams } from "#internal/auth/auth-types";
import { getAuthRuntimeModule } from "./public-runtime-modules";

export type * from "#internal/auth/auth-types";

/**
 * Registers an auth module that can handle authentication. An auth module is used by specifying its name as authType in the HostConfig passed in to api calls.
 * @param name the name of the module
 * @param authModule the implementation of the AuthModule interface
 */
export function registerAuthModule<A extends AuthType>(name: A, authModule: AuthModule<A>) {
  void getAuthRuntimeModule().then((impl) => impl.registerAuthModule(name, authModule));
}

/**
 * Logs out the user and sets `global.loggingOut` to true.
 *
 * **NOTE**: Does not abort pending requests.
 */
export function logout() {
  void getAuthRuntimeModule().then((impl) => impl.logout());
}

/**
 * Sets the default host config that will be used for all api calls that do not include a HostConfig
 * @param hostConfig the default HostConfig to use
 */
export function setDefaultHostConfig(hostConfig: HostConfig | undefined) {
  void getAuthRuntimeModule(hostConfig).then((impl) => impl.setDefaultHostConfig(hostConfig));
}

/**
 * Registers a host config with the given name.
 * @param name The name of the host config to be used to reference the host config later.
 * @param hostConfig The host config to register.
 */
export function registerHostConfig(name: string, hostConfig: HostConfig) {
  void getAuthRuntimeModule(hostConfig).then((impl) => impl.registerHostConfig(name, hostConfig));
}

/**
 * Unregisters a host config with the given name.
 * @param name The name of the host config to unregister.
 */
export function unregisterHostConfig(name: string) {
  void getAuthRuntimeModule().then((impl) => impl.unregisterHostConfig(name));
}

/**
 * Returns an access token using the supplied host config. Typically used on the backend to supply the access token to the frontend
 */
export async function getAccessToken({ hostConfig }: { hostConfig?: HostConfig }): Promise<string> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  return getAuthRuntimeModule(hostConfig).then((impl) => (impl as any).getAccessToken({ hostConfig }));
}

/**
 * Returns a record of query parameters that needs to be added to resources requests, e.g.
 * image tags, etc.
 */
export async function getWebResourceAuthParams({
  hostConfig,
}: {
  hostConfig?: HostConfig;
}): Promise<WebResourceAuthParams> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  return getAuthRuntimeModule(hostConfig).then((impl) => (impl as any).getWebResourceAuthParams({ hostConfig }));
}

/**
 * The AuthAPI interface provides the public interface for the auth module.
 */
export interface AuthAPI {
  /**
   * Registers an auth module that can handle authentication. An auth module is used by specifying its name as authType in the HostConfig passed in to api calls.
   * @param name the name of the module
   * @param authModule the implementation of the AuthModule interface
   */
  registerAuthModule: typeof registerAuthModule;

  /**
   * Sets the default host config that will be used for all api calls that do not include a host config
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

export default {
  registerAuthModule,
  setDefaultHostConfig,
  registerHostConfig,
  unregisterHostConfig,
  getAccessToken,
  getWebResourceAuthParams,
};
