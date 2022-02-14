'use strict';
const { Readable } = require('stream');

const createReadStream = () => {
  const data = ['some', 'data', 'to', 'read'];

  return new Readable({
    read() {
      if (data.length === 0) {
        this.push(null); // end-of-stream. At this point Node internals will cause the readable stream to emit the end event
      } else {
        this.push(data.shift());
      }
    },
  });
};

const readable = createReadStream();

readable.on('data', (data) => {
  console.log('got data', data);
});
readable.on('end', () => {
  console.log('finished reading');
});

const createReadStreamWithEncoding = () => {
  const data = ['some', 'data', 'to', 'read'];

  return new Readable({
    encoding: 'utf-8', // string is pushed to the readable stream, converted to a buffer and then decoded to a string using UTF8
    read() {
      if (data.length === 0) {
        this.push(null);
      } else {
        this.push(data.shift());
      }
    },
  });
};

const readableWithEncoding = createReadStreamWithEncoding();

readableWithEncoding.on('data', (data) => {
  console.log('got utf-8 data', data);
});
readableWithEncoding.on('end', () => {
  console.log('finished reading utf-8');
});

const createReadStreamWithTrueObjectMode = () => {
  const data = ['some', 'data', 'to', 'read'];

  return new Readable({
    objectMode: true, // string is being sent from the readable stream without converting to a buffer first
    read() {
      if (data.length === 0) {
        this.push(null);
      } else {
        this.push(data.shift());
      }
    },
  });
};

const readableWithTrueObjectMode = createReadStreamWithTrueObjectMode();

readableWithTrueObjectMode.on('data', (data) => {
  console.log('got object data (not using buffer)', data);
});
readableWithTrueObjectMode.on('end', () => {
  console.log('finished reading object data (not using buffer)');
});
