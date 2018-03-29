var mouseLeftClickX,mouseLeftClickY,saveIndexOffColor=0
var save1=0,save2=0,save3=0,save4=0,save5=0,save6=0,save7=0,save8=0,save9=0;
function Bomb(x,y,col){
  this.xPos=x;
  this.yPos=y;
  this.col=col;
  this.delBomb=false;

  this.seveToTabWithMines=function(tab5,tab6,indeks){
    this.tab5=tab5;
    this.tab6=tab6;
    this.indeks=indeks;
    if(this.col=="brown"){
      this.indexOffColor=this.tab5.findIndex(i=>i.col=="brown");
      this.tab6.push(this.indexOffColor);
      save1=this.tab6[0];
      save2=this.tab6[1];
      save3=this.tab6[2];
      save4=this.tab6[3];
      save5=this.tab6[4];
      save6=this.tab6[5];
      save7=this.tab6[6];
      save8=this.tab6[7];
      save9=this.tab6[8];
      this.col="red";
    }
  }
  this.wypisac=function(tab7,tab8,indeks){
    this.tab7=tab7;
    this.tab8=tab8;
    this.indeks=indeks;

    if(this.indeks==save1-1 && this.col!=="red"&& save1!==0 && save1!==9&& save1!==18&& save1!==27&& save1!==36&& save1!==45&& save1!==54&& save1!==63 && this.col=="lightblue"){
      this.col="grey";
      this.ooo=true; //w lewo
    }
    if(this.indeks==save1+1 && this.col!=="red"&& save1!==8&& save1!==17&& save1!==26&& save1!==35&& save1!==44&& save1!==53&& save1!==62 && save1!==71 && this.col=="lightblue"){
      this.col="grey";
      this.ooo=true; // w prawo
    }
    if(this.indeks==save1-9&& this.col!=="red" && this.col=="lightblue"){
      this.col="grey";
      this.ooo=true;
    }
    if(this.indeks==save1-10&& this.col!=="red" && save1!==0 && save1!==9&& save1!==18&& save1!==27&& save1!==36&& save1!==45&& save1!==54&& save1!==63&& this.col=="lightblue"){
      this.col="grey";
      this.ooo=true;
    }
    if(this.indeks==save1-8&& this.col!=="red" && save1!==8&& save1!==17&& save1!==26&& save1!==35&& save1!==44&& save1!==53&& save1!==62 && save1!==71&& this.col=="lightblue"){
      this.col="grey";
      this.ooo=true;
    }
    if(this.indeks==save1+8&& this.col!=="red" && save1!==0 && save1!==9&& save1!==18&& save1!==27&& save1!==36&& save1!==45&& save1!==54&& save1!==63&& this.col=="lightblue"){
      this.col="grey";
      this.ooo=true;
    }
    if(this.indeks==save1+9&& this.col!=="red"&& this.col=="lightblue"){
      this.col="grey";
      this.ooo=true;
    }
    if(this.indeks==save1+10&& this.col!=="red" &&save1!==8&& save1!==17&& save1!==26&& save1!==35&& save1!==44&& save1!==53&& save1!==62 && save1!==71&& this.col=="lightblue"){
      this.col="grey";
      this.ooo=true;
    }

    //222222222222222

    //change color save1 dotyka save2 DOTYKA purple CZYLI  USTAWIA 8

    if(this.indeks==save2-1 && this.col!=="red"&& save2!==0 && save2!==9&& save2!==18&& save2!==27&& save2!==36&& save2!==45&& save2!==54&& save2!==63&& this.col=="purple"){
      this.col="blue";
      this.ooo=false;
      this.booo=false; //w lewo
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=false;
      this.pooo=false;
      this.rooo=true;
    }
    if(this.indeks==save2+1 && this.col!=="red"&& save2!==8&& save2!==17&& save2!==26&& save2!==35&& save2!==44&& save2!==53&& save2!==62 && save2!==71&& this.col=="purple"){
      this.col="blue";
      this.ooo=false;
      this.booo=false; // w prawo
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=false;
      this.pooo=false;
      this.rooo=true;
    }
    if(this.indeks==save2-9&& this.col!=="red"&& this.col=="purple"){
      this.col="blue";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=false;
      this.pooo=false;
      this.rooo=true;
    }
    if(this.indeks==save2-10&& this.col!=="red" && save2!==0 && save2!==9&& save2!==18&& save2!==27&& save2!==36&& save2!==45&& save2!==54&& save2!==63&& this.col=="purple"){
      this.col="blue";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=false;
      this.pooo=false;
      this.rooo=true;
    }
    if(this.indeks==save2-8&& this.col!=="red" && save2!==8&& save2!==17&& save2!==26&& save2!==35&& save2!==44&& save2!==53&& save2!==62 && save2!==71&& this.col=="purple"){
      this.col="blue";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=false;
      this.pooo=false;
      this.rooo=true;
    }
    if(this.indeks==save2+8&& this.col!=="red" && save2!==0 && save2!==9&& save2!==18&& save2!==27&& save2!==36&& save2!==45&& save2!==54&& save2!==63&& this.col=="purple"){
      this.col="blue";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=false;
      this.pooo=false;
      this.rooo=true;
    }
    if(this.indeks==save2+9&& this.col!=="red"&& this.col=="purple"){
      this.col="blue";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=false;
      this.pooo=false;
      this.rooo=true;
      }
    if(this.indeks==save2+10&& this.col!=="red" &&save2!==8&& save2!==17&& save2!==26&& save2!==35&& save2!==44&& save2!==53&& save2!==62 && save2!==71&& this.col=="purple"){
      this.col="blue";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=false;
      this.pooo=false;
      this.rooo=true;
    }

    //change color save1 dotyka save2 DOTYKA violet CZYLI  USTAWIA 7

    if(this.indeks==save2-1 && this.col!=="red"&& save2!==0 && save2!==9&& save2!==18&& save2!==27&& save2!==36&& save2!==45&& save2!==54&& save2!==63&& this.col=="violet"){
      this.col="purple";
      this.ooo=false;
      this.booo=false; //w lewo
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=false;
      this.pooo=true;
    }
    if(this.indeks==save2+1 && this.col!=="red"&& save2!==8&& save2!==17&& save2!==26&& save2!==35&& save2!==44&& save2!==53&& save2!==62 && save2!==71&& this.col=="violet"){
      this.col="purple";
      this.ooo=false;
      this.booo=false; // w prawo
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=false;
      this.pooo=true;
    }
    if(this.indeks==save2-9&& this.col!=="red"&& this.col=="violet"){
      this.col="purple";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=false;
      this.pooo=true;
    }
    if(this.indeks==save2-10&& this.col!=="red" && save2!==0 && save2!==9&& save2!==18&& save2!==27&& save2!==36&& save2!==45&& save2!==54&& save2!==63&& this.col=="violet"){
      this.col="purple";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=false;
      this.pooo=true;
    }
    if(this.indeks==save2-8&& this.col!=="red" && save2!==8&& save2!==17&& save2!==26&& save2!==35&& save2!==44&& save2!==53&& save2!==62 && save2!==71&& this.col=="violet"){
      this.col="purple";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=false;
      this.pooo=true;
    }
    if(this.indeks==save2+8&& this.col!=="red" && save2!==0 && save2!==9&& save2!==18&& save2!==27&& save2!==36&& save2!==45&& save2!==54&& save2!==63&& this.col=="violet"){
      this.col="purple";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=false;
      this.pooo=true;
    }
    if(this.indeks==save2+9&& this.col!=="red"&& this.col=="violet"){
      this.col="purple";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=false;
      this.pooo=true;
      }
    if(this.indeks==save2+10&& this.col!=="red" &&save2!==8&& save2!==17&& save2!==26&& save2!==35&& save2!==44&& save2!==53&& save2!==62 && save2!==71&& this.col=="violet"){
      this.col="purple";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=false;
      this.pooo=true;
    }

    //change color save1 dotyka save2 DOTYKA lightgreen CZYLI  USTAWIA 6

    if(this.indeks==save2-1 && this.col!=="red"&& save2!==0 && save2!==9&& save2!==18&& save2!==27&& save2!==36&& save2!==45&& save2!==54&& save2!==63&& this.col=="lightgreen"){
      this.col="violet";
      this.ooo=false;
      this.booo=false; //w lewo
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=true;
    }
    if(this.indeks==save2+1 && this.col!=="red"&& save2!==8&& save2!==17&& save2!==26&& save2!==35&& save2!==44&& save2!==53&& save2!==62 && save2!==71&& this.col=="lightgreen"){
      this.col="violet";
      this.ooo=false;
      this.booo=false; // w prawo
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=true;
    }
    if(this.indeks==save2-9&& this.col!=="red"&& this.col=="lightgreen"){
      this.col="violet";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=true;
    }
    if(this.indeks==save2-10&& this.col!=="red" && save2!==0 && save2!==9&& save2!==18&& save2!==27&& save2!==36&& save2!==45&& save2!==54&& save2!==63&& this.col=="lightgreen"){
      this.col="violet";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=true;
    }
    if(this.indeks==save2-8&& this.col!=="red" && save2!==8&& save2!==17&& save2!==26&& save2!==35&& save2!==44&& save2!==53&& save2!==62 && save2!==71&& this.col=="lightgreen"){
      this.col="violet";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=true;
    }
    if(this.indeks==save2+8&& this.col!=="red" && save2!==0 && save2!==9&& save2!==18&& save2!==27&& save2!==36&& save2!==45&& save2!==54&& save2!==63&& this.col=="lightgreen"){
      this.col="violet";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=true;
    }
    if(this.indeks==save2+9&& this.col!=="red"&& this.col=="lightgreen"){
      this.col="violet";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=true;
      }
    if(this.indeks==save2+10&& this.col!=="red" &&save2!==8&& save2!==17&& save2!==26&& save2!==35&& save2!==44&& save2!==53&& save2!==62 && save2!==71&& this.col=="lightgreen"){
      this.col="violet";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=true;
    }

    //change color save1 dotyka save2 DOTYKA PINK CZYLI  USTAWIA 5

    if(this.indeks==save2-1 && this.col!=="red"&& save2!==0 && save2!==9&& save2!==18&& save2!==27&& save2!==36&& save2!==45&& save2!==54&& save2!==63&& this.col=="pink"){
      this.col="lightgreen";
      this.ooo=false;
      this.booo=false; //w lewo
      this.looo=false;
      this.tooo=false;
      this.mooo=true;
    }
    if(this.indeks==save2+1 && this.col!=="red"&& save2!==8&& save2!==17&& save2!==26&& save2!==35&& save2!==44&& save2!==53&& save2!==62 && save2!==71&& this.col=="pink"){
      this.col="lightgreen";
      this.ooo=false;
      this.booo=false; // w prawo
      this.looo=false;
      this.tooo=false;
      this.mooo=true;
    }
    if(this.indeks==save2-9&& this.col!=="red"&& this.col=="pink"){
      this.col="lightgreen";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=true;
    }
    if(this.indeks==save2-10&& this.col!=="red" && save2!==0 && save2!==9&& save2!==18&& save2!==27&& save2!==36&& save2!==45&& save2!==54&& save2!==63&& this.col=="pink"){
      this.col="lightgreen";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=true;
    }
    if(this.indeks==save2-8&& this.col!=="red" && save2!==8&& save2!==17&& save2!==26&& save2!==35&& save2!==44&& save2!==53&& save2!==62 && save2!==71&& this.col=="pink"){
      this.col="lightgreen";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=true;
    }
    if(this.indeks==save2+8&& this.col!=="red" && save2!==0 && save2!==9&& save2!==18&& save2!==27&& save2!==36&& save2!==45&& save2!==54&& save2!==63&& this.col=="pink"){
      this.col="lightgreen";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=true;
    }
    if(this.indeks==save2+9&& this.col!=="red"&& this.col=="pink"){
      this.col="lightgreen";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=true;
      }
    if(this.indeks==save2+10&& this.col!=="red" &&save2!==8&& save2!==17&& save2!==26&& save2!==35&& save2!==44&& save2!==53&& save2!==62 && save2!==71&& this.col=="pink"){
      this.col="lightgreen";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=true;
    }

    //change color save1 dotyka save2 DOTYKA ORANGE CZYLI USTAWIA 4

    if(this.indeks==save2-1 && this.col!=="red"&& save2!==0 && save2!==9&& save2!==18&& save2!==27&& save2!==36&& save2!==45&& save2!==54&& save2!==63&& this.col=="orange"){
      this.col="pink";
      this.ooo=false;
      this.booo=false; //w lewo
      this.looo=false;
      this.tooo=true;
    }
    if(this.indeks==save2+1 && this.col!=="red"&& save2!==8&& save2!==17&& save2!==26&& save2!==35&& save2!==44&& save2!==53&& save2!==62 && save2!==71&& this.col=="orange"){
      this.col="pink";
      this.ooo=false;
      this.booo=false; // w prawo
      this.looo=false;
      this.tooo=true;
    }
    if(this.indeks==save2-9&& this.col!=="red"&& this.col=="orange"){
      this.col="pink";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=true;
    }
    if(this.indeks==save2-10&& this.col!=="red" && save2!==0 && save2!==9&& save2!==18&& save2!==27&& save2!==36&& save2!==45&& save2!==54&& save2!==63&& this.col=="orange"){
      this.col="pink";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=true;
    }
    if(this.indeks==save2-8&& this.col!=="red" && save2!==8&& save2!==17&& save2!==26&& save2!==35&& save2!==44&& save2!==53&& save2!==62 && save2!==71&& this.col=="orange"){
      this.col="pink";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=true;
    }
    if(this.indeks==save2+8&& this.col!=="red" && save2!==0 && save2!==9&& save2!==18&& save2!==27&& save2!==36&& save2!==45&& save2!==54&& save2!==63&& this.col=="orange"){
      this.col="pink";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=true;
    }
    if(this.indeks==save2+9&& this.col!=="red"&& this.col=="orange"){
      this.col="pink";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=true;
      }
    if(this.indeks==save2+10&& this.col!=="red" &&save2!==8&& save2!==17&& save2!==26&& save2!==35&& save2!==44&& save2!==53&& save2!==62 && save2!==71&& this.col=="orange"){
      this.col="pink";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=true;
    }

    //change color save1 dotyka save2 DOTYKA GREEN CZYLI USTAWIA 3

    if(this.indeks==save2-1 && this.col!=="red"&& save2!==0 && save2!==9&& save2!==18&& save2!==27&& save2!==36&& save2!==45&& save2!==54&& save2!==63&& this.col=="green"){
      this.col="orange";
      this.ooo=false;
      this.booo=false; //w lewo
      this.looo=true;
    }
    if(this.indeks==save2+1 && this.col!=="red"&& save2!==8&& save2!==17&& save2!==26&& save2!==35&& save2!==44&& save2!==53&& save2!==62 && save2!==71&& this.col=="green"){
      this.col="orange";
      this.ooo=false;
      this.booo=false; // w prawo
      this.looo=true;
    }
    if(this.indeks==save2-9&& this.col!=="red"&& this.col=="green"){
      this.col="orange";
      this.ooo=false;
      this.booo=false;
      this.looo=true;
    }
    if(this.indeks==save2-10&& this.col!=="red" && save2!==0 && save2!==9&& save2!==18&& save2!==27&& save2!==36&& save2!==45&& save2!==54&& save2!==63&& this.col=="green"){
      this.col="orange";
      this.ooo=false;
      this.booo=false;
      this.looo=true;
    }
    if(this.indeks==save2-8&& this.col!=="red" && save2!==8&& save2!==17&& save2!==26&& save2!==35&& save2!==44&& save2!==53&& save2!==62 && save2!==71&& this.col=="green"){
      this.col="orange";
      this.ooo=false;
      this.booo=false;
      this.looo=true;
    }
    if(this.indeks==save2+8&& this.col!=="red" && save2!==0 && save2!==9&& save2!==18&& save2!==27&& save2!==36&& save2!==45&& save2!==54&& save2!==63&& this.col=="green"){
      this.col="orange";
      this.ooo=false;
      this.booo=false;
      this.looo=true;
    }
    if(this.indeks==save2+9&& this.col!=="red"&& this.col=="green"){
      this.col="orange";
      this.ooo=false;
      this.booo=false;
      this.looo=true;
    }
    if(this.indeks==save2+10&& this.col!=="red" &&save2!==8&& save2!==17&& save2!==26&& save2!==35&& save2!==44&& save2!==53&& save2!==62 && save2!==71&& this.col=="green"){
      this.col="orange";
      this.ooo=false;
      this.booo=false;
      this.looo=true;
    }

    //change color save1 dotyka save2 DOTYKA GREY CZYLI USTAWIA 2

    if(this.indeks==save2-1 && this.col!=="red"&& save2!==0 && save2!==9&& save2!==18&& save2!==27&& save2!==36&& save2!==45&& save2!==54&& save2!==63&& this.col=="grey"){
      this.col="green";
      this.ooo=false;
      this.booo=true; //w lewo
    }
    if(this.indeks==save2+1 && this.col!=="red"&& save2!==8&& save2!==17&& save2!==26&& save2!==35&& save2!==44&& save2!==53&& save2!==62 && save2!==71&& this.col=="grey"){
      this.col="green";
      this.ooo=false;
      this.booo=true; // w prawo
    }
    if(this.indeks==save2-9&& this.col!=="red"&& this.col=="grey"){
      this.col="green";
      this.ooo=false;
      this.booo=true;
    }
    if(this.indeks==save2-10&& this.col!=="red" && save2!==0 && save2!==9&& save2!==18&& save2!==27&& save2!==36&& save2!==45&& save2!==54&& save2!==63&& this.col=="grey"){
      this.col="green";
      this.ooo=false;
      this.booo=true;
    }
    if(this.indeks==save2-8&& this.col!=="red" && save2!==8&& save2!==17&& save2!==26&& save2!==35&& save2!==44&& save2!==53&& save2!==62 && save2!==71&& this.col=="grey"){
      this.col="green";
      this.ooo=false;
      this.booo=true;
    }
    if(this.indeks==save2+8&& this.col!=="red" && save2!==0 && save2!==9&& save2!==18&& save2!==27&& save2!==36&& save2!==45&& save2!==54&& save2!==63&& this.col=="grey"){
      this.col="green";
      this.ooo=false;
      this.booo=true;
    }
    if(this.indeks==save2+9&& this.col!=="red"&& this.col=="grey"){
      this.col="green";
      this.ooo=false;
      this.booo=true;
    }
    if(this.indeks==save2+10&& this.col!=="red" &&save2!==8&& save2!==17&& save2!==26&& save2!==35&& save2!==44&& save2!==53&& save2!==62 && save2!==71&& this.col=="grey"){
      this.col="green";
      this.ooo=false;
      this.booo=true;
    }

    //222222222222222

    if(this.indeks==save2-1 && this.col!=="red"&& save2!==0 && save2!==9&& save2!==18&& save2!==27&& save2!==36&& save2!==45&& save2!==54&& save2!==63&& this.col=="lightblue"){
      this.col="grey";
      this.ooo=true; //w lewo
    }
    if(this.indeks==save2+1 && this.col!=="red"&& save2!==8&& save2!==17&& save2!==26&& save2!==35&& save2!==44&& save2!==53&& save2!==62 && save2!==71&& this.col=="lightblue"){
      this.col="grey";
      this.ooo=true; // w prawo
    }
    if(this.indeks==save2-9&& this.col!=="red"&& this.col=="lightblue"){
      this.col="grey";
      this.ooo=true;
    }
    if(this.indeks==save2-10&& this.col!=="red" && save2!==0 && save2!==9&& save2!==18&& save2!==27&& save2!==36&& save2!==45&& save2!==54&& save2!==63&& this.col=="lightblue"){
      this.col="grey";
      this.ooo=true;
    }
    if(this.indeks==save2-8&& this.col!=="red" && save2!==8&& save2!==17&& save2!==26&& save2!==35&& save2!==44&& save2!==53&& save2!==62 && save2!==71&& this.col=="lightblue"){
      this.col="grey";
      this.ooo=true;
    }
    if(this.indeks==save2+8&& this.col!=="red" && save2!==0 && save2!==9&& save2!==18&& save2!==27&& save2!==36&& save2!==45&& save2!==54&& save2!==63&& this.col=="lightblue"){
      this.col="grey";
      this.ooo=true;
    }
    if(this.indeks==save2+9&& this.col!=="red"&& this.col=="lightblue"){
      this.col="grey";
      this.ooo=true;
    }
    if(this.indeks==save2+10&& this.col!=="red" &&save2!==8&& save2!==17&& save2!==26&& save2!==35&& save2!==44&& save2!==53&& save2!==62 && save2!==71&& this.col=="lightblue"){
      this.col="grey";
      this.ooo=true;
    }

    //33333333333333333

    //change color save1 dotyka save2 DOTYKA purple CZYLI  USTAWIA 8

    if(this.indeks==save3-1 && this.col!=="red"&& save3!==0 && save3!==9&& save3!==18&& save3!==27&& save3!==36&& save3!==45&& save3!==54&& save3!==63&& this.col=="purple"){
      this.col="blue";
      this.ooo=false;
      this.booo=false; //w lewo
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=false;
      this.pooo=false;
      this.rooo=true;
    }
    if(this.indeks==save3+1 && this.col!=="red"&& save3!==8&& save3!==17&& save3!==26&& save3!==35&& save3!==44&& save3!==53&& save3!==62 && save3!==71&& this.col=="purple"){
      this.col="blue";
      this.ooo=false;
      this.booo=false; // w prawo
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=false;
      this.pooo=false;
      this.rooo=true;
    }
    if(this.indeks==save3-9&& this.col!=="red"&& this.col=="purple"){
      this.col="blue";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=false;
      this.pooo=false;
      this.rooo=true;
    }
    if(this.indeks==save3-10&& this.col!=="red" && save3!==0 && save3!==9&& save3!==18&& save3!==27&& save3!==36&& save3!==45&& save3!==54&& save3!==63&& this.col=="purple"){
      this.col="blue";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=false;
      this.pooo=false;
      this.rooo=true;
    }
    if(this.indeks==save3-8&& this.col!=="red" && save3!==8&& save3!==17&& save3!==26&& save3!==35&& save3!==44&& save3!==53&& save3!==62 && save3!==71&& this.col=="purple"){
      this.col="blue";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=false;
      this.pooo=false;
      this.rooo=true;
    }
    if(this.indeks==save3+8&& this.col!=="red" && save3!==0 && save3!==9&& save3!==18&& save3!==27&& save3!==36&& save3!==45&& save3!==54&& save3!==63&& this.col=="purple"){
      this.col="blue";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=false;
      this.pooo=false;
      this.rooo=true;
    }
    if(this.indeks==save3+9&& this.col!=="red"&& this.col=="purple"){
      this.col="blue";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=false;
      this.pooo=false;
      this.rooo=true;
      }
    if(this.indeks==save3+10&& this.col!=="red" &&save3!==8&& save3!==17&& save3!==26&& save3!==35&& save3!==44&& save3!==53&& save3!==62 && save3!==71&& this.col=="purple"){
      this.col="blue";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=false;
      this.pooo=false;
      this.rooo=true;
    }

    //change color save1 dotyka save2 DOTYKA violet CZYLI  USTAWIA 7

    if(this.indeks==save3-1 && this.col!=="red"&& save3!==0 && save3!==9&& save3!==18&& save3!==27&& save3!==36&& save3!==45&& save3!==54&& save3!==63&& this.col=="violet"){
      this.col="purple";
      this.ooo=false;
      this.booo=false; //w lewo
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=false;
      this.pooo=true;
    }
    if(this.indeks==save3+1 && this.col!=="red"&& save3!==8&& save3!==17&& save3!==26&& save3!==35&& save3!==44&& save3!==53&& save3!==62 && save3!==71&& this.col=="violet"){
      this.col="purple";
      this.ooo=false;
      this.booo=false; // w prawo
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=false;
      this.pooo=true;
    }
    if(this.indeks==save3-9&& this.col!=="red"&& this.col=="violet"){
      this.col="purple";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=false;
      this.pooo=true;
    }
    if(this.indeks==save3-10&& this.col!=="red" && save3!==0 && save3!==9&& save3!==18&& save3!==27&& save3!==36&& save3!==45&& save3!==54&& save3!==63&& this.col=="violet"){
      this.col="purple";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=false;
      this.pooo=true;
    }
    if(this.indeks==save3-8&& this.col!=="red" && save3!==8&& save3!==17&& save3!==26&& save3!==35&& save3!==44&& save3!==53&& save3!==62 && save3!==71&& this.col=="violet"){
      this.col="purple";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=false;
      this.pooo=true;
    }
    if(this.indeks==save3+8&& this.col!=="red" && save3!==0 && save3!==9&& save3!==18&& save3!==27&& save3!==36&& save3!==45&& save3!==54&& save3!==63&& this.col=="violet"){
      this.col="purple";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=false;
      this.pooo=true;
    }
    if(this.indeks==save3+9&& this.col!=="red"&& this.col=="violet"){
      this.col="purple";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=false;
      this.pooo=true;
      }
    if(this.indeks==save3+10&& this.col!=="red" &&save3!==8&& save3!==17&& save3!==26&& save3!==35&& save3!==44&& save3!==53&& save3!==62 && save3!==71&& this.col=="violet"){
      this.col="purple";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=false;
      this.pooo=true;
    }


    //change color save1 dotyka save2 DOTYKA lightgreen CZYLI  USTAWIA 6

    if(this.indeks==save3-1 && this.col!=="red"&& save3!==0 && save3!==9&& save3!==18&& save3!==27&& save3!==36&& save3!==45&& save3!==54&& save3!==63&& this.col=="lightgreen"){
      this.col="violet";
      this.ooo=false;
      this.booo=false; //w lewo
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=true;
    }
    if(this.indeks==save3+1 && this.col!=="red"&& save3!==8&& save3!==17&& save3!==26&& save3!==35&& save3!==44&& save3!==53&& save3!==62 && save3!==71&& this.col=="lightgreen"){
      this.col="violet";
      this.ooo=false;
      this.booo=false; // w prawo
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=true;
    }
    if(this.indeks==save3-9&& this.col!=="red"&& this.col=="lightgreen"){
      this.col="violet";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=true;
    }
    if(this.indeks==save3-10&& this.col!=="red" && save3!==0 && save3!==9&& save3!==18&& save3!==27&& save3!==36&& save3!==45&& save3!==54&& save3!==63&& this.col=="lightgreen"){
      this.col="violet";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=true;
    }
    if(this.indeks==save3-8&& this.col!=="red" && save3!==8&& save3!==17&& save3!==26&& save3!==35&& save3!==44&& save3!==53&& save3!==62 && save3!==71&& this.col=="lightgreen"){
      this.col="violet";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=true;
    }
    if(this.indeks==save3+8&& this.col!=="red" && save3!==0 && save3!==9&& save3!==18&& save3!==27&& save3!==36&& save3!==45&& save3!==54&& save3!==63&& this.col=="lightgreen"){
      this.col="violet";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=true;
    }
    if(this.indeks==save3+9&& this.col!=="red"&& this.col=="lightgreen"){
      this.col="violet";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=true;
      }
    if(this.indeks==save3+10&& this.col!=="red" &&save3!==8&& save3!==17&& save3!==26&& save3!==35&& save3!==44&& save3!==53&& save3!==62 && save3!==71&& this.col=="lightgreen"){
      this.col="violet";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=true;
    }


    //change color save1 dotyka save2 DOTYKA PINK CZYLI USTAWIA 5

    if(this.indeks==save3-1 && this.col!=="red"&& save3!==0 && save3!==9&& save3!==18&& save3!==27&& save3!==36&& save3!==45&& save3!==54&& save3!==63&& this.col=="pink"){
      this.col="lightgreen";
      this.ooo=false;
      this.booo=false; //w lewo
      this.looo=false;
      this.tooo=false;
      this.mooo=true;
    }
    if(this.indeks==save3+1 && this.col!=="red"&& save3!==8&& save3!==17&& save3!==26&& save3!==35&& save3!==44&& save3!==53&& save3!==62 && save3!==71&& this.col=="pink"){
      this.col="lightgreen";
      this.ooo=false;
      this.booo=false; // w prawo
      this.looo=false;
      this.tooo=false;
      this.mooo=true;
    }
    if(this.indeks==save3-9&& this.col!=="red"&& this.col=="pink"){
      this.col="lightgreen";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=true;
    }
    if(this.indeks==save3-10&& this.col!=="red" && save3!==0 && save3!==9&& save3!==18&& save3!==27&& save3!==36&& save3!==45&& save3!==54&& save3!==63&& this.col=="pink"){
      this.col="lightgreen";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=true;
    }
    if(this.indeks==save3-8&& this.col!=="red" && save3!==8&& save3!==17&& save3!==26&& save3!==35&& save3!==44&& save3!==53&& save3!==62 && save3!==71&& this.col=="pink"){
      this.col="lightgreen";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=true;
    }
    if(this.indeks==save3+8&& this.col!=="red" && save3!==0 && save3!==9&& save3!==18&& save3!==27&& save3!==36&& save3!==45&& save3!==54&& save3!==63&& this.col=="pink"){
      this.col="lightgreen";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=true;
    }
    if(this.indeks==save3+9&& this.col!=="red"&& this.col=="pink"){
      this.col="lightgreen";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=true;
      }
    if(this.indeks==save3+10&& this.col!=="red" &&save3!==8&& save3!==17&& save3!==26&& save3!==35&& save3!==44&& save3!==53&& save3!==62 && save3!==71&& this.col=="pink"){
      this.col="lightgreen";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=true;
    }

    //change color save1 dotyka save2 DOTYKA ORANGE CZYLI USTAWIA 4

    if(this.indeks==save3-1 && this.col!=="red"&& save3!==0 && save3!==9&& save3!==18&& save3!==27&& save3!==36&& save3!==45&& save3!==54&& save3!==63&& this.col=="orange"){
      this.col="pink";
      this.ooo=false;
      this.booo=false; //w lewo
      this.looo=false;
      this.tooo=true;
    }
    if(this.indeks==save3+1 && this.col!=="red"&& save3!==8&& save3!==17&& save3!==26&& save3!==35&& save3!==44&& save3!==53&& save3!==62 && save3!==71&& this.col=="orange"){
      this.col="pink";
      this.ooo=false;
      this.booo=false; // w prawo
      this.looo=false;
      this.tooo=true;
    }
    if(this.indeks==save3-9&& this.col!=="red"&& this.col=="orange"){
      this.col="pink";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=true;
    }
    if(this.indeks==save3-10&& this.col!=="red" && save3!==0 && save3!==9&& save3!==18&& save3!==27&& save3!==36&& save3!==45&& save3!==54&& save3!==63&& this.col=="orange"){
      this.col="pink";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=true;
    }
    if(this.indeks==save3-8&& this.col!=="red" && save3!==8&& save3!==17&& save3!==26&& save3!==35&& save3!==44&& save3!==53&& save3!==62 && save3!==71&& this.col=="orange"){
      this.col="pink";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=true;
    }
    if(this.indeks==save3+8&& this.col!=="red" && save3!==0 && save3!==9&& save3!==18&& save3!==27&& save3!==36&& save3!==45&& save3!==54&& save3!==63&& this.col=="orange"){
      this.col="pink";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=true;
    }
    if(this.indeks==save3+9&& this.col!=="red"&& this.col=="orange"){
      this.col="pink";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=true;
      }
    if(this.indeks==save3+10&& this.col!=="red" &&save3!==8&& save3!==17&& save3!==26&& save3!==35&& save3!==44&& save3!==53&& save3!==62 && save3!==71&& this.col=="orange"){
      this.col="pink";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=true;
    }

    //change color save1 dotyka save2 DOTYKA GREEN CZYLI USTAWIA 3

    if(this.indeks==save3-1 && this.col!=="red"&& save3!==0 && save3!==9&& save3!==18&& save3!==27&& save3!==36&& save3!==45&& save3!==54&& save3!==63&& this.col=="green"){
      this.col="orange";
      this.ooo=false;
      this.booo=false; //w lewo
      this.looo=true;
    }
    if(this.indeks==save3+1 && this.col!=="red"&& save3!==8&& save3!==17&& save3!==26&& save3!==35&& save3!==44&& save3!==53&& save3!==62 && save3!==71&& this.col=="green"){
      this.col="orange";
      this.ooo=false;
      this.booo=false; // w prawo
      this.looo=true;
    }
    if(this.indeks==save3-9&& this.col!=="red"&& this.col=="green"){
      this.col="orange";
      this.ooo=false;
      this.booo=false;
      this.looo=true;
    }
    if(this.indeks==save3-10&& this.col!=="red" && save3!==0 && save3!==9&& save3!==18&& save3!==27&& save3!==36&& save3!==45&& save3!==54&& save3!==63&& this.col=="green"){
      this.col="orange";
      this.ooo=false;
      this.booo=false;
      this.looo=true;
    }
    if(this.indeks==save3-8&& this.col!=="red" && save3!==8&& save3!==17&& save3!==26&& save3!==35&& save3!==44&& save3!==53&& save3!==62 && save3!==71&& this.col=="green"){
      this.col="orange";
      this.ooo=false;
      this.booo=false;
      this.looo=true;
    }
    if(this.indeks==save3+8&& this.col!=="red" && save3!==0 && save3!==9&& save3!==18&& save3!==27&& save3!==36&& save3!==45&& save3!==54&& save3!==63&& this.col=="green"){
      this.col="orange";
      this.ooo=false;
      this.booo=false;
      this.looo=true;
    }
    if(this.indeks==save3+9&& this.col!=="red"&& this.col=="green"){
      this.col="orange";
      this.ooo=false;
      this.booo=false;
      this.looo=true;
    }
    if(this.indeks==save3+10&& this.col!=="red" &&save3!==8&& save3!==17&& save3!==26&& save3!==35&& save3!==44&& save3!==53&& save3!==62 && save3!==71&& this.col=="green"){
      this.col="orange";
      this.ooo=false;
      this.booo=false;
      this.looo=true;
    }

    //change color save1 dotyka save3 DOTYKA GREY CZYLI USTAWIA 2

    if(this.indeks==save3-1 && this.col!=="red"&& save3!==0 && save3!==9&& save3!==18&& save3!==27&& save3!==36&& save3!==45&& save3!==54&& save3!==63&& this.col=="grey"){
      this.col="green";
      this.ooo=false;
      this.booo=true; //w lewo
    }
    if(this.indeks==save3+1 && this.col!=="red"&& save3!==8&& save3!==17&& save3!==26&& save3!==35&& save3!==44&& save3!==53&& save3!==62 && save3!==71&& this.col=="grey"){
      this.col="green";
      this.ooo=false;
      this.booo=true; // w prawo
    }
    if(this.indeks==save3-9&& this.col!=="red"&& this.col=="grey"){
      this.col="green";
      this.ooo=false;
      this.booo=true;
    }
    if(this.indeks==save3-10&& this.col!=="red" && save3!==0 && save3!==9&& save3!==18&& save3!==27&& save3!==36&& save3!==45&& save3!==54&& save3!==63&& this.col=="grey"){
      this.col="green";
      this.ooo=false;
      this.booo=true;
    }
    if(this.indeks==save3-8&& this.col!=="red" && save3!==8&& save3!==17&& save3!==26&& save3!==35&& save3!==44&& save3!==53&& save3!==62 && save3!==71&& this.col=="grey"){
      this.col="green";
      this.ooo=false;
      this.booo=true;
    }
    if(this.indeks==save3+8&& this.col!=="red" && save3!==0 && save3!==9&& save3!==18&& save3!==27&& save3!==36&& save3!==45&& save3!==54&& save3!==63&& this.col=="grey"){
      this.col="green";
      this.ooo=false;
      this.booo=true;
    }
    if(this.indeks==save3+9&& this.col!=="red"&& this.col=="grey"){
      this.col="green";
      this.ooo=false;
      this.booo=true;
    }
    if(this.indeks==save3+10&& this.col!=="red" &&save3!==8&& save3!==17&& save3!==26&& save3!==35&& save3!==44&& save3!==53&& save3!==62 && save3!==71&& this.col=="grey"){
      this.col="green";
      this.ooo=false;
      this.booo=true;
    }

    //33333333333333333

    if(this.indeks==save3-1 && this.col!=="red"&& save3!==0 && save3!==9&& save3!==18&& save3!==27&& save3!==36&& save3!==45&& save3!==54&& save3!==63&& this.col=="lightblue"){
      this.col="grey";
      this.ooo=true; //w lewo
    }
    if(this.indeks==save3+1 && this.col!=="red"&& save3!==8&& save3!==17&& save3!==26&& save3!==35&& save3!==44&& save3!==53&& save3!==62 && save3!==71&& this.col=="lightblue"){
      this.col="grey";
      this.ooo=true; // w prawo
    }
    if(this.indeks==save3-9&& this.col!=="red"&& this.col=="lightblue"){
      this.col="grey";
      this.ooo=true;
    }
    if(this.indeks==save3-10&& this.col!=="red" && save3!==0 && save3!==9&& save3!==18&& save3!==27&& save3!==36&& save3!==45&& save3!==54&& save3!==63&& this.col=="lightblue"){
      this.col="grey";
      this.ooo=true;
    }
    if(this.indeks==save3-8&& this.col!=="red" && save3!==8&& save3!==17&& save3!==26&& save3!==35&& save3!==44&& save3!==53&& save3!==62 && save3!==71&& this.col=="lightblue"){
      this.col="grey";
      this.ooo=true;
    }
    if(this.indeks==save3+8&& this.col!=="red" && save3!==0 && save3!==9&& save3!==18&& save3!==27&& save3!==36&& save3!==45&& save3!==54&& save3!==63&& this.col=="lightblue"){
      this.col="grey";
      this.ooo=true;
    }
    if(this.indeks==save3+9&& this.col!=="red"&& this.col=="lightblue"){
      this.col="grey";
      this.ooo=true;
    }
    if(this.indeks==save3+10&& this.col!=="red" &&save3!==8&& save3!==17&& save3!==26&& save3!==35&& save3!==44&& save3!==53&& save3!==62 && save3!==71&& this.col=="lightblue"){
      this.col="grey";
      this.ooo=true;
    }

    //4444444444444444

    //change color save1 dotyka save2 DOTYKA purple CZYLI  USTAWIA 8

    if(this.indeks==save4-1 && this.col!=="red"&& save4!==0 && save4!==9&& save4!==18&& save4!==27&& save4!==36&& save4!==45&& save4!==54&& save4!==63&& this.col=="purple"){
      this.col="blue";
      this.ooo=false;
      this.booo=false; //w lewo
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=false;
      this.pooo=false;
      this.rooo=true;
    }
    if(this.indeks==save4+1 && this.col!=="red"&& save4!==8&& save4!==17&& save4!==26&& save4!==35&& save4!==44&& save4!==53&& save4!==62 && save4!==71&& this.col=="purple"){
      this.col="blue";
      this.ooo=false;
      this.booo=false; // w prawo
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=false;
      this.pooo=false;
      this.rooo=true;
    }
    if(this.indeks==save4-9&& this.col!=="red"&& this.col=="purple"){
      this.col="blue";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=false;
      this.pooo=false;
      this.rooo=true;
    }
    if(this.indeks==save4-10&& this.col!=="red" && save4!==0 && save4!==9&& save4!==18&& save4!==27&& save4!==36&& save4!==45&& save4!==54&& save4!==63&& this.col=="purple"){
      this.col="blue";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=false;
      this.pooo=false;
      this.rooo=true;
    }
    if(this.indeks==save4-8&& this.col!=="red" && save4!==8&& save4!==17&& save4!==26&& save4!==35&& save4!==44&& save4!==53&& save4!==62 && save4!==71&& this.col=="purple"){
      this.col="blue";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=false;
      this.pooo=false;
      this.rooo=true;
    }
    if(this.indeks==save4+8&& this.col!=="red" && save4!==0 && save4!==9&& save4!==18&& save4!==27&& save4!==36&& save4!==45&& save4!==54&& save4!==63&& this.col=="purple"){
      this.col="blue";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=false;
      this.pooo=false;
      this.rooo=true;
    }
    if(this.indeks==save4+9&& this.col!=="red"&& this.col=="purple"){
      this.col="blue";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=false;
      this.pooo=false;
      this.rooo=true;
      }
    if(this.indeks==save4+10&& this.col!=="red" &&save4!==8&& save4!==17&& save4!==26&& save4!==35&& save4!==44&& save4!==53&& save4!==62 && save4!==71&& this.col=="purple"){
      this.col="blue";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=false;
      this.pooo=false;
      this.rooo=true;
    }

    //change color save1 dotyka save2 DOTYKA violet CZYLI  USTAWIA 7

    if(this.indeks==save4-1 && this.col!=="red"&& save4!==0 && save4!==9&& save4!==18&& save4!==27&& save4!==36&& save4!==45&& save4!==54&& save4!==63&& this.col=="violet"){
      this.col="purple";
      this.ooo=false;
      this.booo=false; //w lewo
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=false;
      this.pooo=true;
    }
    if(this.indeks==save4+1 && this.col!=="red"&& save4!==8&& save4!==17&& save4!==26&& save4!==35&& save4!==44&& save4!==53&& save4!==62 && save4!==71&& this.col=="violet"){
      this.col="purple";
      this.ooo=false;
      this.booo=false; // w prawo
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=false;
      this.pooo=true;
    }
    if(this.indeks==save4-9&& this.col!=="red"&& this.col=="violet"){
      this.col="purple";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=false;
      this.pooo=true;
    }
    if(this.indeks==save4-10&& this.col!=="red" && save4!==0 && save4!==9&& save4!==18&& save4!==27&& save4!==36&& save4!==45&& save4!==54&& save4!==63&& this.col=="violet"){
      this.col="purple";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=false;
      this.pooo=true;
    }
    if(this.indeks==save4-8&& this.col!=="red" && save4!==8&& save4!==17&& save4!==26&& save4!==35&& save4!==44&& save4!==53&& save4!==62 && save4!==71&& this.col=="violet"){
      this.col="purple";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=false;
      this.pooo=true;
    }
    if(this.indeks==save4+8&& this.col!=="red" && save4!==0 && save4!==9&& save4!==18&& save4!==27&& save4!==36&& save4!==45&& save4!==54&& save4!==63&& this.col=="violet"){
      this.col="purple";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=false;
      this.pooo=true;
    }
    if(this.indeks==save4+9&& this.col!=="red"&& this.col=="violet"){
      this.col="purple";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=false;
      this.pooo=true;
      }
    if(this.indeks==save4+10&& this.col!=="red" &&save4!==8&& save4!==17&& save4!==26&& save4!==35&& save4!==44&& save4!==53&& save4!==62 && save4!==71&& this.col=="violet"){
      this.col="purple";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=false;
      this.pooo=true;
    }


    //change color save1 dotyka save2 DOTYKA lightgreen CZYLI  USTAWIA 6

    if(this.indeks==save4-1 && this.col!=="red"&& save4!==0 && save4!==9&& save4!==18&& save4!==27&& save4!==36&& save4!==45&& save4!==54&& save4!==63&& this.col=="lightgreen"){
      this.col="violet";
      this.ooo=false;
      this.booo=false; //w lewo
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=true;
    }
    if(this.indeks==save4+1 && this.col!=="red"&& save4!==8&& save4!==17&& save4!==26&& save4!==35&& save4!==44&& save4!==53&& save4!==62 && save4!==71&& this.col=="lightgreen"){
      this.col="violet";
      this.ooo=false;
      this.booo=false; // w prawo
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=true;
    }
    if(this.indeks==save4-9&& this.col!=="red"&& this.col=="lightgreen"){
      this.col="violet";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=true;
    }
    if(this.indeks==save4-10&& this.col!=="red" && save4!==0 && save4!==9&& save4!==18&& save4!==27&& save4!==36&& save4!==45&& save4!==54&& save4!==63&& this.col=="lightgreen"){
      this.col="violet";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=true;
    }
    if(this.indeks==save4-8&& this.col!=="red" && save4!==8&& save4!==17&& save4!==26&& save4!==35&& save4!==44&& save4!==53&& save4!==62 && save4!==71&& this.col=="lightgreen"){
      this.col="violet";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=true;
    }
    if(this.indeks==save4+8&& this.col!=="red" && save4!==0 && save4!==9&& save4!==18&& save4!==27&& save4!==36&& save4!==45&& save4!==54&& save4!==63&& this.col=="lightgreen"){
      this.col="violet";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=true;
    }
    if(this.indeks==save4+9&& this.col!=="red"&& this.col=="lightgreen"){
      this.col="violet";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=true;
      }
    if(this.indeks==save4+10&& this.col!=="red" &&save4!==8&& save4!==17&& save4!==26&& save4!==35&& save4!==44&& save4!==53&& save4!==62 && save4!==71&& this.col=="lightgreen"){
      this.col="violet";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=false;
      this.nooo=true;
    }


    //change color save1 dotyka save2 DOTYKA PINK CZYLI USTAWIA 5

    if(this.indeks==save4-1 && this.col!=="red"&& save4!==0 && save4!==9&& save4!==18&& save4!==27&& save4!==36&& save4!==45&& save4!==54&& save4!==63&& this.col=="pink"){
      this.col="lightgreen";
      this.ooo=false;
      this.booo=false; //w lewo
      this.looo=false;
      this.tooo=false;
      this.mooo=true;
    }
    if(this.indeks==save4+1 && this.col!=="red"&& save4!==8&& save4!==17&& save4!==26&& save4!==35&& save4!==44&& save4!==53&& save4!==62 && save4!==71&& this.col=="pink"){
      this.col="lightgreen";
      this.ooo=false;
      this.booo=false; // w prawo
      this.looo=false;
      this.tooo=false;
      this.mooo=true;
    }
    if(this.indeks==save4-9&& this.col!=="red"&& this.col=="pink"){
      this.col="lightgreen";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=true;
    }
    if(this.indeks==save4-10&& this.col!=="red" && save4!==0 && save4!==9&& save4!==18&& save4!==27&& save4!==36&& save4!==45&& save4!==54&& save4!==63&& this.col=="pink"){
      this.col="lightgreen";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=true;
    }
    if(this.indeks==save4-8&& this.col!=="red" && save4!==8&& save4!==17&& save4!==26&& save4!==35&& save4!==44&& save4!==53&& save4!==62 && save4!==71&& this.col=="pink"){
      this.col="lightgreen";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=true;
    }
    if(this.indeks==save4+8&& this.col!=="red" && save4!==0 && save4!==9&& save4!==18&& save4!==27&& save4!==36&& save4!==45&& save4!==54&& save4!==63&& this.col=="pink"){
      this.col="lightgreen";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=true;
    }
    if(this.indeks==save4+9&& this.col!=="red"&& this.col=="pink"){
      this.col="lightgreen";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=true;
      }
    if(this.indeks==save4+10&& this.col!=="red" &&save4!==8&& save4!==17&& save4!==26&& save4!==35&& save4!==44&& save4!==53&& save4!==62 && save4!==71&& this.col=="pink"){
      this.col="lightgreen";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=false;
      this.mooo=true;
    }

    //change color save1 dotyka save2 DOTYKA ORANGE CZYLI USTAWIA 4

    if(this.indeks==save4-1 && this.col!=="red"&& save4!==0 && save4!==9&& save4!==18&& save4!==27&& save4!==36&& save4!==45&& save4!==54&& save4!==63&& this.col=="orange"){
      this.col="pink";
      this.ooo=false;
      this.booo=false; //w lewo
      this.looo=false;
      this.tooo=true;
    }
    if(this.indeks==save4+1 && this.col!=="red"&& save4!==8&& save4!==17&& save4!==26&& save4!==35&& save4!==44&& save4!==53&& save4!==62 && save4!==71&& this.col=="orange"){
      this.col="pink";
      this.ooo=false;
      this.booo=false; // w prawo
      this.looo=false;
      this.tooo=true;
    }
    if(this.indeks==save4-9&& this.col!=="red"&& this.col=="orange"){
      this.col="pink";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=true;
    }
    if(this.indeks==save4-10&& this.col!=="red" && save4!==0 && save4!==9&& save4!==18&& save4!==27&& save4!==36&& save4!==45&& save4!==54&& save4!==63&& this.col=="orange"){
      this.col="pink";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=true;
    }
    if(this.indeks==save4-8&& this.col!=="red" && save4!==8&& save4!==17&& save4!==26&& save4!==35&& save4!==44&& save4!==53&& save4!==62 && save4!==71&& this.col=="orange"){
      this.col="pink";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=true;
    }
    if(this.indeks==save4+8&& this.col!=="red" && save4!==0 && save4!==9&& save4!==18&& save4!==27&& save4!==36&& save4!==45&& save4!==54&& save4!==63&& this.col=="orange"){
      this.col="pink";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=true;
    }
    if(this.indeks==save4+9&& this.col!=="red"&& this.col=="orange"){
      this.col="pink";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=true;
      }
    if(this.indeks==save4+10&& this.col!=="red" &&save4!==8&& save4!==17&& save4!==26&& save4!==35&& save4!==44&& save4!==53&& save4!==62 && save4!==71&& this.col=="orange"){
      this.col="pink";
      this.ooo=false;
      this.booo=false;
      this.looo=false;
      this.tooo=true;
    }

    //change color save1 dotyka save2 DOTYKA GREEN CZYLI USTAWIA 3

    if(this.indeks==save4-1 && this.col!=="red"&& save4!==0 && save4!==9&& save4!==18&& save4!==27&& save4!==36&& save4!==45&& save4!==54&& save4!==63&& this.col=="green"){
      this.col="orange";
      this.ooo=false;
      this.booo=false; //w lewo
      this.looo=true;
    }
    if(this.indeks==save4+1 && this.col!=="red"&& save4!==8&& save4!==17&& save4!==26&& save4!==35&& save4!==44&& save4!==53&& save4!==62 && save4!==71&& this.col=="green"){
      this.col="orange";
      this.ooo=false;
      this.booo=false; // w prawo
      this.looo=true;
    }
    if(this.indeks==save4-9&& this.col!=="red"&& this.col=="green"){
      this.col="orange";
      this.ooo=false;
      this.booo=false;
      this.looo=true;
    }
    if(this.indeks==save4-10&& this.col!=="red" && save4!==0 && save4!==9&& save4!==18&& save4!==27&& save4!==36&& save4!==45&& save4!==54&& save4!==63&& this.col=="green"){
      this.col="orange";
      this.ooo=false;
      this.booo=false;
      this.looo=true;
    }
    if(this.indeks==save4-8&& this.col!=="red" && save4!==8&& save4!==17&& save4!==26&& save4!==35&& save4!==44&& save4!==53&& save4!==62 && save4!==71&& this.col=="green"){
      this.col="orange";
      this.ooo=false;
      this.booo=false;
      this.looo=true;
    }
    if(this.indeks==save4+8&& this.col!=="red" && save4!==0 && save4!==9&& save4!==18&& save4!==27&& save4!==36&& save4!==45&& save4!==54&& save4!==63&& this.col=="green"){
      this.col="orange";
      this.ooo=false;
      this.booo=false;
      this.looo=true;
    }
    if(this.indeks==save4+9&& this.col!=="red"&& this.col=="green"){
      this.col="orange";
      this.ooo=false;
      this.booo=false;
      this.looo=true;
    }
    if(this.indeks==save4+10&& this.col!=="red" &&save4!==8&& save4!==17&& save4!==26&& save4!==35&& save4!==44&& save4!==53&& save4!==62 && save4!==71&& this.col=="green"){
      this.col="orange";
      this.ooo=false;
      this.booo=false;
      this.looo=true;
    }

    //change color save1 dotyka save4 DOTYKA GREY CZYLI USTAWIA 2

    if(this.indeks==save4-1 && this.col!=="red"&& save4!==0 && save4!==9&& save4!==18&& save4!==27&& save4!==36&& save4!==45&& save4!==54&& save4!==63&& this.col=="grey"){
      this.col="green";
      this.ooo=false;
      this.booo=true; //w lewo
    }
    if(this.indeks==save4+1 && this.col!=="red"&& save4!==8&& save4!==17&& save4!==26&& save4!==35&& save4!==44&& save4!==53&& save4!==62 && save4!==71&& this.col=="grey"){
      this.col="green";
      this.ooo=false;
      this.booo=true; // w prawo
    }
    if(this.indeks==save4-9&& this.col!=="red"&& this.col=="grey"){
      this.col="green";
      this.ooo=false;
      this.booo=true;
    }
    if(this.indeks==save4-10&& this.col!=="red" && save4!==0 && save4!==9&& save4!==18&& save4!==27&& save4!==36&& save4!==45&& save4!==54&& save4!==63&& this.col=="grey"){
      this.col="green";
      this.ooo=false;
      this.booo=true;
    }
    if(this.indeks==save4-8&& this.col!=="red" && save4!==8&& save4!==17&& save4!==26&& save4!==35&& save4!==44&& save4!==53&& save4!==62 && save4!==71&& this.col=="grey"){
      this.col="green";
      this.ooo=false;
      this.booo=true;
    }
    if(this.indeks==save4+8&& this.col!=="red" && save4!==0 && save4!==9&& save4!==18&& save4!==27&& save4!==36&& save4!==45&& save4!==54&& save4!==63&& this.col=="grey"){
      this.col="green";
      this.ooo=false;
      this.booo=true;
    }
    if(this.indeks==save4+9&& this.col!=="red"&& this.col=="grey"){
      this.col="green";
      this.ooo=false;
      this.booo=true;
    }
    if(this.indeks==save4+10&& this.col!=="red" &&save4!==8&& save4!==17&& save4!==26&& save4!==35&& save4!==44&& save4!==53&& save4!==62 && save4!==71&& this.col=="grey"){
      this.col="green";
      this.ooo=false;
      this.booo=true;
    }

    //444444444444444444

    if(this.indeks==save4-1 && this.col!=="red"&& save4!==0 && save4!==9&& save4!==18&& save4!==27&& save4!==36&& save4!==45&& save4!==54&& save4!==63&& this.col=="lightblue"){
      this.col="grey";
      this.ooo=true; //w lewo
    }
    if(this.indeks==save4+1 && this.col!=="red"&& save4!==8&& save4!==17&& save4!==26&& save4!==35&& save4!==44&& save4!==53&& save4!==62 && save4!==71&& this.col=="lightblue"){
      this.col="grey";
      this.ooo=true; // w prawo
    }
    if(this.indeks==save4-9&& this.col!=="red"&& this.col=="lightblue"){
      this.col="grey";
      this.ooo=true;
    }
    if(this.indeks==save4-10&& this.col!=="red" && save4!==0 && save4!==9&& save4!==18&& save4!==27&& save4!==36&& save4!==45&& save4!==54&& save4!==63&& this.col=="lightblue"){
      this.col="grey";
      this.ooo=true;
    }
    if(this.indeks==save4-8&& this.col!=="red" && save4!==8&& save4!==17&& save4!==26&& save4!==35&& save4!==44&& save4!==53&& save4!==62 && save4!==71&& this.col=="lightblue"){
      this.col="grey";
      this.ooo=true;
    }
    if(this.indeks==save4+8&& this.col!=="red" && save4!==0 && save4!==9&& save4!==18&& save4!==27&& save4!==36&& save4!==45&& save4!==54&& save4!==63&& this.col=="lightblue"){
      this.col="grey";
      this.ooo=true;
    }
    if(this.indeks==save4+9&& this.col!=="red"&& this.col=="lightblue"){
      this.col="grey";
      this.ooo=true;
    }
    if(this.indeks==save4+10&& this.col!=="red" &&save4!==8&& save4!==17&& save4!==26&& save4!==35&& save4!==44&& save4!==53&& save4!==62 && save4!==71&& this.col=="lightblue"){
      this.col="grey";
      this.ooo=true;
    }

//555555555555555

//change color save1 dotyka save2 DOTYKA purple CZYLI  USTAWIA 8

if(this.indeks==save5-1 && this.col!=="red"&& save5!==0 && save5!==9&& save5!==18&& save5!==27&& save5!==36&& save5!==45&& save5!==54&& save5!==63&& this.col=="purple"){
  this.col="blue";
  this.ooo=false;
  this.booo=false; //w lewo
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=false;
  this.rooo=true;
}
if(this.indeks==save5+1 && this.col!=="red"&& save5!==8&& save5!==17&& save5!==26&& save5!==35&& save5!==44&& save5!==53&& save5!==62 && save5!==71&& this.col=="purple"){
  this.col="blue";
  this.ooo=false;
  this.booo=false; // w prawo
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=false;
  this.rooo=true;
}
if(this.indeks==save5-9&& this.col!=="red"&& this.col=="purple"){
  this.col="blue";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=false;
  this.rooo=true;
}
if(this.indeks==save5-10&& this.col!=="red" && save5!==0 && save5!==9&& save5!==18&& save5!==27&& save5!==36&& save5!==45&& save5!==54&& save5!==63&& this.col=="purple"){
  this.col="blue";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=false;
  this.rooo=true;
}
if(this.indeks==save5-8&& this.col!=="red" && save5!==8&& save5!==17&& save5!==26&& save5!==35&& save5!==44&& save5!==53&& save5!==62 && save5!==71&& this.col=="purple"){
  this.col="blue";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=false;
  this.rooo=true;
}
if(this.indeks==save5+8&& this.col!=="red" && save5!==0 && save5!==9&& save5!==18&& save5!==27&& save5!==36&& save5!==45&& save5!==54&& save5!==63&& this.col=="purple"){
  this.col="blue";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=false;
  this.rooo=true;
}
if(this.indeks==save5+9&& this.col!=="red"&& this.col=="purple"){
  this.col="blue";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=false;
  this.rooo=true;
  }
if(this.indeks==save5+10&& this.col!=="red" &&save5!==8&& save5!==17&& save5!==26&& save5!==35&& save5!==44&& save5!==53&& save5!==62 && save5!==71&& this.col=="purple"){
  this.col="blue";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=false;
  this.rooo=true;
}

//change color save1 dotyka save2 DOTYKA violet CZYLI  USTAWIA 7

if(this.indeks==save5-1 && this.col!=="red"&& save5!==0 && save5!==9&& save5!==18&& save5!==27&& save5!==36&& save5!==45&& save5!==54&& save5!==63&& this.col=="violet"){
  this.col="purple";
  this.ooo=false;
  this.booo=false; //w lewo
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=true;
}
if(this.indeks==save5+1 && this.col!=="red"&& save5!==8&& save5!==17&& save5!==26&& save5!==35&& save5!==44&& save5!==53&& save5!==62 && save5!==71&& this.col=="violet"){
  this.col="purple";
  this.ooo=false;
  this.booo=false; // w prawo
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=true;
}
if(this.indeks==save5-9&& this.col!=="red"&& this.col=="violet"){
  this.col="purple";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=true;
}
if(this.indeks==save5-10&& this.col!=="red" && save5!==0 && save5!==9&& save5!==18&& save5!==27&& save5!==36&& save5!==45&& save5!==54&& save5!==63&& this.col=="violet"){
  this.col="purple";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=true;
}
if(this.indeks==save5-8&& this.col!=="red" && save5!==8&& save5!==17&& save5!==26&& save5!==35&& save5!==44&& save5!==53&& save5!==62 && save5!==71&& this.col=="violet"){
  this.col="purple";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=true;
}
if(this.indeks==save5+8&& this.col!=="red" && save5!==0 && save5!==9&& save5!==18&& save5!==27&& save5!==36&& save5!==45&& save5!==54&& save5!==63&& this.col=="violet"){
  this.col="purple";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=true;
}
if(this.indeks==save5+9&& this.col!=="red"&& this.col=="violet"){
  this.col="purple";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=true;
  }
if(this.indeks==save5+10&& this.col!=="red" &&save5!==8&& save5!==17&& save5!==26&& save5!==35&& save5!==44&& save5!==53&& save5!==62 && save5!==71&& this.col=="violet"){
  this.col="purple";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=true;
}


//change color save1 dotyka save2 DOTYKA lightgreen CZYLI  USTAWIA 6

if(this.indeks==save5-1 && this.col!=="red"&& save5!==0 && save5!==9&& save5!==18&& save5!==27&& save5!==36&& save5!==45&& save5!==54&& save5!==63&& this.col=="lightgreen"){
  this.col="violet";
  this.ooo=false;
  this.booo=false; //w lewo
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=true;
}
if(this.indeks==save5+1 && this.col!=="red"&& save5!==8&& save5!==17&& save5!==26&& save5!==35&& save5!==44&& save5!==53&& save5!==62 && save5!==71&& this.col=="lightgreen"){
  this.col="violet";
  this.ooo=false;
  this.booo=false; // w prawo
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=true;
}
if(this.indeks==save5-9&& this.col!=="red"&& this.col=="lightgreen"){
  this.col="violet";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=true;
}
if(this.indeks==save5-10&& this.col!=="red" && save5!==0 && save5!==9&& save5!==18&& save5!==27&& save5!==36&& save5!==45&& save5!==54&& save5!==63&& this.col=="lightgreen"){
  this.col="violet";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=true;
}
if(this.indeks==save5-8&& this.col!=="red" && save5!==8&& save5!==17&& save5!==26&& save5!==35&& save5!==44&& save5!==53&& save5!==62 && save5!==71&& this.col=="lightgreen"){
  this.col="violet";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=true;
}
if(this.indeks==save5+8&& this.col!=="red" && save5!==0 && save5!==9&& save5!==18&& save5!==27&& save5!==36&& save5!==45&& save5!==54&& save5!==63&& this.col=="lightgreen"){
  this.col="violet";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=true;
}
if(this.indeks==save5+9&& this.col!=="red"&& this.col=="lightgreen"){
  this.col="violet";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=true;
  }
if(this.indeks==save5+10&& this.col!=="red" &&save5!==8&& save5!==17&& save5!==26&& save5!==35&& save5!==44&& save5!==53&& save5!==62 && save5!==71&& this.col=="lightgreen"){
  this.col="violet";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=true;
}


//change color save1 dotyka save2 DOTYKA PINK CZYLI USTAWIA 5

if(this.indeks==save5-1 && this.col!=="red"&& save5!==0 && save5!==9&& save5!==18&& save5!==27&& save5!==36&& save5!==45&& save5!==54&& save5!==63&& this.col=="pink"){
  this.col="lightgreen";
  this.ooo=false;
  this.booo=false; //w lewo
  this.looo=false;
  this.tooo=false;
  this.mooo=true;
}
if(this.indeks==save5+1 && this.col!=="red"&& save5!==8&& save5!==17&& save5!==26&& save5!==35&& save5!==44&& save5!==53&& save5!==62 && save5!==71&& this.col=="pink"){
  this.col="lightgreen";
  this.ooo=false;
  this.booo=false; // w prawo
  this.looo=false;
  this.tooo=false;
  this.mooo=true;
}
if(this.indeks==save5-9&& this.col!=="red"&& this.col=="pink"){
  this.col="lightgreen";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=true;
}
if(this.indeks==save5-10&& this.col!=="red" && save5!==0 && save5!==9&& save5!==18&& save5!==27&& save5!==36&& save5!==45&& save5!==54&& save5!==63&& this.col=="pink"){
  this.col="lightgreen";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=true;
}
if(this.indeks==save5-8&& this.col!=="red" && save5!==8&& save5!==17&& save5!==26&& save5!==35&& save5!==44&& save5!==53&& save5!==62 && save5!==71&& this.col=="pink"){
  this.col="lightgreen";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=true;
}
if(this.indeks==save5+8&& this.col!=="red" && save5!==0 && save5!==9&& save5!==18&& save5!==27&& save5!==36&& save5!==45&& save5!==54&& save5!==63&& this.col=="pink"){
  this.col="lightgreen";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=true;
}
if(this.indeks==save5+9&& this.col!=="red"&& this.col=="pink"){
  this.col="lightgreen";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=true;
  }
if(this.indeks==save5+10&& this.col!=="red" &&save5!==8&& save5!==17&& save5!==26&& save5!==35&& save5!==44&& save5!==53&& save5!==62 && save5!==71&& this.col=="pink"){
  this.col="lightgreen";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=true;
}

//change color save1 dotyka save2 DOTYKA ORANGE CZYLI USTAWIA 4

if(this.indeks==save5-1 && this.col!=="red"&& save5!==0 && save5!==9&& save5!==18&& save5!==27&& save5!==36&& save5!==45&& save5!==54&& save5!==63&& this.col=="orange"){
  this.col="pink";
  this.ooo=false;
  this.booo=false; //w lewo
  this.looo=false;
  this.tooo=true;
}
if(this.indeks==save5+1 && this.col!=="red"&& save5!==8&& save5!==17&& save5!==26&& save5!==35&& save5!==44&& save5!==53&& save5!==62 && save5!==71&& this.col=="orange"){
  this.col="pink";
  this.ooo=false;
  this.booo=false; // w prawo
  this.looo=false;
  this.tooo=true;
}
if(this.indeks==save5-9&& this.col!=="red"&& this.col=="orange"){
  this.col="pink";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=true;
}
if(this.indeks==save5-10&& this.col!=="red" && save5!==0 && save5!==9&& save5!==18&& save5!==27&& save5!==36&& save5!==45&& save5!==54&& save5!==63&& this.col=="orange"){
  this.col="pink";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=true;
}
if(this.indeks==save5-8&& this.col!=="red" && save5!==8&& save5!==17&& save5!==26&& save5!==35&& save5!==44&& save5!==53&& save5!==62 && save5!==71&& this.col=="orange"){
  this.col="pink";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=true;
}
if(this.indeks==save5+8&& this.col!=="red" && save5!==0 && save5!==9&& save5!==18&& save5!==27&& save5!==36&& save5!==45&& save5!==54&& save5!==63&& this.col=="orange"){
  this.col="pink";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=true;
}
if(this.indeks==save5+9&& this.col!=="red"&& this.col=="orange"){
  this.col="pink";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=true;
  }
if(this.indeks==save5+10&& this.col!=="red" &&save5!==8&& save5!==17&& save5!==26&& save5!==35&& save5!==44&& save5!==53&& save5!==62 && save5!==71&& this.col=="orange"){
  this.col="pink";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=true;
}

//change color save1 dotyka save2 DOTYKA GREEN CZYLI USTAWIA 3

if(this.indeks==save5-1 && this.col!=="red"&& save5!==0 && save5!==9&& save5!==18&& save5!==27&& save5!==36&& save5!==45&& save5!==54&& save5!==63&& this.col=="green"){
  this.col="orange";
  this.ooo=false;
  this.booo=false; //w lewo
  this.looo=true;
}
if(this.indeks==save5+1 && this.col!=="red"&& save5!==8&& save5!==17&& save5!==26&& save5!==35&& save5!==44&& save5!==53&& save5!==62 && save5!==71&& this.col=="green"){
  this.col="orange";
  this.ooo=false;
  this.booo=false; // w prawo
  this.looo=true;
}
if(this.indeks==save5-9&& this.col!=="red"&& this.col=="green"){
  this.col="orange";
  this.ooo=false;
  this.booo=false;
  this.looo=true;
}
if(this.indeks==save5-10&& this.col!=="red" && save5!==0 && save5!==9&& save5!==18&& save5!==27&& save5!==36&& save5!==45&& save5!==54&& save5!==63&& this.col=="green"){
  this.col="orange";
  this.ooo=false;
  this.booo=false;
  this.looo=true;
}
if(this.indeks==save5-8&& this.col!=="red" && save5!==8&& save5!==17&& save5!==26&& save5!==35&& save5!==44&& save5!==53&& save5!==62 && save5!==71&& this.col=="green"){
  this.col="orange";
  this.ooo=false;
  this.booo=false;
  this.looo=true;
}
if(this.indeks==save5+8&& this.col!=="red" && save5!==0 && save5!==9&& save5!==18&& save5!==27&& save5!==36&& save5!==45&& save5!==54&& save5!==63&& this.col=="green"){
  this.col="orange";
  this.ooo=false;
  this.booo=false;
  this.looo=true;
}
if(this.indeks==save5+9&& this.col!=="red"&& this.col=="green"){
  this.col="orange";
  this.ooo=false;
  this.booo=false;
  this.looo=true;
}
if(this.indeks==save5+10&& this.col!=="red" &&save5!==8&& save5!==17&& save5!==26&& save5!==35&& save5!==44&& save5!==53&& save5!==62 && save5!==71&& this.col=="green"){
  this.col="orange";
  this.ooo=false;
  this.booo=false;
  this.looo=true;
}

//change color save1 dotyka save5 DOTYKA GREY CZYLI USTAWIA 2

if(this.indeks==save5-1 && this.col!=="red"&& save5!==0 && save5!==9&& save5!==18&& save5!==27&& save5!==36&& save5!==45&& save5!==54&& save5!==63&& this.col=="grey"){
  this.col="green";
  this.ooo=false;
  this.booo=true; //w lewo
}
if(this.indeks==save5+1 && this.col!=="red"&& save5!==8&& save5!==17&& save5!==26&& save5!==35&& save5!==44&& save5!==53&& save5!==62 && save5!==71&& this.col=="grey"){
  this.col="green";
  this.ooo=false;
  this.booo=true; // w prawo
}
if(this.indeks==save5-9&& this.col!=="red"&& this.col=="grey"){
  this.col="green";
  this.ooo=false;
  this.booo=true;
}
if(this.indeks==save5-10&& this.col!=="red" && save5!==0 && save5!==9&& save5!==18&& save5!==27&& save5!==36&& save5!==45&& save5!==54&& save5!==63&& this.col=="grey"){
  this.col="green";
  this.ooo=false;
  this.booo=true;
}
if(this.indeks==save5-8&& this.col!=="red" && save5!==8&& save5!==17&& save5!==26&& save5!==35&& save5!==44&& save5!==53&& save5!==62 && save5!==71&& this.col=="grey"){
  this.col="green";
  this.ooo=false;
  this.booo=true;
}
if(this.indeks==save5+8&& this.col!=="red" && save5!==0 && save5!==9&& save5!==18&& save5!==27&& save5!==36&& save5!==45&& save5!==54&& save5!==63&& this.col=="grey"){
  this.col="green";
  this.ooo=false;
  this.booo=true;
}
if(this.indeks==save5+9&& this.col!=="red"&& this.col=="grey"){
  this.col="green";
  this.ooo=false;
  this.booo=true;
}
if(this.indeks==save5+10&& this.col!=="red" &&save5!==8&& save5!==17&& save5!==26&& save5!==35&& save5!==44&& save5!==53&& save5!==62 && save5!==71&& this.col=="grey"){
  this.col="green";
  this.ooo=false;
  this.booo=true;
}

//5555555555555

if(this.indeks==save5-1 && this.col!=="red"&& save5!==0 && save5!==9&& save5!==18&& save5!==27&& save5!==36&& save5!==45&& save5!==54&& save5!==63&& this.col=="lightblue"){
  this.col="grey";
  this.ooo=true; //w lewo
}
if(this.indeks==save5+1 && this.col!=="red"&& save5!==8&& save5!==17&& save5!==26&& save5!==35&& save5!==44&& save5!==53&& save5!==62 && save5!==71&& this.col=="lightblue"){
  this.col="grey";
  this.ooo=true; // w prawo
}
if(this.indeks==save5-9&& this.col!=="red"&& this.col=="lightblue"){
  this.col="grey";
  this.ooo=true;
}
if(this.indeks==save5-10&& this.col!=="red" && save5!==0 && save5!==9&& save5!==18&& save5!==27&& save5!==36&& save5!==45&& save5!==54&& save5!==63&& this.col=="lightblue"){
  this.col="grey";
  this.ooo=true;
}
if(this.indeks==save5-8&& this.col!=="red" && save5!==8&& save5!==17&& save5!==26&& save5!==35&& save5!==44&& save5!==53&& save5!==62 && save5!==71&& this.col=="lightblue"){
  this.col="grey";
  this.ooo=true;
}
if(this.indeks==save5+8&& this.col!=="red" && save5!==0 && save5!==9&& save5!==18&& save5!==27&& save5!==36&& save5!==45&& save5!==54&& save5!==63&& this.col=="lightblue"){
  this.col="grey";
  this.ooo=true;
}
if(this.indeks==save5+9&& this.col!=="red"&& this.col=="lightblue"){
  this.col="grey";
  this.ooo=true;
}
if(this.indeks==save5+10&& this.col!=="red" &&save5!==8&& save5!==17&& save5!==26&& save5!==35&& save5!==44&& save5!==53&& save5!==62 && save5!==71&& this.col=="lightblue"){
  this.col="grey";
  this.ooo=true;
}

//666666666666666666666666
//change color save1 dotyka save2 DOTYKA purple CZYLI  USTAWIA 8

if(this.indeks==save6-1 && this.col!=="red"&& save6!==0 && save6!==9&& save6!==18&& save6!==27&& save6!==36&& save6!==45&& save6!==54&& save6!==63&& this.col=="purple"){
  this.col="blue";
  this.ooo=false;
  this.booo=false; //w lewo
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=false;
  this.rooo=true;
}
if(this.indeks==save6+1 && this.col!=="red"&& save6!==8&& save6!==17&& save6!==26&& save6!==35&& save6!==44&& save6!==53&& save6!==62 && save6!==71&& this.col=="purple"){
  this.col="blue";
  this.ooo=false;
  this.booo=false; // w prawo
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=false;
  this.rooo=true;
}
if(this.indeks==save6-9&& this.col!=="red"&& this.col=="purple"){
  this.col="blue";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=false;
  this.rooo=true;
}
if(this.indeks==save6-10&& this.col!=="red" && save6!==0 && save6!==9&& save6!==18&& save6!==27&& save6!==36&& save6!==45&& save6!==54&& save6!==63&& this.col=="purple"){
  this.col="blue";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=false;
  this.rooo=true;
}
if(this.indeks==save6-8&& this.col!=="red" && save6!==8&& save6!==17&& save6!==26&& save6!==35&& save6!==44&& save6!==53&& save6!==62 && save6!==71&& this.col=="purple"){
  this.col="blue";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=false;
  this.rooo=true;
}
if(this.indeks==save6+8&& this.col!=="red" && save6!==0 && save6!==9&& save6!==18&& save6!==27&& save6!==36&& save6!==45&& save6!==54&& save6!==63&& this.col=="purple"){
  this.col="blue";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=false;
  this.rooo=true;
}
if(this.indeks==save6+9&& this.col!=="red"&& this.col=="purple"){
  this.col="blue";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=false;
  this.rooo=true;
  }
if(this.indeks==save6+10&& this.col!=="red" &&save6!==8&& save6!==17&& save6!==26&& save6!==35&& save6!==44&& save6!==53&& save6!==62 && save6!==71&& this.col=="purple"){
  this.col="blue";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=false;
  this.rooo=true;
}

//change color save1 dotyka save2 DOTYKA violet CZYLI  USTAWIA 7

if(this.indeks==save6-1 && this.col!=="red"&& save6!==0 && save6!==9&& save6!==18&& save6!==27&& save6!==36&& save6!==45&& save6!==54&& save6!==63&& this.col=="violet"){
  this.col="purple";
  this.ooo=false;
  this.booo=false; //w lewo
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=true;
}
if(this.indeks==save6+1 && this.col!=="red"&& save6!==8&& save6!==17&& save6!==26&& save6!==35&& save6!==44&& save6!==53&& save6!==62 && save6!==71&& this.col=="violet"){
  this.col="purple";
  this.ooo=false;
  this.booo=false; // w prawo
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=true;
}
if(this.indeks==save6-9&& this.col!=="red"&& this.col=="violet"){
  this.col="purple";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=true;
}
if(this.indeks==save6-10&& this.col!=="red" && save6!==0 && save6!==9&& save6!==18&& save6!==27&& save6!==36&& save6!==45&& save6!==54&& save6!==63&& this.col=="violet"){
  this.col="purple";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=true;
}
if(this.indeks==save6-8&& this.col!=="red" && save6!==8&& save6!==17&& save6!==26&& save6!==35&& save6!==44&& save6!==53&& save6!==62 && save6!==71&& this.col=="violet"){
  this.col="purple";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=true;
}
if(this.indeks==save6+8&& this.col!=="red" && save6!==0 && save6!==9&& save6!==18&& save6!==27&& save6!==36&& save6!==45&& save6!==54&& save6!==63&& this.col=="violet"){
  this.col="purple";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=true;
}
if(this.indeks==save6+9&& this.col!=="red"&& this.col=="violet"){
  this.col="purple";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=true;
  }
if(this.indeks==save6+10&& this.col!=="red" &&save6!==8&& save6!==17&& save6!==26&& save6!==35&& save6!==44&& save6!==53&& save6!==62 && save6!==71&& this.col=="violet"){
  this.col="purple";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=true;
}


//change color save1 dotyka save2 DOTYKA lightgreen CZYLI  USTAWIA 6

if(this.indeks==save6-1 && this.col!=="red"&& save6!==0 && save6!==9&& save6!==18&& save6!==27&& save6!==36&& save6!==45&& save6!==54&& save6!==63&& this.col=="lightgreen"){
  this.col="violet";
  this.ooo=false;
  this.booo=false; //w lewo
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=true;
}
if(this.indeks==save6+1 && this.col!=="red"&& save6!==8&& save6!==17&& save6!==26&& save6!==35&& save6!==44&& save6!==53&& save6!==62 && save6!==71&& this.col=="lightgreen"){
  this.col="violet";
  this.ooo=false;
  this.booo=false; // w prawo
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=true;
}
if(this.indeks==save6-9&& this.col!=="red"&& this.col=="lightgreen"){
  this.col="violet";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=true;
}
if(this.indeks==save6-10&& this.col!=="red" && save6!==0 && save6!==9&& save6!==18&& save6!==27&& save6!==36&& save6!==45&& save6!==54&& save6!==63&& this.col=="lightgreen"){
  this.col="violet";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=true;
}
if(this.indeks==save6-8&& this.col!=="red" && save6!==8&& save6!==17&& save6!==26&& save6!==35&& save6!==44&& save6!==53&& save6!==62 && save6!==71&& this.col=="lightgreen"){
  this.col="violet";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=true;
}
if(this.indeks==save6+8&& this.col!=="red" && save6!==0 && save6!==9&& save6!==18&& save6!==27&& save6!==36&& save6!==45&& save6!==54&& save6!==63&& this.col=="lightgreen"){
  this.col="violet";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=true;
}
if(this.indeks==save6+9&& this.col!=="red"&& this.col=="lightgreen"){
  this.col="violet";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=true;
  }
if(this.indeks==save6+10&& this.col!=="red" &&save6!==8&& save6!==17&& save6!==26&& save6!==35&& save6!==44&& save6!==53&& save6!==62 && save6!==71&& this.col=="lightgreen"){
  this.col="violet";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=true;
}


//change color save1 dotyka save2 DOTYKA PINK CZYLI USTAWIA 5

if(this.indeks==save6-1 && this.col!=="red"&& save6!==0 && save6!==9&& save6!==18&& save6!==27&& save6!==36&& save6!==45&& save6!==54&& save6!==63&& this.col=="pink"){
  this.col="lightgreen";
  this.ooo=false;
  this.booo=false; //w lewo
  this.looo=false;
  this.tooo=false;
  this.mooo=true;
}
if(this.indeks==save6+1 && this.col!=="red"&& save6!==8&& save6!==17&& save6!==26&& save6!==35&& save6!==44&& save6!==53&& save6!==62 && save6!==71&& this.col=="pink"){
  this.col="lightgreen";
  this.ooo=false;
  this.booo=false; // w prawo
  this.looo=false;
  this.tooo=false;
  this.mooo=true;
}
if(this.indeks==save6-9&& this.col!=="red"&& this.col=="pink"){
  this.col="lightgreen";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=true;
}
if(this.indeks==save6-10&& this.col!=="red" && save6!==0 && save6!==9&& save6!==18&& save6!==27&& save6!==36&& save6!==45&& save6!==54&& save6!==63&& this.col=="pink"){
  this.col="lightgreen";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=true;
}
if(this.indeks==save6-8&& this.col!=="red" && save6!==8&& save6!==17&& save6!==26&& save6!==35&& save6!==44&& save6!==53&& save6!==62 && save6!==71&& this.col=="pink"){
  this.col="lightgreen";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=true;
}
if(this.indeks==save6+8&& this.col!=="red" && save6!==0 && save6!==9&& save6!==18&& save6!==27&& save6!==36&& save6!==45&& save6!==54&& save6!==63&& this.col=="pink"){
  this.col="lightgreen";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=true;
}
if(this.indeks==save6+9&& this.col!=="red"&& this.col=="pink"){
  this.col="lightgreen";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=true;
  }
if(this.indeks==save6+10&& this.col!=="red" &&save6!==8&& save6!==17&& save6!==26&& save6!==35&& save6!==44&& save6!==53&& save6!==62 && save6!==71&& this.col=="pink"){
  this.col="lightgreen";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=true;
}

//change color save1 dotyka save2 DOTYKA ORANGE CZYLI USTAWIA 4

if(this.indeks==save6-1 && this.col!=="red"&& save6!==0 && save6!==9&& save6!==18&& save6!==27&& save6!==36&& save6!==45&& save6!==54&& save6!==63&& this.col=="orange"){
  this.col="pink";
  this.ooo=false;
  this.booo=false; //w lewo
  this.looo=false;
  this.tooo=true;
}
if(this.indeks==save6+1 && this.col!=="red"&& save6!==8&& save6!==17&& save6!==26&& save6!==35&& save6!==44&& save6!==53&& save6!==62 && save6!==71&& this.col=="orange"){
  this.col="pink";
  this.ooo=false;
  this.booo=false; // w prawo
  this.looo=false;
  this.tooo=true;
}
if(this.indeks==save6-9&& this.col!=="red"&& this.col=="orange"){
  this.col="pink";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=true;
}
if(this.indeks==save6-10&& this.col!=="red" && save6!==0 && save6!==9&& save6!==18&& save6!==27&& save6!==36&& save6!==45&& save6!==54&& save6!==63&& this.col=="orange"){
  this.col="pink";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=true;
}
if(this.indeks==save6-8&& this.col!=="red" && save6!==8&& save6!==17&& save6!==26&& save6!==35&& save6!==44&& save6!==53&& save6!==62 && save6!==71&& this.col=="orange"){
  this.col="pink";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=true;
}
if(this.indeks==save6+8&& this.col!=="red" && save6!==0 && save6!==9&& save6!==18&& save6!==27&& save6!==36&& save6!==45&& save6!==54&& save6!==63&& this.col=="orange"){
  this.col="pink";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=true;
}
if(this.indeks==save6+9&& this.col!=="red"&& this.col=="orange"){
  this.col="pink";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=true;
  }
if(this.indeks==save6+10&& this.col!=="red" &&save6!==8&& save6!==17&& save6!==26&& save6!==35&& save6!==44&& save6!==53&& save6!==62 && save6!==71&& this.col=="orange"){
  this.col="pink";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=true;
}

//change color save1 dotyka save2 DOTYKA GREEN CZYLI USTAWIA 3

if(this.indeks==save6-1 && this.col!=="red"&& save6!==0 && save6!==9&& save6!==18&& save6!==27&& save6!==36&& save6!==45&& save6!==54&& save6!==63&& this.col=="green"){
  this.col="orange";
  this.ooo=false;
  this.booo=false; //w lewo
  this.looo=true;
}
if(this.indeks==save6+1 && this.col!=="red"&& save6!==8&& save6!==17&& save6!==26&& save6!==35&& save6!==44&& save6!==53&& save6!==62 && save6!==71&& this.col=="green"){
  this.col="orange";
  this.ooo=false;
  this.booo=false; // w prawo
  this.looo=true;
}
if(this.indeks==save6-9&& this.col!=="red"&& this.col=="green"){
  this.col="orange";
  this.ooo=false;
  this.booo=false;
  this.looo=true;
}
if(this.indeks==save6-10&& this.col!=="red" && save6!==0 && save6!==9&& save6!==18&& save6!==27&& save6!==36&& save6!==45&& save6!==54&& save6!==63&& this.col=="green"){
  this.col="orange";
  this.ooo=false;
  this.booo=false;
  this.looo=true;
}
if(this.indeks==save6-8&& this.col!=="red" && save6!==8&& save6!==17&& save6!==26&& save6!==35&& save6!==44&& save6!==53&& save6!==62 && save6!==71&& this.col=="green"){
  this.col="orange";
  this.ooo=false;
  this.booo=false;
  this.looo=true;
}
if(this.indeks==save6+8&& this.col!=="red" && save6!==0 && save6!==9&& save6!==18&& save6!==27&& save6!==36&& save6!==45&& save6!==54&& save6!==63&& this.col=="green"){
  this.col="orange";
  this.ooo=false;
  this.booo=false;
  this.looo=true;
}
if(this.indeks==save6+9&& this.col!=="red"&& this.col=="green"){
  this.col="orange";
  this.ooo=false;
  this.booo=false;
  this.looo=true;
}
if(this.indeks==save6+10&& this.col!=="red" &&save6!==8&& save6!==17&& save6!==26&& save6!==35&& save6!==44&& save6!==53&& save6!==62 && save6!==71&& this.col=="green"){
  this.col="orange";
  this.ooo=false;
  this.booo=false;
  this.looo=true;
}

//change color save1 dotyka save6 DOTYKA GREY CZYLI USTAWIA 2

if(this.indeks==save6-1 && this.col!=="red"&& save6!==0 && save6!==9&& save6!==18&& save6!==27&& save6!==36&& save6!==45&& save6!==54&& save6!==63&& this.col=="grey"){
  this.col="green";
  this.ooo=false;
  this.booo=true; //w lewo
}
if(this.indeks==save6+1 && this.col!=="red"&& save6!==8&& save6!==17&& save6!==26&& save6!==35&& save6!==44&& save6!==53&& save6!==62 && save6!==71&& this.col=="grey"){
  this.col="green";
  this.ooo=false;
  this.booo=true; // w prawo
}
if(this.indeks==save6-9&& this.col!=="red"&& this.col=="grey"){
  this.col="green";
  this.ooo=false;
  this.booo=true;
}
if(this.indeks==save6-10&& this.col!=="red" && save6!==0 && save6!==9&& save6!==18&& save6!==27&& save6!==36&& save6!==45&& save6!==54&& save6!==63&& this.col=="grey"){
  this.col="green";
  this.ooo=false;
  this.booo=true;
}
if(this.indeks==save6-8&& this.col!=="red" && save6!==8&& save6!==17&& save6!==26&& save6!==35&& save6!==44&& save6!==53&& save6!==62 && save6!==71&& this.col=="grey"){
  this.col="green";
  this.ooo=false;
  this.booo=true;
}
if(this.indeks==save6+8&& this.col!=="red" && save6!==0 && save6!==9&& save6!==18&& save6!==27&& save6!==36&& save6!==45&& save6!==54&& save6!==63&& this.col=="grey"){
  this.col="green";
  this.ooo=false;
  this.booo=true;
}
if(this.indeks==save6+9&& this.col!=="red"&& this.col=="grey"){
  this.col="green";
  this.ooo=false;
  this.booo=true;
}
if(this.indeks==save6+10&& this.col!=="red" &&save6!==8&& save6!==17&& save6!==26&& save6!==35&& save6!==44&& save6!==53&& save6!==62 && save6!==71&& this.col=="grey"){
  this.col="green";
  this.ooo=false;
  this.booo=true;
}

//33333333333333333

if(this.indeks==save6-1 && this.col!=="red"&& save6!==0 && save6!==9&& save6!==18&& save6!==27&& save6!==36&& save6!==45&& save6!==54&& save6!==63&& this.col=="lightblue"){
  this.col="grey";
  this.ooo=true; //w lewo
}
if(this.indeks==save6+1 && this.col!=="red"&& save6!==8&& save6!==17&& save6!==26&& save6!==35&& save6!==44&& save6!==53&& save6!==62 && save6!==71&& this.col=="lightblue"){
  this.col="grey";
  this.ooo=true; // w prawo
}
if(this.indeks==save6-9&& this.col!=="red"&& this.col=="lightblue"){
  this.col="grey";
  this.ooo=true;
}
if(this.indeks==save6-10&& this.col!=="red" && save6!==0 && save6!==9&& save6!==18&& save6!==27&& save6!==36&& save6!==45&& save6!==54&& save6!==63&& this.col=="lightblue"){
  this.col="grey";
  this.ooo=true;
}
if(this.indeks==save6-8&& this.col!=="red" && save6!==8&& save6!==17&& save6!==26&& save6!==35&& save6!==44&& save6!==53&& save6!==62 && save6!==71&& this.col=="lightblue"){
  this.col="grey";
  this.ooo=true;
}
if(this.indeks==save6+8&& this.col!=="red" && save6!==0 && save6!==9&& save6!==18&& save6!==27&& save6!==36&& save6!==45&& save6!==54&& save6!==63&& this.col=="lightblue"){
  this.col="grey";
  this.ooo=true;
}
if(this.indeks==save6+9&& this.col!=="red"&& this.col=="lightblue"){
  this.col="grey";
  this.ooo=true;
}
if(this.indeks==save6+10&& this.col!=="red" &&save6!==8&& save6!==17&& save6!==26&& save6!==35&& save6!==44&& save6!==53&& save6!==62 && save6!==71&& this.col=="lightblue"){
  this.col="grey";
  this.ooo=true;
}

//7777777777777777777
//change color save1 dotyka save2 DOTYKA purple CZYLI  USTAWIA 8

if(this.indeks==save7-1 && this.col!=="red"&& save7!==0 && save7!==9&& save7!==18&& save7!==27&& save7!==36&& save7!==45&& save7!==54&& save7!==63&& this.col=="purple"){
  this.col="blue";
  this.ooo=false;
  this.booo=false; //w lewo
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=false;
  this.rooo=true;
}
if(this.indeks==save7+1 && this.col!=="red"&& save7!==8&& save7!==17&& save7!==26&& save7!==35&& save7!==44&& save7!==53&& save7!==62 && save7!==71&& this.col=="purple"){
  this.col="blue";
  this.ooo=false;
  this.booo=false; // w prawo
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=false;
  this.rooo=true;
}
if(this.indeks==save7-9&& this.col!=="red"&& this.col=="purple"){
  this.col="blue";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=false;
  this.rooo=true;
}
if(this.indeks==save7-10&& this.col!=="red" && save7!==0 && save7!==9&& save7!==18&& save7!==27&& save7!==36&& save7!==45&& save7!==54&& save7!==63&& this.col=="purple"){
  this.col="blue";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=false;
  this.rooo=true;
}
if(this.indeks==save7-8&& this.col!=="red" && save7!==8&& save7!==17&& save7!==26&& save7!==35&& save7!==44&& save7!==53&& save7!==62 && save7!==71&& this.col=="purple"){
  this.col="blue";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=false;
  this.rooo=true;
}
if(this.indeks==save7+8&& this.col!=="red" && save7!==0 && save7!==9&& save7!==18&& save7!==27&& save7!==36&& save7!==45&& save7!==54&& save7!==63&& this.col=="purple"){
  this.col="blue";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=false;
  this.rooo=true;
}
if(this.indeks==save7+9&& this.col!=="red"&& this.col=="purple"){
  this.col="blue";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=false;
  this.rooo=true;
  }
if(this.indeks==save7+10&& this.col!=="red" &&save7!==8&& save7!==17&& save7!==26&& save7!==35&& save7!==44&& save7!==53&& save7!==62 && save7!==71&& this.col=="purple"){
  this.col="blue";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=false;
  this.rooo=true;
}

//change color save1 dotyka save2 DOTYKA violet CZYLI  USTAWIA 7

if(this.indeks==save7-1 && this.col!=="red"&& save7!==0 && save7!==9&& save7!==18&& save7!==27&& save7!==36&& save7!==45&& save7!==54&& save7!==63&& this.col=="violet"){
  this.col="purple";
  this.ooo=false;
  this.booo=false; //w lewo
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=true;
}
if(this.indeks==save7+1 && this.col!=="red"&& save7!==8&& save7!==17&& save7!==26&& save7!==35&& save7!==44&& save7!==53&& save7!==62 && save7!==71&& this.col=="violet"){
  this.col="purple";
  this.ooo=false;
  this.booo=false; // w prawo
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=true;
}
if(this.indeks==save7-9&& this.col!=="red"&& this.col=="violet"){
  this.col="purple";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=true;
}
if(this.indeks==save7-10&& this.col!=="red" && save7!==0 && save7!==9&& save7!==18&& save7!==27&& save7!==36&& save7!==45&& save7!==54&& save7!==63&& this.col=="violet"){
  this.col="purple";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=true;
}
if(this.indeks==save7-8&& this.col!=="red" && save7!==8&& save7!==17&& save7!==26&& save7!==35&& save7!==44&& save7!==53&& save7!==62 && save7!==71&& this.col=="violet"){
  this.col="purple";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=true;
}
if(this.indeks==save7+8&& this.col!=="red" && save7!==0 && save7!==9&& save7!==18&& save7!==27&& save7!==36&& save7!==45&& save7!==54&& save7!==63&& this.col=="violet"){
  this.col="purple";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=true;
}
if(this.indeks==save7+9&& this.col!=="red"&& this.col=="violet"){
  this.col="purple";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=true;
  }
if(this.indeks==save7+10&& this.col!=="red" &&save7!==8&& save7!==17&& save7!==26&& save7!==35&& save7!==44&& save7!==53&& save7!==62 && save7!==71&& this.col=="violet"){
  this.col="purple";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=true;
}


//change color save1 dotyka save2 DOTYKA lightgreen CZYLI  USTAWIA 6

if(this.indeks==save7-1 && this.col!=="red"&& save7!==0 && save7!==9&& save7!==18&& save7!==27&& save7!==36&& save7!==45&& save7!==54&& save7!==63&& this.col=="lightgreen"){
  this.col="violet";
  this.ooo=false;
  this.booo=false; //w lewo
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=true;
}
if(this.indeks==save7+1 && this.col!=="red"&& save7!==8&& save7!==17&& save7!==26&& save7!==35&& save7!==44&& save7!==53&& save7!==62 && save7!==71&& this.col=="lightgreen"){
  this.col="violet";
  this.ooo=false;
  this.booo=false; // w prawo
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=true;
}
if(this.indeks==save7-9&& this.col!=="red"&& this.col=="lightgreen"){
  this.col="violet";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=true;
}
if(this.indeks==save7-10&& this.col!=="red" && save7!==0 && save7!==9&& save7!==18&& save7!==27&& save7!==36&& save7!==45&& save7!==54&& save7!==63&& this.col=="lightgreen"){
  this.col="violet";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=true;
}
if(this.indeks==save7-8&& this.col!=="red" && save7!==8&& save7!==17&& save7!==26&& save7!==35&& save7!==44&& save7!==53&& save7!==62 && save7!==71&& this.col=="lightgreen"){
  this.col="violet";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=true;
}
if(this.indeks==save7+8&& this.col!=="red" && save7!==0 && save7!==9&& save7!==18&& save7!==27&& save7!==36&& save7!==45&& save7!==54&& save7!==63&& this.col=="lightgreen"){
  this.col="violet";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=true;
}
if(this.indeks==save7+9&& this.col!=="red"&& this.col=="lightgreen"){
  this.col="violet";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=true;
  }
if(this.indeks==save7+10&& this.col!=="red" &&save7!==8&& save7!==17&& save7!==26&& save7!==35&& save7!==44&& save7!==53&& save7!==62 && save7!==71&& this.col=="lightgreen"){
  this.col="violet";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=true;
}


//change color save1 dotyka save2 DOTYKA PINK CZYLI USTAWIA 5

if(this.indeks==save7-1 && this.col!=="red"&& save7!==0 && save7!==9&& save7!==18&& save7!==27&& save7!==36&& save7!==45&& save7!==54&& save7!==63&& this.col=="pink"){
  this.col="lightgreen";
  this.ooo=false;
  this.booo=false; //w lewo
  this.looo=false;
  this.tooo=false;
  this.mooo=true;
}
if(this.indeks==save7+1 && this.col!=="red"&& save7!==8&& save7!==17&& save7!==26&& save7!==35&& save7!==44&& save7!==53&& save7!==62 && save7!==71&& this.col=="pink"){
  this.col="lightgreen";
  this.ooo=false;
  this.booo=false; // w prawo
  this.looo=false;
  this.tooo=false;
  this.mooo=true;
}
if(this.indeks==save7-9&& this.col!=="red"&& this.col=="pink"){
  this.col="lightgreen";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=true;
}
if(this.indeks==save7-10&& this.col!=="red" && save7!==0 && save7!==9&& save7!==18&& save7!==27&& save7!==36&& save7!==45&& save7!==54&& save7!==63&& this.col=="pink"){
  this.col="lightgreen";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=true;
}
if(this.indeks==save7-8&& this.col!=="red" && save7!==8&& save7!==17&& save7!==26&& save7!==35&& save7!==44&& save7!==53&& save7!==62 && save7!==71&& this.col=="pink"){
  this.col="lightgreen";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=true;
}
if(this.indeks==save7+8&& this.col!=="red" && save7!==0 && save7!==9&& save7!==18&& save7!==27&& save7!==36&& save7!==45&& save7!==54&& save7!==63&& this.col=="pink"){
  this.col="lightgreen";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=true;
}
if(this.indeks==save7+9&& this.col!=="red"&& this.col=="pink"){
  this.col="lightgreen";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=true;
  }
if(this.indeks==save7+10&& this.col!=="red" &&save7!==8&& save7!==17&& save7!==26&& save7!==35&& save7!==44&& save7!==53&& save7!==62 && save7!==71&& this.col=="pink"){
  this.col="lightgreen";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=true;
}

//change color save1 dotyka save2 DOTYKA ORANGE CZYLI USTAWIA 4

if(this.indeks==save7-1 && this.col!=="red"&& save7!==0 && save7!==9&& save7!==18&& save7!==27&& save7!==36&& save7!==45&& save7!==54&& save7!==63&& this.col=="orange"){
  this.col="pink";
  this.ooo=false;
  this.booo=false; //w lewo
  this.looo=false;
  this.tooo=true;
}
if(this.indeks==save7+1 && this.col!=="red"&& save7!==8&& save7!==17&& save7!==26&& save7!==35&& save7!==44&& save7!==53&& save7!==62 && save7!==71&& this.col=="orange"){
  this.col="pink";
  this.ooo=false;
  this.booo=false; // w prawo
  this.looo=false;
  this.tooo=true;
}
if(this.indeks==save7-9&& this.col!=="red"&& this.col=="orange"){
  this.col="pink";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=true;
}
if(this.indeks==save7-10&& this.col!=="red" && save7!==0 && save7!==9&& save7!==18&& save7!==27&& save7!==36&& save7!==45&& save7!==54&& save7!==63&& this.col=="orange"){
  this.col="pink";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=true;
}
if(this.indeks==save7-8&& this.col!=="red" && save7!==8&& save7!==17&& save7!==26&& save7!==35&& save7!==44&& save7!==53&& save7!==62 && save7!==71&& this.col=="orange"){
  this.col="pink";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=true;
}
if(this.indeks==save7+8&& this.col!=="red" && save7!==0 && save7!==9&& save7!==18&& save7!==27&& save7!==36&& save7!==45&& save7!==54&& save7!==63&& this.col=="orange"){
  this.col="pink";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=true;
}
if(this.indeks==save7+9&& this.col!=="red"&& this.col=="orange"){
  this.col="pink";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=true;
  }
if(this.indeks==save7+10&& this.col!=="red" &&save7!==8&& save7!==17&& save7!==26&& save7!==35&& save7!==44&& save7!==53&& save7!==62 && save7!==71&& this.col=="orange"){
  this.col="pink";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=true;
}

//change color save1 dotyka save2 DOTYKA GREEN CZYLI USTAWIA 3

if(this.indeks==save7-1 && this.col!=="red"&& save7!==0 && save7!==9&& save7!==18&& save7!==27&& save7!==36&& save7!==45&& save7!==54&& save7!==63&& this.col=="green"){
  this.col="orange";
  this.ooo=false;
  this.booo=false; //w lewo
  this.looo=true;
}
if(this.indeks==save7+1 && this.col!=="red"&& save7!==8&& save7!==17&& save7!==26&& save7!==35&& save7!==44&& save7!==53&& save7!==62 && save7!==71&& this.col=="green"){
  this.col="orange";
  this.ooo=false;
  this.booo=false; // w prawo
  this.looo=true;
}
if(this.indeks==save7-9&& this.col!=="red"&& this.col=="green"){
  this.col="orange";
  this.ooo=false;
  this.booo=false;
  this.looo=true;
}
if(this.indeks==save7-10&& this.col!=="red" && save7!==0 && save7!==9&& save7!==18&& save7!==27&& save7!==36&& save7!==45&& save7!==54&& save7!==63&& this.col=="green"){
  this.col="orange";
  this.ooo=false;
  this.booo=false;
  this.looo=true;
}
if(this.indeks==save7-8&& this.col!=="red" && save7!==8&& save7!==17&& save7!==26&& save7!==35&& save7!==44&& save7!==53&& save7!==62 && save7!==71&& this.col=="green"){
  this.col="orange";
  this.ooo=false;
  this.booo=false;
  this.looo=true;
}
if(this.indeks==save7+8&& this.col!=="red" && save7!==0 && save7!==9&& save7!==18&& save7!==27&& save7!==36&& save7!==45&& save7!==54&& save7!==63&& this.col=="green"){
  this.col="orange";
  this.ooo=false;
  this.booo=false;
  this.looo=true;
}
if(this.indeks==save7+9&& this.col!=="red"&& this.col=="green"){
  this.col="orange";
  this.ooo=false;
  this.booo=false;
  this.looo=true;
}
if(this.indeks==save7+10&& this.col!=="red" &&save7!==8&& save7!==17&& save7!==26&& save7!==35&& save7!==44&& save7!==53&& save7!==62 && save7!==71&& this.col=="green"){
  this.col="orange";
  this.ooo=false;
  this.booo=false;
  this.looo=true;
}

//change color save1 dotyka save7 DOTYKA GREY CZYLI USTAWIA 2

if(this.indeks==save7-1 && this.col!=="red"&& save7!==0 && save7!==9&& save7!==18&& save7!==27&& save7!==36&& save7!==45&& save7!==54&& save7!==63&& this.col=="grey"){
  this.col="green";
  this.ooo=false;
  this.booo=true; //w lewo
}
if(this.indeks==save7+1 && this.col!=="red"&& save7!==8&& save7!==17&& save7!==26&& save7!==35&& save7!==44&& save7!==53&& save7!==62 && save7!==71&& this.col=="grey"){
  this.col="green";
  this.ooo=false;
  this.booo=true; // w prawo
}
if(this.indeks==save7-9&& this.col!=="red"&& this.col=="grey"){
  this.col="green";
  this.ooo=false;
  this.booo=true;
}
if(this.indeks==save7-10&& this.col!=="red" && save7!==0 && save7!==9&& save7!==18&& save7!==27&& save7!==36&& save7!==45&& save7!==54&& save7!==63&& this.col=="grey"){
  this.col="green";
  this.ooo=false;
  this.booo=true;
}
if(this.indeks==save7-8&& this.col!=="red" && save7!==8&& save7!==17&& save7!==26&& save7!==35&& save7!==44&& save7!==53&& save7!==62 && save7!==71&& this.col=="grey"){
  this.col="green";
  this.ooo=false;
  this.booo=true;
}
if(this.indeks==save7+8&& this.col!=="red" && save7!==0 && save7!==9&& save7!==18&& save7!==27&& save7!==36&& save7!==45&& save7!==54&& save7!==63&& this.col=="grey"){
  this.col="green";
  this.ooo=false;
  this.booo=true;
}
if(this.indeks==save7+9&& this.col!=="red"&& this.col=="grey"){
  this.col="green";
  this.ooo=false;
  this.booo=true;
}
if(this.indeks==save7+10&& this.col!=="red" &&save7!==8&& save7!==17&& save7!==26&& save7!==35&& save7!==44&& save7!==53&& save7!==62 && save7!==71&& this.col=="grey"){
  this.col="green";
  this.ooo=false;
  this.booo=true;
}

//33333333333333333

if(this.indeks==save7-1 && this.col!=="red"&& save7!==0 && save7!==9&& save7!==18&& save7!==27&& save7!==36&& save7!==45&& save7!==54&& save7!==63&& this.col=="lightblue"){
  this.col="grey";
  this.ooo=true; //w lewo
}
if(this.indeks==save7+1 && this.col!=="red"&& save7!==8&& save7!==17&& save7!==26&& save7!==35&& save7!==44&& save7!==53&& save7!==62 && save7!==71&& this.col=="lightblue"){
  this.col="grey";
  this.ooo=true; // w prawo
}
if(this.indeks==save7-9&& this.col!=="red"&& this.col=="lightblue"){
  this.col="grey";
  this.ooo=true;
}
if(this.indeks==save7-10&& this.col!=="red" && save7!==0 && save7!==9&& save7!==18&& save7!==27&& save7!==36&& save7!==45&& save7!==54&& save7!==63&& this.col=="lightblue"){
  this.col="grey";
  this.ooo=true;
}
if(this.indeks==save7-8&& this.col!=="red" && save7!==8&& save7!==17&& save7!==26&& save7!==35&& save7!==44&& save7!==53&& save7!==62 && save7!==71&& this.col=="lightblue"){
  this.col="grey";
  this.ooo=true;
}
if(this.indeks==save7+8&& this.col!=="red" && save7!==0 && save7!==9&& save7!==18&& save7!==27&& save7!==36&& save7!==45&& save7!==54&& save7!==63&& this.col=="lightblue"){
  this.col="grey";
  this.ooo=true;
}
if(this.indeks==save7+9&& this.col!=="red"&& this.col=="lightblue"){
  this.col="grey";
  this.ooo=true;
}
if(this.indeks==save7+10&& this.col!=="red" &&save7!==8&& save7!==17&& save7!==26&& save7!==35&& save7!==44&& save7!==53&& save7!==62 && save7!==71&& this.col=="lightblue"){
  this.col="grey";
  this.ooo=true;
}

//888888888888888888888
//change color save1 dotyka save2 DOTYKA purple CZYLI  USTAWIA 8

if(this.indeks==save8-1 && this.col!=="red"&& save8!==0 && save8!==9&& save8!==18&& save8!==27&& save8!==36&& save8!==45&& save8!==54&& save8!==63&& this.col=="purple"){
  this.col="blue";
  this.ooo=false;
  this.booo=false; //w lewo
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=false;
  this.rooo=true;
}
if(this.indeks==save8+1 && this.col!=="red"&& save8!==8&& save8!==17&& save8!==26&& save8!==35&& save8!==44&& save8!==53&& save8!==62 && save8!==71&& this.col=="purple"){
  this.col="blue";
  this.ooo=false;
  this.booo=false; // w prawo
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=false;
  this.rooo=true;
}
if(this.indeks==save8-9&& this.col!=="red"&& this.col=="purple"){
  this.col="blue";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=false;
  this.rooo=true;
}
if(this.indeks==save8-10&& this.col!=="red" && save8!==0 && save8!==9&& save8!==18&& save8!==27&& save8!==36&& save8!==45&& save8!==54&& save8!==63&& this.col=="purple"){
  this.col="blue";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=false;
  this.rooo=true;
}
if(this.indeks==save8-8&& this.col!=="red" && save8!==8&& save8!==17&& save8!==26&& save8!==35&& save8!==44&& save8!==53&& save8!==62 && save8!==71&& this.col=="purple"){
  this.col="blue";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=false;
  this.rooo=true;
}
if(this.indeks==save8+8&& this.col!=="red" && save8!==0 && save8!==9&& save8!==18&& save8!==27&& save8!==36&& save8!==45&& save8!==54&& save8!==63&& this.col=="purple"){
  this.col="blue";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=false;
  this.rooo=true;
}
if(this.indeks==save8+9&& this.col!=="red"&& this.col=="purple"){
  this.col="blue";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=false;
  this.rooo=true;
  }
if(this.indeks==save8+10&& this.col!=="red" &&save8!==8&& save8!==17&& save8!==26&& save8!==35&& save8!==44&& save8!==53&& save8!==62 && save8!==71&& this.col=="purple"){
  this.col="blue";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=false;
  this.rooo=true;
}

//change color save1 dotyka save2 DOTYKA violet CZYLI  USTAWIA 7

if(this.indeks==save8-1 && this.col!=="red"&& save8!==0 && save8!==9&& save8!==18&& save8!==27&& save8!==36&& save8!==45&& save8!==54&& save8!==63&& this.col=="violet"){
  this.col="purple";
  this.ooo=false;
  this.booo=false; //w lewo
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=true;
}
if(this.indeks==save8+1 && this.col!=="red"&& save8!==8&& save8!==17&& save8!==26&& save8!==35&& save8!==44&& save8!==53&& save8!==62 && save8!==71&& this.col=="violet"){
  this.col="purple";
  this.ooo=false;
  this.booo=false; // w prawo
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=true;
}
if(this.indeks==save8-9&& this.col!=="red"&& this.col=="violet"){
  this.col="purple";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=true;
}
if(this.indeks==save8-10&& this.col!=="red" && save8!==0 && save8!==9&& save8!==18&& save8!==27&& save8!==36&& save8!==45&& save8!==54&& save8!==63&& this.col=="violet"){
  this.col="purple";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=true;
}
if(this.indeks==save8-8&& this.col!=="red" && save8!==8&& save8!==17&& save8!==26&& save8!==35&& save8!==44&& save8!==53&& save8!==62 && save8!==71&& this.col=="violet"){
  this.col="purple";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=true;
}
if(this.indeks==save8+8&& this.col!=="red" && save8!==0 && save8!==9&& save8!==18&& save8!==27&& save8!==36&& save8!==45&& save8!==54&& save8!==63&& this.col=="violet"){
  this.col="purple";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=true;
}
if(this.indeks==save8+9&& this.col!=="red"&& this.col=="violet"){
  this.col="purple";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=true;
  }
if(this.indeks==save8+10&& this.col!=="red" &&save8!==8&& save8!==17&& save8!==26&& save8!==35&& save8!==44&& save8!==53&& save8!==62 && save8!==71&& this.col=="violet"){
  this.col="purple";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=true;
}


//change color save1 dotyka save2 DOTYKA lightgreen CZYLI  USTAWIA 6

if(this.indeks==save8-1 && this.col!=="red"&& save8!==0 && save8!==9&& save8!==18&& save8!==27&& save8!==36&& save8!==45&& save8!==54&& save8!==63&& this.col=="lightgreen"){
  this.col="violet";
  this.ooo=false;
  this.booo=false; //w lewo
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=true;
}
if(this.indeks==save8+1 && this.col!=="red"&& save8!==8&& save8!==17&& save8!==26&& save8!==35&& save8!==44&& save8!==53&& save8!==62 && save8!==71&& this.col=="lightgreen"){
  this.col="violet";
  this.ooo=false;
  this.booo=false; // w prawo
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=true;
}
if(this.indeks==save8-9&& this.col!=="red"&& this.col=="lightgreen"){
  this.col="violet";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=true;
}
if(this.indeks==save8-10&& this.col!=="red" && save8!==0 && save8!==9&& save8!==18&& save8!==27&& save8!==36&& save8!==45&& save8!==54&& save8!==63&& this.col=="lightgreen"){
  this.col="violet";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=true;
}
if(this.indeks==save8-8&& this.col!=="red" && save8!==8&& save8!==17&& save8!==26&& save8!==35&& save8!==44&& save8!==53&& save8!==62 && save8!==71&& this.col=="lightgreen"){
  this.col="violet";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=true;
}
if(this.indeks==save8+8&& this.col!=="red" && save8!==0 && save8!==9&& save8!==18&& save8!==27&& save8!==36&& save8!==45&& save8!==54&& save8!==63&& this.col=="lightgreen"){
  this.col="violet";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=true;
}
if(this.indeks==save8+9&& this.col!=="red"&& this.col=="lightgreen"){
  this.col="violet";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=true;
  }
if(this.indeks==save8+10&& this.col!=="red" &&save8!==8&& save8!==17&& save8!==26&& save8!==35&& save8!==44&& save8!==53&& save8!==62 && save8!==71&& this.col=="lightgreen"){
  this.col="violet";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=true;
}


//change color save1 dotyka save2 DOTYKA PINK CZYLI USTAWIA 5

if(this.indeks==save8-1 && this.col!=="red"&& save8!==0 && save8!==9&& save8!==18&& save8!==27&& save8!==36&& save8!==45&& save8!==54&& save8!==63&& this.col=="pink"){
  this.col="lightgreen";
  this.ooo=false;
  this.booo=false; //w lewo
  this.looo=false;
  this.tooo=false;
  this.mooo=true;
}
if(this.indeks==save8+1 && this.col!=="red"&& save8!==8&& save8!==17&& save8!==26&& save8!==35&& save8!==44&& save8!==53&& save8!==62 && save8!==71&& this.col=="pink"){
  this.col="lightgreen";
  this.ooo=false;
  this.booo=false; // w prawo
  this.looo=false;
  this.tooo=false;
  this.mooo=true;
}
if(this.indeks==save8-9&& this.col!=="red"&& this.col=="pink"){
  this.col="lightgreen";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=true;
}
if(this.indeks==save8-10&& this.col!=="red" && save8!==0 && save8!==9&& save8!==18&& save8!==27&& save8!==36&& save8!==45&& save8!==54&& save8!==63&& this.col=="pink"){
  this.col="lightgreen";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=true;
}
if(this.indeks==save8-8&& this.col!=="red" && save8!==8&& save8!==17&& save8!==26&& save8!==35&& save8!==44&& save8!==53&& save8!==62 && save8!==71&& this.col=="pink"){
  this.col="lightgreen";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=true;
}
if(this.indeks==save8+8&& this.col!=="red" && save8!==0 && save8!==9&& save8!==18&& save8!==27&& save8!==36&& save8!==45&& save8!==54&& save8!==63&& this.col=="pink"){
  this.col="lightgreen";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=true;
}
if(this.indeks==save8+9&& this.col!=="red"&& this.col=="pink"){
  this.col="lightgreen";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=true;
  }
if(this.indeks==save8+10&& this.col!=="red" &&save8!==8&& save8!==17&& save8!==26&& save8!==35&& save8!==44&& save8!==53&& save8!==62 && save8!==71&& this.col=="pink"){
  this.col="lightgreen";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=true;
}

//change color save1 dotyka save2 DOTYKA ORANGE CZYLI USTAWIA 4

if(this.indeks==save8-1 && this.col!=="red"&& save8!==0 && save8!==9&& save8!==18&& save8!==27&& save8!==36&& save8!==45&& save8!==54&& save8!==63&& this.col=="orange"){
  this.col="pink";
  this.ooo=false;
  this.booo=false; //w lewo
  this.looo=false;
  this.tooo=true;
}
if(this.indeks==save8+1 && this.col!=="red"&& save8!==8&& save8!==17&& save8!==26&& save8!==35&& save8!==44&& save8!==53&& save8!==62 && save8!==71&& this.col=="orange"){
  this.col="pink";
  this.ooo=false;
  this.booo=false; // w prawo
  this.looo=false;
  this.tooo=true;
}
if(this.indeks==save8-9&& this.col!=="red"&& this.col=="orange"){
  this.col="pink";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=true;
}
if(this.indeks==save8-10&& this.col!=="red" && save8!==0 && save8!==9&& save8!==18&& save8!==27&& save8!==36&& save8!==45&& save8!==54&& save8!==63&& this.col=="orange"){
  this.col="pink";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=true;
}
if(this.indeks==save8-8&& this.col!=="red" && save8!==8&& save8!==17&& save8!==26&& save8!==35&& save8!==44&& save8!==53&& save8!==62 && save8!==71&& this.col=="orange"){
  this.col="pink";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=true;
}
if(this.indeks==save8+8&& this.col!=="red" && save8!==0 && save8!==9&& save8!==18&& save8!==27&& save8!==36&& save8!==45&& save8!==54&& save8!==63&& this.col=="orange"){
  this.col="pink";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=true;
}
if(this.indeks==save8+9&& this.col!=="red"&& this.col=="orange"){
  this.col="pink";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=true;
  }
if(this.indeks==save8+10&& this.col!=="red" &&save8!==8&& save8!==17&& save8!==26&& save8!==35&& save8!==44&& save8!==53&& save8!==62 && save8!==71&& this.col=="orange"){
  this.col="pink";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=true;
}

//change color save1 dotyka save2 DOTYKA GREEN CZYLI USTAWIA 3

if(this.indeks==save8-1 && this.col!=="red"&& save8!==0 && save8!==9&& save8!==18&& save8!==27&& save8!==36&& save8!==45&& save8!==54&& save8!==63&& this.col=="green"){
  this.col="orange";
  this.ooo=false;
  this.booo=false; //w lewo
  this.looo=true;
}
if(this.indeks==save8+1 && this.col!=="red"&& save8!==8&& save8!==17&& save8!==26&& save8!==35&& save8!==44&& save8!==53&& save8!==62 && save8!==71&& this.col=="green"){
  this.col="orange";
  this.ooo=false;
  this.booo=false; // w prawo
  this.looo=true;
}
if(this.indeks==save8-9&& this.col!=="red"&& this.col=="green"){
  this.col="orange";
  this.ooo=false;
  this.booo=false;
  this.looo=true;
}
if(this.indeks==save8-10&& this.col!=="red" && save8!==0 && save8!==9&& save8!==18&& save8!==27&& save8!==36&& save8!==45&& save8!==54&& save8!==63&& this.col=="green"){
  this.col="orange";
  this.ooo=false;
  this.booo=false;
  this.looo=true;
}
if(this.indeks==save8-8&& this.col!=="red" && save8!==8&& save8!==17&& save8!==26&& save8!==35&& save8!==44&& save8!==53&& save8!==62 && save8!==71&& this.col=="green"){
  this.col="orange";
  this.ooo=false;
  this.booo=false;
  this.looo=true;
}
if(this.indeks==save8+8&& this.col!=="red" && save8!==0 && save8!==9&& save8!==18&& save8!==27&& save8!==36&& save8!==45&& save8!==54&& save8!==63&& this.col=="green"){
  this.col="orange";
  this.ooo=false;
  this.booo=false;
  this.looo=true;
}
if(this.indeks==save8+9&& this.col!=="red"&& this.col=="green"){
  this.col="orange";
  this.ooo=false;
  this.booo=false;
  this.looo=true;
}
if(this.indeks==save8+10&& this.col!=="red" &&save8!==8&& save8!==17&& save8!==26&& save8!==35&& save8!==44&& save8!==53&& save8!==62 && save8!==71&& this.col=="green"){
  this.col="orange";
  this.ooo=false;
  this.booo=false;
  this.looo=true;
}

//change color save1 dotyka save8 DOTYKA GREY CZYLI USTAWIA 2

if(this.indeks==save8-1 && this.col!=="red"&& save8!==0 && save8!==9&& save8!==18&& save8!==27&& save8!==36&& save8!==45&& save8!==54&& save8!==63&& this.col=="grey"){
  this.col="green";
  this.ooo=false;
  this.booo=true; //w lewo
}
if(this.indeks==save8+1 && this.col!=="red"&& save8!==8&& save8!==17&& save8!==26&& save8!==35&& save8!==44&& save8!==53&& save8!==62 && save8!==71&& this.col=="grey"){
  this.col="green";
  this.ooo=false;
  this.booo=true; // w prawo
}
if(this.indeks==save8-9&& this.col!=="red"&& this.col=="grey"){
  this.col="green";
  this.ooo=false;
  this.booo=true;
}
if(this.indeks==save8-10&& this.col!=="red" && save8!==0 && save8!==9&& save8!==18&& save8!==27&& save8!==36&& save8!==45&& save8!==54&& save8!==63&& this.col=="grey"){
  this.col="green";
  this.ooo=false;
  this.booo=true;
}
if(this.indeks==save8-8&& this.col!=="red" && save8!==8&& save8!==17&& save8!==26&& save8!==35&& save8!==44&& save8!==53&& save8!==62 && save8!==71&& this.col=="grey"){
  this.col="green";
  this.ooo=false;
  this.booo=true;
}
if(this.indeks==save8+8&& this.col!=="red" && save8!==0 && save8!==9&& save8!==18&& save8!==27&& save8!==36&& save8!==45&& save8!==54&& save8!==63&& this.col=="grey"){
  this.col="green";
  this.ooo=false;
  this.booo=true;
}
if(this.indeks==save8+9&& this.col!=="red"&& this.col=="grey"){
  this.col="green";
  this.ooo=false;
  this.booo=true;
}
if(this.indeks==save8+10&& this.col!=="red" &&save8!==8&& save8!==17&& save8!==26&& save8!==35&& save8!==44&& save8!==53&& save8!==62 && save8!==71&& this.col=="grey"){
  this.col="green";
  this.ooo=false;
  this.booo=true;
}

//33333333333333333

if(this.indeks==save8-1 && this.col!=="red"&& save8!==0 && save8!==9&& save8!==18&& save8!==27&& save8!==36&& save8!==45&& save8!==54&& save8!==63&& this.col=="lightblue"){
  this.col="grey";
  this.ooo=true; //w lewo
}
if(this.indeks==save8+1 && this.col!=="red"&& save8!==8&& save8!==17&& save8!==26&& save8!==35&& save8!==44&& save8!==53&& save8!==62 && save8!==71&& this.col=="lightblue"){
  this.col="grey";
  this.ooo=true; // w prawo
}
if(this.indeks==save8-9&& this.col!=="red"&& this.col=="lightblue"){
  this.col="grey";
  this.ooo=true;
}
if(this.indeks==save8-10&& this.col!=="red" && save8!==0 && save8!==9&& save8!==18&& save8!==27&& save8!==36&& save8!==45&& save8!==54&& save8!==63&& this.col=="lightblue"){
  this.col="grey";
  this.ooo=true;
}
if(this.indeks==save8-8&& this.col!=="red" && save8!==8&& save8!==17&& save8!==26&& save8!==35&& save8!==44&& save8!==53&& save8!==62 && save8!==71&& this.col=="lightblue"){
  this.col="grey";
  this.ooo=true;
}
if(this.indeks==save8+8&& this.col!=="red" && save8!==0 && save8!==9&& save8!==18&& save8!==27&& save8!==36&& save8!==45&& save8!==54&& save8!==63&& this.col=="lightblue"){
  this.col="grey";
  this.ooo=true;
}
if(this.indeks==save8+9&& this.col!=="red"&& this.col=="lightblue"){
  this.col="grey";
  this.ooo=true;
}
if(this.indeks==save8+10&& this.col!=="red" &&save8!==8&& save8!==17&& save8!==26&& save8!==35&& save8!==44&& save8!==53&& save8!==62 && save8!==71&& this.col=="lightblue"){
  this.col="grey";
  this.ooo=true;
}

//9999999999999999

//change color save1 dotyka save2 DOTYKA purple CZYLI  USTAWIA 8

if(this.indeks==save9-1 && this.col!=="red"&& save9!==0 && save9!==9&& save9!==18&& save9!==27&& save9!==36&& save9!==45&& save9!==54&& save9!==63&& this.col=="purple"){
  this.col="blue";
  this.ooo=false;
  this.booo=false; //w lewo
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=false;
  this.rooo=true;
}
if(this.indeks==save9+1 && this.col!=="red"&& save9!==8&& save9!==17&& save9!==26&& save9!==35&& save9!==44&& save9!==53&& save9!==62 && save9!==71&& this.col=="purple"){
  this.col="blue";
  this.ooo=false;
  this.booo=false; // w prawo
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=false;
  this.rooo=true;
}
if(this.indeks==save9-9&& this.col!=="red"&& this.col=="purple"){
  this.col="blue";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=false;
  this.rooo=true;
}
if(this.indeks==save9-10&& this.col!=="red" && save9!==0 && save9!==9&& save9!==18&& save9!==27&& save9!==36&& save9!==45&& save9!==54&& save9!==63&& this.col=="purple"){
  this.col="blue";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=false;
  this.rooo=true;
}
if(this.indeks==save9-8&& this.col!=="red" && save9!==8&& save9!==17&& save9!==26&& save9!==35&& save9!==44&& save9!==53&& save9!==62 && save9!==71&& this.col=="purple"){
  this.col="blue";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=false;
  this.rooo=true;
}
if(this.indeks==save9+8&& this.col!=="red" && save9!==0 && save9!==9&& save9!==18&& save9!==27&& save9!==36&& save9!==45&& save9!==54&& save9!==63&& this.col=="purple"){
  this.col="blue";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=false;
  this.rooo=true;
}
if(this.indeks==save9+9&& this.col!=="red"&& this.col=="purple"){
  this.col="blue";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=false;
  this.rooo=true;
  }
if(this.indeks==save9+10&& this.col!=="red" &&save9!==8&& save9!==17&& save9!==26&& save9!==35&& save9!==44&& save9!==53&& save9!==62 && save9!==71&& this.col=="purple"){
  this.col="blue";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=false;
  this.rooo=true;
}

//change color save1 dotyka save2 DOTYKA violet CZYLI  USTAWIA 7

if(this.indeks==save9-1 && this.col!=="red"&& save9!==0 && save9!==9&& save9!==18&& save9!==27&& save9!==36&& save9!==45&& save9!==54&& save9!==63&& this.col=="violet"){
  this.col="purple";
  this.ooo=false;
  this.booo=false; //w lewo
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=true;
}
if(this.indeks==save9+1 && this.col!=="red"&& save9!==8&& save9!==17&& save9!==26&& save9!==35&& save9!==44&& save9!==53&& save9!==62 && save9!==71&& this.col=="violet"){
  this.col="purple";
  this.ooo=false;
  this.booo=false; // w prawo
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=true;
}
if(this.indeks==save9-9&& this.col!=="red"&& this.col=="violet"){
  this.col="purple";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=true;
}
if(this.indeks==save9-10&& this.col!=="red" && save9!==0 && save9!==9&& save9!==18&& save9!==27&& save9!==36&& save9!==45&& save9!==54&& save9!==63&& this.col=="violet"){
  this.col="purple";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=true;
}
if(this.indeks==save9-8&& this.col!=="red" && save9!==8&& save9!==17&& save9!==26&& save9!==35&& save9!==44&& save9!==53&& save9!==62 && save9!==71&& this.col=="violet"){
  this.col="purple";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=true;
}
if(this.indeks==save9+8&& this.col!=="red" && save9!==0 && save9!==9&& save9!==18&& save9!==27&& save9!==36&& save9!==45&& save9!==54&& save9!==63&& this.col=="violet"){
  this.col="purple";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=true;
}
if(this.indeks==save9+9&& this.col!=="red"&& this.col=="violet"){
  this.col="purple";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=true;
  }
if(this.indeks==save9+10&& this.col!=="red" &&save9!==8&& save9!==17&& save9!==26&& save9!==35&& save9!==44&& save9!==53&& save9!==62 && save9!==71&& this.col=="violet"){
  this.col="purple";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=false;
  this.pooo=true;
}


//change color save1 dotyka save2 DOTYKA lightgreen CZYLI  USTAWIA 6

if(this.indeks==save9-1 && this.col!=="red"&& save9!==0 && save9!==9&& save9!==18&& save9!==27&& save9!==36&& save9!==45&& save9!==54&& save9!==63&& this.col=="lightgreen"){
  this.col="violet";
  this.ooo=false;
  this.booo=false; //w lewo
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=true;
}
if(this.indeks==save9+1 && this.col!=="red"&& save9!==8&& save9!==17&& save9!==26&& save9!==35&& save9!==44&& save9!==53&& save9!==62 && save9!==71&& this.col=="lightgreen"){
  this.col="violet";
  this.ooo=false;
  this.booo=false; // w prawo
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=true;
}
if(this.indeks==save9-9&& this.col!=="red"&& this.col=="lightgreen"){
  this.col="violet";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=true;
}
if(this.indeks==save9-10&& this.col!=="red" && save9!==0 && save9!==9&& save9!==18&& save9!==27&& save9!==36&& save9!==45&& save9!==54&& save9!==63&& this.col=="lightgreen"){
  this.col="violet";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=true;
}
if(this.indeks==save9-8&& this.col!=="red" && save9!==8&& save9!==17&& save9!==26&& save9!==35&& save9!==44&& save9!==53&& save9!==62 && save9!==71&& this.col=="lightgreen"){
  this.col="violet";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=true;
}
if(this.indeks==save9+8&& this.col!=="red" && save9!==0 && save9!==9&& save9!==18&& save9!==27&& save9!==36&& save9!==45&& save9!==54&& save9!==63&& this.col=="lightgreen"){
  this.col="violet";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=true;
}
if(this.indeks==save9+9&& this.col!=="red"&& this.col=="lightgreen"){
  this.col="violet";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=true;
  }
if(this.indeks==save9+10&& this.col!=="red" &&save9!==8&& save9!==17&& save9!==26&& save9!==35&& save9!==44&& save9!==53&& save9!==62 && save9!==71&& this.col=="lightgreen"){
  this.col="violet";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=false;
  this.nooo=true;
}


//change color save1 dotyka save2 DOTYKA PINK CZYLI USTAWIA 5

if(this.indeks==save9-1 && this.col!=="red"&& save9!==0 && save9!==9&& save9!==18&& save9!==27&& save9!==36&& save9!==45&& save9!==54&& save9!==63&& this.col=="pink"){
  this.col="lightgreen";
  this.ooo=false;
  this.booo=false; //w lewo
  this.looo=false;
  this.tooo=false;
  this.mooo=true;
}
if(this.indeks==save9+1 && this.col!=="red"&& save9!==8&& save9!==17&& save9!==26&& save9!==35&& save9!==44&& save9!==53&& save9!==62 && save9!==71&& this.col=="pink"){
  this.col="lightgreen";
  this.ooo=false;
  this.booo=false; // w prawo
  this.looo=false;
  this.tooo=false;
  this.mooo=true;
}
if(this.indeks==save9-9&& this.col!=="red"&& this.col=="pink"){
  this.col="lightgreen";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=true;
}
if(this.indeks==save9-10&& this.col!=="red" && save9!==0 && save9!==9&& save9!==18&& save9!==27&& save9!==36&& save9!==45&& save9!==54&& save9!==63&& this.col=="pink"){
  this.col="lightgreen";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=true;
}
if(this.indeks==save9-8&& this.col!=="red" && save9!==8&& save9!==17&& save9!==26&& save9!==35&& save9!==44&& save9!==53&& save9!==62 && save9!==71&& this.col=="pink"){
  this.col="lightgreen";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=true;
}
if(this.indeks==save9+8&& this.col!=="red" && save9!==0 && save9!==9&& save9!==18&& save9!==27&& save9!==36&& save9!==45&& save9!==54&& save9!==63&& this.col=="pink"){
  this.col="lightgreen";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=true;
}
if(this.indeks==save9+9&& this.col!=="red"&& this.col=="pink"){
  this.col="lightgreen";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=true;
  }
if(this.indeks==save9+10&& this.col!=="red" &&save9!==8&& save9!==17&& save9!==26&& save9!==35&& save9!==44&& save9!==53&& save9!==62 && save9!==71&& this.col=="pink"){
  this.col="lightgreen";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=false;
  this.mooo=true;
}

//change color save1 dotyka save2 DOTYKA ORANGE CZYLI USTAWIA 4

if(this.indeks==save9-1 && this.col!=="red"&& save9!==0 && save9!==9&& save9!==18&& save9!==27&& save9!==36&& save9!==45&& save9!==54&& save9!==63&& this.col=="orange"){
  this.col="pink";
  this.ooo=false;
  this.booo=false; //w lewo
  this.looo=false;
  this.tooo=true;
}
if(this.indeks==save9+1 && this.col!=="red"&& save9!==8&& save9!==17&& save9!==26&& save9!==35&& save9!==44&& save9!==53&& save9!==62 && save9!==71&& this.col=="orange"){
  this.col="pink";
  this.ooo=false;
  this.booo=false; // w prawo
  this.looo=false;
  this.tooo=true;
}
if(this.indeks==save9-9&& this.col!=="red"&& this.col=="orange"){
  this.col="pink";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=true;
}
if(this.indeks==save9-10&& this.col!=="red" && save9!==0 && save9!==9&& save9!==18&& save9!==27&& save9!==36&& save9!==45&& save9!==54&& save9!==63&& this.col=="orange"){
  this.col="pink";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=true;
}
if(this.indeks==save9-8&& this.col!=="red" && save9!==8&& save9!==17&& save9!==26&& save9!==35&& save9!==44&& save9!==53&& save9!==62 && save9!==71&& this.col=="orange"){
  this.col="pink";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=true;
}
if(this.indeks==save9+8&& this.col!=="red" && save9!==0 && save9!==9&& save9!==18&& save9!==27&& save9!==36&& save9!==45&& save9!==54&& save9!==63&& this.col=="orange"){
  this.col="pink";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=true;
}
if(this.indeks==save9+9&& this.col!=="red"&& this.col=="orange"){
  this.col="pink";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=true;
  }
if(this.indeks==save9+10&& this.col!=="red" &&save9!==8&& save9!==17&& save9!==26&& save9!==35&& save9!==44&& save9!==53&& save9!==62 && save9!==71&& this.col=="orange"){
  this.col="pink";
  this.ooo=false;
  this.booo=false;
  this.looo=false;
  this.tooo=true;
}

//change color save1 dotyka save2 DOTYKA GREEN CZYLI USTAWIA 3

if(this.indeks==save9-1 && this.col!=="red"&& save9!==0 && save9!==9&& save9!==18&& save9!==27&& save9!==36&& save9!==45&& save9!==54&& save9!==63&& this.col=="green"){
  this.col="orange";
  this.ooo=false;
  this.booo=false; //w lewo
  this.looo=true;
}
if(this.indeks==save9+1 && this.col!=="red"&& save9!==8&& save9!==17&& save9!==26&& save9!==35&& save9!==44&& save9!==53&& save9!==62 && save9!==71&& this.col=="green"){
  this.col="orange";
  this.ooo=false;
  this.booo=false; // w prawo
  this.looo=true;
}
if(this.indeks==save9-9&& this.col!=="red"&& this.col=="green"){
  this.col="orange";
  this.ooo=false;
  this.booo=false;
  this.looo=true;
}
if(this.indeks==save9-10&& this.col!=="red" && save9!==0 && save9!==9&& save9!==18&& save9!==27&& save9!==36&& save9!==45&& save9!==54&& save9!==63&& this.col=="green"){
  this.col="orange";
  this.ooo=false;
  this.booo=false;
  this.looo=true;
}
if(this.indeks==save9-8&& this.col!=="red" && save9!==8&& save9!==17&& save9!==26&& save9!==35&& save9!==44&& save9!==53&& save9!==62 && save9!==71&& this.col=="green"){
  this.col="orange";
  this.ooo=false;
  this.booo=false;
  this.looo=true;
}
if(this.indeks==save9+8&& this.col!=="red" && save9!==0 && save9!==9&& save9!==18&& save9!==27&& save9!==36&& save9!==45&& save9!==54&& save9!==63&& this.col=="green"){
  this.col="orange";
  this.ooo=false;
  this.booo=false;
  this.looo=true;
}
if(this.indeks==save9+9&& this.col!=="red"&& this.col=="green"){
  this.col="orange";
  this.ooo=false;
  this.booo=false;
  this.looo=true;
}
if(this.indeks==save9+10&& this.col!=="red" &&save9!==8&& save9!==17&& save9!==26&& save9!==35&& save9!==44&& save9!==53&& save9!==62 && save9!==71&& this.col=="green"){
  this.col="orange";
  this.ooo=false;
  this.booo=false;
  this.looo=true;
}

//change color save1 dotyka save9 DOTYKA GREY CZYLI USTAWIA 2

if(this.indeks==save9-1 && this.col!=="red"&& save9!==0 && save9!==9&& save9!==18&& save9!==27&& save9!==36&& save9!==45&& save9!==54&& save9!==63&& this.col=="grey"){
  this.col="green";
  this.ooo=false;
  this.booo=true; //w lewo
}
if(this.indeks==save9+1 && this.col!=="red"&& save9!==8&& save9!==17&& save9!==26&& save9!==35&& save9!==44&& save9!==53&& save9!==62 && save9!==71&& this.col=="grey"){
  this.col="green";
  this.ooo=false;
  this.booo=true; // w prawo
}
if(this.indeks==save9-9&& this.col!=="red"&& this.col=="grey"){
  this.col="green";
  this.ooo=false;
  this.booo=true;
}
if(this.indeks==save9-10&& this.col!=="red" && save9!==0 && save9!==9&& save9!==18&& save9!==27&& save9!==36&& save9!==45&& save9!==54&& save9!==63&& this.col=="grey"){
  this.col="green";
  this.ooo=false;
  this.booo=true;
}
if(this.indeks==save9-8&& this.col!=="red" && save9!==8&& save9!==17&& save9!==26&& save9!==35&& save9!==44&& save9!==53&& save9!==62 && save9!==71&& this.col=="grey"){
  this.col="green";
  this.ooo=false;
  this.booo=true;
}
if(this.indeks==save9+8&& this.col!=="red" && save9!==0 && save9!==9&& save9!==18&& save9!==27&& save9!==36&& save9!==45&& save9!==54&& save9!==63&& this.col=="grey"){
  this.col="green";
  this.ooo=false;
  this.booo=true;
}
if(this.indeks==save9+9&& this.col!=="red"&& this.col=="grey"){
  this.col="green";
  this.ooo=false;
  this.booo=true;
}
if(this.indeks==save9+10&& this.col!=="red" &&save9!==8&& save9!==17&& save9!==26&& save9!==35&& save9!==44&& save9!==53&& save9!==62 && save9!==71&& this.col=="grey"){
  this.col="green";
  this.ooo=false;
  this.booo=true;
}

//33333333333333333

if(this.indeks==save9-1 && this.col!=="red"&& save9!==0 && save9!==9&& save9!==18&& save9!==27&& save9!==36&& save9!==45&& save9!==54&& save9!==63&& this.col=="lightblue"){
  this.col="grey";
  this.ooo=true; //w lewo
}
if(this.indeks==save9+1 && this.col!=="red"&& save9!==8&& save9!==17&& save9!==26&& save9!==35&& save9!==44&& save9!==53&& save9!==62 && save9!==71&& this.col=="lightblue"){
  this.col="grey";
  this.ooo=true; // w prawo
}
if(this.indeks==save9-9&& this.col!=="red"&& this.col=="lightblue"){
  this.col="grey";
  this.ooo=true;
}
if(this.indeks==save9-10&& this.col!=="red" && save9!==0 && save9!==9&& save9!==18&& save9!==27&& save9!==36&& save9!==45&& save9!==54&& save9!==63&& this.col=="lightblue"){
  this.col="grey";
  this.ooo=true;
}
if(this.indeks==save9-8&& this.col!=="red" && save9!==8&& save9!==17&& save9!==26&& save9!==35&& save9!==44&& save9!==53&& save9!==62 && save9!==71&& this.col=="lightblue"){
  this.col="grey";
  this.ooo=true;
}
if(this.indeks==save9+8&& this.col!=="red" && save9!==0 && save9!==9&& save9!==18&& save9!==27&& save9!==36&& save9!==45&& save9!==54&& save9!==63&& this.col=="lightblue"){
  this.col="grey";
  this.ooo=true;
}
if(this.indeks==save9+9&& this.col!=="red"&& this.col=="lightblue"){
  this.col="grey";
  this.ooo=true;
}
if(this.indeks==save9+10&& this.col!=="red" &&save9!==8&& save9!==17&& save9!==26&& save9!==35&& save9!==44&& save9!==53&& save9!==62 && save9!==71&& this.col=="lightblue"){
  this.col="grey";
  this.ooo=true;
}


  }
  this.set=function(){
    if(this.ooo){
      ctx.font="25px Arial";
      ctx.fillStyle="black";
      ctx.fillText("1",this.xPos+18,this.yPos+33);
      // this.ooo=false;
    }
    if(this.booo){
      ctx.font="20px Arial";
      ctx.fillStyle="black";
      ctx.fillText("2",this.xPos+18,this.yPos+33);
    }
    if(this.looo){
      ctx.font="20px Arial";
      ctx.fillStyle="black";
      ctx.fillText("3",this.xPos+18,this.yPos+33);
    }
    if(this.tooo){
      ctx.font="20px Arial";
      ctx.fillStyle="black";
      ctx.fillText("4",this.xPos+18,this.yPos+33);
    }
    if(this.mooo){
      ctx.font="20px Arial";
      ctx.fillStyle="black";
      ctx.fillText("5",this.xPos+18,this.yPos+33);
    }
    if(this.nooo){
      ctx.font="20px Arial";
      ctx.fillStyle="black";
      ctx.fillText("6",this.xPos+18,this.yPos+33);
    }
    if(this.pooo){
      ctx.font="20px Arial";
      ctx.fillStyle="black";
      ctx.fillText("7",this.xPos+18,this.yPos+33);
    }
    if(this.rooo){
      ctx.font="20px Arial";
      ctx.fillStyle="black";
      ctx.fillText("8",this.xPos+15,this.yPos+25);
    }
  }
  this.setup=function() {
    document.addEventListener("mousedown",this.clickFn);
  }
  this.clickFn=function(e) {
    switch(e.which){
      case 1:
        this.mouseLeftClickX=e.clientX;
        this.mouseLeftClickY=e.clientY;
        break;
    }
    mouseLeftClickX=this.mouseLeftClickX;
    mouseLeftClickY=this.mouseLeftClickY;
  }
  this.distBomb=function(tab){
    this.aLeftClick=mouseLeftClickX-(this.xPos+35);
    this.bLeftClick=mouseLeftClickY-(this.yPos+35);
    this.cLeftClick=Math.floor(Math.sqrt(this.aLeftClick*this.aLeftClick+this.bLeftClick*this.bLeftClick));
    this.tab=tab;
    if(this.cLeftClick<=33 && mouseLeftClickX!=0 && mouseLeftClickY!=0 && this.col=="red"){
      if(!this.delBomb){
        this.delBomb=true;
        alert("KONIEC GRY");
      }
    }
    if(this.cLeftClick<=33 && mouseLeftClickX!=0 && mouseLeftClickY!=0 && this.col=="lightblue"){
      this.indexOffLeftWhiteDel=this.tab.findIndex(x=>x.xPos<=mouseLeftClickX&&x.xPos+50>=mouseLeftClickX&&x.yPos<=mouseLeftClickY&&x.yPos+50>=mouseLeftClickY);
      if(!this.delWhiteCells){
        this.delWhiteCells=true;
        this.p=this.indexOffLeftWhiteDel+1;
        this.m=this.indexOffLeftWhiteDel-1;
        this.n=this.indexOffLeftWhiteDel+8;
        this.l=this.indexOffLeftWhiteDel+9;
        this.o=this.indexOffLeftWhiteDel+10;
        this.r=this.indexOffLeftWhiteDel-8;
        this.w=this.indexOffLeftWhiteDel-9;
        this.s=this.indexOffLeftWhiteDel-10;

        // this.qw=this.indexOffLeftWhiteDel-2;
        // this.qe=this.indexOffLeftWhiteDel+2;
        // this.qr=this.indexOffLeftWhiteDel-7;
        // this.qt=this.indexOffLeftWhiteDel+7;
        // this.qy=this.indexOffLeftWhiteDel-11;
        // this.qu=this.indexOffLeftWhiteDel+11;
        // this.qi=this.indexOffLeftWhiteDel-16;
        // this.qo=this.indexOffLeftWhiteDel+16;
        // this.qp=this.indexOffLeftWhiteDel-17;
        // this.qa=this.indexOffLeftWhiteDel+17;
        // this.qs=this.indexOffLeftWhiteDel-18;
        // this.qd=this.indexOffLeftWhiteDel+18;
        // this.qf=this.indexOffLeftWhiteDel-19;
        // this.qg=this.indexOffLeftWhiteDel+19;
        // this.qh=this.indexOffLeftWhiteDel-20;
        // this.qj=this.indexOffLeftWhiteDel+20;
        //
        //
        // if(this.qw!==save1 &&this.qw!==save2 &&this.qw!==save3 &&this.qw!==save4 &&this.qw!==save5
        //   &&this.qw!==save6 &&this.qw!==save7 &&this.qw!==save8 &&this.qw!==save9){
        //   // this.tab.sqwlice(this.qw,1);
        //   this.tab[this.qw].visible=false;
        // }
        //
        // if(this.qe!==save1 &&this.qe!==save2 &&this.qe!==save3 &&this.qe!==save4 &&this.qe!==save5
        //   &&this.qe!==save6 &&this.qe!==save7 &&this.qe!==save8 &&this.qe!==save9){
        //   // this.tab.sqelice(this.qe,1);
        //   this.tab[this.qe].visible=false;
        // }
        //
        // if(this.qr!==save1 &&this.qr!==save2 &&this.qr!==save3 &&this.qr!==save4 &&this.qr!==save5
        //   &&this.qr!==save6 &&this.qr!==save7 &&this.qr!==save8 &&this.qr!==save9){
        //   // this.tab.sqrlice(this.qr,1);
        //   this.tab[this.qr].visible=false;
        // }
        //
        // if(this.qt!==save1 &&this.qt!==save2 &&this.qt!==save3 &&this.qt!==save4 &&this.qt!==save5
        //   &&this.qt!==save6 &&this.qt!==save7 &&this.qt!==save8 &&this.qt!==save9){
        //   // this.tab.sqtlice(this.qt,1);
        //   this.tab[this.qt].visible=false;
        // }
        //
        // if(this.qy!==save1 &&this.qy!==save2 &&this.qy!==save3 &&this.qy!==save4 &&this.qy!==save5
        //   &&this.qy!==save6 &&this.qy!==save7 &&this.qy!==save8 &&this.qy!==save9){
        //   // this.tab.sqylice(this.qy,1);
        //   this.tab[this.qy].visible=false;
        // }
        //
        // if(this.qu!==save1 &&this.qu!==save2 &&this.qu!==save3 &&this.qu!==save4 &&this.qu!==save5
        //   &&this.qu!==save6 &&this.qu!==save7 &&this.qu!==save8 &&this.qu!==save9){
        //   // this.tab.squlice(this.qu,1);
        //   this.tab[this.qu].visible=false;
        // }

        if(this.p!==save1 &&this.p!==save2 &&this.p!==save3 &&this.p!==save4 &&this.p!==save5
          &&this.p!==save6 &&this.p!==save7 &&this.p!==save8 &&this.p!==save9){
          this.tab[this.p].visible=false;
        }
        if(this.m!==save1 &&this.m!==save2 &&this.m!==save3 &&this.m!==save4 &&this.m!==save5
          &&this.m!==save6 &&this.m!==save7 &&this.m!==save8 &&this.m!==save9){
          this.tab[this.m].visible=false;
        }
        if(this.n!==save1 &&this.n!==save2 &&this.n!==save3 &&this.n!==save4 &&this.n!==save5
          &&this.n!==save6 &&this.n!==save7 &&this.n!==save8 &&this.n!==save9){
          this.tab[this.n].visible=false;
        }
        if(this.l!==save1 &&this.l!==save2 &&this.l!==save3 &&this.l!==save4 &&this.l!==save5
          &&this.l!==save6 &&this.l!==save7 &&this.l!==save8 &&this.l!==save9){
          this.tab[this.l].visible=false;
        }
        if(this.o!==save1 &&this.o!==save2 &&this.o!==save3 &&this.o!==save4 &&this.o!==save5
          &&this.o!==save6 &&this.o!==save7 &&this.o!==save8 &&this.o!==save9){
          this.tab[this.o].visible=false;
        }
        if(this.r!==save1 &&this.r!==save2 &&this.r!==save3 &&this.r!==save4 &&this.r!==save5
          &&this.r!==save6 &&this.r!==save7 &&this.r!==save8 &&this.r!==save9){
          this.tab[this.r].visible=false;
        }
        if(this.w!==save1 &&this.w!==save2 &&this.w!==save3 &&this.w!==save4 &&this.w!==save5
          &&this.w!==save6 &&this.w!==save7 &&this.w!==save8 &&this.w!==save9){
          this.tab[this.w].visible=false;
        }
        if(this.s!==save1 &&this.s!==save2 &&this.s!==save3 &&this.s!==save4 &&this.s!==save5
          &&this.s!==save6 &&this.s!==save7 &&this.s!==save8 &&this.s!==save9){
          this.tab[this.s].visible=false;
        }
      }
    }
  }
  this.show=function(){
    ctx.fillStyle=this.col;
    ctx.fillRect(this.xPos,this.yPos,50,50);
  }
}
