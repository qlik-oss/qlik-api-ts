const mixin = {
  types: ["FieldList"],

  extend: {
    expand() {
      return this.getLayout().then((list) => {
        const result = [];
        for (let i = 0; i < list.length; ++i) {
          const field = list[i];
          result.push(field);

          if (field.qDerivedFieldData) {
            for (let j = 0; j < field.qDerivedFieldData.qDerivedFieldLists.length; ++j) {
              const derived = field.qDerivedFieldData.qDerivedFieldLists[j];
              for (let k = 0; k < derived.qFieldDefs.length; ++k) {
                const derived_field = derived.qFieldDefs[k];

                result.push({
                  qName: derived_field.qName,
                  qSrcTables: field.qSrcTables,
                  qTags: derived_field.qTags,
                  isDerived: true,
                  sourceField: field.qName,
                  derivedDefinitionName: derived.qDerivedDefinitionName,
                });
              }
            }
          }
        }
        return result;
      });
    },
  },
};
export default mixin;
