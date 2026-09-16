import { t as __exportAll } from "../chunks/rolldown-runtime-w6R9maHv.js";
import { n as invokeFetch, t as clearApiCache } from "../chunks/invoke-fetch-uJH1SWdc.js";

//#region src/public/rest/data-governance/trust-scores.ts
var trust_scores_exports = /* @__PURE__ */ __exportAll({
	clearCache: () => clearCache,
	default: () => trustScoresExport,
	filterDatasetsTrustScore: () => filterDatasetsTrustScore
});
/**
* Returns the current Trust Score for up to 100 datasets in a single request. Each result includes the overall score, per-axis breakdown (`weight`, `score`, `enabled` state), and per-metric details. Datasets with no computed Trust Score are omitted from the response. Requires `dataset:read` and `dataquality:read` permissions.
*
* @param body an object with the body content
* @throws FilterDatasetsTrustScoreHttpError
*/
async function filterDatasetsTrustScore(body, options) {
	return invokeFetch("data-governance/trust-scores", {
		method: "post",
		pathTemplate: "/api/data-governance/trust-scores/results/data-sets/actions/filter",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Clears the cache for data-governance/trust-scores api requests.
*/
function clearCache() {
	return clearApiCache("data-governance/trust-scores");
}
/**
* Functions for the trust-scores api
*/
const trustScoresExport = {
	filterDatasetsTrustScore,
	clearCache
};

//#endregion
export { clearCache, trustScoresExport as default, filterDatasetsTrustScore, trust_scores_exports as t };