import {
  clearApiCache,
  invokeFetch
} from "./chunk-MP2QZCTY.mjs";
import "./chunk-2OXQN2IV.mjs";

// src/public/rest/tenants.ts
var createTenant = async (body, options) => invokeFetch("tenants", {
  method: "post",
  pathTemplate: "/api/v1/tenants",
  body,
  options
});
var getMyTenant = async (options) => invokeFetch("tenants", {
  method: "get",
  pathTemplate: "/api/v1/tenants/me",
  options
});
var getTenant = async (tenantId, options) => invokeFetch("tenants", {
  method: "get",
  pathTemplate: "/api/v1/tenants/{tenantId}",
  pathVariables: { tenantId },
  options
});
var patchTenant = async (tenantId, body, options) => invokeFetch("tenants", {
  method: "patch",
  pathTemplate: "/api/v1/tenants/{tenantId}",
  pathVariables: { tenantId },
  body,
  options
});
var deactivateTenant = async (tenantId, body, options) => invokeFetch("tenants", {
  method: "post",
  pathTemplate: "/api/v1/tenants/{tenantId}/actions/deactivate",
  pathVariables: { tenantId },
  body,
  options
});
var reactivateTenant = async (tenantId, body, options) => invokeFetch("tenants", {
  method: "post",
  pathTemplate: "/api/v1/tenants/{tenantId}/actions/reactivate",
  pathVariables: { tenantId },
  body,
  options
});
function clearCache() {
  return clearApiCache("tenants");
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
export {
  clearCache,
  createTenant,
  deactivateTenant,
  tenants_default as default,
  getMyTenant,
  getTenant,
  patchTenant,
  reactivateTenant
};
