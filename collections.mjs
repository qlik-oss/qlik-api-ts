import {
  clearApiCache,
  invokeFetch
} from "./chunk-3YE7EI7I.mjs";
import "./chunk-WM7FQU2U.mjs";

// src/public/rest/collections.ts
var getCollections = async (query, options) => invokeFetch("collections", {
  method: "get",
  pathTemplate: "/api/v1/collections",
  query,
  options
});
var createCollection = async (body, options) => invokeFetch("collections", {
  method: "post",
  pathTemplate: "/api/v1/collections",
  body,
  options
});
var getFavoritesCollection = async (options) => invokeFetch("collections", {
  method: "get",
  pathTemplate: "/api/v1/collections/favorites",
  options
});
var deleteCollection = async (collectionId, options) => invokeFetch("collections", {
  method: "delete",
  pathTemplate: "/api/v1/collections/{collectionId}",
  pathVariables: { collectionId },
  options
});
var getCollection = async (collectionId, options) => invokeFetch("collections", {
  method: "get",
  pathTemplate: "/api/v1/collections/{collectionId}",
  pathVariables: { collectionId },
  options
});
var updateCollection = async (collectionId, body, options) => invokeFetch("collections", {
  method: "put",
  pathTemplate: "/api/v1/collections/{collectionId}",
  pathVariables: { collectionId },
  body,
  options
});
var getCollectionItems = async (collectionId, query, options) => invokeFetch("collections", {
  method: "get",
  pathTemplate: "/api/v1/collections/{collectionId}/items",
  pathVariables: { collectionId },
  query,
  options
});
var addCollectionItem = async (collectionId, body, options) => invokeFetch("collections", {
  method: "post",
  pathTemplate: "/api/v1/collections/{collectionId}/items",
  pathVariables: { collectionId },
  body,
  options
});
var deleteCollectionItem = async (collectionId, itemId, options) => invokeFetch("collections", {
  method: "delete",
  pathTemplate: "/api/v1/collections/{collectionId}/items/{itemId}",
  pathVariables: { collectionId, itemId },
  options
});
var getCollectionItem = async (collectionId, itemId, options) => invokeFetch("collections", {
  method: "get",
  pathTemplate: "/api/v1/collections/{collectionId}/items/{itemId}",
  pathVariables: { collectionId, itemId },
  options
});
function clearCache() {
  return clearApiCache("collections");
}
var collectionsExport = {
  getCollections,
  createCollection,
  getFavoritesCollection,
  deleteCollection,
  getCollection,
  updateCollection,
  getCollectionItems,
  addCollectionItem,
  deleteCollectionItem,
  getCollectionItem,
  clearCache
};
var collections_default = collectionsExport;
export {
  addCollectionItem,
  clearCache,
  createCollection,
  collections_default as default,
  deleteCollection,
  deleteCollectionItem,
  getCollection,
  getCollectionItem,
  getCollectionItems,
  getCollections,
  getFavoritesCollection,
  updateCollection
};
