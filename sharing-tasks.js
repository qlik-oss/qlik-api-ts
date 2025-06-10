import {
  clearApiCache,
  invokeFetch
} from "./chunks/PUS32UJH.js";
import "./chunks/CLZXLW6N.js";
import "./chunks/2ZQ3ZX7F.js";

// src/public/rest/sharing-tasks.ts
var getSharingTasks = async (query, options) => invokeFetch("sharing-tasks", {
  method: "get",
  pathTemplate: "/api/v1/sharing-tasks",
  query,
  options
});
var createSharingTask = async (body, options) => invokeFetch("sharing-tasks", {
  method: "post",
  pathTemplate: "/api/v1/sharing-tasks",
  body,
  contentType: "application/json",
  options
});
var executeSharingTasks = async (body, options) => invokeFetch("sharing-tasks", {
  method: "post",
  pathTemplate: "/api/v1/sharing-tasks/actions/execute",
  body,
  contentType: "application/json",
  options
});
var getSharingTasksSettings = async (options) => invokeFetch("sharing-tasks", {
  method: "get",
  pathTemplate: "/api/v1/sharing-tasks/settings",
  options
});
var updateSharingTasksSettings = async (body, options) => invokeFetch("sharing-tasks", {
  method: "patch",
  pathTemplate: "/api/v1/sharing-tasks/settings",
  body,
  contentType: "application/json",
  options
});
var configureSharingTasksSettings = async (body, options) => invokeFetch("sharing-tasks", {
  method: "put",
  pathTemplate: "/api/v1/sharing-tasks/settings",
  body,
  contentType: "application/json",
  options
});
var deleteSharingTask = async (taskId, options) => invokeFetch("sharing-tasks", {
  method: "delete",
  pathTemplate: "/api/v1/sharing-tasks/{taskId}",
  pathVariables: { taskId },
  options
});
var getSharingTask = async (taskId, query, options) => invokeFetch("sharing-tasks", {
  method: "get",
  pathTemplate: "/api/v1/sharing-tasks/{taskId}",
  pathVariables: { taskId },
  query,
  options
});
var patchSharingTask = async (taskId, body, options) => invokeFetch("sharing-tasks", {
  method: "patch",
  pathTemplate: "/api/v1/sharing-tasks/{taskId}",
  pathVariables: { taskId },
  body,
  contentType: "application/json",
  options
});
var cancelSharingTask = async (taskId, options) => invokeFetch("sharing-tasks", {
  method: "post",
  pathTemplate: "/api/v1/sharing-tasks/{taskId}/actions/cancel",
  pathVariables: { taskId },
  options
});
function clearCache() {
  return clearApiCache("sharing-tasks");
}
var sharingTasksExport = {
  getSharingTasks,
  createSharingTask,
  executeSharingTasks,
  getSharingTasksSettings,
  updateSharingTasksSettings,
  configureSharingTasksSettings,
  deleteSharingTask,
  getSharingTask,
  patchSharingTask,
  cancelSharingTask,
  clearCache
};
var sharing_tasks_default = sharingTasksExport;
export {
  cancelSharingTask,
  clearCache,
  configureSharingTasksSettings,
  createSharingTask,
  sharing_tasks_default as default,
  deleteSharingTask,
  executeSharingTasks,
  getSharingTask,
  getSharingTasks,
  getSharingTasksSettings,
  patchSharingTask,
  updateSharingTasksSettings
};
