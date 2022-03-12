'use strict';
const { execSync } = require('child_process');

// the command being executed happens to be the node binary
const output = execSync(`node -e "console.log('subprocess stdio output')"`);

console.log(output.toString());
