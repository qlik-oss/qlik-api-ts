import { isWindows, toValidLocationUrl } from "#internal/auth/auth-functions";
import type { HostConfig } from "#internal/auth/auth-types";
import { serializeHostConfig } from "#internal/auth/internal/host-config-functions";
import { globalCacheNamespace, toCacheKey, updateCache } from "#internal/invoke-fetch/internal/response-cache";
import { invokeFetch } from "#internal/invoke-fetch/invoke-fetch-functions";
import type { InvokeFetchProperties, InvokeFetchResponse } from "#internal/invoke-fetch/invoke-fetch-types";
import { getPlatform } from "#internal/platform/platform-functions";
import { isNode } from "#internal/utils/utils";
import { type RestInterceptor } from "./interceptors";

/**
 * @internal
 * Exported for testing.
 */
export type ResponseEntry = {
  status?: number;
  method?: string;
  path: string;
  data?: unknown;
  body?: unknown;
};

/**
 * @internal
 * The paths expected in the from core-init BFF response.
 * Exposed for testing.
 */
export const coreBootPaths = new Set([
  "/api/v1/brands/active",
  "/api/v1/claims/me",
  "/api/v1/licenses/allotments",
  "/api/v1/licenses/allotments/me",
  "/api/v1/licenses/number",
  "/api/v1/licenses/status",
  "/api/v1/tenant-settings",
  "/api/v1/tenants/me",
  "/api/v1/user-settings",
  "/api/v1/users/me",
  "/api/v1/user-locale",
]);

/**
 * @internal
 * The path of the core-init BFF response.
 * Exposed for testing.
 */
export const coreBootEndpoint = "/api/v1/boot/core-init";

let coreBootPromises: Record<string, Promise<void> | undefined> = {};
let enableDespiteNode = false;

/**
 * @internal
 * Reset the interceptor state.
 * Exposed for testing.
 */
export function resetCoreBootInterceptor() {
  coreBootPromises = {};
  enableDespiteNode = false;
}

/**
 * @internal
 * Force the interceptor to be run despite the environment being node.
 * When running in vitest the env is both `node` _and_ `browser`.
 * Exposed for testing.
 */
export function enableCoreBootInterceptorForTesting() {
  enableDespiteNode = true;
}

function interceptorEnabled(): boolean {
  return !isNode() || enableDespiteNode;
}

/**
 * An interceptor that populates the cache from the response of a _backend
 * for frontend_ endpoint. This endpoint contains the response of the most common
 * initial calls, mainly from **qmfe-core**.
 *
 * If the interceptor finds a matching call it runs once and then removes itself after
 * populating the cache causing the original request (and following ones) to hit the cache instead.
 *
 * The endpoint is implemented in the _customizations_ service and should
 * contain the responses of the requests specified in 'coreBootPaths'.
 */
export const coreBootInterceptor: RestInterceptor = async <T extends InvokeFetchResponse>(
  request: InvokeFetchProperties,
  proceed: (props: InvokeFetchProperties) => Promise<T>,
) => {
  if (!interceptorEnabled()) {
    return proceed(request);
  }
  // Also pre-fill the cache on /features requests
  // as it's the one that usually happens first.
  if (request.pathTemplate !== "/api/v1/features" && !coreBootPaths.has(request.pathTemplate)) {
    return proceed(request);
  }

  const hostConfig = request.options?.hostConfig;

  // Don't use interceptor if we're using on Windows, noauth or cloud-console.
  // For noauth this just means that we're proceeding a bit faster.
  // For Windows it means that `getFeatures` won't cause a console.error.
  if (
    hostConfig?.authType === "noauth" ||
    (await isWindows(hostConfig)) ||
    (await getPlatform({ hostConfig })).isCloudConsole
  ) {
    return proceed(request);
  }

  const serializedHostConfig = serializeHostConfig(request.options?.hostConfig);

  coreBootPromises[serializedHostConfig] ??= callCoreBootAndFillCache(hostConfig, serializedHostConfig);
  if (request.pathTemplate !== "/api/v1/features") {
    await coreBootPromises[serializedHostConfig];
  }

  return proceed(request);
};

async function callCoreBootAndFillCache(hostConfig: HostConfig | undefined, serializedHostConfig: string) {
  const bootRequest: InvokeFetchProperties = {
    method: "GET",
    pathTemplate: coreBootEndpoint,
    options: { hostConfig },
  };
  try {
    const bootResponse = await invokeFetch(".global", bootRequest);
    const locationUrl = toValidLocationUrl(hostConfig);
    populateCacheFrom(bootResponse.data as Array<ResponseEntry>, coreBootPaths, serializedHostConfig, locationUrl);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error("Failed to bootstrap core-info:", e);
  }
}

function populateCacheFrom(
  responses: Array<ResponseEntry>,
  pathsToInclude: Set<string>,
  serializedHostConfig: string,
  locationUrl: string,
) {
  if (!responses) {
    return;
  }
  for (const res of responses) {
    if (!pathsToInclude.has(res.path)) {
      continue;
    }
    const completeUrl = locationUrl + res.path;
    const { status, method, data } = res;
    // Don't cache entries where data is missing or undefined. To have an empty
    // response it needs to be explicitly set to null.
    if (typeof data === "undefined") {
      continue;
    }
    // Only include 200-range statuses. If status is undefined or zero, treat it as 200.
    if (status && (status < 200 || status >= 300)) {
      continue;
    }

    // Add a dummy header just so that it's defined.
    // An actual header is preferred but there is none, we'd have to synthesize
    // based on the response-header from the init-call and override specific fields
    // like `content-length` based on the data - which we would have to examine too.
    const response = Promise.resolve({ status: status || 200, data, headers: {} }) as Promise<InvokeFetchResponse>;
    const cacheKey = toCacheKey({ url: completeUrl, serializedHostConfig });
    void updateCache(globalCacheNamespace, { method: method || "GET", completeUrl, cacheKey }, response);
  }
}
