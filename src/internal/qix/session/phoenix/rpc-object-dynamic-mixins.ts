import { getPromiseWrapper, isPromiseLike } from "./custom-promise";
import { PhoenixRpcObjectImpl, type PhoenixRpcObject } from "./rpc-object";
import { applyMixins, initMixins, type Mixin } from "./rpc-object-mixins";
import { PhoenixRpcObjectWithMixinsImpl } from "./rpc-object-with-mixins";

type PhoenixRpcObjectWithMixinsConstructor = new (
  original: PhoenixRpcObject,
  mixins: Mixin[],
) => PhoenixRpcObjectWithMixinsImpl;

const generatedMixinClassCache = new Map<
  PhoenixRpcObjectWithMixinsConstructor,
  Map<string, PhoenixRpcObjectWithMixinsConstructor>
>();
let mixinIdentityMap = new WeakMap<Mixin, number>();
let nextMixinIdentity = 1;

export function clearMixinsCache() {
  generatedMixinClassCache.clear();
  mixinIdentityMap = new WeakMap();
  nextMixinIdentity = 1;
}

function getMixinIdentity(mixin: Mixin): number {
  const existingIdentity = mixinIdentityMap.get(mixin);
  if (existingIdentity) {
    return existingIdentity;
  }
  const newIdentity = nextMixinIdentity;
  nextMixinIdentity += 1;
  mixinIdentityMap.set(mixin, newIdentity);
  return newIdentity;
}

export function toMixinsCacheKey(mixins: Mixin[]): string {
  const identities = mixins.map((mixin) => getMixinIdentity(mixin));
  return identities.sort((a, b) => a - b).join(",");
}

export function mergeMixins(existingMixins: Mixin[], incomingMixins: Mixin[]): Mixin[] {
  const mergedMixins = [...existingMixins];
  incomingMixins.forEach((mixin) => {
    if (!mergedMixins.includes(mixin)) {
      mergedMixins.push(mixin);
    }
  });
  return mergedMixins;
}

export function getPrototypeJustBeforeBase(instance: PhoenixRpcObjectImpl): object {
  const basePrototype = PhoenixRpcObjectImpl.prototype;
  let currentPrototype = Object.getPrototypeOf(instance) as object | null;
  const fallbackPrototype = currentPrototype;

  while (currentPrototype && currentPrototype !== basePrototype) {
    const parentPrototype = Object.getPrototypeOf(currentPrototype) as object | null;
    if (parentPrototype === basePrototype) {
      return currentPrototype;
    }
    currentPrototype = parentPrototype;
  }

  return fallbackPrototype || basePrototype;
}

export function getGeneratedMixinClass(
  effectiveMixins: Mixin[],
  sourcePrototype: object,
  type: string,
  genericType: string | undefined,
): PhoenixRpcObjectWithMixinsConstructor {
  const sourceClass = (sourcePrototype as { constructor: PhoenixRpcObjectWithMixinsConstructor }).constructor;
  let cachedClassByMixins = generatedMixinClassCache.get(sourceClass);
  if (!cachedClassByMixins) {
    cachedClassByMixins = new Map();
    generatedMixinClassCache.set(sourceClass, cachedClassByMixins);
  }

  const mixinsCacheKey = toMixinsCacheKey(effectiveMixins);
  let MixinClass = cachedClassByMixins.get(mixinsCacheKey);
  if (!MixinClass) {
    MixinClass = generateClassWithMixins(effectiveMixins, sourcePrototype, type, genericType);
    cachedClassByMixins.set(mixinsCacheKey, MixinClass);
  }
  return MixinClass;
}

function generateClassWithMixins(
  effectiveMixins: Mixin[],
  sourcePrototype: object,
  type: string,
  genericType: string | undefined,
) {
  const CustomPromise = [...effectiveMixins].toReversed().find((mixin) => mixin.Promise)?.Promise || Promise;
  const wrapInPromise = getPromiseWrapper(CustomPromise);
  const wrapWithMixins = <T>(result: T): T => {
    if (isPromiseLike(result)) {
      return result.then((resolvedResult: unknown) => wrapWithMixins(resolvedResult)) as T;
    }
    if (result instanceof PhoenixRpcObjectImpl) {
      return result.withMixins(...effectiveMixins) as T;
    }
    return result;
  };

  const MixinClass = class GeneratedMixinQixRpxObject extends PhoenixRpcObjectWithMixinsImpl {
    constructor(original: PhoenixRpcObject, mixins: Mixin[]) {
      super(original, mixins);
      initMixins(this, effectiveMixins);
    }
  };

  const newPrototype = MixinClass.prototype as unknown as Record<string, Function>;
  const oldPrototype = sourcePrototype as unknown as Record<string, Function>;

  // Copy all methods from the source prototype to the generated prototype, wrapping them as forwarders.
  Object.getOwnPropertyNames(oldPrototype).forEach((key) => {
    if (key === "constructor") {
      return;
    }
    const descriptor = Object.getOwnPropertyDescriptor(oldPrototype, key);
    const value: unknown = descriptor?.value;
    if (typeof value === "function") {
      Object.defineProperty(newPrototype, key, {
        value: function wrappedForwarder(this: PhoenixRpcObjectWithMixinsImpl, ...args: unknown[]) {
          const result: unknown = value.apply(this.__original_rpc_object, args);
          return wrapInPromise(wrapWithMixins(result));
        },
        configurable: true,
        writable: true,
      });
      return;
    }

    if (descriptor?.get || descriptor?.set) {
      Object.defineProperty(newPrototype, key, {
        get: descriptor.get
          ? function wrappedGetter(this: PhoenixRpcObjectWithMixinsImpl) {
              const result: unknown = descriptor.get?.call(this.__original_rpc_object);
              return wrapWithMixins(result);
            }
          : undefined,
        set: descriptor.set
          ? function wrappedSetter(this: PhoenixRpcObjectWithMixinsImpl, newValue: unknown) {
              descriptor.set?.call(this.__original_rpc_object, newValue);
            }
          : undefined,
        configurable: true,
      });
    }
  });

  applyMixins(
    newPrototype,
    effectiveMixins.filter((mixin) => {
      const types = Array.isArray(mixin.types) ? mixin.types : [mixin.types];
      return types.includes(type) || (genericType && types.includes(genericType));
    }),
  );
  return MixinClass;
}
