# Node.js Benchmark Data Interchange Format

for benchmark self-practice.

**Maybe, Tadashikunai (maybe incorrect inspection result)**

# Computer
forbidden

# Softwares
- Node.js v20.12.0
- protobuf v26.1

# Protocol Buffer codegen
```sh
protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=. ./payloa
d.proto
```

# Benchmark start
```sh
npm run start
```

# Object size
```
size of input JSON (users: 10): 1056
size of input message pack (users: 10): 703
size of input protocol buffer (users: 10): 497
size of input JSON (users: 10000): 1066744
size of input message pack (users: 10000): 747431
size of input protocol buffer (users: 10000): 547669
```

# Benchmark result
```
Deserialize JSON (users: 10) x 371,201 ops/sec ±0.39% (89 runs sampled)
Deserialize JSON (users: 10000) x 492 ops/sec ±1.50% (91 runs sampled)
Deserialize MessagePack (users: 10) x 192,721 ops/sec ±1.28% (98 runs sampled)
Deserialize MessagePack (users: 10000) x 190 ops/sec ±0.63% (90 runs sampled)
Deserialize Protocol Buffer (users: 10) x 256,475 ops/sec ±2.81% (92 runs sampled)
Deserialize Protocol Buffer (users: 10000) x 264 ops/sec ±2.53% (86 runs sampled)
```
