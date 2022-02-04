class OddError extends Error {
  constructor(varName = '', code) {
    super(varName + ' must be even');

    if (code) {
      this.code = code;
    }
  }
  get name() {
    return 'OddError [' + this.code + ']';
  }
}

function doTask(amount) {
  return new Promise((resolve, reject) => {
    if (typeof amount !== 'number') {
      reject(new TypeError('amount must be a number'));
      return;
    }
    if (amount <= 0) {
      reject(new RangeError('amount must be greater than zero'));
      return;
    }
    if (amount % 2) {
      reject(new OddError('amount'));
      return;
    }
    resolve(amount / 2);
  });
}

doTask(3);
