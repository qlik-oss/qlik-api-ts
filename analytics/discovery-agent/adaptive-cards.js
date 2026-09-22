import { t as __exportAll } from "../../chunks/rolldown-runtime-w6R9maHv.js";
import { n as invokeFetch, t as clearApiCache } from "../../chunks/invoke-fetch-BQlTFu41.js";

//#region src/public/rest/analytics/discovery-agent/adaptive-cards.ts
var adaptive_cards_exports = /* @__PURE__ */ __exportAll({
	clearCache: () => clearCache,
	default: () => adaptiveCardsExport,
	getAdaptiveCards: () => getAdaptiveCards
});
/**
* Retrieves Adaptive Cards for in-app metrics. Supports fetching a single card by metric ID or multiple cards by a list of metric IDs. Supports filtering by app IDs, measures, dimensions, categories, breakdown dimensions, analysis types, and triggered time range. When filtering by measures, use the `appIds` parameter to scope results to specific apps, as the same measure expression can exist across multiple apps.
*
* When called without any filter parameters, only the top-ranked result per metric is returned. When any filtering parameter is supplied (`metricIds`, `dimensions`, `measures`, `appIds`, `breakdowns`, `analysisTypes`, `comparisonPeriods`, `timeRangeStart`, `timeRangeEnd`), ranking is not applied and all matching results are returned.
*
* @param query an object with query parameters
* @throws GetAdaptiveCardsHttpError
*/
async function getAdaptiveCards(query, options) {
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
	getAdaptiveCards,
	clearCache
};

//#endregion
export { clearCache, adaptiveCardsExport as default, getAdaptiveCards, adaptive_cards_exports as t };