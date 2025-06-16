import {
  clearApiCache,
  invokeFetch
} from "./chunks/BEREWEFO.js";
import "./chunks/GZ7FHV5J.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/data-assets.ts
async function deleteDataAssets(body, options) {
  return invokeFetch("data-assets", {
    method: "delete",
    pathTemplate: "/api/v1/data-assets",
    body,
    contentType: "application/json",
    options
  });
}
async function createDataAsset(body, options) {
  return invokeFetch("data-assets", {
    method: "post",
    pathTemplate: "/api/v1/data-assets",
    body,
    contentType: "application/json",
    options
  });
}
async function getDataAsset(dataAssetId, query, options) {
  return invokeFetch("data-assets", {
    method: "get",
    pathTemplate: "/api/v1/data-assets/{data-asset-id}",
    pathVariables: { "data-asset-id": dataAssetId },
    query,
    options
  });
}
async function patchDataAsset(dataAssetId, body, options) {
  return invokeFetch("data-assets", {
    method: "patch",
    pathTemplate: "/api/v1/data-assets/{data-asset-id}",
    pathVariables: { "data-asset-id": dataAssetId },
    body,
    contentType: "application/json",
    options
  });
}
async function updateDataAsset(dataAssetId, body, options) {
  return invokeFetch("data-assets", {
    method: "put",
    pathTemplate: "/api/v1/data-assets/{data-asset-id}",
    pathVariables: { "data-asset-id": dataAssetId },
    body,
    contentType: "application/json",
    options
  });
}
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
