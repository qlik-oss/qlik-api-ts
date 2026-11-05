const sheetListProps = {
  qInfo: {
    qId: "ODAGAppLinkList",
    qType: "ODAGAppLinkList",
  },
  qAppObjectListDef: {
    qType: "odagapplink",
    qData: {
      odagLinkRef: "/qMetaDef/odagLinkRef",
      timestamp: "/qMetaDef/timestamp",
    },
  },
};

export const mixin = {
  types: "Doc",

  extend: {
    getODAGAppLinkList() {
      return this.getListData(sheetListProps);
    },

    // Old probably misspelled name
    getODAGAppLinkObject() {
      return this.getListObject(sheetListProps);
    },
    getODAGAppLinkListObject() {
      return this.getListObject(sheetListProps);
    },
  },
};
