/**
 * Created by FSZJ_ZhangXY on 2017/3/10.
 */
var http = require("http");
var fs = require("fs");

var server=http.createServer(function(req,res){
    var wenjianjia=[];
    fs.readdir("../day1",function(err,files){
        (function iterator(i){
            if(i==files.length){
                console.log(wenjianjia);
                return
            }
            fs.stat(files[i],function(err,stats){
                if(stats.isDirectory()){
                    wenjianjia.push(files[i]);
                }
                iterator(i+1)
            });
        })(0);
    });

  /*  fs.readdir("../day1",function(err,files){
        for(var i=0;i<files.length;i++){
            fs.stat(files[i],function(err,stats){
                if(stats.isDirectory()){
                    wenjianjia.push(thefile);
                }
            })
        }
    });*/
    console.log(wenjianjia);
});

server.listen(2000,"10.8.30.192");