import { t as __exportAll } from "../chunks/chunk-w6R9maHv.js";
import { n as invokeFetch, t as clearApiCache } from "../chunks/invoke-fetch-CpHbSqJB.js";

//#region src/public/rest/connectivity/data-connections.ts
var data_connections_exports = /* @__PURE__ */ __exportAll({
	clearCache: () => clearCache,
	createDataConnection: () => createDataConnection,
	default: () => dataConnectionsExport,
	deleteDataConnection: () => deleteDataConnection,
	deleteDataConnections: () => deleteDataConnections,
	duplicateDataConnections: () => duplicateDataConnections,
	getDataConnection: () => getDataConnection,
	getDataConnections: () => getDataConnections,
	patchDataConnection: () => patchDataConnection,
	updateDataConnection: () => updateDataConnection,
	updateDataConnections: () => updateDataConnections
});
/**
* Use this operation to retrieve a list of data connections available to the caller. Results are filtered based on the caller's space access permissions. Use the `spaceId`, `personal`, or `filter` parameters to narrow results to a specific scope.
* @example
* getDataConnections(
*   {
*     dataName: "data",
*     extended: false,
*     spaceId: "611bcebaeec1203d88211ac4",
*     personal: false,
*     owner: "928e2a66-01ba-4678-aa32-e74c213896fa",
*     ownedByMe: true,
*     limit: 30,
*     page: "page=JwAAAAljcmVhdGVkAPfQ-sx0AQAAB19pZABfb93nZcM4SN1M0e8A",
*     noDatafiles: true,
*     userId: "6K9xjsItDexffolu5vg1oWYkY8x7f-0G",
*     caseinsensitive: true,
*     locale: "en",
*     includeQris: true,
*     includeDisabled: true
*   }
* )
*
* @param query an object with query parameters
* @throws GetDataConnectionsHttpError
*/
async function getDataConnections(query, options) {
	return invokeFetch("connectivity/data-connections", {
		method: "get",
		pathTemplate: "/api/connectivity/data-connections",
		query,
		options
	});
}
/**
* Use this operation to create a new data connection in your tenant. Depending on the fields provided in the request body, credentials embedded in or associated with the connection are created or updated alongside the connection.
*
* @param body an object with the body content
* @throws CreateDataConnectionHttpError
*/
async function createDataConnection(body, options) {
	return invokeFetch("connectivity/data-connections", {
		method: "post",
		pathTemplate: "/api/connectivity/data-connections",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Use this operation to delete multiple data connections in a single request. Requires the Admin role. Returns a 207 Multi-Status response indicating the outcome for each connection in the request.
*
* @param body an object with the body content
* @throws DeleteDataConnectionsHttpError
*/
async function deleteDataConnections(body, options) {
	return invokeFetch("connectivity/data-connections", {
		method: "post",
		pathTemplate: "/api/connectivity/data-connections/actions/delete",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Use this operation to create a copy of an existing data connection. The duplicated connection can optionally be placed in a different space by specifying `spaceId`. You can override the credentials in the duplicate by providing `qUsername` and `qPassword` in the request body.
*
* @param body an object with the body content
* @throws DuplicateDataConnectionsHttpError
*/
async function duplicateDataConnections(body, options) {
	return invokeFetch("connectivity/data-connections", {
		method: "post",
		pathTemplate: "/api/connectivity/data-connections/actions/duplicate",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Use this operation to update multiple data connections in a single request. Requires the Admin role. Returns a 207 Multi-Status response with the outcome for each connection. When transferring ownership, credentials associated with the connection are not automatically transferred to the new owner; the new owner must provide their own credentials.
*
* @param body an object with the body content
* @throws UpdateDataConnectionsHttpError
*/
async function updateDataConnections(body, options) {
	return invokeFetch("connectivity/data-connections", {
		method: "post",
		pathTemplate: "/api/connectivity/data-connections/actions/update",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Use this operation to delete a data connection by its unique identifier. To delete a connection by name instead of ID, set the `type` query parameter to `connectionname`. This action cannot be undone.
* @example
* deleteDataConnection(
*   "82ee7b44-0c4d-491b-bd38-82640c0430a5",
*   {
*     type: "connectionname",
*     spaceId: "611bcebaeec1203d88211ac4"
*   }
* )
*
* @param qID The unique identifier of the connection.
* @param query an object with query parameters
* @throws DeleteDataConnectionHttpError
*/
async function deleteDataConnection(qID, query, options) {
	return invokeFetch("connectivity/data-connections", {
		method: "delete",
		pathTemplate: "/api/connectivity/data-connections/{qID}",
		pathVariables: { qID },
		query,
		options
	});
}
/**
* Use this operation to retrieve a single data connection by its unique identifier. To look up a connection by name instead of ID, set the `type` query parameter to `connectionname`. Returns the full connection object including the caller's access privileges.
* @example
* getDataConnection(
*   "82ee7b44-0c4d-491b-bd38-82640c0430a5",
*   {
*     extended: false,
*     type: "connectionname",
*     credentialId: "22379dc5-076e-4fec-ae20-5529a8a57dc2",
*     byCredentialName: false,
*     spaceId: "611bcebaeec1203d88211ac4",
*     noCache: false,
*     parseConnection: true
*   }
* )
*
* @param qID The unique identifier of the connection.
* @param query an object with query parameters
* @throws GetDataConnectionHttpError
*/
async function getDataConnection(qID, query, options) {
	return invokeFetch("connectivity/data-connections", {
		method: "get",
		pathTemplate: "/api/connectivity/data-connections/{qID}",
		pathVariables: { qID },
		query,
		options
	});
}
/**
* Use this operation to apply partial updates to a data connection using JSON Patch operations. To patch a connection by name instead of ID, set the `type` query parameter to `connectionname`. Some data sources require an OAuth authentication code; provide it using the `qlik-auth-code` request header.
*
* @param qID The unique identifier of the connection.
* @param query an object with query parameters
* @param body an object with the body content
* @throws PatchDataConnectionHttpError
*/
async function patchDataConnection(qID, query, body, options) {
	return invokeFetch("connectivity/data-connections", {
		method: "patch",
		pathTemplate: "/api/connectivity/data-connections/{qID}",
		pathVariables: { qID },
		query,
		body,
		contentType: "application/json",
		options
	});
}
/**
* Use this operation to replace a data connection with the values provided in the request body. All required fields must be included. To update a connection by name instead of ID, set the `type` query parameter to `connectionname`. Credentials embedded in or associated with the connection are created or updated based on the fields provided.
*
* @param qID The unique identifier of the connection.
* @param query an object with query parameters
* @param body an object with the body content
* @throws UpdateDataConnectionHttpError
*/
async function updateDataConnection(qID, query, body, options) {
	return invokeFetch("connectivity/data-connections", {
		method: "put",
		pathTemplate: "/api/connectivity/data-connections/{qID}",
		pathVariables: { qID },
		query,
		body,
		contentType: "application/json",
		options
	});
}
/**
* Clears the cache for connectivity/data-connections api requests.
*/
function clearCache() {
	return clearApiCache("connectivity/data-connections");
}
/**
* Functions for the data-connections api
*/
const dataConnectionsExport = {
	getDataConnections,
	createDataConnection,
	deleteDataConnections,
	duplicateDataConnections,
	updateDataConnections,
	deleteDataConnection,
	getDataConnection,
	patchDataConnection,
	updateDataConnection,
	clearCache
};

//#endregion
export { clearCache, createDataConnection, dataConnectionsExport as default, deleteDataConnection, deleteDataConnections, duplicateDataConnections, getDataConnection, getDataConnections, patchDataConnection, data_connections_exports as t, updateDataConnection, updateDataConnections };