# QIX

◁ [Back to overview](../README.md)

The `@qlik/api/qix` module gives you a fully typed API to the QIX engine and to Qlik Sense Applications. This is built for ease of use and also comes with the same "Sense Mixins" that Qlik's in-house developers use for building the Qlik Sense Client application. This means that it is easier to get the different list objects from Qlik Sense Applications. Simply setup a host config and connect to an app.

## Can this be used instead of `enigma.js`?

[enigma.js](https://github.com/qlik-oss/enigma.js) is a library that can be used to set up a websocket connection to a Qlik Sense Engine and get programmatic interfaces to Qlik Sense App's object models. The library provide events to data updates and has some handy features such as suspending and resuming sessions.

`@qlik/api` provides the same features, but with a lot simpler interface. It also comes with types for the QIX api including GenericObjects, HyperCubes etc etc. So in most cases `@qlik/api` can be used instead of `enigma.js`. Only when you have very specific configuration needs and don't want to use the "sense mixins" `enigma.js` can be used.

## Features

### Re-using sessions

`@qlik/api/qix` will re-use existing websocket sessions if they are found. It also integrates seamlessly with `@qlik/embed` libraries and will hook into any websocket session already opened by any `@qlik/embed` library.

### Auto suspend/resume and re-connect

When a session gets a suspend event `@qlik/api` will automatically handle the suspend/resume logic and attempt to re-connect to the same engine session. Hopefully a user will never even notice that the websocket was closed for a little while.

## The App session

An app session in qix means a websocket connected to one app by one user in qix engine.

```js
qix.openAppSession({ ...appSessionProps });
```

The app sesssion settings have the following properties.

- `appId` - Required string to open an App
- `identity` - Optional string to open an individual session to the same app that is different from the default. Useful if different selection states are needed simultaneously.
- `hostConfig` - Optional Hostconfig to connect to a URL and authenticate an app session. Only needed if default HostConfig has not been set, or if connection should be different from the default.
- `withoutData` - Optional boolean, set to true if app should be opened without loading the data blob

**_note_** - when using `withoutData: true` and no `identity` it is likely that engine throws error "App is opened in a different mode" if the app has already been opened with data or if the app is opened in `Qlik Sense` after script has been run without data. So it is _strongly recommended_ to use the `identity` parameter when opening the app without data. E.g `qix.openAppSession({ appId: "app-id", identity: "no-data", withoutData: true, ... })`

## Usage example

```ts
import { openAppSession } from "@qlik/api/qix";
import { setDefaultHostConfig } from "@qlik/api/auth";

setDefaultHostConfig({ ... });

// sets up a session to a Qix Engine App
appSession = openAppSession({ appId: <app-id>, identity: <empty-or-anystring>, hostConfig: <only-if-different-from-default>, withoutData: <default to false>" });
// or use the shorthand
// appSession = openAppSession(<app-id>);

// get the "qix document (qlik app)"
const app = await appSession.getDoc();

// app is now fully typed including sense-client mixins
const sheetlist = await app.getSheetList();

// sheetlist is now of the type SheetListItem[], that type is included in the package.
```

React example of getting the sheet list from a Qlik Sense app.

```tsx
import { type HostConfig } from "@qlik/api/auth";
import { openAppSession, type Doc } from "@qlik/api/qix";
import React from "react";
import usePromise from "react-use-promise";

const hostConfig: HostConfig = {
  ..., // add host config values here
};


/**
 * Use App Hook
 */
function useApp(appId: string): Doc | undefined {
  const [app, setApp] = React.useState<Doc | undefined>(undefined);
  React.useEffect(() => {
    // open a websocket using the specified hostConfig. If `setDefaultHostConfig` has been used,
    //  passing host config here is not needed here.
    const appSession = openAppSession({ appId, hostConfig });
    appSession.getDoc().then((x) => {
      setApp(x);
    });
    return () => {
      if (appSession) {
        appSession.close();
      }
    };
  }, [appId]);
  return app;
}

type SheetListProps = {
  appId: string;
};

const SheetList = ({ appId }: SheetListProps): JSX.Element | null => {
  const app = useApp(appId);

  // this could be nicely wrapped in your own local getSheetList hook similar to the useApp hook above
  const [sheetList] = usePromise(async () => app && app.getSheetList(), [app]);
  // getSheetList above is coming from mixins, fully typed
  if (!sheetList) {
    return <div>Loading</div>;
  }
  return (
    <div>
      <div>Sheets:</div>
      {sheetList.map((item) => (
        <div key={item.qInfo?.qId}>{item.qData?.title}</div>
      ))}
    </div>
  );
};

export default SheetList;
```

More examples can be found in the [examples](examples.md) section.

◁ [Back to overview](../README.md)
