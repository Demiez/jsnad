'use strict';

const uppercase = require('../uppercase');

const spyObj = { uppercase };

describe('should throw error if wrong data is provided', () => {
  const expectedError = new Error('input must be a string');

  it('should throw error if data is number', () => {
    expect(() => uppercase(2)).toThrowError(expectedError);
  });

  it('should throw error if data is boolean', () => {
    expect(() => uppercase(true)).toThrowError(expectedError);
  });
});

describe('should return correct data if string provided', () => {
  const functionSpy = jest.spyOn(spyObj, 'uppercase');
  const testString = 'this-is-a-test-string';
  const expectedResult = testString.toUpperCase();

  it('should return correct result', () => {
    const result = spyObj.uppercase(testString);

    expect(functionSpy).toHaveBeenCalledWith(testString);
    expect(functionSpy).toHaveReturned();
    expect(typeof result).toBe('string');
    expect(result).toBe(expectedResult);
  });
});
