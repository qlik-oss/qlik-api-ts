import { t as __exportAll } from "../chunks/rolldown-runtime-w6R9maHv.js";
import { n as invokeFetch, t as clearApiCache } from "../chunks/invoke-fetch-B6hSp2sU.js";

//#region src/public/rest/connectivity/direct-access-agents.ts
var direct_access_agents_exports = /* @__PURE__ */ __exportAll({
	clearCache: () => clearCache,
	createDirectAccessAgentBenchmark: () => createDirectAccessAgentBenchmark,
	default: () => directAccessAgentsExport,
	getDirectAccessAgentBenchmarks: () => getDirectAccessAgentBenchmarks,
	getDirectAccessAgentLoadPerformanceMetrics: () => getDirectAccessAgentLoadPerformanceMetrics
});
/**
* Retrieves paginated statuses for benchmarks run by the specified Direct Access agent. Use the filters and sort order to find benchmark runs and review their progress or completed results. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.17+.
*
* @param agentId The agent ID
* @param query an object with query parameters
* @throws GetDirectAccessAgentBenchmarksHttpError
*/
async function getDirectAccessAgentBenchmarks(agentId, query, options) {
	return invokeFetch("connectivity/direct-access-agents", {
		method: "get",
		pathTemplate: "/api/connectivity/direct-access-agents/{agentId}/benchmarks",
		pathVariables: { agentId },
		query,
		options
	});
}
/**
* Starts a background benchmark task that measures the throughput and latency of a Direct Access agent. Use the returned `benchmarkId` to monitor progress and retrieve performance metrics for capacity planning or performance optimization. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Available in Direct Access Gateway V1.7.8+.
*
* @param agentId The agent ID
* @param query an object with query parameters
* @throws CreateDirectAccessAgentBenchmarkHttpError
*/
async function createDirectAccessAgentBenchmark(agentId, query, options) {
	return invokeFetch("connectivity/direct-access-agents", {
		method: "post",
		pathTemplate: "/api/connectivity/direct-access-agents/{agentId}/benchmarks",
		pathVariables: { agentId },
		query,
		options
	});
}
/**
* Retrieves performance metrics for loads processed by the gateway, either for all loads or a filtered subset. Use these metrics to evaluate reload throughput, connector latency, and concurrent reload activity. The requestor must have the `TenantAdmin` role and be either the gateway's space owner or a member of the gateway's space with the `Can Consume Data` role. Load performance recording is disabled by default and is controlled by the `BENCHMARK_LOAD_PERFORMANCE_METRICS_RECORDING_ENABLED` configuration property. Available in Direct Access Gateway V1.7.17+.
*
* @param agentId The agent ID
* @param query an object with query parameters
* @throws GetDirectAccessAgentLoadPerformanceMetricsHttpError
*/
async function getDirectAccessAgentLoadPerformanceMetrics(agentId, query, options) {
	return invokeFetch("connectivity/direct-access-agents", {
		method: "get",
		pathTemplate: "/api/connectivity/direct-access-agents/{agentId}/load-performance-metrics",
		pathVariables: { agentId },
		query,
		options
	});
}
/**
* Clears the cache for connectivity/direct-access-agents api requests.
*/
function clearCache() {
	return clearApiCache("connectivity/direct-access-agents");
}
/**
* Functions for the direct-access-agents api
*/
const directAccessAgentsExport = {
	getDirectAccessAgentBenchmarks,
	createDirectAccessAgentBenchmark,
	getDirectAccessAgentLoadPerformanceMetrics,
	clearCache
};

//#endregion
export { clearCache, createDirectAccessAgentBenchmark, directAccessAgentsExport as default, getDirectAccessAgentBenchmarks, getDirectAccessAgentLoadPerformanceMetrics, direct_access_agents_exports as t };