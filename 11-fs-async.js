const fs=require('fs');

console.log('start reading and writing');

fs.readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
    console.log(err);
    return ;
    }
    const first=result;
    fs.readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second=result;
        fs.appendFile('./content/result-async.txt',`result is ${first} , ${second}`,(err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log('done with reading and writing');
        })
    })
})


console.log('start new task');