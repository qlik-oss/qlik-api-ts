import {
  clearApiCache,
  invokeFetch
} from "./chunks/PUS32UJH.js";
import "./chunks/CLZXLW6N.js";
import "./chunks/2ZQ3ZX7F.js";

// src/public/rest/conditions.ts
var createCondition = async (body, options) => invokeFetch("conditions", {
  method: "post",
  pathTemplate: "/api/v1/conditions",
  body,
  contentType: "application/json",
  options
});
var createConditionPreview = async (body, options) => invokeFetch("conditions", {
  method: "post",
  pathTemplate: "/api/v1/conditions/previews",
  body,
  contentType: "application/json",
  options
});
var getConditionPreview = async (id, options) => invokeFetch("conditions", {
  method: "get",
  pathTemplate: "/api/v1/conditions/previews/{id}",
  pathVariables: { id },
  options
});
var getConditionsSettings = async (options) => invokeFetch("conditions", {
  method: "get",
  pathTemplate: "/api/v1/conditions/settings",
  options
});
var setConditionsSettings = async (body, options) => invokeFetch("conditions", {
  method: "put",
  pathTemplate: "/api/v1/conditions/settings",
  body,
  contentType: "application/json",
  options
});
var deleteCondition = async (id, options) => invokeFetch("conditions", {
  method: "delete",
  pathTemplate: "/api/v1/conditions/{id}",
  pathVariables: { id },
  options
});
var getCondition = async (id, options) => invokeFetch("conditions", {
  method: "get",
  pathTemplate: "/api/v1/conditions/{id}",
  pathVariables: { id },
  options
});
var patchCondition = async (id, body, options) => invokeFetch("conditions", {
  method: "patch",
  pathTemplate: "/api/v1/conditions/{id}",
  pathVariables: { id },
  body,
  contentType: "application/json",
  options
});
var createConditionEvaluation = async (id, body, options) => invokeFetch("conditions", {
  method: "post",
  pathTemplate: "/api/v1/conditions/{id}/evaluations",
  pathVariables: { id },
  body,
  contentType: "application/json",
  options
});
var deleteConditionEvaluation = async (id, evaluationId, options) => invokeFetch("conditions", {
  method: "delete",
  pathTemplate: "/api/v1/conditions/{id}/evaluations/{evaluationId}",
  pathVariables: { id, evaluationId },
  options
});
var getConditionEvaluation = async (id, evaluationId, options) => invokeFetch("conditions", {
  method: "get",
  pathTemplate: "/api/v1/conditions/{id}/evaluations/{evaluationId}",
  pathVariables: { id, evaluationId },
  options
});
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
