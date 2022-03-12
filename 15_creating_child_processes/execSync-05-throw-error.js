'use strict';
const { execSync } = require('child_process');

try {
  execSync(`"${process.execPath}" -e "throw Error('ERROR_THROWN')"`);
} catch (err) {
  console.error('CAUGHT ERROR:', err);
}
