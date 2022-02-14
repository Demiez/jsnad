'use strict';
const fs = require('fs');
const path = require('path');

const writePath = path.join(__dirname, '/files/write.txt');

const writable = fs.createWriteStream(writePath);

writable.on('finish', () => {
  console.log('finished writing');
});

writable.write('A\n');
writable.write('B\n');
writable.write('C\n');

writable.end('nothing more to write');
