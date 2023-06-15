//file system module
const fs=require('fs');


//this is synchronous approach

//to read file 
const first =fs.readFileSync('./content/first.txt','utf8');
const sec =fs.readFileSync('./content/second.txt','utf8');
console.log(first,sec);

//write file , if give file will not present , it will be created by node


//writeFileSync will replace the old
fs.appendFileSync('./content/result-sync.txt',`Result of first and second txt ${first}, ${sec}`);



