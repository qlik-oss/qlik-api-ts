import type { Doc, Global } from "../../qix-types";
import { EventEmitter } from "./event-emitter";
import { logEvent } from "./logger";
import type { QixConnection } from "./qix-connection";
import type { RemoteObject } from "./remote-object";
import { getGeneratedMixinClass, getPrototypeJustBeforeBase, toMixinsCacheKey } from "./rpc-object-dynamic-mixins";
import { type Mixin } from "./rpc-object-mixins";
import type { RpcObjectSession } from "./rpc-object-session";
import type { PhoenixRpcObjectWithMixins } from "./rpc-object-with-mixins";

export type PhoenixRpcObject = Omit<
  PhoenixRpcObjectImpl,
  "#remoteObject" | "#classicSession" | "#createAlterEgoWithMixins" | "alterEgosWithMixins"
>;
export class PhoenixRpcObjectImpl extends EventEmitter<
  "changed" | "closed" | "traffic:sent" | "traffic:received" | "traffic:*"
> {
  /** @internal */
  #remoteObject: RemoteObject;
  #classicSession: RpcObjectSession;
  alterEgosWithMixins: Map<string, PhoenixRpcObjectWithMixins> = new Map();

  /** @deprecated */
  Promise: typeof Promise = Promise;
  /**
   * @internal
   */
  constructor(rpcObjectCore: RemoteObject) {
    super();
    this.#remoteObject = rpcObjectCore;
    this.#classicSession = rpcObjectCore.session;
  }

  get __remote__() {
    return this.#remoteObject;
  }

  get handle(): number {
    return this.#remoteObject.handle;
  }
  set handle(handle: number) {
    this.#remoteObject.handle = handle;
  }
  get app(): Doc {
    return this.#classicSession.app;
  }
  get global(): Global {
    return this.#classicSession.global;
  }
  set global(newGlobal: Global) {
    // The data prep client sets this for some reason so don't throw error but warn if it happens to be a different object
    if (newGlobal !== this.#remoteObject.session.global) {
      // eslint-disable-next-line no-console
      console.warn("Changing the global object on a qix object is not allowed");
    }
  }
  get id(): string {
    return this.#remoteObject.id;
  }
  get type(): string {
    return this.#remoteObject.type;
  }
  get genericType(): string | undefined {
    return this.#remoteObject.genericType;
  }
  get session(): RpcObjectSession {
    return this.#classicSession;
  }
  getHandle(): number {
    return this.#remoteObject.handle;
  }
  setHandle(handle: number) {
    const oldHandle = this.#remoteObject.handle;
    this.#remoteObject.handle = handle;
    if (oldHandle !== handle) {
      logEvent("Change handle for ", this.#remoteObject.id, "from", oldHandle, "to", handle);
    }
  }
  /** @deprecated */
  get enigmaModel(): PhoenixRpcObject {
    return this;
  }
  /**
   * @internal
   */
  // This is overriden in mixins but the signature needs to have a QixConnection as parameter
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async respawn(newConnection: QixConnection): Promise<void> {
    if (this.#remoteObject.type !== "Doc" && this.#remoteObject.type !== "Global") {
      // eslint-disable-next-line no-console
      console.error("No respawn mixin found for object ", this.#remoteObject.type, this.#remoteObject.genericType);
    }
  }

  withMixins(...mixins: Mixin[]): PhoenixRpcObject {
    if (mixins.length === 0) {
      return this;
    }
    const cacheKey = toMixinsCacheKey(mixins);
    let alterEgoWithMixins = this.alterEgosWithMixins.get(cacheKey);
    if (!alterEgoWithMixins) {
      alterEgoWithMixins = this.#createAlterEgoWithMixins(mixins);
      addMemberForwarders(alterEgoWithMixins, this);
      this.alterEgosWithMixins.set(cacheKey, alterEgoWithMixins);
      alterEgoWithMixins.setSessionWithMixins(this.session.withMixins(mixins, alterEgoWithMixins.Promise));
    }

    return alterEgoWithMixins;
  }

  #createAlterEgoWithMixins(mixins: Mixin[]): PhoenixRpcObjectWithMixins {
    const sourcePrototype = getPrototypeJustBeforeBase(this);
    const MixinClass = getGeneratedMixinClass(mixins, sourcePrototype, this.type, this.genericType);
    return new MixinClass(this, mixins);
  }
}

function addMemberForwarders(alterEgoWithMixins: PhoenixRpcObjectWithMixins, original: PhoenixRpcObject | undefined) {
  Object.getOwnPropertyNames(original).forEach((key) => {
    if (!Object.getOwnPropertyDescriptor(alterEgoWithMixins, key)) {
      Object.defineProperty(alterEgoWithMixins, key, {
        get() {
          return (original as unknown as Record<string, unknown>)[key];
        },
        set(newValue) {
          // eslint-disable-next-line no-param-reassign
          (original as unknown as Record<string, unknown>)[key] = newValue;
        },
        configurable: true,
        enumerable: true,
      });
    }
  });
}
