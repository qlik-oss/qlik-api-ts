import { I as InvokeFetchResponse, a as InvokeFetchProperties } from './invoke-fetch-types-BLrpeZOL.js';
import './auth-types-PkN9CAF_.js';

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
