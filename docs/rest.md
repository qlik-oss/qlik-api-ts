# REST

◁ [Back to overview](../README.md)

Each rest entity is exposed as it's own javascript module. It contains all api calls and types exposed by the entity service. They can be imported from `@qlik/api` as a sub module of the package like `/spaces` in the example below. These modules both has named exports and a default export. Types are always named exports.

```ts
import spaces, { type Spaces } from "@qlik/api/spaces";
await { data: mySpaces } = await spaces.getSpaces();

// mySpaces now has the type Spaces
```

Each module can also be imported directly from `@qlik/api`.

```ts
import { spaces, users } from "@qlik/api";
```

These modules are the default exports from each respective sub module. The types from the sub modules are not exposed here since they would introduce name conflicts. The types need to be imported from the respective sub modules.

Info about these entities and their api's can be found [here](https://qlik.dev/apis/#rest).

## HTTP Calls

The http calls uses the native fetch api. Each http call with a response status in the 200 range will resolve to an object with structure `{ status, headers, data }`. If status is in the >=300 range an error will be thrown.

```ts
import { getSpaces } from "@qlik/api/spaces";

try {
  const { status, headers, data: spaces } = await getSpaces();
  // status < 300
  if (spaces.data) {
    // the spaces list is returned as "data"
    // There are spaces
  }
} catch (e) {
  // status >= 300
  // something went wrong
}
```

## Error handling

Every http response that has a status over 300 is considered to be an error and the promise is rejected. To handle this in typescript you can do the following:

```ts
import { deleteExtension, type DeleteExtensionHttpError } from "@qlik/qmfe/extensions";

try {
  const { status } = await deleteExtension("<extension-id>");
  ...
} catch (e as DeleteExtensionHttpError) {
    if (e.status === 404) {
        // DeleteEndpoint404HttpError
        e.data // < -- body of error
    }
}
```

## Caching

Every GET request is cached so that subsequent calls to the same api will resolve immediately from the cache. Read more about caching [here](features.md#caching).
