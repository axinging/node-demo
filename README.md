
## Use a .not file

### use-dotnode: simplest form
```
const path = '/node-addon-examples/1_hello_world/node-addon-api/build/Release/hello.node';
var addon = require(path);
console.log(addon.hello()); // 'world'
```

### use-dotnode
This is almost the same as use-dotnode. But this willnot print a `hello`, this will do a WebGPu computing.
```
const path = '/yourfolder/dawn.node';
var gpuProviderModule = require(path);
// WebGPU code here.
```

### bindings-example
Besides `require`, npm package `bindings` can also be used to load a .node file.
```
const path = '/dawn/out/dawn.node';
// const gpuProviderModule = require(path);
const gpuProviderModule = require('bindings')('dawn');
```

## Writing a cpp node addon

https://github.com/nodejs/node-addon-examples/tree/main/1_hello_world/node-addon-api

## WebGPU and TFJS on node

https://github.com/axinging/webgpu-node


