# @qlik/api

[![npm version](https://img.shields.io/npm/v/@qlik/api.svg)](https://www.npmjs.com/package/@qlik/api)
[![License](https://img.shields.io/badge/license-ISC-blue.svg)](https://opensource.org/licenses/ISC)

> **Warning**
> This package is currently in pre-release mode and will likely change and break until the version number 1.0.0 is released.

This package provides a JavaScript API for interacting with Qlik Sense REST APIs includin the QIX Engine from a single package that can be used in both Node.js and browser contexts.

## Table of Contents

- [Getting Started](#getting-started)
- [Module Structure](#module-structure)
- [REST API](./docs/rest.md)
- [QIX API](./docs/qix.md)
- [Features](./docs/features.md)
- [Authentication](./docs/authentication.md)
- [Examples](./docs/examples.md)

## Getting Started

For NodeJS applications or in the case of building a web app with a bundler use:

```sh
npm install --save @qlik/api
```

If code will run directly in a browser it is recommended to load the code directly from a CDN.

```html
<script type="module">
  import qlikApi from "https://cdn.jsdelivr.net/npm/@qlik/api/index.mjs";
  ...
</script>
```

### Module structure

`@qlik/api` is a collection of javascript modules which each exposes an api built to make the integration process for javascript solutions as easy as possible. The library is built for both browser and NodeJS usage and will seamlessly integrate with `@qlik/embed` libraries.

The modules can be imported in a few different ways. Either directly through a sub module

```ts
import subModule, { namedExport, type NamedType } from "@qlik/api/sub-module";
```

Or through the main module. If types from a sub module is needed they can only be imported directly from the sub module itself. They can't be imported from the main module.

```ts
import { subModuleA, subModuleB } from "@qlik/api";
import type { SubModuleAType } from "@qlik/api/sub-module-a";
import type { SubModuleBType } from "@qlik/api/sub-module-b";
```

`@qlik/api` also has a default export with each sub module as properties.

```ts
import qlikApi from "@qlik/api";

qlikApi.subModuleA;
qlikApi.subModuleB;
```

The modules that can be imported from `@qlik/api` are the rest entities, the `qix` sub module and an `auth` module. All described below.

## REST API

`@qlik/api` library is generated from open-api specifications released from those Qlik Cloud services that exposes a restful API. The code generation tool runs using the specs building typescript for all api calls specified in the specs. One module per api is generated.

More info can be found in the [rest](./docs/rest.md) section.

## QIX API

One of the most important services available is Qlik's Analytics Engine Service which is also known as the QIX engine. `@qlik/api` offers a fully typed api for connecting to and consuming Qlik Sense Applications including "Qlik Sense mixins" which previously only was used internally by in-house Qlik developers. More info about QIX can be found in the [qix](./docs/qix.md) section.

## Authentication

`@qlik/api` comes with several authentication options to make the integration experience as easy as possible for external users. Go to the [authentication](./docs/authentication.md) section for more.

## Features

`@qlik/api` comes with some handy features to make the development experience as good as possible. Some of them are described in the [features](./docs/features.md) section.

## Examples

Check out the [examples](./docs/examples.md) section.
