'use strict';
const { Transform } = require('stream');

process.stderr.write(process.stdin.isTTY ? 'terminal\n' : 'piped to\n');

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

// run in console and write to file (bash not working):
// node -p "crypto.randomBytes(100).toString('hex')" | node example-uppercase-stderr.js > out.txt - `pipe to` is printed to console because
// node -p "crypto.randomBytes(100).toString('hex')" | node example-uppercase.js > out.txt - `pipe to` won't printed to console

// To redirect error to another file we can use 2>: node -p "crypto.randomBytes(100).toString('hex')" | node example-uppercase-stderr.js > out.txt 2> err.txt
