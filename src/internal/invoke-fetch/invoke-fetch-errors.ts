/* -------------------------------------------------------------------------- */
/*                         invoke-fetch module errors                         */
/* -------------------------------------------------------------------------- */

/**
 * Error thrown by the invokeFetch function
 */
export class InvokeFetchError extends Error {
  status: number;
  headers: Headers;
  data: unknown;

  constructor(errorMessage: string, status: number, headers: Headers, data: unknown) {
    super(errorMessage);
    this.status = status;
    this.headers = headers;
    this.data = data;
    this.stack = cleanStack(this.stack);
  }
}

/**
 * Error thrown by a page call when its link (`url`) doesn't point to the origin of the original call (`origin`).
 */
export class PagingError extends Error {
  origin: string;
  url: string;

  constructor(errorMessage: string, origin: string, url: string) {
    super(errorMessage);
    this.origin = origin;
    this.url = url;
    this.stack = cleanStack(this.stack);
  }
}

/**
 * Error thrown if a request-body cannot be encoded.
 */
export class EncodingError extends Error {
  contentType: string;
  data: unknown;

  constructor(errorMessage: string, contentType: string, data: unknown) {
    super(errorMessage);
    this.contentType = contentType;
    this.data = data;
    this.stack = cleanStack(this.stack);
  }
}

/* -------------------------------------------------------------------------- */
/*                                   private                                  */
/* -------------------------------------------------------------------------- */

const regex = /^.+\/qmfe-api(?:\.js)?:(\d+)(?::\d+)?$/gim;

const isFromQmfeApi = (line: string) => {
  const matches = line.match(regex);
  return Boolean(matches && matches.length > 0);
};

/**
 * Function that removes stack entries that are from the qmfe-api module
 */
function cleanStack(stack?: string): string | undefined {
  if (!stack) {
    return stack;
  }
  const newStack: string[] = [];
  const lines = stack.split("\n");
  lines.reverse();

  // go up the stack until we exit qmfe-api
  for (const line of lines) {
    if (isFromQmfeApi(line)) {
      break;
    }
    newStack.unshift(line);
  }
  return newStack.join("\n");
}
