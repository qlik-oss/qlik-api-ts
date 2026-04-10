# Connect to Qlik Sense Enterprise for Windows

◁ [Back to examples](../examples.md)

These examples show how a NodeJS application can connect to a Qlik Sense Enterprise server. First example shows how to use a cookie based authentication using a jwt. The second example shows how to use exported certificates.

## NodeJS using a JWT

Create a virtual proxy using JWT authentication in Qlik Sense's management console using [this guide](https://help.qlik.com/en-US/sense-admin/November2025/Subsystems/DeployAdministerQSE/Content/Sense_DeployAdminister/QSEoW/Administer_QSEoW/Managing_QSEoW/JWT-authentication.htm).

Use the same guide to generate a jwt to use as an acess token.

Given that the virtual proxy prefix used for the JWT authentication is `jwt` use the following example.

```ts
import { qix } from "@qlik/api";

const hostConfig = {
  authType: "windowscookie",
  host: "https://<qse-windows-server>/jwt",
  getAccessToken: async () => {
    return "<generated-jwt>";
  },
};

const appId = "<app-id>";

async function main() {
  const session = qix.openAppSession({ hostConfig, appId });
  const app = await session.getDoc();

  const sheetList = await app.getSheetList();
  console.log(sheetList);
  session.close();
}

main().catch(console.error);
```

## NodeJS using PFX certificates

Export certificates for the machine that should connect to Qlik Sense using [this guide](https://help.qlik.com/en-US/sense-admin/November2025/Subsystems/DeployAdministerQSE/Content/Sense_DeployAdminister/QSEoW/Administer_QSEoW/Managing_QSEoW/export-certificates.htm).

Copy the exported certificates to the machine that will connect to Qlik Sense. In the example below the exported client certificate is located under `./certs/client.pfx`.

The root certificate (`./certs/root.cer`) must be used by the NodeJS application to create a secure connection. This example has first converted the root certificate to a .pem version by running:

```shell
openssl x509 -inform DER -in certs/root.cer -out certs/root.pem
```

and then start the application by running:

```shell
NODE_EXTRA_CA_CERTS=certs/root.pem node index.js
```

The code in `index.js`:

```js
import { qix } from "@qlik/api";
import fs from "node:fs";

const pfx = fs.readFileSync("certs/client.pfx"); // exported certificate as a Buffer
const passphrase = "<password used when exporting certificates>";
const appId = "<app-id>";

const hostConfig = {
  authType: "pfx",
  host: "https://<qse-windows-server>:4747",
  pfx,
  passphrase,
  userHeader: "UserDirectory=INTERNAL; UserId=sa_engine", // <--- This is the DEFAULT, can be excluded
};

async function main() {
  const session = qix.openAppSession({ hostConfig, appId });
  const app = await session.getDoc();

  const sheetList = await app.getSheetList();
  console.log(sheetList);
  session.close();
}

main().catch(console.error);
```

◁ [Back to examples](../examples.md)
