const { readFile } = require('fs');

const [bigFile, mediumFile, smallFile] = Array.from(Array(3)).fill(__filename);

const print = (err, contents) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(contents.toString());
};
// we want bigfile to be read first, then medium and small. So we embed callbacks inside each other
readFile(bigFile, (err, contents) => {
  print(err, contents);
  readFile(mediumFile, (err, contents) => {
    print(err, contents);
    readFile(smallFile, print);
  });
});
