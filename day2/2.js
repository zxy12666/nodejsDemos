/**
 * Created by FSZJ_ZhangXY on 2017/3/13.
 */
var http =require("http");
var url=require("url");
var fs=require("fs");
var path=require("path");

var server=http.createServer(function(req,res){
    if(req.url=="/"){
        res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
        res.end("成功")
    }else{
        res.writeHead(404,{"Content-type":"text/html;charset=UTF-8"});
        res.end("失败")
    }

});
server.listen(3000,"10.8.30.192");