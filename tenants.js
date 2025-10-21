import "./chunks/utils-DI6bFnHB.js";
import "./chunks/public-runtime-modules-C-9amT4R.js";
import { n as invokeFetch, t as clearApiCache } from "./chunks/invoke-fetch-CIrdtp97.js";

//#region src/public/rest/tenants.ts
/**
* Creates a tenant in the requested region, linked to the provided license key. You must use a regional OAuth client generated via the [My Qlik portal](https://account.myqlik.qlik.com/account) to call this endpoint. Tenant creation, deactivation, and reactivation requests must be sent to the register endpoint in the relevant Qlik Cloud region, e.g. `https://register.us.qlikcloud.com/api/v1/tenants` if interacting with tenants in the `us` region.
*
* @param body an object with the body content
* @throws CreateTenantHttpError
*/
async function createTenant(body, options) {
	return invokeFetch("tenants", {
		method: "post",
		pathTemplate: "/api/v1/tenants",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Redirects to current tenant.
*
* @throws GetMyTenantHttpError
*/
async function getMyTenant(options) {
	return invokeFetch("tenants", {
		method: "get",
		pathTemplate: "/api/v1/tenants/me",
		options
	});
}
/**
* Retrieves a specific tenant by ID.
*
* @param tenantId The ID of the tenant to retrieve
* @throws GetTenantHttpError
*/
async function getTenant(tenantId, options) {
	return invokeFetch("tenants", {
		method: "get",
		pathTemplate: "/api/v1/tenants/{tenantId}",
		pathVariables: { tenantId },
		options
	});
}
/**
* Updates properties of a specific tenant by ID.
*
* @param tenantId The ID of the tenant to update
* @param body an object with the body content
* @throws PatchTenantHttpError
*/
async function patchTenant(tenantId, body, options) {
	return invokeFetch("tenants", {
		method: "patch",
		pathTemplate: "/api/v1/tenants/{tenantId}",
		pathVariables: { tenantId },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Deactivates a specific tenant. Once deactivated, tenant will be deleted on or after `estimatedPurgeDate`. Tenant can be reactivated using `/v1/tenants/{tenantId}/actions/reactivate` until this date. You must use a regional OAuth client generated via the [My Qlik portal](https://account.myqlik.qlik.com/account) to call this endpoint. Tenant creation, deactivation, and reactivation requests must be sent to the register endpoint in the relevant Qlik Cloud region, e.g. `https://register.us.qlikcloud.com/api/v1/tenants/{tenantId}/actions/deactivate` if interacting with tenants in the `us` region.
*
* @param tenantId The id of the tenant to deactivate
* @param body an object with the body content
* @throws DeactivateTenantHttpError
*/
async function deactivateTenant(tenantId, body, options) {
	return invokeFetch("tenants", {
		method: "post",
		pathTemplate: "/api/v1/tenants/{tenantId}/actions/deactivate",
		pathVariables: { tenantId },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Reactivates a deactivated tenant. Tenants can be reactivated until the `estimatedPurgeDate` provided at time of deactivation. You must use a regional OAuth client generated via the [My Qlik portal](https://account.myqlik.qlik.com/account) to call this endpoint. Tenant creation, deactivation, and reactivation requests must be sent to the register endpoint in the relevant Qlik Cloud region, e.g. `https://register.us.qlikcloud.com/api/v1/tenants/{tenantId}/actions/reactivate` if interacting with tenants in the `us` region.
*
* @param tenantId The id of the tenant to reactivate
* @param body an object with the body content
* @throws ReactivateTenantHttpError
*/
async function reactivateTenant(tenantId, body, options) {
	return invokeFetch("tenants", {
		method: "post",
		pathTemplate: "/api/v1/tenants/{tenantId}/actions/reactivate",
		pathVariables: { tenantId },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Clears the cache for tenants api requests.
*/
function clearCache() {
	return clearApiCache("tenants");
}
/**
* Functions for the tenants api
*/
const tenantsExport = {
	createTenant,
	getMyTenant,
	getTenant,
	patchTenant,
	deactivateTenant,
	reactivateTenant,
	clearCache
};
var tenants_default = tenantsExport;

//#endregion
export { clearCache, createTenant, deactivateTenant, tenants_default as default, getMyTenant, getTenant, patchTenant, reactivateTenant };