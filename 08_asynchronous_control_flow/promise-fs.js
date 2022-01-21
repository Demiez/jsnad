const { readFile } = require('fs').promises;
// fs module exports a promises object with promise-based versions

readFile(__filename)
  .then((contents) => {
    console.log(contents.toString());
  })
  .catch(console.error);
