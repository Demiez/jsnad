'use strict';
const { join } = require('path');
const { readFile, writeFile } = require('fs/promises');

async function run() {
  const contents = await readFile(__filename, { encoding: 'utf8' });

  const outPath = join(__dirname, 'files/out.txt');

  await writeFile(outPath, contents.toUpperCase());
}

run().catch(console.error);
