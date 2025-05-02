import {
  clearApiCache,
  invokeFetch
} from "./chunks/VVD2DPKQ.js";
import "./chunks/LTNGXTXG.js";
import "./chunks/2ZQ3ZX7F.js";

// src/public/rest/tasks.ts
var getTasks = async (query, options) => invokeFetch("tasks", {
  method: "get",
  pathTemplate: "/api/v1/tasks",
  query,
  options
});
var createTask = async (query, body, options) => invokeFetch("tasks", {
  method: "post",
  pathTemplate: "/api/v1/tasks",
  query,
  body,
  contentType: "application/json",
  options
});
var getTasksResourceRuns = async (id, query, options) => invokeFetch("tasks", {
  method: "get",
  pathTemplate: "/api/v1/tasks/resources/{id}/runs",
  pathVariables: { id },
  query,
  options
});
var deleteTask = async (id, options) => invokeFetch("tasks", {
  method: "delete",
  pathTemplate: "/api/v1/tasks/{id}",
  pathVariables: { id },
  options
});
var getTask = async (id, options) => invokeFetch("tasks", {
  method: "get",
  pathTemplate: "/api/v1/tasks/{id}",
  pathVariables: { id },
  options
});
var updateTask = async (id, body, options) => invokeFetch("tasks", {
  method: "put",
  pathTemplate: "/api/v1/tasks/{id}",
  pathVariables: { id },
  body,
  contentType: "application/json",
  options
});
var startTask = async (id, query, options) => invokeFetch("tasks", {
  method: "post",
  pathTemplate: "/api/v1/tasks/{id}/actions/start",
  pathVariables: { id },
  query,
  options
});
var getTaskRuns = async (id, query, options) => invokeFetch("tasks", {
  method: "get",
  pathTemplate: "/api/v1/tasks/{id}/runs",
  pathVariables: { id },
  query,
  options
});
var getLastTaskRun = async (id, options) => invokeFetch("tasks", {
  method: "get",
  pathTemplate: "/api/v1/tasks/{id}/runs/last",
  pathVariables: { id },
  options
});
var getTaskRunLog = async (id, runId, options) => invokeFetch("tasks", {
  method: "get",
  pathTemplate: "/api/v1/tasks/{id}/runs/{runId}/log",
  pathVariables: { id, runId },
  options
});
function clearCache() {
  return clearApiCache("tasks");
}
var tasksExport = {
  getTasks,
  createTask,
  getTasksResourceRuns,
  deleteTask,
  getTask,
  updateTask,
  startTask,
  getTaskRuns,
  getLastTaskRun,
  getTaskRunLog,
  clearCache
};
var tasks_default = tasksExport;
export {
  clearCache,
  createTask,
  tasks_default as default,
  deleteTask,
  getLastTaskRun,
  getTask,
  getTaskRunLog,
  getTaskRuns,
  getTasks,
  getTasksResourceRuns,
  startTask,
  updateTask
};
