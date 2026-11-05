/*
 * ------------------------------------------------------------------------
 * ## THIS FILE WAS GENERATED WITH QMFE-API-GENERATOR                    ##
 * ##                                                                    ##
 * ## AUTHOR: frontend-core-team                                         ##
 * ------------------------------------------------------------------------
 */

import authSettings from "./core/auth-settings";
import dataFiles from "./core/data-files";
import ipPolicies from "./core/ip-policies";
import webhooks from "./core/webhooks";

/* -------------------------------------------------------------------------- */
/*                              Submodule exports                             */
/* -------------------------------------------------------------------------- */

export * as authSettings from "./core/auth-settings";
export * as dataFiles from "./core/data-files";
export * as ipPolicies from "./core/ip-policies";
export * as webhooks from "./core/webhooks";

/* -------------------------------------------------------------------------- */
/*                             Default export api                             */
/* -------------------------------------------------------------------------- */

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type CoreAPI = {};

/**
 * Functions for the core api
 */
const coreExport: CoreAPI & {
  authSettings: typeof authSettings;
  dataFiles: typeof dataFiles;
  ipPolicies: typeof ipPolicies;
  webhooks: typeof webhooks;
} = { authSettings, dataFiles, ipPolicies, webhooks };
export default coreExport;
