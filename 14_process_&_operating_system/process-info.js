'use strict';
const process = require('process');

console.log('Current Directory', process.cwd());
console.log('Process Platform', process.platform);
console.log('Process ID', process.pid);
console.log('Environment variables', process.env);
