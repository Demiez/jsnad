# USING BUFFERS

Handling binary data in server-side programming is very important. In Node.js env binary data is handled with the `Buffer` constructor. When an encoding isn't set, reading from the file system, or from a network socket, or any type of I/O and similar cases will result in one or more array-like instances that inherit from the `Buffer` constructor.

### Check global Buffer ctor

- `node -p "Buffer"`

Buffer object is both an instance of `Buffer` and an instance (at the second degree) of `Uint8Array` (buffer-check.js)<br>
`Buffer.prototype.slice` method overrides the `Uint8Array.prototype.slice` method to provide a different behavior. Whereas the `Uint8Array` slice() method will take a copy of a buffer between two index points, the `Buffer` slice() method will return a buffer instance that references the binary data in the original buffer that slice was called on. So Buffer.slice - returns reference, Uint8Array.slice - return a copy (buffer-slice-dif.js)

### Docs

- [Buffer NodeJs Doc](https://nodejs.org/dist/latest-v16.x/docs/api/buffer.html)
- [JS Typed Arrays MDN Doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)

### Allocating - creating instance of Buffer

Correct way to allocate a buffer of a certain amount of bytes is to use Buffer.alloc(amount_of_bytes). Never use new keyword (`new Buffer` was deprecated because it had allocUnsafe behavior)

- `Buffer.alloc()` - Allocates a new Buffer of size bytes. If fill is undefined, the Buffer will be zero-filled.
- `Buffer.allocUnsafe()` - unsafe, always returns a different buffer of garbage bytes
- `Buffer.from()` - creates buffer from string (characters in the string are converted to byte values)
- `buffer.toString(), buffer.toString('base64')` - converts buffer to string, can also accept encoding as an argument

There is also built-in Node core module `string_decoder`, which can be used in cases, when multiple buffers might split characters across a byte boundary (for example, UTF8 encoding format has between 1 and 4 bytes to represent each character)
