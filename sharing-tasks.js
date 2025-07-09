import "./chunks/utils-qEQ6sEXX.js";
import "./chunks/public-runtime-modules-lsJEDVxt.js";
import { clearApiCache, invokeFetch } from "./chunks/invoke-fetch-B-ZucHu9.js";

//#region src/public/rest/sharing-tasks.ts
/**
* Retrieves all sharing tasks accessible to the user. Users assigned the `TenantAdmin` or `AnalyticsAdmin` role can view all tasks.
*
* @param query an object with query parameters
* @throws GetSharingTasksHttpError
*/
async function getSharingTasks(query, options) {
	return invokeFetch("sharing-tasks", {
		method: "get",
		pathTemplate: "/api/v1/sharing-tasks",
		query,
		options
	});
}
/**
* Creates a new recurring sharing task.
*
* @param body an object with the body content
* @throws CreateSharingTaskHttpError
*/
async function createSharingTask(body, options) {
	return invokeFetch("sharing-tasks", {
		method: "post",
		pathTemplate: "/api/v1/sharing-tasks",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Requests execution of the specified recurring sharing task.
*
* @param body an object with the body content
* @throws ExecuteSharingTasksHttpError
*/
async function executeSharingTasks(body, options) {
	return invokeFetch("sharing-tasks", {
		method: "post",
		pathTemplate: "/api/v1/sharing-tasks/actions/execute",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Retrieves the current settings for sharing tasks, reports, and other related configuration.
*
* @throws GetSharingTasksSettingsHttpError
*/
async function getSharingTasksSettings(options) {
	return invokeFetch("sharing-tasks", {
		method: "get",
		pathTemplate: "/api/v1/sharing-tasks/settings",
		options
	});
}
/**
* Patches the toggle settings for sharing tasks, reports, and other related configuration in the tenant. User must be assigned the `TenantAdmin` role.
*
* @param body an object with the body content
* @throws UpdateSharingTasksSettingsHttpError
*/
async function updateSharingTasksSettings(body, options) {
	return invokeFetch("sharing-tasks", {
		method: "patch",
		pathTemplate: "/api/v1/sharing-tasks/settings",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Updates the settings for sharing tasks, reports, and other related configuration in the tenant. User must be assigned the `TenantAdmin` role.
*
* @param body an object with the body content
* @throws ConfigureSharingTasksSettingsHttpError
*/
async function configureSharingTasksSettings(body, options) {
	return invokeFetch("sharing-tasks", {
		method: "put",
		pathTemplate: "/api/v1/sharing-tasks/settings",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Deletes a specific sharing task.
*
* @param taskId The sharing task identifier.
* @throws DeleteSharingTaskHttpError
*/
async function deleteSharingTask(taskId, options) {
	return invokeFetch("sharing-tasks", {
		method: "delete",
		pathTemplate: "/api/v1/sharing-tasks/{taskId}",
		pathVariables: { taskId },
		options
	});
}
/**
* Returns the details of a specific sharing task.
*
* @param taskId The sharing task identifier.
* @param query an object with query parameters
* @throws GetSharingTaskHttpError
*/
async function getSharingTask(taskId, query, options) {
	return invokeFetch("sharing-tasks", {
		method: "get",
		pathTemplate: "/api/v1/sharing-tasks/{taskId}",
		pathVariables: { taskId },
		query,
		options
	});
}
/**
* Updates one or more properties of a specific sharing task.
*
* @param taskId The sharing task identifier.
* @param body an object with the body content
* @throws PatchSharingTaskHttpError
*/
async function patchSharingTask(taskId, body, options) {
	return invokeFetch("sharing-tasks", {
		method: "patch",
		pathTemplate: "/api/v1/sharing-tasks/{taskId}",
		pathVariables: { taskId },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Requests cancellation of an execution of the specified recurring sharing task.
*
* @param taskId The sharing task identifier.
* @throws CancelSharingTaskHttpError
*/
async function cancelSharingTask(taskId, options) {
	return invokeFetch("sharing-tasks", {
		method: "post",
		pathTemplate: "/api/v1/sharing-tasks/{taskId}/actions/cancel",
		pathVariables: { taskId },
		options
	});
}
/**
* Clears the cache for sharing-tasks api requests.
*/
function clearCache() {
	return clearApiCache("sharing-tasks");
}
/**
* Functions for the sharing-tasks api
*/
const sharingTasksExport = {
	getSharingTasks,
	createSharingTask,
	executeSharingTasks,
	getSharingTasksSettings,
	updateSharingTasksSettings,
	configureSharingTasksSettings,
	deleteSharingTask,
	getSharingTask,
	patchSharingTask,
	cancelSharingTask,
	clearCache
};
var sharing_tasks_default = sharingTasksExport;

//#endregion
export { cancelSharingTask, clearCache, configureSharingTasksSettings, createSharingTask, sharing_tasks_default as default, deleteSharingTask, executeSharingTasks, getSharingTask, getSharingTasks, getSharingTasksSettings, patchSharingTask, updateSharingTasksSettings };