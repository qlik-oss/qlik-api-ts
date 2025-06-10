import {
  clearApiCache,
  invokeFetch
} from "./chunks/PUS32UJH.js";
import "./chunks/CLZXLW6N.js";
import "./chunks/2ZQ3ZX7F.js";

// src/public/rest/csrf-token.ts
var getCsrfToken = async (options) => invokeFetch("csrf-token", {
  method: "get",
  pathTemplate: "/api/v1/csrf-token",
  options
});
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
