import JSONPatch from "./json-patch";
import type { Json, JsonObject } from "./protocol-types";

export type DeltaState = Record<number, Record<string, Record<string, unknown>>>;

type JsonPatchItem = {
  op: string;
  path: string;
  value: Json;
};

/**
 * Unwraps a delta response from the QIX Engine and stores the new state of the object for the next response.
 */
export function unwrapDeltas(result: JsonObject, state: DeltaState, handle: number, method: string): JsonObject {
  const newResult: Record<string, unknown> = {};
  // when delta is on the response data is expected to be an array of patches:
  Object.entries(result as Record<string, JsonPatchItem[]>).forEach(([outKey, patches]) => {
    if (!Array.isArray(patches)) {
      throw new Error("Unexpected RPC response, expected array of patches");
    }
    let entry = state[handle]?.[method]?.[outKey];
    if (typeof entry === "undefined") {
      entry = patches[0] && Array.isArray(patches[0].value) ? [] : {};
    }
    if (patches.length) {
      if (patches[0].path === "/" && typeof patches[0].value !== "object") {
        // 'plain' values on root path is not supported (no object reference),
        // so we simply store the value directly:
        entry = patches[0].value;
      } else {
        JSONPatch.apply(entry as object, patches);
      }

      if (!state[handle]) {
        state[handle] = {};
      }
      if (!state[handle][method]) {
        state[handle][method] = {};
      }
      state[handle][method][outKey] = entry;
    }

    newResult[outKey] = entry;
  });
  // return a cloned response object to avoid patched object references:
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return JSON.parse(JSON.stringify(newResult));
}
