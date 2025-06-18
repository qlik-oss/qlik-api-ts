import {
  clearApiCache,
  invokeFetch
} from "./chunks/NPB36P3M.js";
import "./chunks/L5QSVLDQ.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/csrf-token.ts
async function getCsrfToken(options) {
  return invokeFetch("csrf-token", {
    method: "get",
    pathTemplate: "/api/v1/csrf-token",
    options
  });
}
function clearCache() {
  return clearApiCache("csrf-token");
}
var csrfTokenExport = { getCsrfToken, clearCache };
var csrf_token_default = csrfTokenExport;
export {
  clearCache,
  csrf_token_default as default,
  getCsrfToken
};
