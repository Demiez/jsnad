'use strict';
const net = require('net');

net
  .createServer((socket) => {
    const interval = setInterval(() => {
      socket.write('beat');
    }, 1000);

    // Inside the data event listener incoming data is sent back to client after transforming it to upper case
    socket.on('data', (data) => {
      socket.write(data.toString().toUpperCase());
    });

    // The end event is useful for cleaning up any resources or on-going operations after a client disconnects
    socket.on('end', () => {
      clearInterval(interval);
    });
  })
  .listen(3333, () => console.log(`socket server is listening on 3333`));
