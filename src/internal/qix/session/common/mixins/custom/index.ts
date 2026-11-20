import { mixin as listsCurrSelMixins } from "./currentselections/current-selections-mixins";
import listsFields from "./fieldlist/fields-mixins";
import listsInfoMixins from "./undoinfo/undo-info-mixins";

export const mixins = [listsCurrSelMixins, listsFields, listsInfoMixins];
