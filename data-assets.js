"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunk6JERR27Kjs = require('./chunk-6JERR27K.js');
require('./chunk-H7SAZYEE.js');

// src/public/rest/data-assets.ts
var deleteDataAssets = async (body, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "data-assets", {
  method: "delete",
  pathTemplate: "/api/v1/data-assets",
  body,
  options
});
var createDataAsset = async (body, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "data-assets", {
  method: "post",
  pathTemplate: "/api/v1/data-assets",
  body,
  options
});
var getDataAsset = async (dataAssetId, query, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "data-assets", {
  method: "get",
  pathTemplate: "/api/v1/data-assets/{data-asset-id}",
  pathVariables: { "data-asset-id": dataAssetId },
  query,
  options
});
var patchDataAsset = async (dataAssetId, body, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "data-assets", {
  method: "patch",
  pathTemplate: "/api/v1/data-assets/{data-asset-id}",
  pathVariables: { "data-asset-id": dataAssetId },
  body,
  options
});
var updateDataAsset = async (dataAssetId, body, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "data-assets", {
  method: "put",
  pathTemplate: "/api/v1/data-assets/{data-asset-id}",
  pathVariables: { "data-asset-id": dataAssetId },
  body,
  options
});
function clearCache() {
  return _chunk6JERR27Kjs.clearApiCache.call(void 0, "data-assets");
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
