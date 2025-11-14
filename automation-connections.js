import "./chunks/utils-DI6bFnHB.js";
import "./chunks/public-runtime-modules-ubkNzy_K.js";
import { n as invokeFetch, t as clearApiCache } from "./chunks/invoke-fetch-DmsPYERB.js";

//#region src/public/rest/automation-connections.ts
/**
* Retrieves a list of automation connections
*
* @param query an object with query parameters
* @throws GetAutomationConnectionsHttpError
*/
async function getAutomationConnections(query, options) {
	return invokeFetch("automation-connections", {
		method: "get",
		pathTemplate: "/api/v1/automation-connections",
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
	return invokeFetch("automation-connections", {
		method: "post",
		pathTemplate: "/api/v1/automation-connections",
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
	return invokeFetch("automation-connections", {
		method: "delete",
		pathTemplate: "/api/v1/automation-connections/{id}",
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
	return invokeFetch("automation-connections", {
		method: "get",
		pathTemplate: "/api/v1/automation-connections/{id}",
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
	return invokeFetch("automation-connections", {
		method: "put",
		pathTemplate: "/api/v1/automation-connections/{id}",
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
	return invokeFetch("automation-connections", {
		method: "post",
		pathTemplate: "/api/v1/automation-connections/{id}/actions/change-owner",
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
	return invokeFetch("automation-connections", {
		method: "post",
		pathTemplate: "/api/v1/automation-connections/{id}/actions/change-space",
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
	return invokeFetch("automation-connections", {
		method: "post",
		pathTemplate: "/api/v1/automation-connections/{id}/actions/check",
		pathVariables: { id },
		options
	});
}
/**
* Clears the cache for automation-connections api requests.
*/
function clearCache() {
	return clearApiCache("automation-connections");
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
var automation_connections_default = automationConnectionsExport;

//#endregion
export { changeOwnerAutomationConnection, changeSpaceAutomationConnection, checkAutomationConnection, clearCache, createAutomationConnection, automation_connections_default as default, deleteAutomationConnection, getAutomationConnection, getAutomationConnections, updateAutomationConnection };