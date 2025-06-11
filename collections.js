import {
  clearApiCache,
  invokeFetch
} from "./chunks/LIEZG7IM.js";
import "./chunks/GPRUNZV4.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/collections.ts
async function getCollections(query, options) {
  return invokeFetch("collections", {
    method: "get",
    pathTemplate: "/api/v1/collections",
    query,
    options
  });
}
async function createCollection(body, options) {
  return invokeFetch("collections", {
    method: "post",
    pathTemplate: "/api/v1/collections",
    body,
    contentType: "application/json",
    options
  });
}
async function getFavoritesCollection(options) {
  return invokeFetch("collections", {
    method: "get",
    pathTemplate: "/api/v1/collections/favorites",
    options
  });
}
async function deleteCollection(collectionId, options) {
  return invokeFetch("collections", {
    method: "delete",
    pathTemplate: "/api/v1/collections/{collectionId}",
    pathVariables: { collectionId },
    options
  });
}
async function getCollection(collectionId, options) {
  return invokeFetch("collections", {
    method: "get",
    pathTemplate: "/api/v1/collections/{collectionId}",
    pathVariables: { collectionId },
    options
  });
}
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
async function getCollectionItems(collectionId, query, options) {
  return invokeFetch("collections", {
    method: "get",
    pathTemplate: "/api/v1/collections/{collectionId}/items",
    pathVariables: { collectionId },
    query,
    options
  });
}
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
async function deleteCollectionItem(collectionId, itemId, options) {
  return invokeFetch("collections", {
    method: "delete",
    pathTemplate: "/api/v1/collections/{collectionId}/items/{itemId}",
    pathVariables: { collectionId, itemId },
    options
  });
}
async function getCollectionItem(collectionId, itemId, options) {
  return invokeFetch("collections", {
    method: "get",
    pathTemplate: "/api/v1/collections/{collectionId}/items/{itemId}",
    pathVariables: { collectionId, itemId },
    options
  });
}
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
