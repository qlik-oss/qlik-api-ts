import {
  clearApiCache,
  invokeFetch
} from "./chunks/NPB36P3M.js";
import "./chunks/L5QSVLDQ.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/tenants.ts
async function createTenant(body, options) {
  return invokeFetch("tenants", {
    method: "post",
    pathTemplate: "/api/v1/tenants",
    body,
    contentType: "application/json",
    options
  });
}
async function getMyTenant(options) {
  return invokeFetch("tenants", {
    method: "get",
    pathTemplate: "/api/v1/tenants/me",
    options
  });
}
async function getTenant(tenantId, options) {
  return invokeFetch("tenants", {
    method: "get",
    pathTemplate: "/api/v1/tenants/{tenantId}",
    pathVariables: { tenantId },
    options
  });
}
async function patchTenant(tenantId, body, options) {
  return invokeFetch("tenants", {
    method: "patch",
    pathTemplate: "/api/v1/tenants/{tenantId}",
    pathVariables: { tenantId },
    body,
    contentType: "application/json",
    options
  });
}
async function deactivateTenant(tenantId, body, options) {
  return invokeFetch("tenants", {
    method: "post",
    pathTemplate: "/api/v1/tenants/{tenantId}/actions/deactivate",
    pathVariables: { tenantId },
    body,
    contentType: "application/json",
    options
  });
}
async function reactivateTenant(tenantId, body, options) {
  return invokeFetch("tenants", {
    method: "post",
    pathTemplate: "/api/v1/tenants/{tenantId}/actions/reactivate",
    pathVariables: { tenantId },
    body,
    contentType: "application/json",
    options
  });
}
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
