import interceptors from "#internal/interceptors/interceptors";

export type { InterceptorsAPI, RestInterceptor } from "#internal/interceptors/interceptors";

export { addInterceptor, getInterceptors, removeInterceptor } from "#internal/interceptors/interceptors";

export default interceptors;
