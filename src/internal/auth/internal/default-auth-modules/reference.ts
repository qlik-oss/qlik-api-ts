import type {
  AuthenticationErrorAction,
  AuthModule,
  RestCallAuthParams,
  WebSocketAuthParams,
} from "#internal/auth/auth-types";

function getRestCallAuthParams(): Promise<RestCallAuthParams> {
  throw new Error("getRestCallAuthParams should never be called for reference auth module");
}

function getWebSocketAuthParams(): Promise<WebSocketAuthParams> {
  throw new Error("getWebSocketAuthParams should never be called for reference auth module");
}

function handleAuthenticationError(): Promise<AuthenticationErrorAction> {
  throw new Error("handleAuthenticationError should never be called for reference auth module");
}

/**
 * This auth module is only here to provide a reference for the auth type "reference". It should never be used in practice.
 *  @private */
export default {
  requiredProps: ["reference"],
  optionalProps: [],
  getRestCallAuthParams,
  getWebSocketAuthParams,
  handleAuthenticationError,
} satisfies AuthModule<"reference">;
