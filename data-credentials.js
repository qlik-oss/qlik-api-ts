import "./chunks/utils-DI6bFnHB.js";
import "./chunks/public-runtime-modules-ubkNzy_K.js";
import { n as invokeFetch, t as clearApiCache } from "./chunks/invoke-fetch-DmsPYERB.js";

//#region src/public/rest/data-credentials.ts
/**
* Gets list of orphan data credentials (i.e. credentials that are not associated to any data connection) filtering on properties defined in request body
*
* @param body an object with the body content
* @throws FilterOrphanedDataCredentialsHttpError
*/
async function filterOrphanedDataCredentials(body, options) {
	return invokeFetch("data-credentials", {
		method: "post",
		pathTemplate: "/api/v1/data-credentials/actions/filter-orphan",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Deletes the specified credential by ID (or by name when type=credentialname is set in query)
* @example
* deleteDataCredential(
*   "027d2703-e745-43ec-8876-a2e6ac341700",
*   {
*     byCredentialName: false
*   }
* )
*
* @param qID Credential ID
* @param query an object with query parameters
* @throws DeleteDataCredentialHttpError
*/
async function deleteDataCredential(qID, query, options) {
	return invokeFetch("data-credentials", {
		method: "delete",
		pathTemplate: "/api/v1/data-credentials/{qID}",
		pathVariables: { qID },
		query,
		options
	});
}
/**
* Gets a credential by ID (or by name when bycredentialname=true is set in query)
* @example
* getDataCredential(
*   "027d2703-e745-43ec-8876-a2e6ac341700",
*   {
*     byCredentialName: false
*   }
* )
*
* @param qID Credential ID
* @param query an object with query parameters
* @throws GetDataCredentialHttpError
*/
async function getDataCredential(qID, query, options) {
	return invokeFetch("data-credentials", {
		method: "get",
		pathTemplate: "/api/v1/data-credentials/{qID}",
		pathVariables: { qID },
		query,
		options
	});
}
/**
* Patches a credential specified by ID (or by name when bycredentialname=true is set in query)
*
* @param qID Credential ID
* @param query an object with query parameters
* @param body an object with the body content
* @throws PatchDataCredentialHttpError
*/
async function patchDataCredential(qID, query, body, options) {
	return invokeFetch("data-credentials", {
		method: "patch",
		pathTemplate: "/api/v1/data-credentials/{qID}",
		pathVariables: { qID },
		query,
		body,
		contentType: "application/json",
		options
	});
}
/**
* Updates a credential specified by ID (or by name when bycredentialname=true is set in query)
*
* @param qID Credential ID
* @param query an object with query parameters
* @param body an object with the body content
* @throws UpdateDataCredentialHttpError
*/
async function updateDataCredential(qID, query, body, options) {
	return invokeFetch("data-credentials", {
		method: "put",
		pathTemplate: "/api/v1/data-credentials/{qID}",
		pathVariables: { qID },
		query,
		body,
		contentType: "application/json",
		options
	});
}
/**
* Clears the cache for data-credentials api requests.
*/
function clearCache() {
	return clearApiCache("data-credentials");
}
/**
* Functions for the data-credentials api
*/
const dataCredentialsExport = {
	filterOrphanedDataCredentials,
	deleteDataCredential,
	getDataCredential,
	patchDataCredential,
	updateDataCredential,
	clearCache
};
var data_credentials_default = dataCredentialsExport;

//#endregion
export { clearCache, data_credentials_default as default, deleteDataCredential, filterOrphanedDataCredentials, getDataCredential, patchDataCredential, updateDataCredential };