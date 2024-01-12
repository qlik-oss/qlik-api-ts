import {
  clearApiCache,
  invokeFetch
} from "./chunk-IXKP4YDK.mjs";
import "./chunk-DJA2XJBU.mjs";
import "./chunk-ZFXKCRJC.mjs";

// src/public/rest/automations.ts
var getAutomations = async (query, options) => invokeFetch("automations", {
  method: "get",
  pathTemplate: "/api/v1/automations",
  query,
  options
});
var createAutomation = async (body, options) => invokeFetch("automations", {
  method: "post",
  pathTemplate: "/api/v1/automations",
  body,
  contentType: "application/json",
  options
});
var getAutomationsSettings = async (options) => invokeFetch("automations", {
  method: "get",
  pathTemplate: "/api/v1/automations/settings",
  options
});
var updateAutomationsSettings = async (body, options) => invokeFetch("automations", {
  method: "put",
  pathTemplate: "/api/v1/automations/settings",
  body,
  contentType: "application/json",
  options
});
var getAutomationsUsageMetrics = async (query, options) => invokeFetch("automations", {
  method: "get",
  pathTemplate: "/api/v1/automations/usage",
  query,
  options
});
var deleteAutomation = async (id, options) => invokeFetch("automations", {
  method: "delete",
  pathTemplate: "/api/v1/automations/{id}",
  pathVariables: { id },
  options
});
var getAutomation = async (id, options) => invokeFetch("automations", {
  method: "get",
  pathTemplate: "/api/v1/automations/{id}",
  pathVariables: { id },
  options
});
var updateAutomation = async (id, body, options) => invokeFetch("automations", {
  method: "put",
  pathTemplate: "/api/v1/automations/{id}",
  pathVariables: { id },
  body,
  contentType: "application/json",
  options
});
var copyAutomation = async (id, body, options) => invokeFetch("automations", {
  method: "post",
  pathTemplate: "/api/v1/automations/{id}/actions/copy",
  pathVariables: { id },
  body,
  contentType: "application/json",
  options
});
var disableAutomation = async (id, options) => invokeFetch("automations", {
  method: "post",
  pathTemplate: "/api/v1/automations/{id}/actions/disable",
  pathVariables: { id },
  options
});
var enableAutomation = async (id, options) => invokeFetch("automations", {
  method: "post",
  pathTemplate: "/api/v1/automations/{id}/actions/enable",
  pathVariables: { id },
  options
});
var moveAutomation = async (id, body, options) => invokeFetch("automations", {
  method: "post",
  pathTemplate: "/api/v1/automations/{id}/actions/move",
  pathVariables: { id },
  body,
  contentType: "application/json",
  options
});
var getAutomationRuns = async (id, query, options) => invokeFetch("automations", {
  method: "get",
  pathTemplate: "/api/v1/automations/{id}/runs",
  pathVariables: { id },
  query,
  options
});
var queueAutomationRun = async (id, body, options) => invokeFetch("automations", {
  method: "post",
  pathTemplate: "/api/v1/automations/{id}/runs",
  pathVariables: { id },
  body,
  contentType: "application/json",
  options
});
var getAutomationRun = async (id, runId, options) => invokeFetch("automations", {
  method: "get",
  pathTemplate: "/api/v1/automations/{id}/runs/{runId}",
  pathVariables: { id, runId },
  options
});
var getAutomationRunDetails = async (id, runId, options) => invokeFetch("automations", {
  method: "post",
  pathTemplate: "/api/v1/automations/{id}/runs/{runId}/actions/export",
  pathVariables: { id, runId },
  options
});
var retryAutomationRun = async (id, runId, options) => invokeFetch("automations", {
  method: "post",
  pathTemplate: "/api/v1/automations/{id}/runs/{runId}/actions/retry",
  pathVariables: { id, runId },
  options
});
var stopAutomationRun = async (id, runId, options) => invokeFetch("automations", {
  method: "post",
  pathTemplate: "/api/v1/automations/{id}/runs/{runId}/actions/stop",
  pathVariables: { id, runId },
  options
});
function clearCache() {
  return clearApiCache("automations");
}
var automationsExport = {
  getAutomations,
  createAutomation,
  getAutomationsSettings,
  updateAutomationsSettings,
  getAutomationsUsageMetrics,
  deleteAutomation,
  getAutomation,
  updateAutomation,
  copyAutomation,
  disableAutomation,
  enableAutomation,
  moveAutomation,
  getAutomationRuns,
  queueAutomationRun,
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
  getAutomationRuns,
  getAutomations,
  getAutomationsSettings,
  getAutomationsUsageMetrics,
  moveAutomation,
  queueAutomationRun,
  retryAutomationRun,
  stopAutomationRun,
  updateAutomation,
  updateAutomationsSettings
};
