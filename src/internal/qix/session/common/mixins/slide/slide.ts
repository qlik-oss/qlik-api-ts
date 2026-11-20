function sortSlidesByRank(slides: any[]) {
  function compare(a: any, b: any) {
    if (a.qData.rank < b.qData.rank) {
      return -1;
    }
    if (a.qData.rank > b.qData.rank) {
      return 1;
    }
    return 0;
  }

  if (Array.isArray(slides) && slides.length > 0) {
    return slides.sort(compare);
  }

  return slides;
}

export const mixin = {
  types: "slide",

  extend: {
    duplicate(this: any, story: any) {
      let rank: number | undefined;
      const obj = this;

      return story.getLayout().then((layout: any) => {
        const items = sortSlidesByRank(layout.qChildList.qItems.slice());
        // set slide rank
        for (let i = 0; i < items.length; i++) {
          const item = items[i];
          if (item.qInfo.qId === obj.id) {
            const next = items[i + 1];
            rank = next ? (item.qData.rank + next.qData.rank) / 2 : item.qData.rank + 1;
          }
        }
        // create duplicate
        return story.createSlide({ rank }).then((nSlide: any) =>
          nSlide.copyFrom(obj.id).then(() =>
            nSlide.getProperties().then((item: any) => {
              item.rank = rank;
              return nSlide.setProperties(item);
            }),
          ),
        );
      });
    },
  },
};
