import {
  clearApiCache,
  invokeFetch
} from "./chunks/VVD2DPKQ.js";
import "./chunks/LTNGXTXG.js";
import "./chunks/2ZQ3ZX7F.js";

// src/public/rest/knowledgebases.ts
var getKnowledgebases = async (query, options) => invokeFetch("knowledgebases", {
  method: "get",
  pathTemplate: "/api/v1/knowledgebases",
  query,
  options
});
var createKnowledgebase = async (body, options) => invokeFetch("knowledgebases", {
  method: "post",
  pathTemplate: "/api/v1/knowledgebases",
  body,
  contentType: "application/json",
  options
});
var deleteKnowledgebase = async (id, options) => invokeFetch("knowledgebases", {
  method: "delete",
  pathTemplate: "/api/v1/knowledgebases/{id}",
  pathVariables: { id },
  options
});
var getKnowledgebase = async (id, options) => invokeFetch("knowledgebases", {
  method: "get",
  pathTemplate: "/api/v1/knowledgebases/{id}",
  pathVariables: { id },
  options
});
var patchKnowledgebase = async (id, body, options) => invokeFetch("knowledgebases", {
  method: "patch",
  pathTemplate: "/api/v1/knowledgebases/{id}",
  pathVariables: { id },
  body,
  contentType: "application/json",
  options
});
var createKnowledgebaseDatasource = async (id, body, options) => invokeFetch("knowledgebases", {
  method: "post",
  pathTemplate: "/api/v1/knowledgebases/{id}/datasources",
  pathVariables: { id },
  body,
  contentType: "application/json",
  options
});
var deleteKnowledgebaseDatasource = async (id, datasourceId, options) => invokeFetch("knowledgebases", {
  method: "delete",
  pathTemplate: "/api/v1/knowledgebases/{id}/datasources/{datasourceId}",
  pathVariables: { id, datasourceId },
  options
});
var updateKnowledgebaseDatasource = async (id, datasourceId, body, options) => invokeFetch("knowledgebases", {
  method: "put",
  pathTemplate: "/api/v1/knowledgebases/{id}/datasources/{datasourceId}",
  pathVariables: { id, datasourceId },
  body,
  contentType: "application/json",
  options
});
var cancelKnowledgebaseDatasource = async (id, datasourceId, options) => invokeFetch("knowledgebases", {
  method: "post",
  pathTemplate: "/api/v1/knowledgebases/{id}/datasources/{datasourceId}/actions/cancel",
  pathVariables: { id, datasourceId },
  options
});
var downloadKnowledgebaseDatasource = async (id, datasourceId, body, options) => invokeFetch("knowledgebases", {
  method: "post",
  pathTemplate: "/api/v1/knowledgebases/{id}/datasources/{datasourceId}/actions/download",
  pathVariables: { id, datasourceId },
  body,
  contentType: "application/json",
  options
});
var syncKnowledgebaseDatasource = async (id, datasourceId, query, options) => invokeFetch("knowledgebases", {
  method: "post",
  pathTemplate: "/api/v1/knowledgebases/{id}/datasources/{datasourceId}/actions/sync",
  pathVariables: { id, datasourceId },
  query,
  options
});
var getKnowledgebaseDatasourceHistories = async (id, datasourceId, query, options) => invokeFetch("knowledgebases", {
  method: "get",
  pathTemplate: "/api/v1/knowledgebases/{id}/datasources/{datasourceId}/histories",
  pathVariables: { id, datasourceId },
  query,
  options
});
var getKnowledgebaseDatasourceHistory = async (id, datasourceId, syncId, options) => invokeFetch("knowledgebases", {
  method: "get",
  pathTemplate: "/api/v1/knowledgebases/{id}/datasources/{datasourceId}/histories/{syncId}",
  pathVariables: { id, datasourceId, syncId },
  options
});
var deleteKnowledgebaseDatasourceSchedule = async (id, datasourceId, options) => invokeFetch("knowledgebases", {
  method: "delete",
  pathTemplate: "/api/v1/knowledgebases/{id}/datasources/{datasourceId}/schedules",
  pathVariables: { id, datasourceId },
  options
});
var getKnowledgebaseDatasourceSchedule = async (id, datasourceId, options) => invokeFetch("knowledgebases", {
  method: "get",
  pathTemplate: "/api/v1/knowledgebases/{id}/datasources/{datasourceId}/schedules",
  pathVariables: { id, datasourceId },
  options
});
var createKnowledgebaseDatasourceSchedule = async (id, datasourceId, body, options) => invokeFetch("knowledgebases", {
  method: "post",
  pathTemplate: "/api/v1/knowledgebases/{id}/datasources/{datasourceId}/schedules",
  pathVariables: { id, datasourceId },
  body,
  contentType: "application/json",
  options
});
var getKnowledgebaseHistories = async (id, query, options) => invokeFetch("knowledgebases", {
  method: "get",
  pathTemplate: "/api/v1/knowledgebases/{id}/histories",
  pathVariables: { id },
  query,
  options
});
function clearCache() {
  return clearApiCache("knowledgebases");
}
var knowledgebasesExport = {
  getKnowledgebases,
  createKnowledgebase,
  deleteKnowledgebase,
  getKnowledgebase,
  patchKnowledgebase,
  createKnowledgebaseDatasource,
  deleteKnowledgebaseDatasource,
  updateKnowledgebaseDatasource,
  cancelKnowledgebaseDatasource,
  downloadKnowledgebaseDatasource,
  syncKnowledgebaseDatasource,
  getKnowledgebaseDatasourceHistories,
  getKnowledgebaseDatasourceHistory,
  deleteKnowledgebaseDatasourceSchedule,
  getKnowledgebaseDatasourceSchedule,
  createKnowledgebaseDatasourceSchedule,
  getKnowledgebaseHistories,
  clearCache
};
var knowledgebases_default = knowledgebasesExport;
export {
  cancelKnowledgebaseDatasource,
  clearCache,
  createKnowledgebase,
  createKnowledgebaseDatasource,
  createKnowledgebaseDatasourceSchedule,
  knowledgebases_default as default,
  deleteKnowledgebase,
  deleteKnowledgebaseDatasource,
  deleteKnowledgebaseDatasourceSchedule,
  downloadKnowledgebaseDatasource,
  getKnowledgebase,
  getKnowledgebaseDatasourceHistories,
  getKnowledgebaseDatasourceHistory,
  getKnowledgebaseDatasourceSchedule,
  getKnowledgebaseHistories,
  getKnowledgebases,
  patchKnowledgebase,
  syncKnowledgebaseDatasource,
  updateKnowledgebaseDatasource
};
