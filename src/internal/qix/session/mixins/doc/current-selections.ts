import type { CurrentSelections } from "../../../types/generic-object";
import type { BaseDoc } from "./base";

const currentSelectionProps = {
  qInfo: {
    qId: "CurrentSelection",
    qType: "CurrentSelection",
  },
  qSelectionObjectDef: {},
};

const mixin = {
  types: ["Doc"],

  extend: {
    getCurrentSelectionObject(): Promise<CurrentSelections> {
      const self = this as unknown as BaseDoc;
      return self.getOrCreateSessionObject(currentSelectionProps);
    },
  },
};
export { currentSelectionProps, mixin };
