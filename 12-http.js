const http= require('http');

const server=http.createServer((req,res)=>{
    if(req.url==='/')
    {
        res.end('this is home page');

    }
    else if(req.url==='/about'){
    res.end('this is about page');
    }
    else{
        res.end(`<h1>Opps! something bad happend</h1>
        <p>Looks like page doesn't exists</p>
        <a href='/'>Go back home</a>`)
    }
    res.write('Welcome to first server');
    res.end();
})

//listening to port

server.listen(5000);