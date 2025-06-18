import {
  clearApiCache,
  invokeFetch
} from "./chunks/NPB36P3M.js";
import "./chunks/L5QSVLDQ.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/conditions.ts
async function createCondition(body, options) {
  return invokeFetch("conditions", {
    method: "post",
    pathTemplate: "/api/v1/conditions",
    body,
    contentType: "application/json",
    options
  });
}
async function createConditionPreview(body, options) {
  return invokeFetch("conditions", {
    method: "post",
    pathTemplate: "/api/v1/conditions/previews",
    body,
    contentType: "application/json",
    options
  });
}
async function getConditionPreview(id, options) {
  return invokeFetch("conditions", {
    method: "get",
    pathTemplate: "/api/v1/conditions/previews/{id}",
    pathVariables: { id },
    options
  });
}
async function getConditionsSettings(options) {
  return invokeFetch("conditions", {
    method: "get",
    pathTemplate: "/api/v1/conditions/settings",
    options
  });
}
async function setConditionsSettings(body, options) {
  return invokeFetch("conditions", {
    method: "put",
    pathTemplate: "/api/v1/conditions/settings",
    body,
    contentType: "application/json",
    options
  });
}
async function deleteCondition(id, options) {
  return invokeFetch("conditions", {
    method: "delete",
    pathTemplate: "/api/v1/conditions/{id}",
    pathVariables: { id },
    options
  });
}
async function getCondition(id, options) {
  return invokeFetch("conditions", {
    method: "get",
    pathTemplate: "/api/v1/conditions/{id}",
    pathVariables: { id },
    options
  });
}
async function patchCondition(id, body, options) {
  return invokeFetch("conditions", {
    method: "patch",
    pathTemplate: "/api/v1/conditions/{id}",
    pathVariables: { id },
    body,
    contentType: "application/json",
    options
  });
}
async function createConditionEvaluation(id, body, options) {
  return invokeFetch("conditions", {
    method: "post",
    pathTemplate: "/api/v1/conditions/{id}/evaluations",
    pathVariables: { id },
    body,
    contentType: "application/json",
    options
  });
}
async function deleteConditionEvaluation(id, evaluationId, options) {
  return invokeFetch("conditions", {
    method: "delete",
    pathTemplate: "/api/v1/conditions/{id}/evaluations/{evaluationId}",
    pathVariables: { id, evaluationId },
    options
  });
}
async function getConditionEvaluation(id, evaluationId, options) {
  return invokeFetch("conditions", {
    method: "get",
    pathTemplate: "/api/v1/conditions/{id}/evaluations/{evaluationId}",
    pathVariables: { id, evaluationId },
    options
  });
}
function clearCache() {
  return clearApiCache("conditions");
}
var conditionsExport = {
  createCondition,
  createConditionPreview,
  getConditionPreview,
  getConditionsSettings,
  setConditionsSettings,
  deleteCondition,
  getCondition,
  patchCondition,
  createConditionEvaluation,
  deleteConditionEvaluation,
  getConditionEvaluation,
  clearCache
};
var conditions_default = conditionsExport;
export {
  clearCache,
  createCondition,
  createConditionEvaluation,
  createConditionPreview,
  conditions_default as default,
  deleteCondition,
  deleteConditionEvaluation,
  getCondition,
  getConditionEvaluation,
  getConditionPreview,
  getConditionsSettings,
  patchCondition,
  setConditionsSettings
};
