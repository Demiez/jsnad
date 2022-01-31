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
  if (typeof amount !== 'number') {
    throw new TypeError('amount must be a number');
  }

  if (amount <= 0) {
    throw new RangeError('amount must be greater than zero');
  }
  if (amount % 2) {
    throw new OddError('amount', 'AMOUNT_ERROR');
  }
  return amount / 2;
}

[-1, 0, 1, 2, 3, 4, '1'].forEach((number) => {
  try {
    const result = doTask(number);
    console.log('result', result);
  } catch (err) {
    if (err instanceof TypeError) {
      console.error('wrong type');
    } else if (err instanceof RangeError) {
      console.error('out of range');
    } else if (err.code === 'AMOUNT_ERROR') {
      console.error('cannot be odd');
    } else {
      console.error('Unknown error', err);
    }
  }
});
