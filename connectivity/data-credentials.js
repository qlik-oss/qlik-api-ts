import { t as __exportAll } from "../chunks/chunk-BdHzlgOL.js";
import { n as invokeFetch, t as clearApiCache } from "../chunks/invoke-fetch-C6eGdcjv.js";

//#region src/public/rest/connectivity/data-credentials.ts
var data_credentials_exports = /* @__PURE__ */ __exportAll({
	clearCache: () => clearCache,
	default: () => dataCredentialsExport,
	deleteDataCredential: () => deleteDataCredential,
	filterOrphanDataCredentials: () => filterOrphanDataCredentials,
	getDataCredential: () => getDataCredential,
	patchDataCredential: () => patchDataCredential,
	updateDataCredential: () => updateDataCredential
});
/**
* Use this operation to retrieve data credentials that are not associated with any data connection. Filter results by credential type, data source ID, or separation status using the request body.
*
* @param body an object with the body content
* @throws FilterOrphanDataCredentialsHttpError
*/
async function filterOrphanDataCredentials(body, options) {
	return invokeFetch("connectivity/data-credentials", {
		method: "post",
		pathTemplate: "/api/connectivity/data-credentials/actions/filter-orphan",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Use this operation to delete a data credential by its unique identifier. To delete a credential by name instead of ID, set the `byCredentialName` query parameter to `true`.
* @example
* deleteDataCredential(
*   "027d2703-e745-43ec-8876-a2e6ac341700",
*   {
*     byCredentialName: false
*   }
* )
*
* @param qID The unique identifier of the credential.
* @param query an object with query parameters
* @throws DeleteDataCredentialHttpError
*/
async function deleteDataCredential(qID, query, options) {
	return invokeFetch("connectivity/data-credentials", {
		method: "delete",
		pathTemplate: "/api/connectivity/data-credentials/{qID}",
		pathVariables: { qID },
		query,
		options
	});
}
/**
* Use this operation to retrieve a single data credential by its unique identifier. To look up a credential by name instead of ID, set the `byCredentialName` query parameter to `true`.
* @example
* getDataCredential(
*   "027d2703-e745-43ec-8876-a2e6ac341700",
*   {
*     byCredentialName: false
*   }
* )
*
* @param qID The unique identifier of the credential.
* @param query an object with query parameters
* @throws GetDataCredentialHttpError
*/
async function getDataCredential(qID, query, options) {
	return invokeFetch("connectivity/data-credentials", {
		method: "get",
		pathTemplate: "/api/connectivity/data-credentials/{qID}",
		pathVariables: { qID },
		query,
		options
	});
}
/**
* Use this operation to apply partial updates to a data credential using JSON Patch operations. To patch a credential by name instead of ID, set the `byCredentialName` query parameter to `true`.
*
* @param qID The unique identifier of the credential.
* @param query an object with query parameters
* @param body an object with the body content
* @throws PatchDataCredentialHttpError
*/
async function patchDataCredential(qID, query, body, options) {
	return invokeFetch("connectivity/data-credentials", {
		method: "patch",
		pathTemplate: "/api/connectivity/data-credentials/{qID}",
		pathVariables: { qID },
		query,
		body,
		contentType: "application/json",
		options
	});
}
/**
* Use this operation to replace an existing data credential with the values provided in the request body. To update a credential by name instead of ID, set the `byCredentialName` query parameter to `true`.
*
* @param qID The unique identifier of the credential.
* @param query an object with query parameters
* @param body an object with the body content
* @throws UpdateDataCredentialHttpError
*/
async function updateDataCredential(qID, query, body, options) {
	return invokeFetch("connectivity/data-credentials", {
		method: "put",
		pathTemplate: "/api/connectivity/data-credentials/{qID}",
		pathVariables: { qID },
		query,
		body,
		contentType: "application/json",
		options
	});
}
/**
* Clears the cache for connectivity/data-credentials api requests.
*/
function clearCache() {
	return clearApiCache("connectivity/data-credentials");
}
/**
* Functions for the data-credentials api
*/
const dataCredentialsExport = {
	filterOrphanDataCredentials,
	deleteDataCredential,
	getDataCredential,
	patchDataCredential,
	updateDataCredential,
	clearCache
};

//#endregion
export { clearCache, dataCredentialsExport as default, deleteDataCredential, filterOrphanDataCredentials, getDataCredential, patchDataCredential, data_credentials_exports as t, updateDataCredential };