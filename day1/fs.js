/**
 * Created by FSZJ_ZhangXY on 2017/3/10.
 */
var http = require("http");
var fs = require("fs");

var server=http.createServer(function(req,res){
    var userid=parseInt(Math.random()*89999)+10000;
    console.log("欢迎"+userid);
    res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
    fs.readFile("./test/1.txt",function(err,data){
        if(err){
            throw err;
        }

        console.log(userid+"文件读取完毕");
        res.end(data)

    });
    console.log(2);
});

server.listen(3000,"10.8.30.192")