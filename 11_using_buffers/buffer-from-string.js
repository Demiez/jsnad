const buffer = Buffer.from('Hello World');
console.log(buffer); // <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64>

const bufferEyes = Buffer.from('👀');
console.log(bufferEyes);
console.log(bufferEyes.toString());
console.log(bufferEyes + ''); // concatenating to empty string has the same effect as calling toString() method
console.log(bufferEyes.toString('hex')); // f09f9180
console.log(bufferEyes.toString('base64')); // 8J+RgA==
