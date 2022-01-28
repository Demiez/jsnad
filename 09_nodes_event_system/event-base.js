const { EventEmitter } = require('events');

class MyEmitter extends EventEmitter {
  constructor(opts = {}) {
    super(opts);
    this.name = opts.name;
  }

  destroy(err) {
    if (err) {
      this.emit('error', err);
    }
    this.emit('close');
  }
}

const emitter = new MyEmitter({ name: 'emitter' });

emitter.on('my-event', (value) => {
  console.log(value.a);
});

emitter.emit('my-event', { a: 'a' });

const ee = new EventEmitter();
ee.addListener('my-event', () => {
  console.log('1st');
});
ee.on('my-event', () => {
  console.log('2nd');
});
ee.prependListener('my-event', () => {
  console.log('0');
});
ee.once('my-event', () =>
  console.log('removed this listner once event has been fired')
);

ee.emit('my-event');
ee.emit('my-event');
