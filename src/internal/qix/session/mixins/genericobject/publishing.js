export const mixin = {
  types: ["GenericObject"],

  override: {
    /**
     * Overrides the method `publish` by verifying
     * the users permissions before calling QIX Engine.
     */
    publish(_publish) {
      return this.getLayout().then((layout) => {
        if (layout.permissions.publish) {
          return _publish();
        }
        return Promise.reject("Permission denied");
      });
    },

    /**
     * Overrides the method `unPublish` by verifying
     * the users permissions before calling QIX Engine.
     */
    unPublish(_unPublish) {
      return this.getLayout().then((layout) => {
        const meta = layout.qMeta;
        const hasPermission = meta.published && !meta.approved;
        if (hasPermission) {
          return _unPublish();
        }
        return Promise.reject("Permission denied");
      });
    },
  },
};
