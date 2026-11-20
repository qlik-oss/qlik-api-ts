import extend from "extend";
import { generateRandomString } from "#internal/utils/random";

export const mixin = {
  types: "story",

  extend: {
    clone(this: any) {
      const oldModel = this;
      return oldModel.app.cloneObject(this.id).then((newId: string) => oldModel.app.getObject(newId));
    },

    createSlide(this: any, opts: any) {
      return this.createChild(
        extend(
          {
            qInfo: {
              qId: generateRandomString(21),
              qType: "slide",
            },
            rank: -1,
            qChildListDef: {
              qData: {
                title: "/title",
                sheetId: "/sheetId",
                ratio: "/ratio",
                position: "/position",
                dataPath: "/dataPath",
                srcPath: "/srcPath",
                visualization: "/visualization",
                visualizationType: "/visualizationType",
                style: "/style",
              },
            },
          },
          opts || {},
        ),
      );
    },
  },
};
