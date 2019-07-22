//1:引入第三方模块
const express = require("express");
const mysql = require("mysql");
const bodyParser=require("body-parser")
const cors = require("cors");
const session = require("express-session");
//2:配置第三方模块
 //2.1:配置连接池
 var pool = mysql.createPool({
   host:"127.0.0.1",
   user:"root",
   password:"",
   port:3306,
   database:"qqmusic",
   connectionLimit:15
 })
 //2.2:跨域
 var server = express();
 server.use(cors({
   origin:["http://127.0.0.1:8080",
   "http://localhost:8080"],
   credentials:true
 }))
 //2.3:session
 server.use(session({
   secret:"128位字符串",
   resave:true,
   saveUninitialized:true
 }))
// 2.9指定静态文件
server.use(express.static("public"))
 server.listen(3000);
 server.use(bodyParser.urlencoded({
   extended:false
 }));






//3:完成第一个功能用户注册
server.post("/reg",(req,res)=>{
  var $uname = req.body.uname;
  var $upwd = req.body.upwd;
  if(!$uname){
    res.send("uname未找到");
    return;
  }else
  if(!$upwd){
    res.send("upwd未找到");
    return;
  }else{
  var sq = "insert into user set uname=?,upwd=?";
  pool.query(sq,[$uname,$upwd],(err,result)=>{
      if(err)throw err;
         if(result.affectedRows>0){
           res.send("1");
         }else{
          res.send("0");
         }  
  })};
});

//4:完成第二个功能用户登录
 server.post("/login",(req,res)=>{
  //1:参数
  var $uname = req.body.uname;
  var $upwd = req.body.upwd;
  //1.1:正则表达式验证用户名或密码
  //2:sql
  var sqq = "SELECT * FROM user WHERE uname=? AND upwd=?";
  //3:json
  pool.query(sqq,[$uname,$upwd],(err,result)=>{
      if(err)throw err;
      console.log(result);
      if(result.length>0){
        res.send("1");
      }else{
        
        res.send("0");
      }
  });
});

//5:完成第三个功能通过歌名返回数据

server.get("/search",(req,res)=>{
  var $songname = req.query.songname;
  var sql = "SELECT * FROM song WHERE songname like ?"; 
  var obj=[$songname];
  pool.query(sql,[`%${$songname}%`],(err,result)=>{
      if(err)throw err;
      if(result.length==0){
        res.send(123);
        console.log(1)
        return;
      }else{
        res.send(result);
        console.log(2)
        return;
      }
  });
});


//注册验证
server.get("/yanzheng",(req,res)=>{
  var $uname=req.query.uname;
 
  pool.query("select * from user where uname=?",[$uname],(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send("1");
      return;
      console.log(result)
    }else{res.send("0");}
  })
})

//4:完成第三个功能通过id返回数据
server.get("/searchId",(req,res)=>{
  var $id = req.query.id;
  var sql = "SELECT * FROM song WHERE id=?"; 
  var obj=[$id];
  pool.query(sql,obj,(err,result)=>{
      if(err)throw err;
      if(result.length==0){
        res.send(123);
        console.log(1)
        return;
      }else{
        res.send(result);
        console.log(2)
        return;
      }
  });
});