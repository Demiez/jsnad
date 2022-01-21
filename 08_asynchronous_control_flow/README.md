# Asynchronous control flow

### 3 types

- callbacks
- promises
- async/await

### Promises

A promise is an object that represents an asynchronous operation. It's either pending or settled, and if it is settled it's either resolved or rejected. Being able to treat an asynchronous operation as an object is a useful abstraction.<br>
If a promise is returned from a `then` handler, the then method will return that `Promise`, this allows for an easy serial execution pattern.<br>
If using `then` we need only one `catch`, because errors propagate.

### Promise.all and Promise.allSettled

`Promise.all` will reject if one of the promises fails, and any successfully resolved promises will be ignored. If we want more tolerance of individual errors `Promise.allSettled` can be used:
