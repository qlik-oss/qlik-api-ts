import { i as isNode } from "./utils-DI6bFnHB.js";

//#region src/public/public-runtime-modules.ts
const isNode$1 = isNode();
const importRuntimeModulePromise = (async () => {
	if (isNode$1) return () => {
		throw new Error("importRuntimeModule cannot be used in a Node.js context");
	};
	return (await import("./dist-BrtkK7jD.js")).importRuntimeModule;
})();
/**
* @param hostConfig
* @returns
*/
async function getAuthRuntimeModule(hostConfig) {
	if (isNode$1) return import("./auth-7cn0sw5M.js");
	return (await importRuntimeModulePromise)("auth@v1", hostConfig);
}
async function getQixRuntimeModule(hostConfig) {
	await getAuthRuntimeModule(hostConfig);
	if (isNode$1) return import("./qix-Ci8-xBfr.js");
	return (await importRuntimeModulePromise)("qix@v1", hostConfig);
}
async function getInvokeFetchRuntimeModule(hostConfig) {
	await getAuthRuntimeModule(hostConfig);
	if (isNode$1) return import("./invoke-fetch-C7yv5Xdt.js");
	return (await importRuntimeModulePromise)("invoke-fetch@v1", hostConfig);
}

//#endregion
export { getInvokeFetchRuntimeModule as n, getQixRuntimeModule as r, getAuthRuntimeModule as t };