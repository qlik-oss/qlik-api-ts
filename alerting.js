import sharingTasksExport, { t as sharing_tasks_exports } from "./alerting/sharing-tasks.js";

//#region src/public/rest/alerting.ts
/**
* Functions for the alerting api
*/
const alertingExport = { sharingTasks: sharingTasksExport };

//#endregion
export { alertingExport as default, sharing_tasks_exports as sharingTasks };