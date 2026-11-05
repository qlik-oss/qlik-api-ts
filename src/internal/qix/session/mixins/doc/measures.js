const measureListProps = {
  qInfo: {
    qId: "MeasureList",
    qType: "MeasureList",
  },
  qMeasureListDef: {
    qType: "measure",
    qData: {
      title: "/qMetaDef/title",
      tags: "/qMetaDef/tags",
      labelExpression: "/qMeasure/qLabelExpression",
    },
  },
};

const mixin = {
  types: "Doc",

  extend: {
    getMeasureList() {
      return this.getListData(measureListProps);
    },

    getMeasureListObject() {
      return this.getListObject(measureListProps);
    },
  },
};
export { measureListProps, mixin };
