const fs = require('fs');
const zlib = require('zlib');
const { finished } = require('stream');

const readableStream = fs.createReadStream('./files/read.txt', 'utf8');
const writeableStream = fs.createWriteStream('./files/read.txt.gz');
const gzip = zlib.createGzip();

readableStream.pipe(gzip).pipe(writeableStream);

finished(writeableStream, () => console.log('Archiving is done'));
