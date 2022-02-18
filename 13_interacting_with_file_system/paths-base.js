'use strict';
const { join, isAbsolute, relative, resolve, normalize } = require('path');

console.log('current filename', __filename);
console.log('current dirname', __dirname);

const filepathWithJoin = join(__dirname, 'paths-base.js');

console.log('current file with join', filepathWithJoin);
console.log('this path is absolute', isAbsolute(filepathWithJoin));

console.log(
  'calculated relative path is',
  relative(__dirname, filepathWithJoin)
);

console.log(resolve(__dirname, '../../'));

console.log('Normalized path', normalize(join(__dirname, '../')));
