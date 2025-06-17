import {
  clearApiCache,
  invokeFetch
} from "./chunks/BEREWEFO.js";
import "./chunks/GZ7FHV5J.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/licenses.ts
async function getLicenseAssignments(query, options) {
  return invokeFetch("licenses", {
    method: "get",
    pathTemplate: "/api/v1/licenses/assignments",
    query,
    options
  });
}
async function addLicenseAssignments(body, options) {
  return invokeFetch("licenses", {
    method: "post",
    pathTemplate: "/api/v1/licenses/assignments/actions/add",
    body,
    contentType: "application/json",
    options
  });
}
async function deleteLicenseAssignments(body, options) {
  return invokeFetch("licenses", {
    method: "post",
    pathTemplate: "/api/v1/licenses/assignments/actions/delete",
    body,
    contentType: "application/json",
    options
  });
}
async function updateLicenseAssignments(body, options) {
  return invokeFetch("licenses", {
    method: "post",
    pathTemplate: "/api/v1/licenses/assignments/actions/update",
    body,
    contentType: "application/json",
    options
  });
}
async function getLicenseConsumption(query, options) {
  return invokeFetch("licenses", {
    method: "get",
    pathTemplate: "/api/v1/licenses/consumption",
    query,
    options
  });
}
async function getLicenseOverview(options) {
  return invokeFetch("licenses", {
    method: "get",
    pathTemplate: "/api/v1/licenses/overview",
    options
  });
}
async function getLicenseSettings(options) {
  return invokeFetch("licenses", {
    method: "get",
    pathTemplate: "/api/v1/licenses/settings",
    options
  });
}
async function updateLicenseSettings(body, options) {
  return invokeFetch("licenses", {
    method: "put",
    pathTemplate: "/api/v1/licenses/settings",
    body,
    contentType: "application/json",
    options
  });
}
async function getLicenseStatus(options) {
  return invokeFetch("licenses", {
    method: "get",
    pathTemplate: "/api/v1/licenses/status",
    options
  });
}
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
