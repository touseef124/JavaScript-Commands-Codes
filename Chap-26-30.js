
var value=3.45214;
var value1=Math.round(value);
var value2=Math.ceil(value);
var value3=Math.floor(value);

document.write("value: "+value+"<br>Roundof value: "+value1+"<br>Ceil value: "+value2+"<br>Floor value: "+value3)


var value=prompt("Enter nagative value");
var value4=Math.round(value);
var value5=Math.ceil(value);
var value6=Math.floor(value);

document.write("value: "+value+"<br>Roundof value: "+value4+"<br>Ceil value: "+value5+"<br>Floor value: "+value6);


var value=prompt("Enter value find modulus");
var value7=Math.abs(value);
document.write("value : " +value+" <br>Modulus value: "+value7);



var avai=Math.random();
var avai=(avai*6)+1;
var avai=Math.floor(avai);
alert("The dice Rolled at Number: "+avai);



var avaig=Math.random();
var avaig=(avaig*2)+1;
var avaig=Math.floor(avaig);
if (avaig===2)
{
    alert("The Coin Rolled at: Head   "+avaig);
}
if (avaig===1)
{
    alert("The Coin Rolled at: Tail   "+avaig);
}


var avai=Math.random();
var avai=(avai*100)+1;
var avai=Math.floor(avai);
alert("Random no between 1 & 100 is:   "+avai);


var age=prompt("Enter Your age:");
var vage=parseInt(age);
alert("User's Weight is: "+vage+"kilograms");



var ram=Math.random();
var ram=(ram*10)+1;
var ram=Math.floor(ram);
var choice=+prompt("Enter any Number 1-10:");
if(ram===choice){
    alert("Contracts chity");
}
else{
    alert("try again\nright number is :  "+ram);
}



