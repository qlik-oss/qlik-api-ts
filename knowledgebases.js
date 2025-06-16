import {
  clearApiCache,
  invokeFetch
} from "./chunks/BEREWEFO.js";
import "./chunks/GZ7FHV5J.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/knowledgebases.ts
async function getKnowledgebases(query, options) {
  return invokeFetch("knowledgebases", {
    method: "get",
    pathTemplate: "/api/v1/knowledgebases",
    query,
    options
  });
}
async function createKnowledgebase(body, options) {
  return invokeFetch("knowledgebases", {
    method: "post",
    pathTemplate: "/api/v1/knowledgebases",
    body,
    contentType: "application/json",
    options
  });
}
async function deleteKnowledgebase(id, options) {
  return invokeFetch("knowledgebases", {
    method: "delete",
    pathTemplate: "/api/v1/knowledgebases/{id}",
    pathVariables: { id },
    options
  });
}
async function getKnowledgebase(id, options) {
  return invokeFetch("knowledgebases", {
    method: "get",
    pathTemplate: "/api/v1/knowledgebases/{id}",
    pathVariables: { id },
    options
  });
}
async function patchKnowledgebase(id, body, options) {
  return invokeFetch("knowledgebases", {
    method: "patch",
    pathTemplate: "/api/v1/knowledgebases/{id}",
    pathVariables: { id },
    body,
    contentType: "application/json",
    options
  });
}
async function createKnowledgebaseDatasource(id, body, options) {
  return invokeFetch("knowledgebases", {
    method: "post",
    pathTemplate: "/api/v1/knowledgebases/{id}/datasources",
    pathVariables: { id },
    body,
    contentType: "application/json",
    options
  });
}
async function deleteKnowledgebaseDatasource(id, datasourceId, options) {
  return invokeFetch("knowledgebases", {
    method: "delete",
    pathTemplate: "/api/v1/knowledgebases/{id}/datasources/{datasourceId}",
    pathVariables: { id, datasourceId },
    options
  });
}
async function updateKnowledgebaseDatasource(id, datasourceId, body, options) {
  return invokeFetch("knowledgebases", {
    method: "put",
    pathTemplate: "/api/v1/knowledgebases/{id}/datasources/{datasourceId}",
    pathVariables: { id, datasourceId },
    body,
    contentType: "application/json",
    options
  });
}
async function cancelKnowledgebaseDatasource(id, datasourceId, options) {
  return invokeFetch("knowledgebases", {
    method: "post",
    pathTemplate: "/api/v1/knowledgebases/{id}/datasources/{datasourceId}/actions/cancel",
    pathVariables: { id, datasourceId },
    options
  });
}
async function downloadKnowledgebaseDatasource(id, datasourceId, body, options) {
  return invokeFetch("knowledgebases", {
    method: "post",
    pathTemplate: "/api/v1/knowledgebases/{id}/datasources/{datasourceId}/actions/download",
    pathVariables: { id, datasourceId },
    body,
    contentType: "application/json",
    options
  });
}
async function syncKnowledgebaseDatasource(id, datasourceId, query, options) {
  return invokeFetch("knowledgebases", {
    method: "post",
    pathTemplate: "/api/v1/knowledgebases/{id}/datasources/{datasourceId}/actions/sync",
    pathVariables: { id, datasourceId },
    query,
    options
  });
}
async function getKnowledgebaseDatasourceHistories(id, datasourceId, query, options) {
  return invokeFetch("knowledgebases", {
    method: "get",
    pathTemplate: "/api/v1/knowledgebases/{id}/datasources/{datasourceId}/histories",
    pathVariables: { id, datasourceId },
    query,
    options
  });
}
async function getKnowledgebaseDatasourceHistory(id, datasourceId, syncId, options) {
  return invokeFetch("knowledgebases", {
    method: "get",
    pathTemplate: "/api/v1/knowledgebases/{id}/datasources/{datasourceId}/histories/{syncId}",
    pathVariables: { id, datasourceId, syncId },
    options
  });
}
async function deleteKnowledgebaseDatasourceSchedule(id, datasourceId, options) {
  return invokeFetch("knowledgebases", {
    method: "delete",
    pathTemplate: "/api/v1/knowledgebases/{id}/datasources/{datasourceId}/schedules",
    pathVariables: { id, datasourceId },
    options
  });
}
async function getKnowledgebaseDatasourceSchedule(id, datasourceId, options) {
  return invokeFetch("knowledgebases", {
    method: "get",
    pathTemplate: "/api/v1/knowledgebases/{id}/datasources/{datasourceId}/schedules",
    pathVariables: { id, datasourceId },
    options
  });
}
async function createKnowledgebaseDatasourceSchedule(id, datasourceId, body, options) {
  return invokeFetch("knowledgebases", {
    method: "post",
    pathTemplate: "/api/v1/knowledgebases/{id}/datasources/{datasourceId}/schedules",
    pathVariables: { id, datasourceId },
    body,
    contentType: "application/json",
    options
  });
}
async function getKnowledgebaseHistories(id, query, options) {
  return invokeFetch("knowledgebases", {
    method: "get",
    pathTemplate: "/api/v1/knowledgebases/{id}/histories",
    pathVariables: { id },
    query,
    options
  });
}
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
