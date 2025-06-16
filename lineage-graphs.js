import {
  clearApiCache,
  invokeFetch
} from "./chunks/BEREWEFO.js";
import "./chunks/GZ7FHV5J.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/lineage-graphs.ts
async function expandLineageGraphImpact(id, query, options) {
  return invokeFetch("lineage-graphs", {
    method: "get",
    pathTemplate: "/api/v1/lineage-graphs/impact/{id}/actions/expand",
    pathVariables: { id },
    query,
    options
  });
}
async function searchLineageGraphImpact(id, query, options) {
  return invokeFetch("lineage-graphs", {
    method: "get",
    pathTemplate: "/api/v1/lineage-graphs/impact/{id}/actions/search",
    pathVariables: { id },
    query,
    options
  });
}
async function getLineageGraphImpactOverview(id, query, options) {
  return invokeFetch("lineage-graphs", {
    method: "get",
    pathTemplate: "/api/v1/lineage-graphs/impact/{id}/overview",
    pathVariables: { id },
    query,
    options
  });
}
async function getLineageGraphImpactSource(id, options) {
  return invokeFetch("lineage-graphs", {
    method: "get",
    pathTemplate: "/api/v1/lineage-graphs/impact/{id}/source",
    pathVariables: { id },
    options
  });
}
async function getLineageGraphNode(id, query, options) {
  return invokeFetch("lineage-graphs", {
    method: "get",
    pathTemplate: "/api/v1/lineage-graphs/nodes/{id}",
    pathVariables: { id },
    query,
    options
  });
}
async function expandLineageGraphNode(id, query, options) {
  return invokeFetch("lineage-graphs", {
    method: "get",
    pathTemplate: "/api/v1/lineage-graphs/nodes/{id}/actions/expand",
    pathVariables: { id },
    query,
    options
  });
}
async function searchLineageGraphNode(id, query, options) {
  return invokeFetch("lineage-graphs", {
    method: "get",
    pathTemplate: "/api/v1/lineage-graphs/nodes/{id}/actions/search",
    pathVariables: { id },
    query,
    options
  });
}
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
