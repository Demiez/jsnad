const bufferNum = Buffer.alloc(8);
const bufferArr = Buffer.from([8, 6, 7, 5, 3, 0, 9]);

console.log(bufferNum);
console.log(bufferArr);
console.log(bufferNum.toJSON());
console.log(bufferArr.toJSON()); // { type: 'Buffer', data: [8, 6, 7, 5, 3, 0, 9] }
