import { t as __exportAll } from "../chunks/rolldown-runtime-w6R9maHv.js";
import { n as invokeFetch, t as clearApiCache } from "../chunks/invoke-fetch-CMDeEDft.js";

//#region src/public/rest/alerting/sharing-tasks.ts
var sharing_tasks_exports = /* @__PURE__ */ __exportAll({
	clearCache: () => clearCache,
	default: () => sharingTasksExport,
	getSharingTaskTaskExecution: () => getSharingTaskTaskExecution,
	getSharingTaskTaskExecutions: () => getSharingTaskTaskExecutions
});
/**
* Returns the execution history of a sharing task. Executions that are in progress are not included.
*
* @param taskId The sharing task identifier.
* @param query an object with query parameters
* @throws GetSharingTaskTaskExecutionsHttpError
*/
async function getSharingTaskTaskExecutions(taskId, query, options) {
	return invokeFetch("alerting/sharing-tasks", {
		method: "get",
		pathTemplate: "/api/alerting/sharing-tasks/{taskId}/task-executions",
		pathVariables: { taskId },
		query,
		options
	});
}
/**
* Get a sharing task execution by ID
*
* @param taskId The sharing task identifier.
* @param taskExecutionId The task execution identifier.
* @throws GetSharingTaskTaskExecutionHttpError
*/
async function getSharingTaskTaskExecution(taskId, taskExecutionId, options) {
	return invokeFetch("alerting/sharing-tasks", {
		method: "get",
		pathTemplate: "/api/alerting/sharing-tasks/{taskId}/task-executions/{taskExecutionId}",
		pathVariables: {
			taskId,
			taskExecutionId
		},
		options
	});
}
/**
* Clears the cache for alerting/sharing-tasks api requests.
*/
function clearCache() {
	return clearApiCache("alerting/sharing-tasks");
}
/**
* Functions for the sharing-tasks api
*/
const sharingTasksExport = {
	getSharingTaskTaskExecutions,
	getSharingTaskTaskExecution,
	clearCache
};

//#endregion
export { clearCache, sharingTasksExport as default, getSharingTaskTaskExecution, getSharingTaskTaskExecutions, sharing_tasks_exports as t };