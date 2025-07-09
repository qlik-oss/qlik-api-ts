import "./chunks/utils-qEQ6sEXX.js";
import "./chunks/public-runtime-modules-lsJEDVxt.js";
import { clearApiCache, invokeFetch } from "./chunks/invoke-fetch-B-ZucHu9.js";

//#region src/public/rest/licenses.ts
/**
* Retrieves assignments for the current tenant
*
* @param query an object with query parameters
* @throws GetLicenseAssignmentsHttpError
*/
async function getLicenseAssignments(query, options) {
	return invokeFetch("licenses", {
		method: "get",
		pathTemplate: "/api/v1/licenses/assignments",
		query,
		options
	});
}
/**
* Assigns license access to the given users
*
* @param body an object with the body content
* @throws AddLicenseAssignmentsHttpError
*/
async function addLicenseAssignments(body, options) {
	return invokeFetch("licenses", {
		method: "post",
		pathTemplate: "/api/v1/licenses/assignments/actions/add",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Removes license access for the given users
*
* @param body an object with the body content
* @throws DeleteLicenseAssignmentsHttpError
*/
async function deleteLicenseAssignments(body, options) {
	return invokeFetch("licenses", {
		method: "post",
		pathTemplate: "/api/v1/licenses/assignments/actions/delete",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Updates license access for the given users
*
* @param body an object with the body content
* @throws UpdateLicenseAssignmentsHttpError
*/
async function updateLicenseAssignments(body, options) {
	return invokeFetch("licenses", {
		method: "post",
		pathTemplate: "/api/v1/licenses/assignments/actions/update",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Retrieves license consumption for the current tenant
*
* @param query an object with query parameters
* @throws GetLicenseConsumptionHttpError
*/
async function getLicenseConsumption(query, options) {
	return invokeFetch("licenses", {
		method: "get",
		pathTemplate: "/api/v1/licenses/consumption",
		query,
		options
	});
}
/**
* Gets the general information of the license applied to the current tenant
*
* @throws GetLicenseOverviewHttpError
*/
async function getLicenseOverview(options) {
	return invokeFetch("licenses", {
		method: "get",
		pathTemplate: "/api/v1/licenses/overview",
		options
	});
}
/**
* Get auto assign settings for tenant.
*
* @throws GetLicenseSettingsHttpError
*/
async function getLicenseSettings(options) {
	return invokeFetch("licenses", {
		method: "get",
		pathTemplate: "/api/v1/licenses/settings",
		options
	});
}
/**
* Set auto assign settings for tenant
*
* @param body an object with the body content
* @throws UpdateLicenseSettingsHttpError
*/
async function updateLicenseSettings(body, options) {
	return invokeFetch("licenses", {
		method: "put",
		pathTemplate: "/api/v1/licenses/settings",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Gets the license status information of the current tenant
*
* @throws GetLicenseStatusHttpError
*/
async function getLicenseStatus(options) {
	return invokeFetch("licenses", {
		method: "get",
		pathTemplate: "/api/v1/licenses/status",
		options
	});
}
/**
* Clears the cache for licenses api requests.
*/
function clearCache() {
	return clearApiCache("licenses");
}
/**
* Functions for the licenses api
*/
const licensesExport = {
	getLicenseAssignments,
	addLicenseAssignments,
	deleteLicenseAssignments,
	updateLicenseAssignments,
	getLicenseConsumption,
	getLicenseOverview,
	getLicenseSettings,
	updateLicenseSettings,
	getLicenseStatus,
	clearCache
};
var licenses_default = licensesExport;

//#endregion
export { addLicenseAssignments, clearCache, licenses_default as default, deleteLicenseAssignments, getLicenseAssignments, getLicenseConsumption, getLicenseOverview, getLicenseSettings, getLicenseStatus, updateLicenseAssignments, updateLicenseSettings };