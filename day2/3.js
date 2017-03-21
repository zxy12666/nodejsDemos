/**
 * Created by FSZJ_ZhangXY on 2017/3/20.
 */
var http=require("http");
var fs=require("fs");
var url=require("url");
var path = require("path");

var server=http.createServer(function(req,res){
    var pathname = url.parse(req.url).pathname;
    //判断此时用户输入的地址是文件夹地址还是文件地址
    //如果是文件夹地址，那么自动请求这个文件夹中的index.html
    if(pathname.indexOf(".") == -1){
        pathname += "/index.html";
    }
    //输入的网址是127.0.0.1/images/logo.png
    //实际请求的是./static/images/logo.png
    var fileURL = "./" + path.normalize("../day1/static/" + pathname);
    console.log(fileURL);
    //得到拓展名
    var extname = path.extname(pathname);
    fs.readFile(fileURL,function(err,data){
        var mime=getMime(extname,function(mime){
            res.writeHead(200,{"Content-type":mime+";charset=UTF-8"});
            res.end(data)
        })
    })
});
server.listen(3000,"10.8.30.192");

function getMime(extname){
    fs.readFile("../day1/static/mime.json",function(err,data){
        if(err){
            res.writeHead(404,{"Content-Type":"text/html;charset=UTF8"})
            res.end("404,页面没有找到");
        }
        var mimeJSON=JSON.parse(data)
        var mime =  mimeJSON[extname]  || "text/plain";
        //执行回调函数，mime类型字符串，就是它的参数
        callback(mime);
    })
}