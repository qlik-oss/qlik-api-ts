import { InvalidHostConfigError } from "#internal/auth/auth-errors";
import type { HostConfig } from "#internal/auth/auth-types";
import type { SecretStorage } from "#internal/global-types";
import { exposeInternalApiOnWindow } from "#internal/utils/expose-internal-test-apis";
import { isBrowser } from "#internal/utils/utils";
import type { OAuthData } from "./oauth-utils";

export const storagePrefix = "qlik-qmfe-api";

/** Keeps letters and digits and writes every other UTF-8 byte as `-XX` in hex, so a value never contains `_`. */
function encodeNamespacePart(value: string): string {
  return Array.from(new TextEncoder().encode(value), (byte) =>
    /[A-Za-z0-9]/.test(String.fromCharCode(byte))
      ? String.fromCharCode(byte)
      : `-${byte.toString(16).toUpperCase().padStart(2, "0")}`,
  ).join("");
}

/**
 * Builds the namespace of the OAuth storage keys from the client ID and the optional scope, subject and user ID, for
 * example `123_scope-users-20apps_subject-alice`. Each optional part is labelled and every value is encoded, so different
 * host configs never share a namespace, whatever their values. No scope, meaning all scopes of the oauth client, is an
 * absent segment. Keys only contain letters, digits, `_` and `-`, which any custom token storage can handle.
 *
 * Only identifiers belong in this namespace, never credentials. Do not change the format: that would change the storage
 * keys and discard the tokens stored under them, and break logins that are in progress across a redirect.
 */
export function createStorageNamespace(hostConfig: HostConfig<"oauth2">): string {
  const { clientId, scope, subject, userId } = hostConfig;
  return [
    encodeNamespacePart(clientId),
    ...(scope ? [`scope-${encodeNamespacePart(scope)}`] : []),
    ...(subject ? [`subject-${encodeNamespacePart(subject)}`] : []),
    ...(userId ? [`userid-${encodeNamespacePart(userId)}`] : []),
  ].join("_");
}

export function getTopicFromAnonHostConfig(hostConfig: HostConfig<"anonymous">): string {
  return `${hostConfig.accessCode}_${hostConfig.clientId}`;
}

/**
 * A map from oauth client id to promise of an access token. It has no prototype, so a namespace such as `constructor`
 * finds no inherited property.
 */
const cachedTokens = Object.create(null) as Record<string, Promise<OAuthData | undefined>>;
let tokenAcquisitionGeneration = 0;

/**
 * Used for testing.
 */
export function clearAllCachedTokens() {
  for (const key in cachedTokens) {
    delete cachedTokens[key];
  }
}

export function invalidatePendingOauthTokenAcquisitions() {
  tokenAcquisitionGeneration += 1;
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

  const generation = tokenAcquisitionGeneration;
  cachedTokens[topic] =
    cachedTokens[topic] ||
    (async () => {
      let tokens = await loadOauthTokensFromStorage(topic, accessTokenStorage);
      if (tokens) {
        return tokens;
      }
      tokens = await acquireTokens();
      // Logout may already have cleared storage; don't persist tokens issued after it started.
      if (globalThis.loggingOut || generation !== tokenAcquisitionGeneration) {
        return tokens;
      }

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

/**
 * Clears the stored OAuth tokens of a host config and returns the tokens that were available
 * in memory, browser storage and custom storage. Failures to read or delete custom storage are ignored.
 */
export async function takeStoredOauthTokens(hostConfig: HostConfig<"oauth2">): Promise<OAuthData[]> {
  const topic = createStorageNamespace(hostConfig);
  const cached = cachedTokens[topic];
  // Only use tokens that are already resolved: a pending acquisition may never settle.
  const sources: Promise<OAuthData | undefined>[] = [
    cached ? Promise.race([cached, Promise.resolve(undefined)]) : Promise.resolve(undefined),
  ];
  if (isBrowser()) {
    sources.push(loadOauthTokensFromStorage(topic, "local"), loadOauthTokensFromStorage(topic, "session"));
  }
  const customStorage = hostConfig.accessTokenStorage;
  if (isCustomSecretStorage(customStorage)) {
    sources.push(loadOauthTokensFromStorage(topic, customStorage));
  }
  const results = await Promise.allSettled(sources);

  delete cachedTokens[topic];
  if (isBrowser()) {
    deleteFromLocalStorage(topic, ["access-token", "refresh-token"]);
    deleteFromSessionStorage(topic, ["access-token", "refresh-token"]);
  }
  if (isCustomSecretStorage(customStorage)) {
    await Promise.allSettled([deleteFromCustomSecretStorage(customStorage, topic, ["access-token", "refresh-token"])]);
  }

  return results.flatMap((result) => (result.status === "fulfilled" && result.value ? [result.value] : []));
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
