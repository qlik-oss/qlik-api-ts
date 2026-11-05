import { mapToLayout } from "../utils/permissions";

import type { Doc } from "../../../types/doc";
import type { GenericListObject, GenericObject } from "../../../types/generic-object";
import type { ListBoxProperties } from "../../../types/list-types";

export type BaseDoc = Doc & {
  _listCache: Record<string, Promise<GenericObject>>;
  session: any;
} & typeof mixin.extend;

const mixin = {
  types: "Doc",

  // TODO GWE REMOVED
  // override: {
  //   getContentLibraries(_getContentLibraries: any) {
  //     return _getContentLibraries().then((list: any) => list.qItems);
  //   },
  //
  //   getLibraryContent(_getLibraryContent: any, name: any) {
  //     return _getLibraryContent(name).then((list: any) => list.qItems);
  //   },
  // },

  extend: {
    getOrCreateSessionObject<GenericObjectCustomType extends GenericObject>(
      props: ListBoxProperties,
    ): Promise<GenericObjectCustomType> {
      const app = this as unknown as BaseDoc;
      const id = props.qInfo?.qId;
      if (!id) throw new Error("Invalid list definition. No qId defined");

      if (!app._listCache[id]) {
        if (app.session.sessionState === "SESSION_ATTACHED") {
          // Try fetching the object first
          app._listCache[id] = app.getObject(id).catch(() => app.createSessionObject(props));
        } else {
          app._listCache[id] = app.createSessionObject(props);
        }
      }
      return app._listCache[id] as Promise<GenericObjectCustomType>;
    },

    /**
     * Help method to fetch list objects from Engine through as session objects
     * @param {Object} listDef - specifications of which type of list to fetch
     * @param {Object} listDef.qInfo - qInfo object specifying a type and id for the session object
     * @returns {Promise<Object>} Promise containing the list handling object if resolved or Error if rejected
     */
    getListObject<ItemType>(listDef: ListBoxProperties): Promise<GenericListObject<ItemType>> {
      const app = this as unknown as BaseDoc;
      let outKey = Object.keys(listDef).filter((key) => key.indexOf("ListDef") !== -1)[0];
      if (!outKey) {
        throw new Error("Invalid list definition");
      }
      if (outKey) {
        outKey = outKey.replace(/Def$/g, "");
      }

      const id = listDef.qInfo?.qId;
      if (!id) throw new Error("Invalid list definition. No qId defined");

      if (!app._listCache[id]) {
        app.getOrCreateSessionObject(listDef).then((obj: GenericObject) => {
          const getLayout = obj.getLayout.bind(obj);
          obj.getLayout = function () {
            return getLayout().then((layout: any) => {
              const items = layout[outKey].qItems;
              items.forEach((item: any) => {
                if (typeof item === "object") {
                  mapToLayout(item, false);
                }
              });
              return layout[outKey].qItems;
            });
          };
          return obj;
        });
      }

      // @ts-ignore
      return app._listCache[id];
    },

    /**
     * Help method to fetch app object data from Engine through a session object
     * @param {Object} listDef - specifications of which type of list to fetch
     * @param {Object} listDef.qInfo - qInfo object specifying a type and id for the session object
     * @returns {Promise.<Array>} A Promise that when resolved holds a list of data objects of the specified type
     */
    getListData<ItemType>(listDef: ListBoxProperties): Promise<ItemType[]> {
      const app = this as unknown as BaseDoc;
      return app.getListObject<ItemType>(listDef).then((list) => list.getLayout());
    },
  },
  init(args: any) {
    args.api._listCache = {};
  },
};

export default mixin;
