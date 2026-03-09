import { t as __exportAll } from "../chunks/chunk-BdHzlgOL.js";
import "../chunks/public-runtime-modules-mBjjPn7I.js";
import { n as invokeFetch, t as clearApiCache } from "../chunks/invoke-fetch-DxtIsSVQ.js";

//#region src/public/rest/workflows/automations.ts
var automations_exports = /* @__PURE__ */ __exportAll({
	changeOwnerAutomation: () => changeOwnerAutomation,
	changeSpaceAutomation: () => changeSpaceAutomation,
	clearCache: () => clearCache,
	copyAutomation: () => copyAutomation,
	createAutomation: () => createAutomation,
	createAutomationRun: () => createAutomationRun,
	default: () => automationsExport,
	deleteAutomation: () => deleteAutomation,
	disableAutomation: () => disableAutomation,
	enableAutomation: () => enableAutomation,
	exportAutomationRun: () => exportAutomationRun,
	getAutomation: () => getAutomation,
	getAutomationRun: () => getAutomationRun,
	getAutomationRunDebug: () => getAutomationRunDebug,
	getAutomationRuns: () => getAutomationRuns,
	getAutomations: () => getAutomations,
	getAutomationsSettings: () => getAutomationsSettings,
	getAutomationsUsageMetrics: () => getAutomationsUsageMetrics,
	moveAutomation: () => moveAutomation,
	retryAutomationRun: () => retryAutomationRun,
	stopAutomationRun: () => stopAutomationRun,
	updateAutomation: () => updateAutomation,
	updateAutomationsSettings: () => updateAutomationsSettings
});
/**
* Retrieves a list of the automations that the requesting user has access to.
*
* @param query an object with query parameters
* @throws GetAutomationsHttpError
*/
async function getAutomations(query, options) {
	return invokeFetch("workflows/automations", {
		method: "get",
		pathTemplate: "/api/workflows/automations",
		query,
		options
	});
}
/**
* Creates a new automation. The requesting user must be assigned the `AutomationCreator` role or have at least one of the following scopes: `automations`, `admin.automations`, `automations.private` or `automations.shared`.
*
* @param body an object with the body content
* @throws CreateAutomationHttpError
*/
async function createAutomation(body, options) {
	return invokeFetch("workflows/automations", {
		method: "post",
		pathTemplate: "/api/workflows/automations",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Retrieves the global automation settings for the tenant.
*
* @throws GetAutomationsSettingsHttpError
*/
async function getAutomationsSettings(options) {
	return invokeFetch("workflows/automations", {
		method: "get",
		pathTemplate: "/api/workflows/automations/settings",
		options
	});
}
/**
* Updates the global automation settings for the tenant.
*
* @param body an object with the body content
* @throws UpdateAutomationsSettingsHttpError
*/
async function updateAutomationsSettings(body, options) {
	return invokeFetch("workflows/automations", {
		method: "put",
		pathTemplate: "/api/workflows/automations/settings",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Retrieves paginated usage metrics for automations. The requesting user must be assigned the `TenantAdmin` or `AnalyticsAdmin` role.
*
* @param query an object with query parameters
* @throws GetAutomationsUsageMetricsHttpError
*/
async function getAutomationsUsageMetrics(query, options) {
	return invokeFetch("workflows/automations", {
		method: "get",
		pathTemplate: "/api/workflows/automations/usage",
		query,
		options
	});
}
/**
* Deletes an automation. The requesting user must meet at least one of the following conditions:
* - be the owner of the automation
* - be assigned one of the following roles: `AnalyticsAdmin`, `TenantAdmin`
* - have at least one of the following scopes: `admin.automations`, `admin.automations:strict`, `automations.private`, or `automations.shared`
*
* @param id The unique identifier for the automation.
* @throws DeleteAutomationHttpError
*/
async function deleteAutomation(id, options) {
	return invokeFetch("workflows/automations", {
		method: "delete",
		pathTemplate: "/api/workflows/automations/{id}",
		pathVariables: { id },
		options
	});
}
/**
* Retrieves the full definition of an automation. The requesting user must be the owner of the automation and either be assigned one of the roles: `AutomationsCreator`, `TenantAdmin` or have at least one of the following scopes (depending on whether the automation is in a private or shared space): `automations`, `automations.private` or `automations.shared`.
*
* @param id The unique identifier for the automation.
* @throws GetAutomationHttpError
*/
async function getAutomation(id, options) {
	return invokeFetch("workflows/automations", {
		method: "get",
		pathTemplate: "/api/workflows/automations/{id}",
		pathVariables: { id },
		options
	});
}
/**
* Updates the full definition of an automation. The requesting user must be the owner of the automation and either be assigned the `AutomationCreator` role or have at least one of the following scopes: `automations`, `admin.automations`, `automations.private` or `automations.shared`.
*
* @param id The unique identifier for the automation.
* @param body an object with the body content
* @throws UpdateAutomationHttpError
*/
async function updateAutomation(id, body, options) {
	return invokeFetch("workflows/automations", {
		method: "put",
		pathTemplate: "/api/workflows/automations/{id}",
		pathVariables: { id },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Changes the owner of an automation to another user. This action removes the history and change logs of this automation. All linked connections used in the automation are detached and not moved to the new owner. The requesting user must be assigned one of the following roles: `TenantAdmin`, `AnalyticsAdmin` or have at least one of the following scopes: `admin.automations`, `admin.automations:strict`.
*
* @param id The unique identifier for the automation.
* @param body an object with the body content
* @throws ChangeOwnerAutomationHttpError
*/
async function changeOwnerAutomation(id, body, options) {
	return invokeFetch("workflows/automations", {
		method: "post",
		pathTemplate: "/api/workflows/automations/{id}/actions/change-owner",
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
	return invokeFetch("workflows/automations", {
		method: "post",
		pathTemplate: "/api/workflows/automations/{id}/actions/change-space",
		pathVariables: { id },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Duplicates an existing automation. The requesting user must be the owner of the automation or have at least one of the following scopes: `automations`, `admin.automations`, `automations.private` or `automations.shared`.
*
* @param id The unique identifier for the automation.
* @param body an object with the body content
* @throws CopyAutomationHttpError
*/
async function copyAutomation(id, body, options) {
	return invokeFetch("workflows/automations", {
		method: "post",
		pathTemplate: "/api/workflows/automations/{id}/actions/copy",
		pathVariables: { id },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Disables an automation so that it cannot be run. To disable an automation, the requesting user must meet at least one of the following conditions:
* - be the owner of the automation
* - be assigned one of the following roles: `TenantAdmin`, `AnalyticsAdmin`
* - have at least one of the following scopes: `admin.automations`, `admin.automations:strict`, `automations.private`, or `automations.shared`
*
* @param id The unique identifier for the automation.
* @throws DisableAutomationHttpError
*/
async function disableAutomation(id, options) {
	return invokeFetch("workflows/automations", {
		method: "post",
		pathTemplate: "/api/workflows/automations/{id}/actions/disable",
		pathVariables: { id },
		options
	});
}
/**
* Enables an automation so that it can be run. To enable an automation, the requesting user must meet at least one of the following conditions:
* - be the owner of the automation
* - be assigned one of the following roles: `AnalyticsAdmin`, `TenantAdmin`
* - have at least one of the following scopes: `admin.automations`, `admin.automations:strict`, `automations.private`, or `automations.shared`
*
* @param id The unique identifier for the automation.
* @throws EnableAutomationHttpError
*/
async function enableAutomation(id, options) {
	return invokeFetch("workflows/automations", {
		method: "post",
		pathTemplate: "/api/workflows/automations/{id}/actions/enable",
		pathVariables: { id },
		options
	});
}
/**
* Changes the owner of an automation to another user. This action removes the history and change logs of this automation. All linked connections used in the automation are detached and not moved to the new owner. The requesting user must be assigned one of the following roles: `TenantAdmin`, `AnalyticsAdmin` or have at least one of the following scopes: `admin.automations`, `admin.automations:strict`.
*
* @param id The unique identifier for the automation.
* @param body an object with the body content
* @throws MoveAutomationHttpError
*/
async function moveAutomation(id, body, options) {
	return invokeFetch("workflows/automations", {
		method: "post",
		pathTemplate: "/api/workflows/automations/{id}/actions/move",
		pathVariables: { id },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Retrieves a list of runs for a specific automation. The requesting user must be the owner of the automation, or be assigned the one of roles: `TenantAdmin`, `AnalyticsAdmin`. Alternatively, the user must have at least one of the following scopes: `admin.automation-runs`, `automation-runs.private`, or `automation-runs.shared`.
*
* @param id The unique identifier for the automation.
* @param query an object with query parameters
* @throws GetAutomationRunsHttpError
*/
async function getAutomationRuns(id, query, options) {
	return invokeFetch("workflows/automations", {
		method: "get",
		pathTemplate: "/api/workflows/automations/{id}/runs",
		pathVariables: { id },
		query,
		options
	});
}
/**
* Creates a run for a specific automation. Depending on the space the automation belongs to, the requesting user must meet the following requirement:
* - Private space: be the owner of the automation and have the `automations.private` scope
* - Shared space: be editor or operator in shared space and have `automations.shared` scope.
*
* @param id The unique identifier for the automation.
* @param body an object with the body content
* @throws CreateAutomationRunHttpError
*/
async function createAutomationRun(id, body, options) {
	return invokeFetch("workflows/automations", {
		method: "post",
		pathTemplate: "/api/workflows/automations/{id}/runs",
		pathVariables: { id },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Retrieves a specific run for an automation. Depending on the space the automation belongs to, the requesting user must meet the following requirement:
* - Private space: be the owner of the automation and have the `automations.private` scope
* - Shared space: be editor or operator in shared space and have `automations.shared` scope.
*
* @param id The unique identifier for the automation.
* @param runId The unique identifier for the run.
* @throws GetAutomationRunHttpError
*/
async function getAutomationRun(id, runId, options) {
	return invokeFetch("workflows/automations", {
		method: "get",
		pathTemplate: "/api/workflows/automations/{id}/runs/{runId}",
		pathVariables: {
			id,
			runId
		},
		options
	});
}
/**
* Retrieves the URL for the debug log of a specific automation run. Depending on the space the automation belongs to, the requesting user must meet the following requirement:
* - Private space: be the owner of the automation and have the `automations.private` scope
* - Shared space: be editor or operator in shared space and have `automations.shared` scope.
*
* @param id The unique identifier for the automation.
* @param runId The unique identifier for the run.
* @throws ExportAutomationRunHttpError
*/
async function exportAutomationRun(id, runId, options) {
	return invokeFetch("workflows/automations", {
		method: "post",
		pathTemplate: "/api/workflows/automations/{id}/runs/{runId}/actions/export",
		pathVariables: {
			id,
			runId
		},
		options
	});
}
/**
* Retries a specific run by creating a new run using the same inputs. Depending on the space the automation belongs to, the requesting user must meet the following requirement:
* - Private space: be the owner of the automation and have the `automations.private` scope
* - Shared space: be editor or operator in shared space and have `automations.shared` scope.
*
* @param id The unique identifier for the automation.
* @param runId The unique identifier for the run.
* @throws RetryAutomationRunHttpError
*/
async function retryAutomationRun(id, runId, options) {
	return invokeFetch("workflows/automations", {
		method: "post",
		pathTemplate: "/api/workflows/automations/{id}/runs/{runId}/actions/retry",
		pathVariables: {
			id,
			runId
		},
		options
	});
}
/**
* Forcefully stops an automation run immediately. Depending on the space the automation belongs to, the requesting user must meet the following requirement:
* - Private space: be the owner of the automation and have the `automations.private` scope
* - Shared space: be editor or operator in shared space and have `automations.shared` scope.
*
* @param id The unique identifier for the automation.
* @param runId The unique identifier for the run.
* @throws StopAutomationRunHttpError
*/
async function stopAutomationRun(id, runId, options) {
	return invokeFetch("workflows/automations", {
		method: "post",
		pathTemplate: "/api/workflows/automations/{id}/runs/{runId}/actions/stop",
		pathVariables: {
			id,
			runId
		},
		options
	});
}
/**
* Retrieves the debug log for a specific run of an automation. Depending on the space the automation belongs to, the requesting user must meet the following requirement:
* - Private space: be the owner of the automation and have the `automations.private` scope
* - Shared space: be editor or operator in shared space and have `automations.shared` scope.
*
* @param id The unique identifier for the automation.
* @param runId The unique identifier for the run.
* @throws GetAutomationRunDebugHttpError
*/
async function getAutomationRunDebug(id, runId, options) {
	return invokeFetch("workflows/automations", {
		method: "get",
		pathTemplate: "/api/workflows/automations/{id}/runs/{runId}/debug",
		pathVariables: {
			id,
			runId
		},
		options
	});
}
/**
* Clears the cache for workflows/automations api requests.
*/
function clearCache() {
	return clearApiCache("workflows/automations");
}
/**
* Functions for the automations api
*/
const automationsExport = {
	getAutomations,
	createAutomation,
	getAutomationsSettings,
	updateAutomationsSettings,
	getAutomationsUsageMetrics,
	deleteAutomation,
	getAutomation,
	updateAutomation,
	changeOwnerAutomation,
	changeSpaceAutomation,
	copyAutomation,
	disableAutomation,
	enableAutomation,
	moveAutomation,
	getAutomationRuns,
	createAutomationRun,
	getAutomationRun,
	exportAutomationRun,
	retryAutomationRun,
	stopAutomationRun,
	getAutomationRunDebug,
	clearCache
};

//#endregion
export { changeOwnerAutomation, changeSpaceAutomation, clearCache, copyAutomation, createAutomation, createAutomationRun, automationsExport as default, deleteAutomation, disableAutomation, enableAutomation, exportAutomationRun, getAutomation, getAutomationRun, getAutomationRunDebug, getAutomationRuns, getAutomations, getAutomationsSettings, getAutomationsUsageMetrics, moveAutomation, retryAutomationRun, stopAutomationRun, automations_exports as t, updateAutomation, updateAutomationsSettings };