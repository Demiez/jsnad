'use strict';

const net = require('net');
const { Buffer } = require('buffer');

const PORT = 5000;

net
  .createServer((socket) => {
    socket.on('data', (data) => {
      const stringifiedData = data.toString();
      console.log(stringifiedData);

      const bufferData = Buffer.from(stringifiedData.toUpperCase());

      socket.write(bufferData);
    });

    socket.on('end', () => {
      console.log('Connection closed');
      socket.end();
    });
  })
  .listen(PORT, () => console.log(`Listening to ${PORT}`));
