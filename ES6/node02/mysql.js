

connection.end();
var mysql=require('mysql');
var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'test'
});
connection.connect();
var addSql='INSERT INIO student(name,age VALUES(?,?)';
var addSqlParams=["王晶","19"];
connection.query(addSql,addSqlParams,function(err,result){
    if(err){
        console.log('[INSERT ERROR]-',err.message);
        return;
    }
    console.log('--------------------------INSERT----------------------------');
    //console.log('INSERT ID:',result.insertId);        
    console.log('INSERT ID:', result);
    console.log('-----------------------------------------------------------------\n\n');
})