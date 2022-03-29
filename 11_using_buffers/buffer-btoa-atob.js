const { Buffer } = require('buffer');
const bufferAPI = require('buffer');

const encodedData = bufferAPI.btoa('string');
const decodedData = bufferAPI.atob(encodedData);
console.log(encodedData);
console.log(decodedData);

const encodedDataBuffer = Buffer.from('string', 'base64');
const decodedDataBuffer = encodedDataBuffer.toString('base64');
console.log(encodedDataBuffer);
console.log(decodedDataBuffer);
