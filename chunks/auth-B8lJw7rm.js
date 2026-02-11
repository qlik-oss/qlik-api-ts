import { C as AuthorizationError, E as UnexpectedAuthTypeError, S as unregisterHostConfig, T as InvalidHostConfigError, _ as registerHostConfig, a as getRestCallAuthParams, b as toValidLocationUrl, c as handleAuthenticationError, d as logout, f as normalizeHostConfig, g as registerAuthModule, h as onPageRedirectStarted, i as getDefaultHostConfig, l as isHostCrossOrigin, m as onPageRedirectRequested, n as determineAuthType, o as getWebResourceAuthParams, p as onFatalAuthError, r as getAccessToken, s as getWebSocketAuthParams, u as isWindows, v as serializeHostConfig, w as InvalidAuthTypeError, x as toValidWebsocketLocationUrl, y as setDefaultHostConfig } from "./boot-interceptors-DqRxTczb.js";

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