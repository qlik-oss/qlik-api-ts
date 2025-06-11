import { I as InvokeFetchResponse, a as InvokeFetchProperties } from './invoke-fetch-types-BYCD4pc9.js';
import './auth-types-Cj5bM3Yk.js';

/**
 * This module provides a way to intercept requests and responses in the qmfe-api.
 * It allows you to modify the request before it is sent and the response before it is returned.
 * This is useful for adding headers, modifying the request body, or handling errors.
 * @module interceptors
 */

/**
 * The RestInterceptor type is a function that can be used to intercept requests and responses
 */
type RestInterceptor = <T extends InvokeFetchResponse>(request: InvokeFetchProperties, proceed: (props: InvokeFetchProperties) => Promise<T>, id?: string) => Promise<T>;
declare function createInterceptors(): InterceptorsAPI;
declare function addDefaultInterceptors(): void;
/**
 * Adds an interceptor to the global interceptor stack
 * Returns the newly added interceptor
 * @param interceptor the interceptor to add
 * @returns the newly added interceptor
 */
declare function addInterceptor(interceptor: RestInterceptor): RestInterceptor;
/**
 * Removes an interceptor from the global interceptor stack
 * @param interceptor the interceptor remove
 */
declare function removeInterceptor(interceptor: RestInterceptor): RestInterceptor | null;
/**
 * Gets all registered interceptors
 */
declare function getInterceptors(): RestInterceptor[];
interface InterceptorsAPI {
    /**
     * Adds an interceptor to the global interceptor stack
     * Returns the newly added interceptor
     * @param interceptor the interceptor to add
     * @returns the newly added interceptor
     */
    addInterceptor: typeof addInterceptor;
    /**
     * Removes an interceptor from the global interceptor stack
     * @param interceptor the interceptor remove
     */
    removeInterceptor: typeof removeInterceptor;
    /**
     * Gets all registered interceptors
     */
    getInterceptors: typeof getInterceptors;
}
/**
 * The interceptors API
 */
declare const interceptors: InterceptorsAPI & {
    createInterceptors: typeof createInterceptors;
};

export { type InterceptorsAPI, type RestInterceptor, addDefaultInterceptors, addInterceptor, createInterceptors, interceptors as default, getInterceptors, removeInterceptor };
