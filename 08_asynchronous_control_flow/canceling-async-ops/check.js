const { promisify } = require('util');

const promise = promisify(() =>
  setTimeout(() => console.log('logging-promise'), 200)
);

const timeoutFunc = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve(console.log('logging')), 200)
  );

const timeoutResolve = () =>
  Promise.resolve(
    setTimeout(() => console.log('logging-resolve')),
    200
  );

const awaitForTimeout = async () => {
  await timeoutResolve();
  await timeoutFunc();
  // await promise();
  console.log('done');
};

awaitForTimeout();
