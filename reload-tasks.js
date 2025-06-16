import {
  clearApiCache,
  invokeFetch
} from "./chunks/BEREWEFO.js";
import "./chunks/GZ7FHV5J.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/reload-tasks.ts
async function getReloadTasks(query, options) {
  return invokeFetch("reload-tasks", {
    method: "get",
    pathTemplate: "/api/v1/reload-tasks",
    query,
    options
  });
}
async function createReloadTask(body, options) {
  return invokeFetch("reload-tasks", {
    method: "post",
    pathTemplate: "/api/v1/reload-tasks",
    body,
    contentType: "application/json",
    options
  });
}
async function deleteReloadTask(taskId, options) {
  return invokeFetch("reload-tasks", {
    method: "delete",
    pathTemplate: "/api/v1/reload-tasks/{taskId}",
    pathVariables: { taskId },
    options
  });
}
async function getReloadTask(taskId, options) {
  return invokeFetch("reload-tasks", {
    method: "get",
    pathTemplate: "/api/v1/reload-tasks/{taskId}",
    pathVariables: { taskId },
    options
  });
}
async function updateReloadTask(taskId, body, options) {
  return invokeFetch("reload-tasks", {
    method: "put",
    pathTemplate: "/api/v1/reload-tasks/{taskId}",
    pathVariables: { taskId },
    body,
    contentType: "application/json",
    options
  });
}
function clearCache() {
  return clearApiCache("reload-tasks");
}
var reloadTasksExport = {
  getReloadTasks,
  createReloadTask,
  deleteReloadTask,
  getReloadTask,
  updateReloadTask,
  clearCache
};
var reload_tasks_default = reloadTasksExport;
export {
  clearCache,
  createReloadTask,
  reload_tasks_default as default,
  deleteReloadTask,
  getReloadTask,
  getReloadTasks,
  updateReloadTask
};
