# Create an app and add some data

◁ [Back to examples](../examples.md)

This examples shows how to:

- Create an app with the `apps` api
- Connect to the app
- Add a load script
- Reload the data
- Run a calculation with a qix engine expression.

```ts
import { apps, auth, qix } from "@qlik/api";

const hostConfig = {
  host: "your-tenant.region.qlikcloud.com",
  authType: "apikey",
  apiKey: "<api-key>",
};

auth.setDefaultHostConfig(hostConfig);

async function main() {
  try {
    const { data } = await apps.createApp({ attributes: { name: "Anders App" } });
    const appId = data.attributes?.id;
    console.log("We have created:", appId);
    // do stuff with the app
    const session = qix.openAppSession({ appId });
    const app = await session.getDoc();
    console.log("Setting up some data");
    await app.setScript("Load RecNo() as N autogenerate(100);");
    await app.doReload();
    console.log("Reloaded data done");
    const evalResult = await app.evaluate("SUM([N])");
    console.log(`Eval result: ${evalResult}`);
    if (appId) {
      await apps.deleteApp(appId);
      console.log("We have now deleted:", appId);
    }
    session.close();
  } catch (e) {
    console.error(e);
  }
}

await main();
```

◁ [Back to examples](../examples.md)
