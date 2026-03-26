import ipPoliciesExport, { t as ip_policies_exports } from "./core/ip-policies.js";

//#region src/public/rest/core.ts
/**
* Functions for the core api
*/
const coreExport = { ipPolicies: ipPoliciesExport };

//#endregion
export { coreExport as default, ip_policies_exports as ipPolicies };