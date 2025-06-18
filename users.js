import {
  clearApiCache,
  invokeFetch
} from "./chunks/NPB36P3M.js";
import "./chunks/L5QSVLDQ.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/users.ts
async function getUsers(query, options) {
  return invokeFetch("users", {
    method: "get",
    pathTemplate: "/api/v1/users",
    query,
    options
  });
}
async function createUser(body, options) {
  return invokeFetch("users", {
    method: "post",
    pathTemplate: "/api/v1/users",
    body,
    contentType: "application/json",
    options
  });
}
async function countUsers(query, options) {
  return invokeFetch("users", {
    method: "get",
    pathTemplate: "/api/v1/users/actions/count",
    query,
    options
  });
}
async function filterUsers(query, body, options) {
  return invokeFetch("users", {
    method: "post",
    pathTemplate: "/api/v1/users/actions/filter",
    query,
    body,
    contentType: "application/json",
    options
  });
}
async function inviteUsers(body, options) {
  return invokeFetch("users", {
    method: "post",
    pathTemplate: "/api/v1/users/actions/invite",
    body,
    contentType: "application/json",
    options
  });
}
async function getMyUser(options) {
  return invokeFetch("users", {
    method: "get",
    pathTemplate: "/api/v1/users/me",
    options
  });
}
async function deleteUser(userId, options) {
  return invokeFetch("users", {
    method: "delete",
    pathTemplate: "/api/v1/users/{userId}",
    pathVariables: { userId },
    options
  });
}
async function getUser(userId, query, options) {
  return invokeFetch("users", {
    method: "get",
    pathTemplate: "/api/v1/users/{userId}",
    pathVariables: { userId },
    query,
    options
  });
}
async function patchUser(userId, body, options) {
  return invokeFetch("users", {
    method: "patch",
    pathTemplate: "/api/v1/users/{userId}",
    pathVariables: { userId },
    body,
    contentType: "application/json",
    options
  });
}
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
  inviteUsers,
  patchUser
};
