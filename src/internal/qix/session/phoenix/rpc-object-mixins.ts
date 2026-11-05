/* eslint-disable no-param-reassign */
import type { PhoenixRpcObject } from "./rpc-object";
import respawnMixins from "./rpc-object-respawn-mixins";

export type Mixin = {
  types: Array<string> | string;
  extend?: Record<string, Function>;
  override?: Record<string, Function>;
  Promise?: PromiseConstructor;
  init?: (args: { api: PhoenixRpcObject; config: { Promise: typeof Promise } }) => void;
};

export function toMixinMap(mixinsArray: Mixin[]) {
  const mixins: Record<string, Mixin[]> = {};
  respawnMixins.concat(mixinsArray).forEach((mixin) => {
    (Array.isArray(mixin.types) ? mixin.types : [mixin.types]).forEach((type) => {
      mixins[type] = mixins[type] || [];
      mixins[type].push(mixin);
    });
  });
  return mixins;
}

export function applyMixins(classPrototype: Record<string, unknown>, mixinList: Mixin[]) {
  mixinList.forEach(({ extend = {}, override = {} }) => {
    Object.keys(override).forEach((key) => {
      if (typeof classPrototype[key] === "function" && typeof override[key] === "function") {
        const baseFn = classPrototype[key];
        classPrototype[key] = function wrappedFn(...args: unknown[]) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          return override[key].apply(this, [baseFn.bind(this), ...args]);
        };
      } else {
        throw new Error(
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          `Tring to override non-existing function in ${classPrototype.type}/${classPrototype.genericType}: ${key}`,
        );
      }
    });
    Object.keys(extend).forEach((key) => {
      // handle overrides
      if (typeof classPrototype[key] === "function" && typeof extend[key] === "function") {
        throw new Error(
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          `Extend is not allowed. Function already exists in  ${classPrototype.type}/${classPrototype.genericType}: ${key}`,
        );
      } else {
        classPrototype[key] = extend[key];
      }
    });
  });
}

export function initMixins(rpcObject: PhoenixRpcObject, mixinList: Mixin[]) {
  mixinList.forEach(({ init }) => {
    if (init) {
      init.bind(rpcObject)({ api: rpcObject, config: { Promise } });
    }
  });
}
