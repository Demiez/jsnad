'use strict';
const { Transform } = require('stream');
const { scrypt } = require('crypto');

class CryptoTransformer extends Transform {
  constructor() {
    super({
      decodeStrings: false,
      encoding: 'hex',
      transform(chunk, enc, next) {
        scrypt(chunk, 'a-salt', 32, (err, key) => {
          if (err) {
            next(err);
            return;
          }
          next(null, key);
        });
      },
    });
  }
}

const crypto = new CryptoTransformer();

crypto.on('data', (data) => console.log(data));

crypto.write('A');

class UpperTransformer extends Transform {
  constructor() {
    super({
      transform(chunk, enc, next) {
        const str = chunk.toString('utf-8').toUpperCase();
        next(null, str);
      },
    });
  }
}

const upper = new UpperTransformer();

upper.on('data', (data) => console.log(data.toString()));

upper.write('a-a');
