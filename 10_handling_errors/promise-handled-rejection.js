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
      reject(new OddError('amount', 'ERR_MUST_BE_EVEN'));
      return;
    }
    resolve(amount / 2);
  });
}

doTask(3)
  .then((result) => {
    console.log('result', result);
  })
  .catch((err) => {
    if (err.code === 'ERR_AMOUNT_MUST_BE_NUMBER') {
      console.error('wrong type');
    } else if (err.code === 'ERRO_AMOUNT_MUST_EXCEED_ZERO') {
      console.error('out of range');
    } else if (err.code === 'ERR_MUST_BE_EVEN') {
      console.error('cannot be odd');
    } else {
      console.error('Unknown error', err);
    }
  });
