import { i as isNode$1 } from "./utils-vv-xFm06.js";

//#region src/public/public-runtime-modules.ts
const isNode = isNode$1();
const importRuntimeModulePromise = (async () => {
	if (isNode) return () => {
		throw new Error("importRuntimeModule cannot be used in a Node.js context");
	};
	return (await import("./dist-BtB_2zGt.js")).importRuntimeModule;
})();
/**
* @param hostConfig
* @returns
*/
async function getAuthRuntimeModule(hostConfig) {
	if (isNode) return import("./auth-BdBIkDOY.js");
	return (await importRuntimeModulePromise)("auth@v1", hostConfig);
}
async function getQixRuntimeModule(hostConfig) {
	await getAuthRuntimeModule(hostConfig);
	if (isNode) return import("./qix-BzhMZvas.js");
	return (await importRuntimeModulePromise)("qix@v1", hostConfig);
}
async function getInvokeFetchRuntimeModule(hostConfig) {
	await getAuthRuntimeModule(hostConfig);
	if (isNode) return import("./invoke-fetch-CUtH5Tfl.js");
	return (await importRuntimeModulePromise)("invoke-fetch@v1", hostConfig);
}

//#endregion
export { getInvokeFetchRuntimeModule as n, getQixRuntimeModule as r, getAuthRuntimeModule as t };