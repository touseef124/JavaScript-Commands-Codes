var a=+prompt("Please Enter value:");
var b=+prompt("Please Enter Power:");
alert("'a' raise to power 'b' is:"+powerto(a,b));
function powerto(a,b){
    return Math.pow(a,b);
}




a=+prompt("Please Enter Year");
if(a%4 === 0)
{
    alert("year is leap year")
}
else{
    alert("not-Leap")
}




var a=+prompt("Please Enter Lenght os side 'a' :");
var b=+prompt("Please Enter Lenght os side 'b' :");
var c=+prompt("Please Enter Lenght os side 'c' :");
alert("Area of The triangle is: "+area(a,b,c));
function s(a,b,c){
    return ((a+b+c)/2);
}
function area(a,b,c){
    var Sub=s(a,b,c);
    return (Sub*(Sub-a)*(Sub-b)*(Sub-c));
}





var marks=[];
var subject=["maths","physics","chemistry"];
for(i=0;i<3;i++)
{
    Math.round(marks[i]=+prompt("Enter Marks For Subject "+subject[i]+":"));
}
var avrg=average(marks)
var percen=percentage(marks)
alert("The Average marks For All Subjects Are:"+avrg+"\nTotal Percentage: "+percen);

function average(num){
    //document.write(num);
    var temp=0;
    for(j=0;j<num.length;j++)
    {
        temp=temp+num[j];
    }
    return Math.ceil(temp/num.length);
}
function percentage(num){
    var temp=0;
    for(j=0;j<num.length;j++)
    {
        temp=temp+num[j];
    }
    var per=((temp/300)*100);
    return Math.ceil(per);
}







var name="tauseef ahmed ansari";
var indexnumber=indexfinder(name,"f")
alert("letter found at index no "+indexnumber);
function indexfinder(name,cha){
    var indexnumber;
    for(i=0;i<name.length;i++)
    {
        if(name[i]===cha)
        {
            indexnumber=i;
            break;
        }
    }
    return indexnumber;
}




var distance=+prompt("enter distance in KMs");
var choice=+prompt("In which scale you want the distance: Press \n 1 for Meter , \n 2 for  Foot ,  \n 3 for Inches ,  \n 4 for Centi-meters")
switch(choice)
{   
    case"1":
        meter(distance);
        break;
    case'2':
        foot(distance);
        break;
    case"3":
        inches(distance);
        break;
    case'4':
        centi(distance);
        break;
        
}
function meter(dis){
    alert("distance in Meters: "+(dis*1000));
}   
function foot(dis){
    alert("distance in Foots: "+(dis*3.25));
}
function centi(dis){
    alert("distance in Centi-Meters: "+(dis*100));
}
function inches(dis){
    alert("distance in Inches: "+(dis*39));
}




var hour=+prompt("Enter Overtime Hours");
alert("Total Overtime Pay is Rs= "+overtime(hour));
function overtime(hour){
    return (hour*12);
}



var amount=+prompt("Enter your Amount:");
var fivethousand=0;
var thousand=0;
var fivehundred=0;
var hundred=0;
var fifty=0;
var twenty=0;
var ten=0;
var rupees=amount;
value(amount);

function value(amount){
    do{
    if(amount>=5000)
    {
        fivethousand++;
        amount=amount-5000;
    }
    else if(amount<5000 && amount>=1000)
    {
        thousand++;
        amount=amount-1000;
    }
    else if(amount<1000 && amount>=500)
    {
        fivehundred++;
        amount=amount-500;
    }
    else if(amount<500 && amount>=100)
    {
        hundred++;
        amount=amount-100;
    }
    else if(amount<100 && amount>=50)
    {
        fifty++;
        amount=amount-50;
    }
    else if(amount<50 && amount>=20)
    {
        twenty++;
        amount=amount-20;
    }
    else if(amount<20 && amount>=10)
    {
        ten++;
        amount=amount-10;
    }
   }while(amount>10);
}
document.write("you will have ")

if(fivethousand>0)
{
    document.write(fivethousand+" fivethousand notes ");
    amount=amount+5000;
}
else{

}
if(thousand>0)
{
    document.write(thousand+" thousand notes ");
    amount=amount+1000;
}
else{}
if(fivehundred>0)
{
    document.write(fivehundred+" fivehundred notes ");
    amount=amount+500;
}
else{}
if(hundred>0)
{
    document.write(hundred+" hundred notes ");
    amount=amount+100;
}
else{

} 
if(fifty>0)
{
    document.write(fifty+" fifty notes ");
    amount=amount+50;
}
else{}
 if(twenty>0)
{
    document.write(twenty+" twenty notes ");
    amount=amount+20;
}
else{}
 if(ten>0)
{
    document.write(ten+" ten notes ");
    amount=amount+10;
}
else{}





