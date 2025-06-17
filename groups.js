import {
  clearApiCache,
  invokeFetch
} from "./chunks/BEREWEFO.js";
import "./chunks/GZ7FHV5J.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/groups.ts
async function getGroups(query, options) {
  return invokeFetch("groups", {
    method: "get",
    pathTemplate: "/api/v1/groups",
    query,
    options
  });
}
async function createGroup(body, options) {
  return invokeFetch("groups", {
    method: "post",
    pathTemplate: "/api/v1/groups",
    body,
    contentType: "application/json",
    options
  });
}
async function filterGroups(query, body, options) {
  return invokeFetch("groups", {
    method: "post",
    pathTemplate: "/api/v1/groups/actions/filter",
    query,
    body,
    contentType: "application/json",
    options
  });
}
async function getGroupsSettings(options) {
  return invokeFetch("groups", {
    method: "get",
    pathTemplate: "/api/v1/groups/settings",
    options
  });
}
async function patchGroupsSettings(body, options) {
  return invokeFetch("groups", {
    method: "patch",
    pathTemplate: "/api/v1/groups/settings",
    body,
    contentType: "application/json",
    options
  });
}
async function deleteGroup(groupId, options) {
  return invokeFetch("groups", {
    method: "delete",
    pathTemplate: "/api/v1/groups/{groupId}",
    pathVariables: { groupId },
    options
  });
}
async function getGroup(groupId, options) {
  return invokeFetch("groups", {
    method: "get",
    pathTemplate: "/api/v1/groups/{groupId}",
    pathVariables: { groupId },
    options
  });
}
async function patchGroup(groupId, body, options) {
  return invokeFetch("groups", {
    method: "patch",
    pathTemplate: "/api/v1/groups/{groupId}",
    pathVariables: { groupId },
    body,
    contentType: "application/json",
    options
  });
}
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
