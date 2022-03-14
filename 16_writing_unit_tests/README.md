# WRITING UNIT TESTS

### Assertion

Can be performed either with `assert` (`require('assert')`) or expect (`require('expect')` fluid API from different libs, jest for instance)<br>

The core `assert` module exports a function that will throw an `AssertionError` (class `assert.AssertionError`) when the value passed to it is falsy (meaning that the value can be coerced to false with !!val)<br>

Core `assert` module methods are:

- `assert.ok(val)` – the same as assert(val)
- `assert.equal(val1, val2)` – coercive equal, val1 == val2
- `assert.notEqual(val1, val2)` – coercive unequal, val1 != val2
- `assert.strictEqual(val1, val2)` – strict equal, val1 === val2
- `assert.notStrictEqual(val1, val2)` – strict unequal, val1 !== val2
- `assert.deepEqual(obj1, obj2)` – coercive equal for all values in an object
- `assert.notDeepEqual(obj1, obj2)` – coercive unequal for all values in an object
- `assert.deepStrictEqual(obj1, obj2)` – strict equal for all values in an object
- `assert.notDeepStrictEqual(obj1, obj2)` – strict unequal for all values in an object
- `assert.throws(function)` – assert that a function throws
- `assert.doesNotThrow(function)` – assert that a function doesn't throw
- `assert.rejects(promise|async function)` – assert promise or returned promise rejects
- `assert.doesNotReject(promise|async function)` – assert promise or returned promise resolves
- `assert.ifError(err)` – check that an error object is falsey
- `assert.match(string, regex)` – test a string against a regular expression
- `assert.doesNotMatch(string, regex)` – test that a string fails a regular expression
- `assert.fail()` – force an AssertionError to be thrown

The assert module also exposes a `strict` object where namespaces for non-strict methods are strict (equal to usage of `assert.strictEqual()`)

Deep equality methods, such as `assert.deepEqual()` traverse object structures and then perform equality checks on any primitives in those objects
