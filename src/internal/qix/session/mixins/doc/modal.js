export default {
  types: "Doc",
  extend: {
    /**
     * Aborts the modal selection state in Engine.
     *
     * @param {Boolean} accept Whether to apply the selections made while in modal state
     * @returns {Promise} A promise of a result
     */
    abortModalSelection(accept) {
      accept = accept !== undefined ? accept : true;
      this.setModalSelection(null);
      return this.abortModal(accept);
    },

    /**
     * Switches the modal selection state in Engine.
     *
     * @param {RPCBase|null} [object] If defined, will switch modal state to that model, if null, will end selection modal state
     * @param {String|Array} [path] If defined, will use the given path(s) for which hypercube(s) to apply the modal state on
     * @param {Boolean} accept Whether to apply the selections made while in modal state
     * @returns {Promise} A promise of a result
     */
    switchModalSelection(object, path, accept) {
      object = object || null;
      path = path || "";
      accept = accept !== undefined ? accept : true;

      const pathArray = Array.isArray(path) ? path : [path];

      if (this.isInModalSelection() && object !== this.modalSelectionObject) {
        this.modalSelectionObject.endSelections(accept);
      }
      if (!object || object.isClosed) {
        this.setModalSelection(null);
      } else if (object !== this.modalSelectionObject) {
        this.setModalSelection(object);
        return object.beginSelections(pathArray);
      }
      return Promise.resolve();
    },

    /**
     * Sets an object as selection modal target.
     */
    setModalSelection(obj) {
      this.modalSelectionObject = obj;
    },

    /**
     * @returns {Boolean} whether the app is in selection modal state
     */
    isInModalSelection() {
      return this.modalSelectionObject && !this.modalSelectionObject.isClosed;
    },
  },
};
