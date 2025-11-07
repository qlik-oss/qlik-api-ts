import "./chunks/utils-DI6bFnHB.js";
import "./chunks/public-runtime-modules-DNHVdCZ6.js";
import { n as invokeFetch, t as clearApiCache } from "./chunks/invoke-fetch-Cn50MiSD.js";

//#region src/public/rest/apps.ts
/**
* Creates a new app.
*
* @param body an object with the body content
* @throws CreateAppHttpError
*/
async function createApp(body, options) {
	return invokeFetch("apps", {
		method: "post",
		pathTemplate: "/api/v1/apps",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Accepts two evaluation ids and returns a comparison denoting the differences between the two.
*
* @param baseid Id of the baseline evaluation
* @param comparisonid Id of the comparison evaluation
* @param query an object with query parameters
* @throws GetAppEvaluationComparisonHttpError
*/
async function getAppEvaluationComparison(baseid, comparisonid, query, options) {
	return invokeFetch("apps", {
		method: "get",
		pathTemplate: "/api/v1/apps/evaluations/{baseid}/actions/compare/{comparisonid}",
		pathVariables: {
			baseid,
			comparisonid
		},
		query,
		options
	});
}
/**
* Accepts two evaluation ids and downloads a log, in XML format, denoting the differences between the two.
* @example
* getAppEvaluationComparisonXml(
*   "abcdefghijklmnopq",
*   "abcdefghijklmnopq"
* )
*
* @param baseid Id of the baseline evaluation
* @param comparisonid Id of the comparison evaluation
* @throws GetAppEvaluationComparisonXmlHttpError
*/
async function getAppEvaluationComparisonXml(baseid, comparisonid, options) {
	return invokeFetch("apps", {
		method: "get",
		pathTemplate: "/api/v1/apps/evaluations/{baseid}/actions/compare/{comparisonid}/actions/download",
		pathVariables: {
			baseid,
			comparisonid
		},
		options
	});
}
/**
* Find an evaluation by a specific id.
*
* @param id Id of the desired evaluation.
* @param query an object with query parameters
* @throws GetAppEvaluationHttpError
*/
async function getAppEvaluation(id, query, options) {
	return invokeFetch("apps", {
		method: "get",
		pathTemplate: "/api/v1/apps/evaluations/{id}",
		pathVariables: { id },
		query,
		options
	});
}
/**
* Find and download an evaluation log by a specific evaluation id.
* @example
* getAppEvaluationXml(
*   "abcdefghijklmnopq"
* )
*
* @param id Id of the desired evaluation.
* @throws GetAppEvaluationXmlHttpError
*/
async function getAppEvaluationXml(id, options) {
	return invokeFetch("apps", {
		method: "get",
		pathTemplate: "/api/v1/apps/evaluations/{id}/actions/download",
		pathVariables: { id },
		options
	});
}
/**
* Imports an app into the system.
*
* @param query an object with query parameters
* @param body an object with the body content
* @throws ImportAppHttpError
*/
async function importApp(query, body, options) {
	return invokeFetch("apps", {
		method: "post",
		pathTemplate: "/api/v1/apps/import",
		query,
		body,
		contentType: "application/octet-stream",
		options
	});
}
/**
* Gets the app privileges for the current user, such as create app and import app. Empty means that the current user has no app privileges.
*
* @throws GetAppsPrivilegesHttpError
*/
async function getAppsPrivileges(options) {
	return invokeFetch("apps", {
		method: "get",
		pathTemplate: "/api/v1/apps/privileges",
		options
	});
}
/**
* Deletes a specific app.
*
* @param appId Identifier of the app.
* @throws DeleteAppHttpError
*/
async function deleteApp(appId, options) {
	return invokeFetch("apps", {
		method: "delete",
		pathTemplate: "/api/v1/apps/{appId}",
		pathVariables: { appId },
		options
	});
}
/**
* Retrieves information for a specific app.
*
* @param appId Identifier of the app.
* @throws GetAppInfoHttpError
*/
async function getAppInfo(appId, options) {
	return invokeFetch("apps", {
		method: "get",
		pathTemplate: "/api/v1/apps/{appId}",
		pathVariables: { appId },
		options
	});
}
/**
* Updates the information for a specific app.
*
* @param appId Identifier of the app.
* @param body an object with the body content
* @throws UpdateAppInfoHttpError
*/
async function updateAppInfo(appId, body, options) {
	return invokeFetch("apps", {
		method: "put",
		pathTemplate: "/api/v1/apps/{appId}",
		pathVariables: { appId },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Copies a specific app.
*
* @param appId Identifier of the app.
* @param body an object with the body content
* @throws CopyAppHttpError
*/
async function copyApp(appId, body, options) {
	return invokeFetch("apps", {
		method: "post",
		pathTemplate: "/api/v1/apps/{appId}/copy",
		pathVariables: { appId },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Retrieves the lineage for an app.
* Returns a JSON-formatted array of strings describing the lineage of the app.
*
* @param appId Identifier of the app.
* @throws GetAppDataLineageHttpError
*/
async function getAppDataLineage(appId, options) {
	return invokeFetch("apps", {
		method: "get",
		pathTemplate: "/api/v1/apps/{appId}/data/lineage",
		pathVariables: { appId },
		options
	});
}
/**
* Retrieves the data model and reload statistics metadata of an app.
* An empty metadata structure is returned if the metadata is not available in the app.
*
* @param appId Identifier of the app.
* @throws GetAppDataMetadataHttpError
*/
async function getAppDataMetadata(appId, options) {
	return invokeFetch("apps", {
		method: "get",
		pathTemplate: "/api/v1/apps/{appId}/data/metadata",
		pathVariables: { appId },
		options
	});
}
/**
* Exports a specific app.
*
* @param appId Identifier of the app.
* @param query an object with query parameters
* @throws ExportAppHttpError
*/
async function exportApp(appId, query, options) {
	return invokeFetch("apps", {
		method: "post",
		pathTemplate: "/api/v1/apps/{appId}/export",
		pathVariables: { appId },
		query,
		options
	});
}
/**
* Returns information about supported analyses for the app's data model. Lists available analysis types, along with minimum and maximum number of dimensions, measures, and fields.
*
* @param appId Qlik Sense app identifier
* @throws GetAppInsightAnalysesHttpError
*/
async function getAppInsightAnalyses(appId, options) {
	return invokeFetch("apps", {
		method: "get",
		pathTemplate: "/api/v1/apps/{appId}/insight-analyses",
		pathVariables: { appId },
		options
	});
}
/**
* Returns analysis recommendations in response to a natural language question, a set of fields and master items, or a set of fields and master items with an optional target analysis.
*
* @param appId Qlik Sense app identifier
* @param body an object with the body content
* @throws GetAppInsightAnalysisRecommendationsHttpError
*/
async function getAppInsightAnalysisRecommendations(appId, body, options) {
	return invokeFetch("apps", {
		method: "post",
		pathTemplate: "/api/v1/apps/{appId}/insight-analyses/actions/recommend",
		pathVariables: { appId },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Returns information about model used to make analysis recommendations. Lists all fields and master items in the logical model, along with an indication of the validity of the logical model if the default is not used.
*
* @param appId Qlik Sense app identifier
* @throws GetAppInsightAnalysisModelHttpError
*/
async function getAppInsightAnalysisModel(appId, options) {
	return invokeFetch("apps", {
		method: "get",
		pathTemplate: "/api/v1/apps/{appId}/insight-analyses/model",
		pathVariables: { appId },
		options
	});
}
/**
* Deletes a media content file or complete directory.
* Returns OK if the bytes containing the media file (or the complete content of a directory) were successfully deleted, or error in case of failure or lack of permission.
*
* @param appId Unique application identifier.
* @param path Path to file content.
* @throws DeleteAppMediaHttpError
*/
async function deleteAppMedia(appId, path, options) {
	return invokeFetch("apps", {
		method: "delete",
		pathTemplate: "/api/v1/apps/{appId}/media/files/{path}",
		pathVariables: {
			appId,
			path
		},
		options
	});
}
/**
* Gets media content from file.
* Returns a stream of bytes containing the media file content on success, or error if file is not found.
*
* @param appId Unique application identifier.
* @param path Path to file content.
* @throws GetAppMediaHttpError
*/
async function getAppMedia(appId, path, options) {
	return invokeFetch("apps", {
		method: "get",
		pathTemplate: "/api/v1/apps/{appId}/media/files/{path}",
		pathVariables: {
			appId,
			path
		},
		options
	});
}
/**
* Stores the media content file.
* Returns OK if the bytes containing the media file content were successfully stored, or error in case of failure, lack of permission or file already exists on the supplied path.
*
* @param appId Unique application identifier.
* @param path Path to file content.
* @param body an object with the body content
* @throws UploadAppMediaHttpError
*/
async function uploadAppMedia(appId, path, body, options) {
	return invokeFetch("apps", {
		method: "put",
		pathTemplate: "/api/v1/apps/{appId}/media/files/{path}",
		pathVariables: {
			appId,
			path
		},
		body,
		contentType: "application/octet-stream",
		options
	});
}
/**
* Lists media content.
* Returns a JSON formatted array of strings describing the available media content or error if the optional path supplied is not found.
*
* @param appId Unique application identifier.
* @param path The path to sub folder with static content relative to the root folder. Use empty path to access the root folder.
* @param query an object with query parameters
* @throws GetAppMediaListHttpError
*/
async function getAppMediaList(appId, path, query, options) {
	return invokeFetch("apps", {
		method: "get",
		pathTemplate: "/api/v1/apps/{appId}/media/list/{path}",
		pathVariables: {
			appId,
			path
		},
		query,
		options
	});
}
/**
* Gets media content from file currently used as application thumbnail.
* Returns a stream of bytes containing the media file content on success, or error if file is not found.
* The image selected as thumbnail is only updated when application is saved.
*
* @param appId Unique application identifier.
* @throws GetAppThumbnailHttpError
*/
async function getAppThumbnail(appId, options) {
	return invokeFetch("apps", {
		method: "get",
		pathTemplate: "/api/v1/apps/{appId}/media/thumbnail",
		pathVariables: { appId },
		options
	});
}
/**
* Sets owner on an app object.
* The user must be the owner of the object.
*
* @param appId Identifier of the app.
* @param objectId Identifier of the object.
* @param body an object with the body content
* @throws UpdateAppObjectOwnerHttpError
*/
async function updateAppObjectOwner(appId, objectId, body, options) {
	return invokeFetch("apps", {
		method: "post",
		pathTemplate: "/api/v1/apps/{appId}/objects/{objectId}/actions/change-owner",
		pathVariables: {
			appId,
			objectId
		},
		body,
		contentType: "application/json",
		options
	});
}
/**
* Changes owner of the app.
*
* @param appId Identifier of the app.
* @param body an object with the body content
* @throws UpdateAppOwnerHttpError
*/
async function updateAppOwner(appId, body, options) {
	return invokeFetch("apps", {
		method: "put",
		pathTemplate: "/api/v1/apps/{appId}/owner",
		pathVariables: { appId },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Publishes a specific app to a managed space.
*
* @param appId Identifier of the app.
* @param body an object with the body content
* @throws PublishAppHttpError
*/
async function publishApp(appId, body, options) {
	return invokeFetch("apps", {
		method: "post",
		pathTemplate: "/api/v1/apps/{appId}/publish",
		pathVariables: { appId },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Republishes a published app to a managed space.
*
* @param appId Identifier of the app.
* @param body an object with the body content
* @throws RepublishAppHttpError
*/
async function republishApp(appId, body, options) {
	return invokeFetch("apps", {
		method: "put",
		pathTemplate: "/api/v1/apps/{appId}/publish",
		pathVariables: { appId },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Retrieves the metadata about all script logs stored for an app.
* Returns an array of ScriptLogMeta objects.
*
* @param appId Identifier of the app.
* @throws GetAppReloadLogsHttpError
*/
async function getAppReloadLogs(appId, options) {
	return invokeFetch("apps", {
		method: "get",
		pathTemplate: "/api/v1/apps/{appId}/reloads/logs",
		pathVariables: { appId },
		options
	});
}
/**
* Retrieves the log of a specific reload.
* Returns the log as "text/plain; charset=UTF-8".
*
* @param appId Identifier of the app.
* @param reloadId Identifier of the reload.
* @throws GetAppReloadLogHttpError
*/
async function getAppReloadLog(appId, reloadId, options) {
	return invokeFetch("apps", {
		method: "get",
		pathTemplate: "/api/v1/apps/{appId}/reloads/logs/{reloadId}",
		pathVariables: {
			appId,
			reloadId
		},
		options
	});
}
/**
* Retrieves the app reload metadata list.
* Reload metadata contains reload information, including reload id, duration, endtime and lineage load info.
*
* @param appId Identifier of the app
* @param reloadId Identifier of the reload. Use empty reloadId to get all reloads.
* @param query an object with query parameters
* @throws GetAppReloadMetadataHttpError
*/
async function getAppReloadMetadata(appId, reloadId, query, options) {
	return invokeFetch("apps", {
		method: "get",
		pathTemplate: "/api/v1/apps/{appId}/reloads/metadata/{reloadId}",
		pathVariables: {
			appId,
			reloadId
		},
		query,
		options
	});
}
/**
* List all filters that are present in the given app. Filters allow to reduce the app data visible in a report output. Each filter can contain definitions on one or multiple fields.
*
* @param appId Qlik Sense app identifier
* @param query an object with query parameters
* @throws GetAppReportFiltersHttpError
*/
async function getAppReportFilters(appId, query, options) {
	return invokeFetch("apps", {
		method: "get",
		pathTemplate: "/api/v1/apps/{appId}/report-filters",
		pathVariables: { appId },
		query,
		options
	});
}
/**
* Creates a new report filter which is used to re-apply selections, variables, patches to an engine session.
*
* @param appId Qlik Sense app identifier
* @param body an object with the body content
* @throws CreateAppReportFilterHttpError
*/
async function createAppReportFilter(appId, body, options) {
	return invokeFetch("apps", {
		method: "post",
		pathTemplate: "/api/v1/apps/{appId}/report-filters",
		pathVariables: { appId },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Get the number of filters for the given app and filter types
*
* @param appId Qlik Sense app identifier
* @param query an object with query parameters
* @throws CountAppReportFiltersHttpError
*/
async function countAppReportFilters(appId, query, options) {
	return invokeFetch("apps", {
		method: "get",
		pathTemplate: "/api/v1/apps/{appId}/report-filters/actions/count",
		pathVariables: { appId },
		query,
		options
	});
}
/**
* Delete a filter
*
* @param appId Qlik Sense app identifier
* @param id The filter id identifier (bookmarkId).
* @throws DeleteAppReportFilterHttpError
*/
async function deleteAppReportFilter(appId, id, options) {
	return invokeFetch("apps", {
		method: "delete",
		pathTemplate: "/api/v1/apps/{appId}/report-filters/{id}",
		pathVariables: {
			appId,
			id
		},
		options
	});
}
/**
* Get a filter
*
* @param appId Qlik Sense app identifier
* @param id The filter id identifier (bookmarkId).
* @throws GetAppReportFilterHttpError
*/
async function getAppReportFilter(appId, id, options) {
	return invokeFetch("apps", {
		method: "get",
		pathTemplate: "/api/v1/apps/{appId}/report-filters/{id}",
		pathVariables: {
			appId,
			id
		},
		options
	});
}
/**
* Update a filter
*
* @param appId Qlik Sense app identifier
* @param id The filter id identifier (bookmarkId).
* @param body an object with the body content
* @throws PatchAppReportFilterHttpError
*/
async function patchAppReportFilter(appId, id, body, options) {
	return invokeFetch("apps", {
		method: "patch",
		pathTemplate: "/api/v1/apps/{appId}/report-filters/{id}",
		pathVariables: {
			appId,
			id
		},
		body,
		contentType: "application/json",
		options
	});
}
/**
* Retrieves the script history for an app.
* Returns information about the saved versions of the script in a list sorted with latest first.
*
* @param appId Identifier of the app.
* @param query an object with query parameters
* @throws GetAppScriptHistoryHttpError
*/
async function getAppScriptHistory(appId, query, options) {
	return invokeFetch("apps", {
		method: "get",
		pathTemplate: "/api/v1/apps/{appId}/scripts",
		pathVariables: { appId },
		query,
		options
	});
}
/**
* Sets script for an app.
*
* @param appId Identifier of the app.
* @param body an object with the body content
* @throws UpdateAppScriptHttpError
*/
async function updateAppScript(appId, body, options) {
	return invokeFetch("apps", {
		method: "post",
		pathTemplate: "/api/v1/apps/{appId}/scripts",
		pathVariables: { appId },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Deletes a specific version of the script for an app.
* Fails if the supplied id is the current version.
*
* @param appId Identifier of the app.
* @param id Identifier of the script version
* @throws DeleteAppScriptHttpError
*/
async function deleteAppScript(appId, id, options) {
	return invokeFetch("apps", {
		method: "delete",
		pathTemplate: "/api/v1/apps/{appId}/scripts/{id}",
		pathVariables: {
			appId,
			id
		},
		options
	});
}
/**
* Retrieves a version of the script for an app.
* Returns the script text.
*
* @param appId Identifier of the app.
* @param id Identifier of the script version, or 'current' for retrieving the current version.
* @throws GetAppScriptHttpError
*/
async function getAppScript(appId, id, options) {
	return invokeFetch("apps", {
		method: "get",
		pathTemplate: "/api/v1/apps/{appId}/scripts/{id}",
		pathVariables: {
			appId,
			id
		},
		options
	});
}
/**
* Updates a specific version of the script for an app.
*
* @param appId Identifier of the app.
* @param id Identifier of the script version.
* @param body an object with the body content
* @throws PatchAppScriptHttpError
*/
async function patchAppScript(appId, id, body, options) {
	return invokeFetch("apps", {
		method: "patch",
		pathTemplate: "/api/v1/apps/{appId}/scripts/{id}",
		pathVariables: {
			appId,
			id
		},
		body,
		contentType: "application/json",
		options
	});
}
/**
* Removes space from a specific app.
*
* @param appId Identifier of the app.
* @throws RemoveAppFromSpaceHttpError
*/
async function removeAppFromSpace(appId, options) {
	return invokeFetch("apps", {
		method: "delete",
		pathTemplate: "/api/v1/apps/{appId}/space",
		pathVariables: { appId },
		options
	});
}
/**
* Sets space on a specific app.
*
* @param appId Identifier of the app.
* @param body an object with the body content
* @throws MoveAppToSpaceHttpError
*/
async function moveAppToSpace(appId, body, options) {
	return invokeFetch("apps", {
		method: "put",
		pathTemplate: "/api/v1/apps/{appId}/space",
		pathVariables: { appId },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Find all evaluations for an app GUID.
* Supports paging via next, prev which are sent in the response body
*
* @param guid The app guid.
* @param query an object with query parameters
* @throws GetAppEvaluationsHttpError
*/
async function getAppEvaluations(guid, query, options) {
	return invokeFetch("apps", {
		method: "get",
		pathTemplate: "/api/v1/apps/{guid}/evaluations",
		pathVariables: { guid },
		query,
		options
	});
}
/**
* Queue an app evaluation by its app guid.
* @example
* queueAppEvaluation(
*   "abcdefghijklmnopq"
* )
*
* @param guid Guid of the app.
* @throws QueueAppEvaluationHttpError
*/
async function queueAppEvaluation(guid, options) {
	return invokeFetch("apps", {
		method: "post",
		pathTemplate: "/api/v1/apps/{guid}/evaluations",
		pathVariables: { guid },
		options
	});
}
/**
* Clears the cache for apps api requests.
*/
function clearCache() {
	return clearApiCache("apps");
}
/**
* Functions for the apps api
*/
const appsExport = {
	createApp,
	getAppEvaluationComparison,
	getAppEvaluationComparisonXml,
	getAppEvaluation,
	getAppEvaluationXml,
	importApp,
	getAppsPrivileges,
	deleteApp,
	getAppInfo,
	updateAppInfo,
	copyApp,
	getAppDataLineage,
	getAppDataMetadata,
	exportApp,
	getAppInsightAnalyses,
	getAppInsightAnalysisRecommendations,
	getAppInsightAnalysisModel,
	deleteAppMedia,
	getAppMedia,
	uploadAppMedia,
	getAppMediaList,
	getAppThumbnail,
	updateAppObjectOwner,
	updateAppOwner,
	publishApp,
	republishApp,
	getAppReloadLogs,
	getAppReloadLog,
	getAppReloadMetadata,
	getAppReportFilters,
	createAppReportFilter,
	countAppReportFilters,
	deleteAppReportFilter,
	getAppReportFilter,
	patchAppReportFilter,
	getAppScriptHistory,
	updateAppScript,
	deleteAppScript,
	getAppScript,
	patchAppScript,
	removeAppFromSpace,
	moveAppToSpace,
	getAppEvaluations,
	queueAppEvaluation,
	clearCache
};
var apps_default = appsExport;

//#endregion
export { clearCache, copyApp, countAppReportFilters, createApp, createAppReportFilter, apps_default as default, deleteApp, deleteAppMedia, deleteAppReportFilter, deleteAppScript, exportApp, getAppDataLineage, getAppDataMetadata, getAppEvaluation, getAppEvaluationComparison, getAppEvaluationComparisonXml, getAppEvaluationXml, getAppEvaluations, getAppInfo, getAppInsightAnalyses, getAppInsightAnalysisModel, getAppInsightAnalysisRecommendations, getAppMedia, getAppMediaList, getAppReloadLog, getAppReloadLogs, getAppReloadMetadata, getAppReportFilter, getAppReportFilters, getAppScript, getAppScriptHistory, getAppThumbnail, getAppsPrivileges, importApp, moveAppToSpace, patchAppReportFilter, patchAppScript, publishApp, queueAppEvaluation, removeAppFromSpace, republishApp, updateAppInfo, updateAppObjectOwner, updateAppOwner, updateAppScript, uploadAppMedia };