"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _PTU5VIWSjs = require('./chunks/PTU5VIWS.js');
require('./chunks/ECGUIOPI.js');
require('./chunks/4HB3TAEO.js');

// src/public/rest/roles.ts
var getRoles = async (query, options) => _PTU5VIWSjs.invokeFetch.call(void 0, "roles", {
  method: "get",
  pathTemplate: "/api/v1/roles",
  query,
  options
});
var getRole = async (id, options) => _PTU5VIWSjs.invokeFetch.call(void 0, "roles", {
  method: "get",
  pathTemplate: "/api/v1/roles/{id}",
  pathVariables: { id },
  options
});
function clearCache() {
  return _PTU5VIWSjs.clearApiCache.call(void 0, "roles");
}
var rolesExport = { getRoles, getRole, clearCache };
var roles_default = rolesExport;





exports.clearCache = clearCache; exports.default = roles_default; exports.getRole = getRole; exports.getRoles = getRoles;
