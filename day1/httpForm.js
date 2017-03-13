/**
 * Created by FSZJ_ZhangXY on 2017/3/10.
 */
var http = require("http");
var url = require("url");

var server = http.createServer(function(req,res){

    var queryObj = url.parse(req.url,true).query;
    console.log(req.url);
    var name=queryObj.name;
    var age=queryObj.age;
    var sex=queryObj.sex;
    res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
    res.end("服务器收到了表单请求:" + name + age + sex);
});

server.listen(3000,"10.8.30.192");