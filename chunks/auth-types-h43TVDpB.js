//#region src/auth/auth-types.ts
/**
* These properties are always allowed in the host config, even if they are not defined in the HostConfig interface
* for the specific auth module.
*/
const hostConfigCommonProperties = [
	"authType",
	"autoRedirect",
	"authRedirectUserConfirmation",
	"embedRuntimeUrl",
	"host",
	"onAuthFailed"
];
const authTypesThatCanBeOmitted = [
	"apikey",
	"oauth2",
	"cookie",
	"windowscookie",
	"reference",
	"anonymous"
];

//#endregion
export { hostConfigCommonProperties as n, authTypesThatCanBeOmitted as t };