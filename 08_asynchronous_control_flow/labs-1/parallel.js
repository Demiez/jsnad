const print = (err, contents) => {
  if (err) {
    console.error(err);
  } else {
    console.log(contents);
  }
};

// C=>B=>A
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

const returnPromise = (cb) => Promise.resolve(cb(print));

// const promiseA = async () => new Promise((resolve, reject) => opA(print));
// const promiseB = async () =>
//   new Promise((resolve, reject) => resolve(opB(print)));
// const promiseC = async () =>
//   new Promise((resolve, reject) => resolve(opC(print)));

// const runAsync = async () =>
//   await Promise.allSettled([promiseA(), promiseB(), promiseC()]);

const runResolves = async () =>
  await Promise.allSettled([
    returnPromise(opA),
    returnPromise(opB),
    returnPromise(opC),
  ]);

// runAsync();
runResolves();
