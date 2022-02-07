let buf1, buf2, buf3, buf4;

buf1 = Buffer.alloc(10); // <Buffer 00 00 00 00 00 00 00 00 00 00>
console.log(buf1);

buf2 = buf1.slice(2, 3); // <Buffer 00>
console.log(buf2);

buf2[0] = 100; // 100
console.log(buf2[0]);

console.log(buf1);
console.log(buf2);

buf3 = new Uint8Array(10); // Uint8Array(10)[0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
console.log(buf3);

buf4 = buf3.slice(2, 3); // Uint8Array(1) [ 0 ]
console.log(buf4);

buf4[0] = 100; // 100
console.log(buf4[0]);

console.log(buf4); // Uint8Array(1) [ 100 ]
console.log(buf3); // Uint8Array(10)[0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
