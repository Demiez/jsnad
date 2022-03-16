require('mocha');
const { expect } = require('chai');
const store = require('../store');

const testData = {
  stringValue: 'some string',
  booleanValue: 'true',
  numberValue: 1,
  bufferValue: Buffer.alloc(10),
  errorMessage: 'input must be a buffer',
};

const testError = (error) => {
  expect(error).to.be.instanceOf(Error);
  expect(error).to.have.ownProperty('message');
  expect(error.message).to.eql(testData.errorMessage);
};

describe('Calls cb with error for not Buffer data', function () {
  it('should cb error if provided string value', () => {
    store(testData.stringValue, (error) => {
      expect(error).to.be.instanceOf(Error);
      expect(error).to.have.ownProperty('message');
      expect(error.message).to.eql(testData.errorMessage);
    });
  });

  it('should cb error if provided boolean value', () => {
    store(testData.booleanValue, (error) => {
      testError(error);
    });
  });

  it('should cb error if provided number value', () => {
    store(testData.numberValue, (error) => {
      testError(error);
    });
  });

  it('should cb error if provided empty [] or {}', () => {
    store([], (error) => {
      testError(error);
    });

    store({}, (error) => {
      testError(error);
    });
  });
});

describe('Correctly processes data with cb and timeout', function () {
  it('should return uppercased id with expected length', (done) => {
    const cb = (err, obj) => {
      expect(err).to.be.null;
      expect(obj.id).to.be.a('string').that.has.length(4);
      done();
    };

    store(testData.bufferValue, cb);
  });
});
