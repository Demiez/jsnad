'use strict';
const { join } = require('path');
const { readFileSync, writeFileSync } = require('fs');

const contents = readFileSync(__filename, { encoding: 'utf8' });

writeFileSync(join(__dirname, 'files/new-file.txt'), contents.toUpperCase(), {
  flag: 'a',
});
