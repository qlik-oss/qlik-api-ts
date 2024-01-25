"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _QMWU5E4Djs = require('./chunks/QMWU5E4D.js');
require('./chunks/FG5GDUSZ.js');
require('./chunks/4HB3TAEO.js');

// src/public/rest/roles.ts
var getRoles = async (query, options) => _QMWU5E4Djs.invokeFetch.call(void 0, "roles", {
  method: "get",
  pathTemplate: "/api/v1/roles",
  query,
  options
});
var getRole = async (id, options) => _QMWU5E4Djs.invokeFetch.call(void 0, "roles", {
  method: "get",
  pathTemplate: "/api/v1/roles/{id}",
  pathVariables: { id },
  options
});
function clearCache() {
  return _QMWU5E4Djs.clearApiCache.call(void 0, "roles");
}
var rolesExport = { getRoles, getRole, clearCache };
var roles_default = rolesExport;





exports.clearCache = clearCache; exports.default = roles_default; exports.getRole = getRole; exports.getRoles = getRoles;
