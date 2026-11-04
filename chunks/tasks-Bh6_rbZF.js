import { t as __exportAll } from "./rolldown-runtime-CNh9ExCG.js";
import { n as invokeFetch, t as clearApiCache } from "./invoke-fetch-D5WdETph.js";

// src/public/rest/scheduling/tasks.ts
var tasks_exports = /* @__PURE__ */ __exportAll({
	clearCache: () => clearCache,
	createTask: () => createTask,
	createTaskWithoutQuery: () => createTaskWithoutQuery,
	default: () => tasksExport,
	deleteTask: () => deleteTask,
	getTask: () => getTask,
	getTaskGraphAncestors: () => getTaskGraphAncestors,
	getTaskGraphChildren: () => getTaskGraphChildren,
	getTaskGraphDescendants: () => getTaskGraphDescendants,
	getTaskGraphParents: () => getTaskGraphParents,
	getTaskLastRun: () => getTaskLastRun,
	getTaskResourceRuns: () => getTaskResourceRuns,
	getTaskRunLog: () => getTaskRunLog,
	getTaskRuns: () => getTaskRuns,
	getTaskSubgraph: () => getTaskSubgraph,
	getTasks: () => getTasks,
	patchTask: () => patchTask,
	reloadTasksResourceOnDatasetUpdated_FIX_THIS_QUIRKY_NAME: () => reloadTasksResourceOnDatasetUpdated_FIX_THIS_QUIRKY_NAME,
	reloadTasksResourceOnTaskEvent_FIX_THIS_QUIRKY_NAME: () => reloadTasksResourceOnTaskEvent_FIX_THIS_QUIRKY_NAME,
	reloadTasksResourceOnTimeSchedule_FIX_THIS_QUIRKY_NAME: () => reloadTasksResourceOnTimeSchedule_FIX_THIS_QUIRKY_NAME,
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
* Creates a new task for the specified resource. The task is owned by the requesting user and is disabled by default until explicitly enabled. The `resourceId` is derived automatically from the task's state definitions and cannot be set directly in the request body.
*
* @param body an object with the body content
* @throws CreateTaskWithoutQueryHttpError
*/
async function createTaskWithoutQuery(body, options) {
	return invokeFetch("scheduling/tasks", {
		method: "post",
		pathTemplate: "/api/scheduling/tasks",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Creates a reload task for the app that runs when a Data Integration (Qlik Talend
* Cloud) pipeline finishes updating or loading a dataset (QVD or data warehouse
* storage) that the app uses.
* This is a convenience wrapper over `POST /scheduling/tasks`; the full task
* definition is generated server-side. Use `POST /scheduling/tasks` for advanced
* configurations.
*
* Eligible datasets are resolved from the app's lineage when the task is created,
* as the task owner; datasets the app starts using later are not picked up. Other
* data sources, such as data files or QVDs in spaces, do not trigger the task.
* An app can have only one such task, and it is shared with the app's legacy
* reload-task auto-reload setting: changing that setting replaces or removes this
* task's trigger. One pipeline run may start the task more than once.
*
* Errors:
* - `400` `CHO-001`: the request body or the path `id` is invalid. This includes a
*   `name` or `description` over its maximum length.
* - `403` `CHO-003`: the app does not exist, is not accessible, or the caller
*   lacks `app:reload` on it.
* - `404`: not returned for a missing app, which gets `403` as above. Kept for
*   compatibility.
* - `409` `CHO-031`: the app already has a dataset-update task, enabled or not. Its ID
*   is returned in `value.existingTaskId`.
* - `422` `CHO-030`: the app does not use any dataset produced by a Data Integration
*   pipeline, or the task owner cannot see all of them.
*   `CHO-014`: the app already has the maximum number of tasks.
*   `CHO-018`: the caller has reached the per-user task quota, when one is configured.
* - `424` `CHO-013`: the task could not be stored. Nothing is created.
*
* @param id The unique identifier of the app to reload.
* @param body an object with the body content
* @throws ReloadTasksResourceOnDatasetUpdated_FIX_THIS_QUIRKY_NAMEHttpError
*/
async function reloadTasksResourceOnDatasetUpdated_FIX_THIS_QUIRKY_NAME(id, body, options) {
	return invokeFetch("scheduling/tasks", {
		method: "post",
		pathTemplate: "/api/scheduling/tasks/resources/{id}/actions/reload/on-dataset-updated",
		pathVariables: { id },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Creates a reload task for the app that runs when another task finishes with
* the given status.
* This is a convenience wrapper over `POST /scheduling/tasks`; the full task
* definition is generated server-side. Use `POST /scheduling/tasks` for advanced
* configurations.
*
* The upstream task (`onTaskId`) must belong to the caller's tenant, and the caller
* needs read access to the upstream task's app. The server adds the upstream task's
* `spaceId` and `appId` to the event correlations of the created task. If the
* upstream task is deleted later, this task no longer runs.
*
* Errors:
* - `400` `CHO-001`: the request body or the path `id` is invalid. This includes a
*   `name` or `description` over its maximum length, and an `onTaskStatus` other
*   than `succeeded`, `failed` or `any`.
* - `400` `CHO-016`: `onTaskId` is not a UUID, or no such task exists in the caller's tenant.
* - `403` `CHO-003`: the app does not exist, is not accessible, or the caller
*   lacks `app:reload` on it.
*   `CHO-015`: the caller cannot read the upstream task's app.
* - `422` `CHO-014`: the app already has the maximum number of tasks.
*   `CHO-018`: the caller has reached the per-user task quota, when one is configured.
* - `424` `CHO-013`: the task could not be stored. Nothing is created.
* - `404` `CHO-004`: the upstream task was deleted while the request was processed.
*
* @param id The unique identifier of the app to reload.
* @param body an object with the body content
* @throws ReloadTasksResourceOnTaskEvent_FIX_THIS_QUIRKY_NAMEHttpError
*/
async function reloadTasksResourceOnTaskEvent_FIX_THIS_QUIRKY_NAME(id, body, options) {
	return invokeFetch("scheduling/tasks", {
		method: "post",
		pathTemplate: "/api/scheduling/tasks/resources/{id}/actions/reload/on-task-event",
		pathVariables: { id },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Creates a reload task for the app that runs on a recurring time schedule.
* This is a convenience wrapper over `POST /scheduling/tasks`; the full task
* definition is generated server-side. Use `POST /scheduling/tasks` for advanced
* configurations.
*
* The schedule is evaluated in `timezone`. The first run is the next occurrence of
* `recurrence` after the task is created; creating a task never runs it immediately.
* A task is created disabled unless `enabled` is `true`.
*
* Errors:
* - `400` `CHO-001`: the request body or the path `id` is invalid. This includes a
*   `name` or `description` over its maximum length.
* - `400` `CHO-017`: the schedule was rejected: `recurrence` or `timezone` is
*   invalid, `endDateTime` is not after `startDateTime`, or `endDateTime` is in the past.
* - `403` `CHO-003`: the app does not exist, is not accessible, or the caller
*   lacks `app:reload` on it.
* - `404`: not returned for a missing app, which gets `403` as above. Kept for
*   compatibility.
* - `422` `CHO-014`: the app already has the maximum number of tasks.
*   `CHO-018`: the caller has reached the per-user task quota, when one is configured.
* - `424` `CHO-013`: the task could not be stored. Nothing is created.
* - `503` `CHO-024`: the scheduler is temporarily unavailable. Nothing is created.
*
* @param id The unique identifier of the app to reload.
* @param body an object with the body content
* @throws ReloadTasksResourceOnTimeSchedule_FIX_THIS_QUIRKY_NAMEHttpError
*/
async function reloadTasksResourceOnTimeSchedule_FIX_THIS_QUIRKY_NAME(id, body, options) {
	return invokeFetch("scheduling/tasks", {
		method: "post",
		pathTemplate: "/api/scheduling/tasks/resources/{id}/actions/reload/on-time-schedule",
		pathVariables: { id },
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
* @throws GetTaskResourceRunsHttpError
*/
async function getTaskResourceRuns(id, query, options) {
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
* @throws GetTaskGraphAncestorsHttpError
*/
async function getTaskGraphAncestors(id, query, options) {
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
* @throws GetTaskGraphChildrenHttpError
*/
async function getTaskGraphChildren(id, query, options) {
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
* @throws GetTaskGraphDescendantsHttpError
*/
async function getTaskGraphDescendants(id, query, options) {
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
* @throws GetTaskGraphParentsHttpError
*/
async function getTaskGraphParents(id, query, options) {
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
* @throws GetTaskSubgraphHttpError
*/
async function getTaskSubgraph(id, query, options) {
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
* @throws GetTaskLastRunHttpError
*/
async function getTaskLastRun(id, options) {
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
	createTaskWithoutQuery,
	reloadTasksResourceOnDatasetUpdated_FIX_THIS_QUIRKY_NAME,
	reloadTasksResourceOnTaskEvent_FIX_THIS_QUIRKY_NAME,
	reloadTasksResourceOnTimeSchedule_FIX_THIS_QUIRKY_NAME,
	getTaskResourceRuns,
	deleteTask,
	getTask,
	patchTask,
	updateTask,
	startTask,
	getTaskGraphAncestors,
	getTaskGraphChildren,
	getTaskGraphDescendants,
	getTaskGraphParents,
	getTaskSubgraph,
	getTaskRuns,
	getTaskLastRun,
	getTaskRunLog,
	clearCache
};

export { updateTask as C, tasks_exports as S, reloadTasksResourceOnDatasetUpdated_FIX_THIS_QUIRKY_NAME as _, getTask as a, startTask as b, getTaskGraphDescendants as c, getTaskResourceRuns as d, getTaskRunLog as f, patchTask as g, getTasks as h, deleteTask as i, getTaskGraphParents as l, getTaskSubgraph as m, createTask as n, getTaskGraphAncestors as o, getTaskRuns as p, createTaskWithoutQuery as r, getTaskGraphChildren as s, clearCache as t, getTaskLastRun as u, reloadTasksResourceOnTaskEvent_FIX_THIS_QUIRKY_NAME as v, tasksExport as x, reloadTasksResourceOnTimeSchedule_FIX_THIS_QUIRKY_NAME as y };