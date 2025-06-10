import {
  clearApiCache,
  invokeFetch
} from "./chunks/PUS32UJH.js";
import "./chunks/CLZXLW6N.js";
import "./chunks/2ZQ3ZX7F.js";

// src/public/rest/lineage-graphs.ts
var expandLineageGraphImpact = async (id, query, options) => invokeFetch("lineage-graphs", {
  method: "get",
  pathTemplate: "/api/v1/lineage-graphs/impact/{id}/actions/expand",
  pathVariables: { id },
  query,
  options
});
var searchLineageGraphImpact = async (id, query, options) => invokeFetch("lineage-graphs", {
  method: "get",
  pathTemplate: "/api/v1/lineage-graphs/impact/{id}/actions/search",
  pathVariables: { id },
  query,
  options
});
var getLineageGraphImpactOverview = async (id, query, options) => invokeFetch("lineage-graphs", {
  method: "get",
  pathTemplate: "/api/v1/lineage-graphs/impact/{id}/overview",
  pathVariables: { id },
  query,
  options
});
var getLineageGraphImpactSource = async (id, options) => invokeFetch("lineage-graphs", {
  method: "get",
  pathTemplate: "/api/v1/lineage-graphs/impact/{id}/source",
  pathVariables: { id },
  options
});
var getLineageGraphNode = async (id, query, options) => invokeFetch("lineage-graphs", {
  method: "get",
  pathTemplate: "/api/v1/lineage-graphs/nodes/{id}",
  pathVariables: { id },
  query,
  options
});
var expandLineageGraphNode = async (id, query, options) => invokeFetch("lineage-graphs", {
  method: "get",
  pathTemplate: "/api/v1/lineage-graphs/nodes/{id}/actions/expand",
  pathVariables: { id },
  query,
  options
});
var searchLineageGraphNode = async (id, query, options) => invokeFetch("lineage-graphs", {
  method: "get",
  pathTemplate: "/api/v1/lineage-graphs/nodes/{id}/actions/search",
  pathVariables: { id },
  query,
  options
});
var createLineageGraphNodeOverview = async (id, query, body, options) => invokeFetch("lineage-graphs", {
  method: "post",
  pathTemplate: "/api/v1/lineage-graphs/nodes/{id}/overview",
  pathVariables: { id },
  query,
  body,
  contentType: "application/json",
  options
});
function clearCache() {
  return clearApiCache("lineage-graphs");
}
var lineageGraphsExport = {
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
export {
  clearCache,
  createLineageGraphNodeOverview,
  lineage_graphs_default as default,
  expandLineageGraphImpact,
  expandLineageGraphNode,
  getLineageGraphImpactOverview,
  getLineageGraphImpactSource,
  getLineageGraphNode,
  searchLineageGraphImpact,
  searchLineageGraphNode
};
