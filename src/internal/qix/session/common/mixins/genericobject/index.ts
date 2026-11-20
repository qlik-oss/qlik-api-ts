import { mixin as effectiveProperties } from "./effective-properties";
import { mixin as exportData } from "./export-data";
import { mixin as publishing } from "./publishing";

export const mixins = [exportData, effectiveProperties, publishing];
