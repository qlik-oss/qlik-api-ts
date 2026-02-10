import { r as isBrowser } from "./chunks/utils-jkpLuYZR.js";
import { t as coreBootInterceptor } from "./chunks/boot-interceptors-DqRxTczb.js";

//#region src/interceptors/interceptors.ts
let GLOBAL_INTERCEPTORS;
function createInterceptors() {
	const interceptors = [...GLOBAL_INTERCEPTORS?.getInterceptors() || []];
	return {
		addInterceptor: (interceptor) => {
			interceptors.push(interceptor);
			return interceptor;
		},
		removeInterceptor: (interceptor) => {
			const index = interceptors.indexOf(interceptor);
			let removed;
			if (index !== -1) removed = interceptors.splice(index, 1)[0];
			return removed || null;
		},
		getInterceptors: () => interceptors
	};
}
let addDefaultInterceptorsRun = false;
function addDefaultInterceptors() {
	if (addDefaultInterceptorsRun) return;
	if (isBrowser()) {
		const readFlagsFromUrlQuery = () => {
			const featuresParam = new URLSearchParams(window.location.search).get("features");
			if (!featuresParam) return {};
			return featuresParam.split(",").map((item) => item.trim()).reduce((map, obj) => {
				const value = !obj.startsWith("!");
				const key = value ? obj : obj.substring(1);
				map[key] = value;
				return map;
			}, {});
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
		const featuresInterceptor = async (request, proceed) => {
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
		GLOBAL_INTERCEPTORS.addInterceptor(featuresInterceptor);
		GLOBAL_INTERCEPTORS.addInterceptor(coreBootInterceptor);
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

//#endregion
export { addDefaultInterceptors, addInterceptor, createInterceptors, interceptors as default, getInterceptors, removeInterceptor };