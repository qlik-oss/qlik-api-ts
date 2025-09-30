import "./chunks/utils-1j8VpsDa.js";
import "./chunks/public-runtime-modules-BWdSJoOb.js";
import { clearApiCache, invokeFetch } from "./chunks/invoke-fetch-DUEcQxLv.js";

//#region src/public/rest/knowledgebases.ts
/**
* Returns a list of all knowledgebases the user has access to.
*
* @param query an object with query parameters
* @throws GetKnowledgebasesHttpError
*/
async function getKnowledgebases(query, options) {
	return invokeFetch("knowledgebases", {
		method: "get",
		pathTemplate: "/api/v1/knowledgebases",
		query,
		options
	});
}
/**
* Creates a new knowledgebase.
*
* @param body an object with the body content
* @throws CreateKnowledgebaseHttpError
*/
async function createKnowledgebase(body, options) {
	return invokeFetch("knowledgebases", {
		method: "post",
		pathTemplate: "/api/v1/knowledgebases",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Deletes a knowledgebase and all of its resources.
*
* @param id The id of the knowledgebase to delete.
* @throws DeleteKnowledgebaseHttpError
*/
async function deleteKnowledgebase(id, options) {
	return invokeFetch("knowledgebases", {
		method: "delete",
		pathTemplate: "/api/v1/knowledgebases/{id}",
		pathVariables: { id },
		options
	});
}
/**
* Retrieves a specific knowledgebase.
*
* @param id The id of the knowledgebase to retrieve.
* @throws GetKnowledgebaseHttpError
*/
async function getKnowledgebase(id, options) {
	return invokeFetch("knowledgebases", {
		method: "get",
		pathTemplate: "/api/v1/knowledgebases/{id}",
		pathVariables: { id },
		options
	});
}
/**
* Updates properties of a specific knowledgebase.
*
* @param id The knowledgebase id.
* @param body an object with the body content
* @throws PatchKnowledgebaseHttpError
*/
async function patchKnowledgebase(id, body, options) {
	return invokeFetch("knowledgebases", {
		method: "patch",
		pathTemplate: "/api/v1/knowledgebases/{id}",
		pathVariables: { id },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Adds a datasource to a knowledgebase.
*
* @param id The id of the knowledgebase.
* @param body an object with the body content
* @throws CreateKnowledgebaseDatasourceHttpError
*/
async function createKnowledgebaseDatasource(id, body, options) {
	return invokeFetch("knowledgebases", {
		method: "post",
		pathTemplate: "/api/v1/knowledgebases/{id}/datasources",
		pathVariables: { id },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Deletes a specified datasource and all its resources.
*
* @param id The id of the knowledgebase the datasource belongs to.
* @param datasourceId The id of the datasource to delete.
* @throws DeleteKnowledgebaseDatasourceHttpError
*/
async function deleteKnowledgebaseDatasource(id, datasourceId, options) {
	return invokeFetch("knowledgebases", {
		method: "delete",
		pathTemplate: "/api/v1/knowledgebases/{id}/datasources/{datasourceId}",
		pathVariables: {
			id,
			datasourceId
		},
		options
	});
}
/**
* Update a knowledgebase datasource
*
* @param id The id of a knowledgebase.
* @param datasourceId The id of the datasource to update.
* @param body an object with the body content
* @throws UpdateKnowledgebaseDatasourceHttpError
*/
async function updateKnowledgebaseDatasource(id, datasourceId, body, options) {
	return invokeFetch("knowledgebases", {
		method: "put",
		pathTemplate: "/api/v1/knowledgebases/{id}/datasources/{datasourceId}",
		pathVariables: {
			id,
			datasourceId
		},
		body,
		contentType: "application/json",
		options
	});
}
/**
* Cancels ongoing sync for a specified datasource.
*
* @param id The id of the knowledgebase the datasource belongs to.
* @param datasourceId The id of the datasource to cancel sync for.
* @throws CancelKnowledgebaseDatasourceHttpError
*/
async function cancelKnowledgebaseDatasource(id, datasourceId, options) {
	return invokeFetch("knowledgebases", {
		method: "post",
		pathTemplate: "/api/v1/knowledgebases/{id}/datasources/{datasourceId}/actions/cancel",
		pathVariables: {
			id,
			datasourceId
		},
		options
	});
}
/**
* Download knowledgebase datasource reference
*
* @param id The id of the knowledgebase the datasource belongs to.
* @param datasourceId The id of the datasource to download from.
* @param body an object with the body content
* @throws DownloadKnowledgebaseDatasourceHttpError
*/
async function downloadKnowledgebaseDatasource(id, datasourceId, body, options) {
	return invokeFetch("knowledgebases", {
		method: "post",
		pathTemplate: "/api/v1/knowledgebases/{id}/datasources/{datasourceId}/actions/download",
		pathVariables: {
			id,
			datasourceId
		},
		body,
		contentType: "application/json",
		options
	});
}
/**
* Starts syncing a specified datasource to a specified knowledgebase index.
*
* @param id The id of the knowledgebase the datasource belongs to.
* @param datasourceId The id of the datasource to sync.
* @param query an object with query parameters
* @throws SyncKnowledgebaseDatasourceHttpError
*/
async function syncKnowledgebaseDatasource(id, datasourceId, query, options) {
	return invokeFetch("knowledgebases", {
		method: "post",
		pathTemplate: "/api/v1/knowledgebases/{id}/datasources/{datasourceId}/actions/sync",
		pathVariables: {
			id,
			datasourceId
		},
		query,
		options
	});
}
/**
* Retrieves sync history for a specified datasource in a knowledgebase. Returns a `404` if there is no sync history, or if the calling user doesn't have access to the datasource.
*
* @param id The id of the knowledgebase the datasource belongs to.
* @param datasourceId The id of the datasource.
* @param query an object with query parameters
* @throws GetKnowledgebaseDatasourceHistoriesHttpError
*/
async function getKnowledgebaseDatasourceHistories(id, datasourceId, query, options) {
	return invokeFetch("knowledgebases", {
		method: "get",
		pathTemplate: "/api/v1/knowledgebases/{id}/datasources/{datasourceId}/histories",
		pathVariables: {
			id,
			datasourceId
		},
		query,
		options
	});
}
/**
* @deprecated
*
* Retrieves detailed sync history for a specified datasource.
*
* @param id The id of the knowledgebase the datasource belongs to.
* @param datasourceId The id of the datasource.
* @param syncId The sync identifier.
* @throws GetKnowledgebaseDatasourceHistoryHttpError
*/
async function getKnowledgebaseDatasourceHistory(id, datasourceId, syncId, options) {
	return invokeFetch("knowledgebases", {
		method: "get",
		pathTemplate: "/api/v1/knowledgebases/{id}/datasources/{datasourceId}/histories/{syncId}",
		pathVariables: {
			id,
			datasourceId,
			syncId
		},
		options
	});
}
/**
* Delete knowledgebase datasource schedule
*
* @param id The id of the knowledgebase the schedule belongs to.
* @param datasourceId The id of the datasource the schedule belongs to.
* @throws DeleteKnowledgebaseDatasourceScheduleHttpError
*/
async function deleteKnowledgebaseDatasourceSchedule(id, datasourceId, options) {
	return invokeFetch("knowledgebases", {
		method: "delete",
		pathTemplate: "/api/v1/knowledgebases/{id}/datasources/{datasourceId}/schedules",
		pathVariables: {
			id,
			datasourceId
		},
		options
	});
}
/**
* Get a knowledgebase datasource schedule
*
* @param id The id of the knowledgebase the schedule belongs to.
* @param datasourceId The id of the datasource the schedule belongs to.
* @throws GetKnowledgebaseDatasourceScheduleHttpError
*/
async function getKnowledgebaseDatasourceSchedule(id, datasourceId, options) {
	return invokeFetch("knowledgebases", {
		method: "get",
		pathTemplate: "/api/v1/knowledgebases/{id}/datasources/{datasourceId}/schedules",
		pathVariables: {
			id,
			datasourceId
		},
		options
	});
}
/**
* Creates or updates a specified datasource schedule.
*
* @param id The id of the knowledgebase the schedule belongs to.
* @param datasourceId The id of the datasource the schedule belongs to.
* @param body an object with the body content
* @throws CreateKnowledgebaseDatasourceScheduleHttpError
*/
async function createKnowledgebaseDatasourceSchedule(id, datasourceId, body, options) {
	return invokeFetch("knowledgebases", {
		method: "post",
		pathTemplate: "/api/v1/knowledgebases/{id}/datasources/{datasourceId}/schedules",
		pathVariables: {
			id,
			datasourceId
		},
		body,
		contentType: "application/json",
		options
	});
}
/**
* Retrieves sync history for the specified knowledgebase. Will return a `404` if no sync history exists, or if the calling user does not have access to synced datasources.
*
* @param id The id of the knowledgebase.
* @param query an object with query parameters
* @throws GetKnowledgebaseHistoriesHttpError
*/
async function getKnowledgebaseHistories(id, query, options) {
	return invokeFetch("knowledgebases", {
		method: "get",
		pathTemplate: "/api/v1/knowledgebases/{id}/histories",
		pathVariables: { id },
		query,
		options
	});
}
/**
* Clears the cache for knowledgebases api requests.
*/
function clearCache() {
	return clearApiCache("knowledgebases");
}
/**
* Functions for the knowledgebases api
*/
const knowledgebasesExport = {
	getKnowledgebases,
	createKnowledgebase,
	deleteKnowledgebase,
	getKnowledgebase,
	patchKnowledgebase,
	createKnowledgebaseDatasource,
	deleteKnowledgebaseDatasource,
	updateKnowledgebaseDatasource,
	cancelKnowledgebaseDatasource,
	downloadKnowledgebaseDatasource,
	syncKnowledgebaseDatasource,
	getKnowledgebaseDatasourceHistories,
	getKnowledgebaseDatasourceHistory,
	deleteKnowledgebaseDatasourceSchedule,
	getKnowledgebaseDatasourceSchedule,
	createKnowledgebaseDatasourceSchedule,
	getKnowledgebaseHistories,
	clearCache
};
var knowledgebases_default = knowledgebasesExport;

//#endregion
export { cancelKnowledgebaseDatasource, clearCache, createKnowledgebase, createKnowledgebaseDatasource, createKnowledgebaseDatasourceSchedule, knowledgebases_default as default, deleteKnowledgebase, deleteKnowledgebaseDatasource, deleteKnowledgebaseDatasourceSchedule, downloadKnowledgebaseDatasource, getKnowledgebase, getKnowledgebaseDatasourceHistories, getKnowledgebaseDatasourceHistory, getKnowledgebaseDatasourceSchedule, getKnowledgebaseHistories, getKnowledgebases, patchKnowledgebase, syncKnowledgebaseDatasource, updateKnowledgebaseDatasource };