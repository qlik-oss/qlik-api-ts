"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkWA4O4PMUjs = require('./chunk-WA4O4PMU.js');
require('./chunk-L4SFSITJ.js');

// src/public/rest/licenses.ts
var getLicenseAssignments = async (query, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "licenses", {
  method: "get",
  pathTemplate: "/api/v1/licenses/assignments",
  query,
  options
});
var addLicenseAssignments = async (body, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "licenses", {
  method: "post",
  pathTemplate: "/api/v1/licenses/assignments/actions/add",
  body,
  options
});
var deleteLicenseAssignments = async (body, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "licenses", {
  method: "post",
  pathTemplate: "/api/v1/licenses/assignments/actions/delete",
  body,
  options
});
var updateLicenseAssignments = async (body, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "licenses", {
  method: "post",
  pathTemplate: "/api/v1/licenses/assignments/actions/update",
  body,
  options
});
var getLicenseConsumption = async (query, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "licenses", {
  method: "get",
  pathTemplate: "/api/v1/licenses/consumption",
  query,
  options
});
var getLicenseOverview = async (options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "licenses", {
  method: "get",
  pathTemplate: "/api/v1/licenses/overview",
  options
});
var getLicenseSettings = async (options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "licenses", {
  method: "get",
  pathTemplate: "/api/v1/licenses/settings",
  options
});
var updateLicenseSettings = async (body, options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "licenses", {
  method: "put",
  pathTemplate: "/api/v1/licenses/settings",
  body,
  options
});
var getLicenseStatus = async (options) => _chunkWA4O4PMUjs.invokeFetch.call(void 0, "licenses", {
  method: "get",
  pathTemplate: "/api/v1/licenses/status",
  options
});
function clearCache() {
  return _chunkWA4O4PMUjs.clearApiCache.call(void 0, "licenses");
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












exports.addLicenseAssignments = addLicenseAssignments; exports.clearCache = clearCache; exports.default = licenses_default; exports.deleteLicenseAssignments = deleteLicenseAssignments; exports.getLicenseAssignments = getLicenseAssignments; exports.getLicenseConsumption = getLicenseConsumption; exports.getLicenseOverview = getLicenseOverview; exports.getLicenseSettings = getLicenseSettings; exports.getLicenseStatus = getLicenseStatus; exports.updateLicenseAssignments = updateLicenseAssignments; exports.updateLicenseSettings = updateLicenseSettings;
