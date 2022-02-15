# WORKING WITH STREAMS

Streams implement high volume data processing without requiring huge compute resources. Streams provide an ergonomy by supporting the decoupling of application logic around real time data using a functional programming paradigm.<br>

`A stream` is an abstract interface for working with streaming data in Node.js. The stream module provides an API for implementing the stream interface. Streams can be readable, writable, or both. All streams are instances of `EventEmitter`.<br>

### official doc for Streams

[Nodejs Stream Doc](https://nodejs.org/api/stream.html#stream)

### Stream types

The Node core `stream` module exposes six constructors for creating streams:

- Stream - inherits from `EventEmitter`, implements only `pipe()` method
- Readable
- Writable
- Duplex
- Transform
- PassThrough

Fundamental stream types are:

- `Writable`: streams to which data can be written (for example, `fs.createWriteStream()`).
- `Readable`: streams from which data can be read (for example, `fs.createReadStream()`).
- `Duplex`: streams that are both Readable and Writable (for example, `net.Socket`).
- `Transform`: Duplex streams that can modify or transform the data as it is written and read (for example, `zlib.createDeflate()`).

The `main events` emitted by various `Stream` implementations that one may commonly encounter in application-level code are:

- data
- end
- finish - is emitted by `Writable` streams when there is nothing left to write
- close - may be emitted if a stream is destroyed
- error - is emitted when a stream encounters an error

### Two stream modes:

- Binary streams - default, binary mode streams only read or write `Buffer` instances
- Object streams - in object mode streams can read or write JavaScript objects and all primitives (strings, numbers) except null

Mode of a stream is determined by its `objectMode` option passed when the stream is instantiated! Default value is `false` which means default mode is binary.

### Readable Stream

The `Readable` constructor creates readable streams (call `fs.createReadStream()` returns type `fs.ReadStream`). A readable stream (also `const { Readable } = require('stream')`) is used to read a file, read data from an incoming HTTP request, or read user input from a command prompt to name a few examples. The Readable constructor inherits from the `Stream` constructor which inherits from the `EventEmitter` constructor, so readable streams are event emitters. As data becomes available, a readable stream emits a `data` event.<br>

`Readable Stream` instantiates with an instance of the `Readable` constructor and then causes it to emit data events for each chunk of the file that has been read.<br>

`Readable streams` have a default `highWaterMark` option of `16kb`, so `64kb` file would emit four data events.

`Readable.from()` - the data events will receive the data as strings because `Readable.from` utility function sets `objectMode` to true by default

### Writable Stream

`Writable` constructor creates writable streams (call `fs.createWriteStream()`). A writable stream (also `const { Writable } = require('stream')`) could be used to write a file, write data to an HTTP response, or write to the terminal. The `Writable` constructor also inherits from the Stream constructor which inherits from the EventEmitter constructor, so writable streams are event emitters.<br>

To create a writable stream, we call the `Writable` constructor with the new keyword. `write()` method of `Writable` is called with params `chunk`, `enc`, and `next`. The `chunk` is each piece of data written to the stream, `enc` is encoding and `next` is callback which must be called to indicate that we are ready for the next piece of data.
The point of a next callback function is to allow for asynchronous operations within the write option function, this is essential for performing asynchronous I/O.<br>

`decodeStrings` option of `Writable` instance can be set to `true`, so it disables convertion to `Buffer`<br>

The `chunk` argument must be of type string or an instance of `Buffer` or `Uint8Array`, else passing anything to `write()` will cause an error

### Readable and Writable 

3 core stream constructors that have both readable and writable interfaces:

- Duplex
- Transform
- PassThrough

The `Duplex` stream constructor's prototype inherits from the `Readable` constructor but it also mixes in functionality from the `Writable` constructor. A TCP network socket is a great example of a Duplex stream. With a `Duplex` stream, both `read()` and `write()` methods are implemented but there doesn't have to be a causal relationship between them.<br>

The `Transform` constructor inherits from the `Duplex` constructor. Transform streams are duplex streams that have an additional constraint applied to enforce a causal relationship between the read and write interfaces. A good example is compression like zlib (`const { createGzip } = require('zlib')`). <br>