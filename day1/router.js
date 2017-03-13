/**
 * Created by FSZJ_ZhangXY on 2017/3/10.
 */
var http =require("http");
var server=http.createServer(function(req,res){
    var userurl=req.url;
    res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
    if(userurl.substr(0,9)=="/student/"){
        var studentid=userurl.substr(9)
        if(/^\d{10}$/.test(studentid)){
            res.end("您要查询的学生信息,id为"+studentid)
        }else{
            res.end("学生学号位数不对")
        }
    }else if(userurl.substr(0,9)=="/teacher/"){
        var teacherid=userurl.substr(9)
        if(/^\d{6}$/.test(teacherid)){
            res.end("您要查询的老师信息,id为"+teacherid)
        }else{
            res.end("老师工号位数不对")
        }
    }
});
server.listen(3000,"10.8.30.192")