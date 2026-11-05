import { type GenericObject } from "../../../../types/generic-object";

export const mixin = {
  types: ["CurrentSelection"],

  extend: {
    async clearField(fieldName: string, state: string): Promise<boolean> {
      const self = this as unknown as GenericObject;
      const field = await self.app.getField(fieldName, state);
      return field.clear();
    },

    async lockField(fieldName: string): Promise<boolean> {
      const self = this as unknown as GenericObject;
      const field = await self.app.getField(fieldName, undefined);
      return field.lock();
    },

    async unlockField(fieldName: string): Promise<boolean> {
      const self = this as unknown as GenericObject;
      const field = await self.app.getField(fieldName, undefined);
      return field.unlock();
    },

    clearAll(): Promise<void> {
      const self = this as unknown as GenericObject;
      return self.app.clearAll();
    },

    back(): Promise<void> {
      const self = this as unknown as GenericObject;
      return self.app.back();
    },

    forward(): Promise<void> {
      const self = this as unknown as GenericObject;
      return self.app.forward();
    },
  },
};
