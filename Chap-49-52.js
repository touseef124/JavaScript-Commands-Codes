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