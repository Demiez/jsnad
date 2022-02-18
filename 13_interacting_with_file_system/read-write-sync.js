'use strict';
const { readFileSync, writeFileSync } = require('fs');
const { join } = require('path');

const readFilePath = join(__dirname, '/files', 'read.txt');

const contents = readFileSync(readFilePath);
console.log('binary Buffer contents \n', contents);
console.log('buffer converted to string \n', contents.toString());

const contentsWithEncoding = readFileSync(readFilePath, 'utf-8');
console.log('contents with encoding \n', contentsWithEncoding);

const writeFilePath = join(__dirname, '/files/write.txt');

writeFileSync(writeFilePath, contentsWithEncoding.toUpperCase());
