import "./chunks/utils-qEQ6sEXX.js";
import "./chunks/public-runtime-modules-Bfh2smA7.js";
import { clearApiCache, invokeFetch } from "./chunks/invoke-fetch-DJFDz11x.js";

//#region src/public/rest/brands.ts
/**
* Lists all brand entries for a tenant.
*
* @param query an object with query parameters
* @throws GetBrandsHttpError
*/
async function getBrands(query, options) {
	return invokeFetch("brands", {
		method: "get",
		pathTemplate: "/api/v1/brands",
		query,
		options
	});
}
/**
* Creates a new brand.
*
* @param body an object with the body content
* @throws CreateBrandHttpError
*/
async function createBrand(body, options) {
	return invokeFetch("brands", {
		method: "post",
		pathTemplate: "/api/v1/brands",
		body,
		contentType: "multipart/form-data",
		options
	});
}
/**
* Returns the current active brand. If using the Qlik default brand, no value is returned.
*
* @throws GetActiveBrandHttpError
*/
async function getActiveBrand(options) {
	return invokeFetch("brands", {
		method: "get",
		pathTemplate: "/api/v1/brands/active",
		options
	});
}
/**
* Deletes a specific brand. If the active brand is deleted, the tenant will return to the Qlik default.
*
* @param brandId The brand's unique identifier.
* @throws DeleteBrandHttpError
*/
async function deleteBrand(brandId, options) {
	return invokeFetch("brands", {
		method: "delete",
		pathTemplate: "/api/v1/brands/{brand-id}",
		pathVariables: { "brand-id": brandId },
		options
	});
}
/**
* Returns a specific brand.
*
* @param brandId The brand's unique identifier.
* @throws GetBrandHttpError
*/
async function getBrand(brandId, options) {
	return invokeFetch("brands", {
		method: "get",
		pathTemplate: "/api/v1/brands/{brand-id}",
		pathVariables: { "brand-id": brandId },
		options
	});
}
/**
* Patches a brand.
*
* @param brandId The brand's unique identifier.
* @param body an object with the body content
* @throws PatchBrandHttpError
*/
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
/**
* Sets the brand active and de-activates any other active brand. If the brand is already active, no action is taken.
*
* @param brandId The brand's unique identifier.
* @param body an object with the body content
* @throws ActivateBrandHttpError
*/
async function activateBrand(brandId, body, options) {
	return invokeFetch("brands", {
		method: "post",
		pathTemplate: "/api/v1/brands/{brand-id}/actions/activate",
		pathVariables: { "brand-id": brandId },
		body,
		options
	});
}
/**
* Sets the brand so it is no longer active, returning the tenant the Qlik default brand. If the brand is already inactive, no action is taken.
*
* @param brandId The brand's unique identifier.
* @param body an object with the body content
* @throws DeactivateBrandHttpError
*/
async function deactivateBrand(brandId, body, options) {
	return invokeFetch("brands", {
		method: "post",
		pathTemplate: "/api/v1/brands/{brand-id}/actions/deactivate",
		pathVariables: { "brand-id": brandId },
		body,
		options
	});
}
/**
* Deletes the specified brand file.
*
* @param brandId The brand's unique identifier.
* @param brandFileId The unique identifier of a file within a brand.
* @throws DeleteBrandFileHttpError
*/
async function deleteBrandFile(brandId, brandFileId, options) {
	return invokeFetch("brands", {
		method: "delete",
		pathTemplate: "/api/v1/brands/{brand-id}/files/{brand-file-id}",
		pathVariables: {
			"brand-id": brandId,
			"brand-file-id": brandFileId
		},
		options
	});
}
/**
* Downloads the specified brand file.
*
* @param brandId The brand's unique identifier.
* @param brandFileId The unique identifier of a file within a brand.
* @throws GetBrandFileHttpError
*/
async function getBrandFile(brandId, brandFileId, options) {
	return invokeFetch("brands", {
		method: "get",
		pathTemplate: "/api/v1/brands/{brand-id}/files/{brand-file-id}",
		pathVariables: {
			"brand-id": brandId,
			"brand-file-id": brandFileId
		},
		options
	});
}
/**
* Creates a brand file for the specified identifier.
*
* @param brandId The brand's unique identifier.
* @param brandFileId The unique identifier of a file within a brand.
* @param body an object with the body content
* @throws CreateBrandFileHttpError
*/
async function createBrandFile(brandId, brandFileId, body, options) {
	return invokeFetch("brands", {
		method: "post",
		pathTemplate: "/api/v1/brands/{brand-id}/files/{brand-file-id}",
		pathVariables: {
			"brand-id": brandId,
			"brand-file-id": brandFileId
		},
		body,
		contentType: "multipart/form-data",
		options
	});
}
/**
* Updates the specified brand file.
*
* @param brandId The brand's unique identifier.
* @param brandFileId The unique identifier of a file within a brand.
* @param body an object with the body content
* @throws UpdateBrandFileHttpError
*/
async function updateBrandFile(brandId, brandFileId, body, options) {
	return invokeFetch("brands", {
		method: "put",
		pathTemplate: "/api/v1/brands/{brand-id}/files/{brand-file-id}",
		pathVariables: {
			"brand-id": brandId,
			"brand-file-id": brandFileId
		},
		body,
		contentType: "multipart/form-data",
		options
	});
}
/**
* Clears the cache for brands api requests.
*/
function clearCache() {
	return clearApiCache("brands");
}
/**
* Functions for the brands api
*/
const brandsExport = {
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

//#endregion
export { activateBrand, clearCache, createBrand, createBrandFile, deactivateBrand, brands_default as default, deleteBrand, deleteBrandFile, getActiveBrand, getBrand, getBrandFile, getBrands, patchBrand, updateBrandFile };