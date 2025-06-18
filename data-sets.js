import {
  clearApiCache,
  invokeFetch
} from "./chunks/NPB36P3M.js";
import "./chunks/L5QSVLDQ.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/data-sets.ts
async function deleteDataSets(body, options) {
  return invokeFetch("data-sets", {
    method: "delete",
    pathTemplate: "/api/v1/data-sets",
    body,
    contentType: "application/json",
    options
  });
}
async function createDataSet(body, options) {
  return invokeFetch("data-sets", {
    method: "post",
    pathTemplate: "/api/v1/data-sets",
    body,
    contentType: "application/json",
    options
  });
}
async function getDataSet(dataSetId, query, options) {
  return invokeFetch("data-sets", {
    method: "get",
    pathTemplate: "/api/v1/data-sets/{data-set-id}",
    pathVariables: { "data-set-id": dataSetId },
    query,
    options
  });
}
async function patchDataSet(dataSetId, body, options) {
  return invokeFetch("data-sets", {
    method: "patch",
    pathTemplate: "/api/v1/data-sets/{data-set-id}",
    pathVariables: { "data-set-id": dataSetId },
    body,
    contentType: "application/json",
    options
  });
}
async function updateDataSet(dataSetId, body, options) {
  return invokeFetch("data-sets", {
    method: "put",
    pathTemplate: "/api/v1/data-sets/{data-set-id}",
    pathVariables: { "data-set-id": dataSetId },
    body,
    contentType: "application/json",
    options
  });
}
async function getDataSetProfiles(dataSetId, query, options) {
  return invokeFetch("data-sets", {
    method: "get",
    pathTemplate: "/api/v1/data-sets/{data-set-id}/profiles",
    pathVariables: { "data-set-id": dataSetId },
    query,
    options
  });
}
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
