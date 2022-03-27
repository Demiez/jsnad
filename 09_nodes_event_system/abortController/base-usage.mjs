import { EventEmitter, once } from 'events';

const myEvent = new EventEmitter();

await once(myEvent, 'event-happens'); // as once will produce promise, that is not resolved, until event fires
console.log('ping'); // ping is not logged
