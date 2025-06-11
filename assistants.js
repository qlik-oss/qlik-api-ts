import {
  clearApiCache,
  invokeFetch
} from "./chunks/PUS32UJH.js";
import "./chunks/CLZXLW6N.js";
import "./chunks/2ZQ3ZX7F.js";

// src/public/rest/assistants.ts
var getAssistants = async (query, options) => invokeFetch("assistants", {
  method: "get",
  pathTemplate: "/api/v1/assistants",
  query,
  options
});
var createAssistant = async (body, options) => invokeFetch("assistants", {
  method: "post",
  pathTemplate: "/api/v1/assistants",
  body,
  contentType: "application/json",
  options
});
var getAssistantFeedback = async (assistantId, options) => invokeFetch("assistants", {
  method: "get",
  pathTemplate: "/api/v1/assistants/{assistantId}/feedback",
  pathVariables: { assistantId },
  options
});
var getAssistantSources = async (assistantId, body, options) => invokeFetch("assistants", {
  method: "post",
  pathTemplate: "/api/v1/assistants/{assistantId}/sources/plaintexts",
  pathVariables: { assistantId },
  body,
  contentType: "application/json",
  options
});
var getAssistantStarters = async (assistantId, query, options) => invokeFetch("assistants", {
  method: "get",
  pathTemplate: "/api/v1/assistants/{assistantId}/starters",
  pathVariables: { assistantId },
  query,
  options
});
var createAssistantStarter = async (assistantId, body, options) => invokeFetch("assistants", {
  method: "post",
  pathTemplate: "/api/v1/assistants/{assistantId}/starters",
  pathVariables: { assistantId },
  body,
  contentType: "application/json",
  options
});
var deleteAssistantStarter = async (assistantId, starterId, options) => invokeFetch("assistants", {
  method: "delete",
  pathTemplate: "/api/v1/assistants/{assistantId}/starters/{starterId}",
  pathVariables: { assistantId, starterId },
  options
});
var getAssistantStarter = async (assistantId, starterId, options) => invokeFetch("assistants", {
  method: "get",
  pathTemplate: "/api/v1/assistants/{assistantId}/starters/{starterId}",
  pathVariables: { assistantId, starterId },
  options
});
var updateAssistantStarter = async (assistantId, starterId, body, options) => invokeFetch("assistants", {
  method: "put",
  pathTemplate: "/api/v1/assistants/{assistantId}/starters/{starterId}",
  pathVariables: { assistantId, starterId },
  body,
  contentType: "application/json",
  options
});
var deleteAssistantStarterFollowup = async (assistantId, starterId, followupId, options) => invokeFetch("assistants", {
  method: "delete",
  pathTemplate: "/api/v1/assistants/{assistantId}/starters/{starterId}/followups/{followupId}",
  pathVariables: { assistantId, starterId, followupId },
  options
});
var updateAssistantStarterFollowup = async (assistantId, starterId, followupId, body, options) => invokeFetch("assistants", {
  method: "put",
  pathTemplate: "/api/v1/assistants/{assistantId}/starters/{starterId}/followups/{followupId}",
  pathVariables: { assistantId, starterId, followupId },
  body,
  contentType: "application/json",
  options
});
var getAssistantThreads = async (assistantId, query, options) => invokeFetch("assistants", {
  method: "get",
  pathTemplate: "/api/v1/assistants/{assistantId}/threads",
  pathVariables: { assistantId },
  query,
  options
});
var createAssistantThread = async (assistantId, body, options) => invokeFetch("assistants", {
  method: "post",
  pathTemplate: "/api/v1/assistants/{assistantId}/threads",
  pathVariables: { assistantId },
  body,
  contentType: "application/json",
  options
});
var invokeAssistantThread = async (assistantId, threadId, body, options) => invokeFetch("assistants", {
  method: "post",
  pathTemplate: "/api/v1/assistants/{assistantId}/threads/{threadId}/actions/invoke",
  pathVariables: { assistantId, threadId },
  body,
  contentType: "application/json",
  options
});
var streamAssistantThread = async (assistantId, threadId, body, options) => invokeFetch("assistants", {
  method: "post",
  pathTemplate: "/api/v1/assistants/{assistantId}/threads/{threadId}/actions/stream",
  pathVariables: { assistantId, threadId },
  body,
  contentType: "application/json",
  options
});
var getAssistantThreadInteractions = async (assistantId, threadId, query, options) => invokeFetch("assistants", {
  method: "get",
  pathTemplate: "/api/v1/assistants/{assistantId}/threads/{threadId}/interactions",
  pathVariables: { assistantId, threadId },
  query,
  options
});
var createAssistantThreadInteraction = async (assistantId, threadId, body, options) => invokeFetch("assistants", {
  method: "post",
  pathTemplate: "/api/v1/assistants/{assistantId}/threads/{threadId}/interactions",
  pathVariables: { assistantId, threadId },
  body,
  contentType: "application/json",
  options
});
var deleteAssistantThreadInteraction = async (assistantId, threadId, interactionId, options) => invokeFetch("assistants", {
  method: "delete",
  pathTemplate: "/api/v1/assistants/{assistantId}/threads/{threadId}/interactions/{interactionId}",
  pathVariables: { assistantId, threadId, interactionId },
  options
});
var getAssistantThreadInteraction = async (assistantId, threadId, interactionId, options) => invokeFetch("assistants", {
  method: "get",
  pathTemplate: "/api/v1/assistants/{assistantId}/threads/{threadId}/interactions/{interactionId}",
  pathVariables: { assistantId, threadId, interactionId },
  options
});
var createAssistantThreadInteractionFeedback = async (assistantId, threadId, interactionId, body, options) => invokeFetch("assistants", {
  method: "post",
  pathTemplate: "/api/v1/assistants/{assistantId}/threads/{threadId}/interactions/{interactionId}/feedback",
  pathVariables: { assistantId, threadId, interactionId },
  body,
  contentType: "application/json",
  options
});
var patchAssistantThreadInteractionFeedback = async (assistantId, threadId, interactionId, feedbackId, body, options) => invokeFetch("assistants", {
  method: "patch",
  pathTemplate: "/api/v1/assistants/{assistantId}/threads/{threadId}/interactions/{interactionId}/feedback/{feedbackId}",
  pathVariables: { assistantId, threadId, interactionId, feedbackId },
  body,
  contentType: "application/json",
  options
});
var createAssistantThreadInteractionReview = async (assistantId, threadId, interactionId, body, options) => invokeFetch("assistants", {
  method: "post",
  pathTemplate: "/api/v1/assistants/{assistantId}/threads/{threadId}/interactions/{interactionId}/reviews",
  pathVariables: { assistantId, threadId, interactionId },
  body,
  contentType: "application/json",
  options
});
var deleteAssistantThread = async (assistantid, threadid, options) => invokeFetch("assistants", {
  method: "delete",
  pathTemplate: "/api/v1/assistants/{assistantid}/threads/{threadid}",
  pathVariables: { assistantid, threadid },
  options
});
var getAssistantThread = async (assistantid, threadid, options) => invokeFetch("assistants", {
  method: "get",
  pathTemplate: "/api/v1/assistants/{assistantid}/threads/{threadid}",
  pathVariables: { assistantid, threadid },
  options
});
var patchAssistantThread = async (assistantid, threadid, body, options) => invokeFetch("assistants", {
  method: "patch",
  pathTemplate: "/api/v1/assistants/{assistantid}/threads/{threadid}",
  pathVariables: { assistantid, threadid },
  body,
  contentType: "application/json",
  options
});
var deleteAssistant = async (id, options) => invokeFetch("assistants", {
  method: "delete",
  pathTemplate: "/api/v1/assistants/{id}",
  pathVariables: { id },
  options
});
var getAssistant = async (id, options) => invokeFetch("assistants", {
  method: "get",
  pathTemplate: "/api/v1/assistants/{id}",
  pathVariables: { id },
  options
});
var patchAssistant = async (id, body, options) => invokeFetch("assistants", {
  method: "patch",
  pathTemplate: "/api/v1/assistants/{id}",
  pathVariables: { id },
  body,
  contentType: "application/json",
  options
});
function clearCache() {
  return clearApiCache("assistants");
}
var assistantsExport = {
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
export {
  clearCache,
  createAssistant,
  createAssistantStarter,
  createAssistantThread,
  createAssistantThreadInteraction,
  createAssistantThreadInteractionFeedback,
  createAssistantThreadInteractionReview,
  assistants_default as default,
  deleteAssistant,
  deleteAssistantStarter,
  deleteAssistantStarterFollowup,
  deleteAssistantThread,
  deleteAssistantThreadInteraction,
  getAssistant,
  getAssistantFeedback,
  getAssistantSources,
  getAssistantStarter,
  getAssistantStarters,
  getAssistantThread,
  getAssistantThreadInteraction,
  getAssistantThreadInteractions,
  getAssistantThreads,
  getAssistants,
  invokeAssistantThread,
  patchAssistant,
  patchAssistantThread,
  patchAssistantThreadInteractionFeedback,
  streamAssistantThread,
  updateAssistantStarter,
  updateAssistantStarterFollowup
};
