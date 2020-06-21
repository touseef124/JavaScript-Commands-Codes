var firstname=prompt("Enter First Name:");
var lastname=prompt("Enter First Name:");
var fullname=firstname+" "+lastname;
alert("Hello "+fullname);



var mobile=prompt("Enter you trustfull mobile model-brand");
var l=mobile.length;
alert("favourite mobile phone is "+mobile+" \nlength of string "+l);



 var country="pakistan";
 var word=prompt("Which letter's index number you want to know in Pakistan");
 for (i=0;i<=country.length;i++)
 {
     if (country[i]===word)
     {
         alert("Character "+word+" is present at index: "+i);
        break;
     }
 }


var str="Hello World";
for(i=0;i<=str.length;i++)
{
    if(str[i]==="l")
    {
        var indexno=i;
    }
}

alert("Last index of L is: "+indexno+" in Hello World");




var country="pakistani";
var index=prompt("Which index letter you want to know in Pakistani");
var char=country[index];
alert("Character at index no "+index+" is: "+char+" in pakistani");
       


var firstname=prompt("Enter First Name:");
var lastname=prompt("Enter First Name:");
var fullname=firstname.concat(" ",lastname);
alert("Hello "+fullname);

var city="hyderabad";
var rep=city.replace("hyder","islam");
alert(city+" "+rep);



var message = "Ali and Sami are best friends. They play cricket and football together.";
document.write(message+"<br>");
message=message.replace(/and/g,"&");
document.write(message);


var num2="472";
var num2=parseInt(num2);
alert(num2*2+"string is converted into intiger");




var dryfruit=prompt("Enter any word");
dryfruit=dryfruit.charAt(0).toUpperCase() +dryfruit.substr(1).toLowerCase();
alert(dryfruit+"converted to title");

var num3=35.46;
num3=num3.toString();
alert(num3+" converted to string");
var newnum3=num3.replace(".","");
alert(newnum3+" Dot is Removed");



do{    
var name=prompt("Enter valid name");
var check=true;
for(i=0;i<=name.length-1;i++)
{
    if (name[i]==="@" || name[i]==="." || name[i]==="," || name[i]==="!")
    {
        check=false;
    }
}

}while(check==false);
alert(name+" "+check);



var bakery=["cake","applepie","cookie","chips","patties"];
    var choice=prompt("welcome to ansari bakery! what do you want to order sir/ma'am:\n"+bakery);
    choice=choice.toLowerCase();
    for(i=0;i<=4;i++)
    {
        if(choice===bakery[i])
        {
            alert(choice+" is available at index "+i+" in our bakery\n");
            break;
        }
        else if(i===4)
        {
            alert("We are sorry, "+choice+" is not available in our bakery");
        }
    }



    

do
{
var pass=prompt("Enter a password:\nyour password must have more then 6 characters","e.g abc123##");
var l=pass.length;
var check1=false;
var check2=false;
if (pass.length<=6)
{
    do
    {
    var pass=prompt("Password is too short Enter a new one:\nyour password must have more then 6 characters","e.g abc123##");
    }while(pass.length<=6);
}
var num=pass[0].charCodeAt();
if (num<=57 && num>=48)
{
    do
    {
        var pass=prompt("Incorrect password Number is not allowed at the start\n Enter new password more then 6 characters","e.g abc123##");
        num=pass[0].charCodeAt();
    }while((num<=57 && num>=48) && pass.length<=6);
}

for(i=0;i<=pass.length-1;i++)
{
    var ascii=pass[i].charCodeAt();

    if (check1==false && ascii<=91 && ascii>=64)
    {
     check1=true;
    }
    if(check1==false && ascii<=122 && ascii>=97)
    {
        check1=true;
    }
}

for(i=0;i<=pass.length-1;i++)
{
    var ascii=pass[i].charCodeAt();
    if (ascii<=57 && ascii>=48)
    {
     check2=true;
     break;
    }
}

if(check1==true && check2==true)
{
    alert("Password Succesfull");
}
}while(check1==false || check2==false);




var uni="University of karachi";
var arr1=uni.split(", ");
document.write(arr1);





var country="pakistan";
document.write("country name: "+country+"<br>Last Alphabet: "+country[country.length-1]);




var str="The quick brown fox jumps over The lazy dog";
var count=0;
var number1=str.indexof("The");
var number2=str.indexOf("the");
if(number1!=undefined)
{
    count++;
}

if(number2!=undefined)
{
    count++;
}

document.write("first occurance at index: "+number1+"<br>second occurance at index:  "+number2+"<br>total occurances "+count);

