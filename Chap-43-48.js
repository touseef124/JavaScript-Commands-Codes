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


var students={};
var count=0;
function createobject(){
    var naam=document.getElementById("name");
    var num=document.getElementById("rank");
    
    var tr=document.createElement("tr");
    var name=document.createTextNode(naam.value);
    var rank=document.createTextNode(num.value);
    

    var th1=document.createElement("th");
    th1.setAttribute("class","space")
    var th2=document.createElement("th");
    th1.appendChild(name);
    th2.appendChild(rank);


    var image2=document.createElement("img");
    image2.setAttribute("src","delete.jpg");
    image2.setAttribute("id","delete-logo");
    image2.setAttribute("onclick","removeitem(this)")
    

    var image=document.createElement("img");
    image.setAttribute("src","edit.jpg");
    image.setAttribute("id","edit-logo");
    image.setAttribute("onclick","edititem(this)")
    

    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(image2);
    tr.appendChild(image);



    var line=document.getElementById("list");
    line.appendChild(tr);
    naam.value="";
    num.value="";
    count++;
   
}
function removeobject(){
    var line=document.getElementById("list");
    line.remove();
}

function removeitem(touseef){
    touseef.parentNode.remove();
    console.log(touseef.parentNode)
}

function edititem(touseef){
    var name=prompt("Enter Name");
    var rank=+prompt("Enter Rank");
    touseef.parentNode.firstChild.innerHTML=name;
    touseef.parentNode.childNodes[1].innerHTML=rank;
    console.log(touseef.parentNode.firstChild.innerHTML);
    console.log(touseef.parentNode.childNodes[1].innerHTML);
}
