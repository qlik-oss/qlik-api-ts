import {
  clearApiCache,
  invokeFetch
} from "./chunks/BEREWEFO.js";
import "./chunks/GZ7FHV5J.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/ml.ts
async function getMlDeployments(query, options) {
  return invokeFetch("ml", {
    method: "get",
    pathTemplate: "/api/v1/ml/deployments",
    query,
    options
  });
}
async function createMlDeployment(body, options) {
  return invokeFetch("ml", {
    method: "post",
    pathTemplate: "/api/v1/ml/deployments",
    body,
    contentType: "application/json",
    options
  });
}
async function deleteMlDeployment(deploymentId, options) {
  return invokeFetch("ml", {
    method: "delete",
    pathTemplate: "/api/v1/ml/deployments/{deploymentId}",
    pathVariables: { deploymentId },
    options
  });
}
async function getMlDeployment(deploymentId, options) {
  return invokeFetch("ml", {
    method: "get",
    pathTemplate: "/api/v1/ml/deployments/{deploymentId}",
    pathVariables: { deploymentId },
    options
  });
}
async function patchMlDeployment(deploymentId, body, options) {
  return invokeFetch("ml", {
    method: "patch",
    pathTemplate: "/api/v1/ml/deployments/{deploymentId}",
    pathVariables: { deploymentId },
    body,
    contentType: "application/json",
    options
  });
}
async function activateModelsMlDeployment(deploymentId, options) {
  return invokeFetch("ml", {
    method: "post",
    pathTemplate: "/api/v1/ml/deployments/{deploymentId}/actions/activate-models",
    pathVariables: { deploymentId },
    options
  });
}
async function deactivateModelsMlDeployment(deploymentId, options) {
  return invokeFetch("ml", {
    method: "post",
    pathTemplate: "/api/v1/ml/deployments/{deploymentId}/actions/deactivate-models",
    pathVariables: { deploymentId },
    options
  });
}
async function getMlDeploymentAliases(deploymentId, query, options) {
  return invokeFetch("ml", {
    method: "get",
    pathTemplate: "/api/v1/ml/deployments/{deploymentId}/aliases",
    pathVariables: { deploymentId },
    query,
    options
  });
}
async function createMlDeploymentAliase(deploymentId, body, options) {
  return invokeFetch("ml", {
    method: "post",
    pathTemplate: "/api/v1/ml/deployments/{deploymentId}/aliases",
    pathVariables: { deploymentId },
    body,
    contentType: "application/json",
    options
  });
}
async function deleteMlDeploymentAliase(deploymentId, aliasId, options) {
  return invokeFetch("ml", {
    method: "delete",
    pathTemplate: "/api/v1/ml/deployments/{deploymentId}/aliases/{aliasId}",
    pathVariables: { deploymentId, aliasId },
    options
  });
}
async function getMlDeploymentAliase(deploymentId, aliasId, options) {
  return invokeFetch("ml", {
    method: "get",
    pathTemplate: "/api/v1/ml/deployments/{deploymentId}/aliases/{aliasId}",
    pathVariables: { deploymentId, aliasId },
    options
  });
}
async function patchMlDeploymentAliase(deploymentId, aliasId, body, options) {
  return invokeFetch("ml", {
    method: "patch",
    pathTemplate: "/api/v1/ml/deployments/{deploymentId}/aliases/{aliasId}",
    pathVariables: { deploymentId, aliasId },
    body,
    contentType: "application/json",
    options
  });
}
async function runMlDeploymentAliaseRealtimePredictions(deploymentId, aliasName, query, body, options) {
  return invokeFetch("ml", {
    method: "post",
    pathTemplate: "/api/v1/ml/deployments/{deploymentId}/aliases/{aliasName}/realtime-predictions/actions/run",
    pathVariables: { deploymentId, aliasName },
    query,
    body,
    contentType: "application/json",
    options
  });
}
async function getMlDeploymentBatchPredictions(deploymentId, query, options) {
  return invokeFetch("ml", {
    method: "get",
    pathTemplate: "/api/v1/ml/deployments/{deploymentId}/batch-predictions",
    pathVariables: { deploymentId },
    query,
    options
  });
}
async function createMlDeploymentBatchPrediction(deploymentId, body, options) {
  return invokeFetch("ml", {
    method: "post",
    pathTemplate: "/api/v1/ml/deployments/{deploymentId}/batch-predictions",
    pathVariables: { deploymentId },
    body,
    contentType: "application/json",
    options
  });
}
async function deleteMlDeploymentBatchPrediction(deploymentId, batchPredictionId, options) {
  return invokeFetch("ml", {
    method: "delete",
    pathTemplate: "/api/v1/ml/deployments/{deploymentId}/batch-predictions/{batchPredictionId}",
    pathVariables: { deploymentId, batchPredictionId },
    options
  });
}
async function getMlDeploymentBatchPrediction(deploymentId, batchPredictionId, options) {
  return invokeFetch("ml", {
    method: "get",
    pathTemplate: "/api/v1/ml/deployments/{deploymentId}/batch-predictions/{batchPredictionId}",
    pathVariables: { deploymentId, batchPredictionId },
    options
  });
}
async function patchMlDeploymentBatchPrediction(deploymentId, batchPredictionId, body, options) {
  return invokeFetch("ml", {
    method: "patch",
    pathTemplate: "/api/v1/ml/deployments/{deploymentId}/batch-predictions/{batchPredictionId}",
    pathVariables: { deploymentId, batchPredictionId },
    body,
    contentType: "application/json",
    options
  });
}
async function predictMlDeploymentBatchPrediction(deploymentId, batchPredictionId, options) {
  return invokeFetch("ml", {
    method: "post",
    pathTemplate: "/api/v1/ml/deployments/{deploymentId}/batch-predictions/{batchPredictionId}/actions/predict",
    pathVariables: { deploymentId, batchPredictionId },
    options
  });
}
async function deleteMlDeploymentBatchPredictionSchedule(deploymentId, batchPredictionId, options) {
  return invokeFetch("ml", {
    method: "delete",
    pathTemplate: "/api/v1/ml/deployments/{deploymentId}/batch-predictions/{batchPredictionId}/schedule",
    pathVariables: { deploymentId, batchPredictionId },
    options
  });
}
async function getMlDeploymentBatchPredictionSchedule(deploymentId, batchPredictionId, options) {
  return invokeFetch("ml", {
    method: "get",
    pathTemplate: "/api/v1/ml/deployments/{deploymentId}/batch-predictions/{batchPredictionId}/schedule",
    pathVariables: { deploymentId, batchPredictionId },
    options
  });
}
async function updateMlDeploymentBatchPredictionSchedule(deploymentId, batchPredictionId, body, options) {
  return invokeFetch("ml", {
    method: "patch",
    pathTemplate: "/api/v1/ml/deployments/{deploymentId}/batch-predictions/{batchPredictionId}/schedule",
    pathVariables: { deploymentId, batchPredictionId },
    body,
    contentType: "application/json",
    options
  });
}
async function setMlDeploymentBatchPredictionSchedule(deploymentId, batchPredictionId, body, options) {
  return invokeFetch("ml", {
    method: "put",
    pathTemplate: "/api/v1/ml/deployments/{deploymentId}/batch-predictions/{batchPredictionId}/schedule",
    pathVariables: { deploymentId, batchPredictionId },
    body,
    contentType: "application/json",
    options
  });
}
async function addMlDeploymentModels(deploymentId, body, options) {
  return invokeFetch("ml", {
    method: "post",
    pathTemplate: "/api/v1/ml/deployments/{deploymentId}/models/actions/add",
    pathVariables: { deploymentId },
    body,
    contentType: "application/json",
    options
  });
}
async function removeMlDeploymentModels(deploymentId, body, options) {
  return invokeFetch("ml", {
    method: "post",
    pathTemplate: "/api/v1/ml/deployments/{deploymentId}/models/actions/remove",
    pathVariables: { deploymentId },
    body,
    contentType: "application/json",
    options
  });
}
async function runMlDeploymentRealtimePredictions(deploymentId, query, body, options) {
  return invokeFetch("ml", {
    method: "post",
    pathTemplate: "/api/v1/ml/deployments/{deploymentId}/realtime-predictions/actions/run",
    pathVariables: { deploymentId },
    query,
    body,
    contentType: "application/json",
    options
  });
}
async function getMlExperiments(query, options) {
  return invokeFetch("ml", {
    method: "get",
    pathTemplate: "/api/v1/ml/experiments",
    query,
    options
  });
}
async function createMlExperiment(body, options) {
  return invokeFetch("ml", {
    method: "post",
    pathTemplate: "/api/v1/ml/experiments",
    body,
    contentType: "application/json",
    options
  });
}
async function deleteMlExperiment(experimentId, options) {
  return invokeFetch("ml", {
    method: "delete",
    pathTemplate: "/api/v1/ml/experiments/{experimentId}",
    pathVariables: { experimentId },
    options
  });
}
async function getMlExperiment(experimentId, options) {
  return invokeFetch("ml", {
    method: "get",
    pathTemplate: "/api/v1/ml/experiments/{experimentId}",
    pathVariables: { experimentId },
    options
  });
}
async function patchMlExperiment(experimentId, body, options) {
  return invokeFetch("ml", {
    method: "patch",
    pathTemplate: "/api/v1/ml/experiments/{experimentId}",
    pathVariables: { experimentId },
    body,
    contentType: "application/json",
    options
  });
}
async function recommendModelsMlExperiment(experimentId, body, options) {
  return invokeFetch("ml", {
    method: "post",
    pathTemplate: "/api/v1/ml/experiments/{experimentId}/actions/recommend-models",
    pathVariables: { experimentId },
    body,
    contentType: "application/json",
    options
  });
}
async function getMlExperimentModels(experimentId, query, options) {
  return invokeFetch("ml", {
    method: "get",
    pathTemplate: "/api/v1/ml/experiments/{experimentId}/models",
    pathVariables: { experimentId },
    query,
    options
  });
}
async function getMlExperimentModel(experimentId, modelId, options) {
  return invokeFetch("ml", {
    method: "get",
    pathTemplate: "/api/v1/ml/experiments/{experimentId}/models/{modelId}",
    pathVariables: { experimentId, modelId },
    options
  });
}
async function getMlExperimentVersions(experimentId, query, options) {
  return invokeFetch("ml", {
    method: "get",
    pathTemplate: "/api/v1/ml/experiments/{experimentId}/versions",
    pathVariables: { experimentId },
    query,
    options
  });
}
async function createMlExperimentVersion(experimentId, body, options) {
  return invokeFetch("ml", {
    method: "post",
    pathTemplate: "/api/v1/ml/experiments/{experimentId}/versions",
    pathVariables: { experimentId },
    body,
    contentType: "application/json",
    options
  });
}
async function deleteMlExperimentVersion(experimentId, experimentVersionId, options) {
  return invokeFetch("ml", {
    method: "delete",
    pathTemplate: "/api/v1/ml/experiments/{experimentId}/versions/{experimentVersionId}",
    pathVariables: { experimentId, experimentVersionId },
    options
  });
}
async function getMlExperimentVersion(experimentId, experimentVersionId, options) {
  return invokeFetch("ml", {
    method: "get",
    pathTemplate: "/api/v1/ml/experiments/{experimentId}/versions/{experimentVersionId}",
    pathVariables: { experimentId, experimentVersionId },
    options
  });
}
async function patchMlExperimentVersion(experimentId, experimentVersionId, body, options) {
  return invokeFetch("ml", {
    method: "patch",
    pathTemplate: "/api/v1/ml/experiments/{experimentId}/versions/{experimentVersionId}",
    pathVariables: { experimentId, experimentVersionId },
    body,
    contentType: "application/json",
    options
  });
}
async function cancelMlJob(corrType, corrId, options) {
  return invokeFetch("ml", {
    method: "post",
    pathTemplate: "/api/v1/ml/jobs/{corrType}/{corrId}/actions/cancel",
    pathVariables: { corrType, corrId },
    options
  });
}
async function createMlProfileInsight(body, options) {
  return invokeFetch("ml", {
    method: "post",
    pathTemplate: "/api/v1/ml/profile-insights",
    body,
    contentType: "application/json",
    options
  });
}
async function getMlProfileInsightWithQuery(dataSetId, query, options) {
  return invokeFetch("ml", {
    method: "get",
    pathTemplate: "/api/v1/ml/profile-insights/{dataSetId}",
    pathVariables: { dataSetId },
    query,
    options
  });
}
async function getMlProfileInsight(dataSetId, options) {
  return invokeFetch("ml", {
    method: "get",
    pathTemplate: "/api/v1/ml/profile-insights/{dataSetId}",
    pathVariables: { dataSetId },
    options
  });
}
function clearCache() {
  return clearApiCache("ml");
}
var mlExport = {
  getMlDeployments,
  createMlDeployment,
  deleteMlDeployment,
  getMlDeployment,
  patchMlDeployment,
  activateModelsMlDeployment,
  deactivateModelsMlDeployment,
  getMlDeploymentAliases,
  createMlDeploymentAliase,
  deleteMlDeploymentAliase,
  getMlDeploymentAliase,
  patchMlDeploymentAliase,
  runMlDeploymentAliaseRealtimePredictions,
  getMlDeploymentBatchPredictions,
  createMlDeploymentBatchPrediction,
  deleteMlDeploymentBatchPrediction,
  getMlDeploymentBatchPrediction,
  patchMlDeploymentBatchPrediction,
  predictMlDeploymentBatchPrediction,
  deleteMlDeploymentBatchPredictionSchedule,
  getMlDeploymentBatchPredictionSchedule,
  updateMlDeploymentBatchPredictionSchedule,
  setMlDeploymentBatchPredictionSchedule,
  addMlDeploymentModels,
  removeMlDeploymentModels,
  runMlDeploymentRealtimePredictions,
  getMlExperiments,
  createMlExperiment,
  deleteMlExperiment,
  getMlExperiment,
  patchMlExperiment,
  recommendModelsMlExperiment,
  getMlExperimentModels,
  getMlExperimentModel,
  getMlExperimentVersions,
  createMlExperimentVersion,
  deleteMlExperimentVersion,
  getMlExperimentVersion,
  patchMlExperimentVersion,
  cancelMlJob,
  createMlProfileInsight,
  getMlProfileInsightWithQuery,
  getMlProfileInsight,
  clearCache
};
var ml_default = mlExport;
export {
  activateModelsMlDeployment,
  addMlDeploymentModels,
  cancelMlJob,
  clearCache,
  createMlDeployment,
  createMlDeploymentAliase,
  createMlDeploymentBatchPrediction,
  createMlExperiment,
  createMlExperimentVersion,
  createMlProfileInsight,
  deactivateModelsMlDeployment,
  ml_default as default,
  deleteMlDeployment,
  deleteMlDeploymentAliase,
  deleteMlDeploymentBatchPrediction,
  deleteMlDeploymentBatchPredictionSchedule,
  deleteMlExperiment,
  deleteMlExperimentVersion,
  getMlDeployment,
  getMlDeploymentAliase,
  getMlDeploymentAliases,
  getMlDeploymentBatchPrediction,
  getMlDeploymentBatchPredictionSchedule,
  getMlDeploymentBatchPredictions,
  getMlDeployments,
  getMlExperiment,
  getMlExperimentModel,
  getMlExperimentModels,
  getMlExperimentVersion,
  getMlExperimentVersions,
  getMlExperiments,
  getMlProfileInsight,
  getMlProfileInsightWithQuery,
  patchMlDeployment,
  patchMlDeploymentAliase,
  patchMlDeploymentBatchPrediction,
  patchMlExperiment,
  patchMlExperimentVersion,
  predictMlDeploymentBatchPrediction,
  recommendModelsMlExperiment,
  removeMlDeploymentModels,
  runMlDeploymentAliaseRealtimePredictions,
  runMlDeploymentRealtimePredictions,
  setMlDeploymentBatchPredictionSchedule,
  updateMlDeploymentBatchPredictionSchedule
};
