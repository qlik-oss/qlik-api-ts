import "./chunks/public-runtime-modules-Dl6Qu08B.js";
import { n as invokeFetch, t as clearApiCache } from "./chunks/invoke-fetch-DqBb7hUC.js";

//#region src/public/rest/data-connections.ts
/**
* Gets a list of connections
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
*     sort: "+qName",
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
	return invokeFetch("data-connections", {
		method: "get",
		pathTemplate: "/api/v1/data-connections",
		query,
		options
	});
}
/**
* Creates a new connection. Depending on the fields defined in the request body, credentials embedded (or associated) in the connection can be updated or created.
*
* @param body an object with the body content
* @throws CreateDataConnectionHttpError
*/
async function createDataConnection(body, options) {
	return invokeFetch("data-connections", {
		method: "post",
		pathTemplate: "/api/v1/data-connections",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Delete multiple connections, only available to Admin
*
* @param body an object with the body content
* @throws DeleteDataConnectionsHttpError
*/
async function deleteDataConnections(body, options) {
	return invokeFetch("data-connections", {
		method: "post",
		pathTemplate: "/api/v1/data-connections/actions/delete",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Duplicate a connection
*
* @param body an object with the body content
* @throws DuplicateDataAConnectionHttpError
*/
async function duplicateDataAConnection(body, options) {
	return invokeFetch("data-connections", {
		method: "post",
		pathTemplate: "/api/v1/data-connections/actions/duplicate",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Update multiple connections, only available to Admin. When update is to change ownership of a connection, the credentials associated with the connection will NOT be transferred to the new owner, and new owner is expected to provide their own credentials for the connection.
*
* @param body an object with the body content
* @throws UpdateDataConnectionsHttpError
*/
async function updateDataConnections(body, options) {
	return invokeFetch("data-connections", {
		method: "post",
		pathTemplate: "/api/v1/data-connections/actions/update",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Deletes the specified data connection by ID (or by name when type=connectionname is set in query)
* @example
* deleteDataConnection(
*   "82ee7b44-0c4d-491b-bd38-82640c0430a5",
*   {
*     type: "connectionname",
*     spaceId: "611bcebaeec1203d88211ac4"
*   }
* )
*
* @param qID Connection ID
* @param query an object with query parameters
* @throws DeleteDataConnectionHttpError
*/
async function deleteDataConnection(qID, query, options) {
	return invokeFetch("data-connections", {
		method: "delete",
		pathTemplate: "/api/v1/data-connections/{qID}",
		pathVariables: { qID },
		query,
		options
	});
}
/**
* Retrieves a connection by connection ID, or by name when the query parameter "type" is set to "connectionname."
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
* @param qID Connection ID
* @param query an object with query parameters
* @throws GetDataConnectionHttpError
*/
async function getDataConnection(qID, query, options) {
	return invokeFetch("data-connections", {
		method: "get",
		pathTemplate: "/api/v1/data-connections/{qID}",
		pathVariables: { qID },
		query,
		options
	});
}
/**
* Patches a connection specified by connection ID (or by name when type=connectionname is set in query).
*
* @param qID Connection ID
* @param query an object with query parameters
* @param body an object with the body content
* @throws PatchDataConnectionHttpError
*/
async function patchDataConnection(qID, query, body, options) {
	return invokeFetch("data-connections", {
		method: "patch",
		pathTemplate: "/api/v1/data-connections/{qID}",
		pathVariables: { qID },
		query,
		body,
		contentType: "application/json",
		options
	});
}
/**
* Updates a connection specified by connection ID (or by name when type=connectionname is set in query). Depends on the fields defined in the request body, credentials embedded (or associated) in the connection can be updated or created.
*
* @param qID Connection ID
* @param query an object with query parameters
* @param body an object with the body content
* @throws UpdateDataConnectionHttpError
*/
async function updateDataConnection(qID, query, body, options) {
	return invokeFetch("data-connections", {
		method: "put",
		pathTemplate: "/api/v1/data-connections/{qID}",
		pathVariables: { qID },
		query,
		body,
		contentType: "application/json",
		options
	});
}
/**
* Clears the cache for data-connections api requests.
*/
function clearCache() {
	return clearApiCache("data-connections");
}
/**
* Functions for the data-connections api
*/
const dataConnectionsExport = {
	getDataConnections,
	createDataConnection,
	deleteDataConnections,
	duplicateDataAConnection,
	updateDataConnections,
	deleteDataConnection,
	getDataConnection,
	patchDataConnection,
	updateDataConnection,
	clearCache
};

//#endregion
export { clearCache, createDataConnection, dataConnectionsExport as default, deleteDataConnection, deleteDataConnections, duplicateDataAConnection, getDataConnection, getDataConnections, patchDataConnection, updateDataConnection, updateDataConnections };