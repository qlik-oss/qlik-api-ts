"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkWA4O4PMUjs = require('./chunk-WA4O4PMU.js');
require('./chunk-L4SFSITJ.js');

// src/public/rest/data-assets.ts
var deleteDataAssets = async (body, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "data-assets", {
  method: "delete",
  pathTemplate: "/api/v1/data-assets",
  body,
  options
});
var createDataAsset = async (body, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "data-assets", {
  method: "post",
  pathTemplate: "/api/v1/data-assets",
  body,
  options
});
var getDataAsset = async (dataAssetId, query, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "data-assets", {
  method: "get",
  pathTemplate: "/api/v1/data-assets/{data-asset-id}",
  pathVariables: { "data-asset-id": dataAssetId },
  query,
  options
});
var patchDataAsset = async (dataAssetId, body, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "data-assets", {
  method: "patch",
  pathTemplate: "/api/v1/data-assets/{data-asset-id}",
  pathVariables: { "data-asset-id": dataAssetId },
  body,
  options
});
var updateDataAsset = async (dataAssetId, body, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "data-assets", {
  method: "put",
  pathTemplate: "/api/v1/data-assets/{data-asset-id}",
  pathVariables: { "data-asset-id": dataAssetId },
  body,
  options
});
function clearCache() {
  return _chunkWA4O4PMUjs.clearApiCache.call(void 0, "data-assets");
}
var dataAssetsExport = {
  deleteDataAssets,
  createDataAsset,
  getDataAsset,
  patchDataAsset,
  updateDataAsset,
  clearCache
};
var data_assets_default = dataAssetsExport;








exports.clearCache = clearCache; exports.createDataAsset = createDataAsset; exports.default = data_assets_default; exports.deleteDataAssets = deleteDataAssets; exports.getDataAsset = getDataAsset; exports.patchDataAsset = patchDataAsset; exports.updateDataAsset = updateDataAsset;
