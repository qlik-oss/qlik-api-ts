export function exposeInternalApiOnWindow(name: string, fn: Function) {
  const hostname = globalThis.location?.hostname?.toLowerCase();
  const isLocalhost = hostname === "localhost";
  const isQlikStageDomain = hostname?.endsWith(".qlik-stage.com");

  if (isLocalhost || isQlikStageDomain) {
    if (globalThis.QlikMain) {
      if (globalThis.QlikMain.INTERNAL__DO_NOT_USE.qix === undefined) {
        globalThis.QlikMain.INTERNAL__DO_NOT_USE.qix = {};
      }
      // @ts-expect-error ts(7015)
      globalThis.QlikMain.INTERNAL__DO_NOT_USE.qix[name] = fn;
    }
  }
}
