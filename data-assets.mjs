import {
  clearApiCache,
  invokeFetch
} from "./chunk-3YE7EI7I.mjs";
import "./chunk-WM7FQU2U.mjs";

// src/public/rest/data-assets.ts
var deleteDataAssets = async (body, options) => invokeFetch("data-assets", {
  method: "delete",
  pathTemplate: "/api/v1/data-assets",
  body,
  options
});
var createDataAsset = async (body, options) => invokeFetch("data-assets", {
  method: "post",
  pathTemplate: "/api/v1/data-assets",
  body,
  options
});
var getDataAsset = async (dataAssetId, query, options) => invokeFetch("data-assets", {
  method: "get",
  pathTemplate: "/api/v1/data-assets/{data-asset-id}",
  pathVariables: { "data-asset-id": dataAssetId },
  query,
  options
});
var patchDataAsset = async (dataAssetId, body, options) => invokeFetch("data-assets", {
  method: "patch",
  pathTemplate: "/api/v1/data-assets/{data-asset-id}",
  pathVariables: { "data-asset-id": dataAssetId },
  body,
  options
});
var updateDataAsset = async (dataAssetId, body, options) => invokeFetch("data-assets", {
  method: "put",
  pathTemplate: "/api/v1/data-assets/{data-asset-id}",
  pathVariables: { "data-asset-id": dataAssetId },
  body,
  options
});
function clearCache() {
  return clearApiCache("data-assets");
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
export {
  clearCache,
  createDataAsset,
  data_assets_default as default,
  deleteDataAssets,
  getDataAsset,
  patchDataAsset,
  updateDataAsset
};
