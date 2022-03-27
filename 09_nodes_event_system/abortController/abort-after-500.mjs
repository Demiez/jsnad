import { once, EventEmitter } from 'events';
import { setTimeout } from 'timers/promises';

const uneventful = new EventEmitter();
const ac = new AbortController();

const { signal } = ac;

setTimeout(500).then(() => ac.abort());

try {
  await once(uneventful, 'ping', { signal });
  console.log('pinged!');
} catch (err) {
  // ignore abort errors:
  if (err.code !== 'ABORT_ERR') throw err;
  console.log('canceled');
}
