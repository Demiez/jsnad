'use strict';
const fs = require('fs');
const path = require('path');

const readFilePath = path.join(__dirname, 'files/read.txt');

const readable = fs.createReadStream(readFilePath);

readable.on('data', (data) => {
  console.log(' got data', data); // <Buffer 52 65 61 64 20 74 78 74 20 64 61 74 61>
  console.log(' converted data to string: ', data.toString()); // Read txt data
});

readable.on('end', () => {
  console.log(' finished reading');
});
