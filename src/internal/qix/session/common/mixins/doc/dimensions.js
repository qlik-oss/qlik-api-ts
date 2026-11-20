const dimensionListProps = {
  qInfo: {
    qId: "DimensionList",
    qType: "DimensionList",
  },
  qDimensionListDef: {
    qType: "dimension",
    qData: {
      title: "/qMetaDef/title",
      tags: "/qMetaDef/tags",
      grouping: "/qDim/qGrouping",
      info: "/qDimInfos",
      labelExpression: "/qDim/qLabelExpression",
    },
  },
};

const mixin = {
  types: "Doc",

  extend: {
    getDimensionList() {
      return this.getListData(dimensionListProps);
    },

    getDimensionListObject() {
      return this.getListObject(dimensionListProps);
    },
  },
};
export { dimensionListProps, mixin };
