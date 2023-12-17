"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkWA4O4PMUjs = require('./chunk-WA4O4PMU.js');
require('./chunk-L4SFSITJ.js');

// src/public/rest/tenants.ts
var createTenant = async (body, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "tenants", {
  method: "post",
  pathTemplate: "/api/v1/tenants",
  body,
  options
});
var getMyTenant = async (options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "tenants", {
  method: "get",
  pathTemplate: "/api/v1/tenants/me",
  options
});
var getTenant = async (tenantId, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "tenants", {
  method: "get",
  pathTemplate: "/api/v1/tenants/{tenantId}",
  pathVariables: { tenantId },
  options
});
var patchTenant = async (tenantId, body, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "tenants", {
  method: "patch",
  pathTemplate: "/api/v1/tenants/{tenantId}",
  pathVariables: { tenantId },
  body,
  options
});
var deactivateTenant = async (tenantId, body, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "tenants", {
  method: "post",
  pathTemplate: "/api/v1/tenants/{tenantId}/actions/deactivate",
  pathVariables: { tenantId },
  body,
  options
});
var reactivateTenant = async (tenantId, body, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "tenants", {
  method: "post",
  pathTemplate: "/api/v1/tenants/{tenantId}/actions/reactivate",
  pathVariables: { tenantId },
  body,
  options
});
function clearCache() {
  return _chunkWA4O4PMUjs.clearApiCache.call(void 0, "tenants");
}
var tenantsExport = {
  createTenant,
  getMyTenant,
  getTenant,
  patchTenant,
  deactivateTenant,
  reactivateTenant,
  clearCache
};
var tenants_default = tenantsExport;









exports.clearCache = clearCache; exports.createTenant = createTenant; exports.deactivateTenant = deactivateTenant; exports.default = tenants_default; exports.getMyTenant = getMyTenant; exports.getTenant = getTenant; exports.patchTenant = patchTenant; exports.reactivateTenant = reactivateTenant;
