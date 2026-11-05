import type {
  AnyGenericObjectProperties,
  Doc,
  GenericObject,
  GenericObjectProperties,
  GenericVariable,
  GenericVariableProperties,
  NxInfo,
} from "../../qix-types";
import { logEvent } from "./logger";
import type { Json } from "./protocol-types";
import type { QixConnection } from "./qix-connection";
import type { PhoenixRpcObject } from "./rpc-object";
import type { Mixin } from "./rpc-object-mixins";
import { type QObjectRef } from "./rpc-object-ref";

/**
 * The respawn functions are called when a session is reattached and the objects need to get their new handles and potentially even be recreated from scratch
 * if the session has dissapeared from the server. since the ordinary invoke function on the object and object.session will retrigger the respawning process when already inside t
 * the respawning process we have to use the connection.invoke function instead. which simple takes the handle and the request as arguments and sends it to the server.
 */
const refetch1: Mixin = {
  types: ["GenericObject"],
  override: {
    async respawn(this: PhoenixRpcObject, original: PhoenixRpcObject["respawn"], connection: QixConnection) {
      if (this.__remote__.respawnInfo.isSessionObject) {
        let objectFoundInEngine = false;
        if (connection.isReattached()) {
          // See if we can find the object on the server side
          try {
            this.setHandle(
              await connection
                .invoke<QObjectRef>(this.app.handle, { method: "GetObject", params: [this.id], outKey: -1 })
                .then((res) => res.qHandle),
            );
            objectFoundInEngine = true;
          } catch (err) {
            // eslint-disable-next-line no-console
            console.warn("Session object not found in reattached session", err);
            objectFoundInEngine = false;
          }
        }
        if (!objectFoundInEngine) {
          const props = JSON.parse(JSON.stringify(this.__remote__.respawnInfo.properties)) as { qInfo?: NxInfo };
          props.qInfo = props.qInfo || {};
          props.qInfo.qId = this.id;
          // We have to create a new session object
          logEvent("Respawning session object using", this.__remote__.respawnInfo.properties);
          this.setHandle(
            await connection
              .invoke<QObjectRef>(this.app.handle, {
                method: "CreateSessionObject",
                params: [props],
                outKey: -1,
              })
              .then((res) => res.qHandle),
          );
        }
      } else {
        //  Ordinary object
        this.setHandle(
          await connection
            .invoke<QObjectRef>(this.app.handle, { method: "GetObject", params: [this.id], outKey: -1 })
            .then((res) => res.qHandle),
        );
      }

      if (this.__remote__.respawnInfo.activeModalSelectionPaths && !connection.isReattached()) {
        try {
          logEvent(
            "########### BeginSelections ###################################",
            this.__remote__.respawnInfo.activeModalSelectionPaths,
          );

          // Enter the right modal selections state
          await connection.invoke(this.handle, {
            method: "BeginSelections",
            params: [this.__remote__.respawnInfo.activeModalSelectionPaths],
            outKey: -1,
          });
        } catch (err) {
          // eslint-disable-next-line no-console
          console.warn("Could not reapply modal selection state", err);
        }
      }
    },

    async beginSelections(this: PhoenixRpcObject, original: GenericObject["beginSelections"], paths: string[]) {
      logEvent("Storing modal selections", this.handle, this.__remote__.respawnInfo.activeModalSelectionPaths);
      this.__remote__.respawnInfo.activeModalSelectionPaths = paths;
      return original(paths);
    },

    async endSelections(this: PhoenixRpcObject, original: GenericObject["endSelections"], accept: boolean) {
      this.__remote__.respawnInfo.activeModalSelectionPaths = undefined;
      logEvent("Removing modal selections", this.handle, this.__remote__.respawnInfo.activeModalSelectionPaths);
      return original(accept);
    },

    /**
     * TODO SUPPORT THESE ASWELL
          applyPatches: (patches: NxPatch[], softPatch?: boolean) => Promise<void>;
          clearSoftPatches: () => Promise<void>;
          copyFrom: (fromId: string) => Promise<void>;
          destroyAllChildren: (propForThis?: CustomProperties) => Promise<void>;
          destroyChild: (id: string, propForThis?: CustomProperties) => Promise<boolean>;
          lock: (path: string, colIndices?: number[]) => Promise<void>;
          resetMadeSelections: () => Promise<void>;
          setChildArrayOrder: (ids: string[]) => Promise<void>;
          setFullPropertyTree: (propEntry: GenericObjectEntry) => Promise<void>;
          setProperties: (prop: CustomProperties) => Promise<void>;
          unlock: (path: string, colIndices?: number[]) => Promise<void>;
     */
    async setProperties(
      this: PhoenixRpcObject,
      original: GenericObject["setProperties"],
      props: AnyGenericObjectProperties,
    ) {
      this.__remote__.respawnInfo.properties = props as Json;
      return original(props);
    },
  },
};

const variableRespawnMixin: Mixin = {
  types: ["GenericVariable"],
  override: {
    async respawn(this: PhoenixRpcObject, original: PhoenixRpcObject["respawn"], connection: QixConnection) {
      logEvent("Respawning variable ", this.id);

      if (this.__remote__.respawnInfo.isSessionObject) {
        let objectFoundInEngine = false;
        if (connection.isReattached()) {
          // See if we can find the object on the server side
          try {
            this.setHandle(
              await connection
                .invoke<QObjectRef>(this.app.handle, { method: "GetObject", params: [this.id], outKey: -1 })
                .then((res) => res.qHandle),
            );
            objectFoundInEngine = true;
          } catch (err) {
            // eslint-disable-next-line no-console
            console.warn("Session variable not found in reattached session", err);
            objectFoundInEngine = false;
          }
        }
        if (!objectFoundInEngine) {
          this.setHandle(
            await connection
              .invoke<QObjectRef>(this.app.handle, {
                method: "CreateSessionVariable",
                params: [this.__remote__.respawnInfo.properties as Json],
                outKey: -1,
              })
              .then((res) => res.qHandle),
          );
        }
      } else {
        this.setHandle(
          await connection
            .invoke<QObjectRef>(this.app.handle, { method: "GetObject", params: [this.id], outKey: -1 })
            .then((res) => res.qHandle),
        );
      }
    },

    // TODO suppor these functions as well
    //applyPatches: (patches: NxPatch[]) => Promise<void>;
    //setDualValue: (text: string, num: number) => Promise<void>;
    //setNumValue: (val: number) => Promise<void>;
    //setStringValue: (val: string) => Promise<void>;
    async setProperties(
      this: PhoenixRpcObject,
      original: GenericVariable["setProperties"],
      props: GenericVariableProperties,
    ) {
      this.__remote__.respawnInfo.properties = props as Json;
      return original(props);
    },
  },
};

const variarbleMeasureAndBookmarkRespawnMixin: Mixin = {
  types: ["GenericDimension", "GenericMeasure", "GenericBookmark"],
  override: {
    async respawn(this: PhoenixRpcObject, original: PhoenixRpcObject["respawn"], connection: QixConnection) {
      logEvent("Respawning field dimension, measure or bookmark", this.id);
      this.setHandle(
        await connection
          .invoke<QObjectRef>(this.app.handle, { method: "GetObject", params: [this.id], outKey: -1 })
          .then((res) => res.qHandle),
      );
    },
  },
};

const fieldRespawningMixin: Mixin = {
  types: ["Field"],
  override: {
    async respawn(this: PhoenixRpcObject, original: PhoenixRpcObject["respawn"], connection: QixConnection) {
      logEvent("Respawning field object ", this.id);
      if (
        this.__remote__.respawnInfo.creatingRequest &&
        this.__remote__.respawnInfo.creatingRequest.method.startsWith("Get")
      ) {
        this.setHandle(
          await connection
            .invoke<QObjectRef>(1, this.__remote__.respawnInfo.creatingRequest)
            .then((res) => res.qHandle),
        );
        logEvent("Respawned field object using creating request ", this.id, this.handle);
      } else {
        this.setHandle(0);
        logEvent("No idea how to respawn", this.id);
      }
    },
  },
};

const rememberCreatePropsMixin: Mixin = {
  types: ["Doc"],
  override: {
    async createSessionObject(
      this: PhoenixRpcObject,
      original: Doc["createSessionObject"],
      properties: GenericObjectProperties,
    ) {
      const object = await original(properties);
      const phoenixObject = object as unknown as PhoenixRpcObject;
      phoenixObject.__remote__.respawnInfo.isSessionObject = true;
      phoenixObject.__remote__.respawnInfo.properties = properties as Json;
      return phoenixObject;
    },

    async createSessionVariable(
      this: PhoenixRpcObject,
      original: Doc["createSessionVariable"],
      properties: GenericVariableProperties,
    ) {
      const object = await original(properties);
      const phoenixObject = object as unknown as PhoenixRpcObject;
      phoenixObject.__remote__.respawnInfo.isSessionObject = true;
      phoenixObject.__remote__.respawnInfo.properties = properties as Json;
      return object;
    },
  },
};

export default [
  refetch1,
  variableRespawnMixin,
  variarbleMeasureAndBookmarkRespawnMixin,
  fieldRespawningMixin,
  rememberCreatePropsMixin,
];
