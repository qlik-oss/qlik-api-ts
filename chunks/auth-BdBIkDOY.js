import { C as unregisterHostConfig, D as UnexpectedAuthTypeError, E as InvalidHostConfigError, S as toValidWebsocketLocationUrl, T as InvalidAuthTypeError, _ as registerAuthModule, b as setDefaultHostConfig, c as getAccessToken, d as getWebResourceAuthParams, f as getWebSocketAuthParams, g as logout, h as isWindows, l as getDefaultHostConfig, m as isHostCrossOrigin, p as handleAuthenticationError, s as determineAuthType, u as getRestCallAuthParams, v as registerHostConfig, w as AuthorizationError, x as toValidLocationUrl, y as serializeHostConfig } from "./interceptors-BeHmFB2L.js";

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
	unregisterHostConfig
};
var auth_default = auth;

//#endregion
export { AuthorizationError, InvalidAuthTypeError, InvalidHostConfigError, UnexpectedAuthTypeError, auth_default as default, determineAuthType, getAccessToken, getDefaultHostConfig, getRestCallAuthParams, getWebResourceAuthParams, getWebSocketAuthParams, handleAuthenticationError, isHostCrossOrigin, isWindows, logout, registerAuthModule, registerHostConfig, serializeHostConfig, setDefaultHostConfig, toValidLocationUrl, toValidWebsocketLocationUrl, unregisterHostConfig };