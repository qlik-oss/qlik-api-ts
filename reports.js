import "./chunks/utils-qEQ6sEXX.js";
import "./chunks/public-runtime-modules-CNGnt1rU.js";
import { clearApiCache, invokeFetch } from "./chunks/invoke-fetch-DbVuX5mE.js";

//#region src/public/rest/reports.ts
/**
* Queue a new report request generation.
*
* @param body an object with the body content
* @throws CreateReportHttpError
*/
async function createReport(body, options) {
	return invokeFetch("reports", {
		method: "post",
		pathTemplate: "/api/v1/reports",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Get report request processing status.
*
* @param id Identifier of the request.
* @throws GetReportStatusHttpError
*/
async function getReportStatus(id, options) {
	return invokeFetch("reports", {
		method: "get",
		pathTemplate: "/api/v1/reports/{id}/status",
		pathVariables: { id },
		options
	});
}
/**
* Clears the cache for reports api requests.
*/
function clearCache() {
	return clearApiCache("reports");
}
/**
* Functions for the reports api
*/
const reportsExport = {
	createReport,
	getReportStatus,
	clearCache
};
var reports_default = reportsExport;

//#endregion
export { clearCache, createReport, reports_default as default, getReportStatus };