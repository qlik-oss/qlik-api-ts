"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunk6JERR27Kjs = require('./chunk-6JERR27K.js');
require('./chunk-H7SAZYEE.js');

// src/public/rest/brands.ts
var getBrands = async (query, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "brands", {
  method: "get",
  pathTemplate: "/api/v1/brands",
  query,
  options
});
var createBrand = async (body, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "brands", {
  method: "post",
  pathTemplate: "/api/v1/brands",
  body,
  options
});
var getActiveBrand = async (options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "brands", {
  method: "get",
  pathTemplate: "/api/v1/brands/active",
  options
});
var deleteBrand = async (brandId, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "brands", {
  method: "delete",
  pathTemplate: "/api/v1/brands/{brand-id}",
  pathVariables: { "brand-id": brandId },
  options
});
var getBrand = async (brandId, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "brands", {
  method: "get",
  pathTemplate: "/api/v1/brands/{brand-id}",
  pathVariables: { "brand-id": brandId },
  options
});
var patchBrand = async (brandId, body, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "brands", {
  method: "patch",
  pathTemplate: "/api/v1/brands/{brand-id}",
  pathVariables: { "brand-id": brandId },
  body,
  options
});
var activateBrand = async (brandId, body, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "brands", {
  method: "post",
  pathTemplate: "/api/v1/brands/{brand-id}/actions/activate",
  pathVariables: { "brand-id": brandId },
  body,
  options
});
var deactivateBrand = async (brandId, body, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "brands", {
  method: "post",
  pathTemplate: "/api/v1/brands/{brand-id}/actions/deactivate",
  pathVariables: { "brand-id": brandId },
  body,
  options
});
var deleteBrandFile = async (brandId, brandFileId, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "brands", {
  method: "delete",
  pathTemplate: "/api/v1/brands/{brand-id}/files/{brand-file-id}",
  pathVariables: { "brand-id": brandId, "brand-file-id": brandFileId },
  options
});
var getBrandFile = async (brandId, brandFileId, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "brands", {
  method: "get",
  pathTemplate: "/api/v1/brands/{brand-id}/files/{brand-file-id}",
  pathVariables: { "brand-id": brandId, "brand-file-id": brandFileId },
  options
});
var createBrandFile = async (brandId, brandFileId, body, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "brands", {
  method: "post",
  pathTemplate: "/api/v1/brands/{brand-id}/files/{brand-file-id}",
  pathVariables: { "brand-id": brandId, "brand-file-id": brandFileId },
  body,
  options
});
var updateBrandFile = async (brandId, brandFileId, body, options) => _chunk6JERR27Kjs.invokeFetch.call(void 0, "brands", {
  method: "put",
  pathTemplate: "/api/v1/brands/{brand-id}/files/{brand-file-id}",
  pathVariables: { "brand-id": brandId, "brand-file-id": brandFileId },
  body,
  options
});
function clearCache() {
  return _chunk6JERR27Kjs.clearApiCache.call(void 0, "brands");
}
var brandsExport = {
  getBrands,
  createBrand,
  getActiveBrand,
  deleteBrand,
  getBrand,
  patchBrand,
  activateBrand,
  deactivateBrand,
  deleteBrandFile,
  getBrandFile,
  createBrandFile,
  updateBrandFile,
  clearCache
};
var brands_default = brandsExport;















exports.activateBrand = activateBrand; exports.clearCache = clearCache; exports.createBrand = createBrand; exports.createBrandFile = createBrandFile; exports.deactivateBrand = deactivateBrand; exports.default = brands_default; exports.deleteBrand = deleteBrand; exports.deleteBrandFile = deleteBrandFile; exports.getActiveBrand = getActiveBrand; exports.getBrand = getBrand; exports.getBrandFile = getBrandFile; exports.getBrands = getBrands; exports.patchBrand = patchBrand; exports.updateBrandFile = updateBrandFile;
