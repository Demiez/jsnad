function f(n = 99) {
  if (n === 0) throw Error();
  f(n - 1);
}
f();

// node will-throw.js
// node --stack-trace-limit=200 will-throw.js
