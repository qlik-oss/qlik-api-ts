import type {
  GenericObjectLayout,
  GenericObjectLayoutAdditionalProperties,
  GenericObjectProperties,
  GenericObjectPropertiesAdditionalProperties,
  NativeFieldFunctions,
  NativeGenericBookmarkFunctions,
  NativeGenericDimensionFunctions,
  NativeGenericMeasureFunctions,
  NativeGenericObjectFunctions,
  NativeGenericVariableFunctions,
  NxDerivedFieldsData,
  NxFieldDescription,
} from "./engine-schema";

import type { Doc } from "./doc";
import type { ExpandedFieldListItem, ListItem } from "./list-types";
import type { RpcObject } from "./rpc-object";

export type GenericObjectPropertiesNodeRec<NextLevel> = GenericObjectPropertiesAdditionalProperties &
  Record<string, NextLevel | Array<NextLevel | string | number | boolean> | string | number | boolean>;
export type GenericObjectPropertiesNodeLevel5 = unknown;
export type GenericObjectPropertiesNodeLevel4 = GenericObjectPropertiesNodeRec<GenericObjectPropertiesNodeLevel5>;
export type GenericObjectPropertiesNodeLevel3 = GenericObjectPropertiesNodeRec<GenericObjectPropertiesNodeLevel4>;
export type GenericObjectPropertiesNodeLevel2 = GenericObjectPropertiesNodeRec<GenericObjectPropertiesNodeLevel3>;
export type GenericObjectPropertiesNode = GenericObjectPropertiesNodeRec<GenericObjectPropertiesNodeLevel2>;
export type AnyGenericObjectProperties = GenericObjectPropertiesNode & GenericObjectProperties;

export type GenericObjectLayoutNodeRec<NextLevel> = GenericObjectLayoutAdditionalProperties<Record<string, unknown>> &
  Record<string, NextLevel | Array<NextLevel | string | number | boolean> | string | number | boolean>;
export type GenericObjectLayoutNodeLevel5 = unknown;
export type GenericObjectLayoutNodeLevel4 = GenericObjectLayoutNodeRec<GenericObjectLayoutNodeLevel5>;
export type GenericObjectLayoutNodeLevel3 = GenericObjectLayoutNodeRec<GenericObjectLayoutNodeLevel4>;
export type GenericObjectLayoutNodeLevel2 = GenericObjectLayoutNodeRec<GenericObjectLayoutNodeLevel3>;
export type GenericObjectLayoutNode = GenericObjectLayoutNodeRec<GenericObjectLayoutNodeLevel2>;
export type AnyGenericObjectLayout = GenericObjectLayoutNode & GenericObjectLayout;

export interface GenericObject<PropsType = AnyGenericObjectProperties, LayoutType = AnyGenericObjectLayout>
  extends RpcObject, NativeGenericObjectFunctions<PropsType, LayoutType, GenericObject> {
  app: Doc;
}

export type Field = RpcObject & NativeFieldFunctions;
export type GenericBookmark = RpcObject & NativeGenericBookmarkFunctions;
export type GenericDimension = RpcObject & NativeGenericDimensionFunctions;
export type GenericMeasure = RpcObject & NativeGenericMeasureFunctions;
export type GenericVariable = RpcObject & NativeGenericVariableFunctions;

export type GenericListObject<ItemType = ListItem<any>> = GenericObject<AnyGenericObjectProperties, ItemType[]>;
export type CurrentSelections = GenericObject & {
  clearField(fieldName: string, state: string): Promise<boolean>;
  lockField(fieldName: string): Promise<boolean>;
  unlockField(fieldName: string): Promise<boolean>;
  clearAll(): Promise<void>;
  back(): Promise<void>;
  forward(): Promise<void>;
};

export type UndoInfoObject = GenericObject & {
  undo(): Promise<void>;
  redo(): Promise<void>;
  reset(): Promise<void>;

  /**
   * Marks start of a group of operations in undo-stack
   *
   * @returns {Number} Unique group id which should be used when ending group (to avoid nested groups)
   */
  startGroup(): Promise<number>;

  /**
   * Marks end of a group of operations in undo-stack
   *
   * @param groupId - unique id to map against start marker (to avoid nested groups)
   */
  endGroup(groupId: number): Promise<void>;
};

export type FieldListObject = GenericListObject<NxFieldDescription> & {
  expand(): Promise<(NxDerivedFieldsData | ExpandedFieldListItem)[]>;
};
