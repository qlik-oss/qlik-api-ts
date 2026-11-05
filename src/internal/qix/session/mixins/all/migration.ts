function isSnapshotData(data: any) {
  return data && !!data.sourceObjectId;
}

function migrate(model: any, data: any) {
  const migrateFn = isSnapshotData(data) ? model.migrate.snapshot : model.migrate.properties;

  if (typeof migrateFn !== "function") {
    throw new Error(`migration function not a function: expected function, got ${typeof migrateFn}`);
  }

  return migrateFn(data);
}

export default {
  types: ["Doc", "GenericObject", "GenericDimension", "GenericMeasure", "GenericBookmark", "GenericVariable"],

  extend: {
    migrate: {
      properties(properties: any) {
        return properties;
      },
      snapshot(layout: any) {
        return layout;
      },
    },
  },

  override: {
    getProperties(_getProperties: any) {
      const model = this;
      return _getProperties().then((properties: any) => migrate(model, properties));
    },
    setProperties(_setProperties: any, properties: any) {
      return _setProperties(migrate(this, properties));
    },
  },
};
