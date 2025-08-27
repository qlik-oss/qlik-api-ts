import "./chunks/utils-CAGXTaqJ.js";
import "./chunks/public-runtime-modules-P9LEbn8i.js";
import { clearApiCache, invokeFetch } from "./chunks/invoke-fetch-09EW5w1d.js";

//#region src/public/rest/identity-providers.ts
/**
* This endpoint retrieves any IdPs registered on the tenant.
*
* @param query an object with query parameters
* @throws GetIdpsHttpError
*/
async function getIdps(query, options) {
	return invokeFetch("identity-providers", {
		method: "get",
		pathTemplate: "/api/v1/identity-providers",
		query,
		options
	});
}
/**
* Creates a new IdP on a tenant. Requesting user must be assigned the `TenantAdmin` role. For non-interactive IdPs (e.g. JWT), IdP must be created by sending `options` payload. For interactive IdPs (e.g. SAML or OIDC), send `pendingOptions` payload to require the interactive verification step; or send `options` payload with `skipVerify` set to `true` to skip validation step and make IdP immediately available.
*
* @param body an object with the body content
* @throws CreateIdpHttpError
*/
async function createIdp(body, options) {
	return invokeFetch("identity-providers", {
		method: "post",
		pathTemplate: "/api/v1/identity-providers",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Returns IdP configuration metadata supported on the tenant. Clients can use this information to programmatically configure their interactions with Qlik Cloud.
*
* @throws GetIdpWellKnownMetaDataHttpError
*/
async function getIdpWellKnownMetaData(options) {
	return invokeFetch("identity-providers", {
		method: "get",
		pathTemplate: "/api/v1/identity-providers/.well-known/metadata.json",
		options
	});
}
/**
* Retrieves default IdP metadata when no interactive IdP is enabled.
*
* @throws GetMyIdpMetaHttpError
*/
async function getMyIdpMeta(options) {
	return invokeFetch("identity-providers", {
		method: "get",
		pathTemplate: "/api/v1/identity-providers/me/meta",
		options
	});
}
/**
* Retrieves the status of all IdP configurations. Requires `TenantAdmin` role.
*
* @throws GetIdpStatusesHttpError
*/
async function getIdpStatuses(options) {
	return invokeFetch("identity-providers", {
		method: "get",
		pathTemplate: "/api/v1/identity-providers/status",
		options
	});
}
/**
* Deletes an identity provider. Requesting user must be assigned the `TenantAdmin` role.
*
* @param id The identity provider ID.
* @throws DeleteIdpHttpError
*/
async function deleteIdp(id, options) {
	return invokeFetch("identity-providers", {
		method: "delete",
		pathTemplate: "/api/v1/identity-providers/{id}",
		pathVariables: { id },
		options
	});
}
/**
* Retrieves a specific IdP. Requesting user must be assigned the `TenantAdmin` role.
*
* @param id The identity provider ID.
* @throws GetIdpHttpError
*/
async function getIdp(id, options) {
	return invokeFetch("identity-providers", {
		method: "get",
		pathTemplate: "/api/v1/identity-providers/{id}",
		pathVariables: { id },
		options
	});
}
/**
* Updates the configuration of an IdP. Requesting user must be assigned the `TenantAdmin` role. Partial failure is treated as complete failure and returns an error.
*
* @param id The identity provider ID.
* @param body an object with the body content
* @throws PatchIdpHttpError
*/
async function patchIdp(id, body, options) {
	return invokeFetch("identity-providers", {
		method: "patch",
		pathTemplate: "/api/v1/identity-providers/{id}",
		pathVariables: { id },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Clears the cache for identity-providers api requests.
*/
function clearCache() {
	return clearApiCache("identity-providers");
}
/**
* Functions for the identity-providers api
*/
const identityProvidersExport = {
	getIdps,
	createIdp,
	getIdpWellKnownMetaData,
	getMyIdpMeta,
	getIdpStatuses,
	deleteIdp,
	getIdp,
	patchIdp,
	clearCache
};
var identity_providers_default = identityProvidersExport;

//#endregion
export { clearCache, createIdp, identity_providers_default as default, deleteIdp, getIdp, getIdpStatuses, getIdpWellKnownMetaData, getIdps, getMyIdpMeta, patchIdp };