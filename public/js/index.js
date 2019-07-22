
function show(){
	var show=document.getElementById("xiala");
	show.style.height='225px';
	
}
function show1(){
	var show=document.getElementById("xiala");
	show.style.height='0';
}



var sixd=document.querySelectorAll("#scl>p>[data-toggle=tab]");
var i=10;
for(var si of sixd){
  si.onclick=function(){
    var id=this.getAttribute("data-id");
    var div=document.getElementById(id);
    div.style.zIndex=i;
    i++;
    var sixd=this;
    if(sixd.className=="activeaaa"){
        sixd.className="activeaaa";
    }else{
        var activeaaa=document.querySelector("div.new a.activeaaa");
        activeaaa!=null&&(activeaaa.className="")
        sixd.className="activeaaa";
    }
  }
 
}













var span01=document.querySelectorAll('ul.tree01 span') ;
   for(var i=0;i<span01.length;i++){
   	var a=span01[i];
   	a.index=i;
   	a.onclick=function(){
   		var span01=this;
   		if(span01.className=='open'){
   			span01.className='open';
   		}else{
   			var open=document.querySelector('ul.tree01 span.open');
   			open!=null&&(open.className='')
   			span01.className='open';
   		}
   	}
   	
  }






var span=document.querySelectorAll('ul.tree span') ;
   for(var i=0;i<span.length;i++){
   	var a=span[i];
   	a.index=i;
   	a.onclick=function(){
   		var span=this;
   		if(span.className=='open'){
   			span.className='open';
   		}else{
   			var open=document.querySelector('ul.tree span.open');
   			open!=null&&(open.className='')
   			span.className='open';
   		}
   	}
   	
  }
    var i=0;
    var LIWIDTH=1237.5;
    var DURATION=500;
    var LICOUNT=4;
    var ulImgs=document.getElementById('one');
    var ulImg2=document.getElementById('two');
    var ulImg3=document.getElementById('three');
    var ulImg4=document.getElementById('fore');
    var ulImg5=document.getElementById('five');
    var ulImg6=document.getElementById('six');
    //
    var ulImgone01=document.getElementById('one01')
    var ulImgtwo01=document.getElementById('two01')
    var ulImgthree01=document.getElementById('three01')
    var ulImgfore01=document.getElementById('fore01')
    var ulImgfive01=document.getElementById('five01')
    var ulImgsix01=document.getElementById('six01')
    //
    var ulIdxs=document.getElementById("ul-idx1");
    var ulIdx2=document.getElementById("ul-idx2");
    var ulIdx3=document.getElementById("ul-idx3");
    var ulIdx4=document.getElementById("ul-idx4");
    var ulIdx5=document.getElementById("ul-idx5");
    var ulIdx6=document.getElementById("ul-idx6");
    //
    var ulIdxone=document.getElementById('ul-idxone');
    var ulIdxtwo=document.getElementById('ul-idxtwo');
     var ulIdxthree=document.getElementById('ul-idxthree');
     var ulIdxfore=document.getElementById('ul-idxfore');
     var ulIdxfive=document.getElementById('ul-idxfive');
     var ulIdxsix=document.getElementById('ul-idxsix');
    //
    var lis=ulIdxs.children;
    var li2=ulIdx2.children;
    var li3=ulIdx3.children;
    var li4=ulIdx4.children;
    var li5=ulIdx5.children;
    var li6=ulIdx6.children;
    //
    var lione=ulIdxone.children;
    var litwo=ulIdxtwo.children;
    var lithree=ulIdxthree.children;
    var lifore=ulIdxfore.children;
    var lifive=ulIdxfive.children;
    var lisix=ulIdxsix.children;
    //
    function moveTo(to){
      if(to==undefined){
        to=i+1;
      }
      if(i==0){
        if(to>i){
          ulImgs.className="transition";
          ulImg2.className="transition";
          ulImg3.className="transition";
          ulImg4.className="transition";
          ulImg5.className="transition";
          ulImg6.className="transition";
        }else{
          ulImgs.className="";
          ulImg2.className="";
          ulImg3.className="";
          ulImg4.className="";
          ulImg5.className="";
          ulImg6.className="";
          ulImgs.style.marginLeft=-LIWIDTH*LICOUNT+"px";
          ulImg2.style.marginLeft=-LIWIDTH*LICOUNT+"px";
          ulImg3.style.marginLeft=-LIWIDTH*LICOUNT+"px";
          ulImg4.style.marginLeft=-LIWIDTH*LICOUNT+"px";
          ulImg5.style.marginLeft=-LIWIDTH*LICOUNT+"px";
          ulImg6.style.marginLeft=-LIWIDTH*LICOUNT+"px";
          setTimeout(function(){
            moveTo(LICOUNT-1);
          },100);
          return;
        }
      }
      i=to;
      ulImgs.style.marginLeft=-i*LIWIDTH+"px";
      ulImg2.style.marginLeft=-i*LIWIDTH+"px";
      ulImg3.style.marginLeft=-i*LIWIDTH+"px";
      ulImg4.style.marginLeft=-i*LIWIDTH+"px";
      ulImg5.style.marginLeft=-i*LIWIDTH+"px";
      ulImg6.style.marginLeft=-i*LIWIDTH+"px";
      for(var li of lis){
        li.className=""
      } 
      for(var li of li2){
        li.className=""
      } 
      for(var li of li3){
        li.className=""
      } 
      for(var li of li4){
        li.className=""
      } 
      for(var li of li5){
        li.className=""
      } 
      for(var li of li6){
        li.className=""
      }
      
      if(i==LICOUNT){
        i=0;
        setTimeout(function(){
          ulImgs.className="";
          ulImg2.className="";
           ulImg3.className="";
           ulImg4.className="";
           ulImg5.className="";
           ulImg6.className="";
          ulImgs.style.marginLeft=0;
          ulImg2.style.marginLeft=0;
          ulImg3.style.marginLeft=0;
          ulImg4.style.marginLeft=0;
          ulImg5.style.marginLeft=0;
          ulImg6.style.marginLeft=0;
        },DURATION)
      }
      lis[i].className="active";
      li2[i].className="active";
      li3[i].className="active";
      li4[i].className="active";
      li5[i].className="active";
      li6[i].className="active";
    }
    //
        function moveTo01(to){
      if(to==undefined){
        to=i+1;
      }
      if(i==0){
        if(to>i){
          ulImgone01.className="transition";
          ulImgtwo01.className="transition";
          ulImgthree01.className="transition";
          ulImgfore01.className="transition";
          ulImgfive01.className="transition";
          ulImgsix01.className="transition";
          
        }else{
          ulImgone01.className="";
          ulImgtwo01.className="";
          ulImgthree01.className="";
          ulImgfore01.className="";
          ulImgfive01.className="";
          ulImgsix01.className="";
          
          ulImgone01.style.marginLeft=-LIWIDTH*LICOUNT+"px";
          ulImgtwo01.style.marginLeft=-LIWIDTH*LICOUNT+"px";
           ulImgthree01.style.marginLeft=-LIWIDTH*LICOUNT+"px";
           ulImgfore01.style.marginLeft=-LIWIDTH*LICOUNT+"px";
           ulImgfive01.style.marginLeft=-LIWIDTH*LICOUNT+"px";
            ulImgsix01.style.marginLeft=-LIWIDTH*LICOUNT+"px";
          
          setTimeout(function(){
            moveTo01(LICOUNT-1);
          },100);
          return;
        }
      }
      i=to;
      ulImgone01.style.marginLeft=-i*LIWIDTH+"px";
      ulImgtwo01.style.marginLeft=-i*LIWIDTH+"px";
      ulImgthree01.style.marginLeft=-i*LIWIDTH+"px";
      ulImgfore01.style.marginLeft=-i*LIWIDTH+"px";
      ulImgfive01.style.marginLeft=-i*LIWIDTH+"px";
      ulImgsix01.style.marginLeft=-i*LIWIDTH+"px";
      
      for(var li of lione){
        li.className=""
      } 
       for(var li of litwo){
        li.className=""
      } 
      for(var li of lithree){
        li.className=""
      } 
      for(var li of lifore){
        li.className=""
      } 
      for(var li of lifive){
        li.className=""
      } 
      for(var li of lisix){
        li.className=""
      } 
      
      if(i==LICOUNT){
        i=0;
        setTimeout(function(){
          ulImgone01.className="";
           ulImgtwo01.className="";
           ulImgthree01.className="";
           ulImgfore01.className="";
           ulImgfive01.className="";
           ulImgsix01.className="";
          
          ulImgone01.style.marginLeft=0;
          ulImgtwo01.style.marginLeft=0;
          ulImgthree01.style.marginLeft=0;
          ulImgfore01.style.marginLeft=0;
          ulImgfive01.style.marginLeft=0;
          ulImgsix01.style.marginLeft=0;
          
        },DURATION)
      }
      lione[i].className="active";
       litwo[i].className="active";
       lithree[i].className="active";
       lifore[i].className="active";
       lifive[i].className="active";
       lisix[i].className="active";
    }
     var btnLeft=document.getElementsByClassName('btn-left')[0];
    var btnRight=document.getElementsByClassName('btn-right')[0];
    var btnLeft01=document.getElementsByClassName('btn-left01')[0];
    var btnRight01=document.getElementsByClassName('btn-right01')[0];
    var canClick=true;
    btnRight.onclick=function(){
      move(1)
    }
     btnRight01.onclick=function(){
      move01(1)
    }
    function move(n){
      if(canClick){
        moveTo(i+n);
        canClick=false;
        setTimeout(function(){
          canClick=true;
        },DURATION+100);
      }
    }
    function move01(n){
      if(canClick){
        moveTo01(i+n);
        canClick=false;
        setTimeout(function(){
          canClick=true;
        },DURATION+100);
      }
    }
    btnLeft.onclick=function(){
      move(-1);
    }
     btnLeft01.onclick=function(){
      move01(-1);
    }
    var canClick=true;
    
    
    ulIdxs.onclick=function(e){
      if(canClick){
        var li=e.target;
        if(li.nodeName=="LI"){
          if(li.className!=="active"){
            for(var i=0;i<lis.length;i++){
              if(lis[i]==li){
                break;
              }
            }
            moveTo(i);
            setTimeout(function(){
              canClick=true;
            },DURATION);
          }
        }
      }
    }
    ulIdxone.onclick=function(e){
      if(canClick){
        var li=e.target;
        if(li.nodeName=="LI"){
          if(li.className!=="active"){
            for(var i=0;i<lione.length;i++){
              if(lione[i]==li){
                break;
              }
            }
            moveTo01(i);
            setTimeout(function(){
              canClick=true;
            },DURATION);
          }
        }
      }
    }
     ulIdx2.onclick=function(e){
      if(canClick){
        var li=e.target;
        if(li.nodeName=="LI"){
          if(li.className!=="active"){
            for(var i=0;i<li2.length;i++){
              if(li2[i]==li){
                break;
              }
            }
            moveTo(i);
            setTimeout(function(){
              canClick=true;
            },DURATION);
          }
        }
      }
    }
      ulIdx3.onclick=function(e){
      if(canClick){
        var li=e.target;
        if(li.nodeName=="LI"){
          if(li.className!=="active"){
            for(var i=0;i<li3.length;i++){
              if(li3[i]==li){
                break;
              }
            }
            moveTo(i);
            setTimeout(function(){
              canClick=true;
            },DURATION);
          }
        }
      }
    }
       ulIdx4.onclick=function(e){
      if(canClick){
        var li=e.target;
        if(li.nodeName=="LI"){
          if(li.className!=="active"){
            for(var i=0;i<li4.length;i++){
              if(li4[i]==li){
                break;
              }
            }
            moveTo(i);
            setTimeout(function(){
              canClick=true;
            },DURATION);
          }
        }
      }
    }
        ulIdx5.onclick=function(e){
      if(canClick){
        var li=e.target;
        if(li.nodeName=="LI"){
          if(li.className!=="active"){
            for(var i=0;i<li5.length;i++){
              if(li5[i]==li){
                break;
              }
            }
            moveTo(i);
            setTimeout(function(){
              canClick=true;
            },DURATION);
          }
        }
      }
    }
         ulIdx6.onclick=function(e){
      if(canClick){
        var li=e.target;
        if(li.nodeName=="LI"){
          if(li.className!=="active"){
            for(var i=0;i<li6.length;i++){
              if(li6[i]==li){
                break;
              }
            }
            moveTo(i);
            setTimeout(function(){
              canClick=true;
            },DURATION);
          }
        }
      }
    }
      ulIdxtwo.onclick=function(e){
      if(canClick){
        var li=e.target;
        if(li.nodeName=="LI"){
          if(li.className!=="active"){
            for(var i=0;i<litwo.length;i++){
              if(litwo[i]==li){
                break;
              }
            }
            moveTo01(i);
            setTimeout(function(){
              canClick=true;
            },DURATION);
          }
        }
      }
    }
      ulIdxthree.onclick=function(e){
      if(canClick){
        var li=e.target;
        if(li.nodeName=="LI"){
          if(li.className!=="active"){
            for(var i=0;i<lithree.length;i++){
              if(lithree[i]==li){
                break;
              }
            }
            moveTo01(i);
            setTimeout(function(){
              canClick=true;
            },DURATION);
          }
        }
      }
    }
      ulIdxfore.onclick=function(e){
      if(canClick){
        var li=e.target;
        if(li.nodeName=="LI"){
          if(li.className!=="active"){
            for(var i=0;i<lifore.length;i++){
              if(lifore[i]==li){
                break;
              }
            }
            moveTo01(i);
            setTimeout(function(){
              canClick=true;
            },DURATION);
          }
        }
      }
    }
      ulIdxfive.onclick=function(e){
      if(canClick){
        var li=e.target;
        if(li.nodeName=="LI"){
          if(li.className!=="active"){
            for(var i=0;i<lifive.length;i++){
              if(lifive[i]==li){
                break;
              }
            }
            moveTo01(i);
            setTimeout(function(){
              canClick=true;
            },DURATION);
          }
        }
      }
    }
      ulIdxsix.onclick=function(e){
      if(canClick){
        var li=e.target;
        if(li.nodeName=="LI"){
          if(li.className!=="active"){
            for(var i=0;i<lisix.length;i++){
              if(lisixtwo[i]==li){
                break;
              }
            }
            moveTo01(i);
            setTimeout(function(){
              canClick=true;
            },DURATION);
          }
        }
      }
    }