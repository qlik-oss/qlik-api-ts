# Contributing

This repository holds the source of [`@qlik/api`](https://www.npmjs.com/package/@qlik/api) as of its latest release.
`@qlik/api` is developed in an internal Qlik repository, and every release replaces the contents of this one, so
changes committed here directly are overwritten by the next release.

Issues however are very welcome and PR's will be treated as improvement suggestions to the real codebase.

## Building and testing

You need Node.js 24 or later and the pnpm version named in `packageManager` in `package.json`
(`corepack enable` sets it up).

```bash
pnpm install
pnpm validate # format check, lint, type check and unit tests
pnpm build # builds the package into npm/, the folder that is published
```
