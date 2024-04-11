import {
  clearApiCache,
  invokeFetch
} from "./chunks/3M4WLVKJ.js";
import "./chunks/OM55UI47.js";

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
  contentType: "application/json",
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
var patchCollection = async (collectionId, body, options) => invokeFetch("collections", {
  method: "patch",
  pathTemplate: "/api/v1/collections/{collectionId}",
  pathVariables: { collectionId },
  body,
  contentType: "application/json",
  options
});
var updateCollection = async (collectionId, body, options) => invokeFetch("collections", {
  method: "put",
  pathTemplate: "/api/v1/collections/{collectionId}",
  pathVariables: { collectionId },
  body,
  contentType: "application/json",
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
  contentType: "application/json",
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
  patchCollection,
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
  patchCollection,
  updateCollection
};
