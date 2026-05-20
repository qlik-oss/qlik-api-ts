import tasksExport, { t as tasks_d_exports } from "./scheduling/tasks.js";

//#region src/public/rest/scheduling.d.ts
type SchedulingAPI = {};
/**
 * Functions for the scheduling api
 */
declare const schedulingExport: SchedulingAPI & {
  tasks: typeof tasksExport;
};
//#endregion
export { SchedulingAPI, schedulingExport as default, tasks_d_exports as tasks };