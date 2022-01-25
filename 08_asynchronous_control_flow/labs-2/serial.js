'use strict';
const { promisify } = require('util');

const print = (err, contents) => {
  if (err) {
    console.error(err);
  } else {
    console.log(contents);
  }
};

const printHelper = (value) => print(null, value);

const opA = (cb) => {
  setTimeout(() => {
    cb(null, 'A');
  }, 500);
};

const opB = (cb) => {
  setTimeout(() => {
    cb(null, 'B');
  }, 250);
};

const opC = (cb) => {
  setTimeout(() => {
    cb(null, 'C');
  }, 125);
};

const pA = promisify(opA);
const pB = promisify(opB);
const pC = promisify(opC);

// pA()
//   .then(printHelper)
//   .then(() => pB())
//   .then(printHelper)
//   .then(() => pC())
//   .then(printHelper);

// async/await variant

const run = async () => {
  await pA().then(print);
  await pB().then(print);
  await pC().then(print);
};

run();
