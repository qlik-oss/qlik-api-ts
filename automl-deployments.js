import {
  clearApiCache,
  invokeFetch
} from "./chunks/P6F6QA4Y.js";
import "./chunks/DN5SVV4X.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/automl-deployments.ts
async function createAutomlDeploymentRealtimePrediction(deploymentId, query, body, options) {
  return invokeFetch("automl-deployments", {
    method: "post",
    pathTemplate: "/api/v1/automl-deployments/{deploymentId}/realtime-predictions",
    pathVariables: { deploymentId },
    query,
    body,
    contentType: "application/json",
    options
  });
}
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
