/* -------------------------------------------------------------------------- */
/*                              Utility functions                             */
/* -------------------------------------------------------------------------- */

/**
 * Returns true if the running environment is a browser-like environment
 */
export function isBrowser(): boolean {
  if (typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.self !== "undefined") {
    return true;
  }
  return false;
}

/**
 * Returns true if the running environment is a node-like environment
 */
export function isNode(): boolean {
  if (typeof process !== "undefined" && process.version && process.versions.node) {
    return true;
  }
  return false;
}

export function isDevelopment(): boolean {
  if (isBrowser()) {
    return globalThis.localStorage?.getItem("devtools") === "true";
  }
  if (isNode()) {
    return process.env.NODE_ENV === "development";
  }
  return false;
}

/**
 * Checks if a value is a plain object (not an array, null, or any other type).
 * @param value The value to check
 * @returns true if the value is a plain object, false otherwise
 */
function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && value.constructor === Object;
}

/**
 * Recursively sorts the keys of an object or array of objects.
 * If the input is an array, it sorts each object in the array.
 * If the input is an object, it sorts the keys of the object.
 * If the input is neither an object nor an array, it returns the input as is.
 * @param obj Object to sort keys of
 * @template T Type of the object
 * @returns sorted object or array of objects
 * @example
 * const obj = { b: 2, a: 1, c: { d: 4, b: 3 } };
 * const sortedObj = sortKeys(obj);
 * // sortedObj will be { a: 1, b: 2, c: { b: 3, d: 4 } }
 */
export function sortKeys<T>(obj: T): T {
  if (Array.isArray(obj)) {
    return obj.map(sortKeys) as unknown as T;
  } else if (isPlainObject(obj)) {
    const sortedObj: Record<string, unknown> = {};
    for (const key of Object.keys(obj).sort()) {
      sortedObj[key] = sortKeys((obj as Record<string, unknown>)[key]);
    }
    return sortedObj as T;
  }
  return obj;
}

/**
 * Cleans an object by removing all properties that are falsy (null, undefined, false, 0, "", NaN).
 * strings that are empty after trimming will also be removed.
 * @param obj The object to clean
 * @returns A new object with all falsy values removed
 */
export function cleanFalsyValues<T>(obj: T): T | undefined {
  if (Array.isArray(obj)) {
    // Recursively clean each item in the array
    return obj
      .map((item) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return typeof item === "object" && item !== null ? cleanFalsyValues(item) : item;
      })
      .filter((item) => {
        if (typeof item === "object" && item !== null) {
          // Remove empty objects/arrays
          return Object.keys(item as Record<string, unknown>).length > 0;
        }
        return item !== null && item !== undefined && item !== "";
      }) as unknown as T;
  } else if (typeof obj === "object" && obj !== null) {
    const cleaned: Record<string, unknown> = {};
    for (const key of Object.keys(obj)) {
      const value = (obj as Record<string, unknown>)[key];
      switch (typeof value) {
        case "undefined":
          // Skip undefined values
          break;
        case "boolean":
          if (value) cleaned[key] = value;
          break;
        case "string": {
          const trimmed = value.trim();
          if (trimmed !== "") cleaned[key] = trimmed;
          break;
        }
        case "object": {
          if (value === null) break;
          const cleanedValue = cleanFalsyValues(value);
          if (cleanedValue) {
            if (
              (Array.isArray(cleanedValue) && cleanedValue.length > 0) ||
              (typeof cleanedValue === "object" && Object.keys(cleanedValue).length > 0)
            ) {
              cleaned[key] = cleanedValue;
            } else if (!Array.isArray(cleanedValue) && typeof cleanedValue === "object") {
              // cleanedValue is an empty object, skip
            }
          }
          break;
        }
        case "function":
        case "number":
          cleaned[key] = value;
          break;
        case "bigint":
        case "symbol":
        default:
          // this should not happen, but we handle it gracefully
          // eslint-disable-next-line no-console
          console.warn(`Unexpected type for key "${key}": ${typeof value}`);
          cleaned[key] = value; // Keep the value as is
          break;
      }
    }
    // Remove this object if it is empty (for parent recursion)
    if (Object.keys(cleaned).length === 0) {
      return undefined;
    }
    return cleaned as T;
  }
  return obj;
}

export function createResolvablePromise<T>(): [Promise<T>, (result: T) => void, (error: Error) => void] {
  let resolve: (result: T) => void = () => {
    throw new Error("Promise resolver not initialized");
  };
  let reject: (error: Error) => void = () => {
    throw new Error("Promise rejector not initialized");
  };
  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return [promise, resolve, reject];
}
