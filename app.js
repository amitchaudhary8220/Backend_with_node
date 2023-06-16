//code to craete large file

// const fs=require('fs');

// for(let i=0;i<10000;i++){
//     fs.writeFileSync('./content/large-data.txt',
//     `Hello world this file is very large ${i} \n`,{flag:'a'});
// }



//default size is 64kb
//to increase or decrease size , provide , {highWaterMark=90000} --> 90 kb
//
const { createReadStream } = require("fs");
const http=require('http');


//normal example 
// const stream = createReadStream("./content/large-data.txt",{highWaterMark:500,encoding:'utf8'});

// stream.on("data", (result) => {
//   console.log(result);
// });

// stream.on('error',(error)=>{
//     console.log(error);
// })


//http examl
const server=http.createServer((req,res)=>{
    const stream=createReadStream('./content/large-data.txt');

    stream.on('open',()=>{
        //pipe pushes data from read stream to write stream in chunks 
      stream.pipe(res);
    })
    stream.on('error',(error)=>{
console.log(error);
    })
});

server.listen(5000);    

