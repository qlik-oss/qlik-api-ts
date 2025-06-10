import {
  clearApiCache,
  invokeFetch
} from "./chunks/PUS32UJH.js";
import "./chunks/CLZXLW6N.js";
import "./chunks/2ZQ3ZX7F.js";

// src/public/rest/dcaas.ts
var dataConnectionsDcaas = async (body, options) => invokeFetch("dcaas", {
  method: "post",
  pathTemplate: "/api/v1/dcaas/actions/data-connections",
  body,
  contentType: "application/json",
  options
});
var dataConnectionsDcaasApiSpecs = async (query, options) => invokeFetch("dcaas", {
  method: "get",
  pathTemplate: "/api/v1/dcaas/actions/data-connections/api-specs",
  query,
  options
});
var dataConnectionsDcaa = async (connectionId, options) => invokeFetch("dcaas", {
  method: "get",
  pathTemplate: "/api/v1/dcaas/actions/data-connections/{connectionId}",
  pathVariables: { connectionId },
  options
});
function clearCache() {
  return clearApiCache("dcaas");
}
var dcaasExport = { dataConnectionsDcaas, dataConnectionsDcaasApiSpecs, dataConnectionsDcaa, clearCache };
var dcaas_default = dcaasExport;
export {
  clearCache,
  dataConnectionsDcaa,
  dataConnectionsDcaas,
  dataConnectionsDcaasApiSpecs,
  dcaas_default as default
};
