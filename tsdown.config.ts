import { defineConfig } from "tsdown";
import packageJSON from "./package.json" with { type: "json" };

const mainEntries: Record<string, string> = { index: "./src/index.ts" };

// The hand-written entry points, the rest of the exports are generated REST modules.
const handWritten = ["qix", "auth", "interceptors"];
for (const [name, target] of Object.entries(packageJSON.exports)) {
  const api = name.slice(2);
  // "." is the index, and source-only exports are not built.
  if (name !== "." && typeof target === "string" && !handWritten.includes(api)) {
    mainEntries[api] = `./src/rest/${api}.ts`;
  }
}

mainEntries["qix"] = "./src/qix.ts";
mainEntries["auth"] = "./src/auth.ts";
mainEntries["interceptors"] = "./src/internal/interceptors/interceptors.ts";

mainEntries["global-types"] = "./src/internal/global-types.ts";
mainEntries["auth-types"] = "./src/internal/auth/auth-types.ts";
mainEntries["invoke-fetch-types"] = "./src/internal/invoke-fetch/invoke-fetch-types.ts";

// The User-Agent names the released version, like qlik-api-ts stamped it before publishing. It is replaced at build
// time, so that any build of a released version, not only the published one, names that version.
const userAgentFrom = 'defaultUserAgent = "qlik-api/latest"';
const userAgentTo = `defaultUserAgent = "qlik-api/${packageJSON.version}"`;
const stampUserAgent = {
  name: "stamp-user-agent",
  transform: {
    filter: { id: /[\\/]src[\\/]invoke-fetch\.ts$/ },
    handler(code: string) {
      if (!code.includes(userAgentFrom)) {
        throw new Error(`${userAgentFrom} is not in src/invoke-fetch.ts any more, update tsdown.config.ts`);
      }
      return code.replace(userAgentFrom, userAgentTo);
    },
  },
};

const config = {
  target: "es2022",
  outDir: "npm",
  dts: true,
  sourcemap: false,
  minify: false,
  clean: true,
  fixedExtension: false,
  deps: {
    alwaysBundle: ["@qlik/runtime-module-loader"], // devDependency - bundled
  },
  outputOptions: {
    chunkFileNames: "chunks/[name]-[hash].js",
  },
  plugins: [stampUserAgent],
};

export default defineConfig([
  {
    ...config,
    entry: mainEntries,
    format: ["esm"],
  },
  {
    ...config,
    format: ["iife"],
    entry: { "oauth-callback": "./src/oauth-callback.ts" },
  },
]);
