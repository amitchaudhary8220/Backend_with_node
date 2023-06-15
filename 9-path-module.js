//path module

const path = require("path");

//join different path

const joinedPath = path.join("/content", "innerContent", "hello.text");
console.log(joinedPath);

//basename() --give last path name

console.log(path.basename(joinedPath));

//resolve --returns absolute path
const absolutePath = path.resolve(
  __dirname,
  "content",
  "innerPath",
  "hello.txt"
);
console.log(absolutePath);