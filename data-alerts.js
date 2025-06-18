import {
  clearApiCache,
  invokeFetch
} from "./chunks/NPB36P3M.js";
import "./chunks/L5QSVLDQ.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/data-alerts.ts
async function getDataAlerts(query, options) {
  return invokeFetch("data-alerts", {
    method: "get",
    pathTemplate: "/api/v1/data-alerts",
    query,
    options
  });
}
async function createDataAlert(body, options) {
  return invokeFetch("data-alerts", {
    method: "post",
    pathTemplate: "/api/v1/data-alerts",
    body,
    contentType: "application/json",
    options
  });
}
async function triggerDataAlerts(body, options) {
  return invokeFetch("data-alerts", {
    method: "post",
    pathTemplate: "/api/v1/data-alerts/actions/trigger",
    body,
    contentType: "application/json",
    options
  });
}
async function validateDataAlerts(body, options) {
  return invokeFetch("data-alerts", {
    method: "post",
    pathTemplate: "/api/v1/data-alerts/actions/validate",
    body,
    contentType: "application/json",
    options
  });
}
async function getDataAlertsSettings(options) {
  return invokeFetch("data-alerts", {
    method: "get",
    pathTemplate: "/api/v1/data-alerts/settings",
    options
  });
}
async function setDataAlertsSettings(body, options) {
  return invokeFetch("data-alerts", {
    method: "put",
    pathTemplate: "/api/v1/data-alerts/settings",
    body,
    contentType: "application/json",
    options
  });
}
async function deleteDataAlert(alertId, options) {
  return invokeFetch("data-alerts", {
    method: "delete",
    pathTemplate: "/api/v1/data-alerts/{alertId}",
    pathVariables: { alertId },
    options
  });
}
async function getDataAlert(alertId, options) {
  return invokeFetch("data-alerts", {
    method: "get",
    pathTemplate: "/api/v1/data-alerts/{alertId}",
    pathVariables: { alertId },
    options
  });
}
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
async function getDataAlertCondition(alertId, options) {
  return invokeFetch("data-alerts", {
    method: "get",
    pathTemplate: "/api/v1/data-alerts/{alertId}/condition",
    pathVariables: { alertId },
    options
  });
}
async function deleteDataAlertExecution(alertId, executionId, options) {
  return invokeFetch("data-alerts", {
    method: "delete",
    pathTemplate: "/api/v1/data-alerts/{alertId}/executions/{executionId}",
    pathVariables: { alertId, executionId },
    options
  });
}
async function getDataAlertExecution(alertId, executionId, options) {
  return invokeFetch("data-alerts", {
    method: "get",
    pathTemplate: "/api/v1/data-alerts/{alertId}/executions/{executionId}",
    pathVariables: { alertId, executionId },
    options
  });
}
async function getDataAlertRecipientStats(alertId, query, options) {
  return invokeFetch("data-alerts", {
    method: "get",
    pathTemplate: "/api/v1/data-alerts/{alertId}/recipient-stats",
    pathVariables: { alertId },
    query,
    options
  });
}
async function getDataAlertExecutions(taskId, query, options) {
  return invokeFetch("data-alerts", {
    method: "get",
    pathTemplate: "/api/v1/data-alerts/{taskId}/executions",
    pathVariables: { taskId },
    query,
    options
  });
}
async function getDataAlertExecutionsStats(taskId, query, options) {
  return invokeFetch("data-alerts", {
    method: "get",
    pathTemplate: "/api/v1/data-alerts/{taskId}/executions/stats",
    pathVariables: { taskId },
    query,
    options
  });
}
async function getDataAlertExecutionEvaluations(taskId, executionId, options) {
  return invokeFetch("data-alerts", {
    method: "get",
    pathTemplate: "/api/v1/data-alerts/{taskId}/executions/{executionId}/evaluations",
    pathVariables: { taskId, executionId },
    options
  });
}
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
