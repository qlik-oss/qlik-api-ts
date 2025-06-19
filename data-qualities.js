import {
  clearApiCache,
  invokeFetch
} from "./chunks/P6F6QA4Y.js";
import "./chunks/DN5SVV4X.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/data-qualities.ts
async function triggerDataQualitiesComputation(body, options) {
  return invokeFetch("data-qualities", {
    method: "post",
    pathTemplate: "/api/v1/data-qualities/computations",
    body,
    contentType: "application/json",
    options
  });
}
async function getDataQualitiesComputation(computationId, options) {
  return invokeFetch("data-qualities", {
    method: "get",
    pathTemplate: "/api/v1/data-qualities/computations/{computationId}",
    pathVariables: { computationId },
    options
  });
}
async function getDataQualitiesGlobalResults(query, options) {
  return invokeFetch("data-qualities", {
    method: "get",
    pathTemplate: "/api/v1/data-qualities/global-results",
    query,
    options
  });
}
function clearCache() {
  return clearApiCache("data-qualities");
}
var dataQualitiesExport = {
  triggerDataQualitiesComputation,
  getDataQualitiesComputation,
  getDataQualitiesGlobalResults,
  clearCache
};
var data_qualities_default = dataQualitiesExport;
export {
  clearCache,
  data_qualities_default as default,
  getDataQualitiesComputation,
  getDataQualitiesGlobalResults,
  triggerDataQualitiesComputation
};
