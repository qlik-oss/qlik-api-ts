"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunk6JERR27Kjs = require('./chunk-6JERR27K.js');
require('./chunk-H7SAZYEE.js');

// src/public/rest/themes.ts
var getThemes = async (options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "themes", {
  method: "get",
  pathTemplate: "/api/v1/themes",
  options
});
var uploadTheme = async (body, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "themes", {
  method: "post",
  pathTemplate: "/api/v1/themes",
  body,
  options
});
var deleteTheme = async (id, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "themes", {
  method: "delete",
  pathTemplate: "/api/v1/themes/{id}",
  pathVariables: { id },
  options
});
var getTheme = async (id, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "themes", {
  method: "get",
  pathTemplate: "/api/v1/themes/{id}",
  pathVariables: { id },
  options
});
var patchTheme = async (id, body, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "themes", {
  method: "patch",
  pathTemplate: "/api/v1/themes/{id}",
  pathVariables: { id },
  body,
  options
});
var downloadTheme = async (id, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "themes", {
  method: "get",
  pathTemplate: "/api/v1/themes/{id}/file",
  pathVariables: { id },
  options
});
var downloadFileFromTheme = async (id, filepath, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "themes", {
  method: "get",
  pathTemplate: "/api/v1/themes/{id}/file/{filepath}",
  pathVariables: { id, filepath },
  options
});
function clearCache() {
  return _chunk6JERR27Kjs.clearApiCache.call(void 0, "themes");
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
