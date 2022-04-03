'use strict';

const net = require('net');

const PORT = 5000;
const socket = net.connect(PORT);

socket.write(`connected to TCP server: ${PORT}`);

socket.on('data', (data) => {
  console.log('Incoming: ' + data.toString('utf-8'));
});

setTimeout(() => {
  socket.write('\nEnded connectection');
  socket.end();
}, 5000);
