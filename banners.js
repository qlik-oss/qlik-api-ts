import "./chunks/public-runtime-modules-QhLPeQr5.js";
import { n as invokeFetch, t as clearApiCache } from "./chunks/invoke-fetch-B7lGscuQ.js";

//#region src/public/rest/banners.ts
/**
* Retrieves announcement banner configuration for the tenant, including content, scheduling, and link information for display at the top of the client interface.
*
* @throws GetBannersHttpError
*/
async function getBanners(options) {
	return invokeFetch("banners", {
		method: "get",
		pathTemplate: "/api/v1/banners",
		options
	});
}
/**
* Sets content, scheduling, and optional action links for the tenant-wide announcement banner. Requires `TenantAdmin` role.
*
* @param body an object with the body content
* @throws UpsertBannersHttpError
*/
async function upsertBanners(body, options) {
	return invokeFetch("banners", {
		method: "post",
		pathTemplate: "/api/v1/banners/actions/upsert",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Clears the cache for banners api requests.
*/
function clearCache() {
	return clearApiCache("banners");
}
/**
* Functions for the banners api
*/
const bannersExport = {
	getBanners,
	upsertBanners,
	clearCache
};
var banners_default = bannersExport;

//#endregion
export { clearCache, banners_default as default, getBanners, upsertBanners };