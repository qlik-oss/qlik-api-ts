//#region node_modules/.pnpm/@qlik+runtime-module-loader@1.2.3/node_modules/@qlik/runtime-module-loader/dist/index.js
if (!window.__qlikMainPrivateResolvers) window.__qlikMainPrivateResolvers = {};
if (!window.__qlikMainPrivateResolvers.mainUrlPromise) window.__qlikMainPrivateResolvers.mainUrlPromise = new Promise((resolve) => {
	if (window.__qlikMainPrivateResolvers) window.__qlikMainPrivateResolvers.resolveMainJsUrl = (value) => {
		resolve(value);
	};
});
if (!window.__qlikMainPrivateResolvers.qlikMainPromise) window.__qlikMainPrivateResolvers.qlikMainPromise = (async () => {
	if (window.QlikMain) return window.QlikMain;
	if (!window.__qlikMainPrivateResolvers?.mainUrlPromise) throw new Error("No main url promise found, report this issue");
	const noHostWarningTimer = setTimeout(() => {
		console.warn("Waiting for a host parameter pointing to a Qlik runtime system");
	}, 5e3);
	const url = await window.__qlikMainPrivateResolvers.mainUrlPromise;
	clearTimeout(noHostWarningTimer);
	return new Promise((resolve) => {
		if (window.QlikMain) resolve(window.QlikMain);
		else {
			const script = window.document.createElement("script");
			if (url) script.src = url;
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
	if (potentialMainJsUrl && window.__qlikMainPrivateResolvers.resolveMainJsUrl) window.__qlikMainPrivateResolvers.resolveMainJsUrl(potentialMainJsUrl);
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

//#endregion
export { importRuntimeModule };