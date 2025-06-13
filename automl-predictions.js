import {
  clearApiCache,
  invokeFetch
} from "./chunks/6WNP7HZQ.js";
import "./chunks/QAOVZB27.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/automl-predictions.ts
async function getAutomlPredictionCoordinateShap(predictionId, query, options) {
  return invokeFetch("automl-predictions", {
    method: "get",
    pathTemplate: "/api/v1/automl-predictions/{predictionId}/coordinate-shap",
    pathVariables: { predictionId },
    query,
    options
  });
}
async function createAutomlPredictionJob(predictionId, options) {
  return invokeFetch("automl-predictions", {
    method: "post",
    pathTemplate: "/api/v1/automl-predictions/{predictionId}/jobs",
    pathVariables: { predictionId },
    options
  });
}
async function getAutomlPredictionNotPredictedReasons(predictionId, query, options) {
  return invokeFetch("automl-predictions", {
    method: "get",
    pathTemplate: "/api/v1/automl-predictions/{predictionId}/not-predicted-reasons",
    pathVariables: { predictionId },
    query,
    options
  });
}
async function getAutomlPredictionPredictions(predictionId, query, options) {
  return invokeFetch("automl-predictions", {
    method: "get",
    pathTemplate: "/api/v1/automl-predictions/{predictionId}/predictions",
    pathVariables: { predictionId },
    query,
    options
  });
}
async function getAutomlPredictionShap(predictionId, query, options) {
  return invokeFetch("automl-predictions", {
    method: "get",
    pathTemplate: "/api/v1/automl-predictions/{predictionId}/shap",
    pathVariables: { predictionId },
    query,
    options
  });
}
async function getAutomlPredictionSource(predictionId, query, options) {
  return invokeFetch("automl-predictions", {
    method: "get",
    pathTemplate: "/api/v1/automl-predictions/{predictionId}/source",
    pathVariables: { predictionId },
    query,
    options
  });
}
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
