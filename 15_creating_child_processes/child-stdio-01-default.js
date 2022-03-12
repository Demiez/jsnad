'use strict';
const { spawn } = require('child_process');

const sp = spawn(
  process.execPath,
  ['-e', `console.error('err output'); process.stdin.pipe(process.stdout)`],
  { stdio: ['pipe', 'pipe', 'pipe'] } // default stdio setting, set explicitly
);

// piping the subprocess STDOUT to the parent process STDOUT, STDERR to STDOUT also
sp.stdout.pipe(process.stdout);
sp.stderr.pipe(process.stdout);
sp.stdin.write('this input will become output\n');
sp.stdin.end(); // ends the input stream, allowing the child process to exit which in turn allows the parent process to exit.
