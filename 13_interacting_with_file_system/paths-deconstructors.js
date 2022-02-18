'use strict';
// deconstructors:
const { parse, basename, dirname, extname } = require('path');
// other methods used
const { format } = require('path');

const parsedFilename = parse(__filename);
console.log('filename parsed:', parsedFilename); // returns object with path props { root: '', dir: '', base: 'paths-deconstructors.js', ext: '.js', name: 'paths-deconstructors'}

console.log('formatted path', format(parsedFilename));

console.log('filename basename:', basename(__filename));
console.log('filename dirname:', dirname(__filename));
console.log('filename extname:', extname(__filename));
