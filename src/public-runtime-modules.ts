import type { AuthAPI } from "#internal/auth/auth";
import type { InvokeFetchAPI } from "#internal/invoke-fetch/invoke-fetch";
import type { QixAPI } from "#internal/qix/qix";
import { isNode as isNodeFn } from "#internal/utils/utils";

type MainJsResolveHostConfig = {
  embedRuntimeUrl?: string;
  host?: string;
  url?: string;
};

const isNode = isNodeFn();

// function that executes on load to load runtime-module-loader if context is browser
const importRuntimeModulePromise = (async () => {
  if (isNode) {
    return () => {
      throw new Error("importRuntimeModule cannot be used in a Node.js context");
    };
  }
  // browser context
  const mod = await import("@qlik/runtime-module-loader");
  return mod.importRuntimeModule;
})();

/**
 * @param hostConfig
 * @returns
 */
export async function getAuthRuntimeModule(hostConfig?: MainJsResolveHostConfig): Promise<AuthAPI> {
  if (isNode) {
    return import("#internal/auth/auth");
  }
  const importRuntimeModule = await importRuntimeModulePromise;
  return importRuntimeModule("auth@v1", hostConfig) as Promise<AuthAPI>;
}

export async function getQixRuntimeModule(hostConfig?: MainJsResolveHostConfig): Promise<QixAPI> {
  // Important quirk for non-async-calls. Await the auth module to be loaded and resolved first. This makes sure that the timing between setDefaultHostConfig
  // and subsequent openAppSession calls is kept. If we don't do this setDefaultHostConfig call may actually arrive in the
  // qmfe-api runtime module after the openAppSession call does.
  await getAuthRuntimeModule(hostConfig);
  if (isNode) {
    return import("#internal/qix/qix");
  }
  const importRuntimeModule = await importRuntimeModulePromise;
  return importRuntimeModule("qix@v1", hostConfig) as Promise<QixAPI>;
}

export async function getInvokeFetchRuntimeModule(hostConfig?: MainJsResolveHostConfig): Promise<InvokeFetchAPI> {
  // Important quirk for non-async-calls. Await the auth module to be loaded and resolved first. This makes sure that the timing between setDefaultHostConfig
  // and subsequent openAppSession etc is kept. If we don't do this setDefaultHostConfig call may actually arrive in the
  // qmfe-api runtime module after invokeFetch call does.
  await getAuthRuntimeModule(hostConfig);
  if (isNode) {
    return import("#internal/invoke-fetch/invoke-fetch");
  }
  const importRuntimeModule = await importRuntimeModulePromise;
  return importRuntimeModule("invoke-fetch@v1", hostConfig) as Promise<InvokeFetchAPI>;
}
