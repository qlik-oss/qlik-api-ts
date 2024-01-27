"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _NZ6E5ZHOjs = require('./chunks/NZ6E5ZHO.js');
require('./chunks/NBNOAZT5.js');
require('./chunks/4HB3TAEO.js');

// src/public/rest/items.ts
var getItems = async (query, options) => _NZ6E5ZHOjs.invokeFetch.call(void 0, "items", {
  method: "get",
  pathTemplate: "/api/v1/items",
  query,
  options
});
var getItemsSettings = async (options) => _NZ6E5ZHOjs.invokeFetch.call(void 0, "items", {
  method: "get",
  pathTemplate: "/api/v1/items/settings",
  options
});
var patchItemsSettings = async (body, options) => _NZ6E5ZHOjs.invokeFetch.call(void 0, "items", {
  method: "patch",
  pathTemplate: "/api/v1/items/settings",
  body,
  contentType: "application/json",
  options
});
var deleteItem = async (itemId, options) => _NZ6E5ZHOjs.invokeFetch.call(void 0, "items", {
  method: "delete",
  pathTemplate: "/api/v1/items/{itemId}",
  pathVariables: { itemId },
  options
});
var getItem = async (itemId, options) => _NZ6E5ZHOjs.invokeFetch.call(void 0, "items", {
  method: "get",
  pathTemplate: "/api/v1/items/{itemId}",
  pathVariables: { itemId },
  options
});
var updateItem = async (itemId, body, options) => _NZ6E5ZHOjs.invokeFetch.call(void 0, "items", {
  method: "put",
  pathTemplate: "/api/v1/items/{itemId}",
  pathVariables: { itemId },
  body,
  contentType: "application/json",
  options
});
var getItemCollections = async (itemId, query, options) => _NZ6E5ZHOjs.invokeFetch.call(void 0, "items", {
  method: "get",
  pathTemplate: "/api/v1/items/{itemId}/collections",
  pathVariables: { itemId },
  query,
  options
});
var getPublishedItems = async (itemId, query, options) => _NZ6E5ZHOjs.invokeFetch.call(void 0, "items", {
  method: "get",
  pathTemplate: "/api/v1/items/{itemId}/publisheditems",
  pathVariables: { itemId },
  query,
  options
});
function clearCache() {
  return _NZ6E5ZHOjs.clearApiCache.call(void 0, "items");
}
var itemsExport = {
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











exports.clearCache = clearCache; exports.default = items_default; exports.deleteItem = deleteItem; exports.getItem = getItem; exports.getItemCollections = getItemCollections; exports.getItems = getItems; exports.getItemsSettings = getItemsSettings; exports.getPublishedItems = getPublishedItems; exports.patchItemsSettings = patchItemsSettings; exports.updateItem = updateItem;
