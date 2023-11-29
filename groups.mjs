import {
  clearApiCache,
  invokeFetch
} from "./chunk-3YE7EI7I.mjs";
import "./chunk-WM7FQU2U.mjs";

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
  options
});
var filterGroups = async (query, body, options) => invokeFetch("groups", {
  method: "post",
  pathTemplate: "/api/v1/groups/actions/filter",
  query,
  body,
  options
});
var getGroupSettings = async (options) => invokeFetch("groups", {
  method: "get",
  pathTemplate: "/api/v1/groups/settings",
  options
});
var patchGroupSettings = async (body, options) => invokeFetch("groups", {
  method: "patch",
  pathTemplate: "/api/v1/groups/settings",
  body,
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
  options
});
function clearCache() {
  return clearApiCache("groups");
}
var groupsExport = {
  getGroups,
  createGroup,
  filterGroups,
  getGroupSettings,
  patchGroupSettings,
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
  getGroupSettings,
  getGroups,
  patchGroup,
  patchGroupSettings
};
