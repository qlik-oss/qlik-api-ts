import "./chunks/public-runtime-modules-2KfyI2qM.js";
import { n as invokeFetch, t as clearApiCache } from "./chunks/invoke-fetch-DMAi6Fg3.js";

//#region src/public/rest/automl-deployments.ts
/**
* @deprecated
*
* Generates predictions in a synchronous request and response.
*
* @param deploymentId The ID of the ML deployed model that will be employed to produce predictions.
* @param query an object with query parameters
* @param body an object with the body content
* @throws CreateAutomlDeploymentRealtimePredictionHttpError
*/
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
/**
* Clears the cache for automl-deployments api requests.
*/
function clearCache() {
	return clearApiCache("automl-deployments");
}
/**
* Functions for the automl-deployments api
*/
const automlDeploymentsExport = {
	createAutomlDeploymentRealtimePrediction,
	clearCache
};

//#endregion
export { clearCache, createAutomlDeploymentRealtimePrediction, automlDeploymentsExport as default };