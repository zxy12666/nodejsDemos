/**
 * Created by FSZJ_ZhangXY on 2017/3/13.
 */
var http =require("http");
var url=require("url");
var fs=require("fs");
var path=require("path");

var server=http.createServer(function(req,res){
    res.writeHead(200);
    res.end("success")
});
server.listen(3000,"10.8.30.192");