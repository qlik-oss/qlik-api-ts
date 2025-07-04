# Create a session app

◁ [Back to examples](../examples.md)

This examples shows how to:

- create a session app by opening a qix session to an app with a random id that starts with "SessionApp\_"
- connect to the app and add some data to it
- create an object and setup an event listener to when hypercube changes
- reload the data to trigger the changed event.

```ts
import { auth, qix } from "@qlik/api";

auth.setDefaultHostConfig({
  host: "your-tenant.region.qlikcloud.com",
  authType: "apikey",
  apiKey: "<api-key>",

async function main() {
  try {
    // Create a session app
    const randomId = Math.random().toString(32).substring(3);
    const appId = `SessionApp_${randomId}`;
    // if appId starts with SessionApp_ and have a unique id it will become a session app.

    // Open a websocket session with the session app id
    const session = qix.openAppSession({ appId });
    // Get the app object
    const app = await session.getDoc();

    // Set a script in the app
    const script = `
  TempTable:
  Load
  RecNo() as ID,
  Rand() as Value
  AutoGenerate 100
  `;
    await app.setScript(script);

    // Create an object with a hypercube using fields in the data model
    const properties = {
      qInfo: {
        qType: "my-straight-hypercube",
      },
      qHyperCubeDef: {
        qDimensions: [
          {
            qDef: { qFieldDefs: ["ID"] },
          },
        ],
        qMeasures: [
          {
            qDef: { qDef: "=Sum(Value)" },
          },
        ],
        qInitialDataFetch: [
          {
            qHeight: 5,
            qWidth: 2,
          },
        ],
      },
    };
    const hypercube = await app.createObject(properties);
    await hypercube.getLayout();

    // Register an event listener for change events
    hypercube.on("changed", () => {
      console.log("changed ✅");
    });

    console.log("performing reload, expect a change to the hypercube object to happen");
    // Do a reload of the app
    await app.doReload();

    // Close session
    await session.close();
  } catch (e) {
    console.error(e);
  }
}

main();
```

◁ [Back to examples](../examples.md)
