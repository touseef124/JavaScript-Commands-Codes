var a=+prompt("Enter First Value");
var b=+prompt("Enter Second value");
var add=a+b;
var sub=a-b;
var mul= a*b;
var div=a/b;
var moda=Math.abs(a);
var modb=Math.abs(b);

document.write("The Sum of "+a+" and "+b+" is "+add);
document.write("<br />The Subtraction of "+a+" and "+b+" is "+sub);
document.write("<br />The division of "+a+" and "+b+" is "+div);
document.write("<br />The multipication of "+a+" and "+b+" is "+mul);
document.write("<br />The Modulus of "+a+" is "+moda);
document.write("<br />The Modulus of "+b+" is "+modb);


var ali;
document.write("<br /><br />Value after variable declaration is: "+ali);
ali = 10;
document.write("<br />Initial value: "+ali);
ali++;
document.write("<br />Value after increment is: "+ali);
ali=ali+7;
document.write("<br />value after addition of 7: "+ali);
ali--;
document.write("<br />Value after decrement is: "+ali);
var reminder=ali%3;

document.write("<br />Reminder of variable by 3: "+reminder)

var num=+prompt("Price for one ticket is 700(PKR) how many tickets you want");
document.write("<br /><br /><br />Total cost for "+num+" tickets: "+num*700)



var table=+13;
for(i=1;i<=10;i++)
{
    document.write("<br />"+table+"*"+i+"="+table*i);
}

var celcius1 =+37;
var farhen1=(celcius1*(9/5))+32;
var farhen2 =+103;
var celcius2=(farhen2-32)*(5/9);

document.write("<br /><br />"+celcius1+" celcius in farhenhide is: "+farhen1+"F");
document.write("<br />"+farhen2+" farhenhide in celcius is: "+celcius2+"C");


document.write("<br /><br />price of item 1: Rs=700");
document.write("<br />Quantity of item 1: 3");
document.write("<br />price of item 2: Rs=200");
document.write("<br />Quantity of item 2: 1");
document.write("<br />Delivery Charges: Rs=100");

document.write("<br /><br />Total Cost: "+((3*700)+(1*200)+100));

var totalmarks=+700;
var obtained=+600;
document.write("<br /><br />Total Marks: "+totalmarks);
document.write("<br />Obtained by Tauseef: "+obtained);
document.write("<br />Overall Percntege is: "+((obtained/totalmarks)*100));

var totalcurrency=+((10*104.80)+(25*28));
document.write("<br /><br />Total currency is Rs: "+totalcurrency);

var basit=+2;
document.write("<br /><br />real value: "+basit);
basit=((basit+5)*10)/2;
document.write("<br />value after addition of 5 mulply by 10 and divided by 2 is: "+basit);

var curryear=+2020;
document.write("<br /><br />Current Year: "+curryear);
var birthyear=+1997;
document.write("<br />Birth Year: "+birthyear);
var ownerage=curryear-birthyear;
document.write("<br />Your Age: "+ownerage);


var radius=+23;
document.write("<br /><br />Radius of circle is: "+radius+" cm");
var sircumfarence=(2*3.142)*radius;
document.write("<br />Circumfarence is: "+sircumfarence+" cm");
var area=(3.142*Math.sqrt(radius));
document.write("<br />Area of Circle is: "+area+"cm-square");


var snack="samosa";
var age =+22;
var maxage=+50;
var snackperday=+1
var numbersnack=(50-22)*365;
document.write("<br /><br />Favourite Snack: "+snack+"<br />Current age: "+age+"<br />Expected Max-age: "+maxage+"<br />Snacks per day: "+snackperday);
document.write("<br />you may eat "+numbersnack+" samosa's in your life");