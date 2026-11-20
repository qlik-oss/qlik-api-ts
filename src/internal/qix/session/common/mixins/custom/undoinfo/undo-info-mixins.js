const states = new WeakMap();

function getState(model) {
  let state = states.get(model);
  if (!state) {
    state = {
      queue: Promise.resolve(),
      currentGroupId: null,
      isUndoLimitReached: false,
    };
    states.set(model, state);
  }
  return state;
}

function awaitQueue(state, proceedCallback) {
  const promise = state.queue.then(proceedCallback);
  state.queue = promise.then(
    () => undefined,
    () => undefined,
  );
  return promise;
}

function resetMarkersIfLimitReached(state, properties) {
  if (state.isUndoLimitReached) {
    properties.markers.length = 0;
    state.isUndoLimitReached = false;
  }
}

export default {
  types: ["UndoInfo"],

  extend: {
    undo() {
      const model = this;
      const state = getState(model);

      function proceed(waitForPromise) {
        return waitForPromise.then(() =>
          model.getLayout().then((layout) => {
            if (layout.qUndoInfo.qUndoCount > 0) {
              return model.app.undo().then(() =>
                model.getLayout().then((layout) => {
                  if (layout.markers.length % 2 !== 0) {
                    return proceed(Promise.resolve());
                  }
                  return undefined;
                }),
              );
            }
            if (layout.markers.length % 2 !== 0) {
              // Undo count on the backend is 0, but we have uneven markers. This can happen when the limit of undo operations has been reached (QLIK-67418)
              state.isUndoLimitReached = true;
            }

            return undefined;
          }),
        );
      }

      return awaitQueue(state, () => proceed(Promise.resolve()));
    },

    redo() {
      const model = this;
      const state = getState(model);

      function proceed(waitForPromise) {
        return waitForPromise.then(() =>
          model.getLayout().then((layout) => {
            if (layout.qUndoInfo.qRedoCount > 0) {
              state.isUndoLimitReached = false;
              return model.app.redo().then(() =>
                model.getLayout().then((layout) => {
                  if (layout.markers.length % 2 !== 0) {
                    return proceed(Promise.resolve());
                  }
                  return undefined;
                }),
              );
            }
            return undefined;
          }),
        );
      }

      return awaitQueue(state, () => proceed(Promise.resolve()));
    },

    reset() {
      const model = this;

      return model.getLayout().then((layout) => {
        if (!layout.qUndoInfo.qUndoCount && !layout.qUndoInfo.qRedoCount) {
          return undefined;
        }

        if (layout.markers.length) {
          return model.getProperties().then((props) => {
            props.markers.length = 0;
            return model.setProperties(props).then(() => model.app.clearUndoBuffer());
          });
        }

        return model.app.clearUndoBuffer();
      });
    },

    /**
     * Marks start of a group of operations in undo-stack
     *
     * @returns {Number} Unique group id which should be used when ending group (to avoid nested groups)
     */
    startGroup() {
      const model = this;
      const state = getState(model);

      return model.getLayout().then((layout) =>
        model.getProperties().then((props) => {
          const evenMarkers = props.markers.length % 2 === 0;
          if (evenMarkers || state.isUndoLimitReached) {
            state.currentGroupId = Date.now();
            resetMarkersIfLimitReached(state, props);
            props.markers.push(layout.qUndoInfo.qUndoCount + 1);
            return model.setProperties(props).then(() => Promise.resolve(state.currentGroupId));
          }
          return Promise.resolve(state.currentGroupId);
        }),
      );
    },

    /**
     * Marks end of a group of operations in undo-stack
     *
     * @param groupId - unique id to map against start marker (to avoid nested groups)
     */
    endGroup(groupId) {
      if (!groupId) {
        throw new Error("Must provide groupId to stop group.");
      }

      const model = this;
      const state = getState(model);

      return model.getLayout().then((layout) =>
        model.getProperties().then((props) => {
          const evenMarkers = props.markers.length % 2 === 0;
          if (!evenMarkers && groupId === state.currentGroupId) {
            state.currentGroupId = null;
            props.markers.push(layout.qUndoInfo.qUndoCount + 1);
            return model.setProperties(props);
          }
          return Promise.resolve();
        }),
      );
    },
  },
};
