import {
  clearApiCache,
  invokeFetch
} from "./chunks/6WNP7HZQ.js";
import "./chunks/QAOVZB27.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/assistants.ts
async function getAssistants(query, options) {
  return invokeFetch("assistants", {
    method: "get",
    pathTemplate: "/api/v1/assistants",
    query,
    options
  });
}
async function createAssistant(body, options) {
  return invokeFetch("assistants", {
    method: "post",
    pathTemplate: "/api/v1/assistants",
    body,
    contentType: "application/json",
    options
  });
}
async function getAssistantFeedback(assistantId, options) {
  return invokeFetch("assistants", {
    method: "get",
    pathTemplate: "/api/v1/assistants/{assistantId}/feedback",
    pathVariables: { assistantId },
    options
  });
}
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
async function getAssistantStarters(assistantId, query, options) {
  return invokeFetch("assistants", {
    method: "get",
    pathTemplate: "/api/v1/assistants/{assistantId}/starters",
    pathVariables: { assistantId },
    query,
    options
  });
}
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
async function deleteAssistantStarter(assistantId, starterId, options) {
  return invokeFetch("assistants", {
    method: "delete",
    pathTemplate: "/api/v1/assistants/{assistantId}/starters/{starterId}",
    pathVariables: { assistantId, starterId },
    options
  });
}
async function getAssistantStarter(assistantId, starterId, options) {
  return invokeFetch("assistants", {
    method: "get",
    pathTemplate: "/api/v1/assistants/{assistantId}/starters/{starterId}",
    pathVariables: { assistantId, starterId },
    options
  });
}
async function updateAssistantStarter(assistantId, starterId, body, options) {
  return invokeFetch("assistants", {
    method: "put",
    pathTemplate: "/api/v1/assistants/{assistantId}/starters/{starterId}",
    pathVariables: { assistantId, starterId },
    body,
    contentType: "application/json",
    options
  });
}
async function deleteAssistantStarterFollowup(assistantId, starterId, followupId, options) {
  return invokeFetch("assistants", {
    method: "delete",
    pathTemplate: "/api/v1/assistants/{assistantId}/starters/{starterId}/followups/{followupId}",
    pathVariables: { assistantId, starterId, followupId },
    options
  });
}
async function updateAssistantStarterFollowup(assistantId, starterId, followupId, body, options) {
  return invokeFetch("assistants", {
    method: "put",
    pathTemplate: "/api/v1/assistants/{assistantId}/starters/{starterId}/followups/{followupId}",
    pathVariables: { assistantId, starterId, followupId },
    body,
    contentType: "application/json",
    options
  });
}
async function getAssistantThreads(assistantId, query, options) {
  return invokeFetch("assistants", {
    method: "get",
    pathTemplate: "/api/v1/assistants/{assistantId}/threads",
    pathVariables: { assistantId },
    query,
    options
  });
}
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
async function invokeAssistantThread(assistantId, threadId, body, options) {
  return invokeFetch("assistants", {
    method: "post",
    pathTemplate: "/api/v1/assistants/{assistantId}/threads/{threadId}/actions/invoke",
    pathVariables: { assistantId, threadId },
    body,
    contentType: "application/json",
    options
  });
}
async function streamAssistantThread(assistantId, threadId, body, options) {
  return invokeFetch("assistants", {
    method: "post",
    pathTemplate: "/api/v1/assistants/{assistantId}/threads/{threadId}/actions/stream",
    pathVariables: { assistantId, threadId },
    body,
    contentType: "application/json",
    options
  });
}
async function getAssistantThreadInteractions(assistantId, threadId, query, options) {
  return invokeFetch("assistants", {
    method: "get",
    pathTemplate: "/api/v1/assistants/{assistantId}/threads/{threadId}/interactions",
    pathVariables: { assistantId, threadId },
    query,
    options
  });
}
async function createAssistantThreadInteraction(assistantId, threadId, body, options) {
  return invokeFetch("assistants", {
    method: "post",
    pathTemplate: "/api/v1/assistants/{assistantId}/threads/{threadId}/interactions",
    pathVariables: { assistantId, threadId },
    body,
    contentType: "application/json",
    options
  });
}
async function deleteAssistantThreadInteraction(assistantId, threadId, interactionId, options) {
  return invokeFetch("assistants", {
    method: "delete",
    pathTemplate: "/api/v1/assistants/{assistantId}/threads/{threadId}/interactions/{interactionId}",
    pathVariables: { assistantId, threadId, interactionId },
    options
  });
}
async function getAssistantThreadInteraction(assistantId, threadId, interactionId, options) {
  return invokeFetch("assistants", {
    method: "get",
    pathTemplate: "/api/v1/assistants/{assistantId}/threads/{threadId}/interactions/{interactionId}",
    pathVariables: { assistantId, threadId, interactionId },
    options
  });
}
async function createAssistantThreadInteractionFeedback(assistantId, threadId, interactionId, body, options) {
  return invokeFetch("assistants", {
    method: "post",
    pathTemplate: "/api/v1/assistants/{assistantId}/threads/{threadId}/interactions/{interactionId}/feedback",
    pathVariables: { assistantId, threadId, interactionId },
    body,
    contentType: "application/json",
    options
  });
}
async function patchAssistantThreadInteractionFeedback(assistantId, threadId, interactionId, feedbackId, body, options) {
  return invokeFetch("assistants", {
    method: "patch",
    pathTemplate: "/api/v1/assistants/{assistantId}/threads/{threadId}/interactions/{interactionId}/feedback/{feedbackId}",
    pathVariables: { assistantId, threadId, interactionId, feedbackId },
    body,
    contentType: "application/json",
    options
  });
}
async function createAssistantThreadInteractionReview(assistantId, threadId, interactionId, body, options) {
  return invokeFetch("assistants", {
    method: "post",
    pathTemplate: "/api/v1/assistants/{assistantId}/threads/{threadId}/interactions/{interactionId}/reviews",
    pathVariables: { assistantId, threadId, interactionId },
    body,
    contentType: "application/json",
    options
  });
}
async function deleteAssistantThread(assistantid, threadid, options) {
  return invokeFetch("assistants", {
    method: "delete",
    pathTemplate: "/api/v1/assistants/{assistantid}/threads/{threadid}",
    pathVariables: { assistantid, threadid },
    options
  });
}
async function getAssistantThread(assistantid, threadid, options) {
  return invokeFetch("assistants", {
    method: "get",
    pathTemplate: "/api/v1/assistants/{assistantid}/threads/{threadid}",
    pathVariables: { assistantid, threadid },
    options
  });
}
async function patchAssistantThread(assistantid, threadid, body, options) {
  return invokeFetch("assistants", {
    method: "patch",
    pathTemplate: "/api/v1/assistants/{assistantid}/threads/{threadid}",
    pathVariables: { assistantid, threadid },
    body,
    contentType: "application/json",
    options
  });
}
async function deleteAssistant(id, options) {
  return invokeFetch("assistants", {
    method: "delete",
    pathTemplate: "/api/v1/assistants/{id}",
    pathVariables: { id },
    options
  });
}
async function getAssistant(id, options) {
  return invokeFetch("assistants", {
    method: "get",
    pathTemplate: "/api/v1/assistants/{id}",
    pathVariables: { id },
    options
  });
}
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
