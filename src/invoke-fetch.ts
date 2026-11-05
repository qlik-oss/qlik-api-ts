import type { InvokeFetchProperties, InvokeFetchResponse } from "#internal/invoke-fetch/invoke-fetch-types";
import { API_VERSION } from "#public/api-version";
import { isBrowser } from "#internal/utils/utils";
import { getInvokeFetchRuntimeModule } from "./public-runtime-modules";

export type * from "#internal/invoke-fetch/invoke-fetch-types";

// NOTE: The @qlik/api build replaces this constant with the package version (see
// tsdown.config.ts), so that the User-Agent header identifies the exact package
// version in use. Any change to the string below must be reflected there.
const defaultUserAgent = "qlik-api/latest";

export async function invokeFetch<T extends InvokeFetchResponse>(
  api: string,
  props: InvokeFetchProperties,
): Promise<T> {
  const hostConfig = props.options?.hostConfig;
  let userAgent: string;
  if (props?.userAgent) {
    userAgent = props.userAgent;
  } else if (isBrowser()) {
    userAgent = `${window.navigator.userAgent} ${defaultUserAgent}`;
  } else {
    userAgent = defaultUserAgent;
  }
  return (await getInvokeFetchRuntimeModule(hostConfig)).invokeFetch(api, {
    ...props,
    userAgent,
    apiVersion: API_VERSION,
    isPublic: true,
  });
}

export function clearApiCache(api: string) {
  void getInvokeFetchRuntimeModule().then((runtimeModule) => runtimeModule.clearApiCache(api));
}
