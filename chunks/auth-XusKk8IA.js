import { A as InvalidHostConfigError, C as serializeHostConfig, D as unregisterHostConfig, E as toValidWebsocketLocationUrl, O as AuthorizationError, S as registerHostConfig, T as toValidLocationUrl, _ as normalizeHostConfig, b as onPageRedirectStarted, c as getAccessToken, d as getWebResourceAuthParams, f as getWebSocketAuthParams, g as logout, h as isWindows, j as UnexpectedAuthTypeError, k as InvalidAuthTypeError, l as getDefaultHostConfig, m as isHostCrossOrigin, p as handleAuthenticationError, s as determineAuthType, u as getRestCallAuthParams, v as onFatalAuthError, w as setDefaultHostConfig, x as registerAuthModule, y as onPageRedirectRequested } from "./interceptors-2VSXImC9.js";

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
var auth_default = auth;

//#endregion
export { AuthorizationError, InvalidAuthTypeError, InvalidHostConfigError, UnexpectedAuthTypeError, auth_default as default, determineAuthType, getAccessToken, getDefaultHostConfig, getRestCallAuthParams, getWebResourceAuthParams, getWebSocketAuthParams, handleAuthenticationError, isHostCrossOrigin, isWindows, logout, normalizeHostConfig, onFatalAuthError, onPageRedirectRequested, onPageRedirectStarted, registerAuthModule, registerHostConfig, serializeHostConfig, setDefaultHostConfig, toValidLocationUrl, toValidWebsocketLocationUrl, unregisterHostConfig };