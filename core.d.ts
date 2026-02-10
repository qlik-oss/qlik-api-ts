import "./chunks/invoke-fetch-DFc3yzaj.js";
import ipPoliciesExport, { t as ip_policies_d_exports } from "./core/ip-policies.js";

//#region src/public/rest/core.d.ts
type CoreAPI = {};
/**
 * Functions for the core api
 */
declare const coreExport: CoreAPI & {
  ipPolicies: typeof ipPoliciesExport;
};
//#endregion
export { CoreAPI, coreExport as default, ip_policies_d_exports as ipPolicies };