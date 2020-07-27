var stu=["tauseef","ali","taimoor","amal","rubina"];
var stuclass=[10,9,8,7,6];
for(i=0;i<stu.length;i++){
    document.write("<br>"+i+" "+stu[i]+" "+stuclass[i])
}




function change(){
    var image=document.getElementById("cow");
    image.src="animal 2.jpg";
}
function old(){
    var image=document.getElementById("cow");
    image.src="animal 1.jpg";
}


var count=0;
var start;
var end;
function increase()
{   var display=document.getElementById("screen");
    count++;
    display.value=count;
   }
    
function decrease()
{
    var display=document.getElementById("screen");
    count--;
    display.value=count;
   }
function inc(){
    if(count!=0){
    clearInterval(end);
    }
    start = setInterval(increase,500);
}
function dec(){
    if(count!=0){
    clearInterval(start)   
    }
    end = setInterval(decrease,500);}


