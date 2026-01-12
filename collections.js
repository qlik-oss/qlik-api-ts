import "./chunks/public-runtime-modules-C7GMbX7E.js";
import { n as invokeFetch, t as clearApiCache } from "./chunks/invoke-fetch-CBsbPeVH.js";

//#region src/public/rest/collections.ts
/**
* Retrieves the collections that the user has access to. This endpoint does not return the user's favorites collection, which can be retrieved with `/v1/collections/favorites`.
*
* @param query an object with query parameters
* @throws GetCollectionsHttpError
*/
async function getCollections(query, options) {
	return invokeFetch("collections", {
		method: "get",
		pathTemplate: "/api/v1/collections",
		query,
		options
	});
}
/**
* Creates and returns a new collection. Collections of type `public` (shown as tags in the user interface) must have unique names. Other collection types can reuse names.
*
* @param body an object with the body content
* @throws CreateCollectionHttpError
*/
async function createCollection(body, options) {
	return invokeFetch("collections", {
		method: "post",
		pathTemplate: "/api/v1/collections",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Lists the user's favorites collection.
*
* @throws GetFavoritesCollectionHttpError
*/
async function getFavoritesCollection(options) {
	return invokeFetch("collections", {
		method: "get",
		pathTemplate: "/api/v1/collections/favorites",
		options
	});
}
/**
* Deletes a collection and removes all items from the collection.
*
* @param collectionId The collection's unique identifier.
* @throws DeleteCollectionHttpError
*/
async function deleteCollection(collectionId, options) {
	return invokeFetch("collections", {
		method: "delete",
		pathTemplate: "/api/v1/collections/{collectionId}",
		pathVariables: { collectionId },
		options
	});
}
/**
* Finds and returns a collection.
*
* @param collectionId The collection's unique identifier.
* @throws GetCollectionHttpError
*/
async function getCollection(collectionId, options) {
	return invokeFetch("collections", {
		method: "get",
		pathTemplate: "/api/v1/collections/{collectionId}",
		pathVariables: { collectionId },
		options
	});
}
/**
* Updates the name, description, or type fields provided in the patch body. Can be used to publish a `private` collection as a `publicgoverned` collection by patching `/type` with `publicgoverned` once the collection contains at least 1 item. Can also be used to return a `publicgoverned` collection to `private`. Cannot be used to change between `public` (tag) and `private / publicgoverned` (collection).
*
* @param collectionId The collection's unique identifier.
* @param body an object with the body content
* @throws PatchCollectionHttpError
*/
async function patchCollection(collectionId, body, options) {
	return invokeFetch("collections", {
		method: "patch",
		pathTemplate: "/api/v1/collections/{collectionId}",
		pathVariables: { collectionId },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Updates a collection's name and description and returns the updated collection. Omitted and unsupported fields are ignored. To unset a field, provide the field's zero value.
*
* @param collectionId The collection's unique identifier.
* @param body an object with the body content
* @throws UpdateCollectionHttpError
*/
async function updateCollection(collectionId, body, options) {
	return invokeFetch("collections", {
		method: "put",
		pathTemplate: "/api/v1/collections/{collectionId}",
		pathVariables: { collectionId },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Retrieves items from a collection that the user has access to.
* 
* @param collectionId The collection's unique identifier. (This query also supports 'favorites' as the collectionID).

* @param query an object with query parameters
* @throws GetCollectionItemsHttpError
*/
async function getCollectionItems(collectionId, query, options) {
	return invokeFetch("collections", {
		method: "get",
		pathTemplate: "/api/v1/collections/{collectionId}/items",
		pathVariables: { collectionId },
		query,
		options
	});
}
/**
* Adds an item to a collection and returns the item.
*
* @param collectionId The collection's unique identifier.
* @param body an object with the body content
* @throws AddCollectionItemHttpError
*/
async function addCollectionItem(collectionId, body, options) {
	return invokeFetch("collections", {
		method: "post",
		pathTemplate: "/api/v1/collections/{collectionId}/items",
		pathVariables: { collectionId },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Removes an item from a collection.
*
* @param collectionId The collection's unique identifier.
* @param itemId The item's unique identifier.
* @throws DeleteCollectionItemHttpError
*/
async function deleteCollectionItem(collectionId, itemId, options) {
	return invokeFetch("collections", {
		method: "delete",
		pathTemplate: "/api/v1/collections/{collectionId}/items/{itemId}",
		pathVariables: {
			collectionId,
			itemId
		},
		options
	});
}
/**
* Finds and returns an item in a specific collection. See GET `/items/{id}`.
*
* @param collectionId The collection's unique identifier.
* @param itemId The item's unique identifier.
* @throws GetCollectionItemHttpError
*/
async function getCollectionItem(collectionId, itemId, options) {
	return invokeFetch("collections", {
		method: "get",
		pathTemplate: "/api/v1/collections/{collectionId}/items/{itemId}",
		pathVariables: {
			collectionId,
			itemId
		},
		options
	});
}
/**
* Clears the cache for collections api requests.
*/
function clearCache() {
	return clearApiCache("collections");
}
/**
* Functions for the collections api
*/
const collectionsExport = {
	getCollections,
	createCollection,
	getFavoritesCollection,
	deleteCollection,
	getCollection,
	patchCollection,
	updateCollection,
	getCollectionItems,
	addCollectionItem,
	deleteCollectionItem,
	getCollectionItem,
	clearCache
};
var collections_default = collectionsExport;

//#endregion
export { addCollectionItem, clearCache, createCollection, collections_default as default, deleteCollection, deleteCollectionItem, getCollection, getCollectionItem, getCollectionItems, getCollections, getFavoritesCollection, patchCollection, updateCollection };