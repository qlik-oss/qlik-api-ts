import { t as __exportAll } from "../chunks/chunk-BdHzlgOL.js";
import "../chunks/public-runtime-modules-mBjjPn7I.js";
import { n as invokeFetch, t as clearApiCache } from "../chunks/invoke-fetch-DxtIsSVQ.js";

//#region src/public/rest/workflows/automation-connections.ts
var automation_connections_exports = /* @__PURE__ */ __exportAll({
	changeOwnerAutomationConnection: () => changeOwnerAutomationConnection,
	changeSpaceAutomationConnection: () => changeSpaceAutomationConnection,
	checkAutomationConnection: () => checkAutomationConnection,
	clearCache: () => clearCache,
	createAutomationConnection: () => createAutomationConnection,
	default: () => automationConnectionsExport,
	deleteAutomationConnection: () => deleteAutomationConnection,
	getAutomationConnection: () => getAutomationConnection,
	getAutomationConnections: () => getAutomationConnections,
	updateAutomationConnection: () => updateAutomationConnection
});
/**
* Retrieves a list of automation connections the requesting user has access to.
*
* @param query an object with query parameters
* @throws GetAutomationConnectionsHttpError
*/
async function getAutomationConnections(query, options) {
	return invokeFetch("workflows/automation-connections", {
		method: "get",
		pathTemplate: "/api/workflows/automation-connections",
		query,
		options
	});
}
/**
* Creates a new connection object from an automation connector.
*
* @param body an object with the body content
* @throws CreateAutomationConnectionHttpError
*/
async function createAutomationConnection(body, options) {
	return invokeFetch("workflows/automation-connections", {
		method: "post",
		pathTemplate: "/api/workflows/automation-connections",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Deletes the specified automation connection.
*
* @param id The unique identifier for the automation connection.
* @param query an object with query parameters
* @throws DeleteAutomationConnectionHttpError
*/
async function deleteAutomationConnection(id, query, options) {
	return invokeFetch("workflows/automation-connections", {
		method: "delete",
		pathTemplate: "/api/workflows/automation-connections/{id}",
		pathVariables: { id },
		query,
		options
	});
}
/**
* Returns details about the specified automation connection.
*
* @param id The unique identifier for the automation connection.
* @throws GetAutomationConnectionHttpError
*/
async function getAutomationConnection(id, options) {
	return invokeFetch("workflows/automation-connections", {
		method: "get",
		pathTemplate: "/api/workflows/automation-connections/{id}",
		pathVariables: { id },
		options
	});
}
/**
* Updates the specified properties of an automation connection.
*
* @param id The unique identifier for the automation connection.
* @param body an object with the body content
* @throws UpdateAutomationConnectionHttpError
*/
async function updateAutomationConnection(id, body, options) {
	return invokeFetch("workflows/automation-connections", {
		method: "put",
		pathTemplate: "/api/workflows/automation-connections/{id}",
		pathVariables: { id },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Changes the owner of an automation connection by specifying a new owner.
*
* @param id The unique identifier for the automation connection.
* @param body an object with the body content
* @throws ChangeOwnerAutomationConnectionHttpError
*/
async function changeOwnerAutomationConnection(id, body, options) {
	return invokeFetch("workflows/automation-connections", {
		method: "post",
		pathTemplate: "/api/workflows/automation-connections/{id}/actions/change-owner",
		pathVariables: { id },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Changes the space of an automation connection by specifying a new space.
*
* @param id The unique identifier for the automation connection.
* @param body an object with the body content
* @throws ChangeSpaceAutomationConnectionHttpError
*/
async function changeSpaceAutomationConnection(id, body, options) {
	return invokeFetch("workflows/automation-connections", {
		method: "post",
		pathTemplate: "/api/workflows/automation-connections/{id}/actions/change-space",
		pathVariables: { id },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Tries to validate and checks the connection status of an automation connection.
*
* @param id The unique identifier for the automation connection.
* @throws CheckAutomationConnectionHttpError
*/
async function checkAutomationConnection(id, options) {
	return invokeFetch("workflows/automation-connections", {
		method: "post",
		pathTemplate: "/api/workflows/automation-connections/{id}/actions/check",
		pathVariables: { id },
		options
	});
}
/**
* Clears the cache for workflows/automation-connections api requests.
*/
function clearCache() {
	return clearApiCache("workflows/automation-connections");
}
/**
* Functions for the automation-connections api
*/
const automationConnectionsExport = {
	getAutomationConnections,
	createAutomationConnection,
	deleteAutomationConnection,
	getAutomationConnection,
	updateAutomationConnection,
	changeOwnerAutomationConnection,
	changeSpaceAutomationConnection,
	checkAutomationConnection,
	clearCache
};

//#endregion
export { changeOwnerAutomationConnection, changeSpaceAutomationConnection, checkAutomationConnection, clearCache, createAutomationConnection, automationConnectionsExport as default, deleteAutomationConnection, getAutomationConnection, getAutomationConnections, automation_connections_exports as t, updateAutomationConnection };