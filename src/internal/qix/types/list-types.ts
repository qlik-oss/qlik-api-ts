import type {
  AppObjectListDef,
  GenericDimensionInfo,
  ListObjectDef,
  NxContainerEntry,
  NxInfo,
  NxVariableListItem,
} from "./engine-schema";

export type ListItem<QData = Record<string, unknown>> = NxContainerEntry<QData>;

export type ListBoxProperties = {
  qInfo?: NxInfo;
  qListBoxDef?: ListObjectDef;
  qAppObjectListDef?: AppObjectListDef;
};

export type SheetListDataCellBounds = {
  x: number;
  y: number;
  width: number;
  height: number;
};
export type SheetListDataCell = {
  bounds: SheetListDataCellBounds;
  col: number;
  colspan: number;
  name: string;
  row: number;
  rowspan: number;
  type: string;
};
export type SheetListItem = ListItem<SheetListData>;
export type SheetListData = {
  /** from /qMetaDef/title */
  title: string;
  labelExpression: string;
  showCondition: any;

  /** from /qMetaDef/description */
  description: string;
  descriptionExpression: string;
  thumbnail: any;
  cells: SheetListDataCell[];
  rank: number;
  columns: number;
  rows: number;
  visible: boolean;
};
export type VariableListItem = NxVariableListItem<VariableListData>;
export type VariableListData = {
  tags: string[];
};
export type MeasureListItem = ListItem<MeasureListData>;
export type MeasureListData = {
  /** from  /qMetaDef/title */
  title: string;
  /** from  /qMetaDef/tags */
  tags: string[];
  /** from  /qMeasure/qLabelExpression */
  labelExpression: string;
};
export type MasterObjectListItem = ListItem<MasterObjectListData>;
export type MasterObjectListData = {
  /** from /qMetaDef/title */
  name: any;
  /** from /labelExpression */
  labelExpression: string;
  /** from /visualization */
  visualization: any;
  /** from /qMetaDef/tags */
  tags: string[];
};
export type DimensionListItem = ListItem<DimensionListData>;
export type DimensionListData = {
  /** from /qMetaDef/title */
  title: string;
  /** from /qMetaDef/tags */
  tags: string[];
  /** from /qDim/qGrouping */
  grouping: string;
  /** from /qDimInfos */
  info: GenericDimensionInfo[];
  /** from /qDim/qLabelExpression */
  labelExpression: string;
};
export type BookmarkListItem = ListItem<BookmarkListData>;
export type BookmarkListData = {
  /** /qMetaDef/title */
  title: string;
  /** /qMetaDef/description */
  description: string;
  /** /sheetId */
  sheetId: string;
  /** /selectionFields */
  selectionFields: any;
  /** /creationDate */
  creationDate: any;
};
export type ODAGAppLinkListItem = ListItem<ODAGAppLinkListData>;
export type ODAGAppLinkListData = {
  /** /qMetaDef/odagLinkRef */
  odagLinkRef: any;
  /** /qMetaDef/timestamp */
  timestamp: any;
};
export type DynamicAppViewListItem = ListItem<DynamicAppViewListData>;
export type DynamicAppViewListData = {
  /** /qMetaDef/odagLinkRef */
  odagLinkRef: any;
  /** /qMetaDef/timestamp */
  timestamp: any;
};
export type StoryListItem = ListItem<StoryListData>;
export type StoryListData = {
  /** /qMetaDef/title */
  title: string;
  /** /qMetaDef/description */
  description: string;
  /** /thumbnail */
  thumbnail: string;
  /** /rank */
  rank: any;
};

export type ExpandedFieldListItem = {
  qName: string;
  qSrcTables: string[];
  qTags: string[];
  isDerived: boolean;
  sourceField: string;
  derivedDefinitionName: string;
};
