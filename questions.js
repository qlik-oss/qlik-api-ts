import {
  clearApiCache,
  invokeFetch
} from "./chunks/PUS32UJH.js";
import "./chunks/CLZXLW6N.js";
import "./chunks/2ZQ3ZX7F.js";

// src/public/rest/questions.ts
var askQuestions = async (body, options) => invokeFetch("questions", {
  method: "post",
  pathTemplate: "/api/v1/questions/actions/ask",
  body,
  contentType: "application/json",
  options
});
var filterQuestions = async (query, body, options) => invokeFetch("questions", {
  method: "post",
  pathTemplate: "/api/v1/questions/actions/filter",
  query,
  body,
  contentType: "application/json",
  options
});
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
