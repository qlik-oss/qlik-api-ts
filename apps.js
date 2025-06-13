import {
  clearApiCache,
  invokeFetch
} from "./chunks/6WNP7HZQ.js";
import "./chunks/QAOVZB27.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/apps.ts
async function createApp(body, options) {
  return invokeFetch("apps", {
    method: "post",
    pathTemplate: "/api/v1/apps",
    body,
    contentType: "application/json",
    options
  });
}
async function getAppEvaluationComparison(baseid, comparisonid, query, options) {
  return invokeFetch("apps", {
    method: "get",
    pathTemplate: "/api/v1/apps/evaluations/{baseid}/actions/compare/{comparisonid}",
    pathVariables: { baseid, comparisonid },
    query,
    options
  });
}
async function getAppEvaluationComparisonXml(baseid, comparisonid, options) {
  return invokeFetch("apps", {
    method: "get",
    pathTemplate: "/api/v1/apps/evaluations/{baseid}/actions/compare/{comparisonid}/actions/download",
    pathVariables: { baseid, comparisonid },
    options
  });
}
async function getAppEvaluation(id, query, options) {
  return invokeFetch("apps", {
    method: "get",
    pathTemplate: "/api/v1/apps/evaluations/{id}",
    pathVariables: { id },
    query,
    options
  });
}
async function getAppEvaluationXml(id, options) {
  return invokeFetch("apps", {
    method: "get",
    pathTemplate: "/api/v1/apps/evaluations/{id}/actions/download",
    pathVariables: { id },
    options
  });
}
async function importApp(query, body, options) {
  return invokeFetch("apps", {
    method: "post",
    pathTemplate: "/api/v1/apps/import",
    query,
    body,
    contentType: "application/octet-stream",
    options
  });
}
async function getAppsPrivileges(options) {
  return invokeFetch("apps", {
    method: "get",
    pathTemplate: "/api/v1/apps/privileges",
    options
  });
}
async function deleteApp(appId, options) {
  return invokeFetch("apps", {
    method: "delete",
    pathTemplate: "/api/v1/apps/{appId}",
    pathVariables: { appId },
    options
  });
}
async function getAppInfo(appId, options) {
  return invokeFetch("apps", {
    method: "get",
    pathTemplate: "/api/v1/apps/{appId}",
    pathVariables: { appId },
    options
  });
}
async function updateAppInfo(appId, body, options) {
  return invokeFetch("apps", {
    method: "put",
    pathTemplate: "/api/v1/apps/{appId}",
    pathVariables: { appId },
    body,
    contentType: "application/json",
    options
  });
}
async function copyApp(appId, body, options) {
  return invokeFetch("apps", {
    method: "post",
    pathTemplate: "/api/v1/apps/{appId}/copy",
    pathVariables: { appId },
    body,
    contentType: "application/json",
    options
  });
}
async function getAppDataLineage(appId, options) {
  return invokeFetch("apps", {
    method: "get",
    pathTemplate: "/api/v1/apps/{appId}/data/lineage",
    pathVariables: { appId },
    options
  });
}
async function getAppDataMetadata(appId, options) {
  return invokeFetch("apps", {
    method: "get",
    pathTemplate: "/api/v1/apps/{appId}/data/metadata",
    pathVariables: { appId },
    options
  });
}
async function exportApp(appId, query, options) {
  return invokeFetch("apps", {
    method: "post",
    pathTemplate: "/api/v1/apps/{appId}/export",
    pathVariables: { appId },
    query,
    options
  });
}
async function getAppInsightAnalyses(appId, options) {
  return invokeFetch("apps", {
    method: "get",
    pathTemplate: "/api/v1/apps/{appId}/insight-analyses",
    pathVariables: { appId },
    options
  });
}
async function getAppInsightAnalysisRecommendations(appId, body, options) {
  return invokeFetch("apps", {
    method: "post",
    pathTemplate: "/api/v1/apps/{appId}/insight-analyses/actions/recommend",
    pathVariables: { appId },
    body,
    contentType: "application/json",
    options
  });
}
async function getAppInsightAnalysisModel(appId, options) {
  return invokeFetch("apps", {
    method: "get",
    pathTemplate: "/api/v1/apps/{appId}/insight-analyses/model",
    pathVariables: { appId },
    options
  });
}
async function deleteAppMedia(appId, path, options) {
  return invokeFetch("apps", {
    method: "delete",
    pathTemplate: "/api/v1/apps/{appId}/media/files/{path}",
    pathVariables: { appId, path },
    options
  });
}
async function getAppMedia(appId, path, options) {
  return invokeFetch("apps", {
    method: "get",
    pathTemplate: "/api/v1/apps/{appId}/media/files/{path}",
    pathVariables: { appId, path },
    options
  });
}
async function uploadAppMedia(appId, path, body, options) {
  return invokeFetch("apps", {
    method: "put",
    pathTemplate: "/api/v1/apps/{appId}/media/files/{path}",
    pathVariables: { appId, path },
    body,
    contentType: "application/octet-stream",
    options
  });
}
async function getAppMediaList(appId, path, query, options) {
  return invokeFetch("apps", {
    method: "get",
    pathTemplate: "/api/v1/apps/{appId}/media/list/{path}",
    pathVariables: { appId, path },
    query,
    options
  });
}
async function getAppThumbnail(appId, options) {
  return invokeFetch("apps", {
    method: "get",
    pathTemplate: "/api/v1/apps/{appId}/media/thumbnail",
    pathVariables: { appId },
    options
  });
}
async function updateAppObjectOwner(appId, objectId, body, options) {
  return invokeFetch("apps", {
    method: "post",
    pathTemplate: "/api/v1/apps/{appId}/objects/{objectId}/actions/change-owner",
    pathVariables: { appId, objectId },
    body,
    contentType: "application/json",
    options
  });
}
async function updateAppOwner(appId, body, options) {
  return invokeFetch("apps", {
    method: "put",
    pathTemplate: "/api/v1/apps/{appId}/owner",
    pathVariables: { appId },
    body,
    contentType: "application/json",
    options
  });
}
async function publishApp(appId, body, options) {
  return invokeFetch("apps", {
    method: "post",
    pathTemplate: "/api/v1/apps/{appId}/publish",
    pathVariables: { appId },
    body,
    contentType: "application/json",
    options
  });
}
async function republishApp(appId, body, options) {
  return invokeFetch("apps", {
    method: "put",
    pathTemplate: "/api/v1/apps/{appId}/publish",
    pathVariables: { appId },
    body,
    contentType: "application/json",
    options
  });
}
async function getAppReloadLogs(appId, options) {
  return invokeFetch("apps", {
    method: "get",
    pathTemplate: "/api/v1/apps/{appId}/reloads/logs",
    pathVariables: { appId },
    options
  });
}
async function getAppReloadLog(appId, reloadId, options) {
  return invokeFetch("apps", {
    method: "get",
    pathTemplate: "/api/v1/apps/{appId}/reloads/logs/{reloadId}",
    pathVariables: { appId, reloadId },
    options
  });
}
async function getAppReloadMetadata(appId, reloadId, query, options) {
  return invokeFetch("apps", {
    method: "get",
    pathTemplate: "/api/v1/apps/{appId}/reloads/metadata/{reloadId}",
    pathVariables: { appId, reloadId },
    query,
    options
  });
}
async function getAppReportFilters(appId, query, options) {
  return invokeFetch("apps", {
    method: "get",
    pathTemplate: "/api/v1/apps/{appId}/report-filters",
    pathVariables: { appId },
    query,
    options
  });
}
async function createAppReportFilter(appId, body, options) {
  return invokeFetch("apps", {
    method: "post",
    pathTemplate: "/api/v1/apps/{appId}/report-filters",
    pathVariables: { appId },
    body,
    contentType: "application/json",
    options
  });
}
async function countAppReportFilters(appId, query, options) {
  return invokeFetch("apps", {
    method: "get",
    pathTemplate: "/api/v1/apps/{appId}/report-filters/actions/count",
    pathVariables: { appId },
    query,
    options
  });
}
async function deleteAppReportFilter(appId, id, options) {
  return invokeFetch("apps", {
    method: "delete",
    pathTemplate: "/api/v1/apps/{appId}/report-filters/{id}",
    pathVariables: { appId, id },
    options
  });
}
async function getAppReportFilter(appId, id, options) {
  return invokeFetch("apps", {
    method: "get",
    pathTemplate: "/api/v1/apps/{appId}/report-filters/{id}",
    pathVariables: { appId, id },
    options
  });
}
async function patchAppReportFilter(appId, id, body, options) {
  return invokeFetch("apps", {
    method: "patch",
    pathTemplate: "/api/v1/apps/{appId}/report-filters/{id}",
    pathVariables: { appId, id },
    body,
    contentType: "application/json",
    options
  });
}
async function getAppScriptHistory(appId, query, options) {
  return invokeFetch("apps", {
    method: "get",
    pathTemplate: "/api/v1/apps/{appId}/scripts",
    pathVariables: { appId },
    query,
    options
  });
}
async function updateAppScript(appId, body, options) {
  return invokeFetch("apps", {
    method: "post",
    pathTemplate: "/api/v1/apps/{appId}/scripts",
    pathVariables: { appId },
    body,
    contentType: "application/json",
    options
  });
}
async function deleteAppScript(appId, id, options) {
  return invokeFetch("apps", {
    method: "delete",
    pathTemplate: "/api/v1/apps/{appId}/scripts/{id}",
    pathVariables: { appId, id },
    options
  });
}
async function getAppScript(appId, id, options) {
  return invokeFetch("apps", {
    method: "get",
    pathTemplate: "/api/v1/apps/{appId}/scripts/{id}",
    pathVariables: { appId, id },
    options
  });
}
async function patchAppScript(appId, id, body, options) {
  return invokeFetch("apps", {
    method: "patch",
    pathTemplate: "/api/v1/apps/{appId}/scripts/{id}",
    pathVariables: { appId, id },
    body,
    contentType: "application/json",
    options
  });
}
async function removeAppFromSpace(appId, options) {
  return invokeFetch("apps", {
    method: "delete",
    pathTemplate: "/api/v1/apps/{appId}/space",
    pathVariables: { appId },
    options
  });
}
async function moveAppToSpace(appId, body, options) {
  return invokeFetch("apps", {
    method: "put",
    pathTemplate: "/api/v1/apps/{appId}/space",
    pathVariables: { appId },
    body,
    contentType: "application/json",
    options
  });
}
async function getAppEvaluations(guid, query, options) {
  return invokeFetch("apps", {
    method: "get",
    pathTemplate: "/api/v1/apps/{guid}/evaluations",
    pathVariables: { guid },
    query,
    options
  });
}
async function queueAppEvaluation(guid, options) {
  return invokeFetch("apps", {
    method: "post",
    pathTemplate: "/api/v1/apps/{guid}/evaluations",
    pathVariables: { guid },
    options
  });
}
function clearCache() {
  return clearApiCache("apps");
}
var appsExport = {
  createApp,
  getAppEvaluationComparison,
  getAppEvaluationComparisonXml,
  getAppEvaluation,
  getAppEvaluationXml,
  importApp,
  getAppsPrivileges,
  deleteApp,
  getAppInfo,
  updateAppInfo,
  copyApp,
  getAppDataLineage,
  getAppDataMetadata,
  exportApp,
  getAppInsightAnalyses,
  getAppInsightAnalysisRecommendations,
  getAppInsightAnalysisModel,
  deleteAppMedia,
  getAppMedia,
  uploadAppMedia,
  getAppMediaList,
  getAppThumbnail,
  updateAppObjectOwner,
  updateAppOwner,
  publishApp,
  republishApp,
  getAppReloadLogs,
  getAppReloadLog,
  getAppReloadMetadata,
  getAppReportFilters,
  createAppReportFilter,
  countAppReportFilters,
  deleteAppReportFilter,
  getAppReportFilter,
  patchAppReportFilter,
  getAppScriptHistory,
  updateAppScript,
  deleteAppScript,
  getAppScript,
  patchAppScript,
  removeAppFromSpace,
  moveAppToSpace,
  getAppEvaluations,
  queueAppEvaluation,
  clearCache
};
var apps_default = appsExport;
export {
  clearCache,
  copyApp,
  countAppReportFilters,
  createApp,
  createAppReportFilter,
  apps_default as default,
  deleteApp,
  deleteAppMedia,
  deleteAppReportFilter,
  deleteAppScript,
  exportApp,
  getAppDataLineage,
  getAppDataMetadata,
  getAppEvaluation,
  getAppEvaluationComparison,
  getAppEvaluationComparisonXml,
  getAppEvaluationXml,
  getAppEvaluations,
  getAppInfo,
  getAppInsightAnalyses,
  getAppInsightAnalysisModel,
  getAppInsightAnalysisRecommendations,
  getAppMedia,
  getAppMediaList,
  getAppReloadLog,
  getAppReloadLogs,
  getAppReloadMetadata,
  getAppReportFilter,
  getAppReportFilters,
  getAppScript,
  getAppScriptHistory,
  getAppThumbnail,
  getAppsPrivileges,
  importApp,
  moveAppToSpace,
  patchAppReportFilter,
  patchAppScript,
  publishApp,
  queueAppEvaluation,
  removeAppFromSpace,
  republishApp,
  updateAppInfo,
  updateAppObjectOwner,
  updateAppOwner,
  updateAppScript,
  uploadAppMedia
};
