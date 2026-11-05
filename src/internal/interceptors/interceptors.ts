/**
 * This module provides a way to intercept requests and responses in the qmfe-api.
 * It allows you to modify the request before it is sent and the response before it is returned.
 * This is useful for adding headers, modifying the request body, or handling errors.
 * @module interceptors
 */

import type { InvokeFetchProperties, InvokeFetchResponse } from "#public/invoke-fetch";
import { isBrowser } from "#internal/utils/utils";
import { coreBootInterceptor } from "./boot-interceptors";

let GLOBAL_INTERCEPTORS: InterceptorsAPI; // eslint-disable-line prefer-const

/**
 * The RestInterceptor type is a function that can be used to intercept requests and responses
 */
export type RestInterceptor = <T extends InvokeFetchResponse>(
  request: InvokeFetchProperties,
  proceed: (props: InvokeFetchProperties) => Promise<T>,
  id?: string,
) => Promise<T>;

// factory function for creating scoped interceptors
export function createInterceptors(): InterceptorsAPI {
  // add the global interceptors if they have been initialized
  const startingInterceptors = GLOBAL_INTERCEPTORS?.getInterceptors() || [];
  const interceptors: RestInterceptor[] = [...startingInterceptors];

  return {
    /**
     * Adds an interceptor to the global interceptor stack
     * Returns the newly added interceptor
     * @param interceptor the interceptor to add
     * @returns the newly added interceptor
     */
    addInterceptor: (interceptor: RestInterceptor): RestInterceptor => {
      interceptors.push(interceptor);
      return interceptor;
    },

    /**
     * Removes an interceptor from the global interceptor stack
     * Returns null if the interceptor was not found
     * @param interceptor the interceptor remove
     * @returns the removed interceptor or null if not found
     */
    removeInterceptor: (interceptor: RestInterceptor): RestInterceptor | null => {
      const index = interceptors.indexOf(interceptor);
      let removed: RestInterceptor | undefined;
      if (index !== -1) {
        removed = interceptors.splice(index, 1)[0];
      }
      return removed || null;
    },

    /**
     * Gets all registered interceptors
     */
    getInterceptors: (): RestInterceptor[] => interceptors,
  };
}

// --- feature flag overrides header encoding -------------------------------
// Ingress proxies limit request header sizes (nginx defaults to 8 KB per header
// line), so the x-feature-flag-overrides value is encoded in one of two formats
// the server can tell apart by prefix:
//  - small override sets are sent as plain JSON (starts with "{"), which works in
//    every environment and stays compatible with servers/clients on older versions
//  - large sets are gzip-compressed and base64-encoded with a "gzip:" prefix,
//    trading the 4/3 base64 inflation for the ~5-10x gzip ratio of JSON flag maps
// Values that exceed the budget even compressed are dropped with a warning,
// since sending them would make the ingress reject the whole request.
const FLAG_OVERRIDES_GZIP_PREFIX = "gzip:";
const FLAG_OVERRIDES_PLAIN_MAX_CHARS = 4096;
// Kept below 8192 so the full header line (name + ": " + value) stays within
// nginx's default 8k large_client_header_buffers limit, which counts the name too.
const FLAG_OVERRIDES_ENCODED_MAX_CHARS = 8100;

// fetch() requires header values to be Latin-1 without control characters and
// throws otherwise, which would fail the whole /ui-config request over one bad
// localStorage entry (e.g. a non-breaking space pasted into a flag name). Keys
// are restricted to printable ASCII; values must be real booleans since the
// localStorage read blindly casts whatever JSON it finds.
const FLAG_OVERRIDES_SAFE_KEY_PATTERN = /^[\x20-\x7E]+$/;

const sanitizeFlagOverrides = (overrides: Record<string, boolean>): Record<string, boolean> => {
  const sanitized: Record<string, boolean> = {};
  const dropped: string[] = [];
  for (const [key, value] of Object.entries(overrides)) {
    if (FLAG_OVERRIDES_SAFE_KEY_PATTERN.test(key) && typeof value === "boolean") {
      sanitized[key] = value;
    } else {
      dropped.push(key);
    }
  }
  if (dropped.length > 0) {
    // eslint-disable-next-line no-console
    console.warn(
      `qmfe-api: dropping ${dropped.length} feature flag override(s) with non-printable-ASCII keys or non-boolean values before forwarding to ui-config: ${JSON.stringify(dropped)}`,
    );
  }
  return sanitized;
};

const gzipAndEncode = async (value: string): Promise<string> => {
  const cs = new CompressionStream("gzip");
  const writer = cs.writable.getWriter();
  // The readable side must be drained concurrently with the writes: a
  // TransformStream starts with backpressure (readable highWaterMark 0), so an
  // awaited write would never settle until a reader pulls.
  const compressedPromise = new Response(cs.readable).arrayBuffer();
  const writeDonePromise = writer.write(new TextEncoder().encode(value)).then(() => writer.close());
  const [compressedBuffer] = await Promise.all([compressedPromise, writeDonePromise]);
  const compressed = new Uint8Array(compressedBuffer);
  let binary = "";
  for (let i = 0; i < compressed.length; i++) {
    binary += String.fromCharCode(compressed[i]);
  }
  return FLAG_OVERRIDES_GZIP_PREFIX + btoa(binary);
};

/**
 * Encodes feature flag overrides for the x-feature-flag-overrides header.
 * Entries with non-printable-ASCII keys or non-boolean values are dropped with
 * a console warning (fetch would reject them as header content). Returns plain
 * JSON for small sets, a "gzip:"-prefixed base64 gzip payload for large ones,
 * or null (with a console warning) when nothing sendable remains, the value
 * cannot be kept within header size limits, or compression fails. Never throws:
 * a failure to build the header must not fail the ui-config request itself.
 * @internal exported for testing only, stripped from the published types
 */
export async function encodeFlagOverridesHeaderValue(overrides: Record<string, boolean>): Promise<string | null> {
  const sanitized = sanitizeFlagOverrides(overrides);
  if (Object.keys(sanitized).length === 0) {
    return null;
  }
  const json = JSON.stringify(sanitized);
  if (json.length <= FLAG_OVERRIDES_PLAIN_MAX_CHARS) {
    return json;
  }
  if (typeof CompressionStream === "undefined") {
    if (json.length <= FLAG_OVERRIDES_ENCODED_MAX_CHARS) {
      // no compression available, but the plain JSON still fits the header budget
      return json;
    }
    // eslint-disable-next-line no-console
    console.warn(
      `qmfe-api: feature flag overrides are ${json.length} chars, exceeding the header budget, and CompressionStream is unavailable - not forwarding overrides to ui-config`,
    );
    return null;
  }
  let encoded: string;
  try {
    encoded = await gzipAndEncode(json);
  } catch (error) {
    // The interceptor chain has no error handling, so a throw here would fail
    // the whole ui-config request - degrade to server-default flags instead.
    // eslint-disable-next-line no-console
    console.warn("qmfe-api: failed to compress feature flag overrides - not forwarding overrides to ui-config", error);
    return null;
  }
  if (encoded.length > FLAG_OVERRIDES_ENCODED_MAX_CHARS) {
    // eslint-disable-next-line no-console
    console.warn(
      `qmfe-api: feature flag overrides are ${encoded.length} chars even after compression, exceeding the header budget - not forwarding overrides to ui-config`,
    );
    return null;
  }
  return encoded;
}

let addDefaultInterceptorsRun = false;
// add default interceptors needed by qmfe-api, should only be called once and only by the private api (qmfe-api)
export function addDefaultInterceptors() {
  if (addDefaultInterceptorsRun) {
    return;
  }
  // add browser specific interceptors
  if (isBrowser()) {
    // read flags from url query
    const readFlagsFromUrlQuery = (): Record<string, boolean> => {
      const params = new URLSearchParams(window.location.search);
      const featuresParam = params.get("features");
      if (!featuresParam) {
        return {};
      }
      const features = featuresParam.split(",").map((item) => item.trim());

      const urlFeatures: Record<string, boolean> = features.reduce<Record<string, boolean>>((map, obj) => {
        const value = !obj.startsWith("!");
        const key = value ? obj : obj.substring(1);
        // eslint-disable-next-line no-param-reassign
        map[key] = value;

        return map;
      }, {});

      return urlFeatures;
    };

    // read flags from local storage
    const readFlagsFromLocalStorage = (): Record<string, boolean> => {
      try {
        const featuresParam = localStorage.getItem("qcs-features");
        if (featuresParam) {
          return JSON.parse(featuresParam) as Record<string, boolean>;
        }
        return {};
      } catch {
        return {};
      }
    };

    const flagsFromUrl = readFlagsFromUrlQuery();
    const flagsFromLocalStorage = readFlagsFromLocalStorage();

    const featuresInterceptor: RestInterceptor = async (request, proceed) => {
      let resultPromise: ReturnType<typeof proceed>;
      if (request.pathTemplate === "/api/v1/features") {
        resultPromise = proceed(request);
        const result = await resultPromise;
        return {
          ...result,
          data: {
            ...(result.data as Record<string, unknown>),
            ...flagsFromLocalStorage,
            ...flagsFromUrl,
          },
        };
      }
      return proceed(request);
    };

    // Forward local flag overrides to the ui-config backend so server-evaluated
    // menu items (e.g. sidebar) reflect the same overrides as client-side flag reads.
    // Mirrors the pattern in qmfe-core's LocalFlagOverridesModel where local overrides win over LD.
    // Sent as a header rather than a query param to avoid URL length limits with large flag sets.
    const uiConfigOverridesInterceptor: RestInterceptor = async (request, proceed) => {
      if (request.pathTemplate === "/api/v1/ui-config") {
        const overrides = { ...flagsFromLocalStorage, ...flagsFromUrl };
        if (Object.keys(overrides).length > 0) {
          const headerValue = await encodeFlagOverridesHeaderValue(overrides);
          if (headerValue !== null) {
            return proceed({
              ...request,
              options: {
                ...request.options,
                headers: {
                  ...request.options?.headers,
                  "x-feature-flag-overrides": headerValue,
                },
              },
            });
          }
        }
      }
      return proceed(request);
    };

    GLOBAL_INTERCEPTORS.addInterceptor(featuresInterceptor);
    GLOBAL_INTERCEPTORS.addInterceptor(uiConfigOverridesInterceptor);
    GLOBAL_INTERCEPTORS.addInterceptor(coreBootInterceptor);

    // If a Signadot routing key is set in localStorage and we're not on a prod
    // host, attach it as a W3C `baggage` header. Istio uses it to route the
    // request to the matching sandbox. The host check is just hygiene — prod
    // clusters don't run the Signadot operator, so the header would be ignored
    // there anyway.
    // Keep the host check in sync with `getDeployedEnv` in
    // qmfe-core/src/utils/environment.ts (duplicated to avoid a circular dep).
    const isProdHost = (): boolean => {
      try {
        const host = window.location.hostname;
        return host === "qlikcloud.com" || host.endsWith(".qlikcloud.com");
      } catch {
        return true; // fail closed
      }
    };

    const readSignadotRoutingKey = (): string | null => {
      if (isProdHost()) {
        return null;
      }
      try {
        const raw = localStorage.getItem("qcs-signadot-key");
        if (raw === null) {
          return null;
        }
        const trimmed = raw.trim();
        return trimmed.length > 0 ? trimmed : null;
      } catch {
        return null;
      }
    };

    // Upsert `sd-routing-key=<key>` into an existing `baggage` list while
    // preserving any other entries the caller already set. Drops any prior
    // `sd-routing-key` entry so this one wins.
    const upsertSignadotBaggage = (existing: string | undefined, key: string): string => {
      const entry = `sd-routing-key=${key}`;
      if (!existing) {
        return entry;
      }
      const kept = existing
        .split(",")
        .map((part) => part.trim())
        .filter((part) => part.length > 0 && !part.startsWith("sd-routing-key="));
      kept.push(entry);
      return kept.join(",");
    };

    const signadotInterceptor: RestInterceptor = async (request, proceed) => {
      const key = readSignadotRoutingKey();
      if (!key) {
        return proceed(request);
      }
      const existingHeaders = request.options?.headers || {};
      const next: InvokeFetchProperties = {
        ...request,
        options: {
          ...request.options,
          headers: {
            ...existingHeaders,
            baggage: upsertSignadotBaggage(existingHeaders.baggage, key),
          },
        },
      };
      return proceed(next);
    };
    GLOBAL_INTERCEPTORS.addInterceptor(signadotInterceptor);
  } // end of browser specific interceptors

  addDefaultInterceptorsRun = true;
}

/**
 * The global interceptor stack
 */
GLOBAL_INTERCEPTORS = createInterceptors();

/**
 * Adds an interceptor to the global interceptor stack
 * Returns the newly added interceptor
 * @param interceptor the interceptor to add
 * @returns the newly added interceptor
 */
export function addInterceptor(interceptor: RestInterceptor): RestInterceptor {
  return GLOBAL_INTERCEPTORS.addInterceptor(interceptor);
}

/**
 * Removes an interceptor from the global interceptor stack
 * @param interceptor the interceptor remove
 */
export function removeInterceptor(interceptor: RestInterceptor): RestInterceptor | null {
  return GLOBAL_INTERCEPTORS.removeInterceptor(interceptor);
}

/**
 * Gets all registered interceptors
 */
export function getInterceptors(): RestInterceptor[] {
  return GLOBAL_INTERCEPTORS.getInterceptors();
}

export interface InterceptorsAPI {
  /**
   * Adds an interceptor to the global interceptor stack
   * Returns the newly added interceptor
   * @param interceptor the interceptor to add
   * @returns the newly added interceptor
   */
  addInterceptor: typeof addInterceptor;

  /**
   * Removes an interceptor from the global interceptor stack
   * @param interceptor the interceptor remove
   */
  removeInterceptor: typeof removeInterceptor;

  /**
   * Gets all registered interceptors
   */
  getInterceptors: typeof getInterceptors;
}

/**
 * The interceptors API
 */
const interceptors: InterceptorsAPI & {
  createInterceptors: typeof createInterceptors;
} = {
  addInterceptor,
  removeInterceptor,
  getInterceptors,
  createInterceptors,
};

export default interceptors;
