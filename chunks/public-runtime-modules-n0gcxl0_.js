import { isNode } from "./utils-1j8VpsDa.js";

//#region src/public/public-runtime-modules.ts
const isNode$1 = isNode();
const importRuntimeModule = await (async () => {
	if (isNode$1) return () => {
		throw new Error("importRuntimeModule cannot be used in a Node.js context");
	};
	return (await import("./dist-DtYihfwd.js")).importRuntimeModule;
})();
/**
* @param hostConfig
* @returns
*/
function getAuthRuntimeModule(hostConfig) {
	return isNode$1 ? import("./auth-Do2Z8IEt.js") : importRuntimeModule("auth@v1", hostConfig);
}
async function getQixRuntimeModule(hostConfig) {
	await getAuthRuntimeModule(hostConfig);
	return isNode$1 ? import("./qix-Wsz3JE_a.js") : importRuntimeModule("qix@v1", hostConfig);
}
async function getInvokeFetchRuntimeModule(hostConfig) {
	await getAuthRuntimeModule(hostConfig);
	return isNode$1 ? import("./invoke-fetch-hML-5n7w.js") : importRuntimeModule("invoke-fetch@v1", hostConfig);
}

//#endregion
export { getAuthRuntimeModule, getInvokeFetchRuntimeModule, getQixRuntimeModule };