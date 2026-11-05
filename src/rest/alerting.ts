/*
 * ------------------------------------------------------------------------
 * ## THIS FILE WAS GENERATED WITH QMFE-API-GENERATOR                    ##
 * ##                                                                    ##
 * ## AUTHOR: frontend-core-team                                         ##
 * ------------------------------------------------------------------------
 */

import sharingTasks from "./alerting/sharing-tasks";

/* -------------------------------------------------------------------------- */
/*                              Submodule exports                             */
/* -------------------------------------------------------------------------- */

export * as sharingTasks from "./alerting/sharing-tasks";

/* -------------------------------------------------------------------------- */
/*                             Default export api                             */
/* -------------------------------------------------------------------------- */

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type AlertingAPI = {};

/**
 * Functions for the alerting api
 */
const alertingExport: AlertingAPI & { sharingTasks: typeof sharingTasks } = { sharingTasks };
export default alertingExport;
