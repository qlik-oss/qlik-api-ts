import { D as clearApiCache, M as InvokeFetchError, O as invokeFetch, j as EncodingError, k as parseFetchResponse } from "./boot-interceptors-BHyG6jXf.js";

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

//#endregion
export { EncodingError, InvokeFetchError, clearApiCache, invokeFetchExp as default, invokeFetch, parseFetchResponse };