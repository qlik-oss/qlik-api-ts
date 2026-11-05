import { InvalidAuthTypeError, InvalidHostConfigError } from "#internal/auth/auth-errors";
import { hostConfigCommonProperties, type AuthModule, type AuthType, type HostConfig } from "#internal/auth/auth-types";
import { isWindows, resolveHostConfig } from "../auth-functions";

// default auth modules
import { isBrowser } from "#internal/utils/utils";
import anonymousAuthModule from "./default-auth-modules/anonymous";
import apiKeyAuthModule from "./default-auth-modules/apikey";
import cookieAuthModule from "./default-auth-modules/cookie";
import noauthAuthModule from "./default-auth-modules/noauth";
import noneAuthModule from "./default-auth-modules/none";
import oAuthAuthModule from "./default-auth-modules/oauth";
import referenceAuthModule from "./default-auth-modules/reference";
import windowsCookieAuthModule from "./default-auth-modules/windows-cookie";
import windowsCookieNodeAuthModule from "./default-auth-modules/windows-cookie-node";
import pfxAuthModule from "./default-auth-modules/pfx";

/**
 * Auth module registry
 */
const authModules: Record<string, unknown> = {};

/**
 * A promise that gets recreated when an auth module is currently being loaded
 */
let ongoingAuthModuleLoading = Promise.resolve();

/* -------------------------------------------------------------------------- */
/*                          Init auth module registry                         */
/* -------------------------------------------------------------------------- */

let authModulesRegistered = false;

(function registerDefaultAuthModules() {
  if (!authModulesRegistered) {
    // Register the default authentication modules
    registerAuthModule("apikey", apiKeyAuthModule); // Node tested in integration tests and test pool. Not supported on browser.
    registerAuthModule("cookie", cookieAuthModule); // Browser tested in the pool. Not supported on Node.
    registerAuthModule("none", noneAuthModule); // ONLY MANUALLY TESTED
    registerAuthModule("noauth", noauthAuthModule); // ONLY MANUALLY TESTED
    registerAuthModule("oauth2", oAuthAuthModule); // Browser tested in test pool. NODE ONLY MANUALLY TESTED.
    registerAuthModule("anonymous", anonymousAuthModule); // Browser tested in test pool. Not supported on Node.
    registerAuthModule("pfx", pfxAuthModule); // Node tested in integration tests. Not supported on browser.
    if (isBrowser()) {
      registerAuthModule("windowscookie", windowsCookieAuthModule); // Browser tested in the pool.
    } else {
      registerAuthModule("windowscookie", windowsCookieNodeAuthModule); // Node tested in integration tests.
    }
    registerAuthModule("reference", referenceAuthModule); // Tested in integration tests
    authModulesRegistered = true;
  }
})();

/* -------------------------------------------------------------------------- */
/*                            Auth Module Registry                            */
/* -------------------------------------------------------------------------- */

/**
 * Registers an auth module that can handle authentication. An auth module is used by specifying its name as authType in the HostConfig passed in to api calls.
 * @param name the name of the module
 * @param authModule the implementation of the AuthModule interface
 */
export function registerAuthModule<A extends AuthType>(name: A, authModule: AuthModule<A>) {
  // register with lowercase
  authModules[name.toLowerCase()] = authModule;
}

/**
 * Removes registered auth module.
 * @param name the name of the module
 * @param authModule the implementation of the AuthModule interface
 */
export function unRegisterAuthModule(name: AuthType) {
  // If authType is misspelled, like Oauth or OAUTH we'll lowercase it here and return the correct authType.
  delete authModules[name.toLowerCase()];
}

/**
 * Get the names of all registered AuthModules.
 * @returns Array of all registered AuthModules
 */
export function getRegisteredAuthModules(): string[] {
  return Object.keys(authModules);
}

/**
 *  Gets the auth module with the given name. The name is case insensitive.
 * @param authType The name of the auth module to get. The name is case insensitive.
 * @returns
 */
function getRegisteredAuthModule<A extends AuthType>(authType: A): AuthModule<A> | undefined {
  // If authType is misspelled, like Oauth or OAUTH we'll lowercase it here and return the correct authType.
  return authModules[authType.toLowerCase()] as AuthModule<A> | undefined;
}

/**
 * Gets the auth module for a host config. If only clientId is set, then authType is assumed and set to "oauth2".
 * If host config is undefined or empty, then authType is assumed and set to "cookie" or "windowscookie" depending
 *  on which platform the host is running on.
 *
 * @private
 * @param hostConfig
 */
export async function getAuthModule(hostConfig?: HostConfig): Promise<AuthModule> {
  const hostConfigToUse = resolveHostConfig(hostConfig);
  const authType = await determineAuthType(hostConfigToUse);

  if (ongoingAuthModuleLoading) {
    await ongoingAuthModuleLoading;
  }
  let authModule = getRegisteredAuthModule(authType);
  if (!authModule) {
    /**
     * This is basically poor mans synchronous block so that one globally defined asynchronous auth module factory function
     * is not called more than once if several calls to getAuthModule come in in sequence.
     */
    ongoingAuthModuleLoading = (async () => {
      authModule = await resolveGloballyDefinedAuthModule(authType);
      if (authModule) {
        // If a globally defined auth module was found register it so that we don't need to do this again and again.
        registerAuthModule(authType, authModule);
      }
    })();
    await ongoingAuthModuleLoading;
  }
  if (!authModule) {
    throw new InvalidAuthTypeError(authType);
  }

  if (authModule.validateHostConfig) {
    authModule.validateHostConfig({ authType, ...hostConfigToUse });
  } else {
    internalValidateHostConfig(
      { authType, ...hostConfigToUse },
      { requiredProps: authModule.requiredProps || [], optionalProps: authModule.optionalProps || [] },
    );
  }
  return authModule;
}

export async function resolveGloballyDefinedAuthModule<A extends AuthType = AuthType>(
  authType: A,
): Promise<AuthModule<A> | undefined> {
  const globalWindow = globalThis as unknown as Record<
    string,
    | Partial<AuthModule<A>>
    | (() => Partial<AuthModule<A>> | undefined)
    | (() => Promise<Partial<AuthModule<A>> | undefined>)
    | undefined
  >;
  const globalVariable = globalWindow[authType as string];
  if (globalVariable) {
    let potentialAuthModule;
    if (typeof globalVariable === "function") {
      potentialAuthModule = await globalVariable();
    } else {
      potentialAuthModule = globalVariable;
    }
    if (
      potentialAuthModule &&
      potentialAuthModule.getRestCallAuthParams &&
      potentialAuthModule.getWebSocketAuthParams &&
      potentialAuthModule.handleAuthenticationError
    ) {
      return potentialAuthModule as AuthModule<A>;
    }

    // eslint-disable-next-line no-console
    console.error("Not a valid auth module", potentialAuthModule);
    throw new InvalidAuthTypeError(authType);
  }
  return Promise.resolve(undefined);
}

/* -------------------------------------------------------------------------- */
/*                               Private methods                              */
/* -------------------------------------------------------------------------- */

/**
 * @private
 * Helper function for validating a host config in runtime
 * @param hostConfig - The host config to validate
 * @param options - Options for validation
 * @param options.requiredProps - The required properties in the host config
 * @param options.optionalProps - The optional properties in the host config
 * @throws {InvalidHostConfigError} If the host config is invalid
 * @returns {boolean} Returns true if the host config is valid
 * */
function internalValidateHostConfig(
  hostConfig: Record<string, unknown>,
  { requiredProps, optionalProps }: { requiredProps: string[]; optionalProps: string[] },
) {
  const missingRequiredProps: string[] = [];
  for (const requiredProp of requiredProps) {
    if (!hostConfig[requiredProp]) {
      missingRequiredProps.push(requiredProp);
    }
  }
  if (missingRequiredProps.length > 0) {
    throw new InvalidHostConfigError(
      `missing required properties in host config; '${missingRequiredProps.join("', '")}'`,
    );
  }
  const validProps = [...hostConfigCommonProperties, ...requiredProps, ...optionalProps];
  const invalidKeys: string[] = [];
  Object.keys(hostConfig).forEach((key) => {
    if (!validProps.includes(key)) {
      invalidKeys.push(key);
    }
  });
  if (invalidKeys.length > 0) {
    // warn about these
    // eslint-disable-next-line no-console
    console.warn(`WARNING: unknown properties in host config; '${invalidKeys.join("', '")}'`);
  }
  return true;
}

/**
 * Determines the authType associated with a HostConfig even if it's
 * not explicitly set.
 */
export async function determineAuthType(hostConfig: HostConfig): Promise<AuthType> {
  if (hostConfig.authType) {
    return hostConfig.authType;
  }
  if ((hostConfig as HostConfig<"apikey">).apiKey) {
    return "apikey"; // default to apikey authModule if apiKey is set
  }
  if ((hostConfig as HostConfig<"anonymous">).accessCode) {
    return "anonymous"; // default to anonymous authModule if accessCode is set
  }
  if ((hostConfig as HostConfig<"oauth2">).clientId) {
    return "oauth2"; // default to oauth2 authModule if clientId is set
  }
  if ((hostConfig as HostConfig<"cookie">).webIntegrationId) {
    return "cookie"; // default to cookie if webIntegrationId is set
  }
  if ((hostConfig as HostConfig<"reference">).reference) {
    return "reference"; // default to reference authModule if reference is set
  }
  if ((hostConfig as HostConfig<"pfx">).pfx) {
    return "pfx"; // default to pfx authModule if pfx and passphrase is set
  }
  if (await isWindows(hostConfig)) {
    return "windowscookie"; // default to windowscookie authModule if platform detection detects windows
  }
  return "cookie"; // default to cookie if nothing is set
}
