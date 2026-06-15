import { t as __exportAll } from "../chunks/chunk-w6R9maHv.js";
import { n as invokeFetch, t as clearApiCache } from "../chunks/invoke-fetch-CpHbSqJB.js";

//#region src/public/rest/analytics/apps.ts
var apps_exports = /* @__PURE__ */ __exportAll({
	clearCache: () => clearCache,
	createAppEvaluation: () => createAppEvaluation,
	default: () => appsExport,
	downloadAppsEvaluationCompare_FIX_THIS_QUIRKY_NAME: () => downloadAppsEvaluationCompare_FIX_THIS_QUIRKY_NAME,
	downloadAppsEvaluation_FIX_THIS_QUIRKY_NAME: () => downloadAppsEvaluation_FIX_THIS_QUIRKY_NAME,
	getAppEvaluations: () => getAppEvaluations,
	getAppsEvaluationCompare_FIX_THIS_QUIRKY_NAME: () => getAppsEvaluationCompare_FIX_THIS_QUIRKY_NAME,
	getAppsEvaluation_FIX_THIS_QUIRKY_NAME: () => getAppsEvaluation_FIX_THIS_QUIRKY_NAME,
	restoreApp: () => restoreApp
});
/**
* Compares exactly two app evaluations, a baseline and a comparison, returning a structured
* diff of performance metrics between them. Use this operation to detect regressions
* after app changes or engine upgrades. Both evaluations must belong to the same app.
*
* @param baselineId The unique identifier of the baseline app evaluation.
* @param comparisonId The unique identifier of the comparison app evaluation.
* @param query an object with query parameters
* @throws GetAppsEvaluationCompare_FIX_THIS_QUIRKY_NAMEHttpError
*/
async function getAppsEvaluationCompare_FIX_THIS_QUIRKY_NAME(baselineId, comparisonId, query, options) {
	return invokeFetch("analytics/apps", {
		method: "get",
		pathTemplate: "/api/analytics/apps/evaluations/{baselineId}/compare/{comparisonId}",
		pathVariables: {
			baselineId,
			comparisonId
		},
		query,
		options
	});
}
/**
* Downloads a comparison log for the two specified app evaluations (baseline and comparison),
* defaulting to XML format. Use the `Accept` header to request JSON output instead.
* Both evaluations must belong to the same app.
* @example
* downloadAppsEvaluationCompare_FIX_THIS_QUIRKY_NAME(
*   "abcdefghijklmnopq",
*   "abcdefghijklmnopq"
* )
*
* @param baselineId The unique identifier of the baseline app evaluation.
* @param comparisonId The unique identifier of the comparison app evaluation.
* @throws DownloadAppsEvaluationCompare_FIX_THIS_QUIRKY_NAMEHttpError
*/
async function downloadAppsEvaluationCompare_FIX_THIS_QUIRKY_NAME(baselineId, comparisonId, options) {
	return invokeFetch("analytics/apps", {
		method: "get",
		pathTemplate: "/api/analytics/apps/evaluations/{baselineId}/compare/{comparisonId}/actions/download",
		pathVariables: {
			baselineId,
			comparisonId
		},
		options
	});
}
/**
* Retrieves a single app evaluation by its unique identifier. Use the `all` parameter
* to include full evaluation details in the response.
*
* @param id The unique identifier of the app evaluation to retrieve.
* @param query an object with query parameters
* @throws GetAppsEvaluation_FIX_THIS_QUIRKY_NAMEHttpError
*/
async function getAppsEvaluation_FIX_THIS_QUIRKY_NAME(id, query, options) {
	return invokeFetch("analytics/apps", {
		method: "get",
		pathTemplate: "/api/analytics/apps/evaluations/{id}",
		pathVariables: { id },
		query,
		options
	});
}
/**
* Downloads the evaluation log for the specified app evaluation, defaulting to XML
* format. Use the `Accept` header to request JSON output instead.
* @example
* downloadAppsEvaluation_FIX_THIS_QUIRKY_NAME(
*   "abcdefghijklmnopq"
* )
*
* @param id The unique identifier of the app evaluation to download.
* @throws DownloadAppsEvaluation_FIX_THIS_QUIRKY_NAMEHttpError
*/
async function downloadAppsEvaluation_FIX_THIS_QUIRKY_NAME(id, options) {
	return invokeFetch("analytics/apps", {
		method: "get",
		pathTemplate: "/api/analytics/apps/evaluations/{id}/actions/download",
		pathVariables: { id },
		options
	});
}
/**
* Restores a soft-deleted Qlik Cloud Analytics application to the same space with the same app ID, retaining the properties it had at the time of deletion.
* This operation is available to the app owner and Tenant Admins. The app owner can restore the app only if the original space still exists and they still have delete permission in the space; otherwise, a 403 Forbidden error is returned.
* Associated resources such as data alerts, subscriptions, collections, notes, and tags are deleted when the app is deleted and cannot be restored.
*
* @param appId Identifier of the app.
* @throws RestoreAppHttpError
*/
async function restoreApp(appId, options) {
	return invokeFetch("analytics/apps", {
		method: "post",
		pathTemplate: "/api/analytics/apps/{appId}/actions/restore",
		pathVariables: { appId },
		options
	});
}
/**
* Returns a paginated list of historical evaluations for the specified app. Use
* the `next` and `prev` cursor values from the response links to navigate through
* pages of results.
*
* @param guid The unique identifier of the app.
* @param query an object with query parameters
* @throws GetAppEvaluationsHttpError
*/
async function getAppEvaluations(guid, query, options) {
	return invokeFetch("analytics/apps", {
		method: "get",
		pathTemplate: "/api/analytics/apps/{guid}/evaluations",
		pathVariables: { guid },
		query,
		options
	});
}
/**
* Queues a performance and scalability evaluation for the specified app, scheduling
* it for execution by the evaluation engine. The evaluation measures object response
* times, CPU usage, document size, and data model metrics. Once queued, use the
* returned `id` with the retrieval operations to poll for results.
* @example
* createAppEvaluation(
*   "abcdefghijklmnopq"
* )
*
* @param guid The unique identifier of the app to evaluate.
* @throws CreateAppEvaluationHttpError
*/
async function createAppEvaluation(guid, options) {
	return invokeFetch("analytics/apps", {
		method: "post",
		pathTemplate: "/api/analytics/apps/{guid}/evaluations",
		pathVariables: { guid },
		options
	});
}
/**
* Clears the cache for analytics/apps api requests.
*/
function clearCache() {
	return clearApiCache("analytics/apps");
}
/**
* Functions for the apps api
*/
const appsExport = {
	getAppsEvaluationCompare_FIX_THIS_QUIRKY_NAME,
	downloadAppsEvaluationCompare_FIX_THIS_QUIRKY_NAME,
	getAppsEvaluation_FIX_THIS_QUIRKY_NAME,
	downloadAppsEvaluation_FIX_THIS_QUIRKY_NAME,
	restoreApp,
	getAppEvaluations,
	createAppEvaluation,
	clearCache
};

//#endregion
export { clearCache, createAppEvaluation, appsExport as default, downloadAppsEvaluationCompare_FIX_THIS_QUIRKY_NAME, downloadAppsEvaluation_FIX_THIS_QUIRKY_NAME, getAppEvaluations, getAppsEvaluationCompare_FIX_THIS_QUIRKY_NAME, getAppsEvaluation_FIX_THIS_QUIRKY_NAME, restoreApp, apps_exports as t };