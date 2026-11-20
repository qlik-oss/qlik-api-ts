import { mixins as allMixins } from "./all/index";
import { mixins as customMixins } from "./custom/index";
import { mixins as docMixins } from "./doc/index";
import { mixins as genericObjectMixins } from "./genericobject/index";
import { mixin as storyMixin } from "./story/story";
import { mixin as slideMixin } from "./slide/slide";
export const mixins: any[] = [
  ...docMixins,
  ...allMixins,
  ...genericObjectMixins,
  ...customMixins,
  storyMixin,
  slideMixin,
];
