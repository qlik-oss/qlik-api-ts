import { A as adaptiveCardsExport, j as adaptive_cards_d_exports } from "../chunks/adaptive-cards-BvI_p0_-.js";

//#region src/public/rest/analytics/discovery-agent.d.ts
declare namespace discovery_agent_d_exports {
  export { DiscoveryAgentAPI, adaptive_cards_d_exports as adaptiveCards, discoveryAgentExport as default };
}
type DiscoveryAgentAPI = {};
/**
 * Functions for the discovery-agent api
 */
declare const discoveryAgentExport: DiscoveryAgentAPI & {
  adaptiveCards: typeof adaptiveCardsExport;
};
//#endregion
export { DiscoveryAgentAPI, adaptive_cards_d_exports as adaptiveCards, discoveryAgentExport as default, discovery_agent_d_exports as t };