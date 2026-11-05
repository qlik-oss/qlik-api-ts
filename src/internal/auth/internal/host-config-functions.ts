import { InvalidHostConfigError } from "#internal/auth/auth-errors";
import { authTypesThatCanBeOmitted, type AuthTypeThatCanBeOmitted, type HostConfig } from "#internal/auth/auth-types";
import { cleanFalsyValues, isBrowser, sortKeys } from "#internal/utils/utils";
import { resolveHostConfig, toValidLocationUrl } from "../auth-functions";

/* -------------------------------------------------------------------------- */
/*                           Standardize Host Config                          */
/* -------------------------------------------------------------------------- */

const emptyHostConfig: HostConfig = {};

const normalizedHostConfigs: Map<string, HostConfig> = new Map();

/**
 * Returns a new host config with all default and falsy values removed.
 * @param hostConfig - The host config to fill with defaults
 * @returns
 */
export function removeDefaults(hostConfig: HostConfig): HostConfig {
  const cleanedHostConfig = (cleanFalsyValues(hostConfig) as Record<string, unknown>) || {};

  // clean host url - removes empty spaces and trailing slashes
  if (cleanedHostConfig.host) {
    cleanedHostConfig.host = toValidLocationUrl(cleanedHostConfig);
  }

  if (isBrowser()) {
    // if the host url equal to browser's location origin it is the default and can be removed
    // the hasOwn check is used to avoid issues with prototype pollution
    if (toValidLocationUrl(cleanedHostConfig) === window.location.origin) {
      delete cleanedHostConfig.host;
    }
  }

  // remove auth type if it is one of those that can be ommitted, since one that has it set should be equivalent to not
  // having it set (e.g. "cookie" or "windowscookie")
  // the hasOwn check is used to avoid issues with prototype pollution
  if (
    cleanedHostConfig.authType &&
    authTypesThatCanBeOmitted.includes(cleanedHostConfig.authType as AuthTypeThatCanBeOmitted)
  ) {
    delete cleanedHostConfig.authType;
  }

  return cleanedHostConfig;
}

/* -------------------------------------------------------------------------- */
/*                            Serialize Host Config                           */
/* -------------------------------------------------------------------------- */

// Map to keep track of function references and assign unique ids (module-level)
// let globalFnMap = new WeakMap<Function, string>();
// let globalFnCount = 1;

export function resetSerializedFunctions(): void {
  // Clear the global function map by creating a new WeakMap
  // globalFnMap = new WeakMap<Function, string>();
  // Reset the count to 1
  // globalFnCount = 1;
}

function globalReplacer(key: string, value: unknown): unknown {
  if (typeof value === "function") {
    // we should include functions later, but for now let's ignore them
    // qmfe-embed adds anonymous functions to the host config, so we can't serialize them now
    return undefined;

    // if (!globalFnMap.has(value)) {
    //   globalFnMap.set(value, `f${globalFnCount++}`);
    // }
    // return globalFnMap.get(value);
  }
  return value;
}

/**
 * Serializes the provided hostConfig, if present, otherwise the default one.
 */
export function serializeHostConfig(hostConfig?: HostConfig): string {
  const hostConfigToUse = removeDefaults(resolveHostConfig(hostConfig));
  const sorted = sortKeys(hostConfigToUse);
  return JSON.stringify(sorted, globalReplacer);
}

/* -------------------------------------------------------------------------- */
/*                            Host Config Registry                            */
/* -------------------------------------------------------------------------- */

// Use a Map to store registered host configs to prevent prototype pollution
const registeredHostConfigs = new Map<string, HostConfig>();

/**
 * Registers a host config with the given name.
 * @param name The name of the host config to be used to reference the host config later.
 * @param hostConfig The host config to register.
 */
export function registerHostConfig(name: string, hostConfig: HostConfig): void {
  // check if host config is refeerencing another and throw error if it is not registered
  const reference = (hostConfig as HostConfig<"reference">)?.reference || null;
  if (reference && !registeredHostConfigs.has(reference)) {
    throw new InvalidHostConfigError(
      `Host config with reference "${reference}" is not registered. Please register it before using it.`,
    );
  }

  // Check if the host config is already registered
  if (registeredHostConfigs.has(name)) {
    // eslint-disable-next-line no-console
    console.warn(`registerHostConfig: Host config with name "${name}" is already registered. Overwriting.`);
  }
  registeredHostConfigs.set(name, hostConfig);
}

/**
 * Unregisters a host config with the given name.
 * @param name The name of the host config to unregister.
 */
export function unregisterHostConfig(name: string): void {
  if (registeredHostConfigs.has(name)) {
    registeredHostConfigs.delete(name);
  } else {
    // eslint-disable-next-line no-console
    console.warn(`unregisterHostConfig: Host config with name "${name}" not found.`);
  }
}

/**
 * Gets the host config with the given name.
 * @private
 * @param name The name of the host config to get.
 * @returns The host config, or undefined if not found.
 */
export function getRegisteredHostConfig(name: string): HostConfig | undefined {
  return registeredHostConfigs.get(name);
}

/**
 * Resets the host config registry by removing all registered host configs.
 * @private
 */
export function resetHostConfigRegistry(): void {
  registeredHostConfigs.clear();
}

/* -------------------------------------------------------------------------- */
/*                             Default Host Config                            */
/* -------------------------------------------------------------------------- */

/**
 * Sets the default host config that will be used for all api calls that do not include a HostConfig
 * @private
 * @param hostConfig the default HostConfig to use
 */
export function setDefaultHostConfig(hostConfig: HostConfig | undefined) {
  registerHostConfig("default", hostConfig || {});
}

/**
 * Gets the default host config that will be used for all qmfe api calls that do not include a HostConfig.
 * @private
 * @returns The default host config that will be used for all qmfe api calls that do not include a HostConfig
 */
export function getDefaultHostConfig(): HostConfig {
  return getRegisteredHostConfig("default") || {};
}

/**
 * Clears the default host config, resetting it to an empty object.
 * @private
 */
export function clearDefaultHostConfig(): void {
  if (registeredHostConfigs.has("default")) {
    unregisterHostConfig("default");
  }
}

export function normalizeHostConfig(hostConfig: HostConfig | undefined): HostConfig {
  const suppliedHostConfigOrEmpty = hostConfig || emptyHostConfig;
  const serializedHostConfigKey = serializeHostConfig(suppliedHostConfigOrEmpty);
  let normalizedHostConfig = normalizedHostConfigs.get(serializedHostConfigKey);
  if (!normalizedHostConfig) {
    normalizedHostConfig = removeDefaults(resolveHostConfig(suppliedHostConfigOrEmpty));
    normalizedHostConfigs.set(serializedHostConfigKey, normalizedHostConfig);
  }
  return normalizedHostConfig;
}
