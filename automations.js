import {
  clearApiCache,
  invokeFetch
} from "./chunks/NPB36P3M.js";
import "./chunks/L5QSVLDQ.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/automations.ts
async function getAutomations(query, options) {
  return invokeFetch("automations", {
    method: "get",
    pathTemplate: "/api/v1/automations",
    query,
    options
  });
}
async function createAutomation(body, options) {
  return invokeFetch("automations", {
    method: "post",
    pathTemplate: "/api/v1/automations",
    body,
    contentType: "application/json",
    options
  });
}
async function getAutomationsUsageMetrics(query, options) {
  return invokeFetch("automations", {
    method: "get",
    pathTemplate: "/api/v1/automations/usage",
    query,
    options
  });
}
async function deleteAutomation(id, options) {
  return invokeFetch("automations", {
    method: "delete",
    pathTemplate: "/api/v1/automations/{id}",
    pathVariables: { id },
    options
  });
}
async function getAutomationWithQuery(id, query, options) {
  return invokeFetch("automations", {
    method: "get",
    pathTemplate: "/api/v1/automations/{id}",
    pathVariables: { id },
    query,
    options
  });
}
async function getAutomation(id, options) {
  return invokeFetch("automations", {
    method: "get",
    pathTemplate: "/api/v1/automations/{id}",
    pathVariables: { id },
    options
  });
}
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
async function disableAutomation(id, options) {
  return invokeFetch("automations", {
    method: "post",
    pathTemplate: "/api/v1/automations/{id}/actions/disable",
    pathVariables: { id },
    options
  });
}
async function enableAutomation(id, options) {
  return invokeFetch("automations", {
    method: "post",
    pathTemplate: "/api/v1/automations/{id}/actions/enable",
    pathVariables: { id },
    options
  });
}
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
async function getAutomationRuns(id, query, options) {
  return invokeFetch("automations", {
    method: "get",
    pathTemplate: "/api/v1/automations/{id}/runs",
    pathVariables: { id },
    query,
    options
  });
}
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
async function getAutomationRunWithQuery(id, runId, query, options) {
  return invokeFetch("automations", {
    method: "get",
    pathTemplate: "/api/v1/automations/{id}/runs/{runId}",
    pathVariables: { id, runId },
    query,
    options
  });
}
async function getAutomationRun(id, runId, options) {
  return invokeFetch("automations", {
    method: "get",
    pathTemplate: "/api/v1/automations/{id}/runs/{runId}",
    pathVariables: { id, runId },
    options
  });
}
async function getAutomationRunDetails(id, runId, options) {
  return invokeFetch("automations", {
    method: "post",
    pathTemplate: "/api/v1/automations/{id}/runs/{runId}/actions/export",
    pathVariables: { id, runId },
    options
  });
}
async function retryAutomationRun(id, runId, options) {
  return invokeFetch("automations", {
    method: "post",
    pathTemplate: "/api/v1/automations/{id}/runs/{runId}/actions/retry",
    pathVariables: { id, runId },
    options
  });
}
async function stopAutomationRun(id, runId, options) {
  return invokeFetch("automations", {
    method: "post",
    pathTemplate: "/api/v1/automations/{id}/runs/{runId}/actions/stop",
    pathVariables: { id, runId },
    options
  });
}
function clearCache() {
  return clearApiCache("automations");
}
var automationsExport = {
  getAutomations,
  createAutomation,
  getAutomationsUsageMetrics,
  deleteAutomation,
  getAutomationWithQuery,
  getAutomation,
  updateAutomation,
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
export {
  clearCache,
  copyAutomation,
  createAutomation,
  automations_default as default,
  deleteAutomation,
  disableAutomation,
  enableAutomation,
  getAutomation,
  getAutomationRun,
  getAutomationRunDetails,
  getAutomationRunWithQuery,
  getAutomationRuns,
  getAutomationWithQuery,
  getAutomations,
  getAutomationsUsageMetrics,
  moveAutomation,
  queueAutomationRun,
  retryAutomationRun,
  stopAutomationRun,
  updateAutomation
};
