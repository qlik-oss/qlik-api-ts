import {
  clearApiCache,
  invokeFetch
} from "./chunks/6WNP7HZQ.js";
import "./chunks/QAOVZB27.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/di-projects.ts
async function getDiProjects(query, options) {
  return invokeFetch("di-projects", {
    method: "get",
    pathTemplate: "/api/v1/di-projects",
    query,
    options
  });
}
async function createDiProject(body, options) {
  return invokeFetch("di-projects", {
    method: "post",
    pathTemplate: "/api/v1/di-projects",
    body,
    contentType: "application/json",
    options
  });
}
async function getDiProject(actionId, query, options) {
  return invokeFetch("di-projects", {
    method: "get",
    pathTemplate: "/api/v1/di-projects/actions/{actionId}",
    pathVariables: { actionId },
    query,
    options
  });
}
async function exportDiProject(projectId, body, options) {
  return invokeFetch("di-projects", {
    method: "post",
    pathTemplate: "/api/v1/di-projects/{projectId}/actions/export",
    pathVariables: { projectId },
    body,
    contentType: "application/json",
    options
  });
}
async function importDiProject(projectId, body, options) {
  return invokeFetch("di-projects", {
    method: "post",
    pathTemplate: "/api/v1/di-projects/{projectId}/actions/import",
    pathVariables: { projectId },
    body,
    contentType: "multipart/form-data",
    options
  });
}
async function prepareDiProject(projectId, body, options) {
  return invokeFetch("di-projects", {
    method: "post",
    pathTemplate: "/api/v1/di-projects/{projectId}/actions/prepare",
    pathVariables: { projectId },
    body,
    contentType: "application/json",
    options
  });
}
async function validateDiProject(projectId, body, options) {
  return invokeFetch("di-projects", {
    method: "post",
    pathTemplate: "/api/v1/di-projects/{projectId}/actions/validate",
    pathVariables: { projectId },
    body,
    contentType: "application/json",
    options
  });
}
async function getDiProjectExportVariables(projectId, query, options) {
  return invokeFetch("di-projects", {
    method: "get",
    pathTemplate: "/api/v1/di-projects/{projectId}/bindings",
    pathVariables: { projectId },
    query,
    options
  });
}
async function setDiProjectExportVariables(projectId, body, options) {
  return invokeFetch("di-projects", {
    method: "put",
    pathTemplate: "/api/v1/di-projects/{projectId}/bindings",
    pathVariables: { projectId },
    body,
    contentType: "application/json",
    options
  });
}
async function getDiProjectDiTasks(projectId, options) {
  return invokeFetch("di-projects", {
    method: "get",
    pathTemplate: "/api/v1/di-projects/{projectId}/di-tasks",
    pathVariables: { projectId },
    options
  });
}
async function getDiProjectDiTask(projectId, dataTaskId, options) {
  return invokeFetch("di-projects", {
    method: "get",
    pathTemplate: "/api/v1/di-projects/{projectId}/di-tasks/{dataTaskId}",
    pathVariables: { projectId, dataTaskId },
    options
  });
}
async function prepareDiProjectDiTask(projectId, dataTaskId, body, options) {
  return invokeFetch("di-projects", {
    method: "post",
    pathTemplate: "/api/v1/di-projects/{projectId}/di-tasks/{dataTaskId}/actions/prepare",
    pathVariables: { projectId, dataTaskId },
    body,
    contentType: "application/json",
    options
  });
}
async function validateDiProjectDiTask(projectId, dataTaskId, body, options) {
  return invokeFetch("di-projects", {
    method: "post",
    pathTemplate: "/api/v1/di-projects/{projectId}/di-tasks/{dataTaskId}/actions/validate",
    pathVariables: { projectId, dataTaskId },
    body,
    contentType: "application/json",
    options
  });
}
async function startDiProjectDiTaskRuntime(projectId, dataTaskId, options) {
  return invokeFetch("di-projects", {
    method: "post",
    pathTemplate: "/api/v1/di-projects/{projectId}/di-tasks/{dataTaskId}/runtime/actions/start",
    pathVariables: { projectId, dataTaskId },
    options
  });
}
async function stopDiProjectDiTaskRuntime(projectId, dataTaskId, options) {
  return invokeFetch("di-projects", {
    method: "post",
    pathTemplate: "/api/v1/di-projects/{projectId}/di-tasks/{dataTaskId}/runtime/actions/stop",
    pathVariables: { projectId, dataTaskId },
    options
  });
}
async function getDiProjectDiTaskRuntimeState(projectId, dataTaskId, options) {
  return invokeFetch("di-projects", {
    method: "get",
    pathTemplate: "/api/v1/di-projects/{projectId}/di-tasks/{dataTaskId}/runtime/state",
    pathVariables: { projectId, dataTaskId },
    options
  });
}
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
