import {
  clearApiCache,
  invokeFetch
} from "./chunks/PUS32UJH.js";
import "./chunks/CLZXLW6N.js";
import "./chunks/2ZQ3ZX7F.js";

// src/public/rest/automl-deployments.ts
var createAutomlDeploymentRealtimePrediction = async (deploymentId, query, body, options) => invokeFetch("automl-deployments", {
  method: "post",
  pathTemplate: "/api/v1/automl-deployments/{deploymentId}/realtime-predictions",
  pathVariables: { deploymentId },
  query,
  body,
  contentType: "application/json",
  options
});
function clearCache() {
  return clearApiCache("automl-deployments");
}
var automlDeploymentsExport = { createAutomlDeploymentRealtimePrediction, clearCache };
var automl_deployments_default = automlDeploymentsExport;
export {
  clearCache,
  createAutomlDeploymentRealtimePrediction,
  automl_deployments_default as default
};
