let http=require('http');
let url=require('url');
let server=http.createServer((req,res)=>{
    if(req.url==='./favicon.ico'){
        return;
    }
    var pathname=url.parse(req.url).pathname;
    console.log(pathname);
    console.log(url.parse(req.url,true));
    var query=url.parse(req.url,true).query;
    console.log(query.a);
    res.end();
})
console,log('B');
server.listen(4000, '127.0.0.1');