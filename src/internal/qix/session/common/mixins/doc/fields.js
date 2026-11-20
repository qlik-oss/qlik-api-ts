const fieldListProps = {
  qInfo: {
    qId: "FieldList",
    qType: "FieldList",
  },
  qFieldListDef: {
    qShowSystem: false,
    qShowHidden: false,
    qShowSrcTables: true,
    qShowSemantic: true,
    qShowDerivedFields: true,
  },
};

const onTheFlyListProps = {
  qInfo: {
    qId: "FieldOnTheFlyList",
    qType: "FieldOnTheFlyList",
  },
  qFieldListDef: {
    qShowSystem: false,
    qShowHidden: false,
    qShowSrcTables: true,
    qShowSemantic: true,
    qShowDerivedFields: true,
    qShowDefinitionOnly: true,
  },
};

const onTheFlyWithHiddenListProps = {
  qInfo: {
    qId: "FieldOnTheFlyWithHiddenList",
    qType: "FieldOnTheFlyWithHiddenList",
  },
  qFieldListDef: {
    qShowSystem: false,
    qShowHidden: true,
    qShowSrcTables: true,
    qShowSemantic: true,
    qShowDerivedFields: true,
    qShowDefinitionOnly: true,
  },
};

export const mixin = {
  types: "Doc",

  extend: {
    getFieldList() {
      return this.getListData(fieldListProps);
    },

    getFieldListObject() {
      return this.getListObject(fieldListProps);
    },

    getOnTheFlyListObject() {
      return this.getListObject(onTheFlyListProps);
    },

    getOnTheFlyWithHiddenListObject() {
      return this.getListObject(onTheFlyWithHiddenListProps);
    },
  },
};
