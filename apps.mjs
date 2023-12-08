import {
  clearApiCache,
  invokeFetch
} from "./chunk-W4J34XGA.mjs";
import "./chunk-7REWEWCX.mjs";

// src/public/rest/apps.ts
var createApp = async (body, options) => invokeFetch("apps", {
  method: "post",
  pathTemplate: "/api/v1/apps",
  body,
  options
});
var getAppEvaluationComparison = async (baseid, comparisonid, query, options) => invokeFetch("apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/evaluations/{baseid}/actions/compare/{comparisonid}",
  pathVariables: { baseid, comparisonid },
  query,
  options
});
var getAppEvaluationComparisonXml = async (baseid, comparisonid, options) => invokeFetch("apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/evaluations/{baseid}/actions/compare/{comparisonid}/actions/download",
  pathVariables: { baseid, comparisonid },
  options
});
var getAppEvaluation = async (id, query, options) => invokeFetch("apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/evaluations/{id}",
  pathVariables: { id },
  query,
  options
});
var getAppEvaluationXml = async (id, options) => invokeFetch("apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/evaluations/{id}/actions/download",
  pathVariables: { id },
  options
});
var importApp = async (query, body, options) => invokeFetch("apps", {
  method: "post",
  pathTemplate: "/api/v1/apps/import",
  query,
  body,
  options
});
var getAppsPrivileges = async (options) => invokeFetch("apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/privileges",
  options
});
var deleteApp = async (appId, options) => invokeFetch("apps", {
  method: "delete",
  pathTemplate: "/api/v1/apps/{appId}",
  pathVariables: { appId },
  options
});
var getAppInfo = async (appId, options) => invokeFetch("apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/{appId}",
  pathVariables: { appId },
  options
});
var updateAppInfo = async (appId, body, options) => invokeFetch("apps", {
  method: "put",
  pathTemplate: "/api/v1/apps/{appId}",
  pathVariables: { appId },
  body,
  options
});
var copyApp = async (appId, body, options) => invokeFetch("apps", {
  method: "post",
  pathTemplate: "/api/v1/apps/{appId}/copy",
  pathVariables: { appId },
  body,
  options
});
var getAppDataLineage = async (appId, options) => invokeFetch("apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/{appId}/data/lineage",
  pathVariables: { appId },
  options
});
var getAppDataMetadata = async (appId, options) => invokeFetch("apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/{appId}/data/metadata",
  pathVariables: { appId },
  options
});
var exportApp = async (appId, query, options) => invokeFetch("apps", {
  method: "post",
  pathTemplate: "/api/v1/apps/{appId}/export",
  pathVariables: { appId },
  query,
  options
});
var getAppInsightAnalyses = async (appId, options) => invokeFetch("apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/{appId}/insight-analyses",
  pathVariables: { appId },
  options
});
var getAppInsightAnalysisRecommendations = async (appId, body, options) => invokeFetch("apps", {
  method: "post",
  pathTemplate: "/api/v1/apps/{appId}/insight-analyses/actions/recommend",
  pathVariables: { appId },
  body,
  options
});
var getAppInsightAnalysisModel = async (appId, options) => invokeFetch("apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/{appId}/insight-analyses/model",
  pathVariables: { appId },
  options
});
var deleteAppMedia = async (appId, path, options) => invokeFetch("apps", {
  method: "delete",
  pathTemplate: "/api/v1/apps/{appId}/media/files/{path}",
  pathVariables: { appId, path },
  options
});
var getAppMedia = async (appId, path, options) => invokeFetch("apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/{appId}/media/files/{path}",
  pathVariables: { appId, path },
  options
});
var uploadAppMedia = async (appId, path, body, options) => invokeFetch("apps", {
  method: "put",
  pathTemplate: "/api/v1/apps/{appId}/media/files/{path}",
  pathVariables: { appId, path },
  body,
  options
});
var getAppMediaList = async (appId, path, query, options) => invokeFetch("apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/{appId}/media/list/{path}",
  pathVariables: { appId, path },
  query,
  options
});
var getAppThumbnail = async (appId, options) => invokeFetch("apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/{appId}/media/thumbnail",
  pathVariables: { appId },
  options
});
var updateAppObjectOwner = async (appId, objectId, body, options) => invokeFetch("apps", {
  method: "post",
  pathTemplate: "/api/v1/apps/{appId}/objects/{objectId}/actions/change-owner",
  pathVariables: { appId, objectId },
  body,
  options
});
var updateAppOwner = async (appId, body, options) => invokeFetch("apps", {
  method: "put",
  pathTemplate: "/api/v1/apps/{appId}/owner",
  pathVariables: { appId },
  body,
  options
});
var publishApp = async (appId, body, options) => invokeFetch("apps", {
  method: "post",
  pathTemplate: "/api/v1/apps/{appId}/publish",
  pathVariables: { appId },
  body,
  options
});
var republishApp = async (appId, body, options) => invokeFetch("apps", {
  method: "put",
  pathTemplate: "/api/v1/apps/{appId}/publish",
  pathVariables: { appId },
  body,
  options
});
var getAppReloadLogs = async (appId, options) => invokeFetch("apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/{appId}/reloads/logs",
  pathVariables: { appId },
  options
});
var getAppReloadLog = async (appId, reloadId, options) => invokeFetch("apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/{appId}/reloads/logs/{reloadId}",
  pathVariables: { appId, reloadId },
  options
});
var getAppReloadMetadata = async (appId, reloadId, query, options) => invokeFetch("apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/{appId}/reloads/metadata/{reloadId}",
  pathVariables: { appId, reloadId },
  query,
  options
});
var getAppScriptHistory = async (appId, query, options) => invokeFetch("apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/{appId}/scripts",
  pathVariables: { appId },
  query,
  options
});
var updateAppScript = async (appId, body, options) => invokeFetch("apps", {
  method: "post",
  pathTemplate: "/api/v1/apps/{appId}/scripts",
  pathVariables: { appId },
  body,
  options
});
var deleteAppScript = async (appId, version, options) => invokeFetch("apps", {
  method: "delete",
  pathTemplate: "/api/v1/apps/{appId}/scripts/{version}",
  pathVariables: { appId, version },
  options
});
var getAppScript = async (appId, version, options) => invokeFetch("apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/{appId}/scripts/{version}",
  pathVariables: { appId, version },
  options
});
var patchAppScript = async (appId, version, body, options) => invokeFetch("apps", {
  method: "patch",
  pathTemplate: "/api/v1/apps/{appId}/scripts/{version}",
  pathVariables: { appId, version },
  body,
  options
});
var removeAppFromSpace = async (appId, options) => invokeFetch("apps", {
  method: "delete",
  pathTemplate: "/api/v1/apps/{appId}/space",
  pathVariables: { appId },
  options
});
var moveAppToSpace = async (appId, body, options) => invokeFetch("apps", {
  method: "put",
  pathTemplate: "/api/v1/apps/{appId}/space",
  pathVariables: { appId },
  body,
  options
});
var getAppEvaluations = async (guid, query, options) => invokeFetch("apps", {
  method: "get",
  pathTemplate: "/api/v1/apps/{guid}/evaluations",
  pathVariables: { guid },
  query,
  options
});
var queueAppEvaluation = async (guid, options) => invokeFetch("apps", {
  method: "post",
  pathTemplate: "/api/v1/apps/{guid}/evaluations",
  pathVariables: { guid },
  options
});
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
  createApp,
  apps_default as default,
  deleteApp,
  deleteAppMedia,
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
  getAppScript,
  getAppScriptHistory,
  getAppThumbnail,
  getAppsPrivileges,
  importApp,
  moveAppToSpace,
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
