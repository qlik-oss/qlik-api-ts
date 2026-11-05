import type { DocAction } from "../../qix";
import type { PhoenixRpcObject } from "./rpc-object";
import { getHandleOfRef, type ObjectRef, type QObjectRef } from "./rpc-object-ref";

export type PhoenixSessionState = {
  getObjects(): Record<number, PhoenixRpcObject>;
  getObject(handleOrRef: number | ObjectRef | QObjectRef): PhoenixRpcObject | undefined;
  setObject(handle: number, object: PhoenixRpcObject): void;
  getDoc(): PhoenixRpcObject;
  getGlobal(): PhoenixRpcObject;
  removeObject(handle: number): void;
  addExecutedInitialAppAction(initialAppAction: DocAction): void;
  isAppActionExecuted(initialAppAction: DocAction): boolean;
  getExecutedAppActions(): DocAction[];
};

export function createPhoenixSessionState({
  doc,
  global,
  executedAppActions,
}: {
  doc: PhoenixRpcObject;
  global: PhoenixRpcObject;
  executedAppActions: DocAction[];
}): PhoenixSessionState {
  const objects: Record<number, PhoenixRpcObject> = {};
  return {
    getObjects() {
      return objects;
    },
    getObject(ref: number | ObjectRef | QObjectRef) {
      if (typeof ref === "object") {
        const handle = getHandleOfRef(ref);
        if (handle === global.getHandle()) {
          return global;
        }
        if (handle === doc.getHandle()) {
          return doc;
        }
        if (handle) {
          return objects[handle];
        }
        return undefined;
      }
      return objects[ref];
    },
    removeObject(handle: number) {
      delete objects[handle];
    },
    setObject(handle: number, object: PhoenixRpcObject) {
      objects[handle] = object;
    },

    getDoc() {
      return doc;
    },

    getGlobal() {
      return global;
    },
    addExecutedInitialAppAction(initialAppAction: DocAction) {
      executedAppActions.push(initialAppAction);
    },
    isAppActionExecuted(initialAppAction: DocAction) {
      return executedAppActions.indexOf(initialAppAction) >= 0;
    },
    getExecutedAppActions() {
      return executedAppActions;
    },
  };
}
