const assert = require('assert');

const add = require('./add-function.js');
const result = add(2, 2);

assert.equal(typeof result, 'number');
assert.equal(result, 4);

assert.strictEqual(add(2, 2), 4);
