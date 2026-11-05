import { getPlatform } from "#internal/platform/platform-functions";
import { AuthorizationError, InvalidHostConfigError, type AuthError } from "./auth-errors";
import type {
  AuthModule,
  AuthType,
  AuthenticationErrorAction,
  GetRestCallAuthParamsProps,
  GetWebResourceAuthParamsProps,
  GetWebSocketAuthParamsProps,
  HandleAuthenticationErrorProps,
  HostConfig,
  RestCallAuthParams,
  WebResourceAuthParams,
  WebSocketAuthParams,
} from "./auth-types";
import {
  determineAuthType as determineAuthTypeInternal,
  getAuthModule,
  registerAuthModule as registerAuthModuleInternal,
} from "./internal/auth-module-registry";
import {
  emitFatalAuthError,
  type AuthErrorCallback,
  onFatalAuthError as onFatalAuthErrorInternal,
} from "./internal/fatal-auth-error-listeners";
import {
  getDefaultHostConfig as getDefaultHostConfigInternal,
  getRegisteredHostConfig as getRegisteredHostConfigInternal,
  normalizeHostConfig as normalizeHostConfigInternal,
  registerHostConfig as registerHostConfigInternal,
  serializeHostConfig as serializeHostConfigInternal,
  setDefaultHostConfig as setDefaultHostConfigInternal,
  unregisterHostConfig as unregisterHostConfigInternal,
} from "./internal/host-config-functions";

import {
  onPageRedirectRequested as onPageRedirectRequestedInternal,
  onPageRedirectStarted as onPageRedirectStartedInternal,
  type PageRedirectRequestedListener,
  type PageRedirectStartedListener,
} from "./internal/page-redirect-request-listeners";

/**
 * Set initial loggingOut value to false to make sure it has a value before any auth module is loaded
 */
globalThis.loggingOut = false;

/* -------------------------------------------------------------------------- */
/*                            auth module functions                           */
/* -------------------------------------------------------------------------- */

/**
 * Determines the authType associated with a HostConfig even if it's
 * not explicitly set.
 * @param hostConfig the HostConfig containing authentication details
 * @returns promise that resolvs with the determined authentication type
 */
export function determineAuthType(hostConfig: HostConfig): Promise<AuthType> {
  return determineAuthTypeInternal(hostConfig);
}

/**
 * Determines if a host is cross origin or not
 * @param hostConfig the HostConfig containing authentication details
 * @private
 */
export function isHostCrossOrigin(hostConfig?: HostConfig): boolean {
  if (!globalThis.location?.origin) {
    // not in a browser
    return true;
  }
  const hostConfigToUse = resolveHostConfig(hostConfig);
  // check if hostConfig is empty = not provided
  if (Object.keys(hostConfigToUse).length === 0) {
    // defaults to same domain
    return false;
  }
  try {
    const locationUrl = new URL(toValidLocationUrl(hostConfigToUse));
    return locationUrl.origin !== globalThis.location.origin;
  } catch {
    // no action needed, it is wrong but error will be handled later
  }
  return false;
}

/**
 * Determines if the host we're connecting to is running on windows or not
 * @param hostConfig the HostConfig containing authentication details
 */
export async function isWindows(hostConfig: HostConfig | undefined): Promise<boolean> {
  const hostConfigToUse = resolveHostConfig(hostConfig);

  //@ts-expect-error ts(2339)
  if (typeof hostConfigToUse.forceIsWindows === "boolean") {
    //@ts-expect-error ts(2339)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return hostConfigToUse.forceIsWindows;
  }

  if (
    hostConfigToUse.host?.endsWith(".qlik-stage.com") ||
    hostConfigToUse.host?.endsWith(".qlikcloud.com") ||
    hostConfigToUse.host?.endsWith(".qlikcloudgov.com")
  ) {
    return false;
  }

  if (hostConfigToUse.authType === "cookie") {
    return false;
  }
  if (hostConfigToUse.authType === "windowscookie") {
    return true;
  }
  return (await getPlatform({ hostConfig })).isWindows;
}

/**
 * Returns a valid location url based on the supplied location string. If location is undefined the default is returned
 * @param hostConfig the HostConfig containing authentication details
 */
export function toValidLocationUrl(hostConfig?: HostConfig): string {
  const url = resolveHostConfig(hostConfig)?.host?.trim();
  let locationUrl: string;
  if (!url) {
    locationUrl = "";
  } else if (url.toLowerCase().startsWith("https://") || url.toLowerCase().startsWith("http://")) {
    locationUrl = url;
  } else {
    locationUrl = `https://${url}`;
  }
  // remove trailing slashes
  while (locationUrl[locationUrl.length - 1] === "/") {
    locationUrl = locationUrl.substring(0, locationUrl.length - 1);
  }
  return locationUrl;
}

/**
 * Returns a valid websocket location url based on the supplied location string. If location is undefined the default is returned
 * @param hostConfig the HostConfig containing authentication details
 */
export function toValidWebsocketLocationUrl(hostConfig?: HostConfig): string {
  const url = resolveHostConfig(hostConfig)?.host;
  let locationUrl: string;
  if (!url) {
    locationUrl = globalThis.location.origin;
  } else if (url.toLowerCase().startsWith("https://") || url.toLowerCase().startsWith("http://")) {
    locationUrl = url;
  } else {
    locationUrl = `https://${url}`;
  }
  // remove trailing slashes
  while (locationUrl[locationUrl.length - 1] === "/") {
    locationUrl = locationUrl.substring(0, locationUrl.length - 1);
  }
  // https -> wss, http -> ws
  return locationUrl.replace(leadingHttp, "ws");
}

/**
 * Returns a record of query parameters that needs to be added to websockets
 * @param hostConfig the HostConfig containing authentication details
 */
export async function getWebSocketAuthParams(
  props: Optional<GetWebSocketAuthParamsProps, "hostConfig">,
): Promise<WebSocketAuthParams> {
  const hostConfigToUse = resolveHostConfig(props.hostConfig);
  try {
    const authModule = await getAuthModule(hostConfigToUse);
    return await authModule.getWebSocketAuthParams({
      ...props,
      hostConfig: hostConfigToUse,
    });
  } catch (err) {
    emitFatalAuthError(hostConfigToUse, normalizeAuthModuleError(err));
    throw err;
  }
}

/**
 * Returns a record of query parameters that needs to be added to resources requests, e.g.
 * image tags, etc.
 * @param hostConfig the HostConfig containing authentication details
 */
export async function getWebResourceAuthParams(
  props: Optional<GetWebResourceAuthParamsProps, "hostConfig">,
): Promise<WebResourceAuthParams> {
  const hostConfigToUse = resolveHostConfig(props.hostConfig);
  try {
    const authModule = await getAuthModule(hostConfigToUse);
    return (
      (await authModule.getWebResourceAuthParams?.({
        ...props,
        hostConfig: hostConfigToUse,
      })) || { queryParams: {} }
    );
  } catch (err) {
    emitFatalAuthError(hostConfigToUse, normalizeAuthModuleError(err));
    throw err;
  }
}

/**
 * Calls and return handleAuthenticationError on the authModule a host config is associated with.
 */
export async function handleAuthenticationError(
  props: Optional<HandleAuthenticationErrorProps, "hostConfig">,
): Promise<AuthenticationErrorAction> {
  const hostConfigToUse = resolveHostConfig(props.hostConfig);
  const authModule = await getAuthModule(hostConfigToUse);
  const result = await authModule.handleAuthenticationError({
    ...props,
    hostConfig: hostConfigToUse,
  });
  const willRetry = props.canRetry && result.retry;
  const willHangUntilANewPageIsLoaded = result.preventDefault;
  if (!willRetry && !willHangUntilANewPageIsLoaded) {
    const { status, errorBody } = props;

    emitFatalAuthError(hostConfigToUse, normalizeInbandAuthError({ status, errorBody }));
  }
  return result;
}

/**
 * Returns a record of headers and a record of query params that needs to be added to outgoing rest calls
 * @param props.hostConfig the HostConfig containing authentication details
 * @param props.method the http method, which may affect what authentication are needed.
 */
export async function getRestCallAuthParams(
  props: Optional<GetRestCallAuthParamsProps, "hostConfig">,
): Promise<RestCallAuthParams> {
  const hostConfigToUse = resolveHostConfig(props.hostConfig);
  try {
    const authModule = await getAuthModule(hostConfigToUse);
    return await authModule.getRestCallAuthParams({
      ...props,
      hostConfig: hostConfigToUse,
    });
  } catch (err) {
    emitFatalAuthError(hostConfigToUse, normalizeAuthModuleError(err));
    throw err;
  }
}

/**
 * Returns a record of headers and a record of query params that needs to be added to outgoing rest calls
 * @param props.hostConfig the HostConfig containing authentication details
 * @param props.method the http method, which may affect what authentication are needed.
 */
export async function getAccessToken(
  props: Optional<GetRestCallAuthParamsProps, "hostConfig" | "method">,
): Promise<string> {
  const res = await getRestCallAuthParams({ method: "GET", ...props });
  const authorizationHeader = res.headers?.Authorization;
  if (authorizationHeader.indexOf("Bearer ") === 0) {
    return authorizationHeader.substring(7);
  }
  throw new Error("Unknown format of authorization header returned by remote auth module");
}

/**
 * Registers an auth module that can handle authentication. An auth module is used by specifying its name as authType in the HostConfig passed in to api calls.
 * @param name the name of the module
 * @param authModule the implementation of the AuthModule interface
 */
export function registerAuthModule<A extends AuthType>(name: A, authModule: AuthModule<A>) {
  registerAuthModuleInternal(name, authModule);
}

/**
 * Sets the default host config that will be used for all api calls that do not include a HostConfig
 * @param hostConfig the default HostConfig to use
 */
export function setDefaultHostConfig(hostConfig: HostConfig | undefined): void {
  setDefaultHostConfigInternal(hostConfig);
}

/**
 * Registers a host config with the given name.
 * @param name The name of the host config to be used to reference the host config later.
 * @param hostConfig The host config to register.
 */
export function registerHostConfig(name: string, hostConfig: HostConfig): void {
  registerHostConfigInternal(name, hostConfig);
}

/**
 * Unregisters a host config with the given name.
 * @param name The name of the host config to unregister.
 */
export function unregisterHostConfig(name: string): void {
  unregisterHostConfigInternal(name);
}

/**
 * Serializes the provided hostConfig, if present, otherwise the default one.
 */
export function serializeHostConfig(hostConfig?: HostConfig): string {
  return serializeHostConfigInternal(hostConfig);
}

/**
 * Throws errors if a resolved host config is missing properties needed for cross domain requests
 */
export function checkForCrossDomainRequest(hostConfig: HostConfig): void {
  if (isHostCrossOrigin(hostConfig)) {
    // throw error if no host config is provided
    if (Object.keys(hostConfig).length === 0) {
      throw new InvalidHostConfigError("a host config must be provided when making a cross domain request");
    }
    // If host config is missing a host property
    if (!hostConfig.host) {
      throw new InvalidHostConfigError(
        "A 'host' property must be set in host config when making a cross domain request",
      );
    }
  }
}

/**
 * Returns a normalized host config that will always be the same instance when the serialized host config is the same.
 */
export function normalizeHostConfig(hostConfig: HostConfig | undefined): HostConfig {
  return normalizeHostConfigInternal(hostConfig);
}

/**
 * Logs out the user and sets `global.loggingOut` to true.
 * **NOTE**: Does not abort pending requests.
 */
export const logout = (): void => {
  // TODO: Abort pending requests
  globalThis.loggingOut = true;
  globalThis.location.href = "/logout";
};

/* -------------------------------------------------------------------------- */
/*                                   private                                  */
/* -------------------------------------------------------------------------- */

const leadingHttp = /^http/;

/**
 * A utility type that makes the properties of T with keys K optional, while keeping the rest of the properties unchanged.
 * This is useful for creating types where only a subset of properties are optional.
 * @template T - The original type
 * @template K - The keys of T that should be made optional
 */
type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

type FatalAuthError = {
  message: string;
};

/**
 * Normalizes the error object returned from the auth module to a FatalAuthError
 * @param errorBody The error body to normalize
 * @param status The status code of the error
 * @returns Either the error message or a default message
 * @private
 */
function normalizeInbandAuthError({ errorBody, status }: { status: number; errorBody: unknown }): FatalAuthError {
  const authError = errorBody as { errors?: Partial<AuthError>[] } | undefined;
  if (typeof authError?.errors === "object") {
    const err = new AuthorizationError(authError?.errors as AuthError[]);
    return { message: err.message };
  }
  return { message: `HTTP ${status}` };
}

/**
 * Normalizes the error object returned from the auth module to a FatalAuthError
 * @param err The error to normalize
 * @returns Either the error message or a default message
 * @private
 */
function normalizeAuthModuleError(err: unknown): FatalAuthError {
  return { message: (err as { message?: string }).message || "Unknown error" };
}

/**
 * Replaces the supplied host config according the following rules:
 * * If the host config is a reference to a registered host config, the registered host config will be used.
 * * If the host config is undefined or empty, the default host config will be returned.
 * * If the host config is not a reference and not empty or undefined, it will be returned as is.
 * * If the host config is empty or undefined an empty object (which represents the default cookie mode) is returned.
 * @param hostConfig - The host config to resolve
 */
export function resolveHostConfig(hostConfig?: HostConfig): HostConfig {
  // checking if there is a reference in the host config and return it from the registered host configs
  if ((hostConfig as HostConfig<"reference">)?.reference) {
    const refConfig = getRegisteredHostConfigInternal((hostConfig as HostConfig<"reference">).reference);
    if (!refConfig) {
      throw new InvalidHostConfigError(
        `Host config with name "${(hostConfig as HostConfig<"reference">).reference}" not found.`,
      );
    }
    return refConfig;
  }
  if (hostConfig && Object.keys(hostConfig).length > 0) {
    return hostConfig;
  }
  return getDefaultHostConfigInternal();
}

/**
 * Returns the default host config that is used for all qmfe api calls that do not include a host config
 */
export function getDefaultHostConfig(): HostConfig {
  return getDefaultHostConfigInternal();
}

/**
 * Registers a callback to be invoked when a fatal authentication error occurs for the provided hostConfig.
 * @param callback The callback function to register
 * @returns A function to unregister the callback
 */
export function onFatalAuthError(hostConfig: HostConfig | undefined, callback: AuthErrorCallback) {
  return onFatalAuthErrorInternal(hostConfig, callback);
}

/**
 * Registers a listener for page redirect requested by the auth module that is handling authentication for the provided host configuration.
 * This is typically used when embedded to let the end user explicitly approve a redirect by for instance clicking an "authorize" button. The user can then decide to leave that UI unauthorized
 * and stay on the page.
 * The listener is provided a `proceed` function that if called continues the redirect process. Before actually redirecting the page, the onPageRedirectStarted listeners are called.
 * Note that if more than one listener is registered, it still takes just one proceed call to continue the redirect process so it can not be used to block the redirect.
 */
export function onPageRedirectRequested(hostConfig: HostConfig | undefined, listener: PageRedirectRequestedListener) {
  return onPageRedirectRequestedInternal(hostConfig, listener);
}

/**
 * Registers a listener that will be called when a page redirect is started by the auth module that is handling authentication for the provided host configuration.
 */
export function onPageRedirectStarted(hostConfig: HostConfig | undefined, listener: PageRedirectStartedListener) {
  return onPageRedirectStartedInternal(hostConfig, listener);
}
