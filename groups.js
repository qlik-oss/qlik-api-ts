import {
  clearApiCache,
  invokeFetch
} from "./chunks/QXDBGF7B.js";
import "./chunks/7C6WMELW.js";
import "./chunks/2ZQ3ZX7F.js";

// src/public/rest/groups.ts
var getGroups = async (query, options) => invokeFetch("groups", {
  method: "get",
  pathTemplate: "/api/v1/groups",
  query,
  options
});
var createGroup = async (body, options) => invokeFetch("groups", {
  method: "post",
  pathTemplate: "/api/v1/groups",
  body,
  contentType: "application/json",
  options
});
var filterGroups = async (query, body, options) => invokeFetch("groups", {
  method: "post",
  pathTemplate: "/api/v1/groups/actions/filter",
  query,
  body,
  contentType: "application/json",
  options
});
var getGroupsSettings = async (options) => invokeFetch("groups", {
  method: "get",
  pathTemplate: "/api/v1/groups/settings",
  options
});
var patchGroupsSettings = async (body, options) => invokeFetch("groups", {
  method: "patch",
  pathTemplate: "/api/v1/groups/settings",
  body,
  contentType: "application/json",
  options
});
var deleteGroup = async (groupId, options) => invokeFetch("groups", {
  method: "delete",
  pathTemplate: "/api/v1/groups/{groupId}",
  pathVariables: { groupId },
  options
});
var getGroup = async (groupId, options) => invokeFetch("groups", {
  method: "get",
  pathTemplate: "/api/v1/groups/{groupId}",
  pathVariables: { groupId },
  options
});
var patchGroup = async (groupId, body, options) => invokeFetch("groups", {
  method: "patch",
  pathTemplate: "/api/v1/groups/{groupId}",
  pathVariables: { groupId },
  body,
  contentType: "application/json",
  options
});
function clearCache() {
  return clearApiCache("groups");
}
var groupsExport = {
  getGroups,
  createGroup,
  filterGroups,
  getGroupsSettings,
  patchGroupsSettings,
  deleteGroup,
  getGroup,
  patchGroup,
  clearCache
};
var groups_default = groupsExport;
export {
  clearCache,
  createGroup,
  groups_default as default,
  deleteGroup,
  filterGroups,
  getGroup,
  getGroups,
  getGroupsSettings,
  patchGroup,
  patchGroupsSettings
};
