import "./chunks/utils-qEQ6sEXX.js";
import "./chunks/public-runtime-modules-CNGnt1rU.js";
import { clearApiCache, invokeFetch } from "./chunks/invoke-fetch-DbVuX5mE.js";

//#region src/public/rest/audits.ts
/**
* Retrieves list of events for subscribed services for your tenant. Stores events for 90 days, after which they can be accessed via `/v1/audits/archive`.
*
* @param query an object with query parameters
* @throws GetAuditsHttpError
*/
async function getAudits(query, options) {
	return invokeFetch("audits", {
		method: "get",
		pathTemplate: "/api/v1/audits",
		query,
		options
	});
}
/**
* Retrieves audit events from long term storage. Finds and returns audit events from the archive, formatted as a JSON array, for the given date and tenant (in JWT). Archived events are not removed.
*
* @param query an object with query parameters
* @throws GetArchivedAuditsHttpError
*/
async function getArchivedAudits(query, options) {
	return invokeFetch("audits", {
		method: "get",
		pathTemplate: "/api/v1/audits/archive",
		query,
		options
	});
}
/**
* Returns the server configuration options. It includes options that represent the server configuration state and parameters that were used to run the server with certain functionality.
*
* @throws GetAuditsSettingsHttpError
*/
async function getAuditsSettings(options) {
	return invokeFetch("audits", {
		method: "get",
		pathTemplate: "/api/v1/audits/settings",
		options
	});
}
/**
* Finds and returns the list of possible event sources for this tenant.
*
* @throws GetAuditSourcesHttpError
*/
async function getAuditSources(options) {
	return invokeFetch("audits", {
		method: "get",
		pathTemplate: "/api/v1/audits/sources",
		options
	});
}
/**
* Finds and returns the list of possible event types for this tenant.
*
* @throws GetAuditTypesHttpError
*/
async function getAuditTypes(options) {
	return invokeFetch("audits", {
		method: "get",
		pathTemplate: "/api/v1/audits/types",
		options
	});
}
/**
* Finds and returns a specific audit events for the given event ID.
*
* @param id The audit item's unique identifier.
* @throws GetAuditHttpError
*/
async function getAudit(id, options) {
	return invokeFetch("audits", {
		method: "get",
		pathTemplate: "/api/v1/audits/{id}",
		pathVariables: { id },
		options
	});
}
/**
* Clears the cache for audits api requests.
*/
function clearCache() {
	return clearApiCache("audits");
}
/**
* Functions for the audits api
*/
const auditsExport = {
	getAudits,
	getArchivedAudits,
	getAuditsSettings,
	getAuditSources,
	getAuditTypes,
	getAudit,
	clearCache
};
var audits_default = auditsExport;

//#endregion
export { clearCache, audits_default as default, getArchivedAudits, getAudit, getAuditSources, getAuditTypes, getAudits, getAuditsSettings };