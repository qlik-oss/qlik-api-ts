import base from "./base";
import getObjectCache from "./get-object-cache";
import layoutObservable from "./layout-observable";
import migration from "./migration";
import state from "./state";

export const mixins = [base, getObjectCache, migration, state, layoutObservable];
