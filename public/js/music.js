var get = function(url,data,callback){
    var xhr = new XMLHttpRequest()
    var param="?"
    for(var key in data){
        if(data.hasOwnProperty(key)){
            param+=key+"="+data[key]+"&"
        }
    }
    param = param.slice(0,param.length-1)
    xhr.open('get',url+param,true)
    xhr.send()
    xhr.onreadystatechange=function(){
        if(xhr.status==200&&xhr.readyState==4){
            if(callback){
                callback(JSON.parse(xhr.response))
            }
        }
    }
}
//通过ID获得歌曲的URL
var geturl=function(id,callback){
    get('http://127.0.0.1:3000/searchId',{id:id},function(res){
        var url=res[0].songurl;
        if(callback){
           callback(url);
        }        
    })
}
//通过歌名获得歌词和时间
var searchName=function(songname,callback){
    get('http://127.0.0.1:3000/search',{songname:songname},function(res){
            if(callback){
            callback(res);
        }
    })
}

//通过歌名获得歌词和时间
getLrc=function(id,callback){
     get('http://127.0.0.1:3000/searchId',{id:id},function(res){
        var lrcstring=res[0].lyic
        if(callback){
           callback(lrcstring);
        }        
    })
}
//通过Id获得所有结果
getAll=function(id,callback){
    get('http://127.0.0.1:3000/searchId',{id:id},function(res){
        if(callback){
           callback(res);
        }        
    })   
}

//绑定搜索事件
var searchSong=document.getElementById('searchSong');
//搜索列表显示
var list=document.getElementsByClassName("list")[0];
searchSong.addEventListener("click",function(){
    var songname=document.getElementById("songname").value;
    //通过查询名字获得列表
    searchName(songname,function(res){
        var tql=`<li class=s_list data-id="{%id%}">
        <span>{%songname%}</span>
        <span>{%singer%}</span>
        </li>`
        var html=""
        for(var i=0;i<res.length;i++){
            html+=tql.replace("{%songname%}",res[i].songname)
                    .replace("{%singer%}",res[i].singer)
                    .replace("{%id%}",res[i].id)

        }
        list.innerHTML=html;
        list.className="list style"
        clickLi();
    })
})
//获得音频
var audio=document.getElementById("audio");
//地址替换函数
var replaceUrl=function(url){
   audio.src=url;
}
//点击li收回搜索框事件
var clickLi=function(){
    var sli=document.getElementsByClassName('s_list')
     for(var i=0; i<sli.length;i++){
         //点击哪首播放哪首
        sli[i].addEventListener("click",function(){
        var id=this.getAttribute("data-id");
        play(id);
        getSongAll(id);
        //通过id替换地址
         geturl(id,function(url){
          replaceUrl(url);
            //收回搜索框
            list.className="list";
            //自动播放
            audio.play();
         })
      })
       
      //点击搜索框里面的歌加入到歌单
      sli[i].addEventListener("click",function(){
        var id=this.getAttribute("data-id");
        getAll(id,function(res){
            var songlist=document.getElementById("songlist");
            for(var i=0;i<res.length;i++){
               songlist.innerHTML+=`<li class=onelist data-target=${res[i].id}>
               <div></div>
               <span>${res[i].songname}</span>
               <div class='put'>
               <ul>
               <li>
                   <ul>
                       <li></li>
                       <li></li>
                       <li></li>
                       <li></li>
                   </ul>
               </li>
               <li></li>
           </ul>       
               </div>
               <span>${res[i].singer}</span>
               </li>`
            }
            replace();
        })
     })
  } //for结束   
}
//点击列表列表里面的歌可以播放并且替换地址
var replace=function(){
    var onelist=document.getElementsByClassName("onelist");
    for(var i=0;i<onelist.length;i++){
    onelist[i].addEventListener("click",function(){
       var id=this.getAttribute("data-target");
       getSongAll(id);
        play(id);
        //通过id替换地址
         geturl(id,function(url){
          replaceUrl(url);
            //自动播放
            audio.play();
         })
      })    
    }

}
//解析歌词 
var parseLrc=function(lrcstring){
   var LrcAarry=[];
    var  LyicTime=lrcstring.split('\n');
   //解析时间函数
    var parseTime=function(timeString){
    var timeAarry=timeString.split(':');
    var min=parseInt(timeAarry[0]);
    var s=parseFloat(timeAarry[1]);
    var totalTime=(min*60+s)*1000
    //返回出解析的时间
    return totalTime;
    }
    for(var i=0;i<LyicTime.length;i++){
        var Lyic=LyicTime[i].split(']');
        var Time=parseTime(Lyic[0].slice(1,Lyic[0].length));//调用解析时间的函数
        var contant=Lyic[1];
        if(contant==undefined || isNaN(Time)==true)continue;
        LrcAarry.push({
            Time:Time,
            contant:contant
        })
         
    }
    return LrcAarry;
}
//歌词滚动
var index=0;
var nowlrcstring=[];
var lrc=null;
var marginTop=100;
var contant=document.getElementById("#contant");
var reset=function(){
    index=0;
    marginTop=100;
}
var compLrc=function(){
    if(nowlrcstring[index].Time-audio.currentTime*1000<300){
        console.log("if在执行");
        lrcList[index].style.color="#31c27c";
        lrcList[index].style.fontSize="1.1rem";
        marginTop-=50;
        contant.style.marginTop=marginTop+"px";
        if(index-1>-1){
          lrcList[index-1].style.color="";
          lrcList[index-1].style.fontSize="12px"; 
        }
        index++; 
    } 
}
 audio.addEventListener("timeupdate",function(){
    compLrc();
});
//通过解析完然后填充歌词函数
var fillLrc=function(lrcstring){
    var lrc=parseLrc(lrcstring);
    var tql="<li class=lrc-list>{%contant%}</li>";
    var html="";
      for(var i=0;i<lrc.length;i++){
       html+=tql.replace("{%contant%}",lrc[i].contant);
     }
     contant.innerHTML=html;
     nowlrcstring=lrc;
     lrcList=document.getElementsByClassName("lrc-list");
}
//通过点击添加专辑和名字和歌名

//添加歌词的容器
var contant=document.getElementById('contant');
//调用获得歌词的方法
var play=function(id){
    reset();
    getLrc(id,function(lrcstring){
       fillLrc(lrcstring);
    })
}
//checkbox选项
var checkbox=document.querySelector("ul#songlist>li>div");
checkbox.onclick=function(){
    if(checkbox.className=='box'){
        checkbox.className='';
    }else if(checkbox.className==''){
        checkbox.className='box'
    }
}
//点击播放选项
// var putone=document.querySelector("div.put>ul>li:nth-child(1)>ul>li:nth-child(1)");
// console.log(putone)
// putone.onclick=function(){
//     if(putone.className=='putone'){
//         putone.className=''
//     }else if(putone.className==''){
//         putone.className='putone'
//     }
// }
//底部播放
var action=document.querySelector("div.footer>div:nth-child(1)>ul>li:nth-child(2)")
action.addEventListener("click",function(){
    if(audio.paused){
        audio.play();
        action.className=''
    }else if(audio.play){
        audio.pause();
        action.className='action'
    }
})    
//点击循环换按钮
var run=document.querySelector("div.footer>div:nth-child(3)>ul>li:nth-child(1)");
run.onclick=function(){
    if(run.className==''){
        run.className='action1'
    }else if(run.className=='action1'){
        run.className='action2'
    }else if(run.className=='action2'){
        run.className='action3'
    }else if(run.className=='action3'){
        run.className=''
    }
}
//按钮04
var action4=document.querySelector(".footer>div:nth-child(3)>ul>li:nth-child(5)")
action4.onclick=function(){
    if(action4.className=='action4'){
        action4.className=''
    }else if(action4.className==''){
        action4.className='action4'
    }
}
//按钮5
var action5=document.querySelector(".footer>div:nth-child(3)>ul>li:nth-child(6)")
action5.onclick=function(){
    if(action5.className=='action5'){
        action5.className=''
    }else if(action5.className==''){
        action5.className='action5'
    }
}
//通过id获得歌手等
var msgList=document.getElementById("msg_list");
getSongAll=function(id){
      getAll(id,function(res){
          var html=""
          for(var i=0;i<res.length;i++){
           html+=`
           <li>歌曲名: ${res[i].songname}</li>
           <li>歌手名: ${res[i].singer}</li>
           <li>专辑名: ${res[i].album}</li>
           `
          }
         msgList.innerHTML=html;
      })
}
