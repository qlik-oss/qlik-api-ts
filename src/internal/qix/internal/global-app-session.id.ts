import { toValidWebsocketLocationUrl } from "#internal/auth/auth-functions";
import type { OpenAppSessionProps } from "../qix-types";

export function toGlobalAppSessionId({
  appId,
  identity,
  hostConfig,
  withoutData,
  useReloadEngine,
  ttlSeconds,
  workloadType,
}: OpenAppSessionProps) {
  const locationUrl = toValidWebsocketLocationUrl(hostConfig);
  let url = `${locationUrl}/${appId}`;

  if (identity) {
    url += `/${identity}`;
  }
  if (hostConfig?.authType === "oauth2") {
    if (hostConfig.userId) {
      url += `/userId/${hostConfig.userId}`;
    }
    if (hostConfig.subject) {
      url += `/subject/${hostConfig.subject}`;
    }
  }
  if (ttlSeconds !== undefined && ttlSeconds >= 0) {
    url += `/ttl/${ttlSeconds}`;
  }
  if (useReloadEngine) {
    url += "/useReloadEngine";
  }
  if (withoutData) {
    url += "/withoutData";
  }
  if (workloadType) {
    url += `?workloadType=${workloadType}`;
  }
  return url;
}
