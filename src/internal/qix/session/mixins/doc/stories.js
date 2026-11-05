const storyListProps = {
  qInfo: {
    qId: "StoryList",
    qType: "StoryList",
  },
  qAppObjectListDef: {
    qType: "story",
    qData: {
      title: "/qMetaDef/title",
      description: "/qMetaDef/description",
      thumbnail: "/thumbnail",
      rank: "/rank",
    },
  },
};

const mixin = {
  types: "Doc",

  extend: {
    getStoryList() {
      return this.getListData(storyListProps);
    },

    getStoryListObject() {
      return this.getListObject(storyListProps);
    },
  },
};
export { mixin, storyListProps };
