import { I as EncodingError, L as InvokeFetchError, M as clearApiCache, N as invokeFetch, P as parseFetchResponse } from "./interceptors-2VSXImC9.js";

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