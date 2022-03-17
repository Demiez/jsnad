const store = require('../store');

const testData = {
  stringValue: 'string-value',
  booleanValue: true,
  numberValue: 1,
  errorMessage: 'input must be a buffer',
  bufferValue: Buffer.alloc(10),
  idLength: 4,
};

describe('Calls cb with error for not Buffer data', function () {
  it('should cb error if provided string value', () => {
    store(testData.stringValue, (error) => {
      expect(error).toStrictEqual(Error(testData.errorMessage));
    });
  });

  it('should cb error if provided boolean value', () => {
    store(testData.booleanValue, (error) => {
      expect(error).toStrictEqual(Error(testData.errorMessage));
    });
  });

  it('should cb error if provided number value', () => {
    store(testData.numberValue, (error) => {
      expect(error).toStrictEqual(Error(testData.errorMessage));
    });
  });

  it('should cb error if provided empty [] or {}', () => {
    store([], (error) => {
      expect(error).toStrictEqual(Error(testData.errorMessage));
    });

    store({}, (error) => {
      expect(error).toStrictEqual(Error(testData.errorMessage));
    });
  });
});

describe('Correctly processes data with cb and timeout', function () {
  it('should return uppercased id with expected length', () => {
    const cb = (err, obj) => {
      expect(err).toBe(null);
      expect(obj).toHaveProperty('id');
      expect(typeof obj.id).toBe('string');
      expect(obj.id.length).toStrictEqual(testData.idLength);
    };

    store(testData.bufferValue, cb);
  });
});
