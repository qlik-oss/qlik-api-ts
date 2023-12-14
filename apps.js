"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkWA4O4PMUjs = require('./chunk-WA4O4PMU.js');
require('./chunk-L4SFSITJ.js');

// src/public/rest/apps.ts
var createApp = async (body, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "apps", {
  method: "post",
  pathTemplate: "/api/v1/apps",
  body,
  options
});
var getAppEvaluationComparison = async (baseid, comparisonid, query, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/evaluations/{baseid}/actions/compare/{comparisonid}",
  pathVariables: { baseid, comparisonid },
  query,
  options
});
var getAppEvaluationComparisonXml = async (baseid, comparisonid, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/evaluations/{baseid}/actions/compare/{comparisonid}/actions/download",
  pathVariables: { baseid, comparisonid },
  options
});
var getAppEvaluation = async (id, query, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/evaluations/{id}",
  pathVariables: { id },
  query,
  options
});
var getAppEvaluationXml = async (id, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/evaluations/{id}/actions/download",
  pathVariables: { id },
  options
});
var importApp = async (query, body, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "apps", {
  method: "post",
  pathTemplate: "/api/v1/apps/import",
  query,
  body,
  options
});
var getAppsPrivileges = async (options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/privileges",
  options
});
var deleteApp = async (appId, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "apps", {
  method: "delete",
  pathTemplate: "/api/v1/apps/{appId}",
  pathVariables: { appId },
  options
});
var getAppInfo = async (appId, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/{appId}",
  pathVariables: { appId },
  options
});
var updateAppInfo = async (appId, body, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "apps", {
  method: "put",
  pathTemplate: "/api/v1/apps/{appId}",
  pathVariables: { appId },
  body,
  options
});
var copyApp = async (appId, body, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "apps", {
  method: "post",
  pathTemplate: "/api/v1/apps/{appId}/copy",
  pathVariables: { appId },
  body,
  options
});
var getAppDataLineage = async (appId, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/{appId}/data/lineage",
  pathVariables: { appId },
  options
});
var getAppDataMetadata = async (appId, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/{appId}/data/metadata",
  pathVariables: { appId },
  options
});
var exportApp = async (appId, query, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "apps", {
  method: "post",
  pathTemplate: "/api/v1/apps/{appId}/export",
  pathVariables: { appId },
  query,
  options
});
var getAppInsightAnalyses = async (appId, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/{appId}/insight-analyses",
  pathVariables: { appId },
  options
});
var getAppInsightAnalysisRecommendations = async (appId, body, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "apps", {
  method: "post",
  pathTemplate: "/api/v1/apps/{appId}/insight-analyses/actions/recommend",
  pathVariables: { appId },
  body,
  options
});
var getAppInsightAnalysisModel = async (appId, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/{appId}/insight-analyses/model",
  pathVariables: { appId },
  options
});
var deleteAppMedia = async (appId, path, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "apps", {
  method: "delete",
  pathTemplate: "/api/v1/apps/{appId}/media/files/{path}",
  pathVariables: { appId, path },
  options
});
var getAppMedia = async (appId, path, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/{appId}/media/files/{path}",
  pathVariables: { appId, path },
  options
});
var uploadAppMedia = async (appId, path, body, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "apps", {
  method: "put",
  pathTemplate: "/api/v1/apps/{appId}/media/files/{path}",
  pathVariables: { appId, path },
  body,
  options
});
var getAppMediaList = async (appId, path, query, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/{appId}/media/list/{path}",
  pathVariables: { appId, path },
  query,
  options
});
var getAppThumbnail = async (appId, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/{appId}/media/thumbnail",
  pathVariables: { appId },
  options
});
var updateAppObjectOwner = async (appId, objectId, body, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "apps", {
  method: "post",
  pathTemplate: "/api/v1/apps/{appId}/objects/{objectId}/actions/change-owner",
  pathVariables: { appId, objectId },
  body,
  options
});
var updateAppOwner = async (appId, body, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "apps", {
  method: "put",
  pathTemplate: "/api/v1/apps/{appId}/owner",
  pathVariables: { appId },
  body,
  options
});
var publishApp = async (appId, body, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "apps", {
  method: "post",
  pathTemplate: "/api/v1/apps/{appId}/publish",
  pathVariables: { appId },
  body,
  options
});
var republishApp = async (appId, body, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "apps", {
  method: "put",
  pathTemplate: "/api/v1/apps/{appId}/publish",
  pathVariables: { appId },
  body,
  options
});
var getAppReloadLogs = async (appId, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/{appId}/reloads/logs",
  pathVariables: { appId },
  options
});
var getAppReloadLog = async (appId, reloadId, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/{appId}/reloads/logs/{reloadId}",
  pathVariables: { appId, reloadId },
  options
});
var getAppReloadMetadata = async (appId, reloadId, query, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/{appId}/reloads/metadata/{reloadId}",
  pathVariables: { appId, reloadId },
  query,
  options
});
var getAppScriptHistory = async (appId, query, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/{appId}/scripts",
  pathVariables: { appId },
  query,
  options
});
var updateAppScript = async (appId, body, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "apps", {
  method: "post",
  pathTemplate: "/api/v1/apps/{appId}/scripts",
  pathVariables: { appId },
  body,
  options
});
var deleteAppScript = async (appId, version, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "apps", {
  method: "delete",
  pathTemplate: "/api/v1/apps/{appId}/scripts/{version}",
  pathVariables: { appId, version },
  options
});
var getAppScript = async (appId, version, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/{appId}/scripts/{version}",
  pathVariables: { appId, version },
  options
});
var patchAppScript = async (appId, version, body, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "apps", {
  method: "patch",
  pathTemplate: "/api/v1/apps/{appId}/scripts/{version}",
  pathVariables: { appId, version },
  body,
  options
});
var removeAppFromSpace = async (appId, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "apps", {
  method: "delete",
  pathTemplate: "/api/v1/apps/{appId}/space",
  pathVariables: { appId },
  options
});
var moveAppToSpace = async (appId, body, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "apps", {
  method: "put",
  pathTemplate: "/api/v1/apps/{appId}/space",
  pathVariables: { appId },
  body,
  options
});
var getAppEvaluations = async (guid, query, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/{guid}/evaluations",
  pathVariables: { guid },
  query,
  options
});
var queueAppEvaluation = async (guid, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "apps", {
  method: "post",
  pathTemplate: "/api/v1/apps/{guid}/evaluations",
  pathVariables: { guid },
  options
});
function clearCache() {
  return _chunkWA4O4PMUjs.clearApiCache.call(void 0, "apps");
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









































exports.clearCache = clearCache; exports.copyApp = copyApp; exports.createApp = createApp; exports.default = apps_default; exports.deleteApp = deleteApp; exports.deleteAppMedia = deleteAppMedia; exports.deleteAppScript = deleteAppScript; exports.exportApp = exportApp; exports.getAppDataLineage = getAppDataLineage; exports.getAppDataMetadata = getAppDataMetadata; exports.getAppEvaluation = getAppEvaluation; exports.getAppEvaluationComparison = getAppEvaluationComparison; exports.getAppEvaluationComparisonXml = getAppEvaluationComparisonXml; exports.getAppEvaluationXml = getAppEvaluationXml; exports.getAppEvaluations = getAppEvaluations; exports.getAppInfo = getAppInfo; exports.getAppInsightAnalyses = getAppInsightAnalyses; exports.getAppInsightAnalysisModel = getAppInsightAnalysisModel; exports.getAppInsightAnalysisRecommendations = getAppInsightAnalysisRecommendations; exports.getAppMedia = getAppMedia; exports.getAppMediaList = getAppMediaList; exports.getAppReloadLog = getAppReloadLog; exports.getAppReloadLogs = getAppReloadLogs; exports.getAppReloadMetadata = getAppReloadMetadata; exports.getAppScript = getAppScript; exports.getAppScriptHistory = getAppScriptHistory; exports.getAppThumbnail = getAppThumbnail; exports.getAppsPrivileges = getAppsPrivileges; exports.importApp = importApp; exports.moveAppToSpace = moveAppToSpace; exports.patchAppScript = patchAppScript; exports.publishApp = publishApp; exports.queueAppEvaluation = queueAppEvaluation; exports.removeAppFromSpace = removeAppFromSpace; exports.republishApp = republishApp; exports.updateAppInfo = updateAppInfo; exports.updateAppObjectOwner = updateAppObjectOwner; exports.updateAppOwner = updateAppOwner; exports.updateAppScript = updateAppScript; exports.uploadAppMedia = uploadAppMedia;
