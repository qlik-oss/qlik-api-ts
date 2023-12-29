# Fetch Spaces in a Qlik Tenant

◁ [Back to examples](../examples.md)

## NodeJS using an API Key

This examples shows how to fetch the space list from a tenant.

```typescript
import { auth, spaces } from "@qlik/api";

const x = {
  host: "your-tenant.region.qlikcloud.com",
  authType: "apikey",
  apiKey: "<api-key>",
};

auth.setDefaultHostConfig(x);

async function main() {
  const { data: mySpaces } = await spaces.getSpaces({});
  console.log(mySpaces.data); // the data response (list of spaces)
}

await main();
```

Run the code with

```shell
node fetch-spaces.mjs
```

## NodeJS using Oauth2

Create a file `fetch-spaces.mjs` and add the following:

```typescript
import { auth, spaces } from "@qlik/api";

const hostConfig = {
  host: "your-tenant.region.qlikcloud.com",
  authType: "oauth2",
  clientId: "<client-id>",
  clientSecret "<client-secret>",
};

auth.setDefaultHostConfig(hostConfig);

async function main() {
  const { data: mySpaces } = await spaces.getSpaces({});
  console.log(mySpaces.data); // the data response (list of spaces)
}

await main();
```

Run the code with

```shell
node fetch-spaces.mjs
```

## Browser using cookies

When using a browser you can load the library files from a CDN provider. It is also possible to use npm and a bundler to get the code into your application. In the html below we are making an api call to fetch the spaces from a tenant and we add the names of the spaces as div elements in the dom.

```html
<!doctype html>
<html lang="en">
  <head>
    <title>Fetching spaces with @qlik/api</title>
  </head>
  <body>
    <div id="space-container" class="container">
      <div>Spaces:</div>
      <!-- Spaces will be addeed here -->
    </div>
    <script type="module">
      import { auth, spaces } from "https://cdn.jsdelivr.net/npm/@qlik/api/index.mjs";

      auth.setDefaultHostConfig({
        host: "your-tenant.region.qlikcloud.com",
        authType: "cookie",
        webIntegrationId: "<web-integration-id>",
      });

      const { data: mySpaces } = await spaces.getSpaces();
      const spaceContainer = document.getElementById("space-container");
      for (const space of mySpaces.data) {
        const div = document.createElement("div");
        div.innerText = space.name;
        spaceContainer.appendChild(div);
      }
    </script>
  </body>
</html>
```

## Browser using Oauth2

Use the same example as above but change the host config to use [Oauth2](authentication.md#oauth2)

◁ [Back to examples](../examples.md)
