import {
  clearApiCache,
  invokeFetch
} from "./chunks/PUS32UJH.js";
import "./chunks/CLZXLW6N.js";
import "./chunks/2ZQ3ZX7F.js";

// src/public/rest/consumption.ts
var getConsumptionExecutions = async (query, options) => invokeFetch("consumption", {
  method: "get",
  pathTemplate: "/api/v1/consumption/executions",
  query,
  options
});
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
