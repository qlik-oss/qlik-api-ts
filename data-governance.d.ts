import dataProductsExport, { t as data_products_d_exports } from "./data-governance/data-products.js";
import dataQualitiesExport, { t as data_qualities_d_exports } from "./data-governance/data-qualities.js";
import trustScoresExport, { t as trust_scores_d_exports } from "./data-governance/trust-scores.js";
//#region src/public/rest/data-governance.d.ts
type DataGovernanceAPI = {};
/**
 * Functions for the data-governance api
 */
declare const dataGovernanceExport: DataGovernanceAPI & {
  dataProducts: typeof dataProductsExport;
  dataQualities: typeof dataQualitiesExport;
  trustScores: typeof trustScoresExport;
};
//#endregion
export { DataGovernanceAPI, data_products_d_exports as dataProducts, data_qualities_d_exports as dataQualities, dataGovernanceExport as default, trust_scores_d_exports as trustScores };