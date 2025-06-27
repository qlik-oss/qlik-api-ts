import "./chunks/utils-qEQ6sEXX.js";
import "./chunks/public-runtime-modules-n9GdugeL.js";
import { clearApiCache, invokeFetch } from "./chunks/invoke-fetch-DeSj7yXG.js";

//#region src/public/rest/data-alerts.ts
/**
* Get a list of alerting tasks.
*
* @param query an object with query parameters
* @throws GetDataAlertsHttpError
*/
async function getDataAlerts(query, options) {
	return invokeFetch("data-alerts", {
		method: "get",
		pathTemplate: "/api/v1/data-alerts",
		query,
		options
	});
}
/**
* Creates a new alerting task.
*
* @param body an object with the body content
* @throws CreateDataAlertHttpError
*/
async function createDataAlert(body, options) {
	return invokeFetch("data-alerts", {
		method: "post",
		pathTemplate: "/api/v1/data-alerts",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Creates a new alerting trigger action.
*
* @param body an object with the body content
* @throws TriggerDataAlertsHttpError
*/
async function triggerDataAlerts(body, options) {
	return invokeFetch("data-alerts", {
		method: "post",
		pathTemplate: "/api/v1/data-alerts/actions/trigger",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Validates a new alerting task. Current support includes validation for recipients only.
*
* @param body an object with the body content
* @throws ValidateDataAlertsHttpError
*/
async function validateDataAlerts(body, options) {
	return invokeFetch("data-alerts", {
		method: "post",
		pathTemplate: "/api/v1/data-alerts/actions/validate",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Lists alerting settings.
*
* @throws GetDataAlertsSettingsHttpError
*/
async function getDataAlertsSettings(options) {
	return invokeFetch("data-alerts", {
		method: "get",
		pathTemplate: "/api/v1/data-alerts/settings",
		options
	});
}
/**
* Updates Alerting configuration. Accessible only by tenant admins.
*
* @param body an object with the body content
* @throws SetDataAlertsSettingsHttpError
*/
async function setDataAlertsSettings(body, options) {
	return invokeFetch("data-alerts", {
		method: "put",
		pathTemplate: "/api/v1/data-alerts/settings",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Deletes an alerting task.
*
* @param alertId The alerting task identifier.
* @throws DeleteDataAlertHttpError
*/
async function deleteDataAlert(alertId, options) {
	return invokeFetch("data-alerts", {
		method: "delete",
		pathTemplate: "/api/v1/data-alerts/{alertId}",
		pathVariables: { alertId },
		options
	});
}
/**
* Get an alerting task by its id
*
* @param alertId The alerting task identifier.
* @throws GetDataAlertHttpError
*/
async function getDataAlert(alertId, options) {
	return invokeFetch("data-alerts", {
		method: "get",
		pathTemplate: "/api/v1/data-alerts/{alertId}",
		pathVariables: { alertId },
		options
	});
}
/**
* Updates an existing alerting task
*
* @param alertId The alerting task identifier.
* @param body an object with the body content
* @throws PatchDataAlertHttpError
*/
async function patchDataAlert(alertId, body, options) {
	return invokeFetch("data-alerts", {
		method: "patch",
		pathTemplate: "/api/v1/data-alerts/{alertId}",
		pathVariables: { alertId },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Get the condition associated with an alerting task
*
* @param alertId The alerting task identifier.
* @throws GetDataAlertConditionHttpError
*/
async function getDataAlertCondition(alertId, options) {
	return invokeFetch("data-alerts", {
		method: "get",
		pathTemplate: "/api/v1/data-alerts/{alertId}/condition",
		pathVariables: { alertId },
		options
	});
}
/**
* Deletes an execution.
*
* @param alertId The alerting task identifier.
* @param executionId The execution identifier.
* @throws DeleteDataAlertExecutionHttpError
*/
async function deleteDataAlertExecution(alertId, executionId, options) {
	return invokeFetch("data-alerts", {
		method: "delete",
		pathTemplate: "/api/v1/data-alerts/{alertId}/executions/{executionId}",
		pathVariables: {
			alertId,
			executionId
		},
		options
	});
}
/**
* Gets a specified alerting execution.
*
* @param alertId The alerting task identifier.
* @param executionId The execution identifier. If value is "latest", the latest execution will be returned
* @throws GetDataAlertExecutionHttpError
*/
async function getDataAlertExecution(alertId, executionId, options) {
	return invokeFetch("data-alerts", {
		method: "get",
		pathTemplate: "/api/v1/data-alerts/{alertId}/executions/{executionId}",
		pathVariables: {
			alertId,
			executionId
		},
		options
	});
}
/**
* Get the recipient stats for an alerting task
*
* @param alertId The alerting task identifier.
* @param query an object with query parameters
* @throws GetDataAlertRecipientStatsHttpError
*/
async function getDataAlertRecipientStats(alertId, query, options) {
	return invokeFetch("data-alerts", {
		method: "get",
		pathTemplate: "/api/v1/data-alerts/{alertId}/recipient-stats",
		pathVariables: { alertId },
		query,
		options
	});
}
/**
* Lists all alerting-executions linked to a user and a tenant.
*
* @param taskId The alerting task identifier.
* @param query an object with query parameters
* @throws GetDataAlertExecutionsHttpError
*/
async function getDataAlertExecutions(taskId, query, options) {
	return invokeFetch("data-alerts", {
		method: "get",
		pathTemplate: "/api/v1/data-alerts/{taskId}/executions",
		pathVariables: { taskId },
		query,
		options
	});
}
/**
* @deprecated
*
* Gets the stats for alerting task executions
*
* @param taskId The alerting task identifier.
* @param query an object with query parameters
* @throws GetDataAlertExecutionsStatsHttpError
*/
async function getDataAlertExecutionsStats(taskId, query, options) {
	return invokeFetch("data-alerts", {
		method: "get",
		pathTemplate: "/api/v1/data-alerts/{taskId}/executions/stats",
		pathVariables: { taskId },
		query,
		options
	});
}
/**
* Gets the content of an evaluation from an execution
*
* @param taskId The alerting task identifier.
* @param executionId The execution identifier.
* @throws GetDataAlertExecutionEvaluationsHttpError
*/
async function getDataAlertExecutionEvaluations(taskId, executionId, options) {
	return invokeFetch("data-alerts", {
		method: "get",
		pathTemplate: "/api/v1/data-alerts/{taskId}/executions/{executionId}/evaluations",
		pathVariables: {
			taskId,
			executionId
		},
		options
	});
}
/**
* Clears the cache for data-alerts api requests.
*/
function clearCache() {
	return clearApiCache("data-alerts");
}
/**
* Functions for the data-alerts api
*/
const dataAlertsExport = {
	getDataAlerts,
	createDataAlert,
	triggerDataAlerts,
	validateDataAlerts,
	getDataAlertsSettings,
	setDataAlertsSettings,
	deleteDataAlert,
	getDataAlert,
	patchDataAlert,
	getDataAlertCondition,
	deleteDataAlertExecution,
	getDataAlertExecution,
	getDataAlertRecipientStats,
	getDataAlertExecutions,
	getDataAlertExecutionsStats,
	getDataAlertExecutionEvaluations,
	clearCache
};
var data_alerts_default = dataAlertsExport;

//#endregion
export { clearCache, createDataAlert, data_alerts_default as default, deleteDataAlert, deleteDataAlertExecution, getDataAlert, getDataAlertCondition, getDataAlertExecution, getDataAlertExecutionEvaluations, getDataAlertExecutions, getDataAlertExecutionsStats, getDataAlertRecipientStats, getDataAlerts, getDataAlertsSettings, patchDataAlert, setDataAlertsSettings, triggerDataAlerts, validateDataAlerts };