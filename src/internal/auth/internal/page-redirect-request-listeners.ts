import type { HostConfig } from "../auth-types";
import { serializeHostConfig } from "./host-config-functions";

export type PageRedirectRequest = {
  proceed: () => void;
};
export type UnregisterFunction = () => void;

export type PageRedirectRequestedListener = (redirectRequest: PageRedirectRequest) => unknown;
export type PageRedirectStartedListener = () => unknown;

type RegistryForOneHostConfig = {
  redirectRequestedListeners: Set<PageRedirectRequestedListener>;
  redirectStartedListeners: Set<PageRedirectStartedListener>;
};

/**
 * A store containing all listener registries for different host configurations.
 */
const listenerRegistries = new Map<string, RegistryForOneHostConfig>();

/** For testing purposes */
export function removeAllPageRedirectListeners(): void {
  listenerRegistries.clear();
}
/**
 * Retrieves the listener registry for a given host configuration, creating one if it doesn't exist.
 */
function getRegistryForHostConfig(hostConfig: HostConfig | undefined): RegistryForOneHostConfig {
  const key = serializeHostConfig(hostConfig);
  let registry = listenerRegistries.get(key);
  if (!registry) {
    registry = {
      redirectRequestedListeners: new Set(),
      redirectStartedListeners: new Set(),
    };
    listenerRegistries.set(key, registry);
  }
  return registry;
}

/**
 * Registers a listener for page redirects requested by auth modules.
 * @param hostConfig
 * @param listener
 * @returns
 */
export function onPageRedirectRequested(
  hostConfig: HostConfig | undefined,
  listener: PageRedirectRequestedListener,
): UnregisterFunction {
  const registry = getRegistryForHostConfig(hostConfig);
  registry.redirectRequestedListeners.add(listener);
  return () => {
    registry.redirectRequestedListeners.delete(listener);
  };
}

export function onPageRedirectStarted(
  hostConfig: HostConfig | undefined,
  listener: PageRedirectStartedListener,
): UnregisterFunction {
  const registry = getRegistryForHostConfig(hostConfig);
  registry.redirectStartedListeners.add(listener);
  return () => {
    registry.redirectStartedListeners.delete(listener);
  };
}

export function requestRedirect(hostConfig: HostConfig): Promise<void> {
  const registry = getRegistryForHostConfig(hostConfig);

  const hasRedirectListener = registry.redirectRequestedListeners.size > 0 || hostConfig.authRedirectUserConfirmation;
  // If either autoRedirect is true or there are no listeners, proceed immediately
  if (hostConfig.autoRedirect || !hasRedirectListener) {
    return Promise.resolve();
  }

  // If thre is a classic authRedirectUserConfirmation function, call it and use its result as promise to wait for
  if (typeof hostConfig.authRedirectUserConfirmation === "function") {
    return hostConfig.authRedirectUserConfirmation().catch(() => {});
  }

  // Otherwise use the registered listeners to show qlik-embed auth overlays to the user
  return new Promise((resolve) => {
    const proceed = () => {
      for (const startedListener of registry.redirectStartedListeners) {
        try {
          startedListener();
        } catch (error) {
          // eslint-disable-next-line no-console
          console.warn(error);
        }
      }
      resolve();
    };

    // Loop over all registered redirect request listeners
    for (const requestListener of registry.redirectRequestedListeners) {
      try {
        requestListener({
          proceed,
        });
      } catch (error) {
        // eslint-disable-next-line no-console
        console.warn(error);
      }
    }
  });
}
