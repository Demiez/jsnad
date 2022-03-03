'use strict';

console.log('initialized');

process.stdin.pipe(process.stdout);

// run in console (bash not working): node -p "crypto.randomBytes(100).toString('hex')" | node base-example.js
