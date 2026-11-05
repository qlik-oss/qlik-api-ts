import type { PhoenixConnection } from "./phoenix-connection";
import type { QixRequest } from "./qix-connection";
import { RemoteObjectImpl, type RemoteObject } from "./remote-object";
import { PhoenixRpcObjectImpl, type PhoenixRpcObject } from "./rpc-object";
import { applyMixins, initMixins, toMixinMap, type Mixin } from "./rpc-object-mixins";
import { normalizeObjectRef, type ObjectRef, type QObjectRef } from "./rpc-object-ref";
import { schemaToStructureOfUnboundFunctions, type QixSchema } from "./rpc-object-schema";

type RpcObjectClass<R extends PhoenixRpcObject = PhoenixRpcObject> = {
  new (remoteObject: RemoteObject): R;
};

export type RpcObjectFactory = RpcObjectFactoryImpl;

export function createRpcObjectFactory(schema: QixSchema, mixinsArray: Mixin[]): RpcObjectFactory {
  return new RpcObjectFactoryImpl(schema, mixinsArray);
}

class RpcObjectFactoryImpl {
  /**
   * Map from type to mixin
   */
  #mixinsByType: Record<string, Mixin[]>;
  /**
   * Map from type to array of native qix functions
   */
  #nativeFunctionsByType: Record<string, { methodName: string; fn: Function }[]>;
  /**
   * All generated rpc object classes with mixins and native functions
   */
  #generatedClasses: Record<string, RpcObjectClass> = {};

  constructor(schema: QixSchema, mixinsArray: Mixin[]) {
    this.#mixinsByType = toMixinMap(mixinsArray);
    this.#nativeFunctionsByType = schemaToStructureOfUnboundFunctions(schema);
  }

  /**
   * Creates a new RPC Object with mixins et'al
   */
  createObject(
    refMultipleFormats: QObjectRef | ObjectRef,
    connection: PhoenixConnection,
    creatingRequest: QixRequest | undefined,
  ): PhoenixRpcObject {
    const { handle, id, type, genericType } = normalizeObjectRef(refMultipleFormats);

    if (!type) {
      throw new Error(`Trying to create object without type: ${type}`);
    }

    const coreRpcObject: RemoteObject = new RemoteObjectImpl({
      connection,
      handle,
      respawnInfo: {
        creatingRequest,
      },
      id,
      type,
      genericType,
    });

    const TypeSpecificPhoenixRpcClass = this.#getClass(type, genericType);
    return new TypeSpecificPhoenixRpcClass(coreRpcObject);
  }

  #getClass(type: string, genericType: string | undefined): RpcObjectClass {
    const key = `${type}:${genericType}`;
    if (!this.#generatedClasses[key]) {
      const rpcFunctions = this.#getRpcFunctionsForType(type);
      const mixins = this.#getMixinsForType(type).concat(this.#getMixinsForType(genericType));

      this.#generatedClasses[type] = class GeneratedBaseQixRpxObject extends PhoenixRpcObjectImpl {
        constructor(createProps: RemoteObject) {
          super(createProps);
          initMixins(this, mixins);
        }
      };

      const classPrototype = this.#generatedClasses[type].prototype as unknown as Record<string, unknown>;
      rpcFunctions.forEach(({ methodName, fn }) => {
        classPrototype[methodName] = fn;
      });
      applyMixins(classPrototype, mixins);
    }

    return this.#generatedClasses[type];
  }

  #getMixinsForType(type: string | undefined): Mixin[] {
    return (type ? this.#mixinsByType[type] : []) || [];
  }

  #getRpcFunctionsForType(type: string): {
    methodName: string;
    fn: Function;
  }[] {
    return this.#nativeFunctionsByType[type];
  }
}
