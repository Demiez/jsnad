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

doTask(3);