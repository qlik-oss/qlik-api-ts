//#region node_modules/.pnpm/@qlik+runtime-module-loader@1.4.0/node_modules/@qlik/runtime-module-loader/dist/index.js
if (!window.__qlikMainPrivateResolvers) window.__qlikMainPrivateResolvers = {};
if (!window.__qlikMainPrivateResolvers.mainUrlPromise) window.__qlikMainPrivateResolvers.mainUrlPromise = new Promise((resolve) => {
	if (window.__qlikMainPrivateResolvers) window.__qlikMainPrivateResolvers.resolveMainJsUrl = (value) => {
		resolve(value);
	};
});
if (!window.__qlikMainPrivateResolvers.mainJsUrlAndHostConfigPromise) window.__qlikMainPrivateResolvers.mainJsUrlAndHostConfigPromise = new Promise((resolve) => {
	if (window.__qlikMainPrivateResolvers) window.__qlikMainPrivateResolvers.resolveMainJsUrlAndHostConfig = (value) => {
		resolve(value);
	};
});
if (!window.__qlikMainPrivateResolvers.qlikMainPromise) window.__qlikMainPrivateResolvers.qlikMainPromise = (async () => {
	if (window.QlikMain) return window.QlikMain;
	if (!window.__qlikMainPrivateResolvers?.mainJsUrlAndHostConfigPromise || !window.__qlikMainPrivateResolvers.mainUrlPromise) throw new Error("No main url promise found, report this issue");
	const noHostWarningTimer = setTimeout(() => {
		console.warn("Waiting for a host parameter pointing to a Qlik runtime system");
	}, 5e3);
	const { url, hostConfig } = await Promise.race([window.__qlikMainPrivateResolvers.mainJsUrlAndHostConfigPromise, window.__qlikMainPrivateResolvers.mainUrlPromise.then((mainJsUrl) => ({
		url: mainJsUrl,
		hostConfig: window.__qlikMainPrivateResolvers?.forwardCompatibleHostConfig
	}))]);
	clearTimeout(noHostWarningTimer);
	const useWindowsCookies = await handleWindowsAuthentication(url, hostConfig);
	return new Promise((resolve) => {
		if (window.QlikMain) resolve(window.QlikMain);
		else {
			const script = window.document.createElement("script");
			if (url) script.src = url;
			if (useWindowsCookies) script.crossOrigin = "use-credentials";
			script.addEventListener("error", () => {
				console.error(`Qlik runtime system not found: ${url}`);
			});
			script.addEventListener("load", () => {
				if (window.QlikMain) resolve(window.QlikMain);
			});
			window.document.head.appendChild(script);
		}
	});
})();
function provideHostConfigForMainJsUrl(hostConfig) {
	if (!window.__qlikMainPrivateResolvers) throw new Error("No main url resolver found");
	function toMainJsUrl(hc) {
		if (!window.__qlikMainPrivateResolvers) throw new Error("No main url resolver found");
		let url = hc?.embedRuntimeUrl || hc?.url || hc?.host;
		if (!url && hc?.authType === "noauth") url = "https://cdn.qlikcloud.com/qmfe";
		if (!url) return;
		let locationUrl;
		if (url.toLowerCase().startsWith("https://") || url.toLowerCase().startsWith("http://")) locationUrl = url;
		else locationUrl = `https://${url}`;
		while (locationUrl.endsWith("/")) locationUrl = locationUrl.slice(0, -1);
		return `${locationUrl}/qlik-embed/main.js`;
	}
	const potentialMainJsUrl = toMainJsUrl(hostConfig);
	if (potentialMainJsUrl && window.__qlikMainPrivateResolvers.resolveMainJsUrlAndHostConfig) window.__qlikMainPrivateResolvers.resolveMainJsUrlAndHostConfig({
		url: potentialMainJsUrl,
		hostConfig
	});
	if (potentialMainJsUrl && window.__qlikMainPrivateResolvers.resolveMainJsUrl) {
		window.__qlikMainPrivateResolvers.forwardCompatibleHostConfig = hostConfig;
		window.__qlikMainPrivateResolvers.resolveMainJsUrl(potentialMainJsUrl);
	}
}
async function importRuntimeModule(name, hostConfig) {
	if (hostConfig?.runtimeModuleMocks?.[name]) return hostConfig.runtimeModuleMocks?.[name];
	provideHostConfigForMainJsUrl(hostConfig);
	return importFromCdn(name);
}
async function importFromCdn(name) {
	if (!window.__qlikMainPrivateResolvers?.qlikMainPromise) throw new Error("No main url resolver found");
	return (await window.__qlikMainPrivateResolvers.qlikMainPromise).import(name);
}
async function handleWindowsAuthentication(url, hostConfig) {
	if (hostConfig?.authType === "windowscookie") {
		if (hostConfig.getAccessToken) {
			const token2 = await resolveTokenIfPresent(hostConfig.getAccessToken);
			if (token2) await fetch(url, {
				method: "GET",
				mode: "cors",
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token2}`
				}
			});
			return true;
		}
		if (hostConfig.loginUri) {
			if (!(await fetch(url, {
				method: "GET",
				mode: "cors",
				credentials: "include",
				redirect: "manual"
			})).ok) {
				window.location.replace(hostConfig.loginUri);
				return new Promise(() => {});
			}
		}
	}
	return false;
}
async function resolveTokenIfPresent(getAccessToken) {
	if (typeof getAccessToken === "function") return getAccessToken();
	if (typeof getAccessToken === "string") {
		const accessTokenFn = lookupGlobalGetAccessTokenFn(getAccessToken);
		if (typeof accessTokenFn !== "function") throw new Error(`getAccessToken function "${getAccessToken}" not found on globalThis. Please make sure it is defined.`);
		return accessTokenFn();
	}
}
function lookupGlobalGetAccessTokenFn(getAccessToken) {
	return globalThis[getAccessToken];
}

//#endregion
export { importRuntimeModule };