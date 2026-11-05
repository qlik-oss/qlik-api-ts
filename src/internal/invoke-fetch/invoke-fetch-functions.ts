// Declares the mock-backend auth modules handled below; adds nothing to the build.
import type {} from "#internal/auth/mock-backend-auth-modules";
import { resolveHostConfig } from "#internal/auth/auth-functions";
import { getInterceptors, type RestInterceptor } from "#internal/interceptors/interceptors";
import {
  getInvokeFetchUrlParams,
  invokeFetchWithUrl,
  normalizeOptions,
  toDownloadableBlob,
} from "./internal/invoke-fetch-methods";
import { clearApiCacheInternal } from "./internal/response-cache";
import { InvokeFetchError } from "./invoke-fetch-errors";
import type { InvokeFetchProperties, InvokeFetchResponse } from "./invoke-fetch-types";

/* -------------------------------------------------------------------------- */
/*                        invoke-fetch module functions                       */
/* -------------------------------------------------------------------------- */

/**
 * Makes an HTTP call with the browser's fetch API to the endpoint configured in the call's arguments
 * @param api Name of api to call. Will be used for caching responses.
 * @param invokeFetchProps InvokeFetchProperties
 */
export async function invokeFetch<T extends InvokeFetchResponse>(
  api: string,
  props: InvokeFetchProperties,
  interceptors?: RestInterceptor[],
): Promise<T> {
  const effectiveInterceptors = interceptors || getInterceptors();
  const invokeFetchFinal = (reqeust: InvokeFetchProperties) => invokeFetchIntercepted<T>(api, reqeust);

  const withInterceptors = (effectiveInterceptors || []).reduce(
    (proceed, interceptor) => (request) => interceptor(request, proceed),
    invokeFetchFinal,
  );

  return withInterceptors(props);
}

/** @private Runs the intercepted version of invoke fetch */
async function invokeFetchIntercepted<T extends InvokeFetchResponse>(
  api: string,
  props: InvokeFetchProperties,
): Promise<T> {
  const hostConfig = resolveHostConfig(props.options?.hostConfig);
  if (hostConfig.authType === "mock-backend-rest-recorder") {
    return Promise.resolve(hostConfig.recordInvokeFetch(props)) as Promise<T>;
  }
  if (hostConfig.authType === "mock-backend") {
    return Promise.resolve(hostConfig.mockInvokeFetch(props)) as Promise<T>;
  }

  // Check if noauth auth type is configured
  if (hostConfig.authType === "noauth") {
    // eslint-disable-next-line no-console
    console.info("API call blocked: noauth auth module is configured, no API calls should be made");
    // Return a response indicating the call was blocked
    return {
      status: 204, // No Content - indicates successful request but no content to return
      headers: new Headers(),
      data: null,
    } as T;
  }

  // checks that the host config can be used for the request
  const options = await normalizeOptions({
    options: { ...props.options, hostConfig },
    userAgent: props.userAgent,
    apiVersion: props.apiVersion,
  });

  const normalizedProps = { ...props, options };
  const { completeUrl, authHeaders, authQueryParams, credentials, cacheKey } =
    await getInvokeFetchUrlParams(normalizedProps);
  return invokeFetchWithUrl(api, {
    method: props.method.toUpperCase(),
    body: props.body,
    contentType: props.contentType,
    options,
    isPublic: !!props.isPublic,
    completeUrl,
    authHeaders,
    authQueryParams,
    credentials,
    cacheKey,
  });
}

/**
 * Clears cached responses for a certain api
 * @example
 * clearNameSpaceCache("spaces"); // clears the cache for the "spaces" api
 * @param api the api namespace to clear cache in
 */
export function clearApiCache(api: string) {
  clearApiCacheInternal(api);
}

/**
 * Function that extracts the payload from the fetch response.
 * @param fetchResponse fetch response
 * @param url to where the request as made
 * @returns parsed fetch response
 */
export async function parseFetchResponse(fetchResponse: Response, url: string): Promise<InvokeFetchResponse> {
  let resultData: unknown;
  const contentType = fetchResponse.headers.get("content-type")?.split(";")[0];
  // This header contains information about how the server intends the client
  // to handle the content. If the first segment says "attachment" it means that
  // the content is a file.
  //
  //
  // More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition
  const contentDisposition = fetchResponse.headers.get("content-disposition")?.split(";");
  if (contentDisposition && contentDisposition[0] === "attachment") {
    let filename = "";
    for (let i = 1; i < contentDisposition.length; i++) {
      const attr = contentDisposition[i].trim();
      // The filename attribute looks like: filename="<filename.ext>"
      // There may be quotation-marks within the filename itself as well.
      if (attr.indexOf("filename") === 0) {
        const start = attr.indexOf('"');
        const end = attr.lastIndexOf('"');
        filename = attr.slice(start + 1, end);
      }
    }
    resultData = toDownloadableBlob(await fetchResponse.blob(), filename);
  } else {
    switch (contentType) {
      // Note: This list is by no means exhaustive, populate with more types as needed.
      case "image/png":
      case "image/jpeg":
      case "image/x-icon":
      case "application/offset+octet-stream":
      case "application/octet-stream":
      case "application/zip":
      case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
      case "application/pdf":
        resultData = toDownloadableBlob(await fetchResponse.blob());
        break;
      case "text/event-stream":
        // If it's a stream return the body, (ReadableStream)
        resultData = fetchResponse.body;
        break;
      case undefined:
      default: {
        // Read the body. If reading the body itself fails (e.g. the connection
        // was cut after headers were received, gzip decoding failed, or the
        // request was aborted mid-body) we must not silently resolve with
        // `data: undefined`: the resolved promise would be cached and served
        // to subsequent callers as a successful response, leading to crashes
        // far away from the actual transport failure.
        let bodyText: string;
        try {
          bodyText = await fetchResponse.text();
        } catch (error) {
          throw new InvokeFetchError(
            `request to '${url}' failed while reading response body: ${
              error instanceof Error ? error.message : String(error)
            }`,
            fetchResponse.status,
            fetchResponse.headers,
            undefined,
          );
        }
        try {
          resultData = JSON.parse(bodyText);
        } catch {
          // Not JSON - return the raw text body
          resultData = bodyText;
        }
        break;
      }
    }
  }

  const { status, statusText, headers } = fetchResponse;
  const errorMsg = `request to '${url}' failed with status ${status} ${statusText}.`;

  if (status >= 300) {
    throw new InvokeFetchError(errorMsg, status, headers, resultData);
  }

  // When using the fetch option redirect:"manual", 302 are surfaced as status 0.
  // We need this to handle windows authentication errors
  if (status === 0) {
    throw new InvokeFetchError(errorMsg, 302, headers, resultData);
  }

  const invokeFetchResponse: InvokeFetchResponse = {
    status,
    headers,
    data: resultData,
  };

  return invokeFetchResponse;
}
