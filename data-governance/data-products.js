import { t as __exportAll } from "../chunks/chunk-BdHzlgOL.js";
import "../chunks/public-runtime-modules-Dl6Qu08B.js";
import { n as invokeFetch, t as clearApiCache } from "../chunks/invoke-fetch-DqBb7hUC.js";

//#region src/public/rest/data-governance/data-products.ts
var data_products_exports = /* @__PURE__ */ __exportAll({
	activateDataProduct: () => activateDataProduct,
	clearCache: () => clearCache,
	createDataProduct: () => createDataProduct,
	deactivateDataProduct: () => deactivateDataProduct,
	default: () => dataProductsExport,
	deleteDataProduct: () => deleteDataProduct,
	exportDocumentationDataProduct: () => exportDocumentationDataProduct,
	generateProviderUrlDataProducts: () => generateProviderUrlDataProducts,
	getDataProduct: () => getDataProduct,
	getDataProductChangelogs: () => getDataProductChangelogs,
	moveDataProduct: () => moveDataProduct,
	patchDataProduct: () => patchDataProduct
});
/**
* Creates a new data product with specified metadata, datasets, and governance information.
* Use this endpoint to package related datasets into a governed, discoverable asset.
* Requires create permissions in the target space.
*
* @param body an object with the body content
* @throws CreateDataProductHttpError
*/
async function createDataProduct(body, options) {
	return invokeFetch("data-governance/data-products", {
		method: "post",
		pathTemplate: "/api/data-governance/data-products",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Generates a URL to access a third-party provider's user interface.
* Use this endpoint to integrate external services with your data product.
*
* @param query an object with query parameters
* @throws GenerateProviderUrlDataProductsHttpError
*/
async function generateProviderUrlDataProducts(query, options) {
	return invokeFetch("data-governance/data-products", {
		method: "post",
		pathTemplate: "/api/data-governance/data-products/actions/generate-provider-url",
		query,
		options
	});
}
/**
* Permanently removes a data product from the tenant.
* This action cannot be undone and does not affect the underlying datasets.
* Requires delete permissions for the data product.
*
* @param dataProductId Unique identifier of the data product. Must be a valid GUID assigned when the data product was created.
* @throws DeleteDataProductHttpError
*/
async function deleteDataProduct(dataProductId, options) {
	return invokeFetch("data-governance/data-products", {
		method: "delete",
		pathTemplate: "/api/data-governance/data-products/{dataProductId}",
		pathVariables: { dataProductId },
		options
	});
}
/**
* Retrieves the details of the specified data product, including name, description, associated datasets, key contacts, and activation status.
* Requires read access to the Data Product.
*
* @param dataProductId Unique identifier of the data product. Must be a valid GUID assigned when the data product was created.
* @throws GetDataProductHttpError
*/
async function getDataProduct(dataProductId, options) {
	return invokeFetch("data-governance/data-products", {
		method: "get",
		pathTemplate: "/api/data-governance/data-products/{dataProductId}",
		pathVariables: { dataProductId },
		options
	});
}
/**
* Partially updates an existing data product using JSON Patch operations.
* Use this endpoint to modify properties such as name, description, datasets, tags, or key contacts.
* Changes are tracked in the data product changelog.
*
* @param dataProductId Unique identifier of the data product. Must be a valid GUID assigned when the data product was created.
* @param body an object with the body content
* @throws PatchDataProductHttpError
*/
async function patchDataProduct(dataProductId, body, options) {
	return invokeFetch("data-governance/data-products", {
		method: "patch",
		pathTemplate: "/api/data-governance/data-products/{dataProductId}",
		pathVariables: { dataProductId },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Activates a data product for publishing and consumption.
* Once activated, the data product becomes discoverable and accessible to authorized users.
* Requires publish permissions and valid data product configuration.
*
* @param dataProductId Unique identifier of the data product. Must be a valid GUID assigned when the data product was created.
* @param body an object with the body content
* @throws ActivateDataProductHttpError
*/
async function activateDataProduct(dataProductId, body, options) {
	return invokeFetch("data-governance/data-products", {
		method: "post",
		pathTemplate: "/api/data-governance/data-products/{dataProductId}/actions/activate",
		pathVariables: { dataProductId },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Deactivates a data product, preventing it from being consumed by other services or users.
*
* @param dataProductId Unique identifier of the data product. Must be a valid GUID assigned when the data product was created.
* @throws DeactivateDataProductHttpError
*/
async function deactivateDataProduct(dataProductId, options) {
	return invokeFetch("data-governance/data-products", {
		method: "post",
		pathTemplate: "/api/data-governance/data-products/{dataProductId}/actions/deactivate",
		pathVariables: { dataProductId },
		options
	});
}
/**
* Exports data product documentation in Markdown format.
* Use this endpoint to generate documentation for sharing or archiving.
* Requires read access to the data product.
*
* @param dataProductId Unique identifier of the data product. Must be a valid GUID assigned when the data product was created.
* @throws ExportDocumentationDataProductHttpError
*/
async function exportDocumentationDataProduct(dataProductId, options) {
	return invokeFetch("data-governance/data-products", {
		method: "get",
		pathTemplate: "/api/data-governance/data-products/{dataProductId}/actions/export-documentation",
		pathVariables: { dataProductId },
		options
	});
}
/**
* Moves a data product from its current space to a different space.
* Use this endpoint to reorganize data products across workspaces or governance domains.
* Requires delete permissions in the source space and create permissions in the target space.
*
* @param dataProductId Unique identifier of the data product. Must be a valid GUID assigned when the data product was created.
* @param body an object with the body content
* @throws MoveDataProductHttpError
*/
async function moveDataProduct(dataProductId, body, options) {
	return invokeFetch("data-governance/data-products", {
		method: "post",
		pathTemplate: "/api/data-governance/data-products/{dataProductId}/actions/move",
		pathVariables: { dataProductId },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Retrieves a paginated history of all notable changes made to a data product.
* Each changelog entry captures the operation type, affected property, and timestamp.
* Use this endpoint to track the history of changes or data product evolution over time.
*
* @param dataProductId Unique identifier of the data product. Must be a valid GUID assigned when the data product was created.
* @param query an object with query parameters
* @throws GetDataProductChangelogsHttpError
*/
async function getDataProductChangelogs(dataProductId, query, options) {
	return invokeFetch("data-governance/data-products", {
		method: "get",
		pathTemplate: "/api/data-governance/data-products/{dataProductId}/changelogs",
		pathVariables: { dataProductId },
		query,
		options
	});
}
/**
* Clears the cache for data-governance/data-products api requests.
*/
function clearCache() {
	return clearApiCache("data-governance/data-products");
}
/**
* Functions for the data-products api
*/
const dataProductsExport = {
	createDataProduct,
	generateProviderUrlDataProducts,
	deleteDataProduct,
	getDataProduct,
	patchDataProduct,
	activateDataProduct,
	deactivateDataProduct,
	exportDocumentationDataProduct,
	moveDataProduct,
	getDataProductChangelogs,
	clearCache
};

//#endregion
export { activateDataProduct, clearCache, createDataProduct, deactivateDataProduct, dataProductsExport as default, deleteDataProduct, exportDocumentationDataProduct, generateProviderUrlDataProducts, getDataProduct, getDataProductChangelogs, moveDataProduct, patchDataProduct, data_products_exports as t };