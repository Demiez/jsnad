const fs = require('fs');
const { join } = require('path');

const filePath = join(__dirname, '/files/new-file.txt');

fs.open(filePath, (err, content) => {});

fs.writeFileSync(filePath, Buffer.from('1,2,3'));
