import type { Doc } from "./doc";
import type { NativeGlobalFunctions } from "./engine-schema";
import type { RpcObject } from "./rpc-object";

export type Global = RpcObject & NativeGlobalFunctions<Doc>;
