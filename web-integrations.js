"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunk6JERR27Kjs = require('./chunk-6JERR27K.js');
require('./chunk-H7SAZYEE.js');

// src/public/rest/web-integrations.ts
var getWebIntegrations = async (query, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "web-integrations", {
  method: "get",
  pathTemplate: "/api/v1/web-integrations",
  query,
  options
});
var createWebIntegration = async (body, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "web-integrations", {
  method: "post",
  pathTemplate: "/api/v1/web-integrations",
  body,
  options
});
var deleteWebIntegration = async (id, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "web-integrations", {
  method: "delete",
  pathTemplate: "/api/v1/web-integrations/{id}",
  pathVariables: { id },
  options
});
var getWebIntegration = async (id, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "web-integrations", {
  method: "get",
  pathTemplate: "/api/v1/web-integrations/{id}",
  pathVariables: { id },
  options
});
var patchWebIntegration = async (id, body, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "web-integrations", {
  method: "patch",
  pathTemplate: "/api/v1/web-integrations/{id}",
  pathVariables: { id },
  body,
  options
});
function clearCache() {
  return _chunk6JERR27Kjs.clearApiCache.call(void 0, "web-integrations");
}
var webIntegrationsExport = {
  getWebIntegrations,
  createWebIntegration,
  deleteWebIntegration,
  getWebIntegration,
  patchWebIntegration,
  clearCache
};
var web_integrations_default = webIntegrationsExport;








exports.clearCache = clearCache; exports.createWebIntegration = createWebIntegration; exports.default = web_integrations_default; exports.deleteWebIntegration = deleteWebIntegration; exports.getWebIntegration = getWebIntegration; exports.getWebIntegrations = getWebIntegrations; exports.patchWebIntegration = patchWebIntegration;
