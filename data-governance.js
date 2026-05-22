import dataProductsExport, { t as data_products_exports } from "./data-governance/data-products.js";
import dataQualitiesExport, { t as data_qualities_exports } from "./data-governance/data-qualities.js";

//#region src/public/rest/data-governance.ts
/**
* Functions for the data-governance api
*/
const dataGovernanceExport = {
	dataProducts: dataProductsExport,
	dataQualities: dataQualitiesExport
};

//#endregion
export { data_products_exports as dataProducts, data_qualities_exports as dataQualities, dataGovernanceExport as default };