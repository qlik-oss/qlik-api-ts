import type { NativeDocFunctions, NxAppLayout, NxAppProperties, NxFieldDescription } from "./engine-schema";
import type {
  AnyGenericObjectProperties,
  CurrentSelections,
  Field,
  FieldListObject,
  GenericBookmark,
  GenericDimension,
  GenericListObject,
  GenericMeasure,
  GenericObject,
  GenericVariable,
  UndoInfoObject,
} from "./generic-object";
import type { Global } from "./global";
import type { RpcObject } from "./rpc-object";

import type {
  BookmarkListItem,
  DimensionListItem,
  DynamicAppViewListItem,
  ListBoxProperties,
  MasterObjectListItem,
  MeasureListItem,
  ODAGAppLinkListItem,
  SheetListItem,
  StoryListItem,
  VariableListItem,
} from "./list-types";

export type Doc = RpcObject &
  NativeDocFunctions<
    Field,
    GenericBookmark,
    GenericDimension,
    GenericMeasure,
    GenericObject,
    GenericVariable,
    AnyGenericObjectProperties
  > &
  StandardFunctions &
  ObjectHelperFunctions &
  ModalFunctions &
  ListFunctions &
  SpecialObjectFunctions & {
    global: Global;
  };

export type StandardFunctions = {
  /** Alias for getAppProperties */
  getProperties(): Promise<NxAppProperties>;
  /** Alias for setAppProperties */
  setProperties(props: NxAppProperties): Promise<void>;
  /** Alias for getAppLayout */
  getLayout(): Promise<NxAppLayout>;
};

export type ModalFunctions = {
  /**
   * Aborts the modal selection state in Engine.
   *
   * @param {Boolean} accept Whether to apply the selections made while in modal state
   * @returns {Promise} A promise of a result
   */
  abortModalSelection(accept: boolean): Promise<void>;
  /**
   * Aborts the modal selection state in Engine.
   *
   * @param {Boolean} accept Whether to apply the selections made while in modal state
   * @returns {Promise} A promise of a result
   */
  abortModalSelection(accept: boolean): Promise<void>;
  /**
   * Switches the modal selection state in Engine.
   *
   * @param {RpcObject|null} [object] If defined, will switch modal state to that model, if null, will end selection modal state
   * @param {String|Array} [path] If defined, will use the given path(s) for which hypercube(s) to apply the modal state on
   * @param {Boolean} accept Whether to apply the selections made while in modal state
   * @returns {Promise} A promise of a result
   */
  switchModalSelection(
    object: RpcObject | undefined | null,
    path: string | string[] | undefined,
    accept: boolean,
  ): Promise<void>;
  /**
   * Switches the modal selection state in Engine.
   *
   * @param {RpcObject|null} [object] If defined, will switch modal state to that model, if null, will end selection modal state
   * @param {String|Array} [path] If defined, will use the given path(s) for which hypercube(s) to apply the modal state on
   * @param {Boolean} accept Whether to apply the selections made while in modal state
   * @returns {Promise} A promise of a result
   */
  switchModalSelection(
    object: RpcObject | undefined | null,
    path: string | string[] | undefined,
    accept: boolean,
  ): Promise<void>;
  /**
   * Sets an object as selection modal target.
   */
  setModalSelection(obj: RpcObject): Promise<void>;
  /**
   * Sets an object as selection modal target.
   */
  setModalSelection(obj: RpcObject): Promise<void>;
  /**
   * @returns {Boolean} whether the app is in selection modal state
   */
  isInModalSelection(): Promise<boolean>;
  /**
   * @returns {Boolean} whether the app is in selection modal state
   */
  isInModalSelection(): Promise<boolean>;
};

export type CreateStoryProps = {
  /** Title of the new object. */
  title?: string;
  /** Description of the new object. */
  description?: string;
  /** URL to a thumbnail image. */
  thumbnail?: string;
  /** Sorting rank. */
  rank?: string | number;
};

export type CreateSheetProps = CreateStoryProps & {
  /** Number of grid rows. */
  rows?: number;
  /** Number of grid columns. */
  columns?: number;
  /** Number of rows for grid resolution. */
  customRowBase?: number;
  /** Grid resolution, such as small, medium, or large. */
  gridResolution?: string;
  /** Layout options for the sheet. */
  layoutOptions?: object;
};

export type CreateMasterObjectProps = Pick<CreateStoryProps, "title" | "description"> & {
  /** Tags to assign. Legacy string values are passed through unchanged. */
  tags?: string[] | string;
};

export type ObjectHelperFunctions = {
  /** Creates a Qlik Sense sheet. */
  createSheet(props?: CreateSheetProps): Promise<GenericObject>;
  /** Creates a Qlik Sense story. */
  createStory(props?: CreateStoryProps): Promise<GenericObject>;
  /** Creates a Qlik Sense master object. */
  createMasterObject(props?: CreateMasterObjectProps | null): Promise<GenericObject>;

  getOrCreateSessionObject<GenericObjectCustomType extends GenericObject = GenericObject>(
    props: ListBoxProperties,
  ): Promise<GenericObjectCustomType>;

  /**
   * Help method to fetch list objects from Engine through as session objects
   * @param {Object} listDef - specifications of which type of list to fetch
   * @param {Object} listDef.qInfo - qInfo object specifying a type and id for the session object
   * @returns {Promise<Object>} Promise containing the list handling object if resolved or Error if rejected
   */
  getListObject<ItemType>(listDef: ListBoxProperties): Promise<GenericListObject<ItemType>>;

  /**
   * Help method to fetch app object data from Engine through a session object
   * @param {Object} listDef - specifications of which type of list to fetch
   * @param {Object} listDef.qInfo - qInfo object specifying a type and id for the session object
   * @returns {Promise.<Array>} A Promise that when resolved holds a list of data objects of the specified type
   */
  getListData<ItemType>(listDef: ListBoxProperties): Promise<ItemType[]>;
};

export type ListFunctions = {
  getFieldList(): Promise<NxFieldDescription[]>;
  getFieldListObject(): Promise<FieldListObject>;
  getOnTheFlyListObject(): Promise<GenericListObject<NxFieldDescription>>;
  getOnTheFlyWithHiddenListObject(): Promise<GenericListObject<NxFieldDescription>>;

  getDimensionList(): Promise<DimensionListItem[]>;
  getDimensionListObject(): Promise<GenericListObject<DimensionListItem>>;

  getMeasureList(): Promise<MeasureListItem[]>;
  getMeasureListObject(): Promise<GenericListObject<MeasureListItem>>;

  getMasterObjectList(): Promise<MasterObjectListItem[]>;
  getMasterObjectListObject(): Promise<GenericListObject<MasterObjectListItem>>;

  getVariableList(): Promise<VariableListItem[]>;
  getVariableListObject(): Promise<GenericListObject<VariableListItem>>;

  getBookmarkList(): Promise<BookmarkListItem[]>;
  getBookmarkListObject(): Promise<BookmarkListItem[]>;

  getSheetList(): Promise<SheetListItem[]>;
  getSheetListObject(): Promise<GenericListObject<SheetListItem>>;

  getStoryList(): Promise<StoryListItem[]>;
  getStoryListObject(): Promise<GenericListObject<StoryListItem>>;

  getODAGAppLinkList(): Promise<ODAGAppLinkListItem[]>;
  getODAGAppLinkListObject(): Promise<GenericListObject<ODAGAppLinkListItem>>;

  getDynamicAppViewList(): Promise<DynamicAppViewListItem[]>;
  getDynamicAppViewObject(): Promise<GenericListObject<DynamicAppViewListItem>>;
};

export type SpecialObjectFunctions = {
  getUndoInfoObject(): Promise<UndoInfoObject>;
  getCurrentSelectionObject(): Promise<CurrentSelections>;
};
