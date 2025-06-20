import {
  clearApiCache,
  invokeFetch
} from "./chunks/P6F6QA4Y.js";
import "./chunks/DN5SVV4X.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/glossaries.ts
async function getGlossaries(query, options) {
  return invokeFetch("glossaries", {
    method: "get",
    pathTemplate: "/api/v1/glossaries",
    query,
    options
  });
}
async function createGlossary(body, options) {
  return invokeFetch("glossaries", {
    method: "post",
    pathTemplate: "/api/v1/glossaries",
    body,
    contentType: "application/json",
    options
  });
}
async function importGlossary(query, body, options) {
  return invokeFetch("glossaries", {
    method: "post",
    pathTemplate: "/api/v1/glossaries/actions/import",
    query,
    body,
    contentType: "application/json",
    options
  });
}
async function deleteGlossary(id, options) {
  return invokeFetch("glossaries", {
    method: "delete",
    pathTemplate: "/api/v1/glossaries/{id}",
    pathVariables: { id },
    options
  });
}
async function getGlossary(id, options) {
  return invokeFetch("glossaries", {
    method: "get",
    pathTemplate: "/api/v1/glossaries/{id}",
    pathVariables: { id },
    options
  });
}
async function patchGlossary(id, body, options) {
  return invokeFetch("glossaries", {
    method: "patch",
    pathTemplate: "/api/v1/glossaries/{id}",
    pathVariables: { id },
    body,
    contentType: "application/json",
    options
  });
}
async function updateGlossary(id, body, options) {
  return invokeFetch("glossaries", {
    method: "put",
    pathTemplate: "/api/v1/glossaries/{id}",
    pathVariables: { id },
    body,
    contentType: "application/json",
    options
  });
}
async function exportGlossary(id, options) {
  return invokeFetch("glossaries", {
    method: "get",
    pathTemplate: "/api/v1/glossaries/{id}/actions/export",
    pathVariables: { id },
    options
  });
}
async function getGlossaryCategories(id, query, options) {
  return invokeFetch("glossaries", {
    method: "get",
    pathTemplate: "/api/v1/glossaries/{id}/categories",
    pathVariables: { id },
    query,
    options
  });
}
async function createGlossaryCategory(id, body, options) {
  return invokeFetch("glossaries", {
    method: "post",
    pathTemplate: "/api/v1/glossaries/{id}/categories",
    pathVariables: { id },
    body,
    contentType: "application/json",
    options
  });
}
async function deleteGlossaryCategory(id, categoryId, options) {
  return invokeFetch("glossaries", {
    method: "delete",
    pathTemplate: "/api/v1/glossaries/{id}/categories/{categoryId}",
    pathVariables: { id, categoryId },
    options
  });
}
async function getGlossaryCategory(id, categoryId, options) {
  return invokeFetch("glossaries", {
    method: "get",
    pathTemplate: "/api/v1/glossaries/{id}/categories/{categoryId}",
    pathVariables: { id, categoryId },
    options
  });
}
async function patchGlossaryCategory(id, categoryId, body, options) {
  return invokeFetch("glossaries", {
    method: "patch",
    pathTemplate: "/api/v1/glossaries/{id}/categories/{categoryId}",
    pathVariables: { id, categoryId },
    body,
    contentType: "application/json",
    options
  });
}
async function updateGlossaryCategory(id, categoryId, body, options) {
  return invokeFetch("glossaries", {
    method: "put",
    pathTemplate: "/api/v1/glossaries/{id}/categories/{categoryId}",
    pathVariables: { id, categoryId },
    body,
    contentType: "application/json",
    options
  });
}
async function getGlossaryTerms(id, query, options) {
  return invokeFetch("glossaries", {
    method: "get",
    pathTemplate: "/api/v1/glossaries/{id}/terms",
    pathVariables: { id },
    query,
    options
  });
}
async function createGlossaryTerm(id, body, options) {
  return invokeFetch("glossaries", {
    method: "post",
    pathTemplate: "/api/v1/glossaries/{id}/terms",
    pathVariables: { id },
    body,
    contentType: "application/json",
    options
  });
}
async function deleteGlossaryTerm(id, termId, options) {
  return invokeFetch("glossaries", {
    method: "delete",
    pathTemplate: "/api/v1/glossaries/{id}/terms/{termId}",
    pathVariables: { id, termId },
    options
  });
}
async function getGlossaryTerm(id, termId, options) {
  return invokeFetch("glossaries", {
    method: "get",
    pathTemplate: "/api/v1/glossaries/{id}/terms/{termId}",
    pathVariables: { id, termId },
    options
  });
}
async function patchGlossaryTerm(id, termId, body, options) {
  return invokeFetch("glossaries", {
    method: "patch",
    pathTemplate: "/api/v1/glossaries/{id}/terms/{termId}",
    pathVariables: { id, termId },
    body,
    contentType: "application/json",
    options
  });
}
async function updateGlossaryTerm(id, termId, body, options) {
  return invokeFetch("glossaries", {
    method: "put",
    pathTemplate: "/api/v1/glossaries/{id}/terms/{termId}",
    pathVariables: { id, termId },
    body,
    contentType: "application/json",
    options
  });
}
async function changeGlossaryTermStatus(id, termId, query, options) {
  return invokeFetch("glossaries", {
    method: "post",
    pathTemplate: "/api/v1/glossaries/{id}/terms/{termId}/actions/change-status",
    pathVariables: { id, termId },
    query,
    options
  });
}
async function getGlossaryTermLinks(id, termId, query, options) {
  return invokeFetch("glossaries", {
    method: "get",
    pathTemplate: "/api/v1/glossaries/{id}/terms/{termId}/links",
    pathVariables: { id, termId },
    query,
    options
  });
}
async function createGlossaryTermLink(id, termId, body, options) {
  return invokeFetch("glossaries", {
    method: "post",
    pathTemplate: "/api/v1/glossaries/{id}/terms/{termId}/links",
    pathVariables: { id, termId },
    body,
    contentType: "application/json",
    options
  });
}
async function getGlossaryTermRevisions(id, termId, query, options) {
  return invokeFetch("glossaries", {
    method: "get",
    pathTemplate: "/api/v1/glossaries/{id}/terms/{termId}/revisions",
    pathVariables: { id, termId },
    query,
    options
  });
}
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
