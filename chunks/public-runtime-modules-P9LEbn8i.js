//#region src/public/public-runtime-modules.ts
/**
* @param hostConfig
* @returns
*/
function getAuthRuntimeModule(hostConfig) {
	const isNode = !!globalThis.process?.argv;
	return isNode ? import("./auth-CCj082fh.js") : import("./dist-UZqmL_Q6.js").then((mod) => mod.importRuntimeModule("auth@v1", hostConfig));
}
async function getQixRuntimeModule(hostConfig) {
	await getAuthRuntimeModule(hostConfig);
	const isNode = !!globalThis.process?.argv;
	return isNode ? import("./qix-Ds6X5svJ.js") : import("./dist-UZqmL_Q6.js").then((mod) => mod.importRuntimeModule("qix@v1", hostConfig));
}
async function getInvokeFetchRuntimeModule(hostConfig) {
	await getAuthRuntimeModule(hostConfig);
	const isNode = !!globalThis.process?.argv;
	return isNode ? import("./invoke-fetch-fXOUPARi.js") : import("./dist-UZqmL_Q6.js").then((mod) => mod.importRuntimeModule("invoke-fetch@v1", hostConfig));
}

//#endregion
export { getAuthRuntimeModule, getInvokeFetchRuntimeModule, getQixRuntimeModule };