import "./utils-UaAiVTcc.js";
import "./interceptors-DoQ44M-n.js";
import "./global-types-DW_kb7P7.js";
import "./auth-types-BEj8JjOA.js";
import { _ as unregisterHostConfig, a as getWebResourceAuthParams, b as InvalidHostConfigError, c as isHostCrossOrigin, d as registerAuthModule, f as registerHostConfig, g as toValidWebsocketLocationUrl, h as toValidLocationUrl, i as getRestCallAuthParams, l as isWindows, m as setDefaultHostConfig, n as getAccessToken, o as getWebSocketAuthParams, p as serializeHostConfig, r as getDefaultHostConfig, s as handleAuthenticationError, t as determineAuthType, u as logout, v as AuthorizationError, x as UnexpectedAuthTypeError, y as InvalidAuthTypeError } from "./auth-functions-BgREhaqk.js";

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