import { A as registerHostConfig, C as isWindows, D as onPageRedirectRequested, E as onFatalAuthError, F as unregisterHostConfig, I as AuthorizationError, L as InvalidAuthTypeError, M as setDefaultHostConfig, N as toValidLocationUrl, O as onPageRedirectStarted, P as toValidWebsocketLocationUrl, R as InvalidHostConfigError, S as isHostCrossOrigin, T as normalizeHostConfig, _ as getDefaultHostConfig, b as getWebSocketAuthParams, g as getAccessToken, h as determineAuthType, j as serializeHostConfig, k as registerAuthModule, v as getRestCallAuthParams, w as logout, x as handleAuthenticationError, y as getWebResourceAuthParams, z as UnexpectedAuthTypeError } from "./invoke-fetch-functions-CnlEGMVN.js";

//#region src/auth/auth.ts
/**
* Provides functionalities for authentication with Qlik backends.
*/
const auth = {
	determineAuthType,
	getDefaultHostConfig,
	getRestCallAuthParams,
	getWebResourceAuthParams,
	getWebSocketAuthParams,
	handleAuthenticationError,
	isHostCrossOrigin,
	isWindows,
	logout,
	registerAuthModule,
	registerHostConfig,
	serializeHostConfig,
	setDefaultHostConfig,
	toValidLocationUrl,
	toValidWebsocketLocationUrl,
	unregisterHostConfig,
	normalizeHostConfig,
	onFatalAuthError,
	onPageRedirectRequested,
	onPageRedirectStarted
};

//#endregion
export { AuthorizationError, InvalidAuthTypeError, InvalidHostConfigError, UnexpectedAuthTypeError, auth as default, determineAuthType, getAccessToken, getDefaultHostConfig, getRestCallAuthParams, getWebResourceAuthParams, getWebSocketAuthParams, handleAuthenticationError, isHostCrossOrigin, isWindows, logout, normalizeHostConfig, onFatalAuthError, onPageRedirectRequested, onPageRedirectStarted, registerAuthModule, registerHostConfig, serializeHostConfig, setDefaultHostConfig, toValidLocationUrl, toValidWebsocketLocationUrl, unregisterHostConfig };