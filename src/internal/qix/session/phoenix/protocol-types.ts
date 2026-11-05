export type JsonObject = { [key: string]: Json };
export type Json = string | number | boolean | Json[] | JsonObject;

export type ObjectWithHandle = {
  getHandle(): number;
};
