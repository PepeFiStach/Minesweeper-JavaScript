function Flag(x,y,col){
  this.xPos=x;
  this.yPos=y;
  this.show=function() {
    ctx.fillStyle=col;
    ctx.fillRect(this.xPos,this.yPos,10,10);
  }
}
