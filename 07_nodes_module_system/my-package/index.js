'use strict';
const pino = require('pino');
const { upper } = require('./format');
const logger = pino();
logger.info(upper('my-package started'));
process.stdin.resume();
