import {
  clearApiCache,
  invokeFetch
} from "./chunks/VVD2DPKQ.js";
import "./chunks/LTNGXTXG.js";
import "./chunks/2ZQ3ZX7F.js";

// src/public/rest/data-alerts.ts
var getDataAlerts = async (query, options) => invokeFetch("data-alerts", {
  method: "get",
  pathTemplate: "/api/v1/data-alerts",
  query,
  options
});
var createDataAlert = async (body, options) => invokeFetch("data-alerts", {
  method: "post",
  pathTemplate: "/api/v1/data-alerts",
  body,
  contentType: "application/json",
  options
});
var triggerDataAlerts = async (body, options) => invokeFetch("data-alerts", {
  method: "post",
  pathTemplate: "/api/v1/data-alerts/actions/trigger",
  body,
  contentType: "application/json",
  options
});
var validateDataAlerts = async (body, options) => invokeFetch("data-alerts", {
  method: "post",
  pathTemplate: "/api/v1/data-alerts/actions/validate",
  body,
  contentType: "application/json",
  options
});
var getDataAlertsSettings = async (options) => invokeFetch("data-alerts", {
  method: "get",
  pathTemplate: "/api/v1/data-alerts/settings",
  options
});
var setDataAlertsSettings = async (body, options) => invokeFetch("data-alerts", {
  method: "put",
  pathTemplate: "/api/v1/data-alerts/settings",
  body,
  contentType: "application/json",
  options
});
var deleteDataAlert = async (alertId, options) => invokeFetch("data-alerts", {
  method: "delete",
  pathTemplate: "/api/v1/data-alerts/{alertId}",
  pathVariables: { alertId },
  options
});
var getDataAlert = async (alertId, options) => invokeFetch("data-alerts", {
  method: "get",
  pathTemplate: "/api/v1/data-alerts/{alertId}",
  pathVariables: { alertId },
  options
});
var patchDataAlert = async (alertId, body, options) => invokeFetch("data-alerts", {
  method: "patch",
  pathTemplate: "/api/v1/data-alerts/{alertId}",
  pathVariables: { alertId },
  body,
  contentType: "application/json",
  options
});
var getDataAlertCondition = async (alertId, options) => invokeFetch("data-alerts", {
  method: "get",
  pathTemplate: "/api/v1/data-alerts/{alertId}/condition",
  pathVariables: { alertId },
  options
});
var deleteDataAlertExecution = async (alertId, executionId, options) => invokeFetch("data-alerts", {
  method: "delete",
  pathTemplate: "/api/v1/data-alerts/{alertId}/executions/{executionId}",
  pathVariables: { alertId, executionId },
  options
});
var getDataAlertExecution = async (alertId, executionId, options) => invokeFetch("data-alerts", {
  method: "get",
  pathTemplate: "/api/v1/data-alerts/{alertId}/executions/{executionId}",
  pathVariables: { alertId, executionId },
  options
});
var getDataAlertRecipientStats = async (alertId, query, options) => invokeFetch("data-alerts", {
  method: "get",
  pathTemplate: "/api/v1/data-alerts/{alertId}/recipient-stats",
  pathVariables: { alertId },
  query,
  options
});
var getDataAlertExecutions = async (taskId, query, options) => invokeFetch("data-alerts", {
  method: "get",
  pathTemplate: "/api/v1/data-alerts/{taskId}/executions",
  pathVariables: { taskId },
  query,
  options
});
var getDataAlertExecutionsStats = async (taskId, query, options) => invokeFetch("data-alerts", {
  method: "get",
  pathTemplate: "/api/v1/data-alerts/{taskId}/executions/stats",
  pathVariables: { taskId },
  query,
  options
});
var getDataAlertExecutionEvaluations = async (taskId, executionId, options) => invokeFetch("data-alerts", {
  method: "get",
  pathTemplate: "/api/v1/data-alerts/{taskId}/executions/{executionId}/evaluations",
  pathVariables: { taskId, executionId },
  options
});
function clearCache() {
  return clearApiCache("data-alerts");
}
var dataAlertsExport = {
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
export {
  clearCache,
  createDataAlert,
  data_alerts_default as default,
  deleteDataAlert,
  deleteDataAlertExecution,
  getDataAlert,
  getDataAlertCondition,
  getDataAlertExecution,
  getDataAlertExecutionEvaluations,
  getDataAlertExecutions,
  getDataAlertExecutionsStats,
  getDataAlertRecipientStats,
  getDataAlerts,
  getDataAlertsSettings,
  patchDataAlert,
  setDataAlertsSettings,
  triggerDataAlerts,
  validateDataAlerts
};
