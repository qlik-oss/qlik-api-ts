import { d as authSettingsExport, f as auth_settings_d_exports } from "./chunks/auth-settings-DqJoVch8.js";
import { Q as data_files_d_exports, Z as dataFilesExport } from "./chunks/data-files-CMmNghzj.js";
import { D as ipPoliciesExport, O as ip_policies_d_exports } from "./chunks/ip-policies-BuG0Hx46.js";
export type CoreAPI = {};
/**
 * Functions for the core api
 */
declare const coreExport: CoreAPI & {
  authSettings: typeof authSettingsExport;
  dataFiles: typeof dataFilesExport;
  ipPolicies: typeof ipPoliciesExport;
};
export { auth_settings_d_exports as authSettings, data_files_d_exports as dataFiles, coreExport as default, ip_policies_d_exports as ipPolicies };