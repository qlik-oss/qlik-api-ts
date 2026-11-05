/*
 * ------------------------------------------------------------------------
 * ## THIS FILE WAS GENERATED WITH QMFE-API-GENERATOR                    ##
 * ##                                                                    ##
 * ## AUTHOR: frontend-core-team                                         ##
 * ------------------------------------------------------------------------
 */

import dataContracts from "./data-governance/data-contracts";
import dataProducts from "./data-governance/data-products";
import dataQualities from "./data-governance/data-qualities";
import semanticTypes from "./data-governance/semantic-types";
import trustScores from "./data-governance/trust-scores";

/* -------------------------------------------------------------------------- */
/*                              Submodule exports                             */
/* -------------------------------------------------------------------------- */

export * as dataContracts from "./data-governance/data-contracts";
export * as dataProducts from "./data-governance/data-products";
export * as dataQualities from "./data-governance/data-qualities";
export * as semanticTypes from "./data-governance/semantic-types";
export * as trustScores from "./data-governance/trust-scores";

/* -------------------------------------------------------------------------- */
/*                             Default export api                             */
/* -------------------------------------------------------------------------- */

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type DataGovernanceAPI = {};

/**
 * Functions for the data-governance api
 */
const dataGovernanceExport: DataGovernanceAPI & {
  dataContracts: typeof dataContracts;
  dataProducts: typeof dataProducts;
  dataQualities: typeof dataQualities;
  semanticTypes: typeof semanticTypes;
  trustScores: typeof trustScores;
} = { dataContracts, dataProducts, dataQualities, semanticTypes, trustScores };
export default dataGovernanceExport;
