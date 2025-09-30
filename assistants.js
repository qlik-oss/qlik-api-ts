import "./chunks/utils-1j8VpsDa.js";
import "./chunks/public-runtime-modules-Bid7jvqK.js";
import { clearApiCache, invokeFetch } from "./chunks/invoke-fetch-B-tEkc9D.js";

//#region src/public/rest/assistants.ts
/**
* Retrieves the list of assistants. The result can be filtered, sorted, and paginated.
*
* @param query an object with query parameters
* @throws GetAssistantsHttpError
*/
async function getAssistants(query, options) {
	return invokeFetch("assistants", {
		method: "get",
		pathTemplate: "/api/v1/assistants",
		query,
		options
	});
}
/**
* Creates a new assistant.
*
* @param body an object with the body content
* @throws CreateAssistantHttpError
*/
async function createAssistant(body, options) {
	return invokeFetch("assistants", {
		method: "post",
		pathTemplate: "/api/v1/assistants",
		body,
		contentType: "application/json",
		options
	});
}
/**
* Retrieves feedback summary for the assistant.
*
* @param assistantId The ID of the assistant from which to retrieve feedback summary.
* @throws GetAssistantFeedbackHttpError
*/
async function getAssistantFeedback(assistantId, options) {
	return invokeFetch("assistants", {
		method: "get",
		pathTemplate: "/api/v1/assistants/{assistantId}/feedback",
		pathVariables: { assistantId },
		options
	});
}
/**
* Perform a bulk search for the plaintext of source chunks for the assistant.
*
* @param assistantId The ID of the assistant in which to search for source chunks.
* @param body an object with the body content
* @throws GetAssistantSourcesHttpError
*/
async function getAssistantSources(assistantId, body, options) {
	return invokeFetch("assistants", {
		method: "post",
		pathTemplate: "/api/v1/assistants/{assistantId}/sources/plaintexts",
		pathVariables: { assistantId },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Retrieves the list of starters for the assistant.
*
* @param assistantId The ID of the assistant from which to retrieve starters.
* @param query an object with query parameters
* @throws GetAssistantStartersHttpError
*/
async function getAssistantStarters(assistantId, query, options) {
	return invokeFetch("assistants", {
		method: "get",
		pathTemplate: "/api/v1/assistants/{assistantId}/starters",
		pathVariables: { assistantId },
		query,
		options
	});
}
/**
* Creates a new starter for the assistant.
*
* @param assistantId The ID of the assistant in which to create the starter.
* @param body an object with the body content
* @throws CreateAssistantStarterHttpError
*/
async function createAssistantStarter(assistantId, body, options) {
	return invokeFetch("assistants", {
		method: "post",
		pathTemplate: "/api/v1/assistants/{assistantId}/starters",
		pathVariables: { assistantId },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Deletes the starter and all of its resources.
*
* @param assistantId The ID of the assistant containing the requested starter.
* @param starterId The ID of the starter to delete.
* @throws DeleteAssistantStarterHttpError
*/
async function deleteAssistantStarter(assistantId, starterId, options) {
	return invokeFetch("assistants", {
		method: "delete",
		pathTemplate: "/api/v1/assistants/{assistantId}/starters/{starterId}",
		pathVariables: {
			assistantId,
			starterId
		},
		options
	});
}
/**
* Retrieves the specified starter.
*
* @param assistantId The ID of the assistant containing the requested starter.
* @param starterId The ID of the starter to retrieve.
* @throws GetAssistantStarterHttpError
*/
async function getAssistantStarter(assistantId, starterId, options) {
	return invokeFetch("assistants", {
		method: "get",
		pathTemplate: "/api/v1/assistants/{assistantId}/starters/{starterId}",
		pathVariables: {
			assistantId,
			starterId
		},
		options
	});
}
/**
* Updates the specified starter.
*
* @param assistantId The ID of the assistant containing the requested starter.
* @param starterId The ID of the starter to retrieve.
* @param body an object with the body content
* @throws UpdateAssistantStarterHttpError
*/
async function updateAssistantStarter(assistantId, starterId, body, options) {
	return invokeFetch("assistants", {
		method: "put",
		pathTemplate: "/api/v1/assistants/{assistantId}/starters/{starterId}",
		pathVariables: {
			assistantId,
			starterId
		},
		body,
		contentType: "application/json",
		options
	});
}
/**
* Deletes the specified Followup.
*
* @param assistantId The ID of the assistant containing the requested Followup.
* @param starterId The ID of the starter containing the requested Followup.
* @param followupId The ID of the Followup to delete.
* @throws DeleteAssistantStarterFollowupHttpError
*/
async function deleteAssistantStarterFollowup(assistantId, starterId, followupId, options) {
	return invokeFetch("assistants", {
		method: "delete",
		pathTemplate: "/api/v1/assistants/{assistantId}/starters/{starterId}/followups/{followupId}",
		pathVariables: {
			assistantId,
			starterId,
			followupId
		},
		options
	});
}
/**
* Updates the specified Followup.
*
* @param assistantId The ID of the assistant containing the requested Followup.
* @param starterId The ID of the starter containing the requested Followup.
* @param followupId The ID of the Followup to update.
* @param body an object with the body content
* @throws UpdateAssistantStarterFollowupHttpError
*/
async function updateAssistantStarterFollowup(assistantId, starterId, followupId, body, options) {
	return invokeFetch("assistants", {
		method: "put",
		pathTemplate: "/api/v1/assistants/{assistantId}/starters/{starterId}/followups/{followupId}",
		pathVariables: {
			assistantId,
			starterId,
			followupId
		},
		body,
		contentType: "application/json",
		options
	});
}
/**
* Retrieves the list of threads for the assistant.
*
* @param assistantId The ID of the assistant from which to retrieve threads.
* @param query an object with query parameters
* @throws GetAssistantThreadsHttpError
*/
async function getAssistantThreads(assistantId, query, options) {
	return invokeFetch("assistants", {
		method: "get",
		pathTemplate: "/api/v1/assistants/{assistantId}/threads",
		pathVariables: { assistantId },
		query,
		options
	});
}
/**
* Creates a new thread for the assistant.
*
* @param assistantId The ID of the assistant in which to create the thread.
* @param body an object with the body content
* @throws CreateAssistantThreadHttpError
*/
async function createAssistantThread(assistantId, body, options) {
	return invokeFetch("assistants", {
		method: "post",
		pathTemplate: "/api/v1/assistants/{assistantId}/threads",
		pathVariables: { assistantId },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Execute prompt in synchronous non-streaming mode.
*
* @param assistantId The id of the Assistant containing requested Thread
* @param threadId The id of the Thread to retrieve
* @param body an object with the body content
* @throws InvokeAssistantThreadHttpError
*/
async function invokeAssistantThread(assistantId, threadId, body, options) {
	return invokeFetch("assistants", {
		method: "post",
		pathTemplate: "/api/v1/assistants/{assistantId}/threads/{threadId}/actions/invoke",
		pathVariables: {
			assistantId,
			threadId
		},
		body,
		contentType: "application/json",
		options
	});
}
/**
* Execute prompt in asynchronous streaming mode.
*
* @param assistantId The id of the Assistant containing requested Thread
* @param threadId The id of the Thread to retrieve
* @param body an object with the body content
* @throws StreamAssistantThreadHttpError
*/
async function streamAssistantThread(assistantId, threadId, body, options) {
	return invokeFetch("assistants", {
		method: "post",
		pathTemplate: "/api/v1/assistants/{assistantId}/threads/{threadId}/actions/stream",
		pathVariables: {
			assistantId,
			threadId
		},
		body,
		contentType: "application/json",
		options
	});
}
/**
* Retrieves the list of interactions for the thread.
*
* @param assistantId The ID of the assistant from which to retrieve the interactions.
* @param threadId The ID of the thread from which to retrieve the interactions.
* @param query an object with query parameters
* @throws GetAssistantThreadInteractionsHttpError
*/
async function getAssistantThreadInteractions(assistantId, threadId, query, options) {
	return invokeFetch("assistants", {
		method: "get",
		pathTemplate: "/api/v1/assistants/{assistantId}/threads/{threadId}/interactions",
		pathVariables: {
			assistantId,
			threadId
		},
		query,
		options
	});
}
/**
* Creates a new interaction for the thread.
*
* @param assistantId The ID of the assistant in which to create the interaction.
* @param threadId The ID of the thread in which to create the interaction.
* @param body an object with the body content
* @throws CreateAssistantThreadInteractionHttpError
*/
async function createAssistantThreadInteraction(assistantId, threadId, body, options) {
	return invokeFetch("assistants", {
		method: "post",
		pathTemplate: "/api/v1/assistants/{assistantId}/threads/{threadId}/interactions",
		pathVariables: {
			assistantId,
			threadId
		},
		body,
		contentType: "application/json",
		options
	});
}
/**
* Deletes the specified interaction and all of its resources.
*
* @param assistantId The ID of the assistant in which to delete the interaction.
* @param threadId The ID of the thread in which to delete the interaction.
* @param interactionId The ID of the interaction to delete.
* @throws DeleteAssistantThreadInteractionHttpError
*/
async function deleteAssistantThreadInteraction(assistantId, threadId, interactionId, options) {
	return invokeFetch("assistants", {
		method: "delete",
		pathTemplate: "/api/v1/assistants/{assistantId}/threads/{threadId}/interactions/{interactionId}",
		pathVariables: {
			assistantId,
			threadId,
			interactionId
		},
		options
	});
}
/**
* Retrieves an interaction for the thread.
*
* @param assistantId The ID of the assistant in which to retrieve the interaction.
* @param threadId The ID of the thread in which to retrieve the interaction.
* @param interactionId The ID of the interaction to retrieve.
* @throws GetAssistantThreadInteractionHttpError
*/
async function getAssistantThreadInteraction(assistantId, threadId, interactionId, options) {
	return invokeFetch("assistants", {
		method: "get",
		pathTemplate: "/api/v1/assistants/{assistantId}/threads/{threadId}/interactions/{interactionId}",
		pathVariables: {
			assistantId,
			threadId,
			interactionId
		},
		options
	});
}
/**
* Creates feedback for the thread.
*
* @param assistantId The ID of the assistant in which to create the feedback.
* @param threadId The ID of the thread in which to create the feedback.
* @param interactionId The ID of the interaction in which to create the feedback.
* @param body an object with the body content
* @throws CreateAssistantThreadInteractionFeedbackHttpError
*/
async function createAssistantThreadInteractionFeedback(assistantId, threadId, interactionId, body, options) {
	return invokeFetch("assistants", {
		method: "post",
		pathTemplate: "/api/v1/assistants/{assistantId}/threads/{threadId}/interactions/{interactionId}/feedback",
		pathVariables: {
			assistantId,
			threadId,
			interactionId
		},
		body,
		contentType: "application/json",
		options
	});
}
/**
* Updates feedback for the thread.
*
* @param assistantId The ID of the assistant containing the requested feedback.
* @param threadId The ID of the thread containing the requested feedback.
* @param interactionId The ID of the interaction containing the requested Feedback.
* @param feedbackId The ID of the feedback to update.
* @param body an object with the body content
* @throws PatchAssistantThreadInteractionFeedbackHttpError
*/
async function patchAssistantThreadInteractionFeedback(assistantId, threadId, interactionId, feedbackId, body, options) {
	return invokeFetch("assistants", {
		method: "patch",
		pathTemplate: "/api/v1/assistants/{assistantId}/threads/{threadId}/interactions/{interactionId}/feedback/{feedbackId}",
		pathVariables: {
			assistantId,
			threadId,
			interactionId,
			feedbackId
		},
		body,
		contentType: "application/json",
		options
	});
}
/**
* Creates feedback review for the thread.
*
* @param assistantId The ID of the assistant in which to create the feedback review.
* @param threadId The ID of the thread in which to create the feedback review.
* @param interactionId The ID of the interaction in which to create the feedback review.
* @param body an object with the body content
* @throws CreateAssistantThreadInteractionReviewHttpError
*/
async function createAssistantThreadInteractionReview(assistantId, threadId, interactionId, body, options) {
	return invokeFetch("assistants", {
		method: "post",
		pathTemplate: "/api/v1/assistants/{assistantId}/threads/{threadId}/interactions/{interactionId}/reviews",
		pathVariables: {
			assistantId,
			threadId,
			interactionId
		},
		body,
		contentType: "application/json",
		options
	});
}
/**
* Deletes the specified thread and all of its resources.
*
* @param assistantid The ID of the assistant containing the requested thread.
* @param threadid The ID of the thread to retrieve.
* @throws DeleteAssistantThreadHttpError
*/
async function deleteAssistantThread(assistantid, threadid, options) {
	return invokeFetch("assistants", {
		method: "delete",
		pathTemplate: "/api/v1/assistants/{assistantid}/threads/{threadid}",
		pathVariables: {
			assistantid,
			threadid
		},
		options
	});
}
/**
* Retrieves a thread for the assistant.
*
* @param assistantid The ID of the assistant containing the requested thread.
* @param threadid The ID of the thread to retrieve.
* @throws GetAssistantThreadHttpError
*/
async function getAssistantThread(assistantid, threadid, options) {
	return invokeFetch("assistants", {
		method: "get",
		pathTemplate: "/api/v1/assistants/{assistantid}/threads/{threadid}",
		pathVariables: {
			assistantid,
			threadid
		},
		options
	});
}
/**
* Updates the properties of an existing thread with JSON Patch-formatted data.
*
* @param assistantid The ID of the assistant containing the requested thread.
* @param threadid The ID of the thread to retrieve.
* @param body an object with the body content
* @throws PatchAssistantThreadHttpError
*/
async function patchAssistantThread(assistantid, threadid, body, options) {
	return invokeFetch("assistants", {
		method: "patch",
		pathTemplate: "/api/v1/assistants/{assistantid}/threads/{threadid}",
		pathVariables: {
			assistantid,
			threadid
		},
		body,
		contentType: "application/json",
		options
	});
}
/**
* Deletes the assistant and all of its resources.
*
* @param id The ID of the assistant to delete.
* @throws DeleteAssistantHttpError
*/
async function deleteAssistant(id, options) {
	return invokeFetch("assistants", {
		method: "delete",
		pathTemplate: "/api/v1/assistants/{id}",
		pathVariables: { id },
		options
	});
}
/**
* Retrieves the specified assistant.
*
* @param id The ID of the assistant to retrieve.
* @throws GetAssistantHttpError
*/
async function getAssistant(id, options) {
	return invokeFetch("assistants", {
		method: "get",
		pathTemplate: "/api/v1/assistants/{id}",
		pathVariables: { id },
		options
	});
}
/**
* Updates the properties of an existing assistant with JSON Patch-formatted data.
*
* @param id The assistant ID.
* @param body an object with the body content
* @throws PatchAssistantHttpError
*/
async function patchAssistant(id, body, options) {
	return invokeFetch("assistants", {
		method: "patch",
		pathTemplate: "/api/v1/assistants/{id}",
		pathVariables: { id },
		body,
		contentType: "application/json",
		options
	});
}
/**
* Clears the cache for assistants api requests.
*/
function clearCache() {
	return clearApiCache("assistants");
}
/**
* Functions for the assistants api
*/
const assistantsExport = {
	getAssistants,
	createAssistant,
	getAssistantFeedback,
	getAssistantSources,
	getAssistantStarters,
	createAssistantStarter,
	deleteAssistantStarter,
	getAssistantStarter,
	updateAssistantStarter,
	deleteAssistantStarterFollowup,
	updateAssistantStarterFollowup,
	getAssistantThreads,
	createAssistantThread,
	invokeAssistantThread,
	streamAssistantThread,
	getAssistantThreadInteractions,
	createAssistantThreadInteraction,
	deleteAssistantThreadInteraction,
	getAssistantThreadInteraction,
	createAssistantThreadInteractionFeedback,
	patchAssistantThreadInteractionFeedback,
	createAssistantThreadInteractionReview,
	deleteAssistantThread,
	getAssistantThread,
	patchAssistantThread,
	deleteAssistant,
	getAssistant,
	patchAssistant,
	clearCache
};
var assistants_default = assistantsExport;

//#endregion
export { clearCache, createAssistant, createAssistantStarter, createAssistantThread, createAssistantThreadInteraction, createAssistantThreadInteractionFeedback, createAssistantThreadInteractionReview, assistants_default as default, deleteAssistant, deleteAssistantStarter, deleteAssistantStarterFollowup, deleteAssistantThread, deleteAssistantThreadInteraction, getAssistant, getAssistantFeedback, getAssistantSources, getAssistantStarter, getAssistantStarters, getAssistantThread, getAssistantThreadInteraction, getAssistantThreadInteractions, getAssistantThreads, getAssistants, invokeAssistantThread, patchAssistant, patchAssistantThread, patchAssistantThreadInteractionFeedback, streamAssistantThread, updateAssistantStarter, updateAssistantStarterFollowup };