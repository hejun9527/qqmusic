



   
(function(){var i=0;//现在显示的下标
var LIWIDTH=1236;//每个li宽度
var times=700;//每个动画持续时间
var licount=5;//li的个数
var ulImgss=$("#ul-imgss");
var ulidxss=$("#ul-idxss");
var btop=$("#bannertop");
    function moveToo(to){ 
        if(to==undefined){
        to=i+1;
    }
    if(i==0){
        if(to>i){
            ulImgss.addClass("transition");
        }else{
            ulImgss.removeClass("transition");
            ulidxss.children().eq(i+1).removeClass("activee");
            ulImgss.css("margin-left",-LIWIDTH*licount);
            setTimeout(function(){
                moveToo(licount-1);
            },100) 
                return;
        }        
    }
    i=to;//先将第几张图片i变为目标位置
    ulidxss.children().eq(i).addClass("activee");
    ulImgss.css("margin-left",-i*LIWIDTH);
    ulidxss.children().eq(i-1).removeClass("activee");
    if(i==licount){
    ulidxss.children().eq(0).addClass("activee");
    i=0;
    setTimeout(function(){
        ulImgss.removeClass("transition");
        ulImgss.css("margin-left",0);
            },1000)
        }          
    } 
    
            // 定时器

    var timer=setInterval(function(){
        moveToo();
    },3000);
    $("#banner").mouseenter(function(){
        $(".btn-leftt").css("left",0)
        $(".btn-rightt").css("right",0)
        clearInterval(timer);
    })
    $("#banner").mouseleave(function(){
        $(".btn-leftt").css("left",-40)
        $(".btn-rightt").css("right",-40)
        timer=setInterval(function(){
            moveToo()
    },3000);
    })})()
