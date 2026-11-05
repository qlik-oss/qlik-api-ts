import { toValidLocationUrl } from "#internal/auth/auth-functions";
import type { HostConfig } from "#internal/auth/auth-types";

const xrfKeys: Record<string, string> = {};

/**
 * @returns {string} 16 character long xrf-key
 */
export function createXrfKey(): string {
  let result = "";
  for (let i = 0; i < 16; i += 1) {
    const j = Math.floor(Math.random() * 62);
    if (j < 10) {
      result += j;
    } else if (j > 9 && j < 36) {
      result += String.fromCharCode(j + 55);
    } else {
      result += String.fromCharCode(j + 61);
    }
  }
  return result;
}

export function getXrfKey(hostConfig: HostConfig): string {
  const locationUrl = toValidLocationUrl(hostConfig);

  xrfKeys[locationUrl] = xrfKeys[locationUrl] || createXrfKey();
  return xrfKeys[locationUrl];
}
