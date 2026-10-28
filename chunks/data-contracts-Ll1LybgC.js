import { t as __exportAll } from "./rolldown-runtime-CNh9ExCG.js";
import { n as invokeFetch, t as clearApiCache } from "./invoke-fetch-DC35wLOr.js";

// src/public/rest/data-governance/data-contracts.ts
var data_contracts_exports = /* @__PURE__ */ __exportAll({
	clearCache: () => clearCache,
	createDataContractsDatasets: () => createDataContractsDatasets,
	default: () => dataContractsExport,
	deleteDataContractsDataset: () => deleteDataContractsDataset,
	getDataContractsDatasetExpectations: () => getDataContractsDatasetExpectations,
	patchDataContractsDatasetExpectations: () => patchDataContractsDatasetExpectations
});
/**
* Creates a data contract for each listed dataset ID, notably to apply a contract to every dataset of a data product at once. The caller's "Compute data quality" write privilege is checked once for the whole request, before any dataset is processed: it does not depend on any single dataset, so a caller lacking it is rejected upfront with HTTP 403, rather than failing every dataset entry individually. Each dataset is then processed independently and concurrently: a failure on one dataset (no write permission on its space, dataset not found, or a contract already existing for that dataset) does not block the others. An existing contract is never overwritten. The request is capped at 100 datasets; a larger batch is rejected upfront with HTTP 400, before any contract is created.
*
* @param body an object with the body content
* @throws CreateDataContractsDatasetsHttpError
*/
async function createDataContractsDatasets(body, options) {
	return invokeFetch("data-governance/data-contracts", {
		method: "post",
		pathTemplate: "/api/data-governance/data-contracts/datasets/actions/create",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Permanently deletes the data contract for the given dataset, along with every expectation and evaluation belonging to it. This is a hard delete: unlike deactivation, nothing is preserved and the operation cannot be undone.
* @example
* deleteDataContractsDataset(
*   "66a3aa9800358457159ecd12"
* )
*
* @param datasetId
* @throws DeleteDataContractsDatasetHttpError
*/
async function deleteDataContractsDataset(datasetId, options) {
	return invokeFetch("data-governance/data-contracts", {
		method: "delete",
		pathTemplate: "/api/data-governance/data-contracts/datasets/{datasetId}",
		pathVariables: { datasetId },
		options
	});
}
/**
* Returns every expectation for the dataset — the Trust Score dimension expectations and the data volume expectation — with their current activation status, configured thresholds or bounds, latest actual value, and last evaluation result. If the dataset has no data contract, the operation still returns 200 with the default, non-activated expectations. For non-activated expectations, the actual value (Trust Score) or row count (volume) is fetched live while the response is built and is omitted if it cannot be retrieved.
* @example
* getDataContractsDatasetExpectations(
*   "66a3aa9800358457159ecd12"
* )
*
* @param datasetId
* @throws GetDataContractsDatasetExpectationsHttpError
*/
async function getDataContractsDatasetExpectations(datasetId, options) {
	return invokeFetch("data-governance/data-contracts", {
		method: "get",
		pathTemplate: "/api/data-governance/data-contracts/datasets/{datasetId}/expectations",
		pathVariables: { datasetId },
		options
	});
}
/**
* Updates, activates, or deactivates the dataset's expectations in a single call. Trust Score and data volume expectations are supplied in their respective arrays, and each item is processed independently: some items may succeed while others fail, and the per-item outcome is reported in the response with HTTP 200. When the dataset has no data contract yet, activating at least one expectation creates the contract; a request that would create a contract without activating any expectation is rejected with HTTP 400. For Trust Score items, threshold and warning must be within 0-100 and warning, when set, must be strictly greater than threshold.
*
* @param datasetId
* @param body an object with the body content
* @throws PatchDataContractsDatasetExpectationsHttpError
*/
async function patchDataContractsDatasetExpectations(datasetId, body, options) {
	return invokeFetch("data-governance/data-contracts", {
		method: "patch",
		pathTemplate: "/api/data-governance/data-contracts/datasets/{datasetId}/expectations",
		pathVariables: { datasetId },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Clears the cache for data-governance/data-contracts api requests.
*/
function clearCache() {
	return clearApiCache("data-governance/data-contracts");
}
/**
* Functions for the data-contracts api
*/
const dataContractsExport = {
	createDataContractsDatasets,
	deleteDataContractsDataset,
	getDataContractsDatasetExpectations,
	patchDataContractsDatasetExpectations,
	clearCache
};

export { deleteDataContractsDataset as a, data_contracts_exports as i, createDataContractsDatasets as n, getDataContractsDatasetExpectations as o, dataContractsExport as r, patchDataContractsDatasetExpectations as s, clearCache as t };