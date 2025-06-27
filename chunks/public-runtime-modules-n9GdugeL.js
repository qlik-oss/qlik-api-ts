//#region src/public/public-runtime-modules.ts
/**
* @param hostConfig
* @returns
*/
function getAuthRuntimeModule(hostConfig) {
	const isNode = !!globalThis.process?.argv;
	return isNode ? import("./auth-SLJZCKMq.js") : import("./dist-P1twboQp.js").then((mod) => mod.importRuntimeModule("auth@v1", hostConfig));
}
async function getQixRuntimeModule(hostConfig) {
	await getAuthRuntimeModule(hostConfig);
	const isNode = !!globalThis.process?.argv;
	return isNode ? import("./qix-C1L5FW2k.js") : import("./dist-P1twboQp.js").then((mod) => mod.importRuntimeModule("qix@v1", hostConfig));
}
async function getInvokeFetchRuntimeModule(hostConfig) {
	await getAuthRuntimeModule(hostConfig);
	const isNode = !!globalThis.process?.argv;
	return isNode ? import("./invoke-fetch-2MWaj5K1.js") : import("./dist-P1twboQp.js").then((mod) => mod.importRuntimeModule("invoke-fetch@v1", hostConfig));
}

//#endregion
export { getAuthRuntimeModule, getInvokeFetchRuntimeModule, getQixRuntimeModule };