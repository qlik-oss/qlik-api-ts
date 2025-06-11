import {
  clearApiCache,
  invokeFetch
} from "./chunks/PUS32UJH.js";
import "./chunks/CLZXLW6N.js";
import "./chunks/2ZQ3ZX7F.js";

// src/public/rest/data-qualities.ts
var triggerDataQualitiesComputation = async (body, options) => invokeFetch("data-qualities", {
  method: "post",
  pathTemplate: "/api/v1/data-qualities/computations",
  body,
  contentType: "application/json",
  options
});
var getDataQualitiesComputation = async (computationId, options) => invokeFetch("data-qualities", {
  method: "get",
  pathTemplate: "/api/v1/data-qualities/computations/{computationId}",
  pathVariables: { computationId },
  options
});
var getDataQualitiesGlobalResults = async (query, options) => invokeFetch("data-qualities", {
  method: "get",
  pathTemplate: "/api/v1/data-qualities/global-results",
  query,
  options
});
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
