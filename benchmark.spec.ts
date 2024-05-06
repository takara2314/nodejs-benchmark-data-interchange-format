import { Suite } from 'benchmark';
import { encode, decode } from '@msgpack/msgpack';
import { Payload } from './payload';
import sizeof from 'object-sizeof';

const suite = new Suite();

const baseData: Payload = {
  id: 123456789,
  users: Array.from({ length: 10 }, (_, i) => ({
    id: i,
    name: `John Doe ${i}`,
    email: `foo${i}@example.com`,
    registeredAt: new Date(),
  })),
  sentAt: new Date(),
}

const baseDataHuge: Payload = {
  id: 123456789,
  users: Array.from({ length: 10000 }, (_, i) => ({
    id: i,
    name: `John Doe ${i}`,
    email: `foo${i}@example.com`,
    registeredAt: new Date(),
  })),
  sentAt: new Date(),
}

const inputJSON = JSON.stringify(baseData);
const inputMessagePack = encode(baseData);
const inputProtocolBuffer = Payload.encode(Payload.create(baseData)).finish();

const inputJSONHuge = JSON.stringify(baseDataHuge);
const inputMessagePackHuge = encode(baseDataHuge);
const inputProtocolBufferHuge = Payload.encode(Payload.create(baseDataHuge)).finish();

function deserializeJSON(json: string): Payload {
  return JSON.parse(json) as Payload;
}

function deserializeMessagePack(buffer: Uint8Array): Payload {
  return decode(buffer) as Payload;
}

function deserializeProtocolBuffer(buffer: Uint8Array): Payload {
  return Payload.decode(buffer);
}

console.log('size of input JSON (users: 10):', sizeof(inputJSON));
console.log('size of input message pack (users: 10):', sizeof(inputMessagePack));
console.log('size of input protocol buffer (users: 10):', sizeof(inputProtocolBuffer));

console.log('size of input JSON (users: 10000):', sizeof(inputJSONHuge));
console.log('size of input message pack (users: 10000):', sizeof(inputMessagePackHuge));
console.log('size of input protocol buffer (users: 10000):', sizeof(inputProtocolBufferHuge));

suite
  .add('Deserialize JSON (users: 10)', () => {
    deserializeJSON(inputJSON);
  })
  .add('Deserialize JSON (users: 10000)', () => {
    deserializeJSON(inputJSONHuge);
  })
  .add('Deserialize MessagePack (users: 10)', () => {
    deserializeMessagePack(inputMessagePack);
  })
  .add('Deserialize MessagePack (users: 10000)', () => {
    deserializeMessagePack(inputMessagePackHuge);
  })
  .add('Deserialize Protocol Buffer (users: 10)', () => {
    deserializeProtocolBuffer(inputProtocolBuffer);
  })
  .add('Deserialize Protocol Buffer (users: 10000)', () => {
    deserializeProtocolBuffer(inputProtocolBufferHuge);
  })
  .on('cycle', (event: any) => {
    const benchmark = event.target;
    console.log(benchmark.toString());
  })
  .on('complete', () => console.log('Benchmark suite complete.'))
  .run({ async: true });
