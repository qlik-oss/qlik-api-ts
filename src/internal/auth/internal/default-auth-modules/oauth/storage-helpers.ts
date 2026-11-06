import { InvalidHostConfigError } from "#internal/auth/auth-errors";
import type { HostConfig } from "#internal/auth/auth-types";
import type { SecretStorage } from "#internal/global-types";
import { exposeInternalApiOnWindow } from "#internal/utils/expose-internal-test-apis";
import { isBrowser } from "#internal/utils/utils";
import type { OAuthData } from "./oauth-utils";

export const storagePrefix = "qlik-qmfe-api";

// Only identifiers belong in this namespace, never credentials. Keep its format stable across redirects and releases.
export function createStorageNamespace(hostConfig: HostConfig<"oauth2">): string {
  let topic = hostConfig.clientId + (hostConfig.scope ? `_${hostConfig.scope}` : "_user_default");

  if (hostConfig.subject) {
    topic += `_${hostConfig.subject}`;
  }
  if (hostConfig.userId) {
    topic += `_${hostConfig.userId}`;
  }
  return topic;
}

export function getTopicFromAnonHostConfig(hostConfig: HostConfig<"anonymous">): string {
  return `${hostConfig.accessCode}_${hostConfig.clientId}`;
}

/**
 * A map from oauth client id to promise of an access token
 */
const cachedTokens: Record<string, Promise<OAuthData | undefined>> = {};

/**
 * Used for testing.
 */
export function clearAllCachedTokens() {
  for (const key in cachedTokens) {
    delete cachedTokens[key];
  }
}
exposeInternalApiOnWindow("clearAllAccessTokens", () => {
  // eslint-disable-next-line no-console
  console.log("Clearing tokens", cachedTokens);
  Object.keys(cachedTokens).forEach((key) => {
    // eslint-disable-next-line no-console
    console.log("Clearing access tokens for", key);
    deleteFromLocalStorage(key, ["access-token", "refresh-token"]);
    deleteFromSessionStorage(key, ["access-token", "refresh-token"]);
  });
  clearAllCachedTokens();
});

// Save...
export function saveInLocalStorage(topic: string, name: string, value: string) {
  localStorage.setItem(`${storagePrefix}-${topic}-${name}`, value);
}
export function saveInSessionStorage(topic: string, name: string, value: string) {
  sessionStorage.setItem(`${storagePrefix}-${topic}-${name}`, value);
}
function saveInCustomSecretStorage(storage: SecretStorage, topic: string, name: string, value: string): Promise<void> {
  return storage.store(`${storagePrefix}-${topic}-${name}`, value);
}

// Load...
export function loadFromLocalStorage(topic: string, name: string): string | undefined {
  return localStorage.getItem(`${storagePrefix}-${topic}-${name}`) || undefined;
}
export function loadFromSessionStorage(topic: string, name: string): string | undefined {
  return sessionStorage.getItem(`${storagePrefix}-${topic}-${name}`) || undefined;
}
function loadFromCustomSecretStorage(storage: SecretStorage, topic: string, name: string): Promise<string | undefined> {
  return storage.get(`${storagePrefix}-${topic}-${name}`);
}

// Delete...
export function deleteFromLocalStorage(topic: string, names: string[]) {
  names.forEach((name) => localStorage.removeItem(`${storagePrefix}-${topic}-${name}`));
}
export function deleteFromSessionStorage(topic: string, names: string[]) {
  names.forEach((name) => sessionStorage.removeItem(`${storagePrefix}-${topic}-${name}`));
}
function deleteFromCustomSecretStorage(storage: SecretStorage, topic: string, names: string[]): Promise<void[]> {
  return Promise.all(names.map((name) => storage.delete(`${storagePrefix}-${topic}-${name}`)));
}

export function loadAndDeleteFromSessionStorage(topic: string, name: string): string | undefined {
  const id = `${storagePrefix}-${topic}-${name}`;
  const result = sessionStorage.getItem(id) || undefined;
  sessionStorage.removeItem(id);
  return result;
}

/**
 * Returns true if the provided storage object implements the SecretStorage interface, false otherwise.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isCustomSecretStorage(storage: any): storage is SecretStorage {
  return (
    typeof storage === "object" &&
    storage !== null &&
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    typeof storage.store === "function" &&
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    typeof storage.get === "function" &&
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    typeof storage.delete === "function"
  );
}

async function loadOauthTokensFromStorage(
  topic: string,
  accessTokenStorage: "local" | "session" | SecretStorage | undefined,
): Promise<OAuthData | undefined> {
  let accessToken: string | undefined;
  let refreshToken: string | undefined;
  if (accessTokenStorage === "local") {
    accessToken = loadFromLocalStorage(topic, "access-token");
    refreshToken = loadFromLocalStorage(topic, "refresh-token");
  } else if (accessTokenStorage === "session") {
    accessToken = loadFromSessionStorage(topic, "access-token");
    refreshToken = loadFromSessionStorage(topic, "refresh-token");
  } else if (isCustomSecretStorage(accessTokenStorage)) {
    accessToken = await loadFromCustomSecretStorage(accessTokenStorage, topic, "access-token");
    refreshToken = await loadFromCustomSecretStorage(accessTokenStorage, topic, "refresh-token");
  }
  // only return this if accessToken is found, otherwise we need to return undefined so that tokens are fetched properly
  if (accessToken) {
    return {
      accessToken,
      refreshToken,
    };
  }
  return undefined;
}

export async function loadCachedOauthTokens(hostConfig: HostConfig<"oauth2">) {
  return cachedTokens[createStorageNamespace(hostConfig)];
}

export async function loadOrAcquireAccessTokenOauth(
  hostConfig: HostConfig<"oauth2">,
  acquireTokens: () => Promise<OAuthData | undefined>,
) {
  if (!hostConfig.clientId) {
    throw new InvalidHostConfigError('A host config with authType set to "oauth2" has to also provide a clientId');
  }
  const topic = createStorageNamespace(hostConfig);
  return loadOrAcquireAccessToken(topic, acquireTokens, hostConfig.noCache, hostConfig.accessTokenStorage);
}

export async function loadOrAcquireAccessTokenAnon(
  hostConfig: HostConfig<"anonymous">,
  acquireTokens: () => Promise<OAuthData | undefined>,
) {
  if (!hostConfig.accessCode) {
    throw new InvalidHostConfigError(
      'A host config with authType set to "anonymous" has to also provide an accessCode',
    );
  }
  const topic = getTopicFromAnonHostConfig(hostConfig);
  return loadOrAcquireAccessToken(topic, acquireTokens, false, undefined);
}

async function loadOrAcquireAccessToken(
  topic: string,
  acquireTokens: () => Promise<OAuthData | undefined>,
  noCache: boolean | undefined,
  accessTokenStorage: "local" | "session" | SecretStorage | undefined,
) {
  if (noCache) {
    return acquireTokens();
  }

  cachedTokens[topic] =
    cachedTokens[topic] ||
    (async () => {
      let tokens = await loadOauthTokensFromStorage(topic, accessTokenStorage);
      if (tokens) {
        return tokens;
      }
      tokens = await acquireTokens();

      if (accessTokenStorage === "local" && tokens) {
        if (tokens.accessToken) {
          saveInLocalStorage(topic, "access-token", tokens.accessToken);
        }
        if (tokens.refreshToken) {
          saveInLocalStorage(topic, "refresh-token", tokens.refreshToken);
        }
      } else if (accessTokenStorage === "session" && tokens) {
        if (tokens.accessToken) {
          saveInSessionStorage(topic, "access-token", tokens.accessToken);
        }
        if (tokens.refreshToken) {
          saveInSessionStorage(topic, "refresh-token", tokens.refreshToken);
        }
      } else if (isCustomSecretStorage(accessTokenStorage) && tokens) {
        if (tokens.accessToken) {
          await saveInCustomSecretStorage(accessTokenStorage, topic, "access-token", tokens.accessToken);
        }
        if (tokens.refreshToken) {
          await saveInCustomSecretStorage(accessTokenStorage, topic, "refresh-token", tokens.refreshToken);
        }
      }
      return tokens;
    })();
  return cachedTokens[topic];
}

export function clearStoredOauthTokens(hostConfig: HostConfig<"oauth2">) {
  const topic = createStorageNamespace(hostConfig);
  delete cachedTokens[topic];
  if (isBrowser()) {
    deleteFromLocalStorage(topic, ["access-token", "refresh-token"]);
    deleteFromSessionStorage(topic, ["access-token", "refresh-token"]);
  }
  if (isCustomSecretStorage(hostConfig.accessTokenStorage)) {
    void deleteFromCustomSecretStorage(hostConfig.accessTokenStorage, topic, ["access-token", "refresh-token"]);
  }
}

export function clearStoredAnonymousTokens(hostConfig: HostConfig<"anonymous">) {
  const topic = getTopicFromAnonHostConfig(hostConfig);
  delete cachedTokens[topic];
  if (isBrowser()) {
    // This is currently actually not needed as we don't store anonymous tokens, but lets keep it here so it isn't forgotten in case token storage is enabled...
    deleteFromLocalStorage(topic, ["access-token", "refresh-token"]);
    deleteFromSessionStorage(topic, ["access-token", "refresh-token"]);
  }
}
