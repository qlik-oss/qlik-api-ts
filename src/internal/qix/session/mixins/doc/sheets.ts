import type { Doc } from "../../../types/doc";
import type { GenericListObject } from "../../../types/generic-object";
import type { SheetListItem } from "../../../types/list-types";

export const sheetListProps = {
  qInfo: {
    qId: "SheetList",
    qType: "SheetList",
  },
  qAppObjectListDef: {
    qType: "sheet",
    qData: {
      title: "/qMetaDef/title",
      labelExpression: "/labelExpression",
      showCondition: "/showCondition",
      description: "/qMetaDef/description",
      descriptionExpression: "/descriptionExpression",
      thumbnail: "/thumbnail",
      cells: "/cells",
      rank: "/rank",
      columns: "/columns",
      rows: "/rows",
      groupId: "/groupId",
      visible: "/visible",
    },
  },
};

export const mixin = {
  types: "Doc",

  extend: {
    /**
     * Fetches the sheet list
     */
    getSheetList(this: Doc): Promise<SheetListItem[]> {
      return this.getListData<SheetListItem>(sheetListProps);
    },

    getSheetListObject(this: Doc): Promise<GenericListObject<SheetListItem>> {
      return this.getListObject(sheetListProps);
    },
  },
};
