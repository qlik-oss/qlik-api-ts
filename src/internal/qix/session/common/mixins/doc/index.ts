import base from "./base";
import modal from "./modal";
import normalize from "./normalize";

import { mixin as listsBookmarks } from "./bookmarks";
import { mixin as createClientObjects } from "./create-client-objects";
import { mixin as currSel } from "./current-selections";
import { mixin as listsDimensions } from "./dimensions";
import { mixin as listsDynamicAppViews } from "./dynamic-app-views";
import { mixin as listsFields } from "./fields";
import { mixin as listsMasterObjects } from "./master-objects";
import { mixin as listsMeasures } from "./measures";
import { mixin as listsOdagAppLinks } from "./odag-app-links";
import { mixin as listsSheet } from "./sheets";
import { mixin as listsSnapshots } from "./snapshots";
import { mixin as listsStories } from "./stories";
import { mixin as undoinfo } from "./undo-info";
import { mixin as listsVariables } from "./variables";

export const mixins = [
  base,
  normalize,
  modal,
  listsBookmarks,
  createClientObjects,
  currSel,
  listsDimensions,
  listsFields,
  listsMasterObjects,
  listsMeasures,
  listsOdagAppLinks,
  listsDynamicAppViews,
  listsSheet,
  listsSnapshots,
  listsStories,
  undoinfo,
  listsVariables,
];
