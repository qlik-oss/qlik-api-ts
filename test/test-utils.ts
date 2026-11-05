import { vi } from "vitest";
import { resolveHostConfig, toValidLocationUrl } from "#internal/auth/auth-functions";
import type { HostConfig } from "#internal/auth/auth-types";
import * as platformFunctions from "#internal/platform/platform-functions";
import type { Platform } from "#internal/platform/platform-types";

export class NoErrorThrownError extends Error {}

export const getError = async <TError>(call: () => unknown): Promise<TError> => {
  try {
    await call();
    throw new NoErrorThrownError();
  } catch (error: unknown) {
    return error as TError;
  }
};

const stubbedPlatforms = new Map<string, Platform>();
// captured before any spy is installed, so a re-installed spy never wraps another spy
const { getPlatform: realGetPlatform, clearPlatform: realClearPlatform } = platformFunctions;

const toPlatformKey = (hostConfig: HostConfig | undefined) => toValidLocationUrl(resolveHostConfig(hostConfig));

/**
 * Makes `getPlatform` resolve to `platform` for the host of `hostConfig`, without fetching product-info.
 * Hosts that are not set fall through to the real `getPlatform`. `clearPlatform` removes the stub for a host,
 * and `vi.restoreAllMocks()` removes all of them.
 */
export function setPlatform(hostConfig: HostConfig | undefined, platform: Partial<Platform>): void {
  if (!vi.isMockFunction(platformFunctions.getPlatform)) {
    stubbedPlatforms.clear();
    vi.spyOn(platformFunctions, "getPlatform").mockImplementation(
      async (options = {}) => stubbedPlatforms.get(toPlatformKey(options.hostConfig)) ?? realGetPlatform(options),
    );
    vi.spyOn(platformFunctions, "clearPlatform").mockImplementation((clearedHostConfig) => {
      stubbedPlatforms.delete(toPlatformKey(clearedHostConfig));
      realClearPlatform(clearedHostConfig);
    });
  }
  stubbedPlatforms.set(toPlatformKey(hostConfig), {
    isCloud: false,
    isQCS: false,
    isQCG: false,
    isCloudConsole: false,
    isWindows: false,
    isQSE: false,
    isQSD: false,
    isQSM: false,
    isQSMOffline: false,
    isUnknown: false,
    ...platform,
  });
}
