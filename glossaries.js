import {
  clearApiCache,
  invokeFetch
} from "./chunks/YPJSS6I3.js";
import "./chunks/Q6IKFQRW.js";
import "./chunks/2ZQ3ZX7F.js";

// src/public/rest/glossaries.ts
var getGlossaries = async (query, options) => invokeFetch("glossaries", {
  method: "get",
  pathTemplate: "/api/v1/glossaries",
  query,
  options
});
var createGlossary = async (body, options) => invokeFetch("glossaries", {
  method: "post",
  pathTemplate: "/api/v1/glossaries",
  body,
  contentType: "application/json",
  options
});
var importGlossary = async (query, body, options) => invokeFetch("glossaries", {
  method: "post",
  pathTemplate: "/api/v1/glossaries/actions/import",
  query,
  body,
  contentType: "application/json",
  options
});
var deleteGlossary = async (id, options) => invokeFetch("glossaries", {
  method: "delete",
  pathTemplate: "/api/v1/glossaries/{id}",
  pathVariables: { id },
  options
});
var getGlossary = async (id, options) => invokeFetch("glossaries", {
  method: "get",
  pathTemplate: "/api/v1/glossaries/{id}",
  pathVariables: { id },
  options
});
var patchGlossary = async (id, body, options) => invokeFetch("glossaries", {
  method: "patch",
  pathTemplate: "/api/v1/glossaries/{id}",
  pathVariables: { id },
  body,
  contentType: "application/json",
  options
});
var updateGlossary = async (id, body, options) => invokeFetch("glossaries", {
  method: "put",
  pathTemplate: "/api/v1/glossaries/{id}",
  pathVariables: { id },
  body,
  contentType: "application/json",
  options
});
var exportGlossary = async (id, options) => invokeFetch("glossaries", {
  method: "get",
  pathTemplate: "/api/v1/glossaries/{id}/actions/export",
  pathVariables: { id },
  options
});
var getGlossaryCategories = async (id, query, options) => invokeFetch("glossaries", {
  method: "get",
  pathTemplate: "/api/v1/glossaries/{id}/categories",
  pathVariables: { id },
  query,
  options
});
var createGlossaryCategory = async (id, body, options) => invokeFetch("glossaries", {
  method: "post",
  pathTemplate: "/api/v1/glossaries/{id}/categories",
  pathVariables: { id },
  body,
  contentType: "application/json",
  options
});
var deleteGlossaryCategory = async (id, categoryId, options) => invokeFetch("glossaries", {
  method: "delete",
  pathTemplate: "/api/v1/glossaries/{id}/categories/{categoryId}",
  pathVariables: { id, categoryId },
  options
});
var getGlossaryCategory = async (id, categoryId, options) => invokeFetch("glossaries", {
  method: "get",
  pathTemplate: "/api/v1/glossaries/{id}/categories/{categoryId}",
  pathVariables: { id, categoryId },
  options
});
var patchGlossaryCategory = async (id, categoryId, body, options) => invokeFetch("glossaries", {
  method: "patch",
  pathTemplate: "/api/v1/glossaries/{id}/categories/{categoryId}",
  pathVariables: { id, categoryId },
  body,
  contentType: "application/json",
  options
});
var updateGlossaryCategory = async (id, categoryId, body, options) => invokeFetch("glossaries", {
  method: "put",
  pathTemplate: "/api/v1/glossaries/{id}/categories/{categoryId}",
  pathVariables: { id, categoryId },
  body,
  contentType: "application/json",
  options
});
var getGlossaryTerms = async (id, query, options) => invokeFetch("glossaries", {
  method: "get",
  pathTemplate: "/api/v1/glossaries/{id}/terms",
  pathVariables: { id },
  query,
  options
});
var createGlossaryTerm = async (id, body, options) => invokeFetch("glossaries", {
  method: "post",
  pathTemplate: "/api/v1/glossaries/{id}/terms",
  pathVariables: { id },
  body,
  contentType: "application/json",
  options
});
var deleteGlossaryTerm = async (id, termId, options) => invokeFetch("glossaries", {
  method: "delete",
  pathTemplate: "/api/v1/glossaries/{id}/terms/{termId}",
  pathVariables: { id, termId },
  options
});
var getGlossaryTerm = async (id, termId, options) => invokeFetch("glossaries", {
  method: "get",
  pathTemplate: "/api/v1/glossaries/{id}/terms/{termId}",
  pathVariables: { id, termId },
  options
});
var patchGlossaryTerm = async (id, termId, body, options) => invokeFetch("glossaries", {
  method: "patch",
  pathTemplate: "/api/v1/glossaries/{id}/terms/{termId}",
  pathVariables: { id, termId },
  body,
  contentType: "application/json",
  options
});
var updateGlossaryTerm = async (id, termId, body, options) => invokeFetch("glossaries", {
  method: "put",
  pathTemplate: "/api/v1/glossaries/{id}/terms/{termId}",
  pathVariables: { id, termId },
  body,
  contentType: "application/json",
  options
});
var changeGlossaryTermStatus = async (id, termId, query, options) => invokeFetch("glossaries", {
  method: "post",
  pathTemplate: "/api/v1/glossaries/{id}/terms/{termId}/actions/change-status",
  pathVariables: { id, termId },
  query,
  options
});
var getGlossaryTermLinks = async (id, termId, query, options) => invokeFetch("glossaries", {
  method: "get",
  pathTemplate: "/api/v1/glossaries/{id}/terms/{termId}/links",
  pathVariables: { id, termId },
  query,
  options
});
var createGlossaryTermLink = async (id, termId, body, options) => invokeFetch("glossaries", {
  method: "post",
  pathTemplate: "/api/v1/glossaries/{id}/terms/{termId}/links",
  pathVariables: { id, termId },
  body,
  contentType: "application/json",
  options
});
var getGlossaryTermRevisions = async (id, termId, query, options) => invokeFetch("glossaries", {
  method: "get",
  pathTemplate: "/api/v1/glossaries/{id}/terms/{termId}/revisions",
  pathVariables: { id, termId },
  query,
  options
});
function clearCache() {
  return clearApiCache("glossaries");
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
export {
  changeGlossaryTermStatus,
  clearCache,
  createGlossary,
  createGlossaryCategory,
  createGlossaryTerm,
  createGlossaryTermLink,
  glossaries_default as default,
  deleteGlossary,
  deleteGlossaryCategory,
  deleteGlossaryTerm,
  exportGlossary,
  getGlossaries,
  getGlossary,
  getGlossaryCategories,
  getGlossaryCategory,
  getGlossaryTerm,
  getGlossaryTermLinks,
  getGlossaryTermRevisions,
  getGlossaryTerms,
  importGlossary,
  patchGlossary,
  patchGlossaryCategory,
  patchGlossaryTerm,
  updateGlossary,
  updateGlossaryCategory,
  updateGlossaryTerm
};
