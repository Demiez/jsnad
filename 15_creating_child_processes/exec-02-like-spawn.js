'use strict';
const { exec } = require('child_process');
// same outcome as the equivalent spawn example
const sp = exec(
  `"${process.execPath}" -e "console.log('subprocess stdio output')"`
);
console.log('pid is', sp.pid);

sp.stdout.pipe(process.stdout);
sp.on('close', (status) => {
  console.log('exit status was', status);
});
