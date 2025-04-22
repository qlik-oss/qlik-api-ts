import {
  clearApiCache,
  invokeFetch
} from "./chunks/YKZ2QYHN.js";
import "./chunks/DLKLPD7T.js";
import "./chunks/2ZQ3ZX7F.js";

// src/public/rest/brands.ts
var getBrands = async (query, options) => invokeFetch("brands", {
  method: "get",
  pathTemplate: "/api/v1/brands",
  query,
  options
});
var createBrand = async (body, options) => invokeFetch("brands", {
  method: "post",
  pathTemplate: "/api/v1/brands",
  body,
  contentType: "multipart/form-data",
  options
});
var getActiveBrand = async (options) => invokeFetch("brands", {
  method: "get",
  pathTemplate: "/api/v1/brands/active",
  options
});
var deleteBrand = async (brandId, options) => invokeFetch("brands", {
  method: "delete",
  pathTemplate: "/api/v1/brands/{brand-id}",
  pathVariables: { "brand-id": brandId },
  options
});
var getBrand = async (brandId, options) => invokeFetch("brands", {
  method: "get",
  pathTemplate: "/api/v1/brands/{brand-id}",
  pathVariables: { "brand-id": brandId },
  options
});
var patchBrand = async (brandId, body, options) => invokeFetch("brands", {
  method: "patch",
  pathTemplate: "/api/v1/brands/{brand-id}",
  pathVariables: { "brand-id": brandId },
  body,
  contentType: "application/json",
  options
});
var activateBrand = async (brandId, body, options) => invokeFetch("brands", {
  method: "post",
  pathTemplate: "/api/v1/brands/{brand-id}/actions/activate",
  pathVariables: { "brand-id": brandId },
  body,
  options
});
var deactivateBrand = async (brandId, body, options) => invokeFetch("brands", {
  method: "post",
  pathTemplate: "/api/v1/brands/{brand-id}/actions/deactivate",
  pathVariables: { "brand-id": brandId },
  body,
  options
});
var deleteBrandFile = async (brandId, brandFileId, options) => invokeFetch("brands", {
  method: "delete",
  pathTemplate: "/api/v1/brands/{brand-id}/files/{brand-file-id}",
  pathVariables: { "brand-id": brandId, "brand-file-id": brandFileId },
  options
});
var getBrandFile = async (brandId, brandFileId, options) => invokeFetch("brands", {
  method: "get",
  pathTemplate: "/api/v1/brands/{brand-id}/files/{brand-file-id}",
  pathVariables: { "brand-id": brandId, "brand-file-id": brandFileId },
  options
});
var createBrandFile = async (brandId, brandFileId, body, options) => invokeFetch("brands", {
  method: "post",
  pathTemplate: "/api/v1/brands/{brand-id}/files/{brand-file-id}",
  pathVariables: { "brand-id": brandId, "brand-file-id": brandFileId },
  body,
  contentType: "multipart/form-data",
  options
});
var updateBrandFile = async (brandId, brandFileId, body, options) => invokeFetch("brands", {
  method: "put",
  pathTemplate: "/api/v1/brands/{brand-id}/files/{brand-file-id}",
  pathVariables: { "brand-id": brandId, "brand-file-id": brandFileId },
  body,
  contentType: "multipart/form-data",
  options
});
function clearCache() {
  return clearApiCache("brands");
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
export {
  activateBrand,
  clearCache,
  createBrand,
  createBrandFile,
  deactivateBrand,
  brands_default as default,
  deleteBrand,
  deleteBrandFile,
  getActiveBrand,
  getBrand,
  getBrandFile,
  getBrands,
  patchBrand,
  updateBrandFile
};
