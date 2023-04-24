// https://github.com/nodejs/node-addon-examples/tree/main/1_hello_world/node-addon-api
const path = '/node-addon-examples/1_hello_world/node-addon-api/build/Release/hello.node';
var addon = require(path);
console.log(addon.hello()); // 'world'
