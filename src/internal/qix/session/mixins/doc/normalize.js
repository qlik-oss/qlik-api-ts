export default {
  types: "Doc",
  extend: {
    getProperties() {
      return this.getAppProperties();
    },

    setProperties(props) {
      return this.setAppProperties(props);
    },

    getLayout() {
      return this.getAppLayout();
    },
  },

  init(args) {
    this.Promise = args.config.Promise;

    const { api } = args;
    // compatibility with the older app model that expects Deferred:
    api.waitForOpen = { promise: Promise.resolve() };
  },
};
