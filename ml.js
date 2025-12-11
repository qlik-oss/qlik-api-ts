import "./chunks/public-runtime-modules-CfWEOfVS.js";
import { n as invokeFetch, t as clearApiCache } from "./chunks/invoke-fetch-Cxl7YHCk.js";

//#region src/public/rest/ml.ts
/**
* List deployments
* @example
* getMlDeployments(
*   {
*     filter: "`filter=spaceId eq \"UUID\" and predictionEnabled eq \"true\" and nameContains co \"abc\"`",
*     limit: 10,
*     offset: 32
*   }
* )
*
* @param query an object with query parameters
* @throws GetMlDeploymentsHttpError
*/
async function getMlDeployments(query, options) {
	return invokeFetch("ml", {
		method: "get",
		pathTemplate: "/api/v1/ml/deployments",
		query,
		options
	});
}
/**
* Create a deployment
*
* @param body an object with the body content
* @throws CreateMlDeploymentHttpError
*/
async function createMlDeployment(body, options) {
	return invokeFetch("ml", {
		method: "post",
		pathTemplate: "/api/v1/ml/deployments",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Delete a deployment
*
* @param deploymentId ID of the deployment
* @throws DeleteMlDeploymentHttpError
*/
async function deleteMlDeployment(deploymentId, options) {
	return invokeFetch("ml", {
		method: "delete",
		pathTemplate: "/api/v1/ml/deployments/{deploymentId}",
		pathVariables: { deploymentId },
		options
	});
}
/**
* Get a deployment
*
* @param deploymentId ID of the deployment
* @throws GetMlDeploymentHttpError
*/
async function getMlDeployment(deploymentId, options) {
	return invokeFetch("ml", {
		method: "get",
		pathTemplate: "/api/v1/ml/deployments/{deploymentId}",
		pathVariables: { deploymentId },
		options
	});
}
/**
* Update a deployment
*
* @param deploymentId ID of the deployment
* @param body an object with the body content
* @throws PatchMlDeploymentHttpError
*/
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
/**
* Activate the model for this deployment
*
* @param deploymentId ID of the deployment
* @throws ActivateModelsMlDeploymentHttpError
*/
async function activateModelsMlDeployment(deploymentId, options) {
	return invokeFetch("ml", {
		method: "post",
		pathTemplate: "/api/v1/ml/deployments/{deploymentId}/actions/activate-models",
		pathVariables: { deploymentId },
		options
	});
}
/**
* Deactivate the model for this deployment
*
* @param deploymentId ID of the deployment
* @throws DeactivateModelsMlDeploymentHttpError
*/
async function deactivateModelsMlDeployment(deploymentId, options) {
	return invokeFetch("ml", {
		method: "post",
		pathTemplate: "/api/v1/ml/deployments/{deploymentId}/actions/deactivate-models",
		pathVariables: { deploymentId },
		options
	});
}
/**
* Retrieves a list of aliases based on filter parameters for a deployment.
*
* @param deploymentId ID of the deployment
* @param query an object with query parameters
* @throws GetMlDeploymentAliasesHttpError
*/
async function getMlDeploymentAliases(deploymentId, query, options) {
	return invokeFetch("ml", {
		method: "get",
		pathTemplate: "/api/v1/ml/deployments/{deploymentId}/aliases",
		pathVariables: { deploymentId },
		query,
		options
	});
}
/**
* Creates an alias for a deployment.
*
* @param deploymentId ID of the deployment
* @param body an object with the body content
* @throws CreateMlDeploymentAliaseHttpError
*/
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
/**
* Delete an alias from a deployment.
*
* @param deploymentId ID of the deployment
* @param aliasId ID of the alias
* @throws DeleteMlDeploymentAliaseHttpError
*/
async function deleteMlDeploymentAliase(deploymentId, aliasId, options) {
	return invokeFetch("ml", {
		method: "delete",
		pathTemplate: "/api/v1/ml/deployments/{deploymentId}/aliases/{aliasId}",
		pathVariables: {
			deploymentId,
			aliasId
		},
		options
	});
}
/**
* Retrieves an alias that exists on the deployment.
*
* @param deploymentId ID of the deployment
* @param aliasId ID of the alias
* @throws GetMlDeploymentAliaseHttpError
*/
async function getMlDeploymentAliase(deploymentId, aliasId, options) {
	return invokeFetch("ml", {
		method: "get",
		pathTemplate: "/api/v1/ml/deployments/{deploymentId}/aliases/{aliasId}",
		pathVariables: {
			deploymentId,
			aliasId
		},
		options
	});
}
/**
* Updates an alias for a deployment.
*
* @param deploymentId ID of the deployment
* @param aliasId ID of the alias
* @param body an object with the body content
* @throws PatchMlDeploymentAliaseHttpError
*/
async function patchMlDeploymentAliase(deploymentId, aliasId, body, options) {
	return invokeFetch("ml", {
		method: "patch",
		pathTemplate: "/api/v1/ml/deployments/{deploymentId}/aliases/{aliasId}",
		pathVariables: {
			deploymentId,
			aliasId
		},
		body,
		contentType: "application/json",
		options
	});
}
/**
* Generate predictions in a synchronous request/response
*
* @param deploymentId ID of the deployment
* @param aliasName The name of the ML Deployment Alias that will be used to determine which model should be used to produce predictions
* @param query an object with query parameters
* @param body an object with the body content
* @throws RunMlDeploymentAliaseRealtimePredictionsHttpError
*/
async function runMlDeploymentAliaseRealtimePredictions(deploymentId, aliasName, query, body, options) {
	return invokeFetch("ml", {
		method: "post",
		pathTemplate: "/api/v1/ml/deployments/{deploymentId}/aliases/{aliasName}/realtime-predictions/actions/run",
		pathVariables: {
			deploymentId,
			aliasName
		},
		query,
		body,
		contentType: "application/json",
		options
	});
}
/**
* List batch prediction configurations
*
* @param deploymentId ID of the deployment
* @param query an object with query parameters
* @throws GetMlDeploymentBatchPredictionsHttpError
*/
async function getMlDeploymentBatchPredictions(deploymentId, query, options) {
	return invokeFetch("ml", {
		method: "get",
		pathTemplate: "/api/v1/ml/deployments/{deploymentId}/batch-predictions",
		pathVariables: { deploymentId },
		query,
		options
	});
}
/**
* Create a prediction configuration
*
* @param deploymentId ID of the deployment
* @param body an object with the body content
* @throws CreateMlDeploymentBatchPredictionHttpError
*/
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
/**
* Delete a batch prediction
*
* @param deploymentId ID of the deployment
* @param batchPredictionId ID of the batch prediction
* @throws DeleteMlDeploymentBatchPredictionHttpError
*/
async function deleteMlDeploymentBatchPrediction(deploymentId, batchPredictionId, options) {
	return invokeFetch("ml", {
		method: "delete",
		pathTemplate: "/api/v1/ml/deployments/{deploymentId}/batch-predictions/{batchPredictionId}",
		pathVariables: {
			deploymentId,
			batchPredictionId
		},
		options
	});
}
/**
* Retrieve a batch prediction
*
* @param deploymentId ID of the deployment
* @param batchPredictionId ID of the batch prediction
* @throws GetMlDeploymentBatchPredictionHttpError
*/
async function getMlDeploymentBatchPrediction(deploymentId, batchPredictionId, options) {
	return invokeFetch("ml", {
		method: "get",
		pathTemplate: "/api/v1/ml/deployments/{deploymentId}/batch-predictions/{batchPredictionId}",
		pathVariables: {
			deploymentId,
			batchPredictionId
		},
		options
	});
}
/**
* Updates a batch prediction
*
* @param deploymentId ID of the deployment
* @param batchPredictionId ID of the batch prediction
* @param body an object with the body content
* @throws PatchMlDeploymentBatchPredictionHttpError
*/
async function patchMlDeploymentBatchPrediction(deploymentId, batchPredictionId, body, options) {
	return invokeFetch("ml", {
		method: "patch",
		pathTemplate: "/api/v1/ml/deployments/{deploymentId}/batch-predictions/{batchPredictionId}",
		pathVariables: {
			deploymentId,
			batchPredictionId
		},
		body,
		contentType: "application/json",
		options
	});
}
/**
* Run a batch prediction
*
* @param deploymentId ID of the deployment
* @param batchPredictionId ID of the batch prediction
* @throws PredictMlDeploymentBatchPredictionHttpError
*/
async function predictMlDeploymentBatchPrediction(deploymentId, batchPredictionId, options) {
	return invokeFetch("ml", {
		method: "post",
		pathTemplate: "/api/v1/ml/deployments/{deploymentId}/batch-predictions/{batchPredictionId}/actions/predict",
		pathVariables: {
			deploymentId,
			batchPredictionId
		},
		options
	});
}
/**
* Deletes the schedule from a batch prediction.
*
* @param deploymentId ID of the deployment
* @param batchPredictionId ID of the batch prediction
* @throws DeleteMlDeploymentBatchPredictionScheduleHttpError
*/
async function deleteMlDeploymentBatchPredictionSchedule(deploymentId, batchPredictionId, options) {
	return invokeFetch("ml", {
		method: "delete",
		pathTemplate: "/api/v1/ml/deployments/{deploymentId}/batch-predictions/{batchPredictionId}/schedule",
		pathVariables: {
			deploymentId,
			batchPredictionId
		},
		options
	});
}
/**
* Retrieves the schedule for a batch prediction.
*
* @param deploymentId ID of the deployment
* @param batchPredictionId ID of the batch prediction
* @throws GetMlDeploymentBatchPredictionScheduleHttpError
*/
async function getMlDeploymentBatchPredictionSchedule(deploymentId, batchPredictionId, options) {
	return invokeFetch("ml", {
		method: "get",
		pathTemplate: "/api/v1/ml/deployments/{deploymentId}/batch-predictions/{batchPredictionId}/schedule",
		pathVariables: {
			deploymentId,
			batchPredictionId
		},
		options
	});
}
/**
* Updates the schedule for a batch prediction.
*
* @param deploymentId ID of the deployment
* @param batchPredictionId ID of the batch prediction
* @param body an object with the body content
* @throws UpdateMlDeploymentBatchPredictionScheduleHttpError
*/
async function updateMlDeploymentBatchPredictionSchedule(deploymentId, batchPredictionId, body, options) {
	return invokeFetch("ml", {
		method: "patch",
		pathTemplate: "/api/v1/ml/deployments/{deploymentId}/batch-predictions/{batchPredictionId}/schedule",
		pathVariables: {
			deploymentId,
			batchPredictionId
		},
		body,
		contentType: "application/json",
		options
	});
}
/**
* Adds a schedule to a batch prediction.
*
* @param deploymentId ID of the deployment
* @param batchPredictionId ID of the batch prediction
* @param body an object with the body content
* @throws SetMlDeploymentBatchPredictionScheduleHttpError
*/
async function setMlDeploymentBatchPredictionSchedule(deploymentId, batchPredictionId, body, options) {
	return invokeFetch("ml", {
		method: "put",
		pathTemplate: "/api/v1/ml/deployments/{deploymentId}/batch-predictions/{batchPredictionId}/schedule",
		pathVariables: {
			deploymentId,
			batchPredictionId
		},
		body,
		contentType: "application/json",
		options
	});
}
/**
* Add deployed models for this deployment
*
* @param deploymentId ID of the deployment
* @param body an object with the body content
* @throws AddMlDeploymentModelsHttpError
*/
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
/**
* Remove deployed models from this deployment
*
* @param deploymentId ID of the deployment
* @param body an object with the body content
* @throws RemoveMlDeploymentModelsHttpError
*/
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
/**
* Generate predictions in a synchronous request/response
*
* @param deploymentId ID of the deployment
* @param query an object with query parameters
* @param body an object with the body content
* @throws RunMlDeploymentRealtimePredictionsHttpError
*/
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
/**
* Retrieves a list of experiments based on provided filter and sort
* parameters.
* @example
* getMlExperiments(
*   {
*     filter: "`filter=ownerId eq UUID and experimentVersionId eq UUID`",
*     limit: 10,
*     offset: 32
*   }
* )
*
* @param query an object with query parameters
* @throws GetMlExperimentsHttpError
*/
async function getMlExperiments(query, options) {
	return invokeFetch("ml", {
		method: "get",
		pathTemplate: "/api/v1/ml/experiments",
		query,
		options
	});
}
/**
* Create an experiment
*
* @param body an object with the body content
* @throws CreateMlExperimentHttpError
*/
async function createMlExperiment(body, options) {
	return invokeFetch("ml", {
		method: "post",
		pathTemplate: "/api/v1/ml/experiments",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Delete an experiment
*
* @param experimentId ID of the experiment
* @throws DeleteMlExperimentHttpError
*/
async function deleteMlExperiment(experimentId, options) {
	return invokeFetch("ml", {
		method: "delete",
		pathTemplate: "/api/v1/ml/experiments/{experimentId}",
		pathVariables: { experimentId },
		options
	});
}
/**
* Get an experiment
*
* @param experimentId ID of the experiment
* @throws GetMlExperimentHttpError
*/
async function getMlExperiment(experimentId, options) {
	return invokeFetch("ml", {
		method: "get",
		pathTemplate: "/api/v1/ml/experiments/{experimentId}",
		pathVariables: { experimentId },
		options
	});
}
/**
* Update an experiment
*
* @param experimentId ID of the experiment
* @param body an object with the body content
* @throws PatchMlExperimentHttpError
*/
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
/**
* Returns model recommendations for a specified experiment, including the best-performing, fastest, and most accurate models based on evaluation metrics.
*
* @param experimentId ID of the experiment
* @param body an object with the body content
* @throws RecommendModelsMlExperimentHttpError
*/
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
/**
* List models
*
* @param experimentId ID of the experiment
* @param query an object with query parameters
* @throws GetMlExperimentModelsHttpError
*/
async function getMlExperimentModels(experimentId, query, options) {
	return invokeFetch("ml", {
		method: "get",
		pathTemplate: "/api/v1/ml/experiments/{experimentId}/models",
		pathVariables: { experimentId },
		query,
		options
	});
}
/**
* Get a model
*
* @param experimentId ID of the experiment
* @param modelId ID of the model
* @throws GetMlExperimentModelHttpError
*/
async function getMlExperimentModel(experimentId, modelId, options) {
	return invokeFetch("ml", {
		method: "get",
		pathTemplate: "/api/v1/ml/experiments/{experimentId}/models/{modelId}",
		pathVariables: {
			experimentId,
			modelId
		},
		options
	});
}
/**
* List experiment versions
*
* @param experimentId ID of the experiment
* @param query an object with query parameters
* @throws GetMlExperimentVersionsHttpError
*/
async function getMlExperimentVersions(experimentId, query, options) {
	return invokeFetch("ml", {
		method: "get",
		pathTemplate: "/api/v1/ml/experiments/{experimentId}/versions",
		pathVariables: { experimentId },
		query,
		options
	});
}
/**
* Creates an experiment version.
* Poll this version and check its `status` field to determine when models
* are finished training.
*
* @param experimentId ID of the experiment
* @param body an object with the body content
* @throws CreateMlExperimentVersionHttpError
*/
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
/**
* Delete an experiment version
*
* @param experimentId ID of the experiment
* @param experimentVersionId ID of the experiment version
* @throws DeleteMlExperimentVersionHttpError
*/
async function deleteMlExperimentVersion(experimentId, experimentVersionId, options) {
	return invokeFetch("ml", {
		method: "delete",
		pathTemplate: "/api/v1/ml/experiments/{experimentId}/versions/{experimentVersionId}",
		pathVariables: {
			experimentId,
			experimentVersionId
		},
		options
	});
}
/**
* Get an experiment version
*
* @param experimentId ID of the experiment
* @param experimentVersionId ID of the experiment version
* @throws GetMlExperimentVersionHttpError
*/
async function getMlExperimentVersion(experimentId, experimentVersionId, options) {
	return invokeFetch("ml", {
		method: "get",
		pathTemplate: "/api/v1/ml/experiments/{experimentId}/versions/{experimentVersionId}",
		pathVariables: {
			experimentId,
			experimentVersionId
		},
		options
	});
}
/**
* Update an experiment version
*
* @param experimentId ID of the experiment
* @param experimentVersionId ID of the experiment version
* @param body an object with the body content
* @throws PatchMlExperimentVersionHttpError
*/
async function patchMlExperimentVersion(experimentId, experimentVersionId, body, options) {
	return invokeFetch("ml", {
		method: "patch",
		pathTemplate: "/api/v1/ml/experiments/{experimentId}/versions/{experimentVersionId}",
		pathVariables: {
			experimentId,
			experimentVersionId
		},
		body,
		contentType: "application/json",
		options
	});
}
/**
* Cancels jobs for an experiment version or batch prediction.
*
* @param corrType The type of a resource paired with a corrId
* @param corrId The ID of a correlated resource of corrType
* @throws CancelMlJobHttpError
*/
async function cancelMlJob(corrType, corrId, options) {
	return invokeFetch("ml", {
		method: "post",
		pathTemplate: "/api/v1/ml/jobs/{corrType}/{corrId}/actions/cancel",
		pathVariables: {
			corrType,
			corrId
		},
		options
	});
}
/**
* Starts creating profile insights for an experiment dataset.
* This is an asynchronous operation. A `202 Accepted` response indicates
* that the process has started successfully. Use the link in the response
* to check the status.
*
* @param body an object with the body content
* @throws CreateMlProfileInsightHttpError
*/
async function createMlProfileInsight(body, options) {
	return invokeFetch("ml", {
		method: "post",
		pathTemplate: "/api/v1/ml/profile-insights",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Retrieves profile insights for the specified dataset. If you received a
* `202 Accepted` response from `POST /ml/profile-insights`, poll this
* endpoint until a `200 OK` response with `ready` status is returned.
*
* @param dataSetId The Qlik catalog dataset ID
* @param query an object with query parameters
* @throws GetMlProfileInsightWithQueryHttpError
*/
async function getMlProfileInsightWithQuery(dataSetId, query, options) {
	return invokeFetch("ml", {
		method: "get",
		pathTemplate: "/api/v1/ml/profile-insights/{dataSetId}",
		pathVariables: { dataSetId },
		query,
		options
	});
}
/**
* Retrieves profile insights for the specified dataset. If you received a
* `202 Accepted` response from `POST /ml/profile-insights`, poll this
* endpoint until a `200 OK` response with `ready` status is returned.
*
* @param dataSetId The Qlik catalog dataset ID
* @throws GetMlProfileInsightHttpError
*/
async function getMlProfileInsight(dataSetId, options) {
	return invokeFetch("ml", {
		method: "get",
		pathTemplate: "/api/v1/ml/profile-insights/{dataSetId}",
		pathVariables: { dataSetId },
		options
	});
}
/**
* Clears the cache for ml api requests.
*/
function clearCache() {
	return clearApiCache("ml");
}
/**
* Functions for the ml api
*/
const mlExport = {
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

//#endregion
export { activateModelsMlDeployment, addMlDeploymentModels, cancelMlJob, clearCache, createMlDeployment, createMlDeploymentAliase, createMlDeploymentBatchPrediction, createMlExperiment, createMlExperimentVersion, createMlProfileInsight, deactivateModelsMlDeployment, ml_default as default, deleteMlDeployment, deleteMlDeploymentAliase, deleteMlDeploymentBatchPrediction, deleteMlDeploymentBatchPredictionSchedule, deleteMlExperiment, deleteMlExperimentVersion, getMlDeployment, getMlDeploymentAliase, getMlDeploymentAliases, getMlDeploymentBatchPrediction, getMlDeploymentBatchPredictionSchedule, getMlDeploymentBatchPredictions, getMlDeployments, getMlExperiment, getMlExperimentModel, getMlExperimentModels, getMlExperimentVersion, getMlExperimentVersions, getMlExperiments, getMlProfileInsight, getMlProfileInsightWithQuery, patchMlDeployment, patchMlDeploymentAliase, patchMlDeploymentBatchPrediction, patchMlExperiment, patchMlExperimentVersion, predictMlDeploymentBatchPrediction, recommendModelsMlExperiment, removeMlDeploymentModels, runMlDeploymentAliaseRealtimePredictions, runMlDeploymentRealtimePredictions, setMlDeploymentBatchPredictionSchedule, updateMlDeploymentBatchPredictionSchedule };