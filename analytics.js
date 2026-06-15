import appsExport, { t as apps_exports } from "./analytics/apps.js";
import changeStoresExport, { t as change_stores_exports } from "./analytics/change-stores.js";
import odagAppsExport, { t as odag_apps_exports } from "./analytics/odag-apps.js";
import odagLinksExport, { t as odag_links_exports } from "./analytics/odag-links.js";
import odagRequestsExport, { t as odag_requests_exports } from "./analytics/odag-requests.js";
import odagSettingsExport, { t as odag_settings_exports } from "./analytics/odag-settings.js";

//#region src/public/rest/analytics.ts
/**
* Functions for the analytics api
*/
const analyticsExport = {
	apps: appsExport,
	changeStores: changeStoresExport,
	odagApps: odagAppsExport,
	odagLinks: odagLinksExport,
	odagRequests: odagRequestsExport,
	odagSettings: odagSettingsExport
};

//#endregion
export { apps_exports as apps, change_stores_exports as changeStores, analyticsExport as default, odag_apps_exports as odagApps, odag_links_exports as odagLinks, odag_requests_exports as odagRequests, odag_settings_exports as odagSettings };