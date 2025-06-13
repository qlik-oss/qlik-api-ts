import {
  clearApiCache,
  invokeFetch
} from "./chunks/6WNP7HZQ.js";
import "./chunks/QAOVZB27.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/sharing-tasks.ts
async function getSharingTasks(query, options) {
  return invokeFetch("sharing-tasks", {
    method: "get",
    pathTemplate: "/api/v1/sharing-tasks",
    query,
    options
  });
}
async function createSharingTask(body, options) {
  return invokeFetch("sharing-tasks", {
    method: "post",
    pathTemplate: "/api/v1/sharing-tasks",
    body,
    contentType: "application/json",
    options
  });
}
async function executeSharingTasks(body, options) {
  return invokeFetch("sharing-tasks", {
    method: "post",
    pathTemplate: "/api/v1/sharing-tasks/actions/execute",
    body,
    contentType: "application/json",
    options
  });
}
async function getSharingTasksSettings(options) {
  return invokeFetch("sharing-tasks", {
    method: "get",
    pathTemplate: "/api/v1/sharing-tasks/settings",
    options
  });
}
async function updateSharingTasksSettings(body, options) {
  return invokeFetch("sharing-tasks", {
    method: "patch",
    pathTemplate: "/api/v1/sharing-tasks/settings",
    body,
    contentType: "application/json",
    options
  });
}
async function configureSharingTasksSettings(body, options) {
  return invokeFetch("sharing-tasks", {
    method: "put",
    pathTemplate: "/api/v1/sharing-tasks/settings",
    body,
    contentType: "application/json",
    options
  });
}
async function deleteSharingTask(taskId, options) {
  return invokeFetch("sharing-tasks", {
    method: "delete",
    pathTemplate: "/api/v1/sharing-tasks/{taskId}",
    pathVariables: { taskId },
    options
  });
}
async function getSharingTask(taskId, query, options) {
  return invokeFetch("sharing-tasks", {
    method: "get",
    pathTemplate: "/api/v1/sharing-tasks/{taskId}",
    pathVariables: { taskId },
    query,
    options
  });
}
async function patchSharingTask(taskId, body, options) {
  return invokeFetch("sharing-tasks", {
    method: "patch",
    pathTemplate: "/api/v1/sharing-tasks/{taskId}",
    pathVariables: { taskId },
    body,
    contentType: "application/json",
    options
  });
}
async function cancelSharingTask(taskId, options) {
  return invokeFetch("sharing-tasks", {
    method: "post",
    pathTemplate: "/api/v1/sharing-tasks/{taskId}/actions/cancel",
    pathVariables: { taskId },
    options
  });
}
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
