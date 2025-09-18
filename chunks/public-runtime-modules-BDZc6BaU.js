//#region src/public/public-runtime-modules.ts
/**
* @param hostConfig
* @returns
*/
function getAuthRuntimeModule(hostConfig) {
	return !!globalThis.process?.argv ? import("./auth-Do2Z8IEt.js") : import("./dist-DtYihfwd.js").then((mod) => mod.importRuntimeModule("auth@v1", hostConfig));
}
async function getQixRuntimeModule(hostConfig) {
	await getAuthRuntimeModule(hostConfig);
	return !!globalThis.process?.argv ? import("./qix-Wsz3JE_a.js") : import("./dist-DtYihfwd.js").then((mod) => mod.importRuntimeModule("qix@v1", hostConfig));
}
async function getInvokeFetchRuntimeModule(hostConfig) {
	await getAuthRuntimeModule(hostConfig);
	return !!globalThis.process?.argv ? import("./invoke-fetch-hML-5n7w.js") : import("./dist-DtYihfwd.js").then((mod) => mod.importRuntimeModule("invoke-fetch@v1", hostConfig));
}

//#endregion
export { getAuthRuntimeModule, getInvokeFetchRuntimeModule, getQixRuntimeModule };