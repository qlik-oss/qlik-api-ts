import {
  clearApiCache,
  invokeFetch
} from "./chunks/VVD2DPKQ.js";
import "./chunks/LTNGXTXG.js";
import "./chunks/2ZQ3ZX7F.js";

// src/public/rest/data-sets.ts
var deleteDataSets = async (body, options) => invokeFetch("data-sets", {
  method: "delete",
  pathTemplate: "/api/v1/data-sets",
  body,
  contentType: "application/json",
  options
});
var createDataSet = async (body, options) => invokeFetch("data-sets", {
  method: "post",
  pathTemplate: "/api/v1/data-sets",
  body,
  contentType: "application/json",
  options
});
var getDataSet = async (dataSetId, query, options) => invokeFetch("data-sets", {
  method: "get",
  pathTemplate: "/api/v1/data-sets/{data-set-id}",
  pathVariables: { "data-set-id": dataSetId },
  query,
  options
});
var patchDataSet = async (dataSetId, body, options) => invokeFetch("data-sets", {
  method: "patch",
  pathTemplate: "/api/v1/data-sets/{data-set-id}",
  pathVariables: { "data-set-id": dataSetId },
  body,
  contentType: "application/json",
  options
});
var updateDataSet = async (dataSetId, body, options) => invokeFetch("data-sets", {
  method: "put",
  pathTemplate: "/api/v1/data-sets/{data-set-id}",
  pathVariables: { "data-set-id": dataSetId },
  body,
  contentType: "application/json",
  options
});
var getDataSetProfiles = async (dataSetId, query, options) => invokeFetch("data-sets", {
  method: "get",
  pathTemplate: "/api/v1/data-sets/{data-set-id}/profiles",
  pathVariables: { "data-set-id": dataSetId },
  query,
  options
});
function clearCache() {
  return clearApiCache("data-sets");
}
var dataSetsExport = {
  deleteDataSets,
  createDataSet,
  getDataSet,
  patchDataSet,
  updateDataSet,
  getDataSetProfiles,
  clearCache
};
var data_sets_default = dataSetsExport;
export {
  clearCache,
  createDataSet,
  data_sets_default as default,
  deleteDataSets,
  getDataSet,
  getDataSetProfiles,
  patchDataSet,
  updateDataSet
};
