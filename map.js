var mouseRightClickX=0,mouseRightClickY=0,mouseLeftClickX=0,mouseLeftClickY=0;
var to=false;
var flags=[];
function Map(x,y,visible){
  this.xPos=x;
  this.yPos=y;
  this.visible=visible;
  // this.mouseRightClickX=0;
  // this.mouseRightClickY=0;
  this.isFlag=false;
  this.delRight=false;
  this.delLeft=false;
  this.colFlag="rgb(100,100,100)";

  this.update=function(){
  }
  this.setup=function() {
    document.addEventListener("mousedown",this.clickFn);
  }
  this.clickFn=function(e) {
    switch(e.which){
      case 3:
        this.mouseRightClickX=e.clientX;
        this.mouseRightClickY=e.clientY;
        break;
      case 1:
        this.mouseLeftClickX=e.clientX;
        this.mouseLeftClickY=e.clientY;
        break;
    }
    mouseRightClickX=this.mouseRightClickX;
    mouseRightClickY=this.mouseRightClickY;
    mouseLeftClickX=this.mouseLeftClickX;
    mouseLeftClickY=this.mouseLeftClickY;
  }
  this.distFlag=function() {
    this.aRightClick=mouseRightClickX-(this.xPos+35);
    this.bRightClick=mouseRightClickY-(this.yPos+35);
    this.cRightClick=Math.floor(Math.sqrt(this.aRightClick*this.aRightClick+this.bRightClick*this.bRightClick));
    if(this.cRightClick<=33 && this.cRightClick>10 && mouseRightClickX!=0 && mouseRightClickY!=0){
      if(!this.isFlag){
        flags.push(new Flag(this.xPos+20,this.yPos+20,this.colFlag));
        this.isFlag=true;
      }
    }
    if(this.cRightClick<=10 && this.isFlag){
      this.indexOffRight=flags.findIndex(i=>i.xPos<=mouseRightClickX&&i.xPos+20>=mouseRightClickX&&i.yPos<=mouseRightClickY&&i.yPos+20>=mouseRightClickY);
      if(!this.delRight){
        this.delRight=true;
        flags.splice(this.indexOffRight,1);
      }
      if(this.delRight){
        mouseRightClickX=0;
        mouseRightClickY=0;
        this.isFlag=false;
        this.delRight=false;
      }
    }
  }
  this.distLeftClick=function(tab){
    this.aLeftClick=mouseLeftClickX-(this.xPos+35);
    this.bLeftClick=mouseLeftClickY-(this.yPos+35);
    this.cLeftClick=Math.floor(Math.sqrt(this.aLeftClick*this.aLeftClick+this.bLeftClick*this.bLeftClick));
    this.tab=tab;
    if(this.cLeftClick<=33 && mouseLeftClickX!=0 && mouseLeftClickY!=0){
      this.indexOffLeft=this.tab.findIndex(x=>x.xPos<=mouseLeftClickX&&x.xPos+50>=mouseLeftClickX&&x.yPos<=mouseLeftClickY&&x.yPos+50>=mouseLeftClickY);
      if(!this.delLeft){
        this.delLeft=true;
        // this.tab.splice(this.indexOffLeft,1);
        this.visible=false;
      }
    }
  }
  this.show=function(){
    if(this.visible){
      ctx.fillStyle="darkgrey";
      ctx.fillRect(this.xPos,this.yPos,50,50);
      for (var i = 0; i < flags.length; i++) {
        flags[i].show();
      }
    }
  }
}
