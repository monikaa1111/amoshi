let http=require('http');
let url=require('url');
let server=http.createServer((req,res)=>{
    if(req.url==='./favicon.ico'){
        return;
    }
    var userurl=req.url;
    res.writeHead(200,{ "Content-Type": "text/html;charset=utf-8" });
    if(userurl.substr(0,9)==='/student/'){
        var studentid=userurl.substr(9);
        if(/^\d{10}$/.test(studentid)){
            res.end("你所查询的学生信息，id是：" + studentid);
        } else {
            res.end("你所查询的学生信息错误，id是：" + studentid);
        }
    }
    res.end();
})
console.log('B');
server.listen(5000, 'localhost');