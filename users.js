"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunk6JERR27Kjs = require('./chunk-6JERR27K.js');
require('./chunk-H7SAZYEE.js');

// src/public/rest/users.ts
var getUsers = async (query, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "users", {
  method: "get",
  pathTemplate: "/api/v1/users",
  query,
  options
});
var createUser = async (body, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "users", {
  method: "post",
  pathTemplate: "/api/v1/users",
  body,
  options
});
var countUsers = async (query, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "users", {
  method: "get",
  pathTemplate: "/api/v1/users/actions/count",
  query,
  options
});
var filterUsers = async (query, body, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "users", {
  method: "post",
  pathTemplate: "/api/v1/users/actions/filter",
  query,
  body,
  options
});
var inviteUsers = async (body, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "users", {
  method: "post",
  pathTemplate: "/api/v1/users/actions/invite",
  body,
  options
});
var getMyUser = async (options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "users", {
  method: "get",
  pathTemplate: "/api/v1/users/me",
  options
});
var getUsersMetadata = async (options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "users", {
  method: "get",
  pathTemplate: "/api/v1/users/metadata",
  options
});
var deleteUser = async (userId, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "users", {
  method: "delete",
  pathTemplate: "/api/v1/users/{userId}",
  pathVariables: { userId },
  options
});
var getUser = async (userId, query, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "users", {
  method: "get",
  pathTemplate: "/api/v1/users/{userId}",
  pathVariables: { userId },
  query,
  options
});
var patchUser = async (userId, body, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "users", {
  method: "patch",
  pathTemplate: "/api/v1/users/{userId}",
  pathVariables: { userId },
  body,
  options
});
function clearCache() {
  return _chunk6JERR27Kjs.clearApiCache.call(void 0, "users");
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













exports.clearCache = clearCache; exports.countUsers = countUsers; exports.createUser = createUser; exports.default = users_default; exports.deleteUser = deleteUser; exports.filterUsers = filterUsers; exports.getMyUser = getMyUser; exports.getUser = getUser; exports.getUsers = getUsers; exports.getUsersMetadata = getUsersMetadata; exports.inviteUsers = inviteUsers; exports.patchUser = patchUser;
