import dataProductsExport, { t as data_products_exports } from "./data-governance/data-products.js";
import dataQualitiesExport, { t as data_qualities_exports } from "./data-governance/data-qualities.js";
import trustScoresExport, { t as trust_scores_exports } from "./data-governance/trust-scores.js";

//#region src/public/rest/data-governance.ts
/**
* Functions for the data-governance api
*/
const dataGovernanceExport = {
	dataProducts: dataProductsExport,
	dataQualities: dataQualitiesExport,
	trustScores: trustScoresExport
};

//#endregion
export { data_products_exports as dataProducts, data_qualities_exports as dataQualities, dataGovernanceExport as default, trust_scores_exports as trustScores };