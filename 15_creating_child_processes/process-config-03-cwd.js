'use strict';
const { IS_CHILD } = process.env;
/*
File is executed twice. Once as a parent process and then once as a child process. 

The child process is spawned by passing __filename, inside the arguments array passed to spawn. This means the child process will run node with the path to the current file.
*/

if (IS_CHILD) {
  console.log('Subprocess cwd:', process.cwd());
  console.log('env', process.env);
} else {
  const { parse } = require('path');
  const { root } = parse(process.cwd());
  const { spawn } = require('child_process');

  const sp = spawn(process.execPath, [__filename], {
    cwd: root,
    env: { IS_CHILD: '1' },
  });

  sp.stdout.pipe(process.stdout);
}
