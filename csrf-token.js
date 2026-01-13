import "./chunks/public-runtime-modules-C7GMbX7E.js";
import { n as invokeFetch, t as clearApiCache } from "./chunks/invoke-fetch-CBsbPeVH.js";

//#region src/public/rest/csrf-token.ts
/**
* Returns CSRF token via the qlik-csrf-token header.
*
* @throws GetCsrfTokenHttpError
*/
async function getCsrfToken(options) {
	return invokeFetch("csrf-token", {
		method: "get",
		pathTemplate: "/api/v1/csrf-token",
		options
	});
}
/**
* Clears the cache for csrf-token api requests.
*/
function clearCache() {
	return clearApiCache("csrf-token");
}
/**
* Functions for the csrf-token api
*/
const csrfTokenExport = {
	getCsrfToken,
	clearCache
};
var csrf_token_default = csrfTokenExport;

//#endregion
export { clearCache, csrf_token_default as default, getCsrfToken };