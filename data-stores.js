import {
  clearApiCache,
  invokeFetch
} from "./chunks/LIEZG7IM.js";
import "./chunks/GPRUNZV4.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/data-stores.ts
async function deleteDataStores(body, options) {
  return invokeFetch("data-stores", {
    method: "delete",
    pathTemplate: "/api/v1/data-stores",
    body,
    contentType: "application/json",
    options
  });
}
async function getDataStores(query, options) {
  return invokeFetch("data-stores", {
    method: "get",
    pathTemplate: "/api/v1/data-stores",
    query,
    options
  });
}
async function createDataStore(body, options) {
  return invokeFetch("data-stores", {
    method: "post",
    pathTemplate: "/api/v1/data-stores",
    body,
    contentType: "application/json",
    options
  });
}
async function deleteDataStoreDataAssets(dataStoreIds, options) {
  return invokeFetch("data-stores", {
    method: "delete",
    pathTemplate: "/api/v1/data-stores/{data-store-ids}/data-assets",
    pathVariables: { "data-store-ids": dataStoreIds },
    options
  });
}
async function getDataStoreDataAssets(dataStoreIds, query, options) {
  return invokeFetch("data-stores", {
    method: "get",
    pathTemplate: "/api/v1/data-stores/{data-store-ids}/data-assets",
    pathVariables: { "data-store-ids": dataStoreIds },
    query,
    options
  });
}
async function deleteDataStoreDataAssetDataSets(dataStoreIds, dataAssetIds, options) {
  return invokeFetch("data-stores", {
    method: "delete",
    pathTemplate: "/api/v1/data-stores/{data-store-ids}/data-assets/{data-asset-ids}/data-sets",
    pathVariables: { "data-store-ids": dataStoreIds, "data-asset-ids": dataAssetIds },
    options
  });
}
async function getDataStoreDataAssetDataSets(dataStoreIds, dataAssetIds, query, options) {
  return invokeFetch("data-stores", {
    method: "get",
    pathTemplate: "/api/v1/data-stores/{data-store-ids}/data-assets/{data-asset-ids}/data-sets",
    pathVariables: { "data-store-ids": dataStoreIds, "data-asset-ids": dataAssetIds },
    query,
    options
  });
}
async function getDataStore(dataStoreId, query, options) {
  return invokeFetch("data-stores", {
    method: "get",
    pathTemplate: "/api/v1/data-stores/{data-store-id}",
    pathVariables: { "data-store-id": dataStoreId },
    query,
    options
  });
}
async function patchDataStore(dataStoreId, body, options) {
  return invokeFetch("data-stores", {
    method: "patch",
    pathTemplate: "/api/v1/data-stores/{data-store-id}",
    pathVariables: { "data-store-id": dataStoreId },
    body,
    contentType: "application/json",
    options
  });
}
async function updateDataStore(dataStoreId, body, options) {
  return invokeFetch("data-stores", {
    method: "put",
    pathTemplate: "/api/v1/data-stores/{data-store-id}",
    pathVariables: { "data-store-id": dataStoreId },
    body,
    contentType: "application/json",
    options
  });
}
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
