import type { Json } from "./protocol-types";
import type { PhoenixRpcObject } from "./rpc-object";

export type MethodSchema = {
  In: Array<{ Name: string; DefaultValue?: unknown; Optional?: boolean }>;
  Out: Array<{ Name: string }>;
};
export type ObjectSchema = Record<string, MethodSchema>;
export type QixSchema = {
  structs: Record<string, ObjectSchema>;
};

export function schemaToStructureOfUnboundFunctions(schema: QixSchema): Record<
  string,
  Array<{
    methodName: string;
    fn: Function;
  }>
> {
  const result: Record<string, Array<{ methodName: string; fn: Function }>> = {};

  Object.entries(schema.structs).forEach(([type, objectSchema]) => {
    result[type] = schemaToFunctionsEntries(objectSchema);
  });

  function schemaToFunctionsEntries(objectSchema: ObjectSchema): Array<{ methodName: string; fn: Function }> {
    return Object.entries(objectSchema).map(([pascalName, methodSchema]) => {
      return { methodName: toCamelCase(pascalName), fn: generateUnboundMethod(pascalName, methodSchema) };
    });
  }
  return result;
}

function generateUnboundMethod(pascalMethodName: string, methodSchema: MethodSchema): Function {
  const out = methodSchema.Out;
  const outKey = out.length === 1 ? out[0].Name : -1;
  return function generatedMethod(this: PhoenixRpcObject, ...params: Json[]) {
    return this.__remote__.invoke({ method: pascalMethodName, params, outKey });
  };
}

/**
 * Returns the camelCase counterpart of a symbol.
 * @private
 * @param {String} symbol The symbol.
 * @return the camelCase counterpart.
 */
function toCamelCase(symbol: string) {
  return symbol.substring(0, 1).toLowerCase() + symbol.substring(1);
}
