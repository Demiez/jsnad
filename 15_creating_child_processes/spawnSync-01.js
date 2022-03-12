'use strict';
const { spawnSync } = require('child_process');

const result = spawnSync(process.execPath, [
  '-e',
  `console.log('subprocess stdio output')`,
]);

console.log('SpawnSyncReturns<Buffer> :\n', result);
console.log('stdout buffer to string :\n', result.stdout.toString());
