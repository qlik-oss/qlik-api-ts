import "./chunks/public-runtime-modules-QhLPeQr5.js";
import { n as invokeFetch, t as clearApiCache } from "./chunks/invoke-fetch-B7lGscuQ.js";

//#region src/public/rest/ui-config.ts
/**
* Retrieves a list of all pinned links. All users can list pinned links. This endpoint does not support pagination as a tenant can have a maximum of 50 pinned links at one time.
*
* @throws GetUiConfigPinnedLinksHttpError
*/
async function getUiConfigPinnedLinks(options) {
	return invokeFetch("ui-config", {
		method: "get",
		pathTemplate: "/api/v1/ui-config/pinned-links",
		options
	});
}
/**
* Creates a pinned link, which will appear below any existing pinned links in the tenant. Requires calling user to be assigned the `TenantAdmin` role. A tenant can have a maximum of 50 pinned links.
*
* @param body an object with the body content
* @throws CreateUiConfigPinnedLinkHttpError
*/
async function createUiConfigPinnedLink(body, options) {
	return invokeFetch("ui-config", {
		method: "post",
		pathTemplate: "/api/v1/ui-config/pinned-links",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Creates one or more pinned links for navigation, an alternative method to multiple calls to `/ui-config/pinned-links`. Links are displayed below any existing pinned links, and will be added in the order sent in the request. Requires calling user to be assigned the `TenantAdmin` role. A tenant can have a maximum of 50 pinned links.
*
* @param body an object with the body content
* @throws CreateUiConfigPinnedLinksHttpError
*/
async function createUiConfigPinnedLinks(body, options) {
	return invokeFetch("ui-config", {
		method: "post",
		pathTemplate: "/api/v1/ui-config/pinned-links/actions/bulk-create-pinned-links",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Deletes all pinned links in the tenant. Requires calling user to be assigned the `TenantAdmin` role.
*
* @throws DeleteAllUiConfigPinnedLinksHttpError
*/
async function deleteAllUiConfigPinnedLinks(options) {
	return invokeFetch("ui-config", {
		method: "post",
		pathTemplate: "/api/v1/ui-config/pinned-links/actions/delete-all-pinned-links",
		options
	});
}
/**
* Deletes a specific pinned link. Requires calling user to be assigned the `TenantAdmin` role.
*
* @param id The pinned link identifier.
* @throws DeleteUiConfigPinnedLinkHttpError
*/
async function deleteUiConfigPinnedLink(id, options) {
	return invokeFetch("ui-config", {
		method: "delete",
		pathTemplate: "/api/v1/ui-config/pinned-links/{id}",
		pathVariables: { id },
		options
	});
}
/**
* Retrieves a specific pinned link.
*
* @param id The pinned link identifier.
* @throws GetUiConfigPinnedLinkHttpError
*/
async function getUiConfigPinnedLink(id, options) {
	return invokeFetch("ui-config", {
		method: "get",
		pathTemplate: "/api/v1/ui-config/pinned-links/{id}",
		pathVariables: { id },
		options
	});
}
/**
* Updates a specific pinned link with an array of JSON patches. Requires calling user to be assigned the `TenantAdmin` role.
*
* @param id The pinned link identifier.
* @param body an object with the body content
* @throws PatchUiConfigPinnedLinkHttpError
*/
async function patchUiConfigPinnedLink(id, body, options) {
	return invokeFetch("ui-config", {
		method: "patch",
		pathTemplate: "/api/v1/ui-config/pinned-links/{id}",
		pathVariables: { id },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Clears the cache for ui-config api requests.
*/
function clearCache() {
	return clearApiCache("ui-config");
}
/**
* Functions for the ui-config api
*/
const uiConfigExport = {
	getUiConfigPinnedLinks,
	createUiConfigPinnedLink,
	createUiConfigPinnedLinks,
	deleteAllUiConfigPinnedLinks,
	deleteUiConfigPinnedLink,
	getUiConfigPinnedLink,
	patchUiConfigPinnedLink,
	clearCache
};
var ui_config_default = uiConfigExport;

//#endregion
export { clearCache, createUiConfigPinnedLink, createUiConfigPinnedLinks, ui_config_default as default, deleteAllUiConfigPinnedLinks, deleteUiConfigPinnedLink, getUiConfigPinnedLink, getUiConfigPinnedLinks, patchUiConfigPinnedLink };