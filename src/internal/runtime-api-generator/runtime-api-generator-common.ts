/* -------------------------------------------------------------------------- */
/*                         This is not a public module                        */
/* -------------------------------------------------------------------------- */

/* eslint-disable no-param-reassign */

import type { HostConfig } from "#internal/auth/auth-types";
import type { InterceptorsAPI } from "#internal/interceptors/interceptors";
import type { ApiCallOptions, InvokeFetchAPI } from "#internal/invoke-fetch/invoke-fetch";

type MethodChar =
  | "G" // GET
  | "P" // POST
  | "U" // PUT
  | "A" // PATCH
  | "D" // DELETE
  | "O" // OPTIONS
  | "H" // HEAD
  | "C" // CONNECT
  | "T"; // TRACE

type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS" | "HEAD" | "CONNECT" | "TRACE";

const methodAbbreviations: Record<MethodChar, Method> = {
  G: "GET",
  P: "POST",
  U: "PUT",
  A: "PATCH",
  D: "DELETE",
  O: "OPTIONS",
  H: "HEAD",
  C: "CONNECT",
  T: "TRACE",
};

/*
 * methodCharToMethodName maps an abbreviated method to a full HTTP-method.
 */
function methodCharToMethodName(method: MethodChar): Method {
  try {
    return methodAbbreviations[method];
  } catch {
    throw new Error(`Unknown short hand method:${method}`);
  }
}

type HasQueryChar = "Q" | "";
type HasBodyChars = `B${ContentTypeChar}` | "";

type ContentTypeChar =
  | "" // No content-type
  | "J" // application/json
  | "M" // mulitpart/form-data
  | "O" // application/octet-stream
  | "T"; // text/plain

type ContentType = "application/json" | "multipart/form-data" | "application/octet-stream" | "text/plain" | "";

const contentTypeAbbreviations: Record<ContentTypeChar, ContentType> = {
  "": "",
  J: "application/json",
  M: "multipart/form-data",
  O: "application/octet-stream",
  T: "text/plain",
};

/*
 * contentTypeCharToContentType maps an abbreviated method to a full HTTP-method.
 */
function contentTypeCharToContentType(typeChar: ContentTypeChar): ContentType {
  try {
    return contentTypeAbbreviations[typeChar];
  } catch {
    throw new Error(`Unknown short hand content-type: ${typeChar}`);
  }
}

type UseInstead = string;
type OpDetails = `${MethodChar}${HasQueryChar}${HasBodyChars}`;

/**
 * Each operation is specified by a string separated with colons.
 * The first segment is the operation-name. The second segment contains
 * up to three characters describing how to send the HTTP request. The first character
 * describes the HTTP-method, the second (optional) if the operation has a query
 * and the third (optional) if has a body, see the OpDetails type above.
 * The last segment, if present, contains the name of the new module in if
 * this operation is deprecated.
 */
type Operation = `${string}:${OpDetails}:${UseInstead}`;

export interface UrlSegmentNode {
  [key: string]: UrlSegmentNode | Array<Operation>;
}

export type ParsedMiniApi = {
  operations: Record<string, ParsedMiniApiOperation>;
};
export type ParsedMiniApiOperation = {
  namespace: string;
  operationName: string;
  pathTemplate: string;
  method: string;
  argNames: string[];
  hasQuery: boolean;
  hasBody: boolean;
  contentType: ContentType;
  useInstead: string;
  oldOperationNames: string[];
};

/**
 * RuntimeApi represents a module and should contain all of the exposed
 * functions from one. This is what's generated on import. It may also
 * contain nested RuntimeApis, i.e. sub-modules.
 */
export type RuntimeApi = {
  //   clearCache: () => void;
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  [key: string]: ((...args: any[]) => unknown) | RuntimeApi;
};
/**
 * LazyApi is a ProxyHandler that calls it's init-function when
 * it is first accessed through 'ownKeys', 'has', or 'get'.
 * In the case of 'get' and 'has', init-will not be called if the
 * key is in the list of ignored props (see 'ignoredProps' below).
 * This is to keep the api from being being initiated by systemjs
 * before import.
 */
type LazyApi<T> = {
  initiated: boolean;
  init: () => void;
  ownKeys: (target: T) => ArrayLike<string | symbol>;
  has: (target: T, key: string) => boolean;
  get: (target: T, key: string) => unknown;
};

const ignoredProps: Set<string> = new Set(["$$typeof", "then", "__esmodule"]);

/**
 * createLazyApiProxy returns a new Proxy that calls the passed initFunc on
 * the first "legitimate access" of the RuntimeApi.
 * We define legitimate access as checking or getting a prop that isn't
 * in the list of ignored-props (see 'ignoredProps' in this file) or calling the
 * 'ownKeys' function (e.g. through Object.keys).
 */
// oxlint-disable-next-line typescript/no-unnecessary-type-parameters
export function createLazyApiProxy<T>(api: RuntimeApi, initFunc: () => void): T {
  const handler: LazyApi<RuntimeApi> = {
    initiated: false,
    init: () => {
      if (!handler.initiated) {
        initFunc();
        handler.initiated = true;
      }
    },
    ownKeys(target) {
      if (!handler.initiated) {
        handler.init();
      }
      return Object.keys(target);
    },
    has(target, key) {
      if (ignoredProps.has(key)) {
        return false;
      }
      if (!handler.initiated) {
        handler.init();
      }
      return !!target[key];
    },
    get(target, key) {
      if (!ignoredProps.has(key) && !handler.initiated) {
        handler.init();
      }
      return target[key];
    },
  };
  return new Proxy(api, handler) as T;
}

export function parseMiniApi(namespace: string, def: UrlSegmentNode): ParsedMiniApi {
  const api: ParsedMiniApi = {
    operations: {},
  };
  traverse(namespace, "", def, api.operations);
  return api;
}
/**
 * traverse visits each node in the "URL-segment tree".
 * If a node contains an array (of operation-info)
 * operations are generated for each of these and added to
 * the provided RuntimeApi. The URL-path used for the operations
 * is the path from the root to the node.
 */
function traverse(
  namespace: string,
  parentPath: string,
  node: UrlSegmentNode,
  operations: Record<string, ParsedMiniApiOperation>,
) {
  Object.entries(node).forEach(([key, value]) => {
    const pathTemplate = key ? `${parentPath}/${key}` : parentPath; // Avoid trailing slash
    // Handle array of operation-info.
    if (Array.isArray(value)) {
      value.forEach((operationString: Operation) => {
        // parse path-template for path-variables, which will be the argument-names.
        const argNames = [...pathTemplate.matchAll(/\{([\w\-_]+)\}/g)].map((match) => match[1]);
        // See Operation type for reference.
        const [operationNames, options, useInstead] = operationString.split(":");
        const method = methodCharToMethodName(options[0] as MethodChar);

        const [operationName, ...oldOperationNames] = operationNames.split(",");

        const hasQuery = options.indexOf("Q") >= 0;
        const bodyIndex = options.indexOf("B");
        const hasBody = bodyIndex >= 0;
        let contentType: ContentType | "" = "";
        if (bodyIndex >= 0) {
          if (options.length > bodyIndex) {
            contentType = contentTypeCharToContentType(options[bodyIndex + 1] as ContentTypeChar);
          }
        }

        operations[operationName] = {
          namespace,
          operationName,
          pathTemplate,
          method,
          argNames,
          hasQuery,
          hasBody,
          contentType,
          useInstead,
          oldOperationNames,
        };
      });
    } else {
      // Keep heading down that tree.
      traverse(namespace, pathTemplate, value, operations);
    }
  });
}

/**
 * Creates a function based on an operation that calls
 * invokeFetch with the correct arguments.
 * Query and body, if present, will be sent as arguments.
 */
export function createClassicApiFn(
  {
    namespace,
    operationName,
    pathTemplate,
    method,
    argNames,
    hasQuery,
    hasBody,
    contentType,
    useInstead,
  }: ParsedMiniApiOperation,
  hostConfig: HostConfig | undefined,
  interceptors: InterceptorsAPI | undefined,
  enableConsoleWarnings: boolean,
  invokeFetchFnGetter: () => InvokeFetchAPI["invokeFetch"], // This is a getter to allow vitest mocking...
) {
  return (...args: unknown[]) => {
    // Create path-variables
    const pathVariables: Record<string, string> = {};
    argNames.forEach((argName, index) => {
      pathVariables[argName] = args[index] as string;
    });

    // argPos is the index of the next, unused argument.
    let argPos = argNames.length;
    let query: Record<string, unknown> | undefined;
    let body: unknown;
    if (hasQuery) {
      query = args[argPos] as Record<string, unknown>;
      argPos++;
    }
    if (hasBody) {
      body = args[argPos];
      argPos++;
    }
    // options is the last argument and may be omitted.
    const options = args.length > argPos ? (args[argPos] as ApiCallOptions) : undefined;
    // If the function is deprecated, log a warning.
    if (enableConsoleWarnings && useInstead) {
      let fullUseInstead: string;
      if (useInstead.includes(".")) {
        fullUseInstead = useInstead;
      } else {
        fullUseInstead = `${useInstead}.${operationName}`;
      }
      // eslint-disable-next-line no-console
      console.warn(`${namespace}.${operationName} is deprecated, use ${fullUseInstead} instead`);
    }
    const optionsIncludingDefaultHostConfig = hostConfig
      ? ({
          hostConfig,
          ...options,
        } satisfies ApiCallOptions)
      : options;

    return invokeFetchFnGetter()(
      namespace,
      {
        method,
        pathTemplate,
        pathVariables,
        query,
        body,
        ...(contentType ? { contentType } : {}),
        options: optionsIncludingDefaultHostConfig,
      },
      interceptors?.getInterceptors(),
    );
  };
}
