import merge from "lodash-es/merge.js";
import { generateRandomString } from "#internal/utils/random";

const mixin = {
  types: "Doc",

  override: {
    createBookmark(_createBookmark, props) {
      return _createBookmark(
        merge(
          {
            qInfo: {
              qType: "bookmark",
            },
            qMetaDef: {
              title: "",
              description: "",
            },
            creationDate: new Date().toISOString(),
          },
          props,
        ),
      );
    },
    createBookmarkEx(_createBookmarkEx, props, patchObjs) {
      return _createBookmarkEx(
        merge(
          {
            qInfo: {
              qType: "bookmark",
            },
            qMetaDef: {
              title: "",
              description: "",
            },
            creationDate: new Date().toISOString(),
          },
          props,
        ),
        patchObjs,
      );
    },
  },

  extend: {
    /**
     * Creates a Qlik Sense Sheet
     * @param {Object} [props] The sheet properties to override
     * @param {String} [props.title] - The new sheet's title
     * @param {String} [props.description] - The new sheet's description
     * @param {String} [props.thumbnail] - URL to a thumbnail image
     * @param {String|Number} [props.rank] - Sorting rank
     * @param {Number} [props.rows] - number of grid rows
     * @param {Number} [props.columns] - number of grid columns
     * @param {Number} [props.customRowBase] - number of rows for grid resolution
     * @param {String} [props.gridResolution] - number of grid cells: small|medium|large
     * @param {Object} [props.layoutOptions] - layout options for the sheet
     *
     * @returns {Promise<Object,Error>} A Promise that returns an api to the new sheet if resolved or an Error if rejected
     */
    async createSheet(props = {}) {
      return this.createObject({
        qInfo: {
          // generating id on client side to support multiple undo create operations
          // raised an engine bug to solve this, when resolved can be changed
          // TODO: update the jira id for engine bug once created
          qId: generateRandomString(43),
          qType: "sheet",
        },
        qMetaDef: {
          title: props.title || "",
          description: props.description || "",
        },
        rank: typeof props.rank !== "undefined" ? props.rank : -1,
        thumbnail: { qStaticContentUrlDef: props.thumbnail || null },
        columns: props.columns || 24,
        rows: props.rows || 12,
        cells: [],
        customRowBase: props.customRowBase,
        gridResolution: props.gridResolution || undefined,
        layoutOptions: props.layoutOptions || undefined,
        qChildListDef: {
          qData: {
            title: "/title",
          },
        },
      });
    },

    /**
     * Creates a Qlik Sense Story
     * @param {Object} [props] The story properties to override
     * @param {String} [props.title] - The new story's title
     * @param {String} [props.description] - The new story's description
     * @param {String} [props.thumbnail] - URL to a thumbnail image
     * @param {String|Number} [props.rank] - Sorting rank
     * @returns {Promise<Object,Error>} A Promise that returns an api to the new story if resolved or an Error if rejected
     */
    async createStory(props = {}) {
      return this.createObject({
        qInfo: {
          // generating id on client side to support multiple undo create operations
          // raised an engine bug to solve this, when resolved can be changed
          qId: generateRandomString(43),
          qType: "story",
        },
        qMetaDef: {
          title: props.title || "",
          description: props.description || "",
        },
        rank: typeof props.rank !== "undefined" ? props.rank : -1,
        thumbnail: { qStaticContentUrlDef: props.thumbnail || null },
        qChildListDef: {
          qData: {
            title: "/title",
            rank: "/rank",
          },
        },
      });
    },

    /**
     * Creates a Qlik Sense Master Object
     * @param {Object} [props] The properties to override
     * @param {String} [props.title] - The master object title
     * @param {String} [props.description] - The master object description
     * @param {String[]|String} [props.tags] - The list of tags. String values are passed through for compatibility.
     * @returns {Promise<Object,Error>} A Promise that returns an api to the new master object if resolved or an Error if rejected
     */
    createMasterObject(props) {
      props = props || {};
      return this.createObject({
        qInfo: {
          qType: "masterobject",
        },
        qMetaDef: {
          title: props.title || "",
          description: props.description || "",
          tags: props.tags || [],
        },
      });
    },
  },
};

export { mixin };
