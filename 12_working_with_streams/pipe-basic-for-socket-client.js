'use strict';
// Required duplex-stream-socket-server to be run beforehand
const net = require('net');
const socket = net.connect(3333);

// socket.on('data', (data) => {
//   console.log('got data:', data.toString())
// })
// Replaced by pipe:
socket.pipe(process.stdout); // Anything written to process.stdout will be printed out as process output

socket.write('hello');

setTimeout(() => {
  socket.write('all done');
  setTimeout(() => {
    socket.end();
  }, 250);
}, 3250);
