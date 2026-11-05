import type { DocAction, OpenAppSessionProps, WebSocketEvent } from "../qix-types";
import type { Client, SharedSession } from "../shared-sessions-manager";
import { createProgressMonitor } from "./progress-monitor";

export type CreateSharedSessionProps = {
  onClose: () => void;
  onWebSocketEvent: (event: WebSocketEvent) => void;
  getInitialAppActions: () => DocAction[];
};

export function createSharedPhoenixSession(
  props: OpenAppSessionProps,
  { onClose, onWebSocketEvent: onWebSocketEventGlobal, getInitialAppActions }: CreateSharedSessionProps,
): SharedSession {
  try {
    const clients: Client[] = [];
    const progressMonitor = createProgressMonitor(clients);

    const onWebSocketEvent = (event: WebSocketEvent) => {
      onWebSocketEventGlobal(event);
      for (const client of clients) {
        client.onWebSocketEvent(event);
      }
    };
    const phoenixConnectionPromise = import("./qix-chunk-entrypoint.js").then((module) => {
      return module.createPhoenixConnectionEntrypoint(props, {
        onWebSocketEvent,
        getInitialAppActions,
        progressMonitor,
      });
    });

    const docPromise = phoenixConnectionPromise.then((phoenixConnection) => phoenixConnection.doc);

    const sharedSession: SharedSession = {
      getDoc: () => docPromise,
      addClient(client: Client) {
        const index = clients.indexOf(client, 0);
        if (index === -1) {
          clients.push(client);
        }
      },
      removeClient(client: Client, closeDelay: number): Promise<void> {
        if (clients.length === 1) {
          // The last client is about to leave. Make sure to turn off interest monitor
          void phoenixConnectionPromise.then((phoenixConnection) => {
            phoenixConnection.stopActivityMonitoring();
          });
        }

        const actuallyReomve = () => {
          const index = clients.indexOf(client, 0);
          if (index > -1) {
            clients.splice(index, 1);
          }

          if (clients.length === 0) {
            onClose(); // This callback will remove the shared session from the map of shared sessions
            void phoenixConnectionPromise.then((phoenixConnection) => {
              phoenixConnection.close();
            });
          }
        };

        if (closeDelay > 0) {
          return new Promise((resolve) => {
            setTimeout(() => {
              actuallyReomve();
              resolve();
            }, closeDelay);
          });
        }
        actuallyReomve();
        return Promise.resolve();
      },
      resume: async () => {
        void phoenixConnectionPromise.then((session) => session.resume());
      },
      initialActionsUpdated() {
        void phoenixConnectionPromise.then((session) => session.initialAppActionsUpdated());
      },
      clientsCount: () => clients.length,
    };
    return sharedSession;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    throw err;
  }
}
