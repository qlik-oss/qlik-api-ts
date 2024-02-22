# Show Sheet List in a Qlik Sense Application

◁ [Back to examples](../examples.md)

For this example the id of a Qlik Sense Application that you have access to is needed. To get the id of an app, click on the "More actions" button on the app from the Qlik Cloud Hub and click on "details". There the app id is visible. Another option is to open the app and look at the URL. The app id is located as `/sense/<app-id>/` in the url.

## NodeJS using an API Key

```ts
import { auth, qix } from "@qlik/api";

const hostConfig = {
  authType = "apikey",
  host: "your-tenant.region.qlikcloud.com",
  apiKey: "<api-key>",
};

// to use "Oauth2" auth module switch hostConfig to oauth2 and set clientId
// and clientSecret instead of apiKey.

const appId = "<app-id>";

auth.setDefaultHostConfig(hostConfig);

async function main() {
  const session = qix.openAppSession({ appId });
  const app = await session.getDoc();

  const sheetList = await app.getSheetList();
  console.log(sheetList);
  session.close();
}

main();
```

In this example we're using the api method `app.getSheetList()` which comes from a "sense mixin" which is an extension of the official QIX API used for Qlik Sense Applications. In `@qlik/api` all "sense mixins" have been included to easily interact with Qlik Sense Applications in the same way in-house Qlik Developers do.

## Browser using Cookies

When using a browser you can load the library files from a CDN provider. It is also possible to use npm and a bundler to get the code into your application. In the html below we are making an api call to fetch the sheet list from a Qlik Sense App and we add the sheet titles as div elements in the dom.

```html
<!doctype html>
<html lang="en">
  <head>
    <title>Fetching sheet list from an app with @qlik/api</title>
  </head>
  <body>
    <div id="sheet-container" class="container">
      <div>Sheets:</div>
      <!-- Sheets will be addeed here -->
    </div>
    <script type="module">
      import { auth, qix } from "https://cdn.jsdelivr.net/npm/@qlik/api/index.js";
      auth.setDefaultHostConfig({
        host: "your-tenant.region.qlikcloud.com",
        authType: "cookie",
        webIntegrationId: "<web-ingetration-id>",
      });
      const appId = "<api-key>";
      const session = qix.openAppSession({ appId });
      const app = await session.getDoc();
      const sheetList = await app.getSheetList();
      const sheetContainer = document.getElementById("sheet-container");
      for (const sheet of sheetList) {
        const div = document.createElement("div");
        div.innerText = sheet.qMeta.title;
        sheetContainer.appendChild(div);
      }
      session.close(); // closing the app
    </script>
  </body>
</html>
```

## Browser using Oauth2

Use the same example as above but change the host config to use [Oauth2](authentication.md#oauth2)

◁ [Back to examples](../examples.md)
