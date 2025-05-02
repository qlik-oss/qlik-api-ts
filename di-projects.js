import {
  clearApiCache,
  invokeFetch
} from "./chunks/VVD2DPKQ.js";
import "./chunks/LTNGXTXG.js";
import "./chunks/2ZQ3ZX7F.js";

// src/public/rest/di-projects.ts
var getDiProjects = async (query, options) => invokeFetch("di-projects", {
  method: "get",
  pathTemplate: "/api/v1/di-projects",
  query,
  options
});
var createDiProject = async (body, options) => invokeFetch("di-projects", {
  method: "post",
  pathTemplate: "/api/v1/di-projects",
  body,
  contentType: "application/json",
  options
});
var getDiProject = async (actionId, query, options) => invokeFetch("di-projects", {
  method: "get",
  pathTemplate: "/api/v1/di-projects/actions/{actionId}",
  pathVariables: { actionId },
  query,
  options
});
var exportDiProject = async (projectId, body, options) => invokeFetch("di-projects", {
  method: "post",
  pathTemplate: "/api/v1/di-projects/{projectId}/actions/export",
  pathVariables: { projectId },
  body,
  contentType: "application/json",
  options
});
var importDiProject = async (projectId, body, options) => invokeFetch("di-projects", {
  method: "post",
  pathTemplate: "/api/v1/di-projects/{projectId}/actions/import",
  pathVariables: { projectId },
  body,
  contentType: "multipart/form-data",
  options
});
var prepareDiProject = async (projectId, body, options) => invokeFetch("di-projects", {
  method: "post",
  pathTemplate: "/api/v1/di-projects/{projectId}/actions/prepare",
  pathVariables: { projectId },
  body,
  contentType: "application/json",
  options
});
var validateDiProject = async (projectId, body, options) => invokeFetch("di-projects", {
  method: "post",
  pathTemplate: "/api/v1/di-projects/{projectId}/actions/validate",
  pathVariables: { projectId },
  body,
  contentType: "application/json",
  options
});
var getDiProjectExportVariables = async (projectId, query, options) => invokeFetch("di-projects", {
  method: "get",
  pathTemplate: "/api/v1/di-projects/{projectId}/bindings",
  pathVariables: { projectId },
  query,
  options
});
var setDiProjectExportVariables = async (projectId, body, options) => invokeFetch("di-projects", {
  method: "put",
  pathTemplate: "/api/v1/di-projects/{projectId}/bindings",
  pathVariables: { projectId },
  body,
  contentType: "application/json",
  options
});
var getDiProjectDiTasks = async (projectId, options) => invokeFetch("di-projects", {
  method: "get",
  pathTemplate: "/api/v1/di-projects/{projectId}/di-tasks",
  pathVariables: { projectId },
  options
});
var getDiProjectDiTask = async (projectId, dataTaskId, options) => invokeFetch("di-projects", {
  method: "get",
  pathTemplate: "/api/v1/di-projects/{projectId}/di-tasks/{dataTaskId}",
  pathVariables: { projectId, dataTaskId },
  options
});
var prepareDiProjectDiTask = async (projectId, dataTaskId, body, options) => invokeFetch("di-projects", {
  method: "post",
  pathTemplate: "/api/v1/di-projects/{projectId}/di-tasks/{dataTaskId}/actions/prepare",
  pathVariables: { projectId, dataTaskId },
  body,
  contentType: "application/json",
  options
});
var validateDiProjectDiTask = async (projectId, dataTaskId, body, options) => invokeFetch("di-projects", {
  method: "post",
  pathTemplate: "/api/v1/di-projects/{projectId}/di-tasks/{dataTaskId}/actions/validate",
  pathVariables: { projectId, dataTaskId },
  body,
  contentType: "application/json",
  options
});
var startDiProjectDiTaskRuntime = async (projectId, dataTaskId, options) => invokeFetch("di-projects", {
  method: "post",
  pathTemplate: "/api/v1/di-projects/{projectId}/di-tasks/{dataTaskId}/runtime/actions/start",
  pathVariables: { projectId, dataTaskId },
  options
});
var stopDiProjectDiTaskRuntime = async (projectId, dataTaskId, options) => invokeFetch("di-projects", {
  method: "post",
  pathTemplate: "/api/v1/di-projects/{projectId}/di-tasks/{dataTaskId}/runtime/actions/stop",
  pathVariables: { projectId, dataTaskId },
  options
});
var getDiProjectDiTaskRuntimeState = async (projectId, dataTaskId, options) => invokeFetch("di-projects", {
  method: "get",
  pathTemplate: "/api/v1/di-projects/{projectId}/di-tasks/{dataTaskId}/runtime/state",
  pathVariables: { projectId, dataTaskId },
  options
});
function clearCache() {
  return clearApiCache("di-projects");
}
var diProjectsExport = {
  getDiProjects,
  createDiProject,
  getDiProject,
  exportDiProject,
  importDiProject,
  prepareDiProject,
  validateDiProject,
  getDiProjectExportVariables,
  setDiProjectExportVariables,
  getDiProjectDiTasks,
  getDiProjectDiTask,
  prepareDiProjectDiTask,
  validateDiProjectDiTask,
  startDiProjectDiTaskRuntime,
  stopDiProjectDiTaskRuntime,
  getDiProjectDiTaskRuntimeState,
  clearCache
};
var di_projects_default = diProjectsExport;
export {
  clearCache,
  createDiProject,
  di_projects_default as default,
  exportDiProject,
  getDiProject,
  getDiProjectDiTask,
  getDiProjectDiTaskRuntimeState,
  getDiProjectDiTasks,
  getDiProjectExportVariables,
  getDiProjects,
  importDiProject,
  prepareDiProject,
  prepareDiProjectDiTask,
  setDiProjectExportVariables,
  startDiProjectDiTaskRuntime,
  stopDiProjectDiTaskRuntime,
  validateDiProject,
  validateDiProjectDiTask
};
