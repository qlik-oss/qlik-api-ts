import "./chunks/utils-UaAiVTcc.js";
import "./chunks/public-runtime-modules-C386fCsU.js";
import { n as invokeFetch, t as clearApiCache } from "./chunks/invoke-fetch-dW7RXRMD.js";

//#region src/public/rest/csp-origins.ts
/**
* Retrieves all content security policies for a tenant.
*
* @param query an object with query parameters
* @throws GetCSPEntriesHttpError
*/
async function getCSPEntries(query, options) {
	return invokeFetch("csp-origins", {
		method: "get",
		pathTemplate: "/api/v1/csp-origins",
		query,
		options
	});
}
/**
* Creates a new content security policy for an origin.
*
* @param body an object with the body content
* @throws CreateCSPEntryHttpError
*/
async function createCSPEntry(body, options) {
	return invokeFetch("csp-origins", {
		method: "post",
		pathTemplate: "/api/v1/csp-origins",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Retrieves the full content security policy header (including all configured policies and origins) for the tenant.
*
* @throws GetCSPHeaderHttpError
*/
async function getCSPHeader(options) {
	return invokeFetch("csp-origins", {
		method: "get",
		pathTemplate: "/api/v1/csp-origins/actions/generate-header",
		options
	});
}
/**
* Deletes a specific content security policy.
*
* @param id The CSP entry's unique identifier.
* @throws DeleteCSPEntryHttpError
*/
async function deleteCSPEntry(id, options) {
	return invokeFetch("csp-origins", {
		method: "delete",
		pathTemplate: "/api/v1/csp-origins/{id}",
		pathVariables: { id },
		options
	});
}
/**
* Returns details for a specific content security policy.
*
* @param id The CSP entry's unique identifier.
* @throws GetCSPEntryHttpError
*/
async function getCSPEntry(id, options) {
	return invokeFetch("csp-origins", {
		method: "get",
		pathTemplate: "/api/v1/csp-origins/{id}",
		pathVariables: { id },
		options
	});
}
/**
* Updates a content security policy.
*
* @param id The CSP entry's unique identifier.
* @param body an object with the body content
* @throws UpdateCSPEntryHttpError
*/
async function updateCSPEntry(id, body, options) {
	return invokeFetch("csp-origins", {
		method: "put",
		pathTemplate: "/api/v1/csp-origins/{id}",
		pathVariables: { id },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Clears the cache for csp-origins api requests.
*/
function clearCache() {
	return clearApiCache("csp-origins");
}
/**
* Functions for the csp-origins api
*/
const cspOriginsExport = {
	getCSPEntries,
	createCSPEntry,
	getCSPHeader,
	deleteCSPEntry,
	getCSPEntry,
	updateCSPEntry,
	clearCache
};
var csp_origins_default = cspOriginsExport;

//#endregion
export { clearCache, createCSPEntry, csp_origins_default as default, deleteCSPEntry, getCSPEntries, getCSPEntry, getCSPHeader, updateCSPEntry };