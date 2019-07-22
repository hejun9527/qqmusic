var x=document.getElementById("x");
var login=document.getElementById("login");
x.onclick=function(){
    login.style.display="none";
}

var as=document.querySelectorAll("#login>p>[data-toggle=tab]");
var i=10;
for(var a of as){
  a.onclick=function(){
    var id=this.getAttribute("data-id");
    var div=document.getElementById(id);
    div.style.zIndex=i;
    i++;
    var as=this;
    if(as.className=="active"){
        as.className="active";
    }else{
        var active=document.querySelector("div.login a.active");
        active!=null&&(active.className="")
       as.className="active";
    }
  }
 
}








function show_uname_msg(){
    uname_msg.innerHTML="";
}
function notnull(){
if(uname.value){
if(uname.value.length>=5 && uname.value.length<=11){
uname_msg.innerHTML="输入正确";
}else{
uname_msg.innerHTML="输入格式不规范";
}
}else{
uname_msg.innerHTML="不能为空";
}
}
function show_upwd_msg(){
    upwd_msg.innerHTML="密码为8~16位";
}
function notnull_pwd(){
if(upwd.value){
if(upwd.value.length>=8 && upwd.value.length<=16){
upwd_msg.innerHTML="输入正确";
}else{
upwd_msg.innerHTML="输入格式不规范";
}
}else{
upwd_msg.innerHTML="密码不能为空 ";
}
}

function show(){
    var u_name=uname.value;
         var u_pwd=upwd.value;
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
            var result=xhr.responseText;
            if(result==1){
            	alert('登陆成功');
            	location.href="http://127.0.0.1:8020/qqmusic/public/html/index.html";
            }else{
            	alert('用户名或密码有误');
            	location.href="http://127.0.0.1:3000/login.html";
            }
            
        }
    }
    xhr.open("post","http://127.0.0.1:3000/login",true);
    var formdata="uname="+u_name+"&upwd="+u_pwd;
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xhr.send(formdata);
}