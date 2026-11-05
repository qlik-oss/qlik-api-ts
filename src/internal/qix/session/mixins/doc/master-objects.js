const masterObjectListProps = {
  qInfo: {
    qId: "MasterObjectList",
    qType: "MasterObjectList",
  },
  qAppObjectListDef: {
    qType: "masterobject",
    qData: {
      name: "/qMetaDef/title",
      labelExpression: "/labelExpression",
      visualization: "/visualization",
      tags: "/qMetaDef/tags",
    },
  },
};

const mixin = {
  types: "Doc",

  extend: {
    getMasterObjectList() {
      return this.getListData(masterObjectListProps);
    },

    getMasterObjectListObject() {
      return this.getListObject(masterObjectListProps);
    },
  },
};
export { masterObjectListProps, mixin };
