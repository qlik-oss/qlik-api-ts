// oxlint-disable no-console
/**
 * Completes npm/, which tsdown builds into, as the package that is published: a package.json whose exports point at
 * the built files at its root, the README, docs and LICENSE. @qlik/api has always had its files at the package root,
 * and users load them from CDNs by those paths, e.g. https://cdn.jsdelivr.net/npm/@qlik/api/index.js, so they must not
 * move. publishConfig.directory publishes npm/; this runs as part of the build.
 *
 * usage: node ./tools/publish-layout.js
 */
import fs from "node:fs/promises";
import path from "node:path";
import packageJSON from "../package.json" with { type: "json" };

const root = path.resolve(import.meta.dirname, "..");
const out = path.join(root, "npm");

/** Only the published entry points, pointing into the root instead of npm/. */
function flatExports(exports) {
  return Object.fromEntries(
    Object.entries(exports)
      .filter(([, target]) => typeof target === "string")
      .map(([name, target]) => [name, target.replace(/^\.\/npm\//, "./")]),
  );
}

const { name, version, description, license, repository, type, browser, exports, dependencies, engines } = packageJSON;
// Without what points at this layout from the package itself.
const { directory: _directory, linkDirectory: _linkDirectory, ...publishConfig } = packageJSON.publishConfig;
const flat = {
  name,
  version,
  description,
  license,
  repository,
  type,
  browser,
  exports: flatExports(exports),
  dependencies,
  engines,
  publishConfig,
};

try {
  await fs.access(path.join(out, "index.js"));
} catch {
  console.error(`${out} has no build, run tsdown first`);
  process.exit(1);
}
await Promise.all([
  fs.writeFile(path.join(out, "package.json"), `${JSON.stringify(flat, null, 2)}\n`),
  fs.cp(path.join(root, "README.md"), path.join(out, "README.md")),
  fs.cp(path.join(root, "docs"), path.join(out, "docs"), { recursive: true }),
  fs.cp(path.join(root, "LICENSE"), path.join(out, "LICENSE")),
]);

console.log(`package has been created in ${out}`);
