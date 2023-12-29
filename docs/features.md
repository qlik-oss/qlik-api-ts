# Features

◁ [Back to overview](../README.md)

- [Typed API calls](#typed-api-calls)
- [Caching](#caching)
- [Paging](#paging)
- [Request/response interceptors](#interceptors)

## Typed API Calls

Each API comes with full typescript support which will greatly help the developer experience. Use the types to understand how the API works by going into the type definition. In most editors (e.g. vscode) you can CMD+click (mac) or CTRL+click (windows) on an api-call to see the type definition of parameters, return structures etc etc.

## Caching

Request responses are cached in the browser so requests can be fired away without being concerned about causing unnecessary traffic. Ongoing requests are also re-used if two equal requests go out at the same time. A request can be forced by adding an option to the call `{ noCache: true }`. Clearing cache can be automatically handled as shown [below](#automatic-cache-clearing-and-auto-csrf).

```ts
import { getItems } from "@qlik/api/items";

try {
  await getItems();
  await getItems();
  await getItems();
  await getItems();
  // the 4 requests above will result in only one request over network

  // empty query object as 1st parameter, 2nd parameter is the ApiCallOptions
  await getItems({}, { noCache: true });
  // this request above will result in a network call because of the noCache option
} catch (e) {
  // something went wrong
}
```

### Automatic cache clearing and auto csrf

Requests that need parameters are all using documented types inherited from the spec files. Requests that require a valid csrf-token automatically fetch it (once if needed) and add it to the outgoing requests headers. Requests that change resources (for example POST/PUT) automatically clear the cache.

```ts
import { getSpaces, createSpace } from "@qlik/api/spaces";

try {
  let { data: spaceList } = await getSpaces({});
  // spaceList has 2 items
  const { data: space } = await createSpace({ name: "My space", description: "description", type: "shared" });
  // the call above automatically adds a csrf-token header. If no csrf-token has been fetched yet it will first fetch it.
  // space now has the Space type and your editor will show the types e.g:
  // space.id;
  // space.createdAt;

  { data: spaceList } = await getSpaces(); // cached response has automatically been cleared because of createSpace call above
  // spaceList has 3 items
} catch (e) {
  // something went wrong
}
```

### Manual cache clearing

The cache for an api can be cleared with the `clearCache` method. This clears all cached responses for that specific api. It is recommended to use the [automatic cache clearing](#automatic-cache-clearing-and-auto-csrf).

```ts
import { getSpaces, clearCache: clearSpaceCache } from "@qlik/api/spaces";

try {
  await getSpaces();
  clearSpaceCache(); // clears all cached responses for the space api.
  await getSpaces();
  // the 2 requests above will both go out on the network
} catch (e) {
  // something went wrong
}
```

**note** `clearCache` only affects one api, all other api caches are unaffected.

## Paging

Many "list" APIs return links to the next and previous page in the list GET response body. If the API follows the conventions and declares this in the OpenAPI spec next and prev functions will be available in the API response type. Note that the next and prev functions are only defined when there actually is a next and prev page.

## Interceptors

Consumer of `@qlik/api` can inject an interceptor in every api method. There are two interception points, before request and after response. The request interceptor can also be an async function.

**NOTE:** to add headers to the request, use a regular object instead of `new Headers()`. It causes a loss of all the original headers. See the example below.

```ts
import { getItems, interceptors } from "@qlik/api/items";

// intercept requests
interceptors.getItems.request.use((url, request) => {
  const headers = {
    ...request.headers,
    "x-qlik-custom-header": "value",
  };

  // modify fetch request
  request.headers = headers;

  return request;
});

// intercept responses
interceptors.getItems.response.use((response) => {
  response.data.YOU_ARE_INTERCEPTED = true;
  return response;
});

try {
  const { status, data: items } = await getItems();

  if (items.YOU_ARE_INTERCEPTED) {
    // ok!
  }
}
```

when adding an interceptor you get an interceptor ID that can be used to eject the interceptor later.

```ts
const interceptorId = interceptors.getItems.response.use(...);
// now interceptor will execute on response

interceptors.getItems.response.eject(interceptorId);
// now interceptor will NOT execute on response
```

◁ [Back to overview](../README.md)
