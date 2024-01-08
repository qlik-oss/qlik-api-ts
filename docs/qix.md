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

## Usage example

```ts
import { openAppSession } from "@qlik/api/qix";
import { setDefaultHostConfig } from "@qlik/api/auth";

setDefaultHostConfig({ ... });

// sets up a websocket to engine
appSession = openAppSession({ appId: "<app-id>" });

// get the "qix document (qlik app)"
const app = await appSession.getDoc();

// app is now fully typed including sense-client mixins
const sheetlist = await app.getSheetList();

// sheetlist is now of the type SheetListItem[], that type is included in the package.
```

React example of getting the sheet list from a Qlik Sense app.

```tsx
import React from "react";
import usePromise from "react-use-promise";
import { useAppHook } from "@qlik/api/qix";
import { setDefaultHostConfig } from "@qlik/api/auth";

setDefaultHostConfig({ ... });

// send in the react instance (avoid unnecessary dependencies to react in @qlik/api)
const useApp = useAppHook(React);

type SheetListProps = {
  appId: string;
};

const SheetList = ({ appId }: SheetListProps): JSX.Element | null => {
  const app = useApp(appId);

  // this could be nicely wrapped in your own local getSheetList hook
  const [sheetList] = usePromise(async () => app && app.getSheetList(), [app]);
  // getSheetList above is coming from mixins, fully typed

  if (!sheetList) {
    return <div>Loading</div>;
  }
  return (
    <div>
      <div>Sheets:</div>
      {sheetList.map((item) => (
        <div key={item.qInfo?.qId}>{item.qData.title}</div>
      ))}
    </div>
  );
};

export default SheetList;
```

More examples can be found in the [examples](examples.md) section.

◁ [Back to overview](../README.md)
