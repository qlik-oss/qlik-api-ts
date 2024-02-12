# Create an app and add some data

◁ [Back to examples](../examples.md)

This examples shows how to:

- Open an app without data

Sometimes when apps are big they open slowly in qix engine and if you only want to read or write some metadata in the app it's faster to open the app without the data.

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
    const appId = "<app-id>"; // <- replace this with an appid

    const session = qix.openAppSession({ appId, withoutData: true });
    const app = await session.getDoc();
    const appLayout = await app.getLayout();
    console.log(appLayout);
  } catch (e) {
    console.error(e);
  } finally {
    session.close();
  }
}

await main();
```

◁ [Back to examples](../examples.md)
