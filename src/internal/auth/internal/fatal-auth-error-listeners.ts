import type { HostConfig } from "../auth-types";
import { serializeHostConfig } from "./host-config-functions";

export type FatalAuthError = { message: string };

export type AuthErrorCallback = (error: FatalAuthError) => void;
type UnregisterFunction = () => void;

const listenerRegistries = new Map<string, RegistryForOneHostConfig>();

let lastErrorMessage = "";
let lastHostConfig: HostConfig | undefined;

type RegistryForOneHostConfig = {
  listeners: Set<AuthErrorCallback>;
};

/**
 * Retrieves the listener registry for a given host configuration, creating one if it doesn't exist.
 */
function getAuthErrorListenerRegistryForHostConfig(hostConfig: HostConfig | undefined): RegistryForOneHostConfig {
  const key = serializeHostConfig(hostConfig);
  let registry = listenerRegistries.get(key);
  if (!registry) {
    registry = {
      listeners: new Set(),
    };
    listenerRegistries.set(key, registry);
  }
  return registry;
}

/** For testing purposes */
export function removeAllFatalAuthErrorListeners(): void {
  listenerRegistries.clear();
}

/**
 * Emits a fatal authentication error to all registered listeners plus to the onAuthFailed property in the hostConfig.
 * If there are no listeners or onAuthFailed callback, the error message is logged to the console.
 */
export function emitFatalAuthError(hostConfig: HostConfig, normalizedError: FatalAuthError) {
  // Block repeated identical errors
  if (hostConfig === lastHostConfig && normalizedError.message === lastErrorMessage) {
    return;
  }
  lastHostConfig = hostConfig;
  lastErrorMessage = normalizedError.message;

  let someOneIsListening = false;
  const registry = getAuthErrorListenerRegistryForHostConfig(hostConfig);
  for (const listener of registry.listeners) {
    try {
      someOneIsListening = true;
      listener(normalizedError);
    } catch (listenerError) {
      // eslint-disable-next-line no-console
      console.warn("Error in auth error listener", listenerError);
    }
  }

  if (hostConfig.onAuthFailed) {
    try {
      someOneIsListening = true;
      hostConfig.onAuthFailed(normalizedError);
    } catch (callbackError) {
      // eslint-disable-next-line no-console
      console.warn("Error in onAuthFailed callback", callbackError);
    }
  }

  if (!someOneIsListening) {
    // eslint-disable-next-line no-console
    console.error(normalizedError.message);
  }
}
/**
 * Registers a listener for fatal auth errors. This means errors in the actual auth mechanism, i.e. misconfigurations etc.
 */
export function onFatalAuthError(hostConfig: HostConfig | undefined, callback: AuthErrorCallback): UnregisterFunction {
  const registry = getAuthErrorListenerRegistryForHostConfig(hostConfig);
  registry.listeners.add(callback);
  return () => {
    registry.listeners.delete(callback);
  };
}
