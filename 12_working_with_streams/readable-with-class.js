'use strict';
const { Readable } = require('stream');

class myReadable extends Readable {
  data = ['some', 'data', 'to', 'read'];

  constructor() {
    super({
      encoding: 'utf-8',
      // objectMode: true,
      read() {
        if (this.data.length === 0) {
          this.push(null); // end-of-stream. At this point Node internals will cause the readable stream to emit the end event
        } else {
          this.push(this.data.shift());
        }
      },
    });

    this.on('data', (data) => {
      console.log('got data Buffer: ', data, data.toString());
    });

    this.on('end', () => {
      console.log('finished reading');
    });
  }
}

const readable = new myReadable();

// readable.on('data', (data) => {
//   console.log('got data Buffer: ', data, data.toString());
// });
// readable.on('end', () => {
//   console.log('finished reading');
// });
