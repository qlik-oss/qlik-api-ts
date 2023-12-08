"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunk6JERR27Kjs = require('./chunk-6JERR27K.js');
require('./chunk-H7SAZYEE.js');

// src/public/rest/reload-tasks.ts
var getReloadTasks = async (query, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "reload-tasks", {
  method: "get",
  pathTemplate: "/api/v1/reload-tasks",
  query,
  options
});
var createReloadTask = async (body, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "reload-tasks", {
  method: "post",
  pathTemplate: "/api/v1/reload-tasks",
  body,
  options
});
var deleteReloadTask = async (taskId, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "reload-tasks", {
  method: "delete",
  pathTemplate: "/api/v1/reload-tasks/{taskId}",
  pathVariables: { taskId },
  options
});
var getReloadTask = async (taskId, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "reload-tasks", {
  method: "get",
  pathTemplate: "/api/v1/reload-tasks/{taskId}",
  pathVariables: { taskId },
  options
});
var updateReloadTask = async (taskId, body, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "reload-tasks", {
  method: "put",
  pathTemplate: "/api/v1/reload-tasks/{taskId}",
  pathVariables: { taskId },
  body,
  options
});
function clearCache() {
  return _chunk6JERR27Kjs.clearApiCache.call(void 0, "reload-tasks");
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
