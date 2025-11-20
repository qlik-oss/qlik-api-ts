import "./chunks/utils-UaAiVTcc.js";
import "./chunks/public-runtime-modules-DiFgGaqr.js";
import { n as invokeFetch, t as clearApiCache } from "./chunks/invoke-fetch-CoW3QRhJ.js";

//#region src/public/rest/conditions.ts
/**
* Creates a new condition.
*
* @param body an object with the body content
* @throws CreateConditionHttpError
*/
async function createCondition(body, options) {
	return invokeFetch("conditions", {
		method: "post",
		pathTemplate: "/api/v1/conditions",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Create condition preview request.
*
* @param body an object with the body content
* @throws CreateConditionPreviewHttpError
*/
async function createConditionPreview(body, options) {
	return invokeFetch("conditions", {
		method: "post",
		pathTemplate: "/api/v1/conditions/previews",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Get condition preview response.
*
* @param id The id of the condition
* @throws GetConditionPreviewHttpError
*/
async function getConditionPreview(id, options) {
	return invokeFetch("conditions", {
		method: "get",
		pathTemplate: "/api/v1/conditions/previews/{id}",
		pathVariables: { id },
		options
	});
}
/**
* Retrieves condition manager settings
*
* @throws GetConditionsSettingsHttpError
*/
async function getConditionsSettings(options) {
	return invokeFetch("conditions", {
		method: "get",
		pathTemplate: "/api/v1/conditions/settings",
		options
	});
}
/**
* Updates API configuration. Accessible only by tenant admins.
*
* @param body an object with the body content
* @throws SetConditionsSettingsHttpError
*/
async function setConditionsSettings(body, options) {
	return invokeFetch("conditions", {
		method: "put",
		pathTemplate: "/api/v1/conditions/settings",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Delete the condition
*
* @param id The id of the condition
* @throws DeleteConditionHttpError
*/
async function deleteCondition(id, options) {
	return invokeFetch("conditions", {
		method: "delete",
		pathTemplate: "/api/v1/conditions/{id}",
		pathVariables: { id },
		options
	});
}
/**
* Retrieve a specific condition by id.
*
* @param id The id of the condition
* @throws GetConditionHttpError
*/
async function getCondition(id, options) {
	return invokeFetch("conditions", {
		method: "get",
		pathTemplate: "/api/v1/conditions/{id}",
		pathVariables: { id },
		options
	});
}
/**
* Patch values in the condition
*
* @param id The id of the condition
* @param body an object with the body content
* @throws PatchConditionHttpError
*/
async function patchCondition(id, body, options) {
	return invokeFetch("conditions", {
		method: "patch",
		pathTemplate: "/api/v1/conditions/{id}",
		pathVariables: { id },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Executes the condition
*
* @param id The id of the condition
* @param body an object with the body content
* @throws CreateConditionEvaluationHttpError
*/
async function createConditionEvaluation(id, body, options) {
	return invokeFetch("conditions", {
		method: "post",
		pathTemplate: "/api/v1/conditions/{id}/evaluations",
		pathVariables: { id },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Delete an Evaluation
*
* @param id The id of the condition
* @param evaluationId The id of the evaluation
* @throws DeleteConditionEvaluationHttpError
*/
async function deleteConditionEvaluation(id, evaluationId, options) {
	return invokeFetch("conditions", {
		method: "delete",
		pathTemplate: "/api/v1/conditions/{id}/evaluations/{evaluationId}",
		pathVariables: {
			id,
			evaluationId
		},
		options
	});
}
/**
* Get an Evaluation
*
* @param id The id of the condition
* @param evaluationId The id of the evaluation
* @throws GetConditionEvaluationHttpError
*/
async function getConditionEvaluation(id, evaluationId, options) {
	return invokeFetch("conditions", {
		method: "get",
		pathTemplate: "/api/v1/conditions/{id}/evaluations/{evaluationId}",
		pathVariables: {
			id,
			evaluationId
		},
		options
	});
}
/**
* Clears the cache for conditions api requests.
*/
function clearCache() {
	return clearApiCache("conditions");
}
/**
* Functions for the conditions api
*/
const conditionsExport = {
	createCondition,
	createConditionPreview,
	getConditionPreview,
	getConditionsSettings,
	setConditionsSettings,
	deleteCondition,
	getCondition,
	patchCondition,
	createConditionEvaluation,
	deleteConditionEvaluation,
	getConditionEvaluation,
	clearCache
};
var conditions_default = conditionsExport;

//#endregion
export { clearCache, createCondition, createConditionEvaluation, createConditionPreview, conditions_default as default, deleteCondition, deleteConditionEvaluation, getCondition, getConditionEvaluation, getConditionPreview, getConditionsSettings, patchCondition, setConditionsSettings };