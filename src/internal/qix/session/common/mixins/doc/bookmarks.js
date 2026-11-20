const bookmarkListProps = {
  qInfo: {
    qId: "BookmarkList",
    qType: "BookmarkList",
  },
  qBookmarkListDef: {
    qType: "bookmark",
    qData: {
      title: "/qMetaDef/title",
      description: "/qMetaDef/description",
      sheetId: "/sheetId",
      selectionFields: "/selectionFields",
      creationDate: "/creationDate",
      groupId: "/groupId",
    },
  },
};

const mixin = {
  types: "Doc",

  extend: {
    getBookmarkList() {
      return this.getListData(bookmarkListProps);
    },

    getBookmarkListObject() {
      return this.getListObject(bookmarkListProps);
    },
  },
};

export { bookmarkListProps, mixin };
