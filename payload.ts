// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.174.0
//   protoc               v5.26.1
// source: payload.proto

/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Timestamp } from "./google/protobuf/timestamp";

export const protobufPackage = "benchmark";

export interface Payload {
  id: number;
  users: User[];
  sentAt: Date | undefined;
}

export interface User {
  id: number;
  name: string;
  email: string;
  registeredAt: Date | undefined;
}

function createBasePayload(): Payload {
  return { id: 0, users: [], sentAt: undefined };
}

export const Payload = {
  encode(message: Payload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    for (const v of message.users) {
      User.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.sentAt !== undefined) {
      Timestamp.encode(toTimestamp(message.sentAt), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Payload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.users.push(User.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.sentAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Payload {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      users: globalThis.Array.isArray(object?.users) ? object.users.map((e: any) => User.fromJSON(e)) : [],
      sentAt: isSet(object.sentAt) ? fromJsonTimestamp(object.sentAt) : undefined,
    };
  },

  toJSON(message: Payload): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.users?.length) {
      obj.users = message.users.map((e) => User.toJSON(e));
    }
    if (message.sentAt !== undefined) {
      obj.sentAt = message.sentAt.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Payload>, I>>(base?: I): Payload {
    return Payload.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Payload>, I>>(object: I): Payload {
    const message = createBasePayload();
    message.id = object.id ?? 0;
    message.users = object.users?.map((e) => User.fromPartial(e)) || [];
    message.sentAt = object.sentAt ?? undefined;
    return message;
  },
};

function createBaseUser(): User {
  return { id: 0, name: "", email: "", registeredAt: undefined };
}

export const User = {
  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.email !== "") {
      writer.uint32(26).string(message.email);
    }
    if (message.registeredAt !== undefined) {
      Timestamp.encode(toTimestamp(message.registeredAt), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.email = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.registeredAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): User {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      registeredAt: isSet(object.registeredAt) ? fromJsonTimestamp(object.registeredAt) : undefined,
    };
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.registeredAt !== undefined) {
      obj.registeredAt = message.registeredAt.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<User>, I>>(base?: I): User {
    return User.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<User>, I>>(object: I): User {
    const message = createBaseUser();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.email = object.email ?? "";
    message.registeredAt = object.registeredAt ?? undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function toTimestamp(date: Date): Timestamp {
  const seconds = Math.trunc(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
