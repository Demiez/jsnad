const { join } = require('path');
const { chmodSync, readFileSync, writeFileSync } = require('fs');

const filePath = join(__dirname, '/files/out.txt');

writeFileSync(filePath, '1,2,3');

chmodSync(filePath, 0o000);

try {
  console.log(readFileSync(filePath, { encoding: 'utf-8' }));
} catch (e) {
  chmodSync(filePath, 0o666);
  console.error(e);
  // chmodSync(filePath, 0o666);
}

// console.log(readFileSync(filePath, { encoding: 'utf-8' }));
