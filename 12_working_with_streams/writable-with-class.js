'use strict';

const { Writable } = require('stream');

class myWritable extends Writable {
  data = [];

  constructor(decodeStrings = true) {
    super({
      decodeStrings,
      write(data, encoding, next) {
        this.data.push(data);
        next();
      },
    });

    this.on('data', (chunk) => console.log(chunk));

    this.on('finish', () =>
      console.log(
        'finished',
        decodeStrings ? this.data.map((buffer) => buffer.toString()) : this.data
      )
    );
  }
}

const writable = new myWritable();

writable.write('A');
writable.write('B');
writable.end('C');

const writableWithStrings = new myWritable(false);

writableWithStrings.write('Z');
writableWithStrings.write('Y');
writableWithStrings.end('X');
