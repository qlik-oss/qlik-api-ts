import "./chunks/public-runtime-modules-QhLPeQr5.js";
import { n as invokeFetch, t as clearApiCache } from "./chunks/invoke-fetch-B7lGscuQ.js";

//#region src/public/rest/data-alerts.ts
/**
* Retrieves all data alert tasks accessible to the user. Users assigned the `TenantAdmin` or `AnalyticsAdmin` role can view all tasks.
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
* Creates a new data alerting task.
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
* Creates a new data alerting task trigger action.
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
* Validates a new data alerting task. Current support includes validation for recipients only.
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
* Retrieves the current settings for data alerts.
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
* Updates the settings for data alerts. User must be assigned the `TenantAdmin` role.
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
* Deletes a specific data alerting task.
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
* Returns the details of a specific data alert task.
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
* Updates one or more properties of a specific data alerting task.
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
* Retrieves the condition associated with a data alerting task.
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
* Deletes a specific data alerting task execution.
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
* Retrieves a specific execution for the specified data alerting task.
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
* Retrieve the recipient stats for a data alerting task.
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
* Lists executions for the specified data alerting task.
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
* Retrieves stats for overall data alerting task executions.
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
* Retrieves the content of an evaluation for a specified data alerting task execution.
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