const { Buffer } = require('buffer');

const buffer = Buffer.alloc(16);

console.log(Buffer.isBuffer(buffer));
console.log(buffer.length);

buffer.write('hello');

for (const bufValue of buffer.values()) {
  console.log(bufValue);
}

console.log(buffer.toString());

const bufExplicitValues = Buffer.from([104, 101]);

console.log(bufExplicitValues.toString());
