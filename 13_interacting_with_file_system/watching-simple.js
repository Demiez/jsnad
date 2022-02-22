'use strict';
const { watch } = require('fs');

console.log('watching file events...');

watch('.', (eventName, filename) => {
  console.log(eventName, filename);
});
