var c=prompt("please enter a single character of number");
var ascii=c.charCodeAt();
if(ascii<=91 && ascii>=64)
{
    alert("Character is Uppercase alphebet");
}
else if(ascii<=122 && ascii>=97)
{
    alert("Character is Lowercase alphebet");
}
else if(ascii<=57 && ascii>=48)
{
    alert("Character is Number");
}

var a=+prompt("please enter first num");
var b=+prompt("please enter second num");
if (a===b)
{
    alert("numbers are equel");
}
else if(a>b)
{
    alert("First value is greater then second");
}
else{
    alert("second value is greater then first")
}


var pos=+prompt("please enter a number");
if(pos<0)
{
    alert("Value is nagative");
}
else
{
    alert("value is positive")
}

var char=prompt("enter a character:");
if (char==='a' || char==='e' || char==='i' || char==='o' || char==='u' || char==='A' || char==='E' || char==='I' || char==='O' || char==='U')
{
    alert("True: enter character is a vowel");
}
else{
    alert("False");
}


var pass=prompt("enter password");
var conf=prompt("Confirm password again");
if (pass==conf)
{
    alert("correct");
}
else{
    alert("retry password");
}

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";}
else{
greeting = "Good evening";
}
