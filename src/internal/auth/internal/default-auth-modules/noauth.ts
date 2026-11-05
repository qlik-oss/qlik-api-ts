/* eslint-disable @typescript-eslint/no-unused-vars */
import type {
  AuthenticationErrorAction,
  AuthModule,
  GetRestCallAuthParamsProps,
  GetWebSocketAuthParamsProps,
  HandleAuthenticationErrorProps,
  RestCallAuthParams,
  WebSocketAuthParams,
} from "#internal/auth/auth-types";

function getRestCallAuthParams(_props: GetRestCallAuthParamsProps<"noauth">): Promise<RestCallAuthParams> {
  return Promise.resolve({ headers: {}, queryParams: {}, credentials: "same-origin" });
}

function getWebSocketAuthParams(_props: GetWebSocketAuthParamsProps<"noauth">): Promise<WebSocketAuthParams> {
  return Promise.resolve({ queryParams: {} });
}

function handleAuthenticationError(
  _props: HandleAuthenticationErrorProps<"noauth">,
): Promise<AuthenticationErrorAction> {
  // No retry since this module blocks all calls
  return Promise.resolve({});
}

/** @private */
export default {
  requiredProps: [],
  optionalProps: [],
  getRestCallAuthParams,
  getWebSocketAuthParams,
  handleAuthenticationError,
} satisfies AuthModule<"noauth">;
