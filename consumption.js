import {
  clearApiCache,
  invokeFetch
} from "./chunks/LIEZG7IM.js";
import "./chunks/GPRUNZV4.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/consumption.ts
async function getConsumptionExecutions(query, options) {
  return invokeFetch("consumption", {
    method: "get",
    pathTemplate: "/api/v1/consumption/executions",
    query,
    options
  });
}
function clearCache() {
  return clearApiCache("consumption");
}
var consumptionExport = { getConsumptionExecutions, clearCache };
var consumption_default = consumptionExport;
export {
  clearCache,
  consumption_default as default,
  getConsumptionExecutions
};
