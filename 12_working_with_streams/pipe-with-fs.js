const fs = require('fs');

const readableStream = fs.createReadStream('./files/read.txt', 'utf8');
const writeableStream = fs.createWriteStream('./files/write.txt');

// readableStream.on('data', function (chunk) {
//   writeableStream.write(chunk);
// });

// Data listner is substituted by pipe method:
readableStream.pipe(writeableStream);
