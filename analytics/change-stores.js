import { t as __exportAll } from "../chunks/chunk-D3vHIbds.js";
import "../chunks/public-runtime-modules-BqxAMJ9M.js";
import { n as invokeFetch, t as clearApiCache } from "../chunks/invoke-fetch-CckTK7bh.js";

//#region src/public/rest/analytics/change-stores.ts
var change_stores_exports = /* @__PURE__ */ __exportAll({
	clearCache: () => clearCache,
	default: () => change_stores_default,
	getChangeStore: () => getChangeStore,
	getChangeStoreChanges: () => getChangeStoreChanges,
	getChangeStoreChangesTabularViews: () => getChangeStoreChangesTabularViews,
	getChangeStores: () => getChangeStores
});
/**
* Get a list of change-stores.
* @example
* getChangeStores(
*   {
*     page: "1a2b3c",
*     limit: 100,
*     sort: "+storeName",
*     spaceId: "personal"
*   }
* )
*
* @param query an object with query parameters
* @throws GetChangeStoresHttpError
*/
async function getChangeStores(query, options) {
	return invokeFetch("analytics/change-stores", {
		method: "get",
		pathTemplate: "/api/analytics/change-stores",
		query,
		options
	});
}
/**
* Get change store by Id.
* @example
* getChangeStore(
*   "507f1f77bcf86cd799439011"
* )
*
* @param storeId The id of the change store.
* @throws GetChangeStoreHttpError
*/
async function getChangeStore(storeId, options) {
	return invokeFetch("analytics/change-stores", {
		method: "get",
		pathTemplate: "/api/analytics/change-stores/{storeId}",
		pathVariables: { storeId },
		options
	});
}
/**
* Retrieve changes for the specified change store.
* @example
* getChangeStoreChanges(
*   "507f1f77bcf86cd799439011",
*   {
*     page: "1a2b3c",
*     limit: 100,
*     sort: "+createdAt"
*   }
* )
*
* @param storeId The id of the change store.
* @param query an object with query parameters
* @throws GetChangeStoreChangesHttpError
*/
async function getChangeStoreChanges(storeId, query, options) {
	return invokeFetch("analytics/change-stores", {
		method: "get",
		pathTemplate: "/api/analytics/change-stores/{storeId}/changes",
		pathVariables: { storeId },
		query,
		options
	});
}
/**
* Retrieve changes in tabular view.
* @example
* getChangeStoreChangesTabularViews(
*   "507f1f77bcf86cd799439011",
*   {
*     page: "1a2b3c",
*     limit: 100
*   }
* )
*
* @param storeId The id of the change store.
* @param query an object with query parameters
* @throws GetChangeStoreChangesTabularViewsHttpError
*/
async function getChangeStoreChangesTabularViews(storeId, query, options) {
	return invokeFetch("analytics/change-stores", {
		method: "get",
		pathTemplate: "/api/analytics/change-stores/{storeId}/changes/tabular-views",
		pathVariables: { storeId },
		query,
		options
	});
}
/**
* Clears the cache for analytics/change-stores api requests.
*/
function clearCache() {
	return clearApiCache("analytics/change-stores");
}
/**
* Functions for the change-stores api
*/
const changeStoresExport = {
	getChangeStores,
	getChangeStore,
	getChangeStoreChanges,
	getChangeStoreChangesTabularViews,
	clearCache
};
var change_stores_default = changeStoresExport;

//#endregion
export { clearCache, change_stores_default as default, getChangeStore, getChangeStoreChanges, getChangeStoreChangesTabularViews, getChangeStores, change_stores_exports as t };