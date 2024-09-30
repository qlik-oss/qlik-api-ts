import {
  clearApiCache,
  invokeFetch
} from "./chunks/A4KQP4HG.js";
import "./chunks/T7WEJY2M.js";
import "./chunks/2ZQ3ZX7F.js";

// src/public/rest/reload-tasks.ts
var getReloadTasks = async (query, options) => invokeFetch("reload-tasks", {
  method: "get",
  pathTemplate: "/api/v1/reload-tasks",
  query,
  options
});
var createReloadTask = async (body, options) => invokeFetch("reload-tasks", {
  method: "post",
  pathTemplate: "/api/v1/reload-tasks",
  body,
  contentType: "application/json",
  options
});
var deleteReloadTask = async (taskId, options) => invokeFetch("reload-tasks", {
  method: "delete",
  pathTemplate: "/api/v1/reload-tasks/{taskId}",
  pathVariables: { taskId },
  options
});
var getReloadTask = async (taskId, options) => invokeFetch("reload-tasks", {
  method: "get",
  pathTemplate: "/api/v1/reload-tasks/{taskId}",
  pathVariables: { taskId },
  options
});
var updateReloadTask = async (taskId, body, options) => invokeFetch("reload-tasks", {
  method: "put",
  pathTemplate: "/api/v1/reload-tasks/{taskId}",
  pathVariables: { taskId },
  body,
  contentType: "application/json",
  options
});
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
