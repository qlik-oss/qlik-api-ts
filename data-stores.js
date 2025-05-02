import {
  clearApiCache,
  invokeFetch
} from "./chunks/VVD2DPKQ.js";
import "./chunks/LTNGXTXG.js";
import "./chunks/2ZQ3ZX7F.js";

// src/public/rest/data-stores.ts
var deleteDataStores = async (body, options) => invokeFetch("data-stores", {
  method: "delete",
  pathTemplate: "/api/v1/data-stores",
  body,
  contentType: "application/json",
  options
});
var getDataStores = async (query, options) => invokeFetch("data-stores", {
  method: "get",
  pathTemplate: "/api/v1/data-stores",
  query,
  options
});
var createDataStore = async (body, options) => invokeFetch("data-stores", {
  method: "post",
  pathTemplate: "/api/v1/data-stores",
  body,
  contentType: "application/json",
  options
});
var deleteDataStoreDataAssets = async (dataStoreIds, options) => invokeFetch("data-stores", {
  method: "delete",
  pathTemplate: "/api/v1/data-stores/{data-store-ids}/data-assets",
  pathVariables: { "data-store-ids": dataStoreIds },
  options
});
var getDataStoreDataAssets = async (dataStoreIds, query, options) => invokeFetch("data-stores", {
  method: "get",
  pathTemplate: "/api/v1/data-stores/{data-store-ids}/data-assets",
  pathVariables: { "data-store-ids": dataStoreIds },
  query,
  options
});
var deleteDataStoreDataAssetDataSets = async (dataStoreIds, dataAssetIds, options) => invokeFetch("data-stores", {
  method: "delete",
  pathTemplate: "/api/v1/data-stores/{data-store-ids}/data-assets/{data-asset-ids}/data-sets",
  pathVariables: { "data-store-ids": dataStoreIds, "data-asset-ids": dataAssetIds },
  options
});
var getDataStoreDataAssetDataSets = async (dataStoreIds, dataAssetIds, query, options) => invokeFetch("data-stores", {
  method: "get",
  pathTemplate: "/api/v1/data-stores/{data-store-ids}/data-assets/{data-asset-ids}/data-sets",
  pathVariables: { "data-store-ids": dataStoreIds, "data-asset-ids": dataAssetIds },
  query,
  options
});
var getDataStore = async (dataStoreId, query, options) => invokeFetch("data-stores", {
  method: "get",
  pathTemplate: "/api/v1/data-stores/{data-store-id}",
  pathVariables: { "data-store-id": dataStoreId },
  query,
  options
});
var patchDataStore = async (dataStoreId, body, options) => invokeFetch("data-stores", {
  method: "patch",
  pathTemplate: "/api/v1/data-stores/{data-store-id}",
  pathVariables: { "data-store-id": dataStoreId },
  body,
  contentType: "application/json",
  options
});
var updateDataStore = async (dataStoreId, body, options) => invokeFetch("data-stores", {
  method: "put",
  pathTemplate: "/api/v1/data-stores/{data-store-id}",
  pathVariables: { "data-store-id": dataStoreId },
  body,
  contentType: "application/json",
  options
});
function clearCache() {
  return clearApiCache("data-stores");
}
var dataStoresExport = {
  deleteDataStores,
  getDataStores,
  createDataStore,
  deleteDataStoreDataAssets,
  getDataStoreDataAssets,
  deleteDataStoreDataAssetDataSets,
  getDataStoreDataAssetDataSets,
  getDataStore,
  patchDataStore,
  updateDataStore,
  clearCache
};
var data_stores_default = dataStoresExport;
export {
  clearCache,
  createDataStore,
  data_stores_default as default,
  deleteDataStoreDataAssetDataSets,
  deleteDataStoreDataAssets,
  deleteDataStores,
  getDataStore,
  getDataStoreDataAssetDataSets,
  getDataStoreDataAssets,
  getDataStores,
  patchDataStore,
  updateDataStore
};
