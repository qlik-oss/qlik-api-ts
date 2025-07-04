import "./chunks/utils-qEQ6sEXX.js";
import "./chunks/public-runtime-modules-Bfh2smA7.js";
import { clearApiCache, invokeFetch } from "./chunks/invoke-fetch-DJFDz11x.js";

//#region src/public/rest/automl-deployments.ts
/**
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
var automl_deployments_default = automlDeploymentsExport;

//#endregion
export { clearCache, createAutomlDeploymentRealtimePrediction, automl_deployments_default as default };