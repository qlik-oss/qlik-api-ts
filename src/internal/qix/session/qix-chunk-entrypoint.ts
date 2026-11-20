import type { OpenAppSessionProps } from "../qix-types";
import { createEnigmaSession } from "./enigma/enigma-session";
import { mixins } from "./common/mixins/index";
import {
  createPhoenixConnection,
  type PhoenixConnection,
  type PhoenixConnectionOwner,
} from "./phoenix/phoenix-connection";
import { createRpcObjectFactory, type RpcObjectFactory } from "./phoenix/rpc-object-factory";
import type { ProgressMonitor } from "./common/progress-monitor";
import schema from "./common/schema/engine-api";

let objectFactory: RpcObjectFactory;

export async function createPhoenixConnectionEntrypoint(
  openProps: OpenAppSessionProps,
  connectionwOwner: PhoenixConnectionOwner,
): Promise<PhoenixConnection> {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  objectFactory = objectFactory || createRpcObjectFactory(schema, mixins);
  return createPhoenixConnection(openProps, objectFactory, connectionwOwner);
}

export async function createEnigmaSessionEntrypoint(
  openProps: OpenAppSessionProps,
  monitor: ProgressMonitor,
): Promise<EnigmaJS.Session> {
  return createEnigmaSession(openProps, monitor);
}
