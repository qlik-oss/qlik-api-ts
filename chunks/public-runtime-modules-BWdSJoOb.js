import { isNode } from "./utils-1j8VpsDa.js";

//#region src/public/public-runtime-modules.ts
const isNode$1 = isNode();
const importRuntimeModulePromise = (async () => {
	if (isNode$1) return () => {
		throw new Error("importRuntimeModule cannot be used in a Node.js context");
	};
	return (await import("./dist-DtYihfwd.js")).importRuntimeModule;
})();
/**
* @param hostConfig
* @returns
*/
async function getAuthRuntimeModule(hostConfig) {
	if (isNode$1) return import("./auth-DnVBiC8q.js");
	return (await importRuntimeModulePromise)("auth@v1", hostConfig);
}
async function getQixRuntimeModule(hostConfig) {
	await getAuthRuntimeModule(hostConfig);
	if (isNode$1) return import("./qix-OogL83RB.js");
	return (await importRuntimeModulePromise)("qix@v1", hostConfig);
}
async function getInvokeFetchRuntimeModule(hostConfig) {
	await getAuthRuntimeModule(hostConfig);
	if (isNode$1) return import("./invoke-fetch-BxHtZ6mc.js");
	return (await importRuntimeModulePromise)("invoke-fetch@v1", hostConfig);
}

//#endregion
export { getAuthRuntimeModule, getInvokeFetchRuntimeModule, getQixRuntimeModule };