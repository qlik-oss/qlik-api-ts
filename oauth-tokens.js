import {
  clearApiCache,
  invokeFetch
} from "./chunks/P6F6QA4Y.js";
import "./chunks/DN5SVV4X.js";
import "./chunks/7MMXU6EL.js";

// src/public/rest/oauth-tokens.ts
async function getOauthTokens(query, options) {
  return invokeFetch("oauth-tokens", {
    method: "get",
    pathTemplate: "/api/v1/oauth-tokens",
    query,
    options
  });
}
async function deleteOauthToken(tokenId, options) {
  return invokeFetch("oauth-tokens", {
    method: "delete",
    pathTemplate: "/api/v1/oauth-tokens/{tokenId}",
    pathVariables: { tokenId },
    options
  });
}
function clearCache() {
  return clearApiCache("oauth-tokens");
}
var oauthTokensExport = { getOauthTokens, deleteOauthToken, clearCache };
var oauth_tokens_default = oauthTokensExport;
export {
  clearCache,
  oauth_tokens_default as default,
  deleteOauthToken,
  getOauthTokens
};
