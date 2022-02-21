'use strict';
const { join } = require('path');
const { chmodSync, readFile, writeFile } = require('fs');

const outPath = join(__dirname, 'files/out.txt');

chmodSync(outPath, 0o765);

readFile(__filename, { encoding: 'utf8' }, (err, contents) => {
  if (err) {
    console.error(err);
    return;
  }

  writeFile(outPath, contents.toUpperCase(), (err) => {
    if (err) {
      console.error(err);
    }
  });
});
