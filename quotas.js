import {
  clearApiCache,
  invokeFetch
} from "./chunks/SYGKZE7X.js";
import "./chunks/BGRBTH7Y.js";
import "./chunks/S2BIIZLQ.js";

// src/public/rest/quotas.ts
var getQuotas = async (query, options) => invokeFetch("quotas", {
  method: "get",
  pathTemplate: "/api/v1/quotas",
  query,
  options
});
var getQuota = async (id, query, options) => invokeFetch("quotas", {
  method: "get",
  pathTemplate: "/api/v1/quotas/{id}",
  pathVariables: { id },
  query,
  options
});
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
