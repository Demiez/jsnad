import { setTimeout } from 'timers/promises';

const ac = new AbortController();
const { signal } = ac;
signal.addEventListener('abort', () => console.log('aborted'), { once: true });

const timeout = setTimeout(1000, 'will NOT be logged', { signal });

setImmediate(() => {
  ac.abort();
});

try {
  console.log(await timeout);
} catch (err) {
  // ignore abort errors:
  if (err.code !== 'ABORT_ERR') throw err;
}
