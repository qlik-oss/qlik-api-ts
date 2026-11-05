import Errors from "../../schema/engine-enums";

function createGetMethod(cacheKey) {
  return function get() {
    const params = [].slice.call(arguments);
    const apiCache = this._getCache;

    // first parameter is the QIX method we override:
    const _get = params.splice(0, 1)[0];
    // generate an id based on all QIX parameters:
    const id = cacheKey + params.join("");

    if (apiCache[id]) {
      return apiCache[id];
    }

    const promise = _get
      .apply(this, params)
      .then((api) => {
        api.on("closed", () => {
          delete apiCache[id];
        });
        if (api.migrate && api.migrate.object) {
          return api.migrate.object(api).then(() => api);
        }
        return api;
      })
      .catch((err) => {
        delete apiCache[id];
        return Promise.reject({
          code: Errors.NxLocalizedErrorCode.LOCERR_GENERIC_NOT_FOUND,
          message: "Object not found",
          error: { code: Errors.NxLocalizedErrorCode.LOCERR_GENERIC_NOT_FOUND },
        });
      });

    apiCache[id] = promise;

    return promise;
  };
}

const genericGet = createGetMethod("generic-get-");
const variableGet = createGetMethod("variable-get-");
const fieldGet = createGetMethod("field-get-");

const mixin = {
  types: "Doc",
  override: {},
  init(args) {
    args.api._getCache = {};
  },
};

["getObject", "getBookmark", "getDimension", "getMeasure", "getVariableById"].forEach((method) => {
  mixin.override[method] = genericGet;
});

["getVariable", "getVariableByName"].forEach((method) => {
  mixin.override[method] = variableGet;
});

mixin.override.getField = fieldGet;

export default mixin;
