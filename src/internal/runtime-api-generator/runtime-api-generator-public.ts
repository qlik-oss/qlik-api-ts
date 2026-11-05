/* -------------------------------------------------------------------------- */
/*                         This is not a public module                        */
/* -------------------------------------------------------------------------- */

import type { HostConfig } from "#public/auth";
import type { InterceptorsAPI } from "#public/interceptors";
import { clearApiCache, invokeFetch } from "#public/invoke-fetch";
import {
  createClassicApiFn,
  createLazyApiProxy,
  parseMiniApi,
  type ParsedMiniApi,
  type RuntimeApi,
  type UrlSegmentNode,
} from "./runtime-api-generator-common";

const parsedMiniApis: Record<string, ParsedMiniApi> = {};

/**
 * apiDefToApi generates a RuntimeApi for the namespace provided based on
 * the URL-segment tree.
 *
 * See the traverse function, the generated code and the generator
 * (found in tools/generator/genspecs) for the full picture.
 */
// oxlint-disable-next-line typescript/no-unnecessary-type-parameters
export function apiDefToApiPublic<T extends RuntimeApi>(
  namespace: string,
  def: UrlSegmentNode,
  subApis?: Record<string, (hostConfig?: HostConfig, interceptors?: InterceptorsAPI) => RuntimeApi>,
): (hostConfig?: HostConfig, interceptors?: InterceptorsAPI) => T {
  parsedMiniApis[namespace] = parsedMiniApis[namespace] || parseMiniApi(namespace, def);
  const parsedMiniApi = parsedMiniApis[namespace];
  return (hostConfig?: HostConfig, interceptors?: InterceptorsAPI) => {
    const lazyApi: RuntimeApi = {
      clearCache: () => clearApiCache(namespace),
    };

    // The init function that fills the lazy api object with its operation the first time it is accessed
    const initFunc = () => {
      Object.entries(parsedMiniApi.operations).forEach(([operationName, operation]) => {
        // Create the actual function bound to the supplied host config
        lazyApi[operationName] = createClassicApiFn(operation, hostConfig, interceptors, true, () => invokeFetch);

        // Create function-aliases for the deprecated operation-names.
        operation.oldOperationNames.forEach((oldOperationName) => {
          lazyApi[oldOperationName] = lazyApi[operationName];
        });
      });
      if (subApis) {
        Object.entries(subApis).forEach(([apiName, apiBuilder]) => {
          lazyApi[apiName] = apiBuilder(hostConfig, interceptors);
        });
      }
    };

    return createLazyApiProxy<T>(lazyApi, initFunc);
  };
}
