const listProps = {
  qInfo: {
    qId: "DynamicAppViewList",
    qType: "DynamicAppViewList",
  },
  qAppObjectListDef: {
    qType: "dynamicappview",
    qData: {
      odagLinkRef: "/qMetaDef/odagLinkRef",
      timestamp: "/qMetaDef/timestamp",
    },
  },
};

export const mixin = {
  types: "Doc",

  extend: {
    getDynamicAppViewList() {
      return this.getListData(listProps);
    },

    getDynamicAppViewObject() {
      return this.getListObject(listProps);
    },
  },
};
