// src/auth/auth-types.ts
var hostConfigCommonProperties = [
  "authType",
  "autoRedirect",
  "authRedirectUserConfirmation",
  "embedRuntimeUrl",
  "host",
  "onAuthFailed"
];
var authTypesThatCanBeOmitted = [
  "apikey",
  "oauth2",
  "cookie",
  "windowscookie",
  "reference",
  "anonymous"
];

export {
  hostConfigCommonProperties,
  authTypesThatCanBeOmitted
};
