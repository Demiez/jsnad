# WORKING WITH STREAMS

Streams implement high volume data processing without requiring huge compute resources. Streams provide an ergonomy by supporting the decoupling of application logic around real time data using a functional programming paradigm.<br>

`A stream` is an abstract interface for working with streaming data in Node.js. The stream module provides an API for implementing the stream interface. Streams can be readable, writable, or both. All streams are instances of `EventEmitter`.<br>

[Nodejs Stream Doc](https://nodejs.org/api/stream.html#stream)

### Stream types

The Node core `stream` module exposes six constructors for creating streams:

- Stream - inherits from `EventEmitter`, implements only `pipe()` method
- Readable
- Writable
- Duplex
- Transform
- PassThrough

The `main events` emitted by various `Stream` implementations that one may commonly encounter in application-level code are:

- data
- end
- finish - is emitted by `Writable` streams when there is nothing left to write
- close - may be emitted if a stream is destroyed
- error - is emitted when a stream encounters an error