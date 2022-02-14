'use strict';
const { Writable } = require('stream');

const createWriteStream = (data) => {
  return new Writable({
    write(chunk, enc, next) {
      data.push(chunk);
      next();
    },
  });
};

const data = [];

const writable = createWriteStream(data);

writable.on('finish', (chunk) => {
  console.log(
    'finished writing',
    data
  ); /* finished writing [
		<Buffer 41 0a>,
		<Buffer 42 0a>,
		<Buffer 43 0a>,
		<Buffer 6e 6f 74 68 69 6e 67 20 6d 6f 72 65 20 74 6f 20 77 72 69 74 65>
	]*/
});

writable.write('A\n');
writable.write('B\n');
writable.write('C\n');

writable.end('nothing more to write');

const createWriteStreamWithoutDecodingString = (data) => {
  return new Writable({
    decodeStrings: false,
    write(chunk, enc, next) {
      data.push(chunk);
      next();
    },
  });
};
const dataOfStrings = [];
const writableWithStrings = createWriteStreamWithoutDecodingString(
  dataOfStrings
);

writableWithStrings.on('finish', () => {
  console.log('finished writing', dataOfStrings); // finished writing [ 'A\n', 'B\n', 'C\n', 'nothing more to write' ]
});

writableWithStrings.write('A\n');
writableWithStrings.write('B\n');
writableWithStrings.write('C\n');

writableWithStrings.end('nothing more to write');

const createWriteStreamToAcceptAnyJSData = (data) => {
  return new Writable({
    objectMode: true, // if not set, passing anything except of string to Buffer instance will cause an error
    write(chunk, enc, next) {
      data.push(chunk);
      next();
    },
  });
};

const anyData = [];
const writableAnyData = createWriteStreamToAcceptAnyJSData(anyData);

writableAnyData.on('finish', () => {
  console.log('finished writing', anyData);
});

writableAnyData.write('A\n');
writableAnyData.write(1);
writableAnyData.end('nothing more to write');
