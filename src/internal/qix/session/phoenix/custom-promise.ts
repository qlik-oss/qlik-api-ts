/* eslint-disable @typescript-eslint/no-explicit-any */
export function wrapInPromise<T>(value: T, CustomPromise: PromiseConstructor): T {
  if (isPromiseLike(value)) {
    return new CustomPromise((resolve, reject) => {
      value.then(resolve, reject);
    }) as T;
  }
  return value;
}

export function isPromiseLike<T = unknown>(
  value: unknown,
): value is Promise<T> & {
  catch: Function;
  finally?: Function;
} {
  return (
    value !== null &&
    (typeof value === "object" || typeof value === "function") &&
    typeof (value as Promise<T>).then === "function" &&
    typeof (value as Promise<T>).catch === "function"
  );
}

export function getPromiseWrapper(CustomPromise: PromiseConstructor) {
  return <T>(value: T): T => {
    return wrapInPromise(value, CustomPromise);
  };
}
