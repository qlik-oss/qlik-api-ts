import appsExport, { t as apps_d_exports } from "./analytics/apps.js";
import changeStoresExport, { t as change_stores_d_exports } from "./analytics/change-stores.js";
import odagAppsExport, { t as odag_apps_d_exports } from "./analytics/odag-apps.js";
import odagLinksExport, { t as odag_links_d_exports } from "./analytics/odag-links.js";
import odagRequestsExport, { t as odag_requests_d_exports } from "./analytics/odag-requests.js";
import odagSettingsExport, { t as odag_settings_d_exports } from "./analytics/odag-settings.js";

//#region src/public/rest/analytics.d.ts
type AnalyticsAPI = {};
/**
 * Functions for the analytics api
 */
declare const analyticsExport: AnalyticsAPI & {
  apps: typeof appsExport;
  changeStores: typeof changeStoresExport;
  odagApps: typeof odagAppsExport;
  odagLinks: typeof odagLinksExport;
  odagRequests: typeof odagRequestsExport;
  odagSettings: typeof odagSettingsExport;
};
//#endregion
export { AnalyticsAPI, apps_d_exports as apps, change_stores_d_exports as changeStores, analyticsExport as default, odag_apps_d_exports as odagApps, odag_links_d_exports as odagLinks, odag_requests_d_exports as odagRequests, odag_settings_d_exports as odagSettings };