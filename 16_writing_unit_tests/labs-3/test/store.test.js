const store = require('../store');
// global.setTimeout = require('timers').setTimeout;

const testData = {
  stringValue: 'string-value',
  booleanValue: true,
  numberValue: 1,
  errorMessage: 'input must be a buffer',
  bufferValue: Buffer.alloc(10),
  idLength: 4,
};

describe('Should throw error if called with wrong data', () => {
  it('should throw error if called with string value', async () => {
    await expect(store(testData.stringValue)).rejects.toStrictEqual(
      Error(testData.errorMessage)
    );
  });

  it('should throw error if called with boolean value', async () => {
    await expect(store(testData.booleanValue)).rejects.toStrictEqual(
      Error(testData.errorMessage)
    );
  });

  it('should throw error if called with number value', async () => {
    await expect(store(testData.numberValue)).rejects.toStrictEqual(
      Error(testData.errorMessage)
    );
  });

  it('should throw error if called with empty [] or {}', async () => {
    await expect(store([])).rejects.toStrictEqual(Error(testData.errorMessage));
    await expect(store({})).rejects.toStrictEqual(Error(testData.errorMessage));
  });
});

describe('Correctly processes Buffer data and returns result', function () {
  it('should return result with id of type string with expected length', async () => {
    const result = await store(testData.bufferValue);

    expect(typeof result).toBe('object');
    expect(result).toHaveProperty('id');
    expect(typeof result.id).toBe('string');
    expect(result.id.length).toStrictEqual(testData.idLength);
  });
});
