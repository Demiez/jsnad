const { readFile } = require('fs');

// _filename in Node.js holds the path of the file currently being executed, so it will read itself if executed
readFile(__filename, (err, contents) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(contents.toString());
});
