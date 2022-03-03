'use strict';
const { Transform } = require('stream');

console.log(process.stdin.isTTY ? 'terminal' : 'piped to');

const createUppercaseStream = () => {
  return new Transform({
    transform(chunk, enc, next) {
      const uppercased = chunk.toString().toUpperCase();
      next(null, uppercased);
    },
  });
};

const uppercase = createUppercaseStream();

process.stdin.pipe(uppercase).pipe(process.stdout);

// run in console (bash not working): node -p "crypto.randomBytes(100).toString('hex')" | node example-uppercase.js
