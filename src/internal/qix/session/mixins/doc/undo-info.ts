import type { UndoInfoObject } from "../../../types/generic-object";
import type { BaseDoc } from "./base";

const undoInfoProps = {
  qInfo: {
    qId: "UndoInfo",
    qType: "UndoInfo",
  },
  qUndoInfoDef: {},
  markers: [],
};

export const mixin = {
  types: ["Doc"],

  extend: {
    getUndoInfoObject(): Promise<UndoInfoObject> {
      const self = this as unknown as BaseDoc;
      return self.getOrCreateSessionObject(undoInfoProps);
    },
  },
};
