//#region src/utils/utils.ts
/**
* Returns true if the running environment is a browser-like environment
*/
function isBrowser() {
	if (typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.self !== "undefined") return true;
	return false;
}
/**
* Returns true if the running environment is a node-like environment
*/
function isNode() {
	if (typeof process !== "undefined" && process.version && process.versions.node) return true;
	return false;
}
/**
* Checks if a value is a plain object (not an array, null, or any other type).
* @param value The value to check
* @returns true if the value is a plain object, false otherwise
*/
function isPlainObject(value) {
	return typeof value === "object" && value !== null && value.constructor === Object;
}
/**
* Recursively sorts the keys of an object or array of objects.
* If the input is an array, it sorts each object in the array.
* If the input is an object, it sorts the keys of the object.
* If the input is neither an object nor an array, it returns the input as is.
* @param obj Object to sort keys of
* @template T Type of the object
* @returns sorted object or array of objects
* @example
* const obj = { b: 2, a: 1, c: { d: 4, b: 3 } };
* const sortedObj = sortKeys(obj);
* // sortedObj will be { a: 1, b: 2, c: { b: 3, d: 4 } }
*/
function sortKeys(obj) {
	if (Array.isArray(obj)) return obj.map(sortKeys);
	else if (isPlainObject(obj)) {
		const sortedObj = {};
		for (const key of Object.keys(obj).sort()) sortedObj[key] = sortKeys(obj[key]);
		return sortedObj;
	}
	return obj;
}
/**
* Cleans an object by removing all properties that are falsy (null, undefined, false, 0, "", NaN).
* strings that are empty after trimming will also be removed.
* @param obj The object to clean
* @returns A new object with all falsy values removed
*/
function cleanFalsyValues(obj) {
	if (Array.isArray(obj)) return obj.map((item) => typeof item === "object" && item !== null ? cleanFalsyValues(item) : item).filter((item) => {
		if (typeof item === "object" && item !== null) return Object.keys(item).length > 0;
		return item !== null && item !== void 0 && item !== "";
	});
	else if (typeof obj === "object" && obj !== null) {
		const cleaned = {};
		for (const key of Object.keys(obj)) {
			const value = obj[key];
			switch (typeof value) {
				case "undefined": break;
				case "boolean":
					if (value) cleaned[key] = value;
					break;
				case "string": {
					const trimmed = value.trim();
					if (trimmed !== "") cleaned[key] = trimmed;
					break;
				}
				case "object": {
					if (value === null) break;
					const cleanedValue = cleanFalsyValues(value);
					if (cleanedValue) {
						if (Array.isArray(cleanedValue) && cleanedValue.length > 0 || typeof cleanedValue === "object" && Object.keys(cleanedValue).length > 0) cleaned[key] = cleanedValue;
						else if (!Array.isArray(cleanedValue) && typeof cleanedValue === "object") {}
					}
					break;
				}
				case "function":
				case "number":
					cleaned[key] = value;
					break;
				default:
					console.warn(`Unexpected type for key "${key}": ${typeof value}`);
					cleaned[key] = value;
					break;
			}
		}
		if (Object.keys(cleaned).length === 0) return;
		return cleaned;
	}
	return obj;
}
function createResolvablePromise() {
	let resolve;
	let reject;
	return [
		new Promise((res, rej) => {
			resolve = res;
			reject = rej;
		}),
		resolve,
		reject
	];
}

//#endregion
export { sortKeys as a, isNode as i, createResolvablePromise as n, isBrowser as r, cleanFalsyValues as t };