import {
  clearApiCache,
  invokeFetch
} from "./chunks/NPB36P3M.js";
import "./chunks/L5QSVLDQ.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/questions.ts
async function askQuestions(body, options) {
  return invokeFetch("questions", {
    method: "post",
    pathTemplate: "/api/v1/questions/actions/ask",
    body,
    contentType: "application/json",
    options
  });
}
async function filterQuestions(query, body, options) {
  return invokeFetch("questions", {
    method: "post",
    pathTemplate: "/api/v1/questions/actions/filter",
    query,
    body,
    contentType: "application/json",
    options
  });
}
function clearCache() {
  return clearApiCache("questions");
}
var questionsExport = { askQuestions, filterQuestions, clearCache };
var questions_default = questionsExport;
export {
  askQuestions,
  clearCache,
  questions_default as default,
  filterQuestions
};
