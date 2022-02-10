const stream = require('stream');

console.log(stream + ''); // function Stream(opts) {EE.call(this, opts);}
console.log(stream.prototype); // EventEmitter { pipe: [Function (anonymous)] }
console.log(Object.getPrototypeOf(stream)); // Function: EventEmitter
