import { A as InvalidAuthTypeError, C as registerHostConfig, D as toValidWebsocketLocationUrl, E as toValidLocationUrl, M as UnexpectedAuthTypeError, O as unregisterHostConfig, S as registerAuthModule, T as setDefaultHostConfig, _ as logout, b as onPageRedirectRequested, c as determineAuthType, d as getRestCallAuthParams, f as getWebResourceAuthParams, g as isWindows, h as isHostCrossOrigin, j as InvalidHostConfigError, k as AuthorizationError, l as getAccessToken, m as handleAuthenticationError, p as getWebSocketAuthParams, u as getDefaultHostConfig, v as normalizeHostConfig, w as serializeHostConfig, x as onPageRedirectStarted, y as onFatalAuthError } from "./interceptors-DIpfevKZ.js";

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