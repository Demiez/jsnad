# Node's event system

The `EventEmitter` constructor in the events module is the functional backbone of many Node core API's. For instance, HTTP and TCP servers are an event emitter, a TCP socket is an event emitter, HTTP request and response objects are event emitters. In this section we'll explore how to create and consume EventEmitters.<br>

The `EventEmitter` class is defined and exposed by the events module: `const EventEmitter = require('events');` <br>

All `EventEmitters` emit the event `newListener` when new listeners are added and `removeListener` when existing listeners are removed.<br>

### official doc for EventEmitter

[official doc](https://nodejs.org/dist/latest-v16.x/docs/api/events.html#class-eventemitter)
