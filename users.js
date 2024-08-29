import {
  clearApiCache,
  invokeFetch
} from "./chunks/5W53XSXH.js";
import "./chunks/NJRTJEAQ.js";
import "./chunks/2ZQ3ZX7F.js";

// src/public/rest/users.ts
var getUsers = async (query, options) => invokeFetch("users", {
  method: "get",
  pathTemplate: "/api/v1/users",
  query,
  options
});
var createUser = async (body, options) => invokeFetch("users", {
  method: "post",
  pathTemplate: "/api/v1/users",
  body,
  contentType: "application/json",
  options
});
var countUsers = async (query, options) => invokeFetch("users", {
  method: "get",
  pathTemplate: "/api/v1/users/actions/count",
  query,
  options
});
var filterUsers = async (query, body, options) => invokeFetch("users", {
  method: "post",
  pathTemplate: "/api/v1/users/actions/filter",
  query,
  body,
  contentType: "application/json",
  options
});
var inviteUsers = async (body, options) => invokeFetch("users", {
  method: "post",
  pathTemplate: "/api/v1/users/actions/invite",
  body,
  contentType: "application/json",
  options
});
var getMyUser = async (options) => invokeFetch("users", {
  method: "get",
  pathTemplate: "/api/v1/users/me",
  options
});
var getUsersMetadata = async (options) => invokeFetch("users", {
  method: "get",
  pathTemplate: "/api/v1/users/metadata",
  options
});
var deleteUser = async (userId, options) => invokeFetch("users", {
  method: "delete",
  pathTemplate: "/api/v1/users/{userId}",
  pathVariables: { userId },
  options
});
var getUser = async (userId, query, options) => invokeFetch("users", {
  method: "get",
  pathTemplate: "/api/v1/users/{userId}",
  pathVariables: { userId },
  query,
  options
});
var patchUser = async (userId, body, options) => invokeFetch("users", {
  method: "patch",
  pathTemplate: "/api/v1/users/{userId}",
  pathVariables: { userId },
  body,
  contentType: "application/json",
  options
});
function clearCache() {
  return clearApiCache("users");
}
var usersExport = {
  getUsers,
  createUser,
  countUsers,
  filterUsers,
  inviteUsers,
  getMyUser,
  getUsersMetadata,
  deleteUser,
  getUser,
  patchUser,
  clearCache
};
var users_default = usersExport;
export {
  clearCache,
  countUsers,
  createUser,
  users_default as default,
  deleteUser,
  filterUsers,
  getMyUser,
  getUser,
  getUsers,
  getUsersMetadata,
  inviteUsers,
  patchUser
};
