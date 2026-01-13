import "./chunks/auth-types-YrlH_R9f.js";
import "./chunks/invoke-fetch-C1Z0RJYU.js";
import changeStoresExport, { t as change_stores_d_exports } from "./analytics/change-stores.js";

//#region src/public/rest/analytics.d.ts
type AnalyticsAPI = {};
/**
 * Functions for the analytics api
 */
declare const analyticsExport: AnalyticsAPI & {
  changeStores: typeof changeStoresExport;
};
//#endregion
export { AnalyticsAPI, change_stores_d_exports as changeStores, analyticsExport as default };