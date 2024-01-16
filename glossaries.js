"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkKPCXSJ7Bjs = require('./chunk-KPCXSJ7B.js');
require('./chunk-ZXQHFWQH.js');
require('./chunk-P57PW2II.js');

// src/public/rest/glossaries.ts
var getGlossaries = async (query, options) => _chunkKPCXSJ7Bjs.invokeFetch.call(void 0, "glossaries", {
  method: "get",
  pathTemplate: "/api/v1/glossaries",
  query,
  options
});
var createGlossary = async (body, options) => _chunkKPCXSJ7Bjs.invokeFetch.call(void 0, "glossaries", {
  method: "post",
  pathTemplate: "/api/v1/glossaries",
  body,
  contentType: "application/json",
  options
});
var importGlossary = async (query, body, options) => _chunkKPCXSJ7Bjs.invokeFetch.call(void 0, "glossaries", {
  method: "post",
  pathTemplate: "/api/v1/glossaries/actions/import",
  query,
  body,
  contentType: "application/json",
  options
});
var deleteGlossary = async (id, options) => _chunkKPCXSJ7Bjs.invokeFetch.call(void 0, "glossaries", {
  method: "delete",
  pathTemplate: "/api/v1/glossaries/{id}",
  pathVariables: { id },
  options
});
var getGlossary = async (id, options) => _chunkKPCXSJ7Bjs.invokeFetch.call(void 0, "glossaries", {
  method: "get",
  pathTemplate: "/api/v1/glossaries/{id}",
  pathVariables: { id },
  options
});
var patchGlossary = async (id, body, options) => _chunkKPCXSJ7Bjs.invokeFetch.call(void 0, "glossaries", {
  method: "patch",
  pathTemplate: "/api/v1/glossaries/{id}",
  pathVariables: { id },
  body,
  contentType: "application/json",
  options
});
var updateGlossary = async (id, body, options) => _chunkKPCXSJ7Bjs.invokeFetch.call(void 0, "glossaries", {
  method: "put",
  pathTemplate: "/api/v1/glossaries/{id}",
  pathVariables: { id },
  body,
  contentType: "application/json",
  options
});
var exportGlossary = async (id, options) => _chunkKPCXSJ7Bjs.invokeFetch.call(void 0, "glossaries", {
  method: "get",
  pathTemplate: "/api/v1/glossaries/{id}/actions/export",
  pathVariables: { id },
  options
});
var getGlossaryCategories = async (id, query, options) => _chunkKPCXSJ7Bjs.invokeFetch.call(void 0, "glossaries", {
  method: "get",
  pathTemplate: "/api/v1/glossaries/{id}/categories",
  pathVariables: { id },
  query,
  options
});
var createGlossaryCategory = async (id, body, options) => _chunkKPCXSJ7Bjs.invokeFetch.call(void 0, "glossaries", {
  method: "post",
  pathTemplate: "/api/v1/glossaries/{id}/categories",
  pathVariables: { id },
  body,
  contentType: "application/json",
  options
});
var deleteGlossaryCategory = async (id, categoryId, options) => _chunkKPCXSJ7Bjs.invokeFetch.call(void 0, "glossaries", {
  method: "delete",
  pathTemplate: "/api/v1/glossaries/{id}/categories/{categoryId}",
  pathVariables: { id, categoryId },
  options
});
var getGlossaryCategory = async (id, categoryId, options) => _chunkKPCXSJ7Bjs.invokeFetch.call(void 0, "glossaries", {
  method: "get",
  pathTemplate: "/api/v1/glossaries/{id}/categories/{categoryId}",
  pathVariables: { id, categoryId },
  options
});
var patchGlossaryCategory = async (id, categoryId, body, options) => _chunkKPCXSJ7Bjs.invokeFetch.call(void 0, "glossaries", {
  method: "patch",
  pathTemplate: "/api/v1/glossaries/{id}/categories/{categoryId}",
  pathVariables: { id, categoryId },
  body,
  contentType: "application/json",
  options
});
var updateGlossaryCategory = async (id, categoryId, body, options) => _chunkKPCXSJ7Bjs.invokeFetch.call(void 0, "glossaries", {
  method: "put",
  pathTemplate: "/api/v1/glossaries/{id}/categories/{categoryId}",
  pathVariables: { id, categoryId },
  body,
  contentType: "application/json",
  options
});
var getGlossaryTerms = async (id, query, options) => _chunkKPCXSJ7Bjs.invokeFetch.call(void 0, "glossaries", {
  method: "get",
  pathTemplate: "/api/v1/glossaries/{id}/terms",
  pathVariables: { id },
  query,
  options
});
var createGlossaryTerm = async (id, body, options) => _chunkKPCXSJ7Bjs.invokeFetch.call(void 0, "glossaries", {
  method: "post",
  pathTemplate: "/api/v1/glossaries/{id}/terms",
  pathVariables: { id },
  body,
  contentType: "application/json",
  options
});
var deleteGlossaryTerm = async (id, termId, options) => _chunkKPCXSJ7Bjs.invokeFetch.call(void 0, "glossaries", {
  method: "delete",
  pathTemplate: "/api/v1/glossaries/{id}/terms/{termId}",
  pathVariables: { id, termId },
  options
});
var getGlossaryTerm = async (id, termId, options) => _chunkKPCXSJ7Bjs.invokeFetch.call(void 0, "glossaries", {
  method: "get",
  pathTemplate: "/api/v1/glossaries/{id}/terms/{termId}",
  pathVariables: { id, termId },
  options
});
var patchGlossaryTerm = async (id, termId, body, options) => _chunkKPCXSJ7Bjs.invokeFetch.call(void 0, "glossaries", {
  method: "patch",
  pathTemplate: "/api/v1/glossaries/{id}/terms/{termId}",
  pathVariables: { id, termId },
  body,
  contentType: "application/json",
  options
});
var updateGlossaryTerm = async (id, termId, body, options) => _chunkKPCXSJ7Bjs.invokeFetch.call(void 0, "glossaries", {
  method: "put",
  pathTemplate: "/api/v1/glossaries/{id}/terms/{termId}",
  pathVariables: { id, termId },
  body,
  contentType: "application/json",
  options
});
var changeGlossaryTermStatus = async (id, termId, query, options) => _chunkKPCXSJ7Bjs.invokeFetch.call(void 0, "glossaries", {
  method: "post",
  pathTemplate: "/api/v1/glossaries/{id}/terms/{termId}/actions/change-status",
  pathVariables: { id, termId },
  query,
  options
});
var getGlossaryTermLinks = async (id, termId, query, options) => _chunkKPCXSJ7Bjs.invokeFetch.call(void 0, "glossaries", {
  method: "get",
  pathTemplate: "/api/v1/glossaries/{id}/terms/{termId}/links",
  pathVariables: { id, termId },
  query,
  options
});
var createGlossaryTermLink = async (id, termId, body, options) => _chunkKPCXSJ7Bjs.invokeFetch.call(void 0, "glossaries", {
  method: "post",
  pathTemplate: "/api/v1/glossaries/{id}/terms/{termId}/links",
  pathVariables: { id, termId },
  body,
  contentType: "application/json",
  options
});
var getGlossaryTermRevisions = async (id, termId, query, options) => _chunkKPCXSJ7Bjs.invokeFetch.call(void 0, "glossaries", {
  method: "get",
  pathTemplate: "/api/v1/glossaries/{id}/terms/{termId}/revisions",
  pathVariables: { id, termId },
  query,
  options
});
function clearCache() {
  return _chunkKPCXSJ7Bjs.clearApiCache.call(void 0, "glossaries");
}
var glossariesExport = {
  getGlossaries,
  createGlossary,
  importGlossary,
  deleteGlossary,
  getGlossary,
  patchGlossary,
  updateGlossary,
  exportGlossary,
  getGlossaryCategories,
  createGlossaryCategory,
  deleteGlossaryCategory,
  getGlossaryCategory,
  patchGlossaryCategory,
  updateGlossaryCategory,
  getGlossaryTerms,
  createGlossaryTerm,
  deleteGlossaryTerm,
  getGlossaryTerm,
  patchGlossaryTerm,
  updateGlossaryTerm,
  changeGlossaryTermStatus,
  getGlossaryTermLinks,
  createGlossaryTermLink,
  getGlossaryTermRevisions,
  clearCache
};
var glossaries_default = glossariesExport;



























exports.changeGlossaryTermStatus = changeGlossaryTermStatus; exports.clearCache = clearCache; exports.createGlossary = createGlossary; exports.createGlossaryCategory = createGlossaryCategory; exports.createGlossaryTerm = createGlossaryTerm; exports.createGlossaryTermLink = createGlossaryTermLink; exports.default = glossaries_default; exports.deleteGlossary = deleteGlossary; exports.deleteGlossaryCategory = deleteGlossaryCategory; exports.deleteGlossaryTerm = deleteGlossaryTerm; exports.exportGlossary = exportGlossary; exports.getGlossaries = getGlossaries; exports.getGlossary = getGlossary; exports.getGlossaryCategories = getGlossaryCategories; exports.getGlossaryCategory = getGlossaryCategory; exports.getGlossaryTerm = getGlossaryTerm; exports.getGlossaryTermLinks = getGlossaryTermLinks; exports.getGlossaryTermRevisions = getGlossaryTermRevisions; exports.getGlossaryTerms = getGlossaryTerms; exports.importGlossary = importGlossary; exports.patchGlossary = patchGlossary; exports.patchGlossaryCategory = patchGlossaryCategory; exports.patchGlossaryTerm = patchGlossaryTerm; exports.updateGlossary = updateGlossary; exports.updateGlossaryCategory = updateGlossaryCategory; exports.updateGlossaryTerm = updateGlossaryTerm;
