/*
 * ------------------------------------------------------------------------
 * ## THIS FILE WAS GENERATED WITH QMFE-API-GENERATOR                    ##
 * ##                                                                    ##
 * ## AUTHOR: frontend-core-team                                         ##
 * ------------------------------------------------------------------------
 */

import apps from "./analytics/apps";
import changeStores from "./analytics/change-stores";
import discoveryAgent from "./analytics/discovery-agent";
import odagApps from "./analytics/odag-apps";
import odagLinks from "./analytics/odag-links";
import odagRequests from "./analytics/odag-requests";
import odagSettings from "./analytics/odag-settings";

/* -------------------------------------------------------------------------- */
/*                              Submodule exports                             */
/* -------------------------------------------------------------------------- */

export * as apps from "./analytics/apps";
export * as changeStores from "./analytics/change-stores";
export * as discoveryAgent from "./analytics/discovery-agent";
export * as odagApps from "./analytics/odag-apps";
export * as odagLinks from "./analytics/odag-links";
export * as odagRequests from "./analytics/odag-requests";
export * as odagSettings from "./analytics/odag-settings";

/* -------------------------------------------------------------------------- */
/*                             Default export api                             */
/* -------------------------------------------------------------------------- */

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type AnalyticsAPI = {};

/**
 * Functions for the analytics api
 */
const analyticsExport: AnalyticsAPI & {
  apps: typeof apps;
  changeStores: typeof changeStores;
  discoveryAgent: typeof discoveryAgent;
  odagApps: typeof odagApps;
  odagLinks: typeof odagLinks;
  odagRequests: typeof odagRequests;
  odagSettings: typeof odagSettings;
} = { apps, changeStores, discoveryAgent, odagApps, odagLinks, odagRequests, odagSettings };
export default analyticsExport;
