let evenMarkers = true;
const queue = [];
let currentGroupId = null;
let isUndoLimitReached = false;

function awaitQueue(proceedCallback) {
  const aheadInQueue = queue[queue.length - 1];
  let promise;

  if (aheadInQueue) {
    promise = proceedCallback(aheadInQueue);
  } else {
    promise = proceedCallback(Promise.resolve());
  }

  queue.push(promise);
  return promise;
}

function resetMarkersIfLimitReached(properties) {
  if (isUndoLimitReached) {
    properties.markers.length = 0;
    isUndoLimitReached = false;
  }
}

export default {
  types: ["UndoInfo"],

  extend: {
    undo() {
      const model = this;

      function proceed(waitForPromise) {
        return waitForPromise.then(() =>
          model.getLayout().then((layout) => {
            if (layout.qUndoInfo.qUndoCount > 0) {
              return model.app.undo().then(() =>
                model.getLayout().then((layout) => {
                  evenMarkers = layout.markers.length % 2 === 0;
                  if (!evenMarkers) {
                    return proceed(Promise.resolve());
                  }
                  queue.splice(0, 1);
                  return undefined;
                }),
              );
            }
            evenMarkers = layout.markers.length % 2 === 0;
            if (!evenMarkers) {
              // Undo count on the backend is 0, but we have uneven markers. This can happen when the limit of undo operations has been reached (QLIK-67418)
              isUndoLimitReached = true;
            }

            queue.splice(0, 1);
            return undefined;
          }),
        );
      }

      return awaitQueue(proceed);
    },

    redo() {
      const model = this;

      function proceed(waitForPromise) {
        return waitForPromise.then(() =>
          model.getLayout().then((layout) => {
            if (layout.qUndoInfo.qRedoCount > 0) {
              isUndoLimitReached = false;
              return model.app.redo().then(() =>
                model.getLayout().then(() => {
                  evenMarkers = layout.markers.length % 2 === 0;
                  if (!evenMarkers) {
                    return proceed(Promise.resolve());
                  }
                  queue.splice(0, 1);
                  return undefined;
                }),
              );
            }
            queue.splice(0, 1);
            return undefined;
          }),
        );
      }

      return awaitQueue(proceed);
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

      return model.getLayout().then((layout) =>
        model.getProperties().then((props) => {
          evenMarkers = props.markers.length % 2 === 0;
          if (evenMarkers || isUndoLimitReached) {
            currentGroupId = Date.now();
            resetMarkersIfLimitReached(props);
            props.markers.push(layout.qUndoInfo.qUndoCount + 1);
            return model.setProperties(props).then(() => Promise.resolve(currentGroupId));
          }
          return Promise.resolve(currentGroupId);
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

      return model.getLayout().then((layout) =>
        model.getProperties().then((props) => {
          evenMarkers = props.markers.length % 2 === 0;
          if (!evenMarkers && groupId === currentGroupId) {
            currentGroupId = null;
            props.markers.push(layout.qUndoInfo.qUndoCount + 1);
            return model.setProperties(props);
          }
          return Promise.resolve();
        }),
      );
    },
  },
};
