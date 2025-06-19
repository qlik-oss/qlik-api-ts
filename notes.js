import {
  clearApiCache,
  invokeFetch
} from "./chunks/P6F6QA4Y.js";
import "./chunks/DN5SVV4X.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/notes.ts
async function getNotesSettings(options) {
  return invokeFetch("notes", {
    method: "get",
    pathTemplate: "/api/v1/notes/settings",
    options
  });
}
async function setNotesSettings(body, options) {
  return invokeFetch("notes", {
    method: "put",
    pathTemplate: "/api/v1/notes/settings",
    body,
    contentType: "application/json",
    options
  });
}
function clearCache() {
  return clearApiCache("notes");
}
var notesExport = { getNotesSettings, setNotesSettings, clearCache };
var notes_default = notesExport;
export {
  clearCache,
  notes_default as default,
  getNotesSettings,
  setNotesSettings
};
