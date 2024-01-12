"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkQQDHWGJXjs = require('./chunk-QQDHWGJX.js');
require('./chunk-ERGV34M7.js');
require('./chunk-P57PW2II.js');

// src/public/rest/brands.ts
var getBrands = async (query, options) => _chunkQQDHWGJXjs.invokeFetch.call(void 0, "brands", {
  method: "get",
  pathTemplate: "/api/v1/brands",
  query,
  options
});
var createBrand = async (body, options) => _chunkQQDHWGJXjs.invokeFetch.call(void 0, "brands", {
  method: "post",
  pathTemplate: "/api/v1/brands",
  body,
  contentType: "multipart/form-data",
  options
});
var getActiveBrand = async (options) => _chunkQQDHWGJXjs.invokeFetch.call(void 0, "brands", {
  method: "get",
  pathTemplate: "/api/v1/brands/active",
  options
});
var deleteBrand = async (brandId, options) => _chunkQQDHWGJXjs.invokeFetch.call(void 0, "brands", {
  method: "delete",
  pathTemplate: "/api/v1/brands/{brand-id}",
  pathVariables: { "brand-id": brandId },
  options
});
var getBrand = async (brandId, options) => _chunkQQDHWGJXjs.invokeFetch.call(void 0, "brands", {
  method: "get",
  pathTemplate: "/api/v1/brands/{brand-id}",
  pathVariables: { "brand-id": brandId },
  options
});
var patchBrand = async (brandId, body, options) => _chunkQQDHWGJXjs.invokeFetch.call(void 0, "brands", {
  method: "patch",
  pathTemplate: "/api/v1/brands/{brand-id}",
  pathVariables: { "brand-id": brandId },
  body,
  contentType: "application/json",
  options
});
var activateBrand = async (brandId, body, options) => _chunkQQDHWGJXjs.invokeFetch.call(void 0, "brands", {
  method: "post",
  pathTemplate: "/api/v1/brands/{brand-id}/actions/activate",
  pathVariables: { "brand-id": brandId },
  body,
  options
});
var deactivateBrand = async (brandId, body, options) => _chunkQQDHWGJXjs.invokeFetch.call(void 0, "brands", {
  method: "post",
  pathTemplate: "/api/v1/brands/{brand-id}/actions/deactivate",
  pathVariables: { "brand-id": brandId },
  body,
  options
});
var deleteBrandFile = async (brandId, brandFileId, options) => _chunkQQDHWGJXjs.invokeFetch.call(void 0, "brands", {
  method: "delete",
  pathTemplate: "/api/v1/brands/{brand-id}/files/{brand-file-id}",
  pathVariables: { "brand-id": brandId, "brand-file-id": brandFileId },
  options
});
var getBrandFile = async (brandId, brandFileId, options) => _chunkQQDHWGJXjs.invokeFetch.call(void 0, "brands", {
  method: "get",
  pathTemplate: "/api/v1/brands/{brand-id}/files/{brand-file-id}",
  pathVariables: { "brand-id": brandId, "brand-file-id": brandFileId },
  options
});
var createBrandFile = async (brandId, brandFileId, body, options) => _chunkQQDHWGJXjs.invokeFetch.call(void 0, "brands", {
  method: "post",
  pathTemplate: "/api/v1/brands/{brand-id}/files/{brand-file-id}",
  pathVariables: { "brand-id": brandId, "brand-file-id": brandFileId },
  body,
  contentType: "multipart/form-data",
  options
});
var updateBrandFile = async (brandId, brandFileId, body, options) => _chunkQQDHWGJXjs.invokeFetch.call(void 0, "brands", {
  method: "put",
  pathTemplate: "/api/v1/brands/{brand-id}/files/{brand-file-id}",
  pathVariables: { "brand-id": brandId, "brand-file-id": brandFileId },
  body,
  contentType: "multipart/form-data",
  options
});
function clearCache() {
  return _chunkQQDHWGJXjs.clearApiCache.call(void 0, "brands");
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
