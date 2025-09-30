import "./chunks/utils-1j8VpsDa.js";
import "./chunks/public-runtime-modules-Bid7jvqK.js";
import { clearApiCache, invokeFetch } from "./chunks/invoke-fetch-B-tEkc9D.js";

//#region src/public/rest/automations.ts
/**
* Retrieves a list of the automations that the requesting user has access to.
* @example
* getAutomations(
*   {
*     fields: "lastRun,lastRunStatus,runMode,createdAt,updatedAt"
*   }
* )
*
* @param query an object with query parameters
* @throws GetAutomationsHttpError
*/
async function getAutomations(query, options) {
	return invokeFetch("automations", {
		method: "get",
		pathTemplate: "/api/v1/automations",
		query,
		options
	});
}
/**
* Creates a new automation. The requesting user must be assigned the `AutomationCreator` role.
*
* @param body an object with the body content
* @throws CreateAutomationHttpError
*/
async function createAutomation(body, options) {
	return invokeFetch("automations", {
		method: "post",
		pathTemplate: "/api/v1/automations",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Retrieves paginated usage metrics for automations. The requesting user must be assigned the `TenantAdmin` role.
*
* @param query an object with query parameters
* @throws GetAutomationsUsageMetricsHttpError
*/
async function getAutomationsUsageMetrics(query, options) {
	return invokeFetch("automations", {
		method: "get",
		pathTemplate: "/api/v1/automations/usage",
		query,
		options
	});
}
/**
* Deletes an automation. The requesting user must be the owner of the automation, or be assigned the `TenantAdmin` role.
*
* @param id The unique identifier for the automation.
* @throws DeleteAutomationHttpError
*/
async function deleteAutomation(id, options) {
	return invokeFetch("automations", {
		method: "delete",
		pathTemplate: "/api/v1/automations/{id}",
		pathVariables: { id },
		options
	});
}
/**
* Retrieves the full definition of an automation. The requesting user must be the owner of the automation.
*
* @param id The unique identifier for the automation.
* @param query an object with query parameters
* @throws GetAutomationWithQueryHttpError
*/
async function getAutomationWithQuery(id, query, options) {
	return invokeFetch("automations", {
		method: "get",
		pathTemplate: "/api/v1/automations/{id}",
		pathVariables: { id },
		query,
		options
	});
}
/**
* Retrieves the full definition of an automation. The requesting user must be the owner of the automation.
*
* @param id The unique identifier for the automation.
* @throws GetAutomationHttpError
*/
async function getAutomation(id, options) {
	return invokeFetch("automations", {
		method: "get",
		pathTemplate: "/api/v1/automations/{id}",
		pathVariables: { id },
		options
	});
}
/**
* Updates the full definition of an automation. The requesting user must be the owner of the automation.
*
* @param id The unique identifier for the automation.
* @param body an object with the body content
* @throws UpdateAutomationHttpError
*/
async function updateAutomation(id, body, options) {
	return invokeFetch("automations", {
		method: "put",
		pathTemplate: "/api/v1/automations/{id}",
		pathVariables: { id },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Changes the owner of an automation to another user. This action removes the history and change logs of this automation. All linked connections used in the automation are detached and not moved to the new owner.
*
* @param id The unique identifier for the automation.
* @param body an object with the body content
* @throws ChangeOwnerAutomationHttpError
*/
async function changeOwnerAutomation(id, body, options) {
	return invokeFetch("automations", {
		method: "post",
		pathTemplate: "/api/v1/automations/{id}/actions/change-owner",
		pathVariables: { id },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Changes the space of an automation by specifying a new space.
*
* @param id The unique identifier for the automation.
* @param body an object with the body content
* @throws ChangeSpaceAutomationHttpError
*/
async function changeSpaceAutomation(id, body, options) {
	return invokeFetch("automations", {
		method: "post",
		pathTemplate: "/api/v1/automations/{id}/actions/change-space",
		pathVariables: { id },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Duplicates an existing automation. The requesting user must be the owner of the automation.
*
* @param id The unique identifier for the automation.
* @param body an object with the body content
* @throws CopyAutomationHttpError
*/
async function copyAutomation(id, body, options) {
	return invokeFetch("automations", {
		method: "post",
		pathTemplate: "/api/v1/automations/{id}/actions/copy",
		pathVariables: { id },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Disables an automation so that it cannot be run. The requesting user must be the owner of the automation, or be assigned the `TenantAdmin` role.
*
* @param id The unique identifier for the automation.
* @throws DisableAutomationHttpError
*/
async function disableAutomation(id, options) {
	return invokeFetch("automations", {
		method: "post",
		pathTemplate: "/api/v1/automations/{id}/actions/disable",
		pathVariables: { id },
		options
	});
}
/**
* Enables an automation so that it can be run. The requesting user must be the owner of the automation, or be assigned the `TenantAdmin` role.
*
* @param id The unique identifier for the automation.
* @throws EnableAutomationHttpError
*/
async function enableAutomation(id, options) {
	return invokeFetch("automations", {
		method: "post",
		pathTemplate: "/api/v1/automations/{id}/actions/enable",
		pathVariables: { id },
		options
	});
}
/**
* Changes the owner of an automation to another user. This action removes the history and change logs of this automation. All linked connections used in the automation are detached and not moved to the new owner.
*
* @param id The unique identifier for the automation.
* @param body an object with the body content
* @throws MoveAutomationHttpError
*/
async function moveAutomation(id, body, options) {
	return invokeFetch("automations", {
		method: "post",
		pathTemplate: "/api/v1/automations/{id}/actions/move",
		pathVariables: { id },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Retrieves a list of runs for a specific automation. The requesting user must be the owner of the automation, or be assigned the `TenantAdmin` role.
*
* @param id The unique identifier for the automation.
* @param query an object with query parameters
* @throws GetAutomationRunsHttpError
*/
async function getAutomationRuns(id, query, options) {
	return invokeFetch("automations", {
		method: "get",
		pathTemplate: "/api/v1/automations/{id}/runs",
		pathVariables: { id },
		query,
		options
	});
}
/**
* Creates a runs for a specific automation. The requesting user must be the owner of the automation.
*
* @param id The unique identifier for the automation.
* @param body an object with the body content
* @throws QueueAutomationRunHttpError
*/
async function queueAutomationRun(id, body, options) {
	return invokeFetch("automations", {
		method: "post",
		pathTemplate: "/api/v1/automations/{id}/runs",
		pathVariables: { id },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Retrieves a specific run for an automation. The requesting user must be the owner of the automation.
*
* @param id The unique identifier for the automation.
* @param runId The unique identifier for the run.
* @param query an object with query parameters
* @throws GetAutomationRunWithQueryHttpError
*/
async function getAutomationRunWithQuery(id, runId, query, options) {
	return invokeFetch("automations", {
		method: "get",
		pathTemplate: "/api/v1/automations/{id}/runs/{runId}",
		pathVariables: {
			id,
			runId
		},
		query,
		options
	});
}
/**
* Retrieves a specific run for an automation. The requesting user must be the owner of the automation.
*
* @param id The unique identifier for the automation.
* @param runId The unique identifier for the run.
* @throws GetAutomationRunHttpError
*/
async function getAutomationRun(id, runId, options) {
	return invokeFetch("automations", {
		method: "get",
		pathTemplate: "/api/v1/automations/{id}/runs/{runId}",
		pathVariables: {
			id,
			runId
		},
		options
	});
}
/**
* Retrieves the URL for the debug log of a specific automation run. The requesting user must be the owner of the automation.
*
* @param id The unique identifier for the automation.
* @param runId The unique identifier for the run.
* @throws GetAutomationRunDetailsHttpError
*/
async function getAutomationRunDetails(id, runId, options) {
	return invokeFetch("automations", {
		method: "post",
		pathTemplate: "/api/v1/automations/{id}/runs/{runId}/actions/export",
		pathVariables: {
			id,
			runId
		},
		options
	});
}
/**
* Retries a specific run by creating a new run using the same inputs. The requesting user must be the owner of the automation.
*
* @param id The unique identifier for the automation.
* @param runId The unique identifier for the run.
* @throws RetryAutomationRunHttpError
*/
async function retryAutomationRun(id, runId, options) {
	return invokeFetch("automations", {
		method: "post",
		pathTemplate: "/api/v1/automations/{id}/runs/{runId}/actions/retry",
		pathVariables: {
			id,
			runId
		},
		options
	});
}
/**
* Forcefully stops an automation run immediately. The requesting user must be the owner of the automation.
*
* @param id The unique identifier for the automation.
* @param runId The unique identifier for the run.
* @throws StopAutomationRunHttpError
*/
async function stopAutomationRun(id, runId, options) {
	return invokeFetch("automations", {
		method: "post",
		pathTemplate: "/api/v1/automations/{id}/runs/{runId}/actions/stop",
		pathVariables: {
			id,
			runId
		},
		options
	});
}
/**
* Clears the cache for automations api requests.
*/
function clearCache() {
	return clearApiCache("automations");
}
/**
* Functions for the automations api
*/
const automationsExport = {
	getAutomations,
	createAutomation,
	getAutomationsUsageMetrics,
	deleteAutomation,
	getAutomationWithQuery,
	getAutomation,
	updateAutomation,
	changeOwnerAutomation,
	changeSpaceAutomation,
	copyAutomation,
	disableAutomation,
	enableAutomation,
	moveAutomation,
	getAutomationRuns,
	queueAutomationRun,
	getAutomationRunWithQuery,
	getAutomationRun,
	getAutomationRunDetails,
	retryAutomationRun,
	stopAutomationRun,
	clearCache
};
var automations_default = automationsExport;

//#endregion
export { changeOwnerAutomation, changeSpaceAutomation, clearCache, copyAutomation, createAutomation, automations_default as default, deleteAutomation, disableAutomation, enableAutomation, getAutomation, getAutomationRun, getAutomationRunDetails, getAutomationRunWithQuery, getAutomationRuns, getAutomationWithQuery, getAutomations, getAutomationsUsageMetrics, moveAutomation, queueAutomationRun, retryAutomationRun, stopAutomationRun, updateAutomation };