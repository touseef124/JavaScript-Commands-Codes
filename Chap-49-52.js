function display(){
    var name=document.getElementById("name");
    var username=document.getElementById("username");
    var email=document.getElementById("email");
    var password=document.getElementById("password");

    document.write("<br/>Name:    "+name.value);
    document.write("<br/>User-name:    "+username.value);
    document.write("<br/>Email:    "+email.value);
    document.write("<br/>Pasword:    "+password.value);
}


function detailed(){
    var detail=document.getElementById("para");
    detail.innerHTML="A gun is a weapon designed to pneumatically discharge solid projectiles[1] but can also be liquid (as in water guns/cannons and projected water disruptors) or even charged particles (as in a plasma gun) and may be free-flying (as with bullets and artillery shells) or tethered (as with Taser guns, spearguns and harpoon guns)<br/>The means of projectile propulsion vary according to designs, but are traditionally effected by a high gas pressure contained within a shooting tube (gun barrel), produced either through the rapid combustion of propellants (as with firearms), or by mechanical compression (as with air guns). The high-pressure gas is introduced behind the projectile, accelerating it down the length of the tube, imparting sufficient launch velocity to sustain its further travel towards the target once the propelling gas ceases acting upon it at the end of the tube. Alternatively, acceleration via electromagnetic field generation may be employed, in which case the shooting tube may be substituted by guide rails (as in railguns) or wrapped with magnetic coils (as in coilguns).";
}
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
