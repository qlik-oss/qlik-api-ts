"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkJNGURO23js = require('./chunk-JNGURO23.js');
require('./chunk-2STFUQKQ.js');
require('./chunk-P57PW2II.js');

// src/public/rest/reload-tasks.ts
var getReloadTasks = async (query, options) => _chunkJNGURO23js.invokeFetch.call(void 0, "reload-tasks", {
  method: "get",
  pathTemplate: "/api/v1/reload-tasks",
  query,
  options
});
var createReloadTask = async (body, options) => _chunkJNGURO23js.invokeFetch.call(void 0, "reload-tasks", {
  method: "post",
  pathTemplate: "/api/v1/reload-tasks",
  body,
  contentType: "application/json",
  options
});
var deleteReloadTask = async (taskId, options) => _chunkJNGURO23js.invokeFetch.call(void 0, "reload-tasks", {
  method: "delete",
  pathTemplate: "/api/v1/reload-tasks/{taskId}",
  pathVariables: { taskId },
  options
});
var getReloadTask = async (taskId, options) => _chunkJNGURO23js.invokeFetch.call(void 0, "reload-tasks", {
  method: "get",
  pathTemplate: "/api/v1/reload-tasks/{taskId}",
  pathVariables: { taskId },
  options
});
var updateReloadTask = async (taskId, body, options) => _chunkJNGURO23js.invokeFetch.call(void 0, "reload-tasks", {
  method: "put",
  pathTemplate: "/api/v1/reload-tasks/{taskId}",
  pathVariables: { taskId },
  body,
  contentType: "application/json",
  options
});
function clearCache() {
  return _chunkJNGURO23js.clearApiCache.call(void 0, "reload-tasks");
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
