import {
  clearApiCache,
  invokeFetch
} from "./chunks/3M4WLVKJ.js";
import "./chunks/OM55UI47.js";

// src/public/rest/items.ts
var getItems = async (query, options) => invokeFetch("items", {
  method: "get",
  pathTemplate: "/api/v1/items",
  query,
  options
});
var getItemsSettings = async (options) => invokeFetch("items", {
  method: "get",
  pathTemplate: "/api/v1/items/settings",
  options
});
var patchItemsSettings = async (body, options) => invokeFetch("items", {
  method: "patch",
  pathTemplate: "/api/v1/items/settings",
  body,
  contentType: "application/json",
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
  contentType: "application/json",
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
export {
  clearCache,
  items_default as default,
  deleteItem,
  getItem,
  getItemCollections,
  getItems,
  getItemsSettings,
  getPublishedItems,
  patchItemsSettings,
  updateItem
};
