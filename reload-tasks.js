"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkWA4O4PMUjs = require('./chunk-WA4O4PMU.js');
require('./chunk-L4SFSITJ.js');

// src/public/rest/reload-tasks.ts
var getReloadTasks = async (query, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "reload-tasks", {
  method: "get",
  pathTemplate: "/api/v1/reload-tasks",
  query,
  options
});
var createReloadTask = async (body, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "reload-tasks", {
  method: "post",
  pathTemplate: "/api/v1/reload-tasks",
  body,
  options
});
var deleteReloadTask = async (taskId, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "reload-tasks", {
  method: "delete",
  pathTemplate: "/api/v1/reload-tasks/{taskId}",
  pathVariables: { taskId },
  options
});
var getReloadTask = async (taskId, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "reload-tasks", {
  method: "get",
  pathTemplate: "/api/v1/reload-tasks/{taskId}",
  pathVariables: { taskId },
  options
});
var updateReloadTask = async (taskId, body, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "reload-tasks", {
  method: "put",
  pathTemplate: "/api/v1/reload-tasks/{taskId}",
  pathVariables: { taskId },
  body,
  options
});
function clearCache() {
  return _chunkWA4O4PMUjs.clearApiCache.call(void 0, "reload-tasks");
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








exports.clearCache = clearCache; exports.createReloadTask = createReloadTask; exports.default = reload_tasks_default; exports.deleteReloadTask = deleteReloadTask; exports.getReloadTask = getReloadTask; exports.getReloadTasks = getReloadTasks; exports.updateReloadTask = updateReloadTask;
