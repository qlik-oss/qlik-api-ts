import {
  clearApiCache,
  invokeFetch
} from "./chunk-PUBPF4EZ.mjs";
import "./chunk-GLWHVX4M.mjs";
import "./chunk-ZFXKCRJC.mjs";

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
