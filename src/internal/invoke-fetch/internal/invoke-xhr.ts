import { InvokeFetchError } from "../invoke-fetch-errors";
import type { ProgressOptions } from "../invoke-fetch-types";
import { getErrorMessage } from "./invoke-fetch-methods";

export async function invokeXHR(
  completeUrl: string,
  { method, headers, credentials, keepalive, body, signal, progress }: RequestInit & { progress?: ProgressOptions },
): Promise<Response> {
  // NOTE: There are no redirect options for XHR, it just follows
  const xhr = new XMLHttpRequest();

  let resolve: (value: Response) => void;
  let reject: (reason?: InvokeFetchError) => void;
  const promise = new Promise<Response>((res, rej) => {
    resolve = res;
    reject = rej;
  });

  // Method
  xhr.open(method || "GET", completeUrl);
  // Headers
  if (typeof headers === "object") {
    for (const [key, value] of Object.entries(headers)) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      xhr.setRequestHeader(key, value);
    }
  } else {
    throw Error("malformed headers", headers);
  }

  if (keepalive) {
    // This is equivalent to what fetch sets but MDN also says that this header may be
    // ignored for HTTP/2 and HTTP/3.
    xhr.setRequestHeader("Connection", "keep-alive");
  }

  // Timeout or abort
  if (signal) {
    signal.addEventListener("abort", () => {
      xhr.abort();
      reject();
    });
  }

  // Setup credentials
  if (credentials === "include") {
    xhr.withCredentials = true;
  } else {
    xhr.withCredentials = false;
  }

  if (progress?.onUpload) {
    xhr.upload.onprogress = (event: ProgressEvent) => {
      const { loaded, total, lengthComputable } = event;
      progress.onUpload?.({ loaded, total: lengthComputable ? total : undefined });
    };
  }

  if (progress?.onDownload) {
    xhr.onprogress = (event: ProgressEvent) => {
      const { loaded, total, lengthComputable } = event;
      progress.onDownload?.({ loaded, total: lengthComputable ? total : undefined });
    };
  }

  // This is what returns the value through the promise.
  xhr.onloadend = () => {
    // Convert the an xhr-response into a fetch-response.
    const { status } = xhr;
    // There is no way to list the header-keys, you can only get them as a
    // CRLF-separated string.
    const responseHeaders: Record<string, string> = {};
    for (const line of xhr.getAllResponseHeaders().split("\r\n")) {
      const [key, value] = line.split(":", 2);
      if (key && value) {
        responseHeaders[key] = value;
      }
    }
    // If there's no response, use undefined as body instead.
    if (xhr.response) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      resolve(new Response(xhr.response, { status, headers: responseHeaders }));
    } else {
      resolve(new Response(undefined, { status, headers: responseHeaders }));
    }
  };

  try {
    // According to MDN this should be compatible with any body supplied to "fetch"
    // See: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/send#body
    // TypeScript does however not seem to currently think so.
    const bod = body as unknown as XMLHttpRequestBodyInit;
    xhr.send(bod);
  } catch (e) {
    return Promise.reject(new InvokeFetchError(getErrorMessage(e), 0, new Headers(), {}));
  }
  return promise;
}
