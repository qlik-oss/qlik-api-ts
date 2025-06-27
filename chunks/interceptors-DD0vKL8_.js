import { isBrowser } from "./utils-qEQ6sEXX.js";

//#region src/interceptors/interceptors.ts
let GLOBAL_INTERCEPTORS;
function createInterceptors() {
	const startingInterceptors = GLOBAL_INTERCEPTORS?.getInterceptors() || [];
	const interceptors$1 = [...startingInterceptors];
	return {
		addInterceptor: (interceptor) => {
			interceptors$1.push(interceptor);
			return interceptor;
		},
		removeInterceptor: (interceptor) => {
			const index = interceptors$1.indexOf(interceptor);
			let removed;
			if (index !== -1) removed = interceptors$1.splice(index, 1)[0];
			return removed || null;
		},
		getInterceptors: () => interceptors$1
	};
}
let addDefaultInterceptorsRun = false;
function addDefaultInterceptors() {
	if (addDefaultInterceptorsRun) return;
	if (isBrowser()) {
		const readFlagsFromUrlQuery = () => {
			const params = new URLSearchParams(window.location.search);
			const featuresParam = params.get("features");
			if (!featuresParam) return {};
			const features = featuresParam.split(",").map((item) => item.trim());
			const urlFeatures = features.reduce((map, obj) => {
				const value = !obj.startsWith("!");
				const key = value ? obj : obj.substring(1);
				map[key] = value;
				return map;
			}, {});
			return urlFeatures;
		};
		const readFlagsFromLocalStorage = () => {
			try {
				const featuresParam = localStorage.getItem("qcs-features");
				if (featuresParam) return JSON.parse(featuresParam);
				return {};
			} catch {
				return {};
			}
		};
		const flagsFromUrl = readFlagsFromUrlQuery();
		const flagsFromLocalStorage = readFlagsFromLocalStorage();
		const interceptor = async (request, proceed) => {
			let resultPromise;
			if (request.pathTemplate === "/api/v1/features") {
				resultPromise = proceed(request);
				const result = await resultPromise;
				return {
					...result,
					data: {
						...result.data || {},
						...flagsFromLocalStorage,
						...flagsFromUrl
					}
				};
			}
			return proceed(request);
		};
		GLOBAL_INTERCEPTORS.addInterceptor(interceptor);
	}
	addDefaultInterceptorsRun = true;
}
/**
* The global interceptor stack
*/
GLOBAL_INTERCEPTORS = createInterceptors();
/**
* Adds an interceptor to the global interceptor stack
* Returns the newly added interceptor
* @param interceptor the interceptor to add
* @returns the newly added interceptor
*/
function addInterceptor(interceptor) {
	return GLOBAL_INTERCEPTORS.addInterceptor(interceptor);
}
/**
* Removes an interceptor from the global interceptor stack
* @param interceptor the interceptor remove
*/
function removeInterceptor(interceptor) {
	return GLOBAL_INTERCEPTORS.removeInterceptor(interceptor);
}
/**
* Gets all registered interceptors
*/
function getInterceptors() {
	return GLOBAL_INTERCEPTORS.getInterceptors();
}
/**
* The interceptors API
*/
const interceptors = {
	addInterceptor,
	removeInterceptor,
	getInterceptors,
	createInterceptors
};
var interceptors_default = interceptors;

//#endregion
export { addDefaultInterceptors, addInterceptor, createInterceptors, getInterceptors, interceptors_default, removeInterceptor };