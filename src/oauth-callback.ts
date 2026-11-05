import { importRuntimeModule, resolveAllProps } from "@qlik/runtime-module-loader";

const props = resolveAllProps();

importRuntimeModule("oauth-callback@v1", props.hostConfig).catch((e: unknown) => {
  throw e;
});
