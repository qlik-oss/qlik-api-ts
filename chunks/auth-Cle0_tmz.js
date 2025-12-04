import "./utils-BnC4lrlq.js";
import "./interceptors-DTYm37AU.js";
import "./global-types-CrOvI33z.js";
import "./auth-types-JehqruDP.js";
import { _ as unregisterHostConfig, a as getWebResourceAuthParams, b as InvalidHostConfigError, c as isHostCrossOrigin, d as registerAuthModule, f as registerHostConfig, g as toValidWebsocketLocationUrl, h as toValidLocationUrl, i as getRestCallAuthParams, l as isWindows, m as setDefaultHostConfig, n as getAccessToken, o as getWebSocketAuthParams, p as serializeHostConfig, r as getDefaultHostConfig, s as handleAuthenticationError, t as determineAuthType, u as logout, v as AuthorizationError, x as UnexpectedAuthTypeError, y as InvalidAuthTypeError } from "./auth-functions-BmZgZYSs.js";

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