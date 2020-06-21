
var date=new Date();
document.write(date);

var month=date.getMonth();
document.write("<br>stands for june: "+month);


var b=date.toString();
var c=b.slice(0,3);
alert("Today is "+c);

var ali=new Date();
var kali=ali.toString();
var shazi=kali.slice(0,3);
if(shazi==="Sat" || shazi==="Sun")
{
    alert("today is Fun day");
}
else{
    alert("working day");
}



var today=ali.getDate();
if(today>=16)
{
    alert("Last Days Of Month");
}
else
{
    alert("Starting Fifteen days of Month");
}


var singlezamana=new Date();
document.write("Current date:  "+singlezamana);
var girlfriend=singlezamana.getTime();
document.write("<br>Seconds from 1970: "+girlfriend);
var Breakup=(girlfriend/(1000*60*60));
document.write("<br>Minutes from 1970: "+Breakup);


var aj=new Date();
var time=aj.getHours();
//time=(time/(1000*60*60));
if(time<=12){
    alert("It's "+time+" PM");
}
else{
    alert("It's "+time+" PM");
}


var lastdate=new Date("Dec 31, 1997 23:59:59");
alert(lastdate);


var ramzan=new Date("June 18, 2015");
var time1=ramzan.getTime();
var now=new Date();
var time2=now.getTime();

var diff=time2-time1;
var days=(diff/(1000*60*60*24));
days=Math.floor(days);
alert("Days Till Ramzan June 18, 2015 :   "+days);



var ref=new Date("Dec 5, 2015 22:50:16");
var reftime=ref.getTime();
var bigin=new Date("Jan 1, 2015");
var begintime=bigin.getTime();
diff=Math.floor(((reftime-begintime)/(1000*60)));
document.write("Seconds Passed from Begining of 2015 till June 18, 2015 :   "+diff);


var curr=new Date();
document.write("Curent Date:   "+curr);
alert(curr.getHours());
var time=(curr.getHours()+1);
alert(time);
curr.setHours(time);
document.write("<br>1 Hour ago ,it was "+curr);




var current=new Date();
document.write("Curent Date:   "+current);
alert(current.getFullYear());
var year=(current.getFullYear()-100);
alert(year);
current.setFullYear(year);
document.write("<br>100 years back  ,it was "+current);



var yourage=+prompt("Enter Your Age");
var today=new Date();
var year=today.getFullYear();
var byear=year-yourage-1;
alert("Your BirthYear Is : "+byear);



var cname="Tauseef Ahmed Ansari";
var cmonth="June";
var nofunits=+190;
var perunit=+14.7;
var netamount=nofunits*perunit;
var charges=+365;
var grossamount=+netamount+charges;
document.write("<br>Customer Name: "+cname+"<br>Current Month: "+cmonth+"<br> Number of units: "+nofunits+"<br> Charges per unit: "+perunit+"<br><br> Net Amount Payable (within Due Date): "+netamount+"<br> Late Payment Surcharge: "+charges+"<br>Gross Amount Payable (after Due Date): "+grossamount)



var a = new Date();
document.write("<br>"+a);
var totaltime=a.getTime();
document.write("<br>Milliseconds from 1970:  "+totaltime);
var mybirth=new Date("Oct 20, 1997");
var birthtime=mybirth.getTime();
document.write("<br>Miliseconds from my date of birth:  "+birthtime);
var diff=totaltime-birthtime;
var currentage=(diff/(1000*60*60*24*365));
var currentage=Math.floor(currentage);
document.write("<br>My Age:  "+currentage);


