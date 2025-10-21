import "./chunks/utils-DI6bFnHB.js";
import "./chunks/public-runtime-modules-C-9amT4R.js";
import { n as invokeFetch, t as clearApiCache } from "./chunks/invoke-fetch-CIrdtp97.js";

//#region src/public/rest/web-integrations.ts
/**
* Retrieves web integrations matching the query.
*
* @param query an object with query parameters
* @throws GetWebIntegrationsHttpError
*/
async function getWebIntegrations(query, options) {
	return invokeFetch("web-integrations", {
		method: "get",
		pathTemplate: "/api/v1/web-integrations",
		query,
		options
	});
}
/**
* Creates a web integration.
*
* @param body an object with the body content
* @throws CreateWebIntegrationHttpError
*/
async function createWebIntegration(body, options) {
	return invokeFetch("web-integrations", {
		method: "post",
		pathTemplate: "/api/v1/web-integrations",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Deletes a single web integration by ID.
*
* @param id The ID of the web integration to delete.
* @throws DeleteWebIntegrationHttpError
*/
async function deleteWebIntegration(id, options) {
	return invokeFetch("web-integrations", {
		method: "delete",
		pathTemplate: "/api/v1/web-integrations/{id}",
		pathVariables: { id },
		options
	});
}
/**
* Retrieves a single web integration by ID.
*
* @param id The ID of the web integration to retrieve.
* @throws GetWebIntegrationHttpError
*/
async function getWebIntegration(id, options) {
	return invokeFetch("web-integrations", {
		method: "get",
		pathTemplate: "/api/v1/web-integrations/{id}",
		pathVariables: { id },
		options
	});
}
/**
* Updates a single web integration by ID.
*
* @param id The ID of the web integration to update.
* @param body an object with the body content
* @throws PatchWebIntegrationHttpError
*/
async function patchWebIntegration(id, body, options) {
	return invokeFetch("web-integrations", {
		method: "patch",
		pathTemplate: "/api/v1/web-integrations/{id}",
		pathVariables: { id },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Clears the cache for web-integrations api requests.
*/
function clearCache() {
	return clearApiCache("web-integrations");
}
/**
* Functions for the web-integrations api
*/
const webIntegrationsExport = {
	getWebIntegrations,
	createWebIntegration,
	deleteWebIntegration,
	getWebIntegration,
	patchWebIntegration,
	clearCache
};
var web_integrations_default = webIntegrationsExport;

//#endregion
export { clearCache, createWebIntegration, web_integrations_default as default, deleteWebIntegration, getWebIntegration, getWebIntegrations, patchWebIntegration };