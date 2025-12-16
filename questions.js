import "./chunks/public-runtime-modules-CfWEOfVS.js";
import { n as invokeFetch, t as clearApiCache } from "./chunks/invoke-fetch-Cxl7YHCk.js";

//#region src/public/rest/questions.ts
/**
* Returns the generated response for parsed chat queries, if no app was specified nor present in conversation context, suggests matching apps.
*
* @param body an object with the body content
* @throws AskQuestionsHttpError
*/
async function askQuestions(body, options) {
	return invokeFetch("questions", {
		method: "post",
		pathTemplate: "/api/v1/questions/actions/ask",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Returns NL metrics based on provided app IDs the user has access to.
*
* @param query an object with query parameters
* @param body an object with the body content
* @throws FilterQuestionsHttpError
*/
async function filterQuestions(query, body, options) {
	return invokeFetch("questions", {
		method: "post",
		pathTemplate: "/api/v1/questions/actions/filter",
		query,
		body,
		contentType: "application/json",
		options
	});
}
/**
* Clears the cache for questions api requests.
*/
function clearCache() {
	return clearApiCache("questions");
}
/**
* Functions for the questions api
*/
const questionsExport = {
	askQuestions,
	filterQuestions,
	clearCache
};
var questions_default = questionsExport;

//#endregion
export { askQuestions, clearCache, questions_default as default, filterQuestions };