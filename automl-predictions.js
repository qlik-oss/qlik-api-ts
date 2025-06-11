import {
  clearApiCache,
  invokeFetch
} from "./chunks/PUS32UJH.js";
import "./chunks/CLZXLW6N.js";
import "./chunks/2ZQ3ZX7F.js";

// src/public/rest/automl-predictions.ts
var getAutomlPredictionCoordinateShap = async (predictionId, query, options) => invokeFetch("automl-predictions", {
  method: "get",
  pathTemplate: "/api/v1/automl-predictions/{predictionId}/coordinate-shap",
  pathVariables: { predictionId },
  query,
  options
});
var createAutomlPredictionJob = async (predictionId, options) => invokeFetch("automl-predictions", {
  method: "post",
  pathTemplate: "/api/v1/automl-predictions/{predictionId}/jobs",
  pathVariables: { predictionId },
  options
});
var getAutomlPredictionNotPredictedReasons = async (predictionId, query, options) => invokeFetch("automl-predictions", {
  method: "get",
  pathTemplate: "/api/v1/automl-predictions/{predictionId}/not-predicted-reasons",
  pathVariables: { predictionId },
  query,
  options
});
var getAutomlPredictionPredictions = async (predictionId, query, options) => invokeFetch("automl-predictions", {
  method: "get",
  pathTemplate: "/api/v1/automl-predictions/{predictionId}/predictions",
  pathVariables: { predictionId },
  query,
  options
});
var getAutomlPredictionShap = async (predictionId, query, options) => invokeFetch("automl-predictions", {
  method: "get",
  pathTemplate: "/api/v1/automl-predictions/{predictionId}/shap",
  pathVariables: { predictionId },
  query,
  options
});
var getAutomlPredictionSource = async (predictionId, query, options) => invokeFetch("automl-predictions", {
  method: "get",
  pathTemplate: "/api/v1/automl-predictions/{predictionId}/source",
  pathVariables: { predictionId },
  query,
  options
});
function clearCache() {
  return clearApiCache("automl-predictions");
}
var automlPredictionsExport = {
  getAutomlPredictionCoordinateShap,
  createAutomlPredictionJob,
  getAutomlPredictionNotPredictedReasons,
  getAutomlPredictionPredictions,
  getAutomlPredictionShap,
  getAutomlPredictionSource,
  clearCache
};
var automl_predictions_default = automlPredictionsExport;
export {
  clearCache,
  createAutomlPredictionJob,
  automl_predictions_default as default,
  getAutomlPredictionCoordinateShap,
  getAutomlPredictionNotPredictedReasons,
  getAutomlPredictionPredictions,
  getAutomlPredictionShap,
  getAutomlPredictionSource
};
