'use strict';
const { EventEmitter } = require('events');

process.nextTick(console.log, 'passed!');

const ee = new EventEmitter();

ee.addListener('error', (err) => {
  console.log(err.message);
});

ee.emit('error', Error('timeout'));
