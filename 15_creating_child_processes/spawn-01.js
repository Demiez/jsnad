'use strict';
const { spawn } = require('child_process');

const subprocess = spawn(process.execPath, [
  `-e`,
  `console.log('subprocess stdio output')`,
]);

console.log('pid is', subprocess.pid);

subprocess.stdout.pipe(process.stdout); // To get the STDOUT of the child process we pipe sp.stdout to the parent process.stdout
subprocess.on('close', (status) => {
  console.log('exit status was', status); // displays 0
});

const sp02 = spawn(process.execPath, [`-e`, `process.exit(1)`]);

sp02.stdout.pipe(process.stdout);
sp02.on('close', (status) => {
  console.log('exit status for 02 was', status); // displays 1
});
