import "./chunks/public-runtime-modules-2KfyI2qM.js";
import { n as invokeFetch, t as clearApiCache } from "./chunks/invoke-fetch-DMAi6Fg3.js";

//#region src/public/rest/reload-tasks.ts
/**
* Finds and returns the tasks that the user has access to.
*
* @param query an object with query parameters
* @throws GetReloadTasksHttpError
*/
async function getReloadTasks(query, options) {
	return invokeFetch("reload-tasks", {
		method: "get",
		pathTemplate: "/api/v1/reload-tasks",
		query,
		options
	});
}
/**
* Creates a task for a specified app.
*
* @param body an object with the body content
* @throws CreateReloadTaskHttpError
*/
async function createReloadTask(body, options) {
	return invokeFetch("reload-tasks", {
		method: "post",
		pathTemplate: "/api/v1/reload-tasks",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Deletes a task
*
* @param taskId The unique identifier of the task.
* @throws DeleteReloadTaskHttpError
*/
async function deleteReloadTask(taskId, options) {
	return invokeFetch("reload-tasks", {
		method: "delete",
		pathTemplate: "/api/v1/reload-tasks/{taskId}",
		pathVariables: { taskId },
		options
	});
}
/**
* Finds and returns a task.
*
* @param taskId The unique identifier of the task.
* @throws GetReloadTaskHttpError
*/
async function getReloadTask(taskId, options) {
	return invokeFetch("reload-tasks", {
		method: "get",
		pathTemplate: "/api/v1/reload-tasks/{taskId}",
		pathVariables: { taskId },
		options
	});
}
/**
* Updates an existing task
*
* @param taskId The unique identifier of the task.
* @param body an object with the body content
* @throws UpdateReloadTaskHttpError
*/
async function updateReloadTask(taskId, body, options) {
	return invokeFetch("reload-tasks", {
		method: "put",
		pathTemplate: "/api/v1/reload-tasks/{taskId}",
		pathVariables: { taskId },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Clears the cache for reload-tasks api requests.
*/
function clearCache() {
	return clearApiCache("reload-tasks");
}
/**
* Functions for the reload-tasks api
*/
const reloadTasksExport = {
	getReloadTasks,
	createReloadTask,
	deleteReloadTask,
	getReloadTask,
	updateReloadTask,
	clearCache
};

//#endregion
export { clearCache, createReloadTask, reloadTasksExport as default, deleteReloadTask, getReloadTask, getReloadTasks, updateReloadTask };