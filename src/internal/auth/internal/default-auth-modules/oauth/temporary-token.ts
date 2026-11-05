import { AuthorizationError, type AuthError } from "#internal/auth/auth-errors";
import { toValidLocationUrl } from "#internal/auth/auth-functions";
import type { HostConfig } from "#internal/auth/auth-types";

export async function exchangeAccessTokenForTemporaryToken(
  hostConfig: HostConfig<"oauth2"> | HostConfig<"anonymous">,
  accessToken: string,
  purpose: "webresource" | "websocket",
): Promise<string> {
  const response = await fetch(`${toValidLocationUrl(hostConfig)}/oauth/token`, {
    method: "POST",
    credentials: "include",
    mode: "cors",
    headers: { "content-type": "application/json" },
    redirect: "follow",
    body: JSON.stringify({
      subject_token: accessToken,
      subject_token_type: "urn:ietf:params:oauth:token-type:access_token",
      grant_type: "urn:ietf:params:oauth:grant-type:token-exchange",
      purpose,
      redirect_uri: globalThis.location?.href,
      client_id: hostConfig.clientId,
    }),
  });
  if (response.status !== 200) {
    throw await toError(response);
  }
  const data = (await response.json()) as { access_token: string };
  return data.access_token;
}
async function toError(response: Response): Promise<AuthorizationError> {
  const body = await response.text();
  try {
    const data = JSON.parse(body) as { errors: AuthError[] };
    return new AuthorizationError(data.errors);
  } catch {
    // Handling parsing error
    return new AuthorizationError([
      {
        code: "unknown",
        status: response.status,
        detail: body,
        title: "Unknown authentication error",
      },
    ]);
  }
}
