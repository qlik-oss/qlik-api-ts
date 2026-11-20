export default {
  types: ["Doc", "GenericObject", "GenericDimension", "GenericMeasure", "GenericBookmark", "GenericVariable", "Field"],

  init(args: { api: any; config?: any }) {
    const { api } = args;
    if (api.Promise) {
      // Skip since this is already setup by Phoenix
      return;
    }
    if (api.getAppLayout) {
      // expose app on `session` so we can mixin the app on child `apis`:
      api.session.app = api;
    }
    api.app = api.session.app;
    api.enigmaModel = args.api;
    api.Promise = args.config.Promise;
  },
};
