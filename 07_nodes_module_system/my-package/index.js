'use strict';
const { upper } = require('./format');

// we check if file is the main module (both checks work)
if (require.main === module && module.parent === null) {
  const pino = require('pino');
  const logger = pino();
  logger.info(upper('my-package started'));
  process.stdin.resume();
} else {
  const reverseAndUpper = (str) => {
    return upper(str).split('').reverse().join('');
  };
  module.exports = reverseAndUpper;
}

// index.js has two operational modules
// node -p "require('./index.js')('hello')" - If it is loaded as a module, it will export a function that reverses and upper-cases a string
