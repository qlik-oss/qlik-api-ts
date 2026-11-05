import type {
  AuthenticationErrorAction,
  AuthModule,
  GetRestCallAuthParamsProps,
  GetWebSocketAuthParamsProps,
  RestCallAuthParams,
  WebSocketAuthParams,
} from "#internal/auth/auth-types";
import { isBrowser } from "#internal/utils/utils";

function getRestCallAuthParams({ hostConfig }: GetRestCallAuthParamsProps<"apikey">): Promise<RestCallAuthParams> {
  return Promise.resolve({
    headers: {
      Authorization: `Bearer ${hostConfig?.apiKey}`,
    },
    queryParams: {},
    credentials: "omit",
  });
}

async function getWebSocketAuthParams({
  hostConfig,
}: GetWebSocketAuthParamsProps<"apikey">): Promise<WebSocketAuthParams> {
  if (isBrowser()) {
    throw new Error("Not supported in browser environment");
  }
  return Promise.resolve({
    headers: {
      Authorization: `Bearer ${hostConfig?.apiKey}`,
    },
  });
}

function handleAuthenticationError(): Promise<AuthenticationErrorAction> {
  return Promise.resolve({});
}

export default {
  requiredProps: ["apiKey"],
  optionalProps: [],
  getRestCallAuthParams,
  getWebSocketAuthParams,
  handleAuthenticationError,
} satisfies AuthModule<"apikey">;
