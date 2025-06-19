import {
  clearApiCache,
  invokeFetch
} from "./chunks/P6F6QA4Y.js";
import "./chunks/DN5SVV4X.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/quotas.ts
async function getQuotas(query, options) {
  return invokeFetch("quotas", {
    method: "get",
    pathTemplate: "/api/v1/quotas",
    query,
    options
  });
}
async function getQuota(id, query, options) {
  return invokeFetch("quotas", {
    method: "get",
    pathTemplate: "/api/v1/quotas/{id}",
    pathVariables: { id },
    query,
    options
  });
}
function clearCache() {
  return clearApiCache("quotas");
}
var quotasExport = { getQuotas, getQuota, clearCache };
var quotas_default = quotasExport;
export {
  clearCache,
  quotas_default as default,
  getQuota,
  getQuotas
};
