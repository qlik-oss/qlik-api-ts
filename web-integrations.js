"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _TH75GYUYjs = require('./chunks/TH75GYUY.js');
require('./chunks/SEXEAWEC.js');
require('./chunks/4HB3TAEO.js');

// src/public/rest/web-integrations.ts
var getWebIntegrations = async (query, options) => _TH75GYUYjs.invokeFetch.call(void 0, "web-integrations", {
  method: "get",
  pathTemplate: "/api/v1/web-integrations",
  query,
  options
});
var createWebIntegration = async (body, options) => _TH75GYUYjs.invokeFetch.call(void 0, "web-integrations", {
  method: "post",
  pathTemplate: "/api/v1/web-integrations",
  body,
  contentType: "application/json",
  options
});
var deleteWebIntegration = async (id, options) => _TH75GYUYjs.invokeFetch.call(void 0, "web-integrations", {
  method: "delete",
  pathTemplate: "/api/v1/web-integrations/{id}",
  pathVariables: { id },
  options
});
var getWebIntegration = async (id, options) => _TH75GYUYjs.invokeFetch.call(void 0, "web-integrations", {
  method: "get",
  pathTemplate: "/api/v1/web-integrations/{id}",
  pathVariables: { id },
  options
});
var patchWebIntegration = async (id, body, options) => _TH75GYUYjs.invokeFetch.call(void 0, "web-integrations", {
  method: "patch",
  pathTemplate: "/api/v1/web-integrations/{id}",
  pathVariables: { id },
  body,
  contentType: "application/json",
  options
});
function clearCache() {
  return _TH75GYUYjs.clearApiCache.call(void 0, "web-integrations");
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
