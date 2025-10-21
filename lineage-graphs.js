import "./chunks/utils-DI6bFnHB.js";
import "./chunks/public-runtime-modules-C-9amT4R.js";
import { n as invokeFetch, t as clearApiCache } from "./chunks/invoke-fetch-CIrdtp97.js";

//#region src/public/rest/lineage-graphs.ts
/**
* Returns next-level nodes inside a specified node on an impact analysis graph retrieved using a base node.
*
* @param id The QRI for base node.
* @param query an object with query parameters
* @throws ExpandLineageGraphImpactHttpError
*/
async function expandLineageGraphImpact(id, query, options) {
	return invokeFetch("lineage-graphs", {
		method: "get",
		pathTemplate: "/api/v1/lineage-graphs/impact/{id}/actions/expand",
		pathVariables: { id },
		query,
		options
	});
}
/**
* Searchs all labels within a impact graph on all available levels. Returns result per level.
* @example
* searchLineageGraphImpact(
*   "qri:app:sense://e5c651d5-1198-45a2-be5d-f016cee0baf5",
*   {
*     filter: "label co \"label1\" or label co \"label2\""
*   }
* )
*
* @param id The qri for root node.
* @param query an object with query parameters
* @throws SearchLineageGraphImpactHttpError
*/
async function searchLineageGraphImpact(id, query, options) {
	return invokeFetch("lineage-graphs", {
		method: "get",
		pathTemplate: "/api/v1/lineage-graphs/impact/{id}/actions/search",
		pathVariables: { id },
		query,
		options
	});
}
/**
* Returns all RESOURCE level nodes that are impacted by a change in the source node. The number of tables and fields that are impacted for each resource are included as metadata. The id (QRI) can be on any level (FIELD, TABLE or RESOURCE) and the impact will be collected based on the starting QRI.
*
* @param id The qri for root node.
* @param query an object with query parameters
* @throws GetLineageGraphImpactOverviewHttpError
*/
async function getLineageGraphImpactOverview(id, query, options) {
	return invokeFetch("lineage-graphs", {
		method: "get",
		pathTemplate: "/api/v1/lineage-graphs/impact/{id}/overview",
		pathVariables: { id },
		query,
		options
	});
}
/**
* Returns all levels of the requested root node. Only node information will be returned.
* @example
* getLineageGraphImpactSource(
*   "qri:app:sense://e5c651d5-1198-45a2-be5d-f016cee0baf5"
* )
*
* @param id The id (QRI) for root node.
* @throws GetLineageGraphImpactSourceHttpError
*/
async function getLineageGraphImpactSource(id, options) {
	return invokeFetch("lineage-graphs", {
		method: "get",
		pathTemplate: "/api/v1/lineage-graphs/impact/{id}/source",
		pathVariables: { id },
		options
	});
}
/**
* Returns lineage graphs of a source node. The id (QRI) can point to an item on the field, table and resource level.
*
* @param id The id (QRI) for the source node.
* @param query an object with query parameters
* @throws GetLineageGraphNodeHttpError
*/
async function getLineageGraphNode(id, query, options) {
	return invokeFetch("lineage-graphs", {
		method: "get",
		pathTemplate: "/api/v1/lineage-graphs/nodes/{id}",
		pathVariables: { id },
		query,
		options
	});
}
/**
* Returns the expanded node and its edges. Up and downstream nodes are not part of the response, edges are. The id is the root node that lineage is requested for. The QRI of the node to expand is sent as the query parameter "node" for expansion.
*
* @param id The id (QRI) for the source node.
* @param query an object with query parameters
* @throws ExpandLineageGraphNodeHttpError
*/
async function expandLineageGraphNode(id, query, options) {
	return invokeFetch("lineage-graphs", {
		method: "get",
		pathTemplate: "/api/v1/lineage-graphs/nodes/{id}/actions/expand",
		pathVariables: { id },
		query,
		options
	});
}
/**
* Returns result per level by searching all labels within a lineage graph on all available levels.
* @example
* searchLineageGraphNode(
*   "qri:app:sense://e5c651d5-1198-45a2-be5d-f016cee0baf5",
*   {
*     filter: "label co \"label1\" or label co \"label2\""
*   }
* )
*
* @param id The qri for root node.
* @param query an object with query parameters
* @throws SearchLineageGraphNodeHttpError
*/
async function searchLineageGraphNode(id, query, options) {
	return invokeFetch("lineage-graphs", {
		method: "get",
		pathTemplate: "/api/v1/lineage-graphs/nodes/{id}/actions/search",
		pathVariables: { id },
		query,
		options
	});
}
/**
* Returns the first generation upstream direct lineage. For each field QRI, will find any direct linege dataset or application.
*
* @param id The qri for root node.
* @param query an object with query parameters
* @param body an object with the body content
* @throws CreateLineageGraphNodeOverviewHttpError
*/
async function createLineageGraphNodeOverview(id, query, body, options) {
	return invokeFetch("lineage-graphs", {
		method: "post",
		pathTemplate: "/api/v1/lineage-graphs/nodes/{id}/overview",
		pathVariables: { id },
		query,
		body,
		contentType: "application/json",
		options
	});
}
/**
* Clears the cache for lineage-graphs api requests.
*/
function clearCache() {
	return clearApiCache("lineage-graphs");
}
/**
* Functions for the lineage-graphs api
*/
const lineageGraphsExport = {
	expandLineageGraphImpact,
	searchLineageGraphImpact,
	getLineageGraphImpactOverview,
	getLineageGraphImpactSource,
	getLineageGraphNode,
	expandLineageGraphNode,
	searchLineageGraphNode,
	createLineageGraphNodeOverview,
	clearCache
};
var lineage_graphs_default = lineageGraphsExport;

//#endregion
export { clearCache, createLineageGraphNodeOverview, lineage_graphs_default as default, expandLineageGraphImpact, expandLineageGraphNode, getLineageGraphImpactOverview, getLineageGraphImpactSource, getLineageGraphNode, searchLineageGraphImpact, searchLineageGraphNode };