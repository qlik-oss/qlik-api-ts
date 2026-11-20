/**
 * @exports assets/core/utils/permissions
 */
const CREATABLE_RESOURCES = [
  { resource: "sheet", canCreate: true },
  { resource: "bookmark", canCreate: true },
  { resource: "story", canCreate: true },
  { resource: "searchhistory", canCreate: true },
  { resource: "dimension", canCreate: true },
  { resource: "measure", canCreate: true },
  { resource: "masterobject", canCreate: true },
  { resource: "snapshot", canCreate: true },
];

let forceReadOnly = false;

/**
 * Maps app object permission bit values to readable keys.
 *
 * @param {Array} privileges The array of privilieges to parse data from
 * @param {Object} [mapToObj] An optional object that'll be used to set the permissions on
 * @returns {Object} An object containing readable permissions
 */
export function parse(privileges, mapToObj) {
  if (!privileges.length) {
    // no permissions available, assume full permissions:
    privileges = ["update", "publish", "export", "exportdata", "changeowner", "delete"];
  }

  if (forceReadOnly) {
    // force no privileges except read:
    privileges = [];
  }

  mapToObj = mapToObj || {};
  mapToObj.update = privileges.indexOf("update") !== -1;
  mapToObj.publish = privileges.indexOf("publish") !== -1;
  mapToObj.export = privileges.indexOf("export") !== -1;
  mapToObj.exportData = privileges.indexOf("exportdata") !== -1;
  mapToObj.changeOwner = privileges.indexOf("changeowner") !== -1;
  mapToObj.remove = privileges.indexOf("delete") !== -1;

  return mapToObj;
}

/**
 * Maps create permission bit values to readable keys.
 *
 * @param {Array} creatables An array containing string names for the creatable types
 * @param {Object} [mapToObj] An optional object that'll be used to set the permissions on
 * @returns {Object} An object containing readable permissions
 */
export function parseCreate(creatables, mapToObj) {
  mapToObj = mapToObj || {};

  for (const key in mapToObj) {
    delete mapToObj[key];
  }

  if (forceReadOnly) {
    return mapToObj;
  }

  creatables.forEach((creatable) => {
    if (creatable.canCreate) {
      mapToObj[`create${creatable.resource[0].toUpperCase()}${creatable.resource.substring(1)}`] = true;
    }
  });

  return mapToObj;
}

/**
 * Maps permissions onto a layout. It's exposed by `layout.permissions`.
 *
 * @param {Object} layout The layout to create readable permissions on
 * @returns {Object} The modified layout
 */
export function mapToLayout(layout, isApp) {
  const permissions = {};

  if (!layout.permissions) {
    Object.defineProperty(layout, "permissions", {
      configurable: false,
      enumerable: false,
      get() {
        if (layout) {
          if (isApp) {
            forceReadOnly = layout.qReadOnly;
            parseCreate(layout.create || CREATABLE_RESOURCES, permissions);
          }
          parse(layout.privileges || (layout.qMeta && layout.qMeta.privileges) || [], permissions);
        }
        return permissions;
      },
    });
  }
  return layout;
}
