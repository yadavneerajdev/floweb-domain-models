/* eslint-disable */
// GENERATED from schemas/ by scripts/generate-ts.cjs — do not edit by hand.

export interface CollaborationProtocolSchema {
  /**
   * Any message a client may send
   */
  clientMessage?:
    | CollabAuth
    | CollabCursorClient
    | CollabChangeClient
    | CollabCursorHide
    | CollabSnapshotClient
    | CollabTypingClient
    | CollabPing;
  /**
   * Any message the server may send
   */
  serverMessage?:
    | CollabPresence
    | CollabUserJoined
    | CollabUserLeft
    | CollabCursorServer
    | CollabChangeServer
    | CollabSnapshotServer
    | CollabTypingServer
    | CollabPong;
  CollabUser?: CollabUser;
  CollabOp?: CollabOp;
  CollabAuth?: CollabAuth;
  CollabCursorClient?: CollabCursorClient;
  CollabChangeClient?: CollabChangeClient;
  CollabCursorHide?: CollabCursorHide;
  CollabSnapshotClient?: CollabSnapshotClient;
  CollabTypingClient?: CollabTypingClient;
  CollabPing?: CollabPing;
  CollabPresence?: CollabPresence;
  CollabUserJoined?: CollabUserJoined;
  CollabUserLeft?: CollabUserLeft;
  CollabCursorServer?: CollabCursorServer;
  CollabChangeServer?: CollabChangeServer;
  CollabSnapshotServer?: CollabSnapshotServer;
  CollabTypingServer?: CollabTypingServer;
  CollabPong?: CollabPong;
}
/**
 * client->server: first message; authenticates the socket (5s timeout)
 */
export interface CollabAuth {
  type: "auth";
  /**
   * JWT access token
   */
  token: string;
}
/**
 * client->server: cursor selection and/or pointer position
 */
export interface CollabCursorClient {
  type: "cursor";
  nodeId?: string | null;
  x?: number;
  y?: number;
  selectedNodes?: string[];
}
/**
 * client->server: a batch of edit operations
 */
export interface CollabChangeClient {
  type: "change";
  ops: CollabOp[];
}
/**
 * A single collaborative edit operation. Discriminated by `type`; payload fields (node/edge/variable/patch) are opaque and relayed unvalidated.
 */
export interface CollabOp {
  type:
    | "add_node"
    | "update_node"
    | "delete_node"
    | "add_edge"
    | "delete_edge"
    | "add_variable"
    | "update_variable"
    | "delete_variable"
    | "add_parameter"
    | "update_parameter"
    | "delete_parameter";
  [k: string]: unknown;
}
/**
 * client->server: hide this user's cursor
 */
export interface CollabCursorHide {
  type: "cursor_hide";
}
/**
 * client->server: room leader sends current state to a newly joined peer
 */
export interface CollabSnapshotClient {
  type: "snapshot";
  /**
   * Target userId
   */
  to: string;
  /**
   * Opaque snapshot of nodes/edges/variables/parameters
   */
  state: {
    [k: string]: unknown;
  };
}
/**
 * client->server: user is editing a node (nodeId null on blur)
 */
export interface CollabTypingClient {
  type: "typing";
  nodeId?: string | null;
}
/**
 * client->server: keepalive (every 25s)
 */
export interface CollabPing {
  type: "ping";
}
/**
 * server->client: full roster sent on join
 */
export interface CollabPresence {
  type: "presence";
  users: CollabUser[];
}
/**
 * A participant in a collab room
 */
export interface CollabUser {
  id: string;
  name: string;
  /**
   * Hex color, e.g. #3b82f6
   */
  color: string;
  /**
   * Currently focused node, or null
   */
  nodeId: string | null;
}
/**
 * server->client: broadcast when a peer joins
 */
export interface CollabUserJoined {
  type: "user_joined";
  /**
   * The joiner (no nodeId on this object)
   */
  user: {
    id: string;
    name: string;
    color: string;
  };
  users: CollabUser[];
}
/**
 * server->client: broadcast when a peer leaves
 */
export interface CollabUserLeft {
  type: "user_left";
  userId: string;
  userName: string;
  users: CollabUser[];
}
/**
 * server->client: relayed cursor with sender identity
 */
export interface CollabCursorServer {
  type: "cursor";
  userId: string;
  userName: string;
  userColor: string;
  nodeId: string | null;
  x: number | null;
  y: number | null;
  selectedNodes: string[];
}
/**
 * server->client: relayed change with sender and room version
 */
export interface CollabChangeServer {
  type: "change";
  ops: CollabOp[];
  userId: string;
  /**
   * Monotonic room version
   */
  version: number;
}
/**
 * server->client: snapshot delivered to the target peer
 */
export interface CollabSnapshotServer {
  type: "snapshot";
  state: {
    [k: string]: unknown;
  };
  version: number;
}
/**
 * server->client: relayed typing indicator with sender identity
 */
export interface CollabTypingServer {
  type: "typing";
  userId: string;
  userName: string;
  userColor: string;
  nodeId: string | null;
}
/**
 * server->client: reply to ping
 */
export interface CollabPong {
  type: "pong";
}
