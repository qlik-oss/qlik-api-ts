import { t as getAuthRuntimeModule } from "./chunks/public-runtime-modules-BqxAMJ9M.js";

//#region src/public/auth.ts
/**
* Registers an auth module that can handle authentication. An auth module is used by specifying its name as authType in the HostConfig passed in to api calls.
* @param name the name of the module
* @param authModule the implementation of the AuthModule interface
*/
function registerAuthModule(name, authModule) {
	getAuthRuntimeModule().then((impl) => impl.registerAuthModule(name, authModule));
}
/**
* Logs out the user and sets `global.loggingOut` to true.
*
* **NOTE**: Does not abort pending requests.
*/
function logout() {
	getAuthRuntimeModule().then((impl) => impl.logout());
}
/**
* Sets the default host config that will be used for all api calls that do not include a HostConfig
* @param hostConfig the default HostConfig to use
*/
function setDefaultHostConfig(hostConfig) {
	getAuthRuntimeModule(hostConfig).then((impl) => impl.setDefaultHostConfig(hostConfig));
}
/**
* Registers a host config with the given name.
* @param name The name of the host config to be used to reference the host config later.
* @param hostConfig The host config to register.
*/
function registerHostConfig(name, hostConfig) {
	getAuthRuntimeModule(hostConfig).then((impl) => impl.registerHostConfig(name, hostConfig));
}
/**
* Unregisters a host config with the given name.
* @param name The name of the host config to unregister.
*/
function unregisterHostConfig(name) {
	getAuthRuntimeModule().then((impl) => impl.unregisterHostConfig(name));
}
/**
* Returns an access token using the supplied host config. Typically used on the backend to supply the access token to the frontend
*/
async function getAccessToken({ hostConfig }) {
	return getAuthRuntimeModule(hostConfig).then((impl) => impl.getAccessToken({ hostConfig }));
}
/**
* Returns a record of query parameters that needs to be added to resources requests, e.g.
* image tags, etc.
*/
async function getWebResourceAuthParams({ hostConfig }) {
	return getAuthRuntimeModule(hostConfig).then((impl) => impl.getWebResourceAuthParams({ hostConfig }));
}
var auth_default = {
	registerAuthModule,
	setDefaultHostConfig,
	registerHostConfig,
	unregisterHostConfig,
	getAccessToken,
	getWebResourceAuthParams
};

//#endregion
export { auth_default as default, getAccessToken, getWebResourceAuthParams, logout, registerAuthModule, registerHostConfig, setDefaultHostConfig, unregisterHostConfig };