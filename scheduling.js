import tasksExport, { t as tasks_exports } from "./scheduling/tasks.js";

//#region src/public/rest/scheduling.ts
/**
* Functions for the scheduling api
*/
const schedulingExport = { tasks: tasksExport };

//#endregion
export { schedulingExport as default, tasks_exports as tasks };