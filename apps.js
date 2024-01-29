"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _PTU5VIWSjs = require('./chunks/PTU5VIWS.js');
require('./chunks/ECGUIOPI.js');
require('./chunks/4HB3TAEO.js');

// src/public/rest/apps.ts
var createApp = async (body, options) => _PTU5VIWSjs.invokeFetch.call(void 0, "apps", {
  method: "post",
  pathTemplate: "/api/v1/apps",
  body,
  contentType: "application/json",
  options
});
var getAppEvaluationComparison = async (baseid, comparisonid, query, options) => _PTU5VIWSjs.invokeFetch.call(void 0, "apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/evaluations/{baseid}/actions/compare/{comparisonid}",
  pathVariables: { baseid, comparisonid },
  query,
  options
});
var getAppEvaluationComparisonXml = async (baseid, comparisonid, options) => _PTU5VIWSjs.invokeFetch.call(void 0, "apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/evaluations/{baseid}/actions/compare/{comparisonid}/actions/download",
  pathVariables: { baseid, comparisonid },
  options
});
var getAppEvaluation = async (id, query, options) => _PTU5VIWSjs.invokeFetch.call(void 0, "apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/evaluations/{id}",
  pathVariables: { id },
  query,
  options
});
var getAppEvaluationXml = async (id, options) => _PTU5VIWSjs.invokeFetch.call(void 0, "apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/evaluations/{id}/actions/download",
  pathVariables: { id },
  options
});
var importApp = async (query, body, options) => _PTU5VIWSjs.invokeFetch.call(void 0, "apps", {
  method: "post",
  pathTemplate: "/api/v1/apps/import",
  query,
  body,
  contentType: "application/octet-stream",
  options
});
var getAppsPrivileges = async (options) => _PTU5VIWSjs.invokeFetch.call(void 0, "apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/privileges",
  options
});
var deleteApp = async (appId, options) => _PTU5VIWSjs.invokeFetch.call(void 0, "apps", {
  method: "delete",
  pathTemplate: "/api/v1/apps/{appId}",
  pathVariables: { appId },
  options
});
var getAppInfo = async (appId, options) => _PTU5VIWSjs.invokeFetch.call(void 0, "apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/{appId}",
  pathVariables: { appId },
  options
});
var updateAppInfo = async (appId, body, options) => _PTU5VIWSjs.invokeFetch.call(void 0, "apps", {
  method: "put",
  pathTemplate: "/api/v1/apps/{appId}",
  pathVariables: { appId },
  body,
  contentType: "application/json",
  options
});
var copyApp = async (appId, body, options) => _PTU5VIWSjs.invokeFetch.call(void 0, "apps", {
  method: "post",
  pathTemplate: "/api/v1/apps/{appId}/copy",
  pathVariables: { appId },
  body,
  contentType: "application/json",
  options
});
var getAppDataLineage = async (appId, options) => _PTU5VIWSjs.invokeFetch.call(void 0, "apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/{appId}/data/lineage",
  pathVariables: { appId },
  options
});
var getAppDataMetadata = async (appId, options) => _PTU5VIWSjs.invokeFetch.call(void 0, "apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/{appId}/data/metadata",
  pathVariables: { appId },
  options
});
var exportApp = async (appId, query, options) => _PTU5VIWSjs.invokeFetch.call(void 0, "apps", {
  method: "post",
  pathTemplate: "/api/v1/apps/{appId}/export",
  pathVariables: { appId },
  query,
  options
});
var getAppInsightAnalyses = async (appId, options) => _PTU5VIWSjs.invokeFetch.call(void 0, "apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/{appId}/insight-analyses",
  pathVariables: { appId },
  options
});
var getAppInsightAnalysisRecommendations = async (appId, body, options) => _PTU5VIWSjs.invokeFetch.call(void 0, "apps", {
  method: "post",
  pathTemplate: "/api/v1/apps/{appId}/insight-analyses/actions/recommend",
  pathVariables: { appId },
  body,
  contentType: "application/json",
  options
});
var getAppInsightAnalysisModel = async (appId, options) => _PTU5VIWSjs.invokeFetch.call(void 0, "apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/{appId}/insight-analyses/model",
  pathVariables: { appId },
  options
});
var deleteAppMedia = async (appId, path, options) => _PTU5VIWSjs.invokeFetch.call(void 0, "apps", {
  method: "delete",
  pathTemplate: "/api/v1/apps/{appId}/media/files/{path}",
  pathVariables: { appId, path },
  options
});
var getAppMedia = async (appId, path, options) => _PTU5VIWSjs.invokeFetch.call(void 0, "apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/{appId}/media/files/{path}",
  pathVariables: { appId, path },
  options
});
var uploadAppMedia = async (appId, path, body, options) => _PTU5VIWSjs.invokeFetch.call(void 0, "apps", {
  method: "put",
  pathTemplate: "/api/v1/apps/{appId}/media/files/{path}",
  pathVariables: { appId, path },
  body,
  contentType: "application/octet-stream",
  options
});
var getAppMediaList = async (appId, path, query, options) => _PTU5VIWSjs.invokeFetch.call(void 0, "apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/{appId}/media/list/{path}",
  pathVariables: { appId, path },
  query,
  options
});
var getAppThumbnail = async (appId, options) => _PTU5VIWSjs.invokeFetch.call(void 0, "apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/{appId}/media/thumbnail",
  pathVariables: { appId },
  options
});
var updateAppObjectOwner = async (appId, objectId, body, options) => _PTU5VIWSjs.invokeFetch.call(void 0, "apps", {
  method: "post",
  pathTemplate: "/api/v1/apps/{appId}/objects/{objectId}/actions/change-owner",
  pathVariables: { appId, objectId },
  body,
  contentType: "application/json",
  options
});
var updateAppOwner = async (appId, body, options) => _PTU5VIWSjs.invokeFetch.call(void 0, "apps", {
  method: "put",
  pathTemplate: "/api/v1/apps/{appId}/owner",
  pathVariables: { appId },
  body,
  contentType: "application/json",
  options
});
var publishApp = async (appId, body, options) => _PTU5VIWSjs.invokeFetch.call(void 0, "apps", {
  method: "post",
  pathTemplate: "/api/v1/apps/{appId}/publish",
  pathVariables: { appId },
  body,
  contentType: "application/json",
  options
});
var republishApp = async (appId, body, options) => _PTU5VIWSjs.invokeFetch.call(void 0, "apps", {
  method: "put",
  pathTemplate: "/api/v1/apps/{appId}/publish",
  pathVariables: { appId },
  body,
  contentType: "application/json",
  options
});
var getAppReloadLogs = async (appId, options) => _PTU5VIWSjs.invokeFetch.call(void 0, "apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/{appId}/reloads/logs",
  pathVariables: { appId },
  options
});
var getAppReloadLog = async (appId, reloadId, options) => _PTU5VIWSjs.invokeFetch.call(void 0, "apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/{appId}/reloads/logs/{reloadId}",
  pathVariables: { appId, reloadId },
  options
});
var getAppReloadMetadata = async (appId, reloadId, query, options) => _PTU5VIWSjs.invokeFetch.call(void 0, "apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/{appId}/reloads/metadata/{reloadId}",
  pathVariables: { appId, reloadId },
  query,
  options
});
var getAppReportFilters = async (appId, query, options) => _PTU5VIWSjs.invokeFetch.call(void 0, "apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/{appId}/report-filters",
  pathVariables: { appId },
  query,
  options
});
var createAppReportFilter = async (appId, body, options) => _PTU5VIWSjs.invokeFetch.call(void 0, "apps", {
  method: "post",
  pathTemplate: "/api/v1/apps/{appId}/report-filters",
  pathVariables: { appId },
  body,
  contentType: "application/json",
  options
});
var countAppReportFilters = async (appId, query, options) => _PTU5VIWSjs.invokeFetch.call(void 0, "apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/{appId}/report-filters/actions/count",
  pathVariables: { appId },
  query,
  options
});
var deleteAppReportFilter = async (appId, id, options) => _PTU5VIWSjs.invokeFetch.call(void 0, "apps", {
  method: "delete",
  pathTemplate: "/api/v1/apps/{appId}/report-filters/{id}",
  pathVariables: { appId, id },
  options
});
var getAppReportFilter = async (appId, id, options) => _PTU5VIWSjs.invokeFetch.call(void 0, "apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/{appId}/report-filters/{id}",
  pathVariables: { appId, id },
  options
});
var getAppScriptHistory = async (appId, query, options) => _PTU5VIWSjs.invokeFetch.call(void 0, "apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/{appId}/scripts",
  pathVariables: { appId },
  query,
  options
});
var updateAppScript = async (appId, body, options) => _PTU5VIWSjs.invokeFetch.call(void 0, "apps", {
  method: "post",
  pathTemplate: "/api/v1/apps/{appId}/scripts",
  pathVariables: { appId },
  body,
  contentType: "application/json",
  options
});
var deleteAppScript = async (appId, version, options) => _PTU5VIWSjs.invokeFetch.call(void 0, "apps", {
  method: "delete",
  pathTemplate: "/api/v1/apps/{appId}/scripts/{version}",
  pathVariables: { appId, version },
  options
});
var getAppScript = async (appId, version, options) => _PTU5VIWSjs.invokeFetch.call(void 0, "apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/{appId}/scripts/{version}",
  pathVariables: { appId, version },
  options
});
var patchAppScript = async (appId, version, body, options) => _PTU5VIWSjs.invokeFetch.call(void 0, "apps", {
  method: "patch",
  pathTemplate: "/api/v1/apps/{appId}/scripts/{version}",
  pathVariables: { appId, version },
  body,
  contentType: "application/json",
  options
});
var removeAppFromSpace = async (appId, options) => _PTU5VIWSjs.invokeFetch.call(void 0, "apps", {
  method: "delete",
  pathTemplate: "/api/v1/apps/{appId}/space",
  pathVariables: { appId },
  options
});
var moveAppToSpace = async (appId, body, options) => _PTU5VIWSjs.invokeFetch.call(void 0, "apps", {
  method: "put",
  pathTemplate: "/api/v1/apps/{appId}/space",
  pathVariables: { appId },
  body,
  contentType: "application/json",
  options
});
var getAppEvaluations = async (guid, query, options) => _PTU5VIWSjs.invokeFetch.call(void 0, "apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/{guid}/evaluations",
  pathVariables: { guid },
  query,
  options
});
var queueAppEvaluation = async (guid, options) => _PTU5VIWSjs.invokeFetch.call(void 0, "apps", {
  method: "post",
  pathTemplate: "/api/v1/apps/{guid}/evaluations",
  pathVariables: { guid },
  options
});
function clearCache() {
  return _PTU5VIWSjs.clearApiCache.call(void 0, "apps");
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














































exports.clearCache = clearCache; exports.copyApp = copyApp; exports.countAppReportFilters = countAppReportFilters; exports.createApp = createApp; exports.createAppReportFilter = createAppReportFilter; exports.default = apps_default; exports.deleteApp = deleteApp; exports.deleteAppMedia = deleteAppMedia; exports.deleteAppReportFilter = deleteAppReportFilter; exports.deleteAppScript = deleteAppScript; exports.exportApp = exportApp; exports.getAppDataLineage = getAppDataLineage; exports.getAppDataMetadata = getAppDataMetadata; exports.getAppEvaluation = getAppEvaluation; exports.getAppEvaluationComparison = getAppEvaluationComparison; exports.getAppEvaluationComparisonXml = getAppEvaluationComparisonXml; exports.getAppEvaluationXml = getAppEvaluationXml; exports.getAppEvaluations = getAppEvaluations; exports.getAppInfo = getAppInfo; exports.getAppInsightAnalyses = getAppInsightAnalyses; exports.getAppInsightAnalysisModel = getAppInsightAnalysisModel; exports.getAppInsightAnalysisRecommendations = getAppInsightAnalysisRecommendations; exports.getAppMedia = getAppMedia; exports.getAppMediaList = getAppMediaList; exports.getAppReloadLog = getAppReloadLog; exports.getAppReloadLogs = getAppReloadLogs; exports.getAppReloadMetadata = getAppReloadMetadata; exports.getAppReportFilter = getAppReportFilter; exports.getAppReportFilters = getAppReportFilters; exports.getAppScript = getAppScript; exports.getAppScriptHistory = getAppScriptHistory; exports.getAppThumbnail = getAppThumbnail; exports.getAppsPrivileges = getAppsPrivileges; exports.importApp = importApp; exports.moveAppToSpace = moveAppToSpace; exports.patchAppScript = patchAppScript; exports.publishApp = publishApp; exports.queueAppEvaluation = queueAppEvaluation; exports.removeAppFromSpace = removeAppFromSpace; exports.republishApp = republishApp; exports.updateAppInfo = updateAppInfo; exports.updateAppObjectOwner = updateAppObjectOwner; exports.updateAppOwner = updateAppOwner; exports.updateAppScript = updateAppScript; exports.uploadAppMedia = uploadAppMedia;
