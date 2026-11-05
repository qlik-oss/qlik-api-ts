/*
 * ------------------------------------------------------------------------
 * ## THIS FILE WAS GENERATED WITH QMFE-API-GENERATOR                    ##
 * ##                                                                    ##
 * ## AUTHOR: frontend-core-team                                         ##
 * ------------------------------------------------------------------------
 */

import tasks from "./scheduling/tasks";

/* -------------------------------------------------------------------------- */
/*                              Submodule exports                             */
/* -------------------------------------------------------------------------- */

export * as tasks from "./scheduling/tasks";

/* -------------------------------------------------------------------------- */
/*                             Default export api                             */
/* -------------------------------------------------------------------------- */

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type SchedulingAPI = {};

/**
 * Functions for the scheduling api
 */
const schedulingExport: SchedulingAPI & { tasks: typeof tasks } = { tasks };
export default schedulingExport;
