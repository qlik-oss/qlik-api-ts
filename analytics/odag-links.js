import { t as __exportAll } from "../chunks/chunk-w6R9maHv.js";
import { n as invokeFetch, t as clearApiCache } from "../chunks/invoke-fetch-CpHbSqJB.js";

//#region src/public/rest/analytics/odag-links.ts
var odag_links_exports = /* @__PURE__ */ __exportAll({
	clearCache: () => clearCache,
	createOdagLink: () => createOdagLink,
	createOdagLinkRequest: () => createOdagLinkRequest,
	createOdagLinksSelectionAppLinkUsage_FIX_THIS_QUIRKY_NAME: () => createOdagLinksSelectionAppLinkUsage_FIX_THIS_QUIRKY_NAME,
	default: () => odagLinksExport,
	getOdagLink: () => getOdagLink,
	getOdagLinkRequests: () => getOdagLinkRequests,
	getOdagLinks: () => getOdagLinks,
	getOdagLinksCancreate_FIX_THIS_QUIRKY_NAME: () => getOdagLinksCancreate_FIX_THIS_QUIRKY_NAME,
	updateOdagLink: () => updateOdagLink
});
/**
* A Link object defines an on-demand data navigation path between a selection Analytics Application and a template Analytics Application including the set of properties that control how that data access occurs and under what conditions access is permitted. The set of links returned by this method have properties that match the combination of conditions defined by any supplied query parameters.
*
* @param query an object with query parameters
* @throws GetOdagLinksHttpError
*/
async function getOdagLinks(query, options) {
	return invokeFetch("analytics/odag-links", {
		method: "get",
		pathTemplate: "/api/analytics/odag-links",
		query,
		options
	});
}
/**
* Creates a new link that enables ODAG navigation from a designated selection Analytics Application to a generated Analytics Application that is created by copying the designated template Analytics Application, injecting values for bind variables harvested from the selection Analytics Application and dynamically loaded with data using those bindings. The Bindings will be initialized by searching the load script of the template Analytics Application for patterns of the form `$(od_FIELDNAME)[M-N]` where `FIELDNAME` is the name of a field in the model of the selection Analytics Application and the optional pattern `[M-N]` identifies the lower bound `M` and the upper bound `N` for the number of values for that field which must be in the active selection state of the selection Analytics Application for binding to occur.  The active selection state defaults to `selected` (i.e. green) unless the `od` prefix is immediately followed by some combination of the letters `s`, `o`, or `x`, in that order, specifically designating the `selected`, `optional` (i.e. white) and/or `excluded` (i.e. gray) groups of values to be harvested from the selection Analytics Application's selection state. The bindings in the `bindings` array in the request payload override the properties of the corresponding field bindings found in the script of the template Analytics Application.
*
* @param query an object with query parameters
* @param body an object with the body content
* @throws CreateOdagLinkHttpError
*/
async function createOdagLink(query, body, options) {
	return invokeFetch("analytics/odag-links", {
		method: "post",
		pathTemplate: "/api/analytics/odag-links",
		query,
		body,
		contentType: "application/json",
		options
	});
}
/**
* Checks whether the current user has permission to create new ODAG links. Optionally verify permissions for a specific template Analytics Application or selection Analytics Application context. Returns a boolean indicating create permission status.
*
* @param query an object with query parameters
* @throws GetOdagLinksCancreate_FIX_THIS_QUIRKY_NAMEHttpError
*/
async function getOdagLinksCancreate_FIX_THIS_QUIRKY_NAME(query, options) {
	return invokeFetch("analytics/odag-links", {
		method: "get",
		pathTemplate: "/api/analytics/odag-links/cancreate",
		query,
		options
	});
}
/**
* Registers the current set of ODAG links referenced by a selection Analytics Application and returns only those links the current user can access. Call this when a selection Analytics Application is opened or after modifying its ODAG link references. The response is an array of objects, where the `id` identifies the requested link and `link` contains the link state when accessible. Use `GET /analytics/odag-links/{linkId}` for full details.
*
* @param query an object with query parameters
* @param body an object with the body content
* @throws CreateOdagLinksSelectionAppLinkUsage_FIX_THIS_QUIRKY_NAMEHttpError
*/
async function createOdagLinksSelectionAppLinkUsage_FIX_THIS_QUIRKY_NAME(query, body, options) {
	return invokeFetch("analytics/odag-links", {
		method: "post",
		pathTemplate: "/api/analytics/odag-links/selection-app-link-usages",
		query,
		body,
		contentType: "application/json",
		options
	});
}
/**
* Retrieves details of a specific ODAG link, including bindings, properties, status, and template Analytics Application charts. Use this to review link configuration or verify permissions before generating Analytics Applications.
*
* @param linkId The ID of the link.
* @param query an object with query parameters
* @throws GetOdagLinkHttpError
*/
async function getOdagLink(linkId, query, options) {
	return invokeFetch("analytics/odag-links", {
		method: "get",
		pathTemplate: "/api/analytics/odag-links/{linkId}",
		pathVariables: { linkId },
		query,
		options
	});
}
/**
* Modifies ODAG link configuration including bindings, properties, status, and template Analytics Application reference. You can re-scan the template Analytics Application script to auto-detect binding patterns or override specific settings. If `statusSetting` is provided, the request updates only the link status (other payload fields are not applied).
*
* @param linkId The ID of the link.
* @param query an object with query parameters
* @param body an object with the body content
* @throws UpdateOdagLinkHttpError
*/
async function updateOdagLink(linkId, query, body, options) {
	return invokeFetch("analytics/odag-links", {
		method: "put",
		pathTemplate: "/api/analytics/odag-links/{linkId}",
		pathVariables: { linkId },
		query,
		body,
		contentType: "application/json",
		options
	});
}
/**
* Retrieves all Analytics Application generation requests for a specific ODAG link, with optional filtering by pending status (`pending`), selection Analytics Application (`selectionAppId`), sheet context (`selectionAppSheet`), or client context (`clientContextHandle`). Use this to track generation history or monitor in-flight requests.
*
* @param linkId The ID of the link.
* @param query an object with query parameters
* @throws GetOdagLinkRequestsHttpError
*/
async function getOdagLinkRequests(linkId, query, options) {
	return invokeFetch("analytics/odag-links", {
		method: "get",
		pathTemplate: "/api/analytics/odag-links/{linkId}/requests",
		pathVariables: { linkId },
		query,
		options
	});
}
/**
* Submits a new Analytics Application generation request with the current selection state from a selection Analytics Application. The request is validated against link properties before queuing.  On success, returns a request object that you must monitor for completion using the status endpoint.  Validation failures return detailed error information.
*
* @param linkId The ID of the link.
* @param body an object with the body content
* @throws CreateOdagLinkRequestHttpError
*/
async function createOdagLinkRequest(linkId, body, options) {
	return invokeFetch("analytics/odag-links", {
		method: "post",
		pathTemplate: "/api/analytics/odag-links/{linkId}/requests",
		pathVariables: { linkId },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Clears the cache for analytics/odag-links api requests.
*/
function clearCache() {
	return clearApiCache("analytics/odag-links");
}
/**
* Functions for the odag-links api
*/
const odagLinksExport = {
	getOdagLinks,
	createOdagLink,
	getOdagLinksCancreate_FIX_THIS_QUIRKY_NAME,
	createOdagLinksSelectionAppLinkUsage_FIX_THIS_QUIRKY_NAME,
	getOdagLink,
	updateOdagLink,
	getOdagLinkRequests,
	createOdagLinkRequest,
	clearCache
};

//#endregion
export { clearCache, createOdagLink, createOdagLinkRequest, createOdagLinksSelectionAppLinkUsage_FIX_THIS_QUIRKY_NAME, odagLinksExport as default, getOdagLink, getOdagLinkRequests, getOdagLinks, getOdagLinksCancreate_FIX_THIS_QUIRKY_NAME, odag_links_exports as t, updateOdagLink };