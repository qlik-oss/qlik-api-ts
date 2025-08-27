import "./chunks/utils-CAGXTaqJ.js";
import "./chunks/public-runtime-modules-P9LEbn8i.js";
import { clearApiCache, invokeFetch } from "./chunks/invoke-fetch-09EW5w1d.js";

//#region src/public/rest/tasks.ts
/**
* Retrieves a list of the tasks that the requesting user has access to.
*
* @param query an object with query parameters
* @throws GetTasksHttpError
*/
async function getTasks(query, options) {
	return invokeFetch("tasks", {
		method: "get",
		pathTemplate: "/api/v1/tasks",
		query,
		options
	});
}
/**
* Creates a new task.
*
* @param query an object with query parameters
* @param body an object with the body content
* @throws CreateTaskHttpError
*/
async function createTask(query, body, options) {
	return invokeFetch("tasks", {
		method: "post",
		pathTemplate: "/api/v1/tasks",
		query,
		body,
		contentType: "application/json",
		options
	});
}
/**
* Returns a list of task runs for a specified `resourceId`.
*
* @param id Filter tasks by its target resource ID
* @param query an object with query parameters
* @throws GetTasksResourceRunsHttpError
*/
async function getTasksResourceRuns(id, query, options) {
	return invokeFetch("tasks", {
		method: "get",
		pathTemplate: "/api/v1/tasks/resources/{id}/runs",
		pathVariables: { id },
		query,
		options
	});
}
/**
* Deletes a specific task.
*
* @param id The task's unique identifier.
* @throws DeleteTaskHttpError
*/
async function deleteTask(id, options) {
	return invokeFetch("tasks", {
		method: "delete",
		pathTemplate: "/api/v1/tasks/{id}",
		pathVariables: { id },
		options
	});
}
/**
* Retrieves details for a specific task.
*
* @param id The task's unique identifier.
* @throws GetTaskHttpError
*/
async function getTask(id, options) {
	return invokeFetch("tasks", {
		method: "get",
		pathTemplate: "/api/v1/tasks/{id}",
		pathVariables: { id },
		options
	});
}
/**
* Updates a specific task. If the task is owned by another user, ownership will be transferred to the requesting user.
*
* @param id The task's unique identifier.
* @param body an object with the body content
* @throws UpdateTaskHttpError
*/
async function updateTask(id, body, options) {
	return invokeFetch("tasks", {
		method: "put",
		pathTemplate: "/api/v1/tasks/{id}",
		pathVariables: { id },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Starts the specified task.
*
* @param id The task's unique identifier.
* @param query an object with query parameters
* @throws StartTaskHttpError
*/
async function startTask(id, query, options) {
	return invokeFetch("tasks", {
		method: "post",
		pathTemplate: "/api/v1/tasks/{id}/actions/start",
		pathVariables: { id },
		query,
		options
	});
}
/**
* Returns runs for the specified task.
*
* @param id The task's unique identifier.
* @param query an object with query parameters
* @throws GetTaskRunsHttpError
*/
async function getTaskRuns(id, query, options) {
	return invokeFetch("tasks", {
		method: "get",
		pathTemplate: "/api/v1/tasks/{id}/runs",
		pathVariables: { id },
		query,
		options
	});
}
/**
* Returns the last run of a specific task.
*
* @param id The task's unique identifier.
* @throws GetLastTaskRunHttpError
*/
async function getLastTaskRun(id, options) {
	return invokeFetch("tasks", {
		method: "get",
		pathTemplate: "/api/v1/tasks/{id}/runs/last",
		pathVariables: { id },
		options
	});
}
/**
* Get specific run log of a task.
*
* @param id The task's unique identifier.
* @param runId The run's unique identifier.
* @throws GetTaskRunLogHttpError
*/
async function getTaskRunLog(id, runId, options) {
	return invokeFetch("tasks", {
		method: "get",
		pathTemplate: "/api/v1/tasks/{id}/runs/{runId}/log",
		pathVariables: {
			id,
			runId
		},
		options
	});
}
/**
* Clears the cache for tasks api requests.
*/
function clearCache() {
	return clearApiCache("tasks");
}
/**
* Functions for the tasks api
*/
const tasksExport = {
	getTasks,
	createTask,
	getTasksResourceRuns,
	deleteTask,
	getTask,
	updateTask,
	startTask,
	getTaskRuns,
	getLastTaskRun,
	getTaskRunLog,
	clearCache
};
var tasks_default = tasksExport;

//#endregion
export { clearCache, createTask, tasks_default as default, deleteTask, getLastTaskRun, getTask, getTaskRunLog, getTaskRuns, getTasks, getTasksResourceRuns, startTask, updateTask };