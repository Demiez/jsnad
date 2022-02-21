'use strict';
const { pipeline, Transform } = require('stream');
const { join } = require('path');
const { createReadStream, createWriteStream } = require('fs');

const createUppercaseStream = () => {
  return new Transform({
    transform(chunk, enc, next) {
      const uppercased = chunk.toString().toUpperCase();

      next(null, uppercased);
    },
  });
};

pipeline(
  createReadStream(__filename),
  createUppercaseStream(),
  createWriteStream(join(__dirname, 'files/out-pipe.txt')),
  (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('finished writing through transform');
  }
);
