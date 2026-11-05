import type { PhoenixConnection } from "./phoenix-connection";
import type { Json } from "./protocol-types";
import type { QixRequest } from "./qix-connection";
import type { PhoenixRpcObject } from "./rpc-object";

type RespawnInfo = {
  isSessionObject?: boolean;
  properties?: Json;
  creatingRequest?: QixRequest;
  activeModalSelectionPaths?: string[];
};

type RemoteObjectProps = {
  connection: PhoenixConnection;
  handle: number;
  id: string;
  type: string;
  genericType: string | undefined;
  respawnInfo: RespawnInfo;
};

export type RemoteObject = RemoteObjectImpl;
export class RemoteObjectImpl {
  #connection: PhoenixConnection;
  #handle: number;
  #id: string;
  #type: string;
  #genericType: string | undefined;
  #respawnInfo: RespawnInfo;

  constructor({ connection, handle, id, type, genericType, respawnInfo }: RemoteObjectProps) {
    this.#connection = connection;
    this.#handle = handle;
    this.#id = id;
    this.#type = type;
    this.#genericType = genericType;
    this.#respawnInfo = respawnInfo;
  }

  invoke<R = Json | PhoenixRpcObject>(req: QixRequest): Promise<R> {
    let lastRequestId = 0;
    const promise = this.#connection.invoke<R>(this, req, (requestId) => {
      lastRequestId = requestId;
    });
    addToPromiseChain(promise, "requestId", () => lastRequestId);
    return promise;
  }

  getHandle() {
    return this.#handle;
  }

  get handle() {
    return this.#handle;
  }
  set handle(newHandle: number) {
    this.#handle = newHandle;
  }

  get id() {
    return this.#id;
  }

  get type() {
    return this.#type;
  }

  get genericType() {
    return this.#genericType;
  }

  get session() {
    return this.#connection.classicEnigmaSessionApi;
  }

  get respawnInfo() {
    return this.#respawnInfo;
  }
}

/**
 * Function used to add info on the promise chain.
 * @param promise The promise to add info on.
 * @param name The property to add info on.
 * @param getValue The info to add.
 */
function addToPromiseChain(promise: Promise<unknown>, name: string, getValue: () => unknown) {
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  Object.defineProperty(promise, name, {
    get() {
      return getValue();
    },
    enumerable: true,
    configurable: true,
  });

  const then = promise.then.bind(promise);
  // eslint-disable-next-line no-param-reassign
  promise.then = function patchedThen(...params) {
    const chain = then(...params);
    addToPromiseChain(chain, name, getValue);
    return chain;
  };
}
