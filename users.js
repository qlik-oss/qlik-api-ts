"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _TH75GYUYjs = require('./chunks/TH75GYUY.js');
require('./chunks/SEXEAWEC.js');
require('./chunks/4HB3TAEO.js');

// src/public/rest/users.ts
var getUsers = async (query, options) => _TH75GYUYjs.invokeFetch.call(void 0, "users", {
  method: "get",
  pathTemplate: "/api/v1/users",
  query,
  options
});
var createUser = async (body, options) => _TH75GYUYjs.invokeFetch.call(void 0, "users", {
  method: "post",
  pathTemplate: "/api/v1/users",
  body,
  contentType: "application/json",
  options
});
var countUsers = async (query, options) => _TH75GYUYjs.invokeFetch.call(void 0, "users", {
  method: "get",
  pathTemplate: "/api/v1/users/actions/count",
  query,
  options
});
var filterUsers = async (query, body, options) => _TH75GYUYjs.invokeFetch.call(void 0, "users", {
  method: "post",
  pathTemplate: "/api/v1/users/actions/filter",
  query,
  body,
  contentType: "application/json",
  options
});
var inviteUsers = async (body, options) => _TH75GYUYjs.invokeFetch.call(void 0, "users", {
  method: "post",
  pathTemplate: "/api/v1/users/actions/invite",
  body,
  contentType: "application/json",
  options
});
var getMyUser = async (options) => _TH75GYUYjs.invokeFetch.call(void 0, "users", {
  method: "get",
  pathTemplate: "/api/v1/users/me",
  options
});
var getUsersMetadata = async (options) => _TH75GYUYjs.invokeFetch.call(void 0, "users", {
  method: "get",
  pathTemplate: "/api/v1/users/metadata",
  options
});
var deleteUser = async (userId, options) => _TH75GYUYjs.invokeFetch.call(void 0, "users", {
  method: "delete",
  pathTemplate: "/api/v1/users/{userId}",
  pathVariables: { userId },
  options
});
var getUser = async (userId, query, options) => _TH75GYUYjs.invokeFetch.call(void 0, "users", {
  method: "get",
  pathTemplate: "/api/v1/users/{userId}",
  pathVariables: { userId },
  query,
  options
});
var patchUser = async (userId, body, options) => _TH75GYUYjs.invokeFetch.call(void 0, "users", {
  method: "patch",
  pathTemplate: "/api/v1/users/{userId}",
  pathVariables: { userId },
  body,
  contentType: "application/json",
  options
});
function clearCache() {
  return _TH75GYUYjs.clearApiCache.call(void 0, "users");
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
