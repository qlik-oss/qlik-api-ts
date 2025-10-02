import "./chunks/utils-1j8VpsDa.js";
import "./chunks/public-runtime-modules-BBAJOUvT.js";
import { clearApiCache, invokeFetch } from "./chunks/invoke-fetch-Z1aRlURh.js";

//#region src/public/rest/data-stores.ts
/**
* Delete data stores if it does not contain any data-assets.
*
* @param body an object with the body content
* @throws DeleteDataStoresHttpError
*/
async function deleteDataStores(body, options) {
	return invokeFetch("data-stores", {
		method: "delete",
		pathTemplate: "/api/v1/data-stores",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Get all data stores.
*
* @param query an object with query parameters
* @throws GetDataStoresHttpError
*/
async function getDataStores(query, options) {
	return invokeFetch("data-stores", {
		method: "get",
		pathTemplate: "/api/v1/data-stores",
		query,
		options
	});
}
/**
* Save new data store.
*
* @param body an object with the body content
* @throws CreateDataStoreHttpError
*/
async function createDataStore(body, options) {
	return invokeFetch("data-stores", {
		method: "post",
		pathTemplate: "/api/v1/data-stores",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Delete data assets and child data-sets by data-store IDs.
*
* @param dataStoreIds Comma-separated data store IDs or * to include all data stores.
* @throws DeleteDataStoreDataAssetsHttpError
*/
async function deleteDataStoreDataAssets(dataStoreIds, options) {
	return invokeFetch("data-stores", {
		method: "delete",
		pathTemplate: "/api/v1/data-stores/{data-store-ids}/data-assets",
		pathVariables: { "data-store-ids": dataStoreIds },
		options
	});
}
/**
* Get all data assets belonging to the data store(s).
*
* @param dataStoreIds Comma-separated data store IDs or * to include all data stores.
* @param query an object with query parameters
* @throws GetDataStoreDataAssetsHttpError
*/
async function getDataStoreDataAssets(dataStoreIds, query, options) {
	return invokeFetch("data-stores", {
		method: "get",
		pathTemplate: "/api/v1/data-stores/{data-store-ids}/data-assets",
		pathVariables: { "data-store-ids": dataStoreIds },
		query,
		options
	});
}
/**
* Delete data sets by data-store IDs and data-asset IDs.
*
* @param dataStoreIds Comma-separated data store IDs or * to include all data stores.
* @param dataAssetIds Comma-separated data asset IDs or * to include all data assets.
* @throws DeleteDataStoreDataAssetDataSetsHttpError
*/
async function deleteDataStoreDataAssetDataSets(dataStoreIds, dataAssetIds, options) {
	return invokeFetch("data-stores", {
		method: "delete",
		pathTemplate: "/api/v1/data-stores/{data-store-ids}/data-assets/{data-asset-ids}/data-sets",
		pathVariables: {
			"data-store-ids": dataStoreIds,
			"data-asset-ids": dataAssetIds
		},
		options
	});
}
/**
* Get all data sets belonging to the data store(s) and data asset(s).
*
* @param dataStoreIds Comma-separated data store IDs or * to include all data stores.
* @param dataAssetIds Comma-separated data asset IDs or * to include all data assets.
* @param query an object with query parameters
* @throws GetDataStoreDataAssetDataSetsHttpError
*/
async function getDataStoreDataAssetDataSets(dataStoreIds, dataAssetIds, query, options) {
	return invokeFetch("data-stores", {
		method: "get",
		pathTemplate: "/api/v1/data-stores/{data-store-ids}/data-assets/{data-asset-ids}/data-sets",
		pathVariables: {
			"data-store-ids": dataStoreIds,
			"data-asset-ids": dataAssetIds
		},
		query,
		options
	});
}
/**
* Get data store by ID.
*
* @param dataStoreId
* @param query an object with query parameters
* @throws GetDataStoreHttpError
*/
async function getDataStore(dataStoreId, query, options) {
	return invokeFetch("data-stores", {
		method: "get",
		pathTemplate: "/api/v1/data-stores/{data-store-id}",
		pathVariables: { "data-store-id": dataStoreId },
		query,
		options
	});
}
/**
* Patch data store.
*
* @param dataStoreId
* @param body an object with the body content
* @throws PatchDataStoreHttpError
*/
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
/**
* Update data store.
*
* @param dataStoreId
* @param body an object with the body content
* @throws UpdateDataStoreHttpError
*/
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
/**
* Clears the cache for data-stores api requests.
*/
function clearCache() {
	return clearApiCache("data-stores");
}
/**
* Functions for the data-stores api
*/
const dataStoresExport = {
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

//#endregion
export { clearCache, createDataStore, data_stores_default as default, deleteDataStoreDataAssetDataSets, deleteDataStoreDataAssets, deleteDataStores, getDataStore, getDataStoreDataAssetDataSets, getDataStoreDataAssets, getDataStores, patchDataStore, updateDataStore };