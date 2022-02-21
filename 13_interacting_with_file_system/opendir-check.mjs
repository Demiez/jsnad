import { opendir } from 'fs/promises';
// node --experimental-modules opendir-check.mjs

try {
  const dir = await opendir('./');
  for await (const dirent of dir) console.log(dirent.name);
} catch (err) {
  console.error(err);
}
