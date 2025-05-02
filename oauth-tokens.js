import {
  clearApiCache,
  invokeFetch
} from "./chunks/VVD2DPKQ.js";
import "./chunks/LTNGXTXG.js";
import "./chunks/2ZQ3ZX7F.js";

// src/public/rest/oauth-tokens.ts
var getOauthTokens = async (query, options) => invokeFetch("oauth-tokens", {
  method: "get",
  pathTemplate: "/api/v1/oauth-tokens",
  query,
  options
});
var deleteOauthToken = async (tokenId, options) => invokeFetch("oauth-tokens", {
  method: "delete",
  pathTemplate: "/api/v1/oauth-tokens/{tokenId}",
  pathVariables: { tokenId },
  options
});
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
