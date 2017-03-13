/**
 * Created by FSZJ_ZhangXY on 2017/3/10.
 */
var http =require("http");
var url=require("url");
var fs=require("fs");
var path=require("path")
var server=http.createServer(function(req,res){
   var pathname=url.parse(req.url).pathname;
    if(pathname=="/"){
        pathname="index.html"
    }
    var extname=path.extname(pathname);
    fs.readFile("./static/"+pathname,function (err,data) {
        if(err){
            fs.readFile("./static/error.html",function(err,data){
                res.writeHead(404,{"Content-type":"text/html;charset=UTF-8"});
                res.end(data);
            });
            return
        };
        getMime(extname,function(mime){
            res.writeHead(200,{"Content-Type":mime});
            res.end(data);
        });
    })
});
server.listen(3000,"10.8.30.192");

function getMime(extname,callback){
   var mimeJson=fs.readFile("./static/mime.json",function(error,data){
       if(error){
           throw Error("找不到mime.json文件！");
           return;
       }
       //转成JSON
       var mimeJSON = JSON.parse(data);
       var mime =  mimeJSON[extname]  || "text/plain";
       //执行回调函数，mime类型字符串，就是它的参数
       callback(mime);
   })
}