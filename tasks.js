import {
  clearApiCache,
  invokeFetch
} from "./chunks/NPB36P3M.js";
import "./chunks/L5QSVLDQ.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/tasks.ts
async function getTasks(query, options) {
  return invokeFetch("tasks", {
    method: "get",
    pathTemplate: "/api/v1/tasks",
    query,
    options
  });
}
async function createTask(query, body, options) {
  return invokeFetch("tasks", {
    method: "post",
    pathTemplate: "/api/v1/tasks",
    query,
    body,
    contentType: "application/json",
    options
  });
}
async function getTasksResourceRuns(id, query, options) {
  return invokeFetch("tasks", {
    method: "get",
    pathTemplate: "/api/v1/tasks/resources/{id}/runs",
    pathVariables: { id },
    query,
    options
  });
}
async function deleteTask(id, options) {
  return invokeFetch("tasks", {
    method: "delete",
    pathTemplate: "/api/v1/tasks/{id}",
    pathVariables: { id },
    options
  });
}
async function getTask(id, options) {
  return invokeFetch("tasks", {
    method: "get",
    pathTemplate: "/api/v1/tasks/{id}",
    pathVariables: { id },
    options
  });
}
async function updateTask(id, body, options) {
  return invokeFetch("tasks", {
    method: "put",
    pathTemplate: "/api/v1/tasks/{id}",
    pathVariables: { id },
    body,
    contentType: "application/json",
    options
  });
}
async function startTask(id, query, options) {
  return invokeFetch("tasks", {
    method: "post",
    pathTemplate: "/api/v1/tasks/{id}/actions/start",
    pathVariables: { id },
    query,
    options
  });
}
async function getTaskRuns(id, query, options) {
  return invokeFetch("tasks", {
    method: "get",
    pathTemplate: "/api/v1/tasks/{id}/runs",
    pathVariables: { id },
    query,
    options
  });
}
async function getLastTaskRun(id, options) {
  return invokeFetch("tasks", {
    method: "get",
    pathTemplate: "/api/v1/tasks/{id}/runs/last",
    pathVariables: { id },
    options
  });
}
async function getTaskRunLog(id, runId, options) {
  return invokeFetch("tasks", {
    method: "get",
    pathTemplate: "/api/v1/tasks/{id}/runs/{runId}/log",
    pathVariables: { id, runId },
    options
  });
}
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
