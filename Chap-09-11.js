var city=prompt("Please enter your city name");
if(city==="karachi")
{
    alert("Welcome to city of lights");
}
else
{
    alert("Welcome to "+city);
}

var gender=prompt("Please enter gender");
if(gender==="male")
{
    alert("Welcome Sir");
}
else if(gender==="female")
{
    alert("Welcome Ma'am");
}


var light=prompt("Please enter light colour (red , green , yellow)");
if(light==="red")
{
    alert("Must Stop");
}
else if(light==="green")
{
    alert("Move now");
}
else if(light==="yellow")
{
    alert("ready to move now");
}

var fuel=prompt("Please enter remainig fuel Liters ??");
if(fuel<=0.25)
{
    alert("Please refill the fuel in your car");
}
else
{
    alert("you have enough feul to the next station");
}



var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat"){
    alert("car is smaller than cat");
}
    
var subject=[];
var mark=[];
var obtain=+0;
var grade=+0;
var remarks;
for(i=1;i<=3;i++)
{
    subject[i]=prompt("enter subject "+i);
    mark[i]=+prompt("enter marks "+i);
    obtain=obtain+mark[i];

}
var total=+300;
var percentage=((obtain/total)*100);
if (percentage>=80)
{
    grade="A+"
    remarks="Excellent.";
}
else if (percentage<80 && percentage>=70)
{
    grade="A";
    remarks="Well Done.";
}
else if (percentage<70 && percentage>=60)
{
    grade="B";
    remarks="Good.";
}
else if (percentage<60)
{
    grade="fail";
    remarks="Need Much Improvment.";
}

document.write("<br />Total Marks: "+total);
document.write("<br />Obtain Marks: "+obtain);
document.write("<br />Passing Percentage: "+percentage);
document.write("<br />Grade: "+grade);
document.write("<br />Remarks: "+remarks);
console.log(mark);


var number=+5;
var guess=+prompt("Please guess one number:");
if (guess===number)
{
    alert("Bingo right number.");
}
else if(guess===--number || guess===++number)
{
    alert("Close enough to the correct answer.");
}
else
{
    alert("Wrong Guess.");
}


var check=+prompt("Please enter a number to check it's divisible by 3 or not");
if (check%3===0)
{
    alert("Bingo Number is Divisible by 3");
}
else{
    alert("Try Another Numnber");
}

var evenodd=+prompt("Please enter a number to check Even | Odd");
if (evenodd%2===0)
{
    alert("Even Number");
}
else{
    alert("Odd Number");
}



var temp=+prompt("please enter temperature");
if (temp>=40)
{
    alert("“It is too hot outside.");
}
else if(temp<40 && temp>=30)
{
    alert("The Weather today is Normal");
}
else if(temp<30 && temp>=20)
{
    alert("Today’s Weather is cool.");
}
else if(temp<=10)
{
    alert("OMG! Today’s weather is so Cool");
}

var a=+prompt("Enter First Value");
var b=+prompt("Enter Secenod Value");
var opp=prompt("Enter Operation + - / * %");
if (opp==="+")
{
    alert("Sum is "+(a+b));
}
else if (opp==="-")
{
    alert("Subtraction is "+(a-b));
}
else if (opp==="/")
{
    alert("Division is "+(a/b));
}
else if (opp==="*")
{
    alert("Sum is "+(a*b));
}
else if (opp==="%")
{
    var rem=a%b;
    alert("Sum is "+rem);
}
