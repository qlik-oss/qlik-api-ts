import dataProductsExport, { t as data_products_exports } from "./data-governance/data-products.js";

//#region src/public/rest/data-governance.ts
/**
* Functions for the data-governance api
*/
const dataGovernanceExport = { dataProducts: dataProductsExport };

//#endregion
export { data_products_exports as dataProducts, dataGovernanceExport as default };