"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _TH75GYUYjs = require('./chunks/TH75GYUY.js');
require('./chunks/SEXEAWEC.js');
require('./chunks/4HB3TAEO.js');

// src/public/rest/collections.ts
var getCollections = async (query, options) => _TH75GYUYjs.invokeFetch.call(void 0, "collections", {
  method: "get",
  pathTemplate: "/api/v1/collections",
  query,
  options
});
var createCollection = async (body, options) => _TH75GYUYjs.invokeFetch.call(void 0, "collections", {
  method: "post",
  pathTemplate: "/api/v1/collections",
  body,
  contentType: "application/json",
  options
});
var getFavoritesCollection = async (options) => _TH75GYUYjs.invokeFetch.call(void 0, "collections", {
  method: "get",
  pathTemplate: "/api/v1/collections/favorites",
  options
});
var deleteCollection = async (collectionId, options) => _TH75GYUYjs.invokeFetch.call(void 0, "collections", {
  method: "delete",
  pathTemplate: "/api/v1/collections/{collectionId}",
  pathVariables: { collectionId },
  options
});
var getCollection = async (collectionId, options) => _TH75GYUYjs.invokeFetch.call(void 0, "collections", {
  method: "get",
  pathTemplate: "/api/v1/collections/{collectionId}",
  pathVariables: { collectionId },
  options
});
var patchCollection = async (collectionId, body, options) => _TH75GYUYjs.invokeFetch.call(void 0, "collections", {
  method: "patch",
  pathTemplate: "/api/v1/collections/{collectionId}",
  pathVariables: { collectionId },
  body,
  contentType: "application/json",
  options
});
var updateCollection = async (collectionId, body, options) => _TH75GYUYjs.invokeFetch.call(void 0, "collections", {
  method: "put",
  pathTemplate: "/api/v1/collections/{collectionId}",
  pathVariables: { collectionId },
  body,
  contentType: "application/json",
  options
});
var getCollectionItems = async (collectionId, query, options) => _TH75GYUYjs.invokeFetch.call(void 0, "collections", {
  method: "get",
  pathTemplate: "/api/v1/collections/{collectionId}/items",
  pathVariables: { collectionId },
  query,
  options
});
var addCollectionItem = async (collectionId, body, options) => _TH75GYUYjs.invokeFetch.call(void 0, "collections", {
  method: "post",
  pathTemplate: "/api/v1/collections/{collectionId}/items",
  pathVariables: { collectionId },
  body,
  contentType: "application/json",
  options
});
var deleteCollectionItem = async (collectionId, itemId, options) => _TH75GYUYjs.invokeFetch.call(void 0, "collections", {
  method: "delete",
  pathTemplate: "/api/v1/collections/{collectionId}/items/{itemId}",
  pathVariables: { collectionId, itemId },
  options
});
var getCollectionItem = async (collectionId, itemId, options) => _TH75GYUYjs.invokeFetch.call(void 0, "collections", {
  method: "get",
  pathTemplate: "/api/v1/collections/{collectionId}/items/{itemId}",
  pathVariables: { collectionId, itemId },
  options
});
function clearCache() {
  return _TH75GYUYjs.clearApiCache.call(void 0, "collections");
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














exports.addCollectionItem = addCollectionItem; exports.clearCache = clearCache; exports.createCollection = createCollection; exports.default = collections_default; exports.deleteCollection = deleteCollection; exports.deleteCollectionItem = deleteCollectionItem; exports.getCollection = getCollection; exports.getCollectionItem = getCollectionItem; exports.getCollectionItems = getCollectionItems; exports.getCollections = getCollections; exports.getFavoritesCollection = getFavoritesCollection; exports.patchCollection = patchCollection; exports.updateCollection = updateCollection;
