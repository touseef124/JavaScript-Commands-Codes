function currentdate(){
    var curr=new Date();
    document.write(curr);
}
currentdate();



function greeting(){
    var firstname=prompt("Enter First Name:");
    var lastname=prompt("Enter Last Name:");
    alert("Hello "+firstname+" "+lastname);
}
greeting();


function add(a,b){
    var c=a+b;
    return c;
}
var a=+prompt("Enter first value:");
var b=+prompt("Enter second value:");
alert("Sum is: "+add(a,b));



function calculator(a,b,opp){
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
}
var a=+prompt("Enter First Value");
var b=+prompt("Enter Secenod Value");
var opp=prompt("Enter Operation + - / * %");
calculator(a,b,opp);



function square(a){
    var c=a*a;
    return c;
}
var value=+prompt("Enter Value:");
alert(square("Square of value: "+value));



function factorial(a){
var fact=1;
for(i=1;i<=a;i++)
{
    fact=fact*i;
}    
return fact;
}
var fac=+prompt("Enter value for factorial:");
alert("Fcatorial Of Value is: "+factorial(fac));



function counting(a,b){
    for(i=a;i<=b;i++)
    {
        document.write(i+" ");
    }
}
var start=+prompt("Enter Start of Counting");
var end=+prompt("Enter End of Counting");
counting(start,end);



function square(a){
    return (a*a);
}
function hypo(b,p){
    hypotenus=Math.sqrt(square(b)+square(p));
    return hypotenus;
}
var base=+prompt("Enter Triangle's Base");
var Perpendiculer=+prompt("Enter Triangle's Perpendiculer");
alert("Hypotenus is: "+hypo(base,Perpendiculer));




function area(a,b){
    return (a*b);
}
var width=+prompt("Enter Width:");
var height=+prompt("Enter height:");
alert("Area is: "+area(width,height));




function reverseString(str) {
    var strr=str.split("").reverse().join("");
    if(str===strr)
    {
        alert("String is Palendrom");
    }
    else{
        alert("String is not Palendrom");
    }
}
var str=prompt("Enter string to check Palendrom");
reverseString(str);




function area(radius){
    var area=(Math.PI)*(radius*radius);
    return area;
}
function circumfarence(radius){
    var cir=2*(Math.PI)*radius;
    return cir;
}
var rad=+prompt("Enter Radius:");
var choice=+prompt("Enter 1 For Area\nEnter 2 For Ciscumfarence");
switch(choice)
{
    case 1:
        alert(area(rad));
        break;
    case 2:
        alert(circumfarence(rad));
        break;
}