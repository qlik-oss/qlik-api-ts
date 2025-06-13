import {
  clearApiCache,
  invokeFetch
} from "./chunks/6WNP7HZQ.js";
import "./chunks/QAOVZB27.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/brands.ts
async function getBrands(query, options) {
  return invokeFetch("brands", {
    method: "get",
    pathTemplate: "/api/v1/brands",
    query,
    options
  });
}
async function createBrand(body, options) {
  return invokeFetch("brands", {
    method: "post",
    pathTemplate: "/api/v1/brands",
    body,
    contentType: "multipart/form-data",
    options
  });
}
async function getActiveBrand(options) {
  return invokeFetch("brands", {
    method: "get",
    pathTemplate: "/api/v1/brands/active",
    options
  });
}
async function deleteBrand(brandId, options) {
  return invokeFetch("brands", {
    method: "delete",
    pathTemplate: "/api/v1/brands/{brand-id}",
    pathVariables: { "brand-id": brandId },
    options
  });
}
async function getBrand(brandId, options) {
  return invokeFetch("brands", {
    method: "get",
    pathTemplate: "/api/v1/brands/{brand-id}",
    pathVariables: { "brand-id": brandId },
    options
  });
}
async function patchBrand(brandId, body, options) {
  return invokeFetch("brands", {
    method: "patch",
    pathTemplate: "/api/v1/brands/{brand-id}",
    pathVariables: { "brand-id": brandId },
    body,
    contentType: "application/json",
    options
  });
}
async function activateBrand(brandId, body, options) {
  return invokeFetch("brands", {
    method: "post",
    pathTemplate: "/api/v1/brands/{brand-id}/actions/activate",
    pathVariables: { "brand-id": brandId },
    body,
    options
  });
}
async function deactivateBrand(brandId, body, options) {
  return invokeFetch("brands", {
    method: "post",
    pathTemplate: "/api/v1/brands/{brand-id}/actions/deactivate",
    pathVariables: { "brand-id": brandId },
    body,
    options
  });
}
async function deleteBrandFile(brandId, brandFileId, options) {
  return invokeFetch("brands", {
    method: "delete",
    pathTemplate: "/api/v1/brands/{brand-id}/files/{brand-file-id}",
    pathVariables: { "brand-id": brandId, "brand-file-id": brandFileId },
    options
  });
}
async function getBrandFile(brandId, brandFileId, options) {
  return invokeFetch("brands", {
    method: "get",
    pathTemplate: "/api/v1/brands/{brand-id}/files/{brand-file-id}",
    pathVariables: { "brand-id": brandId, "brand-file-id": brandFileId },
    options
  });
}
async function createBrandFile(brandId, brandFileId, body, options) {
  return invokeFetch("brands", {
    method: "post",
    pathTemplate: "/api/v1/brands/{brand-id}/files/{brand-file-id}",
    pathVariables: { "brand-id": brandId, "brand-file-id": brandFileId },
    body,
    contentType: "multipart/form-data",
    options
  });
}
async function updateBrandFile(brandId, brandFileId, body, options) {
  return invokeFetch("brands", {
    method: "put",
    pathTemplate: "/api/v1/brands/{brand-id}/files/{brand-file-id}",
    pathVariables: { "brand-id": brandId, "brand-file-id": brandFileId },
    body,
    contentType: "multipart/form-data",
    options
  });
}
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
