var element=document.getElementById("main-content");
var childs=element.childNodes;
for(i=0;i<childs.length;i++){
    document.write("<br>"+element.childNodes[i].nodeName);
    
}

document.write("<br><br><br>");

var rander=document.getElementById("main-content");
var para=rander.getElementsByTagName("p");
for(i=0;i<para.length;i++)
{
    var dialouge=para[i].innerHTML;
    document.write("<br>"+dialouge)
}

document.write("<br><br><br>");

var firstname=document.getElementById("first-name");
firstname.value="tauseef";
var lastname=document.getElementById("last-name");
lastname.value="ansari";
var email=document.getElementById("email");
email.value="touseefansari@gmail.com";



var type=document.getElementById("form-content");
document.write("<br> type of element id form-content" +type.nodeType);

var type=document.getElementById("lastName");
document.write("<br> type of element id lastName"+type.nodeType);


var first=document.getElementById("main-content");
document.write("<br>first child of id main-content"+ first.firstChild);

var first=document.getElementById("main-content");
document.write("<br>last child of id main-content"+ first.lastChild);

var type=document.getElementById("lastName");
document.write("<br> previous element then lastName"+type.previousSibling);

var type=document.getElementById("lastName");
document.write("<br> next element then lastName"+type.nextSibling);



var type=document.getElementById("email");
document.write("<br> parent element of id email"+type.parentNode);
document.write("<br> type of element id email    "+type.nodeType);

