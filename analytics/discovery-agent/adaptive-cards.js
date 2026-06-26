import { t as __exportAll } from "../../chunks/rolldown-runtime-w6R9maHv.js";
import { n as invokeFetch, t as clearApiCache } from "../../chunks/invoke-fetch-DvyLyo3f.js";

//#region src/public/rest/analytics/discovery-agent/adaptive-cards.ts
var adaptive_cards_exports = /* @__PURE__ */ __exportAll({
	clearCache: () => clearCache,
	default: () => adaptiveCardsExport,
	getDiscoveryAgentAdaptiveCards_FIX_THIS_QUIRKY_NAME: () => getDiscoveryAgentAdaptiveCards_FIX_THIS_QUIRKY_NAME
});
/**
* Retrieves Adaptive Card(s) in JSON format. Support fetching of a single card by metric ID or multiple cards by a list of metric IDs. Support filtering by app IDs, measures, dimensions, categories, breakdown dimension, analysis types and triggered time range. When filtering by measures, use appIds parameter to scope results to specific apps, as the same measure expression can exist across multiple apps.
*
* **Ranking behaviour:** When the endpoint is called *without any filter parameters* (bare `GET /adaptive-cards`), only the top-ranked result per metric (rank ≤ 1) or results without a rank field are returned. When *any* DB-reaching filter is supplied (`metricIds`, `dimensions`, `measures`, `appIds`, `breakdowns`, `analysisTypes`, `comparisonPeriods`, `timeRangeStart`, `timeRangeEnd`), ranking is not applied and all matching results are returned so that explicit filters are never silently constrained by rank.
*
* @param query an object with query parameters
* @throws GetDiscoveryAgentAdaptiveCards_FIX_THIS_QUIRKY_NAMEHttpError
*/
async function getDiscoveryAgentAdaptiveCards_FIX_THIS_QUIRKY_NAME(query, options) {
	return invokeFetch("analytics/discovery-agent/adaptive-cards", {
		method: "get",
		pathTemplate: "/api/analytics/discovery-agent/adaptive-cards",
		query,
		options
	});
}
/**
* Clears the cache for analytics/discovery-agent/adaptive-cards api requests.
*/
function clearCache() {
	return clearApiCache("analytics/discovery-agent/adaptive-cards");
}
/**
* Functions for the adaptive-cards api
*/
const adaptiveCardsExport = {
	getDiscoveryAgentAdaptiveCards_FIX_THIS_QUIRKY_NAME,
	clearCache
};

//#endregion
export { clearCache, adaptiveCardsExport as default, getDiscoveryAgentAdaptiveCards_FIX_THIS_QUIRKY_NAME, adaptive_cards_exports as t };