import {
  clearApiCache,
  invokeFetch
} from "./chunks/NPB36P3M.js";
import "./chunks/L5QSVLDQ.js";
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
