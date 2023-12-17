"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkWA4O4PMUjs = require('./chunk-WA4O4PMU.js');
require('./chunk-L4SFSITJ.js');

// src/public/rest/brands.ts
var getBrands = async (query, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "brands", {
  method: "get",
  pathTemplate: "/api/v1/brands",
  query,
  options
});
var createBrand = async (body, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "brands", {
  method: "post",
  pathTemplate: "/api/v1/brands",
  body,
  options
});
var getActiveBrand = async (options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "brands", {
  method: "get",
  pathTemplate: "/api/v1/brands/active",
  options
});
var deleteBrand = async (brandId, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "brands", {
  method: "delete",
  pathTemplate: "/api/v1/brands/{brand-id}",
  pathVariables: { "brand-id": brandId },
  options
});
var getBrand = async (brandId, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "brands", {
  method: "get",
  pathTemplate: "/api/v1/brands/{brand-id}",
  pathVariables: { "brand-id": brandId },
  options
});
var patchBrand = async (brandId, body, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "brands", {
  method: "patch",
  pathTemplate: "/api/v1/brands/{brand-id}",
  pathVariables: { "brand-id": brandId },
  body,
  options
});
var activateBrand = async (brandId, body, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "brands", {
  method: "post",
  pathTemplate: "/api/v1/brands/{brand-id}/actions/activate",
  pathVariables: { "brand-id": brandId },
  body,
  options
});
var deactivateBrand = async (brandId, body, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "brands", {
  method: "post",
  pathTemplate: "/api/v1/brands/{brand-id}/actions/deactivate",
  pathVariables: { "brand-id": brandId },
  body,
  options
});
var deleteBrandFile = async (brandId, brandFileId, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "brands", {
  method: "delete",
  pathTemplate: "/api/v1/brands/{brand-id}/files/{brand-file-id}",
  pathVariables: { "brand-id": brandId, "brand-file-id": brandFileId },
  options
});
var getBrandFile = async (brandId, brandFileId, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "brands", {
  method: "get",
  pathTemplate: "/api/v1/brands/{brand-id}/files/{brand-file-id}",
  pathVariables: { "brand-id": brandId, "brand-file-id": brandFileId },
  options
});
var createBrandFile = async (brandId, brandFileId, body, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "brands", {
  method: "post",
  pathTemplate: "/api/v1/brands/{brand-id}/files/{brand-file-id}",
  pathVariables: { "brand-id": brandId, "brand-file-id": brandFileId },
  body,
  options
});
var updateBrandFile = async (brandId, brandFileId, body, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "brands", {
  method: "put",
  pathTemplate: "/api/v1/brands/{brand-id}/files/{brand-file-id}",
  pathVariables: { "brand-id": brandId, "brand-file-id": brandFileId },
  body,
  options
});
function clearCache() {
  return _chunkWA4O4PMUjs.clearApiCache.call(void 0, "brands");
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
