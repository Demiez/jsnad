const buffer = Buffer.from('Hi there');
console.log(buffer);
console.log(buffer.toJSON()); // displays buffer as object
console.log(JSON.stringify(buffer)); // returns stringified object after calling toJSON()

const json = JSON.stringify(buffer);
const parsed = JSON.parse(json);
console.log(parsed); // prints { type: 'Buffer', data: [ 240, 159, 145, 128 ] }
console.log(Buffer.from(parsed.data)); // prints <Buffer f0 9f 91 80>
