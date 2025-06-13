import {
  clearApiCache,
  invokeFetch
} from "./chunks/6WNP7HZQ.js";
import "./chunks/QAOVZB27.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/themes.ts
async function getThemes(options) {
  return invokeFetch("themes", {
    method: "get",
    pathTemplate: "/api/v1/themes",
    options
  });
}
async function uploadTheme(body, options) {
  return invokeFetch("themes", {
    method: "post",
    pathTemplate: "/api/v1/themes",
    body,
    contentType: "multipart/form-data",
    options
  });
}
async function deleteTheme(id, options) {
  return invokeFetch("themes", {
    method: "delete",
    pathTemplate: "/api/v1/themes/{id}",
    pathVariables: { id },
    options
  });
}
async function getTheme(id, options) {
  return invokeFetch("themes", {
    method: "get",
    pathTemplate: "/api/v1/themes/{id}",
    pathVariables: { id },
    options
  });
}
async function patchTheme(id, body, options) {
  return invokeFetch("themes", {
    method: "patch",
    pathTemplate: "/api/v1/themes/{id}",
    pathVariables: { id },
    body,
    contentType: "multipart/form-data",
    options
  });
}
async function downloadTheme(id, options) {
  return invokeFetch("themes", {
    method: "get",
    pathTemplate: "/api/v1/themes/{id}/file",
    pathVariables: { id },
    options
  });
}
async function downloadFileFromTheme(id, filepath, options) {
  return invokeFetch("themes", {
    method: "get",
    pathTemplate: "/api/v1/themes/{id}/file/{filepath}",
    pathVariables: { id, filepath },
    options
  });
}
function clearCache() {
  return clearApiCache("themes");
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
export {
  clearCache,
  themes_default as default,
  deleteTheme,
  downloadFileFromTheme,
  downloadTheme,
  getTheme,
  getThemes,
  patchTheme,
  uploadTheme
};
