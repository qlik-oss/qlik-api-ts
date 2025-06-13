import {
  clearApiCache,
  invokeFetch
} from "./chunks/6WNP7HZQ.js";
import "./chunks/QAOVZB27.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/dcaas.ts
async function dataConnectionsDcaas(body, options) {
  return invokeFetch("dcaas", {
    method: "post",
    pathTemplate: "/api/v1/dcaas/actions/data-connections",
    body,
    contentType: "application/json",
    options
  });
}
async function dataConnectionsDcaasApiSpecs(query, options) {
  return invokeFetch("dcaas", {
    method: "get",
    pathTemplate: "/api/v1/dcaas/actions/data-connections/api-specs",
    query,
    options
  });
}
async function dataConnectionsDcaa(connectionId, options) {
  return invokeFetch("dcaas", {
    method: "get",
    pathTemplate: "/api/v1/dcaas/actions/data-connections/{connectionId}",
    pathVariables: { connectionId },
    options
  });
}
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
