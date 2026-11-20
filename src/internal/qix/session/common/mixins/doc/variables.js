const variableListProps = {
  qInfo: {
    qId: "VariableList",
    qType: "VariableList",
  },
  qVariableListDef: {
    qType: "variable",
    qShowReserved: true,
    qShowConfig: true,
    qData: {
      tags: "/tags",
    },
  },
};

const mixin = {
  types: "Doc",

  extend: {
    getVariableList() {
      return this.getListData(variableListProps);
    },

    getVariableListObject() {
      return this.getListObject(variableListProps);
    },
  },
};

export { mixin, variableListProps };
