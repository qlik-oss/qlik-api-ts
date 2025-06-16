import {
  clearApiCache,
  invokeFetch
} from "./chunks/BEREWEFO.js";
import "./chunks/GZ7FHV5J.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/data-sources.ts
async function getDataSources(query, options) {
  return invokeFetch("data-sources", {
    method: "get",
    pathTemplate: "/api/v1/data-sources",
    query,
    options
  });
}
async function getDataSourceApiSpecs(dataSourceId, options) {
  return invokeFetch("data-sources", {
    method: "get",
    pathTemplate: "/api/v1/data-sources/{dataSourceId}/api-specs",
    pathVariables: { dataSourceId },
    options
  });
}
async function getDataSourceGateways(dataSourceId, query, options) {
  return invokeFetch("data-sources", {
    method: "get",
    pathTemplate: "/api/v1/data-sources/{dataSourceId}/gateways",
    pathVariables: { dataSourceId },
    query,
    options
  });
}
function clearCache() {
  return clearApiCache("data-sources");
}
var dataSourcesExport = { getDataSources, getDataSourceApiSpecs, getDataSourceGateways, clearCache };
var data_sources_default = dataSourcesExport;
export {
  clearCache,
  data_sources_default as default,
  getDataSourceApiSpecs,
  getDataSourceGateways,
  getDataSources
};
