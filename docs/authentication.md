# Authentication

◁ [Back to overview](../README.md)

When integrating a third-party solution with Qlik Cloud Services users always have to authenticate with Qlik's backend services to interact with them. Authentication with `@qlik/api` works seamlessly and uses the same authentication mechanisms as those in the `@qlik/embed` libraries. The general idea is to provide a capable yet simple-to-use authentication api that works out of the box for most users. There are a few authentication options so that users can use what suits them best.

## The Host Config

Authentication is done by setting up a host config.

The examples below uses an api-key and can be run in node.

```ts
import { auth, spaces } from "@qlik/api";

const hostConfig = {
  authType: "apikey",
  host: "my-org.region.qlikcloud.com", // a qlikcloud tenant
  apiKey: "<api-key>",
};

// sets a default host config for every api request
auth.setDefaultConfig(hostConfig);

const { data: mySpaces } = spaces.getSpaces();

console.log(mySpaces);
```

A host config can also be passed in to every single api request which then will override any default host config previously set. This way multiple host configs can be used if needed.

```ts
import spaces from "@qlik/api/spaces";

const hostConfig = {
    authType: "apikey"
    host: "my-org.region.qlikcloud.com", // a qlikcloud tenant
    apiKey: "<api-key>",
  }

const { data: mySpaces } = spaces.getSpaces({}, {
  hostConfig,
});

console.log(mySpaces);
```

### Binding an instance of `@qlik/api` to a specific host config

As an alternative to the methods above it is also possible to create an instance of `@qlik/api` bound to a specific host config. This allows users to use several host configs in their solutions and easily separate them by having seperate `@qlik/api` instances.

Example:

```ts
import { createQlikApi } from "@qlik/api";

const api = createQlikApi({
  authType: "apikey"
  host: "my-org.region.qlikcloud.com", // a qlikcloud tenant
  apiKey: "<api-key>",
});

// "api" now has the full @qlik/api bound to one specific hostconfig
const { data: mySpaces } = api.spaces.getSpaces();

// create another api with a different auth mechanism
const apiToOtherTenant = createQlikApi({
  authType: "oauth2"
  host: "my-other-tenant.region.qlikcloud.com", // a qlikcloud tenant
  clientId: "<client-id>",
});

// "apiToOtherTenant" is now bound to another hostconfig
const { data: myOtherSpaces } = apiToOtherTenant.spaces.getSpaces();
```

## The Auth Module

An auth module in `@qlik/api` is an object with a few implemented methods. When connecting to Qlik Cloud Services (or Qlik Sense Enterprise for Windows) with `@qlik/api` or with `@qlik/embed` libraries an auth module is used for configuring the communication.

```ts
// This is an authentication module in @qlik/api

const authModule = {
  /** Gets the auth params needed for rest calls */
  getRestCallAuthParams: () => Promise.resolve({
    /** will be applied to rest requests headers */
    headers: { ... },
    /** will be added as query parameters to the request */
    queryParams: { ... },
    /** will set the credentials attribute on the rest request */
    credentials: ("include"|"omit"|"same-origin"),
  }),

  /** Gets params for websocket connect requests */
  getWebSocketAuthParams: () => Promise.resolve({
    // will be added as query parameters to the websocket connect request
     queryParams: { ... }
  });

  /** Will be called when there's an authentication error (e.g. user is not logged in) during an api call. */
  handleAuthenticationError: () => {
    // ... maybe start a login process
    return Promise.resolve();
  }

  /** optional method to get auth params when web resources are fetched (such as images etc) */
  getWebResourceAuthParams: () => Promise.resolve();

  /**
  * Optional runtime check for validating a host configs options, return false if
  * something is missing or if there are invalid properties in the host config.
  */
  validateHostConfig: (hostConfig) => true;
}
```

## The Default Auth Modules

- [Oauth2](#oauth2)
- [Cookie](#cookie)
- [Windows Cookie](#windows-cookie)
- [API Key](#api-key)

### Oauth2

Uses a `clientId` from an oauth client created by a Qlik tenant administrator. And optionally a `clientSecret`. A user will go through a login flow to get hold of an access token that is valid for 6 hours. This token will be used as query parameters for api requests. If a `clientSecret` is used a refresh token will also be received. This can be used to refresh the access token and is valid for 30 days. The user can select where these tokens should be stored (only in a browser). Either in local storage or session storage (default).

```ts
type Oauth2AuthConfig = {
  /** The URL to the cloud tenant or windows server. If scheme is excluded https is used. May include a virtual proxy prefix on windows. Any trailing slashes are stripped. */
  host?: string;
  /** Client ID of oauth client created by tenant admin */
  clientId: string;
  /** Client ID of oauth client created by tenant admin */
  clientSecret?: string;
  /** The location where the client should be redirected after obtaining the access token */
  redirectUri?: string;
  /** If set, store the access token in either local or session storage, otherwise not stored */
  accessTokenStorage?: "session" | "local";
  /** A string with comma separated values of oauth2 scopes https://oauth.net/2/scope defaults to "user_default" */
  scope?: string;
};
```

When using OAuth2 in a browser it is recommended to set up a "redirect page" which is handy to use for pointing the redirection of an oauth login flow when fetching the access tokens. An oauth server will ask the client to redirect back to the hosting application after login is completed. In a single page application context this can potentially be any URL, so use this html template and use it for redirections.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <script
      crossorigin="anonymous"
      type="application/javascript"
      data-host="<tenant-url>"
      src="https://cdn.jsdelivr.net/npm/@qlik/embed-web-components/dist/oauth-callback.js"
    ></script>
  </head>
</html>
```

### Cookie

Uses a `webIntegrationId` created by a tenant administrator. Will get the a CSRF token and append to api calls when necessary. To use this method in an integration scenario it is required that third-party cookies are allowed.

```ts
type CookieAuthConfig = {
  /** The URL to the cloud tenant or windows server. If scheme is excluded https is used. May include a virtual proxy prefix on windows. Any trailing slashes are stripped. */
  host?: string;
  /** Web Integration Id created by tenant admin */
  webIntegrationId?: string;
  /** If set to false the `credentials` property will be set to same-origin  */
  crossSiteCookies?: boolean;
};
```

### Windows Cookie

Will do the necessary actions to communicate with a Qlik Sense Enterprise for Windows server. This includes fetching an XrfKey from the Qlik Sense Server Repository Service. To use this method in an integration scenario it is required that third-party cookies are allowed.

```ts
type WindowsCookieAuthConfig = {
  /** The URL to the cloud tenant or windows server. If scheme is excluded https is used. May include a virtual proxy prefix on windows. Any trailing slashes are stripped. */
  host?: string;
  /** location of the login page, auth module will redirect to this page when an unauthenticated api call is made */
  loginUri?: string;
  /** If set to false the `credentials` property will be set to same-origin  */
  crossSiteCookies?: boolean;
};
```

### API Key

Appends an `apiKey` to api requests that has been created by a user with a "developer" role on a Qlik Cloud tenant. Typically used when running integration code in a node environment.

```ts
type ApiKeyAuthConfig = {
  /** api key created by a developer role on a tenant */
  apiKey: string;
};
```

## Custom auth module

It is possible to register your own authentication module that then can be used when needed.

```ts
import { registerAuthModule, type AuthModule } from "@qlik/api/auth";

// declare the type of configuration needed your custom auth module

type CustomAuthConfig = {
  configPropA: string;
  optionalConfigPropB: boolean;
};

// Add your CustomAuthConfig to the known global auth types

declare global {
  interface QlikAuthModules {
    custom: { config: CustomAuthConfig };
  }
}

// implement your auth module as described above

const authModule = {
  ...
};

registerAuthModule("custom", authModule);
```

After this has been done the auth module can be used in a host config.

```ts
import { setDefaultHostConfig type HostConfig } from "@qlik/api/auth";

const hostConfig: HostConfig = {
  authType: "custom",
  configPropA: "some-config-or-a-key",
  optionalConfigPropB: false
}

setDefaultHostConfig(hostConfig);
```

◁ [Back to overview](../README.md)
