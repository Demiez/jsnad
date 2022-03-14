const assert = require('assert');
const add = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw Error('inputs must be numbers');
  }
  return a + b;
};

// invocation of add is wrapped inside another function. This is because the assert.throws and assert.doesNotThrow methods have to be passed a function, which they can then wrap and call to see if a throw occurs or not.
assert.throws(() => add('5', '5'), Error('inputs must be numbers'));
assert.doesNotThrow(() => add(5, 5));
