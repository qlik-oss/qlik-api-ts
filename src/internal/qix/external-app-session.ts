import type { OpenAppSessionProps } from "@qlik/embed-runtime/qix";
import type { Doc, WebSocketEvent } from "./qix-types";
import type { Client, SharedSession } from "./shared-sessions-manager";
import type { WebSocketEventListener, WebSocketEventPayloads } from "./types/websocket-events";

export function createExternalSharedSession(
  externalApp: Promise<unknown>,
  onWebSocketEvent: (event: WebSocketEvent) => void,
  appSessionProps: OpenAppSessionProps,
): SharedSession {
  const clients: Client[] = [];

  const sharedSession: SharedSession = {
    supportsProgressReporting: false,
    getDoc: () => externalApp as Promise<Doc>,
    addClient(client: Client) {
      const index = clients.indexOf(client, 0);
      if (index === -1) {
        clients.push(client);
      }
    },
    removeClient(client: Client): Promise<void> {
      const index = clients.indexOf(client, 0);
      if (index > -1) {
        clients.splice(index, 1);
      }
      return Promise.resolve();
    },
    initialActionsUpdated: () => {},
    clientsCount: () => clients.length,
    resume: async () => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        await externalApp.then((doc) => (doc as any).session?.resume());
      } catch (err) {
        // eslint-disable-next-line no-console
        console.warn(err);
      }
    },
  };

  const triggerEventListeners: WebSocketEventListener = (event) => {
    // Trigger global event listeners
    onWebSocketEvent(event);
    // Trigger locally defined listeners
    for (const client of clients) {
      client.onWebSocketEvent(event);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  void externalApp.then((app: any) => {
    /* eslint-disable @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access */
    app.session.on("opened", (event: WebSocketEventPayloads["opened"]) => {
      const wsEvent: WebSocketEvent<"opened"> = {
        eventType: "opened",
        ...appSessionProps,
        ...event,
      };
      triggerEventListeners(wsEvent);
    });

    app.session.on("closed", (event: WebSocketEventPayloads["closed"]) => {
      const wsEvent: WebSocketEvent<"closed"> = {
        eventType: "closed",
        ...appSessionProps,
        ...event,
      };
      triggerEventListeners(wsEvent);
    });

    app.session.on("suspended", (event: WebSocketEventPayloads["suspended"]) => {
      const wsEvent: WebSocketEvent<"suspended"> = {
        eventType: "suspended",
        ...appSessionProps,
        ...event,
      };
      triggerEventListeners(wsEvent);
    });

    app.session.on("resuming", (event: WebSocketEventPayloads["resuming"]) => {
      const wsEvent: WebSocketEvent<"resuming"> = {
        eventType: "resuming",
        ...appSessionProps,
        ...event,
      };
      triggerEventListeners(wsEvent);
    });

    app.session.on("resumed", (event: WebSocketEventPayloads["resumed"]) => {
      const wsEvent: WebSocketEvent<"resumed"> = {
        eventType: "resumed",
        ...appSessionProps,
        ...event,
      };
      triggerEventListeners(wsEvent);
    });
  });
  /* eslint-enable @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access */

  return sharedSession;
}
