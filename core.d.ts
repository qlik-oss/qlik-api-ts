import authSettingsExport, { t as auth_settings_d_exports } from "./core/auth-settings.js";
import dataFilesExport, { t as data_files_d_exports } from "./core/data-files.js";
import ipPoliciesExport, { t as ip_policies_d_exports } from "./core/ip-policies.js";

//#region src/public/rest/core.d.ts
type CoreAPI = {};
/**
 * Functions for the core api
 */
declare const coreExport: CoreAPI & {
  authSettings: typeof authSettingsExport;
  dataFiles: typeof dataFilesExport;
  ipPolicies: typeof ipPoliciesExport;
};
//#endregion
export { CoreAPI, auth_settings_d_exports as authSettings, data_files_d_exports as dataFiles, coreExport as default, ip_policies_d_exports as ipPolicies };