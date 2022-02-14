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
The `Readable` constructor creates readable streams. A readable stream is used to read a file, read data from an incoming HTTP request, or read user input from a command prompt to name a few examples. The Readable constructor inherits from the `Stream` constructor which inherits from the `EventEmitter` constructor, so readable streams are event emitters. As data becomes available, a readable stream emits a `data` event.<br>

`Readable Stream` instantiates with an instance of the `Readable` constructor and then causes it to emit data events for each chunk of the file that has been read.<br>

`Readable streams` have a default highWaterMark option of `16kb`, so `64kb` file would emit four data events.

`Readable.from()` - the data events will receive the data as strings because `Readable.from` utility function sets `objectMode` to true by default

