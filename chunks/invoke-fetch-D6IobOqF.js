import "./utils-UaAiVTcc.js";
import "./interceptors-DoQ44M-n.js";
import "./global-types-DW_kb7P7.js";
import "./auth-types-BEj8JjOA.js";
import { C as invokeFetch, D as InvokeFetchError, E as EncodingError, S as clearApiCache, w as parseFetchResponse } from "./auth-functions-BgREhaqk.js";

//#region src/invoke-fetch/invoke-fetch.ts
/**
* Used for performing the actual fetch call with features like handling authentication, csrf-token and caching
* @module invoke-fetch
*/
/**
* Functions for sending http request to fetch resources utilizing a cache.
*/
const invokeFetchExp = {
	invokeFetch,
	clearApiCache,
	parseFetchResponse
};
var invoke_fetch_default = invokeFetchExp;

//#endregion
export { EncodingError, InvokeFetchError, clearApiCache, invoke_fetch_default as default, invokeFetch, parseFetchResponse };