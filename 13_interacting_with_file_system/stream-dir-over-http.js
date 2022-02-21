'use strict';
const { createServer } = require('http');
const { Readable, Transform, pipeline } = require('stream');
const { opendir } = require('fs');

const createEntryStream = () => {
  let syntax = '[\n';

  return new Transform({
    writableObjectMode: true, // writableObjectMode is set to true because dirStream is an object stream
    readableObjectMode: false, // readableObjectMode is set to false because res is a binary stream
    // dirStream (we expect it to pass object stream) emits objects which contain a name property
    transform(entry, enc, next) {
      next(null, `${syntax} "${entry.name}"`);
      syntax = ',\n';
    },

    // The final option function is called before the stream ends, which allows for any cleanup or final data to send through the stream.
    // In the final function this.push is called in order to push some final bytes to the readable side of the transform stream.
    // It allows also to close JSON array
    final(cb) {
      this.push('\n]\n');
      cb(); // When done the callback (cb) is called to let the stream know we've finished any final processing in the final function
    },
  });
};

createServer((req, res) => {
  if (req.url !== '/') {
    res.statusCode = 404;
    res.end('Not Found');
    return;
  }

  opendir(__dirname, (err, dir) => {
    if (err) {
      res.statusCode = 500;
      res.end('Server Error');
      return;
    }

    const dirStream = Readable.from(dir);
    const entryStream = createEntryStream();

    // The res object represents the HTTP response and is also a writable stream!
    res.setHeader('Content-Type', 'application/json');

    pipeline(dirStream, entryStream, res, (err) => {
      if (err) console.error(err);
    });
  });
}).listen(3333, () => console.log(`server is running on 3333`));
