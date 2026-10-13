import sharingTasksExport, { t as sharing_tasks_d_exports } from "./alerting/sharing-tasks.js";
//#region src/public/rest/alerting.d.ts
export type AlertingAPI = {};
/**
 * Functions for the alerting api
 */
declare const alertingExport: AlertingAPI & {
  sharingTasks: typeof sharingTasksExport;
};
//#endregion
export { alertingExport as default, sharing_tasks_d_exports as sharingTasks };