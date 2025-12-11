import "./chunks/public-runtime-modules-CfWEOfVS.js";
import { n as invokeFetch, t as clearApiCache } from "./chunks/invoke-fetch-Cxl7YHCk.js";

//#region src/public/rest/data-assets.ts
/**
* Batch delete data assets by IDs.
*
* @param body an object with the body content
* @throws DeleteDataAssetsHttpError
*/
async function deleteDataAssets(body, options) {
	return invokeFetch("data-assets", {
		method: "delete",
		pathTemplate: "/api/v1/data-assets",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Save new data asset.
*
* @param body an object with the body content
* @throws CreateDataAssetHttpError
*/
async function createDataAsset(body, options) {
	return invokeFetch("data-assets", {
		method: "post",
		pathTemplate: "/api/v1/data-assets",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Get data asset by ID.
*
* @param dataAssetId
* @param query an object with query parameters
* @throws GetDataAssetHttpError
*/
async function getDataAsset(dataAssetId, query, options) {
	return invokeFetch("data-assets", {
		method: "get",
		pathTemplate: "/api/v1/data-assets/{data-asset-id}",
		pathVariables: { "data-asset-id": dataAssetId },
		query,
		options
	});
}
/**
* Patch data asset.
*
* @param dataAssetId
* @param body an object with the body content
* @throws PatchDataAssetHttpError
*/
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
/**
* Update data asset.
*
* @param dataAssetId
* @param body an object with the body content
* @throws UpdateDataAssetHttpError
*/
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
/**
* Clears the cache for data-assets api requests.
*/
function clearCache() {
	return clearApiCache("data-assets");
}
/**
* Functions for the data-assets api
*/
const dataAssetsExport = {
	deleteDataAssets,
	createDataAsset,
	getDataAsset,
	patchDataAsset,
	updateDataAsset,
	clearCache
};
var data_assets_default = dataAssetsExport;

//#endregion
export { clearCache, createDataAsset, data_assets_default as default, deleteDataAssets, getDataAsset, patchDataAsset, updateDataAsset };