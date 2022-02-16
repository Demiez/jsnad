const fs = require('fs');
const zlib = require('zlib');
const { finished, pipeline } = require('stream');

const readableStream = fs.createReadStream('./files/read.txt', 'utf8');
const writeableStream = fs.createWriteStream('./files/read.txt.gz');
const gzip = zlib.createGzip();

// readableStream.pipe(gzip).pipe(writeableStream);

// finished(writeableStream, () => console.log('Archiving is done'));

pipeline(readableStream, gzip, writeableStream, (err) => {
  if (err) {
    console.error('there was a socket error', err);
  }

  // finished utility can be safely removed,
  // because callback final function will be called if there's error or final stream is closed
  console.log('Archiving is done');
});
