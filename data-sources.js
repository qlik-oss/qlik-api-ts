import {
  clearApiCache,
  invokeFetch
} from "./chunks/VVD2DPKQ.js";
import "./chunks/LTNGXTXG.js";
import "./chunks/2ZQ3ZX7F.js";

// src/public/rest/data-sources.ts
var getDataSources = async (query, options) => invokeFetch("data-sources", {
  method: "get",
  pathTemplate: "/api/v1/data-sources",
  query,
  options
});
var getDataSourceApiSpecs = async (dataSourceId, options) => invokeFetch("data-sources", {
  method: "get",
  pathTemplate: "/api/v1/data-sources/{dataSourceId}/api-specs",
  pathVariables: { dataSourceId },
  options
});
var getDataSourceGateways = async (dataSourceId, query, options) => invokeFetch("data-sources", {
  method: "get",
  pathTemplate: "/api/v1/data-sources/{dataSourceId}/gateways",
  pathVariables: { dataSourceId },
  query,
  options
});
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
