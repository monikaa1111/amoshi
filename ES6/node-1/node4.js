
let http=require("http");
var i=0;
let server=http.createServer((req,res)=>{
    i++;
    res.write("node http-server");
    res.end(i+"");
    console.log('A');
})
console.log('B');
server.listen(6000);