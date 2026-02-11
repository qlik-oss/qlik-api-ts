import "./chunks/public-runtime-modules-2KfyI2qM.js";
import { n as invokeFetch, t as clearApiCache } from "./chunks/invoke-fetch-DMAi6Fg3.js";

//#region src/public/rest/tenant-settings.ts
/**
* Deletes the tenant settings associated with the tenant ID specified in JWT. This is access controlled by the permission admin.tenant-settings:delete.
*
* @throws DeleteTenantSettingsHttpError
*/
async function deleteTenantSettings(options) {
	return invokeFetch("tenant-settings", {
		method: "delete",
		pathTemplate: "/api/v1/tenant-settings",
		options
	});
}
/**
* Retrieves tenant settings associated with the tenant ID specified in JWT. This is access controlled by the permission admin.tenant-settings:read.
*
* @throws GetTenantSettingsHttpError
*/
async function getTenantSettings(options) {
	return invokeFetch("tenant-settings", {
		method: "get",
		pathTemplate: "/api/v1/tenant-settings",
		options
	});
}
/**
* Updates existing tenant settings. This is access controlled by the permission admin.tenant-settings:update.
*
* @param body an object with the body content
* @throws UpdateTenantSettingsHttpError
*/
async function updateTenantSettings(body, options) {
	return invokeFetch("tenant-settings", {
		method: "patch",
		pathTemplate: "/api/v1/tenant-settings",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Creates a new tenant settings entry for the tenant ID specified in the JWT. This is access controlled by the permission admin.tenant-settings:create.
*
* @param body an object with the body content
* @throws CreateTenantSettingsHttpError
*/
async function createTenantSettings(body, options) {
	return invokeFetch("tenant-settings", {
		method: "post",
		pathTemplate: "/api/v1/tenant-settings",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Sets the cross region inference setting for the tenant. Creates tenant settings if none exist, or updates existing settings. This is access controlled by the permission admin.tenant-settings:update.
* When cross-region processing is required, you must include an additional header x-qlik-consent-verified: true in your API requests to confirm that you have the authority to enable this feature and accept the associated terms.
*
* @param body an object with the body content
* @throws ToggleCrossRegionDataProcessingTenantSettingsHttpError
*/
async function toggleCrossRegionDataProcessingTenantSettings(body, options) {
	return invokeFetch("tenant-settings", {
		method: "post",
		pathTemplate: "/api/v1/tenant-settings/actions/toggle-cross-region-data-processing",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Retrieves start pages for the tenant settings.
*
* @throws GetStartPagesHttpError
*/
async function getStartPages(options) {
	return invokeFetch("tenant-settings", {
		method: "get",
		pathTemplate: "/api/v1/tenant-settings/start-pages",
		options
	});
}
/**
* Clears the cache for tenant-settings api requests.
*/
function clearCache() {
	return clearApiCache("tenant-settings");
}
/**
* Functions for the tenant-settings api
*/
const tenantSettingsExport = {
	deleteTenantSettings,
	getTenantSettings,
	updateTenantSettings,
	createTenantSettings,
	toggleCrossRegionDataProcessingTenantSettings,
	getStartPages,
	clearCache
};

//#endregion
export { clearCache, createTenantSettings, tenantSettingsExport as default, deleteTenantSettings, getStartPages, getTenantSettings, toggleCrossRegionDataProcessingTenantSettings, updateTenantSettings };