import { t as __exportAll } from "../chunks/chunk-D3vHIbds.js";
import "../chunks/public-runtime-modules-QhLPeQr5.js";
import { n as invokeFetch, t as clearApiCache } from "../chunks/invoke-fetch-B7lGscuQ.js";

//#region src/public/rest/core/ip-policies.ts
var ip_policies_exports = /* @__PURE__ */ __exportAll({
	clearCache: () => clearCache,
	createIpPolicy: () => createIpPolicy,
	default: () => ip_policies_default,
	deleteIpPolicy: () => deleteIpPolicy,
	getIpPolicies: () => getIpPolicies,
	getIpPolicy: () => getIpPolicy,
	patchIpPolicy: () => patchIpPolicy
});
/**
* Returns a list of IP policies present in the tenant. The user must be assigned the `TenantAdmin` role.
*
* @param query an object with query parameters
* @throws GetIpPoliciesHttpError
*/
async function getIpPolicies(query, options) {
	return invokeFetch("core/ip-policies", {
		method: "get",
		pathTemplate: "/api/core/ip-policies",
		query,
		options
	});
}
/**
* Creates a new IPv4 IP policy in the tenant. If this is the first enabled policy, IP allowlisting will be enabled and access via other IP addresses will be blocked. The user's IP address must be present in at least one policy if allowlisting is enabled. The user must be assigned the `TenantAdmin` role. IPv6 IP addresses are not currently supported.
*
* @param body an object with the body content
* @throws CreateIpPolicyHttpError
*/
async function createIpPolicy(body, options) {
	return invokeFetch("core/ip-policies", {
		method: "post",
		pathTemplate: "/api/core/ip-policies",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Deletes an IP policy by ID. If this is the last enabled policy in the tenant, IP allowlisting will be disabled and access will be permitted via all IP addresses. The user's IP address must be present in at least one other policy if allowlisting is enabled. The user must be assigned the `TenantAdmin` role.
*
* @param id The unique identifier for the IP policy.
* @throws DeleteIpPolicyHttpError
*/
async function deleteIpPolicy(id, options) {
	return invokeFetch("core/ip-policies", {
		method: "delete",
		pathTemplate: "/api/core/ip-policies/{id}",
		pathVariables: { id },
		options
	});
}
/**
* Retrieves details for a specific IP policy by policy ID.
*
* @param id The IP policy unique identifier
* @throws GetIpPolicyHttpError
*/
async function getIpPolicy(id, options) {
	return invokeFetch("core/ip-policies", {
		method: "get",
		pathTemplate: "/api/core/ip-policies/{id}",
		pathVariables: { id },
		options
	});
}
/**
* Updates the IP policy. If this is the first enabled policy in the tenant, IP allowlisting will be enabled and access via other IP addresses will be blocked. The user's IP address must be present in at least one policy if allowlisting is enabled. The user must be assigned the `TenantAdmin` role.
*
* @param id The unique identifier for the IP policy.
* @param body an object with the body content
* @throws PatchIpPolicyHttpError
*/
async function patchIpPolicy(id, body, options) {
	return invokeFetch("core/ip-policies", {
		method: "patch",
		pathTemplate: "/api/core/ip-policies/{id}",
		pathVariables: { id },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Clears the cache for core/ip-policies api requests.
*/
function clearCache() {
	return clearApiCache("core/ip-policies");
}
/**
* Functions for the ip-policies api
*/
const ipPoliciesExport = {
	getIpPolicies,
	createIpPolicy,
	deleteIpPolicy,
	getIpPolicy,
	patchIpPolicy,
	clearCache
};
var ip_policies_default = ipPoliciesExport;

//#endregion
export { clearCache, createIpPolicy, ip_policies_default as default, deleteIpPolicy, getIpPolicies, getIpPolicy, patchIpPolicy, ip_policies_exports as t };