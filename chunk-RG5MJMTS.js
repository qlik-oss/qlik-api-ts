"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZXQHFWQHjs = require('./chunk-ZXQHFWQH.js');

// src/public/qix.ts
function openAppSession(appSessionProps) {
  const appSessionPromise = _chunkZXQHFWQHjs.getQixRuntimeModule.call(void 0, appSessionProps.hostConfig).then(
    (impl) => impl.openAppSession(appSessionProps)
  );
  const appSessionProxy = {
    /**
     * Returns a promise of the Qix Doc object with a set of client-side Api extensions.
     * Note that while the AppSession object is returned immediately this promise might take a while
     * to resolve for bigger apps.
     */
    async getDoc() {
      return (await appSessionPromise).getDoc();
    },
    /**
     * @experimental
     * Add an event-listener for this app-session.
     */
    onWebSocketEvent(listener) {
      const returnedFnPromise = appSessionPromise.then((appSession) => appSession.onWebSocketEvent(listener));
      return () => {
        void returnedFnPromise.then((fn) => fn());
      };
    },
    /**
     * @experimental
     * Resume a suspended session. This will resume exactly
     * once if the session is currently suspended, otherwise
     * nothing will be done.
     */
    async resume() {
      return (await appSessionPromise).resume();
    },
    /**
     * When the app session is no longer in use it must be closed using this function.
     * If the same underlying enigma websocket is used somewhere else in the browser
     * this is basically a no op, but if this is the last/only usage
     * of the underlying enigma websocket that websocket will be closed.
     */
    async close() {
      return (await appSessionPromise).close();
    }
  };
  return appSessionProxy;
}
var qix_default = {
  openAppSession
};




exports.openAppSession = openAppSession; exports.qix_default = qix_default;
