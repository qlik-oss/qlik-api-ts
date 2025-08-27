import "./chunks/utils-CAGXTaqJ.js";
import "./chunks/public-runtime-modules-P9LEbn8i.js";
import { clearApiCache, invokeFetch } from "./chunks/invoke-fetch-09EW5w1d.js";

//#region src/public/rest/api-keys.ts
/**
* Lists API keys for the tenant. To list API keys owned by other users, requesting user must be assigned the `TenantAdmin` role.
*
* @param query an object with query parameters
* @throws GetApiKeysHttpError
*/
async function getApiKeys(query, options) {
	return invokeFetch("api-keys", {
		method: "get",
		pathTemplate: "/api/v1/api-keys",
		query,
		options
	});
}
/**
* Creates an API key, either for a user, or for configuring SCIM for a compatible Identity Provider.
* Sending `sub` and `subType` is required only for creating SCIM keys.
*
* @param body an object with the body content
* @throws CreateApiKeyHttpError
*/
async function createApiKey(body, options) {
	return invokeFetch("api-keys", {
		method: "post",
		pathTemplate: "/api/v1/api-keys",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Retrieves the API key configuration for a tenant.
*
* @param tenantId The tenant ID from which you wish to retrieve the API key configuration.
* @throws GetApiKeysConfigHttpError
*/
async function getApiKeysConfig(tenantId, options) {
	return invokeFetch("api-keys", {
		method: "get",
		pathTemplate: "/api/v1/api-keys/configs/{tenantId}",
		pathVariables: { tenantId },
		options
	});
}
/**
* Updates the API keys configuration for a given tenant ID.
*
* @param tenantId The tenant ID of the API keys configuration to be retrieved.
* @param body an object with the body content
* @throws PatchApiKeysConfigHttpError
*/
async function patchApiKeysConfig(tenantId, body, options) {
	return invokeFetch("api-keys", {
		method: "patch",
		pathTemplate: "/api/v1/api-keys/configs/{tenantId}",
		pathVariables: { tenantId },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Deletes or revokes an API key for a given API key ID. When the owner of the API key sends the request, the key will be deleted and removed from the tenant. When a user assigned the `TenantAdmin` role sends the request, the key will be disabled and marked as revoked.
*
* @param id The ID of the API key to be retrieved.
* @throws DeleteApiKeyHttpError
*/
async function deleteApiKey(id, options) {
	return invokeFetch("api-keys", {
		method: "delete",
		pathTemplate: "/api/v1/api-keys/{id}",
		pathVariables: { id },
		options
	});
}
/**
* Returns the API key for a given API key ID.
*
* @param id The ID of the API key to be retrieved.
* @throws GetApiKeyHttpError
*/
async function getApiKey(id, options) {
	return invokeFetch("api-keys", {
		method: "get",
		pathTemplate: "/api/v1/api-keys/{id}",
		pathVariables: { id },
		options
	});
}
/**
* Updates an API key description for a given API key ID.
*
* @param id The ID of the API key resource to be updated.
* @param body an object with the body content
* @throws PatchApiKeyHttpError
*/
async function patchApiKey(id, body, options) {
	return invokeFetch("api-keys", {
		method: "patch",
		pathTemplate: "/api/v1/api-keys/{id}",
		pathVariables: { id },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Clears the cache for api-keys api requests.
*/
function clearCache() {
	return clearApiCache("api-keys");
}
/**
* Functions for the api-keys api
*/
const apiKeysExport = {
	getApiKeys,
	createApiKey,
	getApiKeysConfig,
	patchApiKeysConfig,
	deleteApiKey,
	getApiKey,
	patchApiKey,
	clearCache
};
var api_keys_default = apiKeysExport;

//#endregion
export { clearCache, createApiKey, api_keys_default as default, deleteApiKey, getApiKey, getApiKeys, getApiKeysConfig, patchApiKey, patchApiKeysConfig };