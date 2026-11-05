const snapshotListProps = {
  qInfo: {
    qId: "SnapshotList",
    qType: "SnapshotList",
  },
  qBookmarkListDef: {
    qType: "snapshot",
    qData: {
      title: "/title",
      libraryTitle: "/qMetaDef/title",
      description: "/qMetaDef/description",
      sourceObjectId: "/sourceObjectId",
      visualizationType: "/visualizationType",
      timestamp: "/timestamp",
      snapshotData: "/snapshotData",
      isClone: "/isClone",
    },
  },
};

const mixin = {
  types: "Doc",

  extend: {
    getSnapshotListObject() {
      return this.getListObject(snapshotListProps);
    },

    getSnapshotList() {
      return this.getListData(snapshotListProps);
    },
  },
};
export { mixin, snapshotListProps };
