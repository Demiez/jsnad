const { ENV } = require('./preload');

// use node --require ./preload.js app.js

console.log('app.js: this is the main file');
console.log(ENV);
