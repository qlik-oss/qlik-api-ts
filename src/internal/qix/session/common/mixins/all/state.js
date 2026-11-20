import JSONPatch from "../utils/json-patch";
import Notification from "../utils/notification";
import { mapToLayout } from "../utils/permissions";

const RPCStates = {
  VALID: 1,
  INVALID: 2,
  VALIDATING: 3,
  CLOSED: 5,
  CLOSING: 6,
  CANCELLED: 7,
};

export default {
  types: ["Doc", "GenericObject", "GenericDimension", "GenericMeasure", "GenericBookmark", "GenericVariable"],

  extend: {
    setState(state) {
      const oldState = this.state;
      this.state = state;

      if (oldState === this.state) {
        // silent return
      } else if (state === RPCStates.INVALID) {
        this.Invalidated.emit();
      } else if (state === RPCStates.VALID) {
        this.Validated.emit();
      } else if (state === RPCStates.VALIDATING) {
        this.Validating.emit();
      } else if (state === RPCStates.CLOSED) {
        this.Closed.emit();
      } else if (state === RPCStates.CLOSING) {
        this.Closing.emit();
      } else if (state === RPCStates.CANCELLED) {
        this.Cancelled.emit();
      }
    },

    markAsInvalid() {
      // reset state so that the full chain of invalidation gets invoked:
      this.state = -99;
      this.setState(RPCStates.INVALID);
    },

    markAsCancelled() {
      this.setState(RPCStates.CANCELLED);
    },

    clearPending() {
      const api = this;
      for (const key in api.ongoingRequests) {
        delete api.ongoingRequests[key];
      }
    },

    getLayoutAndPatchLastResult() {
      return this.getLayout(false);
    },
  },

  override: {
    getLayout(_getLayout, pure) {
      const CACHE_KEY = `GetLayout${this.delta}`;
      const RELOAD_IN_PROGRESS_ERROR = 11000;
      const self = this;
      const getPureLayout = pure !== false; // GWE changed default behaviour to be pure (standard)

      if (self.isValid && self.layout) {
        return self.Promise.resolve(getPureLayout ? self.pureLayout : self.layout);
      }

      if (!self.isValidating) {
        self.setState(RPCStates.VALIDATING);
      }

      if (self.ongoingRequests[CACHE_KEY]) {
        const ongoingRequests = self.ongoingRequests[CACHE_KEY];
        if (pure) {
          /**
           * Since we are using a cache we have to make sure to return
           * the pure layout when we request using pure.
           */
          return ongoingRequests.then(() => {
            if (!self.pureLayout.permissions) {
              self.pureLayout.permissions = self.layout.permissions;
            }
            return self.pureLayout;
          });
        }
        return ongoingRequests;
      }

      const request = _getLayout()
        .then((layout) => {
          if (!self.isValid) {
            JSONPatch.updateObject(self.layout, layout);
          }
          if (self.ongoingRequests[CACHE_KEY] === request) {
            self.setState(RPCStates.VALID);
            delete self.ongoingRequests[CACHE_KEY];
          }

          self.pureLayout = layout;
          self.pureLayout.permissions = self.layout.permissions;

          return getPureLayout ? self.pureLayout : self.layout;
        })
        .catch((err) => {
          delete self.ongoingRequests[CACHE_KEY];

          if (err.code === RELOAD_IN_PROGRESS_ERROR) {
            // Prevent GetLayout from raising Reload In Progress error so the error message
            // does not appear in idle tabs.
            err.isHandled = true;
          }

          return self.Promise.reject(err);
        });

      self.ongoingRequests[CACHE_KEY] = request;

      return request;
    },

    getProperties(_getProperties) {
      const CACHE_KEY = "GetPropertiesfalse"; // force delta to false
      const self = this;

      if (self.isValid && !self.needCacheProperties) {
        return self.Promise.resolve(self.properties);
      }
      if (self.ongoingRequests[CACHE_KEY]) {
        return self.ongoingRequests[CACHE_KEY];
      }
      const request = _getProperties().then((properties) => {
        const patches = JSONPatch.generate(self._properties, properties);
        self._properties = properties;
        JSONPatch.apply(self.properties, patches);
        if (self.isValid) {
          self.needCacheProperties = false;
        }
        return self.properties;
      });

      self.ongoingRequests[CACHE_KEY] = request;
      request
        .catch(() => {})
        .finally(() => {
          delete self.ongoingRequests[CACHE_KEY];
        });

      return request;
    },

    setProperties(_setProperties, properties) {
      const self = this;
      return _setProperties(properties).then(() => {
        JSONPatch.updateObject(self._properties, self.properties);
      });
    },
  },

  init(args) {
    const { api } = args;

    Notification.mixin(api);
    api.notification("Validated");
    api.notification("Invalidated");
    api.notification("Validating");
    api.notification("Closed");
    api.notification("Closing");
    api.notification("Cancelled");

    api.setState(RPCStates.INVALID);

    api.layout = {};
    api.pureLayout = null;
    api.properties = {};
    api._properties = {};
    api.needCacheProperties = true;
    api.ongoingRequests = {};

    mapToLayout(api.layout, !!api.getAppLayout);

    api.on("changed", () => {
      api.clearPending();
      api.needCacheProperties = true;
      api.setState(RPCStates.INVALID);
    });

    api.on("closed", () => {
      for (const key in api.ongoingRequests) {
        if (api.ongoingRequests[key].then) {
          api.ongoingRequests[key].then(null, (error) => {
            error.isHandled = true;
          });
        }
      }
      api.setState(RPCStates.CLOSED);
    });

    api.Cancelled.bind(() => {
      api.clearPending();
    });

    Object.defineProperties(api, {
      isValid: {
        get() {
          return this.state === RPCStates.VALID;
        },
      },
      isValidating: {
        get() {
          return this.state === RPCStates.VALIDATING;
        },
      },
      isInvalid: {
        get() {
          return this.state === RPCStates.INVALID;
        },
      },
      isClosed: {
        get() {
          return this.state === RPCStates.CLOSED;
        },
      },
      isClosing: {
        get() {
          return this.state === RPCStates.CLOSING;
        },
      },
      isCancelled: {
        get() {
          return this.state === RPCStates.CANCELLED;
        },
      },
    });
  },
};
