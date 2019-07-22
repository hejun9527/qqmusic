(function () {
        var items=document.getElementsByClassName("item");
        var points=document.getElementsByClassName("point");
       
        var index=0;
        var time=0;
        var clearActive=function () {
            for (var i=0;i<items.length;i++) {
                items[i].className="item";
            }
            for (var i=0;i<points.length;i++) {
                points[i].className="point";
            }
        }
        var goIndex=function () {
            clearActive();
            points[index].className="point";
            items[index].className="item active";
        }
        var goNext=function () {
            if (index<3){
                index++;
            } else {
                index=0;
            }
            goIndex();
            time=0;
        }
        var goLose=function () {
            if (index>0){
                index--;
            } else {
                index=3;
            }
            goIndex();
            time=0;
        }
        for (var i=0;i<points.length;i++) {
            points[i].addEventListener("click",function() {
                var pointindex=this.getAttribute("data-index");
                index=pointindex;
                goIndex();
                clearInterval(sq);
                fun();
            })
        }
        function fun(){sq=setInterval(function () {
            time++;
            if(time==1){
                goNext();
            }
        },3000)}
        fun();     
    }());

    function show_uname_msg(){
        show_msg.innerHTML="用户名6~12位";
        show_msg.style.color="red";
            }
            function nottwo(){	
            if(uname.value){
            if(uname.value.length>=6 && uname.value.length<=12){
                show_msg.innerHTML="输入成功";
                show_msg.style.color="green";
                
                }else{
                show_msg.innerHTML="输入格式不规范";
                show_msg.style.color="red";
                }
            }else{
            show_msg.innerHTML="不能为空";
            show_msg.style.color="red";
             }
        }
        function show_upwd_msg(){
            show_upwd.innerHTML="密码8~16位";
            show_upwd.style.color="red";
                }
                function nottwo1(){	
                if(upwd.value){
                if(upwd.value.length>=8 && uname.value.length<=16){
                    show_upwd.innerHTML="输入成功";
                    show_upwd.style.color="green";
                    }else{
                        show_upwd.innerHTML="输入格式不规范";
                        show_upwd.style.color="red";
                    }
                }else{
                    show_upwd.innerHTML="密码不能为空";
                    show_upwd.style.color="red";
                 }
            }
            function show_text_msg(){
                show_text.innerHTML="验证码4位";
                show_text.style.color="red";
                    }
                    function notnull(){	
                    if(uname.value){
                    if(uname.value.length=4){
                        show_text.innerHTML="输入成功";
                        show_text.style.color="green";
                        }else{
                        show_text.innerHTML="输入格式不规范";
                        show_text.style.color="red";
                        }
                    }else{
                    show_text.innerHTML="不能为空";
                    show_text.style.color="red";
                     }
                }



        function reg(){
            var u_name=uname.value;
            var u_pwd=upwd.value;
        var xhr=new XMLHttpRequest();
                xhr.onreadystatechange=function(){
                if(xhr.readyState==4 && xhr.status==200){
                var result=xhr.responseText;
                
                //  if(result==1){
                //      alert("注册成功");
                //     location.href="http://127.0.0.1:3000/login.html";
                //  }
                }
                }
                xhr.open("post","http://127.0.0.1:3000/reg",true);
                xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                var formdata="uname="+u_name+"&upwd="+u_pwd;
                xhr.send(formdata);
        }	


        function yanzheng(){
            var u_name=uname.value;
            var u_pwd=upwd.value;
            var val1=document.getElementById("text").value;
            var xhr=new XMLHttpRequest();
                xhr.onreadystatechange=function(){
                if(xhr.readyState==4 && xhr.status==200){
                var result=xhr.responseText;
                if(result==1){alert("用户名已存在");
                return;
            }else if(!u_name){alert("用户名为空");return;}else if(!u_pwd){alert("密码为空");return;}
            //else{notnull();return;alert("注册成功"); location.href="http://127.0.0.1:3000/login.html";reg();}
            else if(val1!=code){alert("验证码不能为空");location.href="http://127.0.0.1:3000/reg.html";return;}else{alert("注册成功"); location.href="http://127.0.0.1:3000/login.html";reg();}
                }
                }
                xhr.open("get","http://127.0.0.1:3000/yanzheng?uname="+u_name,true);
                xhr.send();

        }
        


    var code;
createCode();
function createCode()
{ 
 code = "";
 var codeLength =4;
 var selectChar = new Array(0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k',
  'l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
 for(var i=0;i<codeLength;i++)
 { 
 var charIndex =Math.floor(Math.random()*36);
 code +=selectChar[charIndex]; 
 }

 document.getElementById("discode").style.fontFamily="Fixedsys"; 
 document.getElementById("discode").style.letterSpacing="5px"; 
 document.getElementById("discode").style.fontSize="30px";
 document.getElementById("discode").style.color=`rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},1)`;
 document.getElementById("discode").style.backgroundColor="#ccc";
 document.getElementById("discode").innerHTML=code; 
 document.getElementById("discode").style.lineHeight="55px";
}
function notnull()
{
 var val1=document.getElementById("text").value;
 var val2=code;
 if(val1!=val2){
  alert("验证码错误!");
  location.href="http://127.0.0.1:3000/reg.html";
  return;
 document.getElementById('text').value="";
 location.href="http://127.0.0.1:3000/reg.html";
  return;
  }
  //reg();
 }
 

 var dao=document.getElementById("dao");
 
 var san=document.getElementById("san");

 dao.onclick=function(){
    if(san.className=="san1"&&dao.className=='img01'){
        san.className="san2";
        dao.className='img02';
    }else if(san.className=="san2"&& dao.className=='img02'){
        san.className="san1";
        dao.className='img01';
    }
 }