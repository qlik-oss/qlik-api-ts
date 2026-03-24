import "./chunks/public-runtime-modules-C_U46tR6.js";
import "./chunks/invoke-fetch-B8cCSIYD.js";
import changeStoresExport, { t as change_stores_exports } from "./analytics/change-stores.js";

//#region src/public/rest/analytics.ts
/**
* Functions for the analytics api
*/
const analyticsExport = { changeStores: changeStoresExport };

//#endregion
export { change_stores_exports as changeStores, analyticsExport as default };