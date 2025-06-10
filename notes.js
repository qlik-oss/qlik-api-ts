import {
  clearApiCache,
  invokeFetch
} from "./chunks/PUS32UJH.js";
import "./chunks/CLZXLW6N.js";
import "./chunks/2ZQ3ZX7F.js";

// src/public/rest/notes.ts
var getNotesSettings = async (options) => invokeFetch("notes", {
  method: "get",
  pathTemplate: "/api/v1/notes/settings",
  options
});
var setNotesSettings = async (body, options) => invokeFetch("notes", {
  method: "put",
  pathTemplate: "/api/v1/notes/settings",
  body,
  contentType: "application/json",
  options
});
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
