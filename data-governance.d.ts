import "./chunks/invoke-fetch-DFc3yzaj.js";
import dataProductsExport, { t as data_products_d_exports } from "./data-governance/data-products.js";

//#region src/public/rest/data-governance.d.ts
type DataGovernanceAPI = {};
/**
 * Functions for the data-governance api
 */
declare const dataGovernanceExport: DataGovernanceAPI & {
  dataProducts: typeof dataProductsExport;
};
//#endregion
export { DataGovernanceAPI, data_products_d_exports as dataProducts, dataGovernanceExport as default };