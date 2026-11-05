export type QObjectRef = {
  qHandle: number;
  qType: string;
  qGenericId: string;
  qGenericType?: string;
};

export type ObjectRef = {
  handle: number;
  type: string;
  id: string;
  genericType?: string;
};

export function normalizeObjectRef(response: ObjectRef | QObjectRef): ObjectRef {
  if ((response as QObjectRef).qHandle) {
    return {
      handle: (response as QObjectRef).qHandle,
      type: (response as QObjectRef).qType,
      id: (response as QObjectRef).qGenericId,
      genericType: (response as QObjectRef).qGenericType,
    };
  } else {
    return {
      handle: (response as ObjectRef).handle,
      type: (response as ObjectRef).type,
      id: (response as ObjectRef).id,
      genericType: (response as ObjectRef).genericType,
    };
  }
}

/**
 * Returns true if the supplied parameter identifies a servervside object
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isQixObjectRef(ref: any): ref is QObjectRef {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
  return typeof ref === "object" && ref.qHandle && ref.qType;
}

/**
 * Returns true if the supplied parameter is an object with a qReturn with a null qHandle
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isQixObjectNotFoundError(result: any): result is { qReturn: QObjectRef } {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  return typeof result === "object" && typeof result.qReturn === "object" && result.qReturn.qHandle === null;
}

export function getHandleOfRef(response: ObjectRef | QObjectRef): number | undefined {
  return (response as QObjectRef).qHandle ?? (response as ObjectRef).handle;
}
