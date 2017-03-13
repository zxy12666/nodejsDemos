var http=require("http");
var fs =require("fs");
var server=http.createServer(function(req,res){
    if(req.url=="/1"){
        fs.readFile("1.html",function(err,data){
            res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
            res.end(data)
        });
    }else if(req.url=="/2"){
        fs.readFile("2.html",function(err,data){
            res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
            res.end(data)
        });
    }else if(req.url=="/img/0.jpg"){
        fs.readFile("./img/0.jpg",function(err,data){
            res.writeHead(200,{"Content-type":"image/jpg;charset=UTF-8"});
            res.end(data)
        });
    }else if(req.url=="/mmmm.css"){
        fs.readFile("css.css",function(err,data){
            res.writeHead(200,{"Content-type":"text/css;charset=UTF-8"});
            res.end(data)
        });
    }
    else{
        res.writeHead(404,{"Content-type":"text/html;charset=UTF-8"})
        res.end("this page not found")
    }
});

server.listen(3000,"10.8.30.192");