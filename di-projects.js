import "./chunks/public-runtime-modules-C7GMbX7E.js";
import { n as invokeFetch, t as clearApiCache } from "./chunks/invoke-fetch-CBsbPeVH.js";

//#region src/public/rest/di-projects.ts
/**
* List data integration projects.
*
* @param query an object with query parameters
* @throws GetDiProjectsHttpError
*/
async function getDiProjects(query, options) {
	return invokeFetch("di-projects", {
		method: "get",
		pathTemplate: "/api/v1/di-projects",
		query,
		options
	});
}
/**
* Creates a new data integration project in the specified space.
*
* @param body an object with the body content
* @throws CreateDiProjectHttpError
*/
async function createDiProject(body, options) {
	return invokeFetch("di-projects", {
		method: "post",
		pathTemplate: "/api/v1/di-projects",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Retrieves the status of an asynchronous operation.
*
* @param actionId Identifier of the action.
* @param query an object with query parameters
* @throws GetDiProjectHttpError
*/
async function getDiProject(actionId, query, options) {
	return invokeFetch("di-projects", {
		method: "get",
		pathTemplate: "/api/v1/di-projects/actions/{actionId}",
		pathVariables: { actionId },
		query,
		options
	});
}
/**
* Exports the specified data integration project.
*
* @param projectId Identifier of the data project.
* @param body an object with the body content
* @throws ExportDiProjectHttpError
*/
async function exportDiProject(projectId, body, options) {
	return invokeFetch("di-projects", {
		method: "post",
		pathTemplate: "/api/v1/di-projects/{projectId}/actions/export",
		pathVariables: { projectId },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Imports a data integration project from a `.zip` file.
*
* @param projectId Identifier of the data project.
* @param body an object with the body content
* @throws ImportDiProjectHttpError
*/
async function importDiProject(projectId, body, options) {
	return invokeFetch("di-projects", {
		method: "post",
		pathTemplate: "/api/v1/di-projects/{projectId}/actions/import",
		pathVariables: { projectId },
		body,
		contentType: "multipart/form-data",
		options
	});
}
/**
* Prepares the data integration project and its tasks for execution.
*
* @param projectId Identifier of the data project.
* @param body an object with the body content
* @throws PrepareDiProjectHttpError
*/
async function prepareDiProject(projectId, body, options) {
	return invokeFetch("di-projects", {
		method: "post",
		pathTemplate: "/api/v1/di-projects/{projectId}/actions/prepare",
		pathVariables: { projectId },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Validates the data integration project and its tasks.
*
* @param projectId Identifier of the data project.
* @param body an object with the body content
* @throws ValidateDiProjectHttpError
*/
async function validateDiProject(projectId, body, options) {
	return invokeFetch("di-projects", {
		method: "post",
		pathTemplate: "/api/v1/di-projects/{projectId}/actions/validate",
		pathVariables: { projectId },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Retrieves the export variables for a specific data integration project.
*
* @param projectId Identifier of the data project.
* @param query an object with query parameters
* @throws GetDiProjectExportVariablesHttpError
*/
async function getDiProjectExportVariables(projectId, query, options) {
	return invokeFetch("di-projects", {
		method: "get",
		pathTemplate: "/api/v1/di-projects/{projectId}/bindings",
		pathVariables: { projectId },
		query,
		options
	});
}
/**
* Updates the export variables for a specific data integration project.
*
* @param projectId Identifier of the data project.
* @param body an object with the body content
* @throws SetDiProjectExportVariablesHttpError
*/
async function setDiProjectExportVariables(projectId, body, options) {
	return invokeFetch("di-projects", {
		method: "put",
		pathTemplate: "/api/v1/di-projects/{projectId}/bindings",
		pathVariables: { projectId },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Lists data tasks within a given data integration project.
*
* @param projectId Identifier of the data project.
* @throws GetDiProjectDiTasksHttpError
*/
async function getDiProjectDiTasks(projectId, options) {
	return invokeFetch("di-projects", {
		method: "get",
		pathTemplate: "/api/v1/di-projects/{projectId}/di-tasks",
		pathVariables: { projectId },
		options
	});
}
/**
* Get a specific data task within a project.
*
* @param projectId Identifier of the data project.
* @param dataTaskId Identifier of the data task.
* @throws GetDiProjectDiTaskHttpError
*/
async function getDiProjectDiTask(projectId, dataTaskId, options) {
	return invokeFetch("di-projects", {
		method: "get",
		pathTemplate: "/api/v1/di-projects/{projectId}/di-tasks/{dataTaskId}",
		pathVariables: {
			projectId,
			dataTaskId
		},
		options
	});
}
/**
* Prepares the specified data task for execution.
*
* @param projectId Identifier of the data project.
* @param dataTaskId Identifier of the data task.
* @param body an object with the body content
* @throws PrepareDiProjectDiTaskHttpError
*/
async function prepareDiProjectDiTask(projectId, dataTaskId, body, options) {
	return invokeFetch("di-projects", {
		method: "post",
		pathTemplate: "/api/v1/di-projects/{projectId}/di-tasks/{dataTaskId}/actions/prepare",
		pathVariables: {
			projectId,
			dataTaskId
		},
		body,
		contentType: "application/json",
		options
	});
}
/**
* Registers a request to reload the datasets associated with the specified data task. The reload does not occur immediately; it will take effect on the next scheduled or manual run of the task.
*
* @param projectId Identifier of the data project.
* @param dataTaskId Identifier of the data task.
* @param body an object with the body content
* @throws RequestReloadDiProjectDiTaskHttpError
*/
async function requestReloadDiProjectDiTask(projectId, dataTaskId, body, options) {
	return invokeFetch("di-projects", {
		method: "post",
		pathTemplate: "/api/v1/di-projects/{projectId}/di-tasks/{dataTaskId}/actions/request-reload",
		pathVariables: {
			projectId,
			dataTaskId
		},
		body,
		contentType: "application/json",
		options
	});
}
/**
* Validates the specified data task.
*
* @param projectId Identifier of the data project.
* @param dataTaskId Identifier of the data task.
* @param body an object with the body content
* @throws ValidateDiProjectDiTaskHttpError
*/
async function validateDiProjectDiTask(projectId, dataTaskId, body, options) {
	return invokeFetch("di-projects", {
		method: "post",
		pathTemplate: "/api/v1/di-projects/{projectId}/di-tasks/{dataTaskId}/actions/validate",
		pathVariables: {
			projectId,
			dataTaskId
		},
		body,
		contentType: "application/json",
		options
	});
}
/**
* Start a data task on a data integration project.
*
* @param projectId Identifier of the data project.
* @param dataTaskId Identifier of the data task.
* @param body an object with the body content
* @throws StartDiProjectDiTaskRuntimeWithBodyHttpError
*/
async function startDiProjectDiTaskRuntimeWithBody(projectId, dataTaskId, body, options) {
	return invokeFetch("di-projects", {
		method: "post",
		pathTemplate: "/api/v1/di-projects/{projectId}/di-tasks/{dataTaskId}/runtime/actions/start",
		pathVariables: {
			projectId,
			dataTaskId
		},
		body,
		contentType: "application/json",
		options
	});
}
/**
* Start a data task on a data integration project.
*
* @param projectId Identifier of the data project.
* @param dataTaskId Identifier of the data task.
* @throws StartDiProjectDiTaskRuntimeHttpError
*/
async function startDiProjectDiTaskRuntime(projectId, dataTaskId, options) {
	return invokeFetch("di-projects", {
		method: "post",
		pathTemplate: "/api/v1/di-projects/{projectId}/di-tasks/{dataTaskId}/runtime/actions/start",
		pathVariables: {
			projectId,
			dataTaskId
		},
		options
	});
}
/**
* Stop a data task on a data integration project.
*
* @param projectId Identifier of the data project.
* @param dataTaskId Identifier of the data task.
* @throws StopDiProjectDiTaskRuntimeHttpError
*/
async function stopDiProjectDiTaskRuntime(projectId, dataTaskId, options) {
	return invokeFetch("di-projects", {
		method: "post",
		pathTemplate: "/api/v1/di-projects/{projectId}/di-tasks/{dataTaskId}/runtime/actions/stop",
		pathVariables: {
			projectId,
			dataTaskId
		},
		options
	});
}
/**
* Get the current runtime state of a data task
*
* @param projectId Identifier of the data project.
* @param dataTaskId Identifier of the data task.
* @throws GetDiProjectDiTaskRuntimeStateHttpError
*/
async function getDiProjectDiTaskRuntimeState(projectId, dataTaskId, options) {
	return invokeFetch("di-projects", {
		method: "get",
		pathTemplate: "/api/v1/di-projects/{projectId}/di-tasks/{dataTaskId}/runtime/state",
		pathVariables: {
			projectId,
			dataTaskId
		},
		options
	});
}
/**
* Returns dataset-level runtime state for a data task
*
* @param projectId Identifier of the data project.
* @param dataTaskId Identifier of the data task.
* @throws GetDiProjectDiTaskRuntimeStateDatasetsHttpError
*/
async function getDiProjectDiTaskRuntimeStateDatasets(projectId, dataTaskId, options) {
	return invokeFetch("di-projects", {
		method: "get",
		pathTemplate: "/api/v1/di-projects/{projectId}/di-tasks/{dataTaskId}/runtime/state/datasets",
		pathVariables: {
			projectId,
			dataTaskId
		},
		options
	});
}
/**
* Clears the cache for di-projects api requests.
*/
function clearCache() {
	return clearApiCache("di-projects");
}
/**
* Functions for the di-projects api
*/
const diProjectsExport = {
	getDiProjects,
	createDiProject,
	getDiProject,
	exportDiProject,
	importDiProject,
	prepareDiProject,
	validateDiProject,
	getDiProjectExportVariables,
	setDiProjectExportVariables,
	getDiProjectDiTasks,
	getDiProjectDiTask,
	prepareDiProjectDiTask,
	requestReloadDiProjectDiTask,
	validateDiProjectDiTask,
	startDiProjectDiTaskRuntimeWithBody,
	startDiProjectDiTaskRuntime,
	stopDiProjectDiTaskRuntime,
	getDiProjectDiTaskRuntimeState,
	getDiProjectDiTaskRuntimeStateDatasets,
	clearCache
};
var di_projects_default = diProjectsExport;

//#endregion
export { clearCache, createDiProject, di_projects_default as default, exportDiProject, getDiProject, getDiProjectDiTask, getDiProjectDiTaskRuntimeState, getDiProjectDiTaskRuntimeStateDatasets, getDiProjectDiTasks, getDiProjectExportVariables, getDiProjects, importDiProject, prepareDiProject, prepareDiProjectDiTask, requestReloadDiProjectDiTask, setDiProjectExportVariables, startDiProjectDiTaskRuntime, startDiProjectDiTaskRuntimeWithBody, stopDiProjectDiTaskRuntime, validateDiProject, validateDiProjectDiTask };