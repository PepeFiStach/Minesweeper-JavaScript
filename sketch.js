var cells=[];
var bombs=[];
var tabWithIndexMines=[];
var r=0,p=0,o=0,n=0,m=0,l=0,k=0,x=0,y=0,xBomb,yBomb,count=0;
function loadMap(){
  for (var i = 0; i < 72; i++) {
    if(i<=8){
      x=(5*i)+50*i+5;
      y=5;
    }
    if(i>8 && i<=17){
      x=(5*k)+50*k+5;
      y=60; //5+55
      k++;
    }
    if(i>17 && i<=26){
      x=(5*l)+50*l+5;
      y=115; //5+55
      l++;
    }
    if(i>26 && i<=35){
      x=(5*m)+50*m+5;
      y=170; //5+55
      m++;
    }
    if(i>35 && i<=44){
      x=(5*n)+50*n+5;
      y=225; //5+55
      n++;
    }
    if(i>44 && i<=53){
      x=(5*o)+50*o+5;
      y=280; //5+55
      o++;
    }
    if(i>53 && i<=62){
      x=(5*p)+50*p+5;
      y=335; //5+55
      p++;
    }
    if(i>62 && i<=71){
      x=(5*r)+50*r+5;
      y=390; //5+55
      r++;
    }
    cells.push(new Map(x,y,true));
    if(count<9){
      if(Math.floor(Math.random()*10)+1>=9){
        bombs.push(new Bomb(x,y,"brown"));
        count++;
      }
      else {
        bombs.push(new Bomb(x,y,"lightblue"));
      }
    }
    else {
      bombs.push(new Bomb(x,y,"lightblue"));
    }
  }
}
function mousePress(){
  for (var i = 0; i < cells.length; i++) {
    cells[i].setup();
  }
  for (var i = 0; i < bombs.length; i++) {
    bombs[i].setup();
    bombs[i].seveToTabWithMines(bombs,tabWithIndexMines,i);
  }
  for (var i = 0; i < bombs.length; i++) {
    bombs[i].wypisac(bombs,tabWithIndexMines,i);
  }
}
loadMap();
mousePress();

function draw(){
  var canvas=document.getElementById("myCanvas");
  ctx=canvas.getContext("2d");
  ctx.fillStyle="grey";
  ctx.fillRect(0,0,1000,1000);
  ctx.fillStyle="black";
  ctx.fillRect(0,0,500,445);
  for (var i = 0; i < bombs.length; i++) {
    bombs[i].distBomb(cells);
    bombs[i].show();
    bombs[i].set();
  }
  for (var i = 0; i < cells.length; i++) {
    cells[i].distFlag();
    cells[i].distLeftClick(cells);
    cells[i].show();
  }
}
setInterval(draw,10);
