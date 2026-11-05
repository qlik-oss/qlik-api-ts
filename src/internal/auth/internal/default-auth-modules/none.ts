import type {
  AuthenticationErrorAction,
  AuthModule,
  RestCallAuthParams,
  WebSocketAuthParams,
} from "#internal/auth/auth-types";

function getRestCallAuthParams(): Promise<RestCallAuthParams> {
  return Promise.resolve({ headers: {}, queryParams: {}, credentials: "same-origin" });
}

function getWebSocketAuthParams(): Promise<WebSocketAuthParams> {
  return Promise.resolve({ queryParams: {} });
}

function handleAuthenticationError(): Promise<AuthenticationErrorAction> {
  return Promise.resolve({});
}

/** @private */
export default {
  requiredProps: [],
  optionalProps: [],
  getRestCallAuthParams,
  getWebSocketAuthParams,
  handleAuthenticationError,
} satisfies AuthModule<"none">;
