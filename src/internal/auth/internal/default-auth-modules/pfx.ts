import type {
  AuthenticationErrorAction,
  AuthModule,
  GetRestCallAuthParamsProps,
  GetWebSocketAuthParamsProps,
  RestCallAuthParams,
  WebSocketAuthParams,
} from "#internal/auth/auth-types";
import { isBrowser } from "#internal/utils/utils";

function getRestCallAuthParams({ hostConfig }: GetRestCallAuthParamsProps<"pfx">): Promise<RestCallAuthParams> {
  return Promise.resolve({
    headers: {},
    queryParams: {},
    credentials: "omit",
    pfxOptions: {
      pfx: hostConfig?.pfx,
      passphrase: hostConfig?.passphrase,
    },
  });
}

async function getWebSocketAuthParams({
  hostConfig,
}: GetWebSocketAuthParamsProps<"pfx">): Promise<WebSocketAuthParams> {
  if (isBrowser()) {
    throw new Error("Not supported in browser environment");
  }
  const xQlikUserHeader = hostConfig?.userHeader || "UserDirectory=INTERNAL; UserId=sa_engine";
  return Promise.resolve({
    headers: { "X-Qlik-User": xQlikUserHeader },
    pfxOptions: {
      pfx: hostConfig?.pfx,
      passphrase: hostConfig?.passphrase || "",
    },
  });
}

function handleAuthenticationError(): Promise<AuthenticationErrorAction> {
  return Promise.resolve({});
}

export default {
  requiredProps: ["pfx"],
  optionalProps: ["passphrase", "userHeader"],
  getRestCallAuthParams,
  getWebSocketAuthParams,
  handleAuthenticationError,
} satisfies AuthModule<"pfx">;
