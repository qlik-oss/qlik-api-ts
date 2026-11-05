import type { InvokeFetchProperties, InvokeFetchResponse } from "#internal/invoke-fetch/invoke-fetch-types";
import type { Platform } from "#internal/platform/platform-types";

// The auth modules that the mock backend of qmfe-api registers, which invoke-fetch and platform handle.
// Those import this module for its types only, so it is not part of the @qlik/api build. The qmfe-api mock backend
// (packages/qmfe-api/src/mock-backend/unit-test-auth-module.ts) declares them as well, since its published
// mock-backend.d.ts has to carry the declaration, and imports this module so that tsc reports any difference.
declare global {
  /**
   * QlikAuthModules is a global interface that can be extended to add custom auth modules.
   */
  interface QlikAuthModules {
    "mock-backend": {
      config: {
        createWebSocket: (url: string) => WebSocket;
        forceIsWindows?: boolean;
        mockGetPlatform: () => Promise<Platform>;
        mockInvokeFetch: (request: InvokeFetchProperties) => Promise<InvokeFetchResponse>;
      };
    };
    "mock-backend-rest-recorder": {
      config: {
        recordGetPlatform: () => Promise<Platform>;
        recordInvokeFetch: (request: InvokeFetchProperties) => Promise<InvokeFetchResponse>;
      };
    };
  }
}
