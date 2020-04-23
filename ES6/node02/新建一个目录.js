let http=require('http');
let fs=require('fs');
http.createServer((req,res)=>{
    if(req.url==='/favicon.ico'){
        return;
    }
    var userid=parseInt(Math.random() * 89999) + 10000;
    fs.mkdir('./test/'+userid);
    res.end("success");
}).listen(3000,'192.168.31.127');