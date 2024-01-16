"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkKPCXSJ7Bjs = require('./chunk-KPCXSJ7B.js');
require('./chunk-ZXQHFWQH.js');
require('./chunk-P57PW2II.js');

// src/public/rest/tenants.ts
var createTenant = async (body, options) => _chunkKPCXSJ7Bjs.invokeFetch.call(void 0, "tenants", {
  method: "post",
  pathTemplate: "/api/v1/tenants",
  body,
  contentType: "application/json",
  options
});
var getMyTenant = async (options) => _chunkKPCXSJ7Bjs.invokeFetch.call(void 0, "tenants", {
  method: "get",
  pathTemplate: "/api/v1/tenants/me",
  options
});
var getTenant = async (tenantId, options) => _chunkKPCXSJ7Bjs.invokeFetch.call(void 0, "tenants", {
  method: "get",
  pathTemplate: "/api/v1/tenants/{tenantId}",
  pathVariables: { tenantId },
  options
});
var patchTenant = async (tenantId, body, options) => _chunkKPCXSJ7Bjs.invokeFetch.call(void 0, "tenants", {
  method: "patch",
  pathTemplate: "/api/v1/tenants/{tenantId}",
  pathVariables: { tenantId },
  body,
  contentType: "application/json",
  options
});
var deactivateTenant = async (tenantId, body, options) => _chunkKPCXSJ7Bjs.invokeFetch.call(void 0, "tenants", {
  method: "post",
  pathTemplate: "/api/v1/tenants/{tenantId}/actions/deactivate",
  pathVariables: { tenantId },
  body,
  contentType: "application/json",
  options
});
var reactivateTenant = async (tenantId, body, options) => _chunkKPCXSJ7Bjs.invokeFetch.call(void 0, "tenants", {
  method: "post",
  pathTemplate: "/api/v1/tenants/{tenantId}/actions/reactivate",
  pathVariables: { tenantId },
  body,
  contentType: "application/json",
  options
});
function clearCache() {
  return _chunkKPCXSJ7Bjs.clearApiCache.call(void 0, "tenants");
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
