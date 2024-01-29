"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _TH75GYUYjs = require('./chunks/TH75GYUY.js');
require('./chunks/SEXEAWEC.js');
require('./chunks/4HB3TAEO.js');

// src/public/rest/automations.ts
var getAutomations = async (query, options) => _TH75GYUYjs.invokeFetch.call(void 0, "automations", {
  method: "get",
  pathTemplate: "/api/v1/automations",
  query,
  options
});
var createAutomation = async (body, options) => _TH75GYUYjs.invokeFetch.call(void 0, "automations", {
  method: "post",
  pathTemplate: "/api/v1/automations",
  body,
  contentType: "application/json",
  options
});
var getAutomationsSettings = async (options) => _TH75GYUYjs.invokeFetch.call(void 0, "automations", {
  method: "get",
  pathTemplate: "/api/v1/automations/settings",
  options
});
var updateAutomationsSettings = async (body, options) => _TH75GYUYjs.invokeFetch.call(void 0, "automations", {
  method: "put",
  pathTemplate: "/api/v1/automations/settings",
  body,
  contentType: "application/json",
  options
});
var getAutomationsUsageMetrics = async (query, options) => _TH75GYUYjs.invokeFetch.call(void 0, "automations", {
  method: "get",
  pathTemplate: "/api/v1/automations/usage",
  query,
  options
});
var deleteAutomation = async (id, options) => _TH75GYUYjs.invokeFetch.call(void 0, "automations", {
  method: "delete",
  pathTemplate: "/api/v1/automations/{id}",
  pathVariables: { id },
  options
});
var getAutomation = async (id, options) => _TH75GYUYjs.invokeFetch.call(void 0, "automations", {
  method: "get",
  pathTemplate: "/api/v1/automations/{id}",
  pathVariables: { id },
  options
});
var updateAutomation = async (id, body, options) => _TH75GYUYjs.invokeFetch.call(void 0, "automations", {
  method: "put",
  pathTemplate: "/api/v1/automations/{id}",
  pathVariables: { id },
  body,
  contentType: "application/json",
  options
});
var copyAutomation = async (id, body, options) => _TH75GYUYjs.invokeFetch.call(void 0, "automations", {
  method: "post",
  pathTemplate: "/api/v1/automations/{id}/actions/copy",
  pathVariables: { id },
  body,
  contentType: "application/json",
  options
});
var disableAutomation = async (id, options) => _TH75GYUYjs.invokeFetch.call(void 0, "automations", {
  method: "post",
  pathTemplate: "/api/v1/automations/{id}/actions/disable",
  pathVariables: { id },
  options
});
var enableAutomation = async (id, options) => _TH75GYUYjs.invokeFetch.call(void 0, "automations", {
  method: "post",
  pathTemplate: "/api/v1/automations/{id}/actions/enable",
  pathVariables: { id },
  options
});
var moveAutomation = async (id, body, options) => _TH75GYUYjs.invokeFetch.call(void 0, "automations", {
  method: "post",
  pathTemplate: "/api/v1/automations/{id}/actions/move",
  pathVariables: { id },
  body,
  contentType: "application/json",
  options
});
var getAutomationRuns = async (id, query, options) => _TH75GYUYjs.invokeFetch.call(void 0, "automations", {
  method: "get",
  pathTemplate: "/api/v1/automations/{id}/runs",
  pathVariables: { id },
  query,
  options
});
var queueAutomationRun = async (id, body, options) => _TH75GYUYjs.invokeFetch.call(void 0, "automations", {
  method: "post",
  pathTemplate: "/api/v1/automations/{id}/runs",
  pathVariables: { id },
  body,
  contentType: "application/json",
  options
});
var getAutomationRun = async (id, runId, options) => _TH75GYUYjs.invokeFetch.call(void 0, "automations", {
  method: "get",
  pathTemplate: "/api/v1/automations/{id}/runs/{runId}",
  pathVariables: { id, runId },
  options
});
var getAutomationRunDetails = async (id, runId, options) => _TH75GYUYjs.invokeFetch.call(void 0, "automations", {
  method: "post",
  pathTemplate: "/api/v1/automations/{id}/runs/{runId}/actions/export",
  pathVariables: { id, runId },
  options
});
var retryAutomationRun = async (id, runId, options) => _TH75GYUYjs.invokeFetch.call(void 0, "automations", {
  method: "post",
  pathTemplate: "/api/v1/automations/{id}/runs/{runId}/actions/retry",
  pathVariables: { id, runId },
  options
});
var stopAutomationRun = async (id, runId, options) => _TH75GYUYjs.invokeFetch.call(void 0, "automations", {
  method: "post",
  pathTemplate: "/api/v1/automations/{id}/runs/{runId}/actions/stop",
  pathVariables: { id, runId },
  options
});
function clearCache() {
  return _TH75GYUYjs.clearApiCache.call(void 0, "automations");
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





















exports.clearCache = clearCache; exports.copyAutomation = copyAutomation; exports.createAutomation = createAutomation; exports.default = automations_default; exports.deleteAutomation = deleteAutomation; exports.disableAutomation = disableAutomation; exports.enableAutomation = enableAutomation; exports.getAutomation = getAutomation; exports.getAutomationRun = getAutomationRun; exports.getAutomationRunDetails = getAutomationRunDetails; exports.getAutomationRuns = getAutomationRuns; exports.getAutomations = getAutomations; exports.getAutomationsSettings = getAutomationsSettings; exports.getAutomationsUsageMetrics = getAutomationsUsageMetrics; exports.moveAutomation = moveAutomation; exports.queueAutomationRun = queueAutomationRun; exports.retryAutomationRun = retryAutomationRun; exports.stopAutomationRun = stopAutomationRun; exports.updateAutomation = updateAutomation; exports.updateAutomationsSettings = updateAutomationsSettings;
