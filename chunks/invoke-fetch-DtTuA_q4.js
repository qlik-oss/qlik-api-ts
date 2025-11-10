import "./utils-DI6bFnHB.js";
import "./interceptors-CT9deBo6.js";
import "./global-types-BGMD2sDY.js";
import "./auth-types-BuIzsuoh.js";
import { C as invokeFetch, D as InvokeFetchError, E as EncodingError, S as clearApiCache, w as parseFetchResponse } from "./auth-functions-BZN9dCw1.js";

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