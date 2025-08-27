import "./chunks/utils-CAGXTaqJ.js";
import "./chunks/public-runtime-modules-P9LEbn8i.js";
import { clearApiCache, invokeFetch } from "./chunks/invoke-fetch-09EW5w1d.js";

//#region src/public/rest/automl-predictions.ts
/**
* @deprecated
*
* Returns a file containing the shapley values in coordinate form that are associated with a prediction ID.
*
* @param predictionId The ID of the prediction configuration object that provides parameters to be applied when the prediction is produced.
* @param query an object with query parameters
* @throws GetAutomlPredictionCoordinateShapHttpError
*/
async function getAutomlPredictionCoordinateShap(predictionId, query, options) {
	return invokeFetch("automl-predictions", {
		method: "get",
		pathTemplate: "/api/v1/automl-predictions/{predictionId}/coordinate-shap",
		pathVariables: { predictionId },
		query,
		options
	});
}
/**
* @deprecated
*
* Retrieve jobs that are associated with a prediction. Job with correlation type `prediction`.
*
* @param predictionId The ID of the prediction configuration object that provides parameters to be applied when the prediction is produced.
* @throws CreateAutomlPredictionJobHttpError
*/
async function createAutomlPredictionJob(predictionId, options) {
	return invokeFetch("automl-predictions", {
		method: "post",
		pathTemplate: "/api/v1/automl-predictions/{predictionId}/jobs",
		pathVariables: { predictionId },
		options
	});
}
/**
* @deprecated
*
* Returns a file containing any rows in a prediction operation where a prediction was unable to be produced.
*
* @param predictionId The ID of the prediction configuration object that provides parameters to be applied when the prediction is produced.
* @param query an object with query parameters
* @throws GetAutomlPredictionNotPredictedReasonsHttpError
*/
async function getAutomlPredictionNotPredictedReasons(predictionId, query, options) {
	return invokeFetch("automl-predictions", {
		method: "get",
		pathTemplate: "/api/v1/automl-predictions/{predictionId}/not-predicted-reasons",
		pathVariables: { predictionId },
		query,
		options
	});
}
/**
* @deprecated
*
* Returns a file containing the predicted values that are associated with a prediction ID.
*
* @param predictionId The ID of the prediction configuration object that provides parameters to be applied when the prediction is produced.
* @param query an object with query parameters
* @throws GetAutomlPredictionPredictionsHttpError
*/
async function getAutomlPredictionPredictions(predictionId, query, options) {
	return invokeFetch("automl-predictions", {
		method: "get",
		pathTemplate: "/api/v1/automl-predictions/{predictionId}/predictions",
		pathVariables: { predictionId },
		query,
		options
	});
}
/**
* @deprecated
*
* Returns a file containing the shapley values that are associated with a prediction ID.
*
* @param predictionId The ID of the prediction configuration object that provides parameters to be applied when the prediction is produced.
* @param query an object with query parameters
* @throws GetAutomlPredictionShapHttpError
*/
async function getAutomlPredictionShap(predictionId, query, options) {
	return invokeFetch("automl-predictions", {
		method: "get",
		pathTemplate: "/api/v1/automl-predictions/{predictionId}/shap",
		pathVariables: { predictionId },
		query,
		options
	});
}
/**
* @deprecated
*
* Returns a file containing the source values and an index field that are associated with a prediction ID.
*
* @param predictionId The ID of the prediction configuration object that provides parameters to be applied when the prediction is produced.
* @param query an object with query parameters
* @throws GetAutomlPredictionSourceHttpError
*/
async function getAutomlPredictionSource(predictionId, query, options) {
	return invokeFetch("automl-predictions", {
		method: "get",
		pathTemplate: "/api/v1/automl-predictions/{predictionId}/source",
		pathVariables: { predictionId },
		query,
		options
	});
}
/**
* Clears the cache for automl-predictions api requests.
*/
function clearCache() {
	return clearApiCache("automl-predictions");
}
/**
* Functions for the automl-predictions api
*/
const automlPredictionsExport = {
	getAutomlPredictionCoordinateShap,
	createAutomlPredictionJob,
	getAutomlPredictionNotPredictedReasons,
	getAutomlPredictionPredictions,
	getAutomlPredictionShap,
	getAutomlPredictionSource,
	clearCache
};
var automl_predictions_default = automlPredictionsExport;

//#endregion
export { clearCache, createAutomlPredictionJob, automl_predictions_default as default, getAutomlPredictionCoordinateShap, getAutomlPredictionNotPredictedReasons, getAutomlPredictionPredictions, getAutomlPredictionShap, getAutomlPredictionSource };