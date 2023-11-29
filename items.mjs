import {
  clearApiCache,
  invokeFetch
} from "./chunk-3YE7EI7I.mjs";
import "./chunk-WM7FQU2U.mjs";

// src/public/rest/items.ts
var getItems = async (query, options) => invokeFetch("items", {
  method: "get",
  pathTemplate: "/api/v1/items",
  query,
  options
});
var getItemSettings = async (options) => invokeFetch("items", {
  method: "get",
  pathTemplate: "/api/v1/items/settings",
  options
});
var patchItemSettings = async (body, options) => invokeFetch("items", {
  method: "patch",
  pathTemplate: "/api/v1/items/settings",
  body,
  options
});
var deleteItem = async (itemId, options) => invokeFetch("items", {
  method: "delete",
  pathTemplate: "/api/v1/items/{itemId}",
  pathVariables: { itemId },
  options
});
var getItem = async (itemId, options) => invokeFetch("items", {
  method: "get",
  pathTemplate: "/api/v1/items/{itemId}",
  pathVariables: { itemId },
  options
});
var updateItem = async (itemId, body, options) => invokeFetch("items", {
  method: "put",
  pathTemplate: "/api/v1/items/{itemId}",
  pathVariables: { itemId },
  body,
  options
});
var getItemCollections = async (itemId, query, options) => invokeFetch("items", {
  method: "get",
  pathTemplate: "/api/v1/items/{itemId}/collections",
  pathVariables: { itemId },
  query,
  options
});
var getPublishedItems = async (itemId, query, options) => invokeFetch("items", {
  method: "get",
  pathTemplate: "/api/v1/items/{itemId}/publisheditems",
  pathVariables: { itemId },
  query,
  options
});
function clearCache() {
  return clearApiCache("items");
}
var itemsExport = {
  getItems,
  getItemSettings,
  patchItemSettings,
  deleteItem,
  getItem,
  updateItem,
  getItemCollections,
  getPublishedItems,
  clearCache
};
var items_default = itemsExport;
export {
  clearCache,
  items_default as default,
  deleteItem,
  getItem,
  getItemCollections,
  getItemSettings,
  getItems,
  getPublishedItems,
  patchItemSettings,
  updateItem
};
