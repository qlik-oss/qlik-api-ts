//#region node_modules/.pnpm/@qlik+runtime-module-loader@1.0.23/node_modules/@qlik/runtime-module-loader/dist/index.js
window.__qlikMainPrivateResolvers = window.__qlikMainPrivateResolvers || {};
window.__qlikMainPrivateResolvers.mainUrlPromise = window.__qlikMainPrivateResolvers.mainUrlPromise || new Promise((resolve) => {
	window.__qlikMainPrivateResolvers.resolveMainJsUrl = (value) => resolve(value);
});
window.__qlikMainPrivateResolvers.qlikMainPromise = window.__qlikMainPrivateResolvers.qlikMainPromise || (async () => {
	if (window.QlikMain) return window.QlikMain;
	const noHostWarningTimer = setTimeout(() => {
		console.warn("Waiting for a host parameter pointing to a Qlik runtime system");
	}, 5e3);
	const url = await window.__qlikMainPrivateResolvers.mainUrlPromise;
	clearTimeout(noHostWarningTimer);
	return new Promise((resolve) => {
		if (window.QlikMain) resolve(window.QlikMain);
		else {
			const script = window.document.createElement("script");
			script.src = url;
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
	const trailingSlashes = /\/+$/;
	function toMainJsUrl(hc) {
		const url = hc?.embedRuntimeUrl || hc?.url || hc?.host;
		if (!url) return void 0;
		let locationUrl;
		if (url.toLowerCase().startsWith("https://") || url.toLowerCase().startsWith("http://")) locationUrl = url;
		else locationUrl = `https://${url}`;
		locationUrl = locationUrl.replace(trailingSlashes, "");
		return `${locationUrl}/qlik-embed/main.js`;
	}
	const potentialMainJsUrl = toMainJsUrl(hostConfig);
	if (potentialMainJsUrl) window.__qlikMainPrivateResolvers.resolveMainJsUrl(potentialMainJsUrl);
}
async function importRuntimeModule(name, hostConfig) {
	if (hostConfig?.runtimeModuleMocks?.[name]) return hostConfig?.runtimeModuleMocks?.[name];
	provideHostConfigForMainJsUrl(hostConfig);
	return importFromCdn(name);
}
async function importFromCdn(name) {
	return (await window.__qlikMainPrivateResolvers.qlikMainPromise).import(name);
}

//#endregion
export { importRuntimeModule };