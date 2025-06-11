import {
  clearApiCache,
  invokeFetch
} from "./chunks/PUS32UJH.js";
import "./chunks/CLZXLW6N.js";
import "./chunks/2ZQ3ZX7F.js";

// src/public/rest/ml.ts
var getMlDeployments = async (query, options) => invokeFetch("ml", {
  method: "get",
  pathTemplate: "/api/v1/ml/deployments",
  query,
  options
});
var createMlDeployment = async (body, options) => invokeFetch("ml", {
  method: "post",
  pathTemplate: "/api/v1/ml/deployments",
  body,
  contentType: "application/json",
  options
});
var deleteMlDeployment = async (deploymentId, options) => invokeFetch("ml", {
  method: "delete",
  pathTemplate: "/api/v1/ml/deployments/{deploymentId}",
  pathVariables: { deploymentId },
  options
});
var getMlDeployment = async (deploymentId, options) => invokeFetch("ml", {
  method: "get",
  pathTemplate: "/api/v1/ml/deployments/{deploymentId}",
  pathVariables: { deploymentId },
  options
});
var patchMlDeployment = async (deploymentId, body, options) => invokeFetch("ml", {
  method: "patch",
  pathTemplate: "/api/v1/ml/deployments/{deploymentId}",
  pathVariables: { deploymentId },
  body,
  contentType: "application/json",
  options
});
var activateModelsMlDeployment = async (deploymentId, options) => invokeFetch("ml", {
  method: "post",
  pathTemplate: "/api/v1/ml/deployments/{deploymentId}/actions/activate-models",
  pathVariables: { deploymentId },
  options
});
var deactivateModelsMlDeployment = async (deploymentId, options) => invokeFetch("ml", {
  method: "post",
  pathTemplate: "/api/v1/ml/deployments/{deploymentId}/actions/deactivate-models",
  pathVariables: { deploymentId },
  options
});
var getMlDeploymentAliases = async (deploymentId, query, options) => invokeFetch("ml", {
  method: "get",
  pathTemplate: "/api/v1/ml/deployments/{deploymentId}/aliases",
  pathVariables: { deploymentId },
  query,
  options
});
var createMlDeploymentAliase = async (deploymentId, body, options) => invokeFetch("ml", {
  method: "post",
  pathTemplate: "/api/v1/ml/deployments/{deploymentId}/aliases",
  pathVariables: { deploymentId },
  body,
  contentType: "application/json",
  options
});
var deleteMlDeploymentAliase = async (deploymentId, aliasId, options) => invokeFetch("ml", {
  method: "delete",
  pathTemplate: "/api/v1/ml/deployments/{deploymentId}/aliases/{aliasId}",
  pathVariables: { deploymentId, aliasId },
  options
});
var getMlDeploymentAliase = async (deploymentId, aliasId, options) => invokeFetch("ml", {
  method: "get",
  pathTemplate: "/api/v1/ml/deployments/{deploymentId}/aliases/{aliasId}",
  pathVariables: { deploymentId, aliasId },
  options
});
var patchMlDeploymentAliase = async (deploymentId, aliasId, body, options) => invokeFetch("ml", {
  method: "patch",
  pathTemplate: "/api/v1/ml/deployments/{deploymentId}/aliases/{aliasId}",
  pathVariables: { deploymentId, aliasId },
  body,
  contentType: "application/json",
  options
});
var runMlDeploymentAliaseRealtimePredictions = async (deploymentId, aliasName, query, body, options) => invokeFetch("ml", {
  method: "post",
  pathTemplate: "/api/v1/ml/deployments/{deploymentId}/aliases/{aliasName}/realtime-predictions/actions/run",
  pathVariables: { deploymentId, aliasName },
  query,
  body,
  contentType: "application/json",
  options
});
var getMlDeploymentBatchPredictions = async (deploymentId, query, options) => invokeFetch("ml", {
  method: "get",
  pathTemplate: "/api/v1/ml/deployments/{deploymentId}/batch-predictions",
  pathVariables: { deploymentId },
  query,
  options
});
var createMlDeploymentBatchPrediction = async (deploymentId, body, options) => invokeFetch("ml", {
  method: "post",
  pathTemplate: "/api/v1/ml/deployments/{deploymentId}/batch-predictions",
  pathVariables: { deploymentId },
  body,
  contentType: "application/json",
  options
});
var deleteMlDeploymentBatchPrediction = async (deploymentId, batchPredictionId, options) => invokeFetch("ml", {
  method: "delete",
  pathTemplate: "/api/v1/ml/deployments/{deploymentId}/batch-predictions/{batchPredictionId}",
  pathVariables: { deploymentId, batchPredictionId },
  options
});
var getMlDeploymentBatchPrediction = async (deploymentId, batchPredictionId, options) => invokeFetch("ml", {
  method: "get",
  pathTemplate: "/api/v1/ml/deployments/{deploymentId}/batch-predictions/{batchPredictionId}",
  pathVariables: { deploymentId, batchPredictionId },
  options
});
var patchMlDeploymentBatchPrediction = async (deploymentId, batchPredictionId, body, options) => invokeFetch("ml", {
  method: "patch",
  pathTemplate: "/api/v1/ml/deployments/{deploymentId}/batch-predictions/{batchPredictionId}",
  pathVariables: { deploymentId, batchPredictionId },
  body,
  contentType: "application/json",
  options
});
var predictMlDeploymentBatchPrediction = async (deploymentId, batchPredictionId, options) => invokeFetch("ml", {
  method: "post",
  pathTemplate: "/api/v1/ml/deployments/{deploymentId}/batch-predictions/{batchPredictionId}/actions/predict",
  pathVariables: { deploymentId, batchPredictionId },
  options
});
var deleteMlDeploymentBatchPredictionSchedule = async (deploymentId, batchPredictionId, options) => invokeFetch("ml", {
  method: "delete",
  pathTemplate: "/api/v1/ml/deployments/{deploymentId}/batch-predictions/{batchPredictionId}/schedule",
  pathVariables: { deploymentId, batchPredictionId },
  options
});
var getMlDeploymentBatchPredictionSchedule = async (deploymentId, batchPredictionId, options) => invokeFetch("ml", {
  method: "get",
  pathTemplate: "/api/v1/ml/deployments/{deploymentId}/batch-predictions/{batchPredictionId}/schedule",
  pathVariables: { deploymentId, batchPredictionId },
  options
});
var updateMlDeploymentBatchPredictionSchedule = async (deploymentId, batchPredictionId, body, options) => invokeFetch("ml", {
  method: "patch",
  pathTemplate: "/api/v1/ml/deployments/{deploymentId}/batch-predictions/{batchPredictionId}/schedule",
  pathVariables: { deploymentId, batchPredictionId },
  body,
  contentType: "application/json",
  options
});
var setMlDeploymentBatchPredictionSchedule = async (deploymentId, batchPredictionId, body, options) => invokeFetch("ml", {
  method: "put",
  pathTemplate: "/api/v1/ml/deployments/{deploymentId}/batch-predictions/{batchPredictionId}/schedule",
  pathVariables: { deploymentId, batchPredictionId },
  body,
  contentType: "application/json",
  options
});
var addMlDeploymentModels = async (deploymentId, body, options) => invokeFetch("ml", {
  method: "post",
  pathTemplate: "/api/v1/ml/deployments/{deploymentId}/models/actions/add",
  pathVariables: { deploymentId },
  body,
  contentType: "application/json",
  options
});
var removeMlDeploymentModels = async (deploymentId, body, options) => invokeFetch("ml", {
  method: "post",
  pathTemplate: "/api/v1/ml/deployments/{deploymentId}/models/actions/remove",
  pathVariables: { deploymentId },
  body,
  contentType: "application/json",
  options
});
var runMlDeploymentRealtimePredictions = async (deploymentId, query, body, options) => invokeFetch("ml", {
  method: "post",
  pathTemplate: "/api/v1/ml/deployments/{deploymentId}/realtime-predictions/actions/run",
  pathVariables: { deploymentId },
  query,
  body,
  contentType: "application/json",
  options
});
var getMlExperiments = async (query, options) => invokeFetch("ml", {
  method: "get",
  pathTemplate: "/api/v1/ml/experiments",
  query,
  options
});
var createMlExperiment = async (body, options) => invokeFetch("ml", {
  method: "post",
  pathTemplate: "/api/v1/ml/experiments",
  body,
  contentType: "application/json",
  options
});
var deleteMlExperiment = async (experimentId, options) => invokeFetch("ml", {
  method: "delete",
  pathTemplate: "/api/v1/ml/experiments/{experimentId}",
  pathVariables: { experimentId },
  options
});
var getMlExperiment = async (experimentId, options) => invokeFetch("ml", {
  method: "get",
  pathTemplate: "/api/v1/ml/experiments/{experimentId}",
  pathVariables: { experimentId },
  options
});
var patchMlExperiment = async (experimentId, body, options) => invokeFetch("ml", {
  method: "patch",
  pathTemplate: "/api/v1/ml/experiments/{experimentId}",
  pathVariables: { experimentId },
  body,
  contentType: "application/json",
  options
});
var getMlExperimentModels = async (experimentId, query, options) => invokeFetch("ml", {
  method: "get",
  pathTemplate: "/api/v1/ml/experiments/{experimentId}/models",
  pathVariables: { experimentId },
  query,
  options
});
var getMlExperimentModel = async (experimentId, modelId, options) => invokeFetch("ml", {
  method: "get",
  pathTemplate: "/api/v1/ml/experiments/{experimentId}/models/{modelId}",
  pathVariables: { experimentId, modelId },
  options
});
var getMlExperimentVersions = async (experimentId, query, options) => invokeFetch("ml", {
  method: "get",
  pathTemplate: "/api/v1/ml/experiments/{experimentId}/versions",
  pathVariables: { experimentId },
  query,
  options
});
var createMlExperimentVersion = async (experimentId, body, options) => invokeFetch("ml", {
  method: "post",
  pathTemplate: "/api/v1/ml/experiments/{experimentId}/versions",
  pathVariables: { experimentId },
  body,
  contentType: "application/json",
  options
});
var deleteMlExperimentVersion = async (experimentId, experimentVersionId, options) => invokeFetch("ml", {
  method: "delete",
  pathTemplate: "/api/v1/ml/experiments/{experimentId}/versions/{experimentVersionId}",
  pathVariables: { experimentId, experimentVersionId },
  options
});
var getMlExperimentVersion = async (experimentId, experimentVersionId, options) => invokeFetch("ml", {
  method: "get",
  pathTemplate: "/api/v1/ml/experiments/{experimentId}/versions/{experimentVersionId}",
  pathVariables: { experimentId, experimentVersionId },
  options
});
var patchMlExperimentVersion = async (experimentId, experimentVersionId, body, options) => invokeFetch("ml", {
  method: "patch",
  pathTemplate: "/api/v1/ml/experiments/{experimentId}/versions/{experimentVersionId}",
  pathVariables: { experimentId, experimentVersionId },
  body,
  contentType: "application/json",
  options
});
var cancelMlJob = async (corrType, corrId, options) => invokeFetch("ml", {
  method: "post",
  pathTemplate: "/api/v1/ml/jobs/{corrType}/{corrId}/actions/cancel",
  pathVariables: { corrType, corrId },
  options
});
var createMlProfileInsight = async (body, options) => invokeFetch("ml", {
  method: "post",
  pathTemplate: "/api/v1/ml/profile-insights",
  body,
  contentType: "application/json",
  options
});
var getMlProfileInsightWithQuery = async (dataSetId, query, options) => invokeFetch("ml", {
  method: "get",
  pathTemplate: "/api/v1/ml/profile-insights/{dataSetId}",
  pathVariables: { dataSetId },
  query,
  options
});
var getMlProfileInsight = async (dataSetId, options) => invokeFetch("ml", {
  method: "get",
  pathTemplate: "/api/v1/ml/profile-insights/{dataSetId}",
  pathVariables: { dataSetId },
  options
});
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
  removeMlDeploymentModels,
  runMlDeploymentAliaseRealtimePredictions,
  runMlDeploymentRealtimePredictions,
  setMlDeploymentBatchPredictionSchedule,
  updateMlDeploymentBatchPredictionSchedule
};
