/*
 * ------------------------------------------------------------------------
 * ## THIS FILE WAS GENERATED WITH QMFE-API-GENERATOR                    ##
 * ##                                                                    ##
 * ## AUTHOR: frontend-core-team                                         ##
 * ------------------------------------------------------------------------
 */

import adaptiveCards from "./discovery-agent/adaptive-cards";

/* -------------------------------------------------------------------------- */
/*                              Submodule exports                             */
/* -------------------------------------------------------------------------- */

export * as adaptiveCards from "./discovery-agent/adaptive-cards";

/* -------------------------------------------------------------------------- */
/*                             Default export api                             */
/* -------------------------------------------------------------------------- */

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type DiscoveryAgentAPI = {};

/**
 * Functions for the discovery-agent api
 */
const discoveryAgentExport: DiscoveryAgentAPI & { adaptiveCards: typeof adaptiveCards } = { adaptiveCards };
export default discoveryAgentExport;
