import "./chunks/utils-UaAiVTcc.js";
import "./chunks/public-runtime-modules-C386fCsU.js";
import { n as invokeFetch, t as clearApiCache } from "./chunks/invoke-fetch-dW7RXRMD.js";

//#region src/public/rest/items.ts
/**
* Lists items that the user has access to.
*
* @param query an object with query parameters
* @throws GetItemsHttpError
*/
async function getItems(query, options) {
	return invokeFetch("items", {
		method: "get",
		pathTemplate: "/api/v1/items",
		query,
		options
	});
}
/**
* Finds and returns the items service settings for the current tenant. Currently used to enable or disable usage metrics in the tenant.
*
* @throws GetItemsSettingsHttpError
*/
async function getItemsSettings(options) {
	return invokeFetch("items", {
		method: "get",
		pathTemplate: "/api/v1/items/settings",
		options
	});
}
/**
* Updates the settings provided in the patch body. Currently used to enable or disable usage metrics in the tenant.
*
* @param body an object with the body content
* @throws PatchItemsSettingsHttpError
*/
async function patchItemsSettings(body, options) {
	return invokeFetch("items", {
		method: "patch",
		pathTemplate: "/api/v1/items/settings",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Deletes an item and removes the item from all collections.
*
* @param itemId The item's unique identifier.
* @throws DeleteItemHttpError
*/
async function deleteItem(itemId, options) {
	return invokeFetch("items", {
		method: "delete",
		pathTemplate: "/api/v1/items/{itemId}",
		pathVariables: { itemId },
		options
	});
}
/**
* Finds and returns an item.
*
* @param itemId The item's unique identifier
* @throws GetItemHttpError
*/
async function getItem(itemId, options) {
	return invokeFetch("items", {
		method: "get",
		pathTemplate: "/api/v1/items/{itemId}",
		pathVariables: { itemId },
		options
	});
}
/**
* Updates an item. Omitted and unsupported fields are ignored. To unset a field, provide the field's zero value.
*
* @param itemId The item's unique identifier.
* @param body an object with the body content
* @throws UpdateItemHttpError
*/
async function updateItem(itemId, body, options) {
	return invokeFetch("items", {
		method: "put",
		pathTemplate: "/api/v1/items/{itemId}",
		pathVariables: { itemId },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Finds and returns the collections (and tags) of an item. This endpoint does not return the user's favorites collection.
*
* @param itemId The item's unique identifier.
* @param query an object with query parameters
* @throws GetItemCollectionsHttpError
*/
async function getItemCollections(itemId, query, options) {
	return invokeFetch("items", {
		method: "get",
		pathTemplate: "/api/v1/items/{itemId}/collections",
		pathVariables: { itemId },
		query,
		options
	});
}
/**
* Finds and returns the published items for a given item. This endpoint is particularly useful for finding the published copies of an app or a qvapp when you want to replace the content of a published copy with new information from the source item.
*
* @param itemId The item's unique identifier
* @param query an object with query parameters
* @throws GetPublishedItemsHttpError
*/
async function getPublishedItems(itemId, query, options) {
	return invokeFetch("items", {
		method: "get",
		pathTemplate: "/api/v1/items/{itemId}/publisheditems",
		pathVariables: { itemId },
		query,
		options
	});
}
/**
* Clears the cache for items api requests.
*/
function clearCache() {
	return clearApiCache("items");
}
/**
* Functions for the items api
*/
const itemsExport = {
	getItems,
	getItemsSettings,
	patchItemsSettings,
	deleteItem,
	getItem,
	updateItem,
	getItemCollections,
	getPublishedItems,
	clearCache
};
var items_default = itemsExport;

//#endregion
export { clearCache, items_default as default, deleteItem, getItem, getItemCollections, getItems, getItemsSettings, getPublishedItems, patchItemsSettings, updateItem };