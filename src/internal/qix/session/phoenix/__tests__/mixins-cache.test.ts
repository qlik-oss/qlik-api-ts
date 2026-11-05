import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { toMixinsCacheKey, clearMixinsCache } from "../rpc-object-dynamic-mixins";

const mixinA = {
  types: "GenericObjcet",
};
const mixinB = {
  types: "GenericObjcet",
};
const mixinC = {
  types: "GenericObjcet",
};

describe("Mixins Cache", () => {
  beforeEach(() => {
    clearMixinsCache();
  });

  afterEach(() => {
    clearMixinsCache();
  });

  it("should generate the same cache key for the same mixins in different order", () => {
    const key1 = toMixinsCacheKey([mixinA, mixinB, mixinC]);
    const key2 = toMixinsCacheKey([mixinC, mixinA, mixinB]);
    const key3 = toMixinsCacheKey([mixinB, mixinC, mixinA]);
    const key4 = toMixinsCacheKey([mixinB, mixinC]);
    expect(key1).toBe("1,2,3");
    expect(key2).toBe("1,2,3");
    expect(key3).toBe("1,2,3");
    expect(key4).toBe("2,3");
  });
});
