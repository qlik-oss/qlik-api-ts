import {
  clearApiCache,
  invokeFetch
} from "./chunk-W4J34XGA.mjs";
import "./chunk-7REWEWCX.mjs";

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
  options
});
var updateBrandFile = async (brandId, brandFileId, body, options) => invokeFetch("brands", {
  method: "put",
  pathTemplate: "/api/v1/brands/{brand-id}/files/{brand-file-id}",
  pathVariables: { "brand-id": brandId, "brand-file-id": brandFileId },
  body,
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
