"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _PTU5VIWSjs = require('./chunks/PTU5VIWS.js');
require('./chunks/ECGUIOPI.js');
require('./chunks/4HB3TAEO.js');

// src/public/rest/themes.ts
var getThemes = async (options) => _PTU5VIWSjs.invokeFetch.call(void 0, "themes", {
  method: "get",
  pathTemplate: "/api/v1/themes",
  options
});
var uploadTheme = async (body, options) => _PTU5VIWSjs.invokeFetch.call(void 0, "themes", {
  method: "post",
  pathTemplate: "/api/v1/themes",
  body,
  contentType: "multipart/form-data",
  options
});
var deleteTheme = async (id, options) => _PTU5VIWSjs.invokeFetch.call(void 0, "themes", {
  method: "delete",
  pathTemplate: "/api/v1/themes/{id}",
  pathVariables: { id },
  options
});
var getTheme = async (id, options) => _PTU5VIWSjs.invokeFetch.call(void 0, "themes", {
  method: "get",
  pathTemplate: "/api/v1/themes/{id}",
  pathVariables: { id },
  options
});
var patchTheme = async (id, body, options) => _PTU5VIWSjs.invokeFetch.call(void 0, "themes", {
  method: "patch",
  pathTemplate: "/api/v1/themes/{id}",
  pathVariables: { id },
  body,
  contentType: "multipart/form-data",
  options
});
var downloadTheme = async (id, options) => _PTU5VIWSjs.invokeFetch.call(void 0, "themes", {
  method: "get",
  pathTemplate: "/api/v1/themes/{id}/file",
  pathVariables: { id },
  options
});
var downloadFileFromTheme = async (id, filepath, options) => _PTU5VIWSjs.invokeFetch.call(void 0, "themes", {
  method: "get",
  pathTemplate: "/api/v1/themes/{id}/file/{filepath}",
  pathVariables: { id, filepath },
  options
});
function clearCache() {
  return _PTU5VIWSjs.clearApiCache.call(void 0, "themes");
}
var themesExport = {
  getThemes,
  uploadTheme,
  deleteTheme,
  getTheme,
  patchTheme,
  downloadTheme,
  downloadFileFromTheme,
  clearCache
};
var themes_default = themesExport;










exports.clearCache = clearCache; exports.default = themes_default; exports.deleteTheme = deleteTheme; exports.downloadFileFromTheme = downloadFileFromTheme; exports.downloadTheme = downloadTheme; exports.getTheme = getTheme; exports.getThemes = getThemes; exports.patchTheme = patchTheme; exports.uploadTheme = uploadTheme;
