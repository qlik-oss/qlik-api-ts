import {
  AuthorizationError,
  InvalidAuthTypeError,
  InvalidHostConfigError,
  UnexpectedAuthTypeError,
  checkForCrossDomainRequest,
  determineAuthType,
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
  withResolvedHostConfig
} from "./W6FDNN2K.js";
import "./3RGGGGAR.js";
import "./2ZQ3ZX7F.js";

// src/auth/auth.ts
var auth = {
  checkForCrossDomainRequest,
  determineAuthType,
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
  withResolvedHostConfig
};
var auth_default = auth;
export {
  AuthorizationError,
  InvalidAuthTypeError,
  InvalidHostConfigError,
  UnexpectedAuthTypeError,
  checkForCrossDomainRequest,
  auth_default as default,
  determineAuthType,
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
  withResolvedHostConfig
};
