import { t as __exportAll } from "../chunks/chunk-BdHzlgOL.js";
import { n as invokeFetch, t as clearApiCache } from "../chunks/invoke-fetch--Qa19wyc.js";

//#region src/public/rest/scheduling/tasks.ts
var tasks_exports = /* @__PURE__ */ __exportAll({
	clearCache: () => clearCache,
	createTask: () => createTask,
	default: () => tasksExport,
	deleteTask: () => deleteTask,
	getTask: () => getTask,
	getTaskGraphsAncestors_FIX_THIS_QUIRKY_NAME: () => getTaskGraphsAncestors_FIX_THIS_QUIRKY_NAME,
	getTaskGraphsChildren_FIX_THIS_QUIRKY_NAME: () => getTaskGraphsChildren_FIX_THIS_QUIRKY_NAME,
	getTaskGraphsDescendants_FIX_THIS_QUIRKY_NAME: () => getTaskGraphsDescendants_FIX_THIS_QUIRKY_NAME,
	getTaskGraphsParents_FIX_THIS_QUIRKY_NAME: () => getTaskGraphsParents_FIX_THIS_QUIRKY_NAME,
	getTaskGraphsSubgraph_FIX_THIS_QUIRKY_NAME: () => getTaskGraphsSubgraph_FIX_THIS_QUIRKY_NAME,
	getTaskRunLog: () => getTaskRunLog,
	getTaskRuns: () => getTaskRuns,
	getTaskRunsLast_FIX_THIS_QUIRKY_NAME: () => getTaskRunsLast_FIX_THIS_QUIRKY_NAME,
	getTasks: () => getTasks,
	getTasksResourceRuns_FIX_THIS_QUIRKY_NAME: () => getTasksResourceRuns_FIX_THIS_QUIRKY_NAME,
	patchTask: () => patchTask,
	startTask: () => startTask,
	updateTask: () => updateTask
});
/**
* Retrieves a paginated list of tasks the requesting user has access to. Results include task metadata such as owner, resource, space, and last run status. Use the `filter` parameter to narrow results by field values, or `sort` to control the ordering.
*
* @param query an object with query parameters
* @throws GetTasksHttpError
*/
async function getTasks(query, options) {
	return invokeFetch("scheduling/tasks", {
		method: "get",
		pathTemplate: "/api/scheduling/tasks",
		query,
		options
	});
}
/**
* Creates a new task for the specified resource. The task is owned by the requesting user and is disabled by default until explicitly enabled. The `resourceId` is derived automatically from the task's state definitions and cannot be set directly in the request body.
*
* @param query an object with query parameters
* @param body an object with the body content
* @throws CreateTaskHttpError
*/
async function createTask(query, body, options) {
	return invokeFetch("scheduling/tasks", {
		method: "post",
		pathTemplate: "/api/scheduling/tasks",
		query,
		body,
		contentType: "application/json",
		options
	});
}
/**
* Retrieves a paginated list of task runs for a given resource, identified by `id`. Returns run history across all tasks associated with that resource, ordered by the most recent run by default.
*
* @param id The unique identifier of the resource to retrieve task runs for.
* @param query an object with query parameters
* @throws GetTasksResourceRuns_FIX_THIS_QUIRKY_NAMEHttpError
*/
async function getTasksResourceRuns_FIX_THIS_QUIRKY_NAME(id, query, options) {
	return invokeFetch("scheduling/tasks", {
		method: "get",
		pathTemplate: "/api/scheduling/tasks/resources/{id}/runs",
		pathVariables: { id },
		query,
		options
	});
}
/**
* Deletes a specific task and cancels any scheduled or pending runs associated with it. This action cannot be undone. Tenant admins can delete tasks owned by other users.
*
* @param id The unique identifier of the task to delete.
* @throws DeleteTaskHttpError
*/
async function deleteTask(id, options) {
	return invokeFetch("scheduling/tasks", {
		method: "delete",
		pathTemplate: "/api/scheduling/tasks/{id}",
		pathVariables: { id },
		options
	});
}
/**
* Retrieves the full definition and metadata for a specific task, including its trigger configuration, state definitions, owner, and last run status. Use this operation to inspect a task before updating or starting it.
*
* @param id The unique identifier of the task to retrieve.
* @throws GetTaskHttpError
*/
async function getTask(id, options) {
	return invokeFetch("scheduling/tasks", {
		method: "get",
		pathTemplate: "/api/scheduling/tasks/{id}",
		pathVariables: { id },
		options
	});
}
/**
* Partially updates a specific task using a JSON Patch document (RFC 6902). Only the fields included in the patch operations are modified. All other fields remain unchanged. If the task is owned by another user, ownership is transferred to the requesting user.
*
* @param id The unique identifier of the task to update.
* @param body an object with the body content
* @throws PatchTaskHttpError
*/
async function patchTask(id, body, options) {
	return invokeFetch("scheduling/tasks", {
		method: "patch",
		pathTemplate: "/api/scheduling/tasks/{id}",
		pathVariables: { id },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Replaces the full definition of a specific task with the supplied payload. All fields not included in the request body are reset to their defaults. If the task is owned by another user, ownership is transferred to the requesting user. Use `PATCH` instead to apply a partial update.
*
* @param id The unique identifier of the task to replace.
* @param body an object with the body content
* @throws UpdateTaskHttpError
*/
async function updateTask(id, body, options) {
	return invokeFetch("scheduling/tasks", {
		method: "put",
		pathTemplate: "/api/scheduling/tasks/{id}",
		pathVariables: { id },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Triggers an immediate run of the specified task outside its normal schedule. The optional `source` parameter identifies what initiated the run, which is recorded in the run history for auditing purposes.
*
* @param id The unique identifier of the task to start.
* @param query an object with query parameters
* @throws StartTaskHttpError
*/
async function startTask(id, query, options) {
	return invokeFetch("scheduling/tasks", {
		method: "post",
		pathTemplate: "/api/scheduling/tasks/{id}/actions/start",
		pathVariables: { id },
		query,
		options
	});
}
/**
* Retrieves the ancestor subgraph for a specific task, with the requested task as the root vertex. Traverses parent relationships breadth-first up to the depth specified by `level`. Use this to understand all upstream dependencies of a task.
*
* @param id The unique identifier of the task.
* @param query an object with query parameters
* @throws GetTaskGraphsAncestors_FIX_THIS_QUIRKY_NAMEHttpError
*/
async function getTaskGraphsAncestors_FIX_THIS_QUIRKY_NAME(id, query, options) {
	return invokeFetch("scheduling/tasks", {
		method: "get",
		pathTemplate: "/api/scheduling/tasks/{id}/graphs/ancestors",
		pathVariables: { id },
		query,
		options
	});
}
/**
* Retrieves a paginated list of tasks that are direct children of the specified task in the dependency graph. A child task is one that is triggered when the parent task completes successfully.
*
* @param id The unique identifier of the parent task.
* @param query an object with query parameters
* @throws GetTaskGraphsChildren_FIX_THIS_QUIRKY_NAMEHttpError
*/
async function getTaskGraphsChildren_FIX_THIS_QUIRKY_NAME(id, query, options) {
	return invokeFetch("scheduling/tasks", {
		method: "get",
		pathTemplate: "/api/scheduling/tasks/{id}/graphs/children",
		pathVariables: { id },
		query,
		options
	});
}
/**
* Retrieves the descendant subgraph for a specific task, with the requested task as the root vertex. Traverses child relationships breadth-first down to the depth specified by `level`. Use this to identify all downstream tasks that will be triggered when this task completes.
*
* @param id The unique identifier of the task.
* @param query an object with query parameters
* @throws GetTaskGraphsDescendants_FIX_THIS_QUIRKY_NAMEHttpError
*/
async function getTaskGraphsDescendants_FIX_THIS_QUIRKY_NAME(id, query, options) {
	return invokeFetch("scheduling/tasks", {
		method: "get",
		pathTemplate: "/api/scheduling/tasks/{id}/graphs/descendants",
		pathVariables: { id },
		query,
		options
	});
}
/**
* Retrieves a paginated list of tasks that are direct parents of the specified task in the dependency graph. A parent task is one whose completion triggers the current task.
*
* @param id The unique identifier of the child task.
* @param query an object with query parameters
* @throws GetTaskGraphsParents_FIX_THIS_QUIRKY_NAMEHttpError
*/
async function getTaskGraphsParents_FIX_THIS_QUIRKY_NAME(id, query, options) {
	return invokeFetch("scheduling/tasks", {
		method: "get",
		pathTemplate: "/api/scheduling/tasks/{id}/graphs/parents",
		pathVariables: { id },
		query,
		options
	});
}
/**
* Retrieves the combined ancestor-and-descendant subgraph for a specific task, with the requested task as the root vertex. Traverses both parent and child relationships breadth-first up to the depth specified by `level`. Use this to see the full dependency context for a task in one request.
*
* @param id The unique identifier of the task.
* @param query an object with query parameters
* @throws GetTaskGraphsSubgraph_FIX_THIS_QUIRKY_NAMEHttpError
*/
async function getTaskGraphsSubgraph_FIX_THIS_QUIRKY_NAME(id, query, options) {
	return invokeFetch("scheduling/tasks", {
		method: "get",
		pathTemplate: "/api/scheduling/tasks/{id}/graphs/subgraph",
		pathVariables: { id },
		query,
		options
	});
}
/**
* Retrieves a paginated list of execution runs for the specified task, ordered by most recent run by default. Each run record includes the start and end time, status, and the identity that triggered it.
*
* @param id The unique identifier of the task.
* @param query an object with query parameters
* @throws GetTaskRunsHttpError
*/
async function getTaskRuns(id, query, options) {
	return invokeFetch("scheduling/tasks", {
		method: "get",
		pathTemplate: "/api/scheduling/tasks/{id}/runs",
		pathVariables: { id },
		query,
		options
	});
}
/**
* Retrieves the most recent execution run for the specified task. Returns a 404 response if the task has never been run. Use this operation to quickly check whether the last run succeeded or failed without paginating through the full run history.
*
* @param id The unique identifier of the task.
* @throws GetTaskRunsLast_FIX_THIS_QUIRKY_NAMEHttpError
*/
async function getTaskRunsLast_FIX_THIS_QUIRKY_NAME(id, options) {
	return invokeFetch("scheduling/tasks", {
		method: "get",
		pathTemplate: "/api/scheduling/tasks/{id}/runs/last",
		pathVariables: { id },
		options
	});
}
/**
* Retrieves the execution log for a specific task run. Set the `Accept` header to `text/plain` to receive the raw log as a downloadable file, or `application/json` (default) to receive it wrapped in a JSON object with a `logContent` field.
*
* @param id The unique identifier of the task.
* @param runId The unique identifier of the task run.
* @throws GetTaskRunLogHttpError
*/
async function getTaskRunLog(id, runId, options) {
	return invokeFetch("scheduling/tasks", {
		method: "get",
		pathTemplate: "/api/scheduling/tasks/{id}/runs/{runId}/log",
		pathVariables: {
			id,
			runId
		},
		options
	});
}
/**
* Clears the cache for scheduling/tasks api requests.
*/
function clearCache() {
	return clearApiCache("scheduling/tasks");
}
/**
* Functions for the tasks api
*/
const tasksExport = {
	getTasks,
	createTask,
	getTasksResourceRuns_FIX_THIS_QUIRKY_NAME,
	deleteTask,
	getTask,
	patchTask,
	updateTask,
	startTask,
	getTaskGraphsAncestors_FIX_THIS_QUIRKY_NAME,
	getTaskGraphsChildren_FIX_THIS_QUIRKY_NAME,
	getTaskGraphsDescendants_FIX_THIS_QUIRKY_NAME,
	getTaskGraphsParents_FIX_THIS_QUIRKY_NAME,
	getTaskGraphsSubgraph_FIX_THIS_QUIRKY_NAME,
	getTaskRuns,
	getTaskRunsLast_FIX_THIS_QUIRKY_NAME,
	getTaskRunLog,
	clearCache
};

//#endregion
export { clearCache, createTask, tasksExport as default, deleteTask, getTask, getTaskGraphsAncestors_FIX_THIS_QUIRKY_NAME, getTaskGraphsChildren_FIX_THIS_QUIRKY_NAME, getTaskGraphsDescendants_FIX_THIS_QUIRKY_NAME, getTaskGraphsParents_FIX_THIS_QUIRKY_NAME, getTaskGraphsSubgraph_FIX_THIS_QUIRKY_NAME, getTaskRunLog, getTaskRuns, getTaskRunsLast_FIX_THIS_QUIRKY_NAME, getTasks, getTasksResourceRuns_FIX_THIS_QUIRKY_NAME, patchTask, startTask, tasks_exports as t, updateTask };