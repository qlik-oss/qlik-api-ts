import {
  clearApiCache,
  invokeFetch
} from "./chunks/LIEZG7IM.js";
import "./chunks/GPRUNZV4.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/items.ts
async function getItems(query, options) {
  return invokeFetch("items", {
    method: "get",
    pathTemplate: "/api/v1/items",
    query,
    options
  });
}
async function getItemsSettings(options) {
  return invokeFetch("items", {
    method: "get",
    pathTemplate: "/api/v1/items/settings",
    options
  });
}
async function patchItemsSettings(body, options) {
  return invokeFetch("items", {
    method: "patch",
    pathTemplate: "/api/v1/items/settings",
    body,
    contentType: "application/json",
    options
  });
}
async function deleteItem(itemId, options) {
  return invokeFetch("items", {
    method: "delete",
    pathTemplate: "/api/v1/items/{itemId}",
    pathVariables: { itemId },
    options
  });
}
async function getItem(itemId, options) {
  return invokeFetch("items", {
    method: "get",
    pathTemplate: "/api/v1/items/{itemId}",
    pathVariables: { itemId },
    options
  });
}
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
async function getItemCollections(itemId, query, options) {
  return invokeFetch("items", {
    method: "get",
    pathTemplate: "/api/v1/items/{itemId}/collections",
    pathVariables: { itemId },
    query,
    options
  });
}
async function getPublishedItems(itemId, query, options) {
  return invokeFetch("items", {
    method: "get",
    pathTemplate: "/api/v1/items/{itemId}/publisheditems",
    pathVariables: { itemId },
    query,
    options
  });
}
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
