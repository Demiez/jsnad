'use strict';
const { spawnSync } = require('child_process');

spawnSync(
  process.execPath,
  ['-e', `console.error('err output'); process.stdin.pipe(process.stdout)`],
  {
    input: 'this input will become output\n',
    stdio: ['pipe', 'inherit', 'ignore'], // STDERR is still ignored
  }
);

// sp.stdin.write('this input will become output\n'); - not needed now
