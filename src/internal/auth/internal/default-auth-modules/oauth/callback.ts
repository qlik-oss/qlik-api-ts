import { loadAndDeleteFromSessionStorage, saveInSessionStorage } from "./storage-helpers";

/**
 * AngularJS interpolates {{ }} expressions found in text content when it compiles
 * the DOM, so query-parameter values rendered on the page could be executed as
 * expressions. Break up consecutive braces with a zero-width space so the text
 * can never form an interpolation marker, even if it is copied out of an
 * ng-non-bindable element.
 */
export function escapeAngularJsExpressions(text: string): string {
  return text.replace(/\{(?=\{)/g, "{\u200b").replace(/\}(?=\})/g, "}\u200b");
}

/**
 * Receives the oauth code and state callback query parameters,
 * verifies the state, saves the code in session storage, and then
 * redirects the page to the final href if it is set and differes from current uri.
 */
export function handleOAuthCallback(): void {
  const urlParams = new URLSearchParams(globalThis.location.search);
  const callbackCode = urlParams.get("code") || undefined;
  const callbackState = urlParams.get("state") || undefined;
  if (urlParams.get("error")) {
    const element = document.createElement("pre");
    // Set the ng-non-bindable attribute before setting the innerText to prevent AngularJS from compiling it in /single.html.
    // https://qlik-dev.atlassian.net/browse/QCB-35758
    element.setAttribute("ng-non-bindable", "");
    element.innerText = escapeAngularJsExpressions(
      `<code>${JSON.stringify({
        error: urlParams.get("error"),
        error_code: urlParams.get("error_code"),
        error_description: urlParams.get("error_description"),
        error_detail: urlParams.get("error_detail"),
        error_uri: urlParams.get("error_uri"),
      })}</code>`,
    );
    document.body.prepend(element);
  }

  const topic = loadAndDeleteFromSessionStorage("", "client-in-progress");
  if (topic && callbackCode && callbackState) {
    const stateFromLocalStorage = loadAndDeleteFromSessionStorage(topic, "state");
    const finalRedirectUri = loadAndDeleteFromSessionStorage(topic, "href");

    if (stateFromLocalStorage && stateFromLocalStorage === callbackState && finalRedirectUri) {
      saveInSessionStorage(topic, "code", callbackCode);

      if (finalRedirectUri !== globalThis.location.href) {
        globalThis.location.replace(finalRedirectUri);
      }
    }
  }
}
