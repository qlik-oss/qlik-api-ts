import JSONPatch from "../utils/json-patch";

function updateQAttribute(properties) {
  const { qHyperCubeDef } = properties;
  if (qHyperCubeDef && qHyperCubeDef.qMeasures && qHyperCubeDef.qDimensions) {
    const columns = qHyperCubeDef.qDimensions.concat(qHyperCubeDef.qMeasures);
    columns.forEach((column) => {
      if (column.qAttributeExpressions) {
        column.qAttributeExpressions.forEach((attributeExpression) => {
          attributeExpression.qAttribute = true;
        });
      }
    });
  }
}

export const mixin = {
  types: ["GenericObject"],

  override: {
    setProperties(_setProperties, properties) {
      // Attribute expressions must be flagged as such, also for chart conversion.
      updateQAttribute(properties);
      return _setProperties(properties);
    },
    getEffectiveProperties(_getEffectiveProperties) {
      const self = this;
      return _getEffectiveProperties().then((effectiveProperties) => {
        self.effectiveProperties = self.effectiveProperties || effectiveProperties;
        JSONPatch.updateObject(self.effectiveProperties, effectiveProperties);
        return self.effectiveProperties;
      });
    },
  },
};
