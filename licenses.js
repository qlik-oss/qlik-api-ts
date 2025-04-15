import {
  clearApiCache,
  invokeFetch
} from "./chunks/5DHCFW3H.js";
import "./chunks/46MCLX7N.js";
import "./chunks/2ZQ3ZX7F.js";

// src/public/rest/licenses.ts
var getLicenseAssignments = async (query, options) => invokeFetch("licenses", {
  method: "get",
  pathTemplate: "/api/v1/licenses/assignments",
  query,
  options
});
var addLicenseAssignments = async (body, options) => invokeFetch("licenses", {
  method: "post",
  pathTemplate: "/api/v1/licenses/assignments/actions/add",
  body,
  contentType: "application/json",
  options
});
var deleteLicenseAssignments = async (body, options) => invokeFetch("licenses", {
  method: "post",
  pathTemplate: "/api/v1/licenses/assignments/actions/delete",
  body,
  contentType: "application/json",
  options
});
var updateLicenseAssignments = async (body, options) => invokeFetch("licenses", {
  method: "post",
  pathTemplate: "/api/v1/licenses/assignments/actions/update",
  body,
  contentType: "application/json",
  options
});
var getLicenseConsumption = async (query, options) => invokeFetch("licenses", {
  method: "get",
  pathTemplate: "/api/v1/licenses/consumption",
  query,
  options
});
var getLicenseOverview = async (options) => invokeFetch("licenses", {
  method: "get",
  pathTemplate: "/api/v1/licenses/overview",
  options
});
var getLicenseSettings = async (options) => invokeFetch("licenses", {
  method: "get",
  pathTemplate: "/api/v1/licenses/settings",
  options
});
var updateLicenseSettings = async (body, options) => invokeFetch("licenses", {
  method: "put",
  pathTemplate: "/api/v1/licenses/settings",
  body,
  contentType: "application/json",
  options
});
var getLicenseStatus = async (options) => invokeFetch("licenses", {
  method: "get",
  pathTemplate: "/api/v1/licenses/status",
  options
});
function clearCache() {
  return clearApiCache("licenses");
}
var licensesExport = {
  getLicenseAssignments,
  addLicenseAssignments,
  deleteLicenseAssignments,
  updateLicenseAssignments,
  getLicenseConsumption,
  getLicenseOverview,
  getLicenseSettings,
  updateLicenseSettings,
  getLicenseStatus,
  clearCache
};
var licenses_default = licensesExport;
export {
  addLicenseAssignments,
  clearCache,
  licenses_default as default,
  deleteLicenseAssignments,
  getLicenseAssignments,
  getLicenseConsumption,
  getLicenseOverview,
  getLicenseSettings,
  getLicenseStatus,
  updateLicenseAssignments,
  updateLicenseSettings
};
