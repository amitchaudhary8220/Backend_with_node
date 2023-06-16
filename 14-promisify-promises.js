const { error } = require("console");

//what we can do ,i.e. --> to can convert a function in promise during import

//always use try and catch when using async await
const { readFile, writeFile } = require("fs").promises;

const done = async () => {
    try{
        const first = await readFile("./content/first.txt", "utf-8");
        const sec = await readFile("./content/second.txt", "utf8");
      
        writeFile(
          "./content/writing-using-direct-promise.txt",
          `Oooh This is amazing ,see ${first} , ${sec}`,
          { flag: "a" }
        );
      
        console.log("first and sec ", first, sec);
    }catch(error){
        console.log(error);
    }
};

done();

//we can use another apporach of doing the below thing

// const util= require('util');

// const readPromise=util.promisify(fs.readFile);
// const writePromise=util.promisify(fs.writeFile);

// //node.js provide 'util' package to convert any function in promise , let check it out

// const readAndwrite=async ()=>{
//     const first =await readPromise('./content/first.txt','utf8');
//     const sec=await readPromise('./content/second.txt','utf8');

//     await writePromise('./content/util-promisify-write.txt',`Oooh! promisify ${first},${sec}`);

//     console.log('completed reading ',first,sec);
// }

// readAndwrite();

//Reading and writing file with the help of promises
//we have written this function to overcome the complexity of callback hell

// const newWay = (path) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(path, "utf8", (err, result) => {
//       if (err) reject(err);
//       resolve(result);
//     });
//   });
// };

// const reading = async () => {
//   const first = await newWay("./content/first.txt");
//   const sec=await newWay('./content/second.txt');

//   //now if we want to write the file ,then we have to write one extra function

//   console.log("first and sec -> ", first,sec);
// };

// reading();
